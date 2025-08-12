<template>
  <p>内置尺寸：</p>
  <ns-radio-group v-model="dir" type="button">
    <ns-radio value="horizontal">horizontal</ns-radio>
    <ns-radio value="vertical">vertical</ns-radio>
    <ns-radio value="horizontal-reverse">horizontal-reverse</ns-radio>
    <ns-radio value="vertical-reverse">vertical-reverse</ns-radio>
  </ns-radio-group>
  <ns-space :dir="dir" class="margin" inline>
    <ns-button>按钮1</ns-button>
    <ns-button>按钮2</ns-button>
    <ns-button>按钮3</ns-button>
  </ns-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const dir = ref('horizontal') as any
</script>
