<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
const options = [
  {
    value: 'option1',
    label: '选项1',
  },
  {
    value: 'option2',
    label: '选项2',
  },
  {
    value: 'option3',
    label: '选项3',
  },
]
</script>

<template>
  <div class="demo-select">
    <ns-select v-model="value" placeholder="请选择" :options="options" />
    <div class="selected-value">当前选中值：{{ value }}</div>
  </div>
</template>

<style scoped>
.demo-select {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.selected-value {
  margin-top: 10px;
  color: #666;
}
</style>
