<template>
  <div class="demo-select">
    <ns-select
      v-model="value"
      filterable
      remote
      :remote-method="remoteMethod"
      placeholder="请输入关键词搜索"
      :options="options"
    />
    <div class="selected-value">当前选中值：{{ value }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { SelectOptionProps } from '@shadow-ui/components/Select/types'

const value = ref('')
const options = ref<SelectOptionProps[]>([])

const allCities = [
  { value: 'beijing', label: '北京' },
  { value: 'shanghai', label: '上海' },
  { value: 'guangzhou', label: '广州' },
  { value: 'shenzhen', label: '深圳' },
  { value: 'hangzhou', label: '杭州' },
  { value: 'nanjing', label: '南京' },
  { value: 'chongqing', label: '重庆' },
  { value: 'xian', label: '西安' },
  { value: 'wuhan', label: '武汉' },
  { value: 'tianjin', label: '天津' },
  { value: 'chengdu', label: '成都' },
  { value: 'suzhou', label: '苏州' },
]

const remoteMethod = (query: string) => {
  return new Promise<SelectOptionProps[]>((resolve) => {
    if (query === '') {
      resolve([])
      return
    }

    // 模拟远程搜索延迟
    setTimeout(() => {
      const results = allCities.filter((item) =>
        item.label.toLowerCase().includes(query.toLowerCase())
      )
      resolve(results)
    }, 500)
  })
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
</style>
