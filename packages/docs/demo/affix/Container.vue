<template>
  <div ref="targetRef" class="ns-wrapper">
    <div class="ns-scroll-wrapper">
      <ns-affix
        ref="affixRef"
        :offset="30"
        :target="targetRef"
        style="margin-top: 60px"
      >
        <ns-button>Affix Top in container</ns-button>
      </ns-affix>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { shallowRef, onMounted, onUnmounted } from 'vue'
const targetRef = shallowRef<HTMLElement>()
const affixRef = shallowRef()
onMounted(() => {
  window.addEventListener('scroll', affixRef.value?.updatePosition, true)
})
onUnmounted(() => {
  window.removeEventListener('scroll', affixRef.value?.updatePosition, true)
})
</script>
<style scoped>
.ns-wrapper {
  overflow: auto;
  height: 200px;
}

.ns-scroll-wrapper {
  overflow: hidden;
  height: 400px;
  background-color: #d4e1ff;
}
</style>
