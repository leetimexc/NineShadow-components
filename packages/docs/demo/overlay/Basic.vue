<template>
  <div class="overlay-demo">
    <xc-button type="primary" @click="showOverlay = true">显示遮罩层</xc-button>
    <xc-overlay v-if="showOverlay" @click="showOverlay = false">
      <div class="content-box">
        <p>这是遮罩层内容</p>
        <xc-button type="primary" @click.stop>点击此处不会关闭遮罩层</xc-button>
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
</style>
