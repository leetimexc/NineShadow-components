<template>
  <div class="overlay-demo">
    <ns-button type="primary" @click="showOverlay = true">显示遮罩层</ns-button>
    <p v-if="clickCount > 0">点击次数: {{ clickCount }}</p>
    <ns-overlay v-if="showOverlay" @click="handleOverlayClick">
      <div class="content-box">
        <p>点击遮罩层会触发 click 事件</p>
        <p>点击次数: {{ clickCount }}</p>
        <ns-button type="primary" @click.stop
          >此按钮不会触发遮罩层事件</ns-button
        >
      </div>
    </ns-overlay>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const showOverlay = ref(false);
const clickCount = ref(0);

const handleOverlayClick = (e: MouseEvent) => {
  clickCount.value++;
  if (clickCount.value >= 3) {
    showOverlay.value = false;
    setTimeout(() => {
      clickCount.value = 0;
    }, 2000);
  }
};
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
