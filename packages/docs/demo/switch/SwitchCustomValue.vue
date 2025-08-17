<template>
  <div class="switch-demo">
    <div class="switch-item">
      <ns-switch v-model="value1" active-value="100" inactive-value="0" />
      <span class="label">当前值: {{ value1 }}</span>
    </div>
    <div class="switch-item">
      <ns-switch
        v-model="value2"
        active-value="on"
        inactive-value="off"
        active-text="开启"
        inactive-text="关闭"
      />
      <span class="label">当前值: {{ value2 }}</span>
    </div>
    <div class="switch-item">
      <ns-switch
        v-model="status"
        :active-value="activeStatus"
        :inactive-value="inactiveStatus"
      />
      <span class="label">当前状态: {{ status.name }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref('0')
const value2 = ref('off')

// 使用对象作为值
const activeStatus = {
  name: '在线',
  code: 1,
}
const inactiveStatus = {
  name: '离线',
  code: 0,
}
const status = ref(inactiveStatus)
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
