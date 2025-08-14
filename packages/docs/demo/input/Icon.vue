<script lang="ts" setup>
import { ref } from 'vue'

const input1 = ref('')
const input2 = ref('')
</script>

<template>
  <div class="demo-input-suffix">
    <span class="demo-input-label">使用 prefix 插槽</span>
    <ns-input v-model="input1" placeholder="请选择日期">
      <template #prefix>
        <ns-icon icon="calendar" />
      </template>
    </ns-input>
  </div>
  <div class="demo-input-suffix" style="margin-top: 15px">
    <span class="demo-input-label">使用 suffix 插槽</span>
    <ns-input v-model="input2" placeholder="请输入内容">
      <template #suffix>
        <ns-icon icon="search" />
      </template>
    </ns-input>
  </div>
</template>

<style scoped>
.demo-input-label {
  display: inline-block;
  width: 120px;
  text-align: right;
  margin-right: 10px;
}
.demo-input-suffix {
  margin-bottom: 15px;
}
</style>
