<script setup lang="ts">
import { NsIcon } from "shadow-ui";
</script>

<template>
  <div class="icon-demo">
    <h4>动画效果</h4>
    <div class="icon-row">
      <div class="icon-item">
        <NsIcon :icon="['fas', 'spinner']" size="2x" spin />
        <span>spin</span>
      </div>
      <div class="icon-item">
        <NsIcon :icon="['fas', 'circle-notch']" size="2x" spinPulse />
        <span>spinPulse</span>
      </div>
      <div class="icon-item">
        <NsIcon :icon="['fas', 'spinner']" size="2x" spinReverse />
        <span>spinReverse</span>
      </div>
      <div class="icon-item">
        <NsIcon :icon="['fas', 'heart']" size="2x" beat />
        <span>beat</span>
      </div>
      <div class="icon-item">
        <NsIcon :icon="['fas', 'bell']" size="2x" shake />
        <span>shake</span>
      </div>
      <div class="icon-item">
        <NsIcon :icon="['fas', 'star']" size="2x" bounce />
        <span>bounce</span>
      </div>
      <div class="icon-item">
        <NsIcon :icon="['fas', 'lightbulb']" size="2x" fade />
        <span>fade</span>
      </div>
      <div class="icon-item">
        <NsIcon :icon="['fas', 'heart']" size="2x" beatFade />
        <span>beatFade</span>
      </div>
    </div>

    <h4>旋转和翻转</h4>
    <div class="icon-row">
      <div class="icon-item">
        <NsIcon :icon="['fas', 'arrow-up']" size="2x" />
        <span>默认</span>
      </div>
      <div class="icon-item">
        <NsIcon :icon="['fas', 'arrow-up']" size="2x" rotation="90" />
        <span>rotation="90"</span>
      </div>
      <div class="icon-item">
        <NsIcon :icon="['fas', 'arrow-up']" size="2x" rotation="180" />
        <span>rotation="180"</span>
      </div>
      <div class="icon-item">
        <NsIcon :icon="['fas', 'arrow-up']" size="2x" rotation="270" />
        <span>rotation="270"</span>
      </div>
      <div class="icon-item">
        <NsIcon :icon="['fas', 'arrow-up']" size="2x" flip="horizontal" />
        <span>flip="horizontal"</span>
      </div>
      <div class="icon-item">
        <NsIcon :icon="['fas', 'arrow-up']" size="2x" flip="vertical" />
        <span>flip="vertical"</span>
      </div>
      <div class="icon-item">
        <NsIcon :icon="['fas', 'arrow-up']" size="2x" flip="both" />
        <span>flip="both"</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.icon-demo {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.icon-row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
}
.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  text-align: center;
}
.icon-item span {
  margin-top: 8px;
  font-size: 12px;
}
h4 {
  margin: 10px 0;
}
</style>
