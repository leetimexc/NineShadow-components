<template>
  <component
    :is="`h${level}`"
    class="ns-title"
    :class="{
      [`ns-title--${type}`]: type,
    }"
  >
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import type { titleProps } from './types'

defineOptions({ name: 'NsTitle' })

// prettier-ignore
const props = withDefaults(
  defineProps<titleProps>(), {
    level: 1,
  }
)

const { type } = props
</script>
<style scoped>
@import './style.css';
</style>
