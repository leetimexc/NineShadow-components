<script lang="ts" setup>
import { ref } from 'vue'

const input = ref('禁用状态的输入框')
</script>

<template>
  <div>
    <ns-input v-model="input" disabled placeholder="请输入内容" />
  </div>
</template>
