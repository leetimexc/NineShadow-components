<template>
  <div class="demo-select">
    <ns-select
      v-model="value"
      placeholder="请选择"
      :options="options"
      :render-label="renderLabel"
    />
    <div class="selected-value">当前选中值：{{ value }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import type { SelectOptionProps } from '@shadow-ui/components/Select/types'

const value = ref('')
const options = [
  {
    value: 'beijing',
    label: '北京',
    icon: 'location-dot',
  },
  {
    value: 'shanghai',
    label: '上海',
    icon: 'location-dot',
  },
  {
    value: 'guangzhou',
    label: '广州',
    icon: 'location-dot',
  },
]

const renderLabel = (option: SelectOptionProps) => {
  return h('div', { class: 'custom-option' }, [
    h('ns-icon', { icon: option.icon, class: 'custom-icon' }),
    h('span', {}, option.label),
  ])
}
</script>

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
.custom-option {
  display: flex;
  align-items: center;
  gap: 5px;
}
.custom-icon {
  font-size: 14px;
  color: #409eff;
}
</style>
