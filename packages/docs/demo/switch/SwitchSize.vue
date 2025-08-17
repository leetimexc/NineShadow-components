<template>
  <div class="switch-demo">
    <div class="switch-item">
      <ns-switch v-model="value1" size="small" />
      <span class="label">小尺寸</span>
    </div>
    <div class="switch-item">
      <ns-switch v-model="value2" />
      <span class="label">默认尺寸</span>
    </div>
    <div class="switch-item">
      <ns-switch v-model="value3" size="large" />
      <span class="label">大尺寸</span>
    </div>
    <div class="switch-item">
      <ns-switch
        v-model="value4"
        size="small"
        active-text="开"
        inactive-text="关"
      />
      <span class="label">小尺寸带文字</span>
    </div>
    <div class="switch-item">
      <ns-switch
        v-model="value5"
        size="large"
        active-text="开启"
        inactive-text="关闭"
      />
      <span class="label">大尺寸带文字</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(true)
const value3 = ref(true)
const value4 = ref(false)
const value5 = ref(false)
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
  gap: 20px;
}
.label {
  font-size: 14px;
}
</style>
