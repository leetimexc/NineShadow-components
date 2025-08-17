<template>
  <ns-space dir="vertical">
    <ns-radio-group v-model="radio" type="button" size="xl">
      <ns-radio value="before-yesterday">前天</ns-radio>
      <ns-radio value="yesterday">昨天</ns-radio>
      <ns-radio value="today">今天</ns-radio>
      <ns-radio value="tomorrow">明天</ns-radio>
      <ns-radio value="after-tomorrow" :disabled="true">后天</ns-radio>
    </ns-radio-group>
    <ns-radio-group v-model="radio" type="button" size="l">
      <ns-radio value="before-yesterday">前天</ns-radio>
      <ns-radio value="yesterday">昨天</ns-radio>
      <ns-radio value="today">今天</ns-radio>
      <ns-radio value="tomorrow">明天</ns-radio>
      <ns-radio value="after-tomorrow" :disabled="true">后天</ns-radio>
    </ns-radio-group>
    <ns-radio-group v-model="radio" type="button" size="m">
      <ns-radio value="before-yesterday">前天</ns-radio>
      <ns-radio value="yesterday">昨天</ns-radio>
      <ns-radio value="today">今天</ns-radio>
      <ns-radio value="tomorrow">明天</ns-radio>
      <ns-radio value="after-tomorrow" :disabled="true">后天</ns-radio>
    </ns-radio-group>
    <ns-radio-group v-model="radio" type="button" size="s">
      <ns-radio value="before-yesterday">前天</ns-radio>
      <ns-radio value="yesterday">昨天</ns-radio>
      <ns-radio value="today">今天</ns-radio>
      <ns-radio value="tomorrow">明天</ns-radio>
      <ns-radio value="after-tomorrow" :disabled="true">后天</ns-radio>
    </ns-radio-group>
  </ns-space>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const radio = ref('you')
</script>
