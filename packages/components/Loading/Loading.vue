<script setup lang="ts">
import type { LoadingOptions } from './types'
import { computed, type Ref } from 'vue'
import { isString } from 'lodash-es'
import XcIcon from '../Icon/Icon.vue'

defineOptions({
  name: 'XcLoading',
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
      class="xc-loading xc-loading__mask"
      :class="{ 'is-fullscreen': fullscreen }"
    >
      <div class="xc-loading__spinner">
        <XcIcon v-if="props.spinner !== false" :icon="iconName" spin />
        <p v-if="text" class="xc-loading-text">{{ text }}</p>
      </div>
    </div>
  </transition>
</template>

<style>
@import './style.css';
.xc-loading {
  --xc-loading-bg-color: v-bind(background) !important;
  --xc-loading-z-index: v-bind(zIndex) !important;
}
</style>
