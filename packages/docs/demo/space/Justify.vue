<template>
  <ns-radio-group v-model="justify" type="button">
    <ns-radio value="start">start</ns-radio>
    <ns-radio value="center">center</ns-radio>
    <ns-radio value="end">end</ns-radio>
    <ns-radio value="between">between</ns-radio>
    <ns-radio value="around">around</ns-radio>
    <ns-radio value="evenly">evenly</ns-radio>
  </ns-radio-group>
  <ns-space :justify="justify" style="margin-top: 12px">
    <ns-button>按钮1</ns-button>
    <ns-button>按钮2</ns-button>
    <ns-button shape="circle"><IconPlusOutline /></ns-button>
  </ns-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const justify = ref('start') as any
</script>
