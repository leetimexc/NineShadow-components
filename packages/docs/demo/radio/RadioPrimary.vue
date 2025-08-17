<template>
  <ns-space dir="vertical">
    <ns-radio v-model="radio" value="1">单选框</ns-radio>
    <ns-radio v-model="radio" value="1" :disabled="true">禁用</ns-radio>
  </ns-space>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const radio = ref('')
</script>
