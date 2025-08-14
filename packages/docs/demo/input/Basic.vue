<script lang="ts" setup>
import { ref } from 'vue'

const input = ref('')
</script>

<template>
  <div>
    <ns-input v-model="input" placeholder="请输入内容" />
    <div style="margin-top: 15px">当前输入值: {{ input }}</div>
  </div>
</template>
