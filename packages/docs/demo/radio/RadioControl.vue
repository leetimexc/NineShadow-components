<template>
  <ns-space dir="vertical">
    <ns-radio v-model="radioValue" :value="active">选框</ns-radio>
    <ns-button @click="handleChange">切换状态</ns-button>
  </ns-space>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const active = ref(true)
const radioValue = ref(false)
const handleChange = () => {
  radioValue.value = !radioValue.value
}
</script>
