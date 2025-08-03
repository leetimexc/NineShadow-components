<script setup lang="ts">
import type {
  CheckboxGroupProps,
  CheckboxGroupEmits,
  CheckboxGroupContext,
} from './types'
import { ref, computed, provide } from 'vue'
import { checkboxGroupContextKey } from './types'

defineOptions({ name: 'XcCheckboxGroup', inheritAttrs: false })

const props = withDefaults(defineProps<CheckboxGroupProps>(), {
  modelValue: () => [],
  disabled: false,
})

const emits = defineEmits<CheckboxGroupEmits>()

// 内部值，用于双向绑定
const innerValue = ref(props.modelValue)

// 计算样式
const groupClasses = computed(() => {
  return {
    'is-disabled': props.disabled,
    [`xc-checkbox-group--${props.size}`]: props.size,
  }
})

// 处理变更事件
function handleChange(value: any[]) {
  innerValue.value = value
  emits('update:modelValue', value)
  emits('change', value)
}

// 提供上下文给子组件
provide<CheckboxGroupContext>(checkboxGroupContextKey, {
  modelValue: innerValue,
  changeEvent: handleChange,
  disabled: computed(() => props.disabled),
  size: computed(() => props.size),
  min: computed(() => props.min),
  max: computed(() => props.max),
  textColor: computed(() => props.textColor),
  fill: computed(() => props.fill),
})
</script>

<template>
  <div class="xc-checkbox-group" :class="groupClasses" role="group">
    <slot></slot>
  </div>
</template>

<style>
@import './style.css';
</style>
