<template>
  <div class="switch-demo">
    <div class="switch-item">
      <ns-switch v-model="value1" active-text="开启" inactive-text="关闭" />
    </div>
    <div class="switch-item">
      <ns-switch v-model="value2" active-text="是" inactive-text="否" />
    </div>
    <div class="switch-item">
      <ns-switch v-model="value3" active-text="在线" inactive-text="离线" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(false)
const value3 = ref(true)
</script>

<style scoped>
.switch-demo {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.switch-item {
  display: flex;
  align-items: center;
}
</style>
