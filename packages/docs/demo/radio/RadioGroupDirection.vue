<template>
  <ns-radio-group v-model="radio" direction="vertical" size="xl">
    {{ radio }}
    <ns-radio value="love">Love</ns-radio>
    <ns-radio value="and">And</ns-radio>
    <ns-radio value="peace" disabled>Peace</ns-radio>
  </ns-radio-group>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const radio = ref('love')
</script>
