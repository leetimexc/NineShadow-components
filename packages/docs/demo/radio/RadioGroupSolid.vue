<template>
  <ns-radio-group v-model="radio" type="button" :solid="true">
    <ns-radio value="before-yesterday">前天前天前天</ns-radio>
    <ns-radio value="yesterday">昨天</ns-radio>
    <ns-radio value="today">今天</ns-radio>
    <ns-radio value="tomorrow" :disabled="true">明天</ns-radio>
  </ns-radio-group>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const radio = ref('tomorrow')
</script>
