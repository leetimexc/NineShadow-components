<template>
  <ns-space dir="vertical">
    <ns-input-number
      v-model="number"
      style="width: 300px"
      :formatter="priceFormatter"
    ></ns-input-number>
  </ns-space>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const number = ref(6)
const priceFormatter = (value: string) => {
  return value + ' 元'
}
</script>
