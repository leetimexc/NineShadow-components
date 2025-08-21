<template>
  <ns-space dir="vertical">
    <ns-input-number v-model="number" style="width: 300px"></ns-input-number>
    <ns-input-number
      :model-value="6"
      style="width: 300px"
      disabled
    ></ns-input-number>
  </ns-space>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const number = ref(6)
</script>
