<script setup lang="ts">
import type { CheckboxProps, CheckboxEmits, CheckboxInstance } from './types'
import { ref, computed, inject, onMounted, watch } from 'vue'
import { useId } from '@shadow-ui/hooks'
import { checkboxGroupContextKey } from './types'

defineOptions({ name: 'XcCheckbox', inheritAttrs: false })

const props = withDefaults(defineProps<CheckboxProps>(), {
  modelValue: false,
  indeterminate: false,
  disabled: false,
  checked: false,
  border: false,
})

const emits = defineEmits<CheckboxEmits>()

// 注入CheckboxGroup上下文
const checkboxGroup = inject(checkboxGroupContextKey, undefined)

// 是否为组内的checkbox
const isGroup = computed(() => !!checkboxGroup)

// 计算禁用状态
const isDisabled = computed(() => {
  return isGroup.value
    ? checkboxGroup?.disabled.value || props.disabled
    : props.disabled
})

// 计算尺寸
const checkboxSize = computed(() => {
  return isGroup.value ? checkboxGroup?.size.value : props.size
})

// 内部值，用于双向绑定
const innerValue = ref(props.modelValue)

// 输入元素引用
const inputRef = ref<HTMLInputElement>()
const inputId = useId().value

// 计算是否选中
const isChecked = computed(() => {
  if (isGroup.value) {
    return (
      checkboxGroup?.modelValue.value.includes(props.label as never) ?? false
    )
  } else {
    return props.modelValue === props.trueLabel || props.modelValue === true
  }
})

// 计算样式
const checkboxClasses = computed(() => {
  return {
    'is-disabled': isDisabled.value,
    'is-checked': isChecked.value,
    'is-indeterminate': props.indeterminate,
    'is-bordered': props.border,
    [`xc-checkbox--${checkboxSize.value}`]: checkboxSize.value,
  }
})

// 聚焦方法
const focus: CheckboxInstance['focus'] = function () {
  inputRef.value?.focus()
}

// 处理变更事件
function handleChange() {
  if (isDisabled.value) return

  let newValue: any

  if (isGroup.value && props.label !== undefined) {
    // 组内checkbox处理
    const index = checkboxGroup!.modelValue.value.indexOf(props.label as never)
    const values = [...checkboxGroup!.modelValue.value]

    if (index === -1) {
      // 检查是否超过最大数量限制
      if (
        checkboxGroup?.max?.value &&
        values.length >= checkboxGroup.max.value
      ) {
        return
      }
      values.push(props.label as never)
    } else {
      // 检查是否低于最小数量限制
      if (
        checkboxGroup?.min?.value &&
        values.length <= checkboxGroup.min.value
      ) {
        return
      }
      values.splice(index, 1)
    }

    checkboxGroup!.changeEvent(values)
  } else {
    // 单独的checkbox处理
    newValue = props.trueLabel ?? true
    if (isChecked.value) {
      newValue = props.falseLabel ?? false
    }

    innerValue.value = newValue
    emits('update:modelValue', newValue)
    emits('change', newValue)
  }
}

// 生命周期钩子
onMounted(() => {
  inputRef.value!.checked = isChecked.value
})

// 监听选中状态变化
watch(isChecked, (val) => {
  inputRef.value!.checked = val
})

// 暴露组件实例
defineExpose<CheckboxInstance>({
  checked: isChecked,
  isDisabled,
  focus,
})
</script>

<template>
  <div class="xc-checkbox" :class="checkboxClasses" @click="handleChange">
    <input
      class="xc-checkbox__input"
      type="checkbox"
      ref="inputRef"
      :id="inputId"
      :name="name"
      :disabled="isDisabled"
      :checked="isChecked"
      :indeterminate="indeterminate"
      @keydown.enter="handleChange"
    />
    <span class="xc-checkbox__inner"></span>
    <span class="xc-checkbox__label" v-if="$slots.default || label">
      <slot>{{ label }}</slot>
    </span>
  </div>
</template>

<style>
@import './style.css';
</style>
