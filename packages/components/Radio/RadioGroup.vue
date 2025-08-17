<template>
  <ns-space
    v-if="type === 'radio'"
    :dir="direction"
    :size="mergedSize"
    :type="type"
    :class="[
      'ns-radio-group',
      `ns-radio-group--${type}`,
      `ns-radio-group--${mergedSize}`,
      `ns-radio-group--${direction}`,
    ]"
  >
    <slot />
  </ns-space>
  <div
    v-else
    :class="[
      'ns-radio-group',
      `ns-radio-group--${type}`,
      `ns-radio-group--${mergedSize}`,
      { 'ns-radio-group--solid': solid },
    ]"
  >
    <div
      :class="[
        'ns-radio-group__container',
        `ns-radio-group__container--${mergedSize}`,
      ]"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, nextTick, provide, reactive, toRefs } from 'vue'
import type { RadioGroupProps } from './types'
import { radioGroupEmits } from './types'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT, provideKey } from './constants.ts'
import NsSpace from '../Space/Space.vue'

// 移除 import { FormItemContext, formItemContextKey } from '../Form'

defineOptions({
  name: 'NsRadioGroup',
})

const emits = defineEmits(radioGroupEmits)
const props = withDefaults(defineProps<RadioGroupProps>(), {
  direction: 'horizontal',
  type: 'radio',
  size: 'l',
  solid: false,
})

const { size, disabled } = toRefs(props)

// 注入FormItem上下文，与Checkbox组件保持一致的风格
const formItemCtx = inject('ns-form-item', undefined)

// 计算属性
const mergedSize = computed(() => formItemCtx?.size || size?.value)
const mergedDisabled = computed(() => disabled?.value || formItemCtx?.disabled)

const changeEvent = (value: RadioGroupProps['modelValue']): void => {
  emits(UPDATE_MODEL_EVENT, value)
  nextTick(() => emits(CHANGE_EVENT, value))
}

provide(
  provideKey,
  reactive({
    ...toRefs(props),
    disabled: mergedDisabled,
    changeEvent,
  })
)
</script>

<style scoped>
@import './style.css';
</style>
