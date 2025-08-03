<script lang="ts" setup>
import { ref } from 'vue'

const disabled = ref(false)
</script>

<template>
  <xc-tooltip
    :disabled="disabled"
    content="click to close tooltip function"
    placement="bottom"
  >
    <xc-button @click="disabled = !disabled"
      >click to {{ disabled ? 'active' : 'close' }} tooltip function</xc-button
    >
  </xc-tooltip>
</template>
