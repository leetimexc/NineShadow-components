<template>
  <div class="overlay-demo">
    <xc-button type="primary" @click="showOverlay = true"
      >显示自定义样式遮罩层</xc-button
    >
    <xc-overlay
      v-if="showOverlay"
      @click="showOverlay = false"
      :overlay-class="['custom-overlay', { 'with-border': true }]"
      :z-index="1000"
    >
      <div class="content-box">
        <p>这是自定义样式的遮罩层</p>
        <p>z-index: 1000</p>
        <xc-button type="primary" @click.stop="showOverlay = false"
          >关闭</xc-button
        >
      </div>
    </xc-overlay>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showOverlay = ref(false)
</script>

<style scoped>
.overlay-demo {
  height: 200px;
  position: relative;
}

.content-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 4px;
  text-align: center;
}

:deep(.custom-overlay) {
  background-color: rgba(0, 0, 0, 0.8);
}

:deep(.with-border) {
  border: 5px solid rgba(255, 255, 255, 0.2);
}
</style>
