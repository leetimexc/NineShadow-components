<template>
  <ns-radio-group v-model="align" type="button">
    <ns-radio value="start">start</ns-radio>
    <ns-radio value="center">center</ns-radio>
    <ns-radio value="end">end</ns-radio>
    <ns-radio value="baseline">baseline</ns-radio>
    <ns-radio value="stretch">stretch</ns-radio>
  </ns-radio-group>
  <ns-space :align="align" style="margin-top: 12px">
    <ns-button size="s">按钮1</ns-button>
    <ns-button size="m">按钮2</ns-button>
    <ns-button>按钮3</ns-button>
  </ns-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const align = ref('start') as any
</script>
