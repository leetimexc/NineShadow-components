<template>
  <component
    :is="tag"
    class="ns-text"
    :class="{
      [`ns-text--${type}`]: type,
      'ns-text--mark': mark,
      'ns-text--strong': strong,
      'ns-text--underline': underline,
      'ns-text--del': del,
      [`ns-text--${tag}`]: tag !== 'span',
    }"
  >
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import type { textProps } from './types'

defineOptions({
  name: 'NsText',
})

// prettier-ignore
const props = withDefaults(
  defineProps<textProps>(), 
  {
    mark: false,
    strong: false,
    underline: false,
    del: false,
  }
)

const tag = props.tag || 'span'
const { type } = props
</script>
<style scoped>
@import './style.css';
</style>
