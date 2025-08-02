<template>
  <xc-button @click="openFullScreen">打开全屏加载</xc-button>
  <div v-loading.fullscreen.lock="fullscreenLoading">
    <!-- 内容 -->
  </div>
</template>

<script setup>
import { ref } from 'vue'

const fullscreenLoading = ref(false)
const openFullScreen = () => {
  fullscreenLoading.value = true
  setTimeout(() => {
    fullscreenLoading.value = false
  }, 2000)
}
</script>
