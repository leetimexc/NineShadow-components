<script setup lang="ts">
import { NsIcon } from "shadow-ui";
</script>

<template>
  <div class="icon-demo">
    <h4>内置类型颜色</h4>
    <div class="icon-row">
      <div class="icon-item">
        <NsIcon :icon="['fas', 'star']" size="2x" />
        <span>默认</span>
      </div>
      <div class="icon-item">
        <NsIcon :icon="['fas', 'star']" size="2x" type="primary" />
        <span>primary</span>
      </div>
      <div class="icon-item">
        <NsIcon :icon="['fas', 'star']" size="2x" type="success" />
        <span>success</span>
      </div>
      <div class="icon-item">
        <NsIcon :icon="['fas', 'star']" size="2x" type="warning" />
        <span>warning</span>
      </div>
      <div class="icon-item">
        <NsIcon :icon="['fas', 'star']" size="2x" type="danger" />
        <span>danger</span>
      </div>
      <div class="icon-item">
        <NsIcon :icon="['fas', 'star']" size="2x" type="info" />
        <span>info</span>
      </div>
    </div>

    <h4>自定义颜色</h4>
    <div class="icon-row">
      <div class="icon-item">
        <NsIcon :icon="['fas', 'star']" size="2x" color="#8A2BE2" />
        <span>#8A2BE2</span>
      </div>
      <div class="icon-item">
        <NsIcon :icon="['fas', 'star']" size="2x" color="#FF1493" />
        <span>#FF1493</span>
      </div>
      <div class="icon-item">
        <NsIcon :icon="['fas', 'star']" size="2x" color="#00CED1" />
        <span>#00CED1</span>
      </div>
      <div class="icon-item">
        <NsIcon :icon="['fas', 'star']" size="2x" color="#FF8C00" />
        <span>#FF8C00</span>
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
  width: 80px;
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
