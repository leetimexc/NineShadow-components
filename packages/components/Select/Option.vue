<script setup lang="ts">
import type { SelectOptionProps } from './types'

import { RenderVnode } from '@shadow-ui/utils'
import { computed, inject } from 'vue'
import { eq, every, get } from 'lodash-es'
import { SELECT_CTX_KEY } from './constants'

defineOptions({ name: 'ErOption' })
const props = withDefaults(defineProps<SelectOptionProps>(), {
  disabled: false,
})
const ctx = inject(SELECT_CTX_KEY)
const selected = computed(
  () => ctx?.selectStates.selectedOption?.value === props.value
)
const isHighlighted = computed(() =>
  every(['label', 'value'], (key) =>
    eq(get(ctx, ['highlightedLine', 'value', key]), get(props, key))
  )
)

function handleClick() {
  if (props.disabled) return
  ctx?.handleSelect(props)
}
</script>

<template>
  <li
    class="xc-select__menu-item"
    :class="{
      'is-disabled': disabled,
      'is-selected': selected,
      'is-highlighted': isHighlighted,
    }"
    :id="`select-item-${value}`"
    @click.stop="handleClick"
  >
    <slot>
      <render-vnode
        :vNode="ctx?.renderLabel ? ctx?.renderLabel(props) : label"
      />
    </slot>
  </li>
</template>

<style scoped>
@import './style.css';
</style>
