<template>
  <p>内置尺寸：</p>
  <ns-radio-group v-model="size" type="button">
    <ns-radio value="ss">ss</ns-radio>
    <ns-radio value="s">s</ns-radio>
    <ns-radio value="m">m</ns-radio>
    <ns-radio value="l">l</ns-radio>
    <ns-radio value="xl">xl</ns-radio>
  </ns-radio-group>
  <ns-space :size="size" class="margin">
    <ns-button>按钮1</ns-button>
    <ns-button>按钮2</ns-button>
    <ns-button>按钮3</ns-button>
  </ns-space>

  <p>
    自定义间距：
    <ns-input v-model="inputSize" style="width: 80px" />
  </p>
  <ns-space :size="`${inputSize}px`" class="margin">
    <ns-button>按钮1</ns-button>
    <ns-button>按钮2</ns-button>
    <ns-button>按钮3</ns-button>
  </ns-space>

  <p>自定义水平和竖直间距：[10, 30]</p>
  <ns-space wrap :size="[10, 20]" class="margin" style="width: 300px">
    <ns-button v-for="item in 10" :key="item">按钮</ns-button>
  </ns-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const size = ref('l') as any
const inputSize = ref('10') as any
</script>

<style>
.margin {
  margin: 12px 0 24px;
}
</style>
