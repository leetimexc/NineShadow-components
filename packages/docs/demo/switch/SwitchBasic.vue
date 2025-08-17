<template>
  <div class="switch-demo">
    <ns-switch v-model="value" />
    <div class="switch-status">开关状态: {{ value ? '开启' : '关闭' }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref(false)
</script>

<style scoped>
.switch-demo {
  display: flex;
  align-items: center;
  gap: 20px;
}
.switch-status {
  font-size: 14px;
}
</style>
