<script setup lang="ts">
import { XcIcon } from 'shadow-ui'
</script>

<template>
  <div class="icon-demo">
    <div class="icon-row">
      <div class="icon-item">
        <XcIcon :icon="['fas', 'star']" size="xs" />
        <span>xs</span>
      </div>
      <div class="icon-item">
        <XcIcon :icon="['fas', 'star']" size="sm" />
        <span>sm</span>
      </div>
      <div class="icon-item">
        <XcIcon :icon="['fas', 'star']" />
        <span>默认</span>
      </div>
      <div class="icon-item">
        <XcIcon :icon="['fas', 'star']" size="lg" />
        <span>lg</span>
      </div>
      <div class="icon-item">
        <XcIcon :icon="['fas', 'star']" size="xl" />
        <span>xl</span>
      </div>
      <div class="icon-item">
        <XcIcon :icon="['fas', 'star']" size="2xl" />
        <span>2xl</span>
      </div>
    </div>

    <div class="icon-row">
      <div class="icon-item">
        <XcIcon :icon="['fas', 'star']" size="1x" />
        <span>1x</span>
      </div>
      <div class="icon-item">
        <XcIcon :icon="['fas', 'star']" size="2x" />
        <span>2x</span>
      </div>
      <div class="icon-item">
        <XcIcon :icon="['fas', 'star']" size="3x" />
        <span>3x</span>
      </div>
      <div class="icon-item">
        <XcIcon :icon="['fas', 'star']" size="4x" />
        <span>4x</span>
      </div>
      <div class="icon-item">
        <XcIcon :icon="['fas', 'star']" size="5x" />
        <span>5x</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.icon-demo {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.icon-row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: flex-end;
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
</style>
