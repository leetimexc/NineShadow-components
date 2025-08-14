<script lang="ts" setup>
import { ref } from 'vue'

const input = ref('可清空内容')
</script>

<template>
  <div>
    <ns-input v-model="input" clearable placeholder="请输入内容" />
    <div style="margin-top: 15px">当前输入值: {{ input }}</div>
  </div>
</template>
