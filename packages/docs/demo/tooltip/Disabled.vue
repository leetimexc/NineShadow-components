<script lang="ts" setup>
import { ref } from "vue";

const disabled = ref(false);
</script>

<template>
  <ns-tooltip
    :disabled="disabled"
    content="click to close tooltip function"
    placement="bottom"
  >
    <ns-button @click="disabled = !disabled"
      >click to {{ disabled ? "active" : "close" }} tooltip function</ns-button
    >
  </ns-tooltip>
</template>
