<script setup lang="ts">
import type { LoadingOptions } from './types'
import { computed, type Ref } from 'vue'
import { isString } from 'lodash-es'
import NsIcon from '../Icon/Icon.vue'

defineOptions({
  name: 'NsLoading',
  inheritAttrs: false,
})
const props = defineProps<LoadingOptions>()

const iconName = computed(() => {
  if (isString(props.spinner)) {
    return props.spinner
  }
  return 'spinner' // 'circle-notch' 也很好看
})
</script>

<template>
  <transition name="fade-in-linear" @after-leave="onAfterLeave">
    <div
      v-show="(props.visible as Ref).value"
      class="ns-loading ns-loading__mask"
      :class="{ 'is-fullscreen': fullscreen }"
    >
      <div class="ns-loading__spinner">
        <NsIcon v-if="props.spinner !== false" :icon="iconName" spin />
        <p v-if="text" class="ns-loading-text">{{ text }}</p>
      </div>
    </div>
  </transition>
</template>

<style>
@import './style.css';
.ns-loading {
  --ns-loading-bg-color: v-bind(background) !important;
  --ns-loading-z-index: v-bind(zIndex) !important;
}
</style>
