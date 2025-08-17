<template>
  <label
    :class="[
      'ns-radio',
      `ns-radio--${type}`,
      { 'ns-radio--disabled': disabled, 'ns-radio--solid': solid },
    ]"
    role="radio"
  >
    <input
      v-model="modelValue"
      type="radio"
      :value="value"
      :disabled="disabled"
      @change="handleChange"
    />
    <span
      v-if="type === 'radio'"
      :class="[
        'ns-radio__box',
        {
          'ns-radio__box--checked': isChecked,
          'ns-radio__box--disabled': disabled,
          'ns-radio__box--shadow': !isChecked && !disabled,
        },
      ]"
    >
      <span
        :class="[
          'ns-radio__inner',
          {
            'ns-radio__inner--checked': isChecked,
            'ns-radio__inner--disabled': disabled,
          },
        ]"
      ></span>
    </span>
    <span
      :class="[
        'ns-radio__label',
        `ns-radio__label--${size}`,
        {
          'ns-radio__label--disabled': disabled,
          'ns-radio__label--checked': isChecked,
        },
      ]"
    >
      <slot />
    </span>
  </label>
</template>

<script setup lang="ts">
import type { RadioProps } from './types'
import { radioEmits } from './types'
import { computed, nextTick } from 'vue'
import { useRadio } from './useRadio'
// 移除 import { createCssScope } from '../../utils'
import { CHANGE_EVENT } from './constants'

defineOptions({ name: 'NsRadio' })

// 移除 const bem = createCssScope('radio')
const emits = defineEmits(radioEmits)
const props = withDefaults(defineProps<RadioProps>(), {
  solid: false,
  type: 'radio',
  size: 'l',
})

const { modelValue, disabled, type, size, solid } = useRadio(props, emits)

const isChecked = computed<boolean>(() => modelValue.value === props.value)

const handleChange = () => {
  nextTick(() => emits(CHANGE_EVENT, modelValue.value))
}
</script>
<style scoped>
@import './style.css';
</style>
