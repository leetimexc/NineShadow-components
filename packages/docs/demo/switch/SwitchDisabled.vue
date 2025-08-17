<template>
  <div class="switch-demo">
    <div class="switch-item">
      <ns-switch v-model="value1" disabled />
      <span class="label">禁用状态（关闭）</span>
    </div>
    <div class="switch-item">
      <ns-switch v-model="value2" disabled />
      <span class="label">禁用状态（开启）</span>
    </div>
    <div class="switch-item">
      <ns-switch v-model="value3" />
      <span class="label">正常状态</span>
    </div>
    <div class="switch-item">
      <ns-button size="small" @click="toggleDisabled">{{
        isDisabled ? '启用' : '禁用'
      }}</ns-button>
      <ns-switch v-model="value4" :disabled="isDisabled" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref(false)
const value2 = ref(true)
const value3 = ref(false)
const value4 = ref(false)
const isDisabled = ref(true)

const toggleDisabled = () => {
  isDisabled.value = !isDisabled.value
}
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
