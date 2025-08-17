<template>
  <ns-radio-group v-model="radio" disabled>
    <ns-radio value="love">Love</ns-radio>
    <ns-radio value="and">And</ns-radio>
    <ns-radio value="peace">Peace</ns-radio>
  </ns-radio-group>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const radio = ref('')
</script>
