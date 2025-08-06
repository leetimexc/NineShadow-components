<script setup lang="ts">
import type { CheckboxButtonProps } from "./types";
import { ref, computed, inject, onMounted, watch } from "vue";
import { useId } from "@shadow-ui/hooks";
import { checkboxGroupContextKey } from "./types";

defineOptions({ name: "NsCheckboxButton", inheritAttrs: false });

const props = withDefaults(defineProps<CheckboxButtonProps>(), {
  disabled: false,
  checked: false,
  border: false,
});

// 注入CheckboxGroup上下文
const checkboxGroup = inject(checkboxGroupContextKey, undefined);

// 是否为组内的checkbox
const isGroup = computed(() => !!checkboxGroup);

// 计算禁用状态
const isDisabled = computed(() => {
  return isGroup.value
    ? checkboxGroup?.disabled.value || props.disabled
    : props.disabled;
});

// 计算尺寸
const checkboxSize = computed(() => {
  return isGroup.value ? checkboxGroup?.size.value : undefined;
});

// 输入元素引用
const inputRef = ref<HTMLInputElement>();
const inputId = useId().value;

// 计算是否选中
const isChecked = computed(() => {
  if (isGroup.value) {
    return (
      checkboxGroup?.modelValue.value.includes(props.label as never) ?? false
    );
  } else {
    return props.checked;
  }
});

// 计算样式
const buttonClasses = computed(() => {
  return {
    "is-disabled": isDisabled.value,
    "is-checked": isChecked.value,
    "is-bordered": props.border,
    [`ns-checkbox-button--${checkboxSize.value}`]: checkboxSize.value,
  };
});

// 计算样式
const buttonStyle = computed(() => {
  if (isChecked.value && isGroup.value) {
    return {
      backgroundColor: checkboxGroup?.fill?.value,
      borderColor: checkboxGroup?.fill?.value,
      color: checkboxGroup?.textColor?.value,
      boxShadow: `-1px 0 0 0 ${checkboxGroup?.fill?.value}`,
    };
  }
  return {};
});

// 处理变更事件
function handleChange() {
  if (isDisabled.value) return;

  if (isGroup.value && props.label !== undefined) {
    // 组内checkbox处理
    const index = checkboxGroup!.modelValue.value.indexOf(props.label as never);
    const values = [...checkboxGroup!.modelValue.value];

    if (index === -1) {
      // 检查是否超过最大数量限制
      if (
        checkboxGroup?.max?.value &&
        values.length >= checkboxGroup.max.value
      ) {
        return;
      }
      values.push(props.label as never);
    } else {
      // 检查是否低于最小数量限制
      if (
        checkboxGroup?.min?.value &&
        values.length <= checkboxGroup.min.value
      ) {
        return;
      }
      values.splice(index, 1);
    }

    checkboxGroup!.changeEvent(values);
  }
}

// 生命周期钩子
onMounted(() => {
  inputRef.value!.checked = isChecked.value;
});

// 监听选中状态变化
watch(isChecked, (val) => {
  inputRef.value!.checked = val;
});
</script>

<template>
  <label class="ns-checkbox-button" :class="buttonClasses" :style="buttonStyle">
    <input
      class="ns-checkbox-button__input"
      type="checkbox"
      ref="inputRef"
      :id="inputId"
      :name="name"
      :disabled="isDisabled"
      :checked="isChecked"
      @change="handleChange"
      @keydown.enter="handleChange"
    />
    <span class="ns-checkbox-button__inner" v-if="$slots.default || label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<style>
@import "./style.css";
</style>
