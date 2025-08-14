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
    <ns-select
      v-model="value"
      disabled
      placeholder="禁用状态"
      :options="options"
    />
  </div>
</template>

<style scoped>
.demo-select {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
