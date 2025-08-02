<template>
  <div v-loading="loading" class="loading-container">数据加载中...</div>
  <xc-button @click="toggleLoading">切换加载状态</xc-button>
</template>

<script setup>
import { ref } from 'vue'

const loading = ref(false)
const toggleLoading = () => {
  loading.value = !loading.value
}
</script>

<style>
.loading-container {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
