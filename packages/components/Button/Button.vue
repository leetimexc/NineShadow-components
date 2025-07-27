<script lang="ts" setup>
import { ref, computed, inject } from 'vue'
import type { ButtonProps, ButtonEmits, ButtonInstance } from './types'
import { throttle } from 'lodash-es'
import { BUTTON_GROUP_CTX_KEY } from './constants'
import XcIcon from '../Icon/Icon.vue'

defineOptions({
  name: 'XcButton',
})
const props = withDefaults(defineProps<ButtonProps>(), {
  tag: 'button',
  nativeType: 'button',
  useThrottle: true,
  throttleDuration: 500,
})

const emits = defineEmits<ButtonEmits>()

const slots = defineSlots()
const ctx = inject(BUTTON_GROUP_CTX_KEY, void 0)
const _ref = ref<HTMLButtonElement>()
const size = computed(() => ctx?.size ?? props?.size ?? '')
const type = computed(() => ctx?.type ?? props?.type ?? '')
const disabled = computed(() => ctx?.disabled || props?.disabled || false)
const iconStyle = computed(() => ({
  marginRight: slots.default ? '6px' : '0px',
}))

const handleBtnClick = (e: MouseEvent) => emits('click', e)
const handleBtnClickThrottle = throttle(
  handleBtnClick,
  props.throttleDuration,
  { trailing: false }
)

defineExpose<ButtonInstance>({
  ref: _ref,
  disabled,
  size,
  type,
})
</script>
<template>
  <component
    ref="_ref"
    class="xc-button"
    :is="tag"
    :autofocus="autofocus"
    :type="tag === 'button' ? nativeType : void 0"
    :disabled="disabled || loading ? true : void 0"
    :class="{
      [`xc-button--${type}`]: true,
      [`xc-button--${size}`]: true,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading,
    }"
    @click="(e: MouseEvent) => useThrottle ? handleBtnClickThrottle(e) : handleBtnClick(e)"
  >
    <template v-if="loading">
      <slot name="loading">
        <XcIcon
          class="loading-icon"
          :icon="loadingIcon ?? 'spinner'"
          :style="iconStyle"
          size="1x"
          spin
        />
      </slot>
    </template>
    <XcIcon v-if="icon && !loading" :icon="icon" :style="iconStyle" size="1x" />
    <slot></slot>
  </component>
</template>
<style scoped>
@import './style.css';
</style>
