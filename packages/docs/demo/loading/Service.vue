<template>
  <xc-button @click="openLoading">服务方式打开加载</xc-button>
</template>

<script setup>
import { XcLoadingService } from 'shadow-ui'

const openLoading = () => {
  const loading = XcLoadingService({
    text: '加载中...',
    background: 'rgba(0, 0, 0, 0.7)',
  })

  setTimeout(() => {
    loading.close()
  }, 2000)
}
</script>
