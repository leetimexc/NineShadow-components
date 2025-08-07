<script setup lang="ts">
import { NsIcon } from "shadow-ui";
</script>

<template>
  <div class="icon-demo">
    <div class="icon-item">
      <NsIcon :icon="['fas', 'user']" />
      <span>user</span>
    </div>
    <div class="icon-item">
      <NsIcon :icon="['fas', 'home']" />
      <span>home</span>
    </div>
    <div class="icon-item">
      <NsIcon :icon="['fas', 'search']" />
      <span>search</span>
    </div>
    <div class="icon-item">
      <NsIcon :icon="['fas', 'cog']" />
      <span>cog</span>
    </div>
    <div class="icon-item">
      <NsIcon :icon="['fas', 'bell']" />
      <span>bell</span>
    </div>
    <div class="icon-item">
      <NsIcon :icon="['fas', 'envelope']" />
      <span>envelope</span>
    </div>
    <div class="icon-item">
      <NsIcon :icon="['fas', 'star']" />
      <span>star</span>
    </div>
    <div class="icon-item">
      <NsIcon :icon="['fas', 'heart']" />
      <span>heart</span>
    </div>
  </div>
</template>

<style scoped>
.icon-demo {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  text-align: center;
}
.icon-item i {
  font-size: 24px;
  margin-bottom: 8px;
}
</style>
