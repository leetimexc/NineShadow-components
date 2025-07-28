<script lang="ts" setup>
import type { AlertProps, AlertEmits, AlertInstance } from './types'
import { typeIconMap } from '@xc-element/utils'
import { ref, computed } from 'vue'
import XcIcon from '../Icon/Icon.vue'

defineOptions({
  name: 'XcAlert',
})
const props = withDefaults(defineProps<AlertProps>(), {
  effect: 'light',
  type: 'info',
  closable: false,
})
const emit = defineEmits<AlertEmits>()
const slots = defineSlots()

const visible = ref(true)

const iconName = computed(() => typeIconMap.get(props.type) ?? 'circle-info')
const withDescription = computed(() => props.description || slots.default)

function close() {
  visible.value = false
  emit('close')
}

function open() {
  visible.value = true
}

defineExpose<AlertInstance>({
  close,
  open,
})
</script>
<template>
  <transition name="xc-alert-fade">
    <div
      v-show="visible"
      class="xc-alert"
      role="alert"
      :class="{
        [`xc-alert__${props.type}`]: props.type,
        [`xc-alert__${props.effect}`]: props.effect,
        'text-center': props.center,
      }"
    >
      <XcIcon
        v-if="props.showIcon"
        class="xc-alert__icon"
        :class="{ 'big-icon': withDescription }"
        :icon="iconName"
      />
      <div class="xc-alert__content">
        <span
          class="xc-alert__title"
          :class="{ 'with-desc': withDescription }"
          :style="{ display: props.center && !props.showIcon ? 'flow' : 'inline' }"
        >
          <slot name="title">{{ props.title }}</slot>
        </span>
        <p class="xc-alert__description">
          <slot>{{ props.description }}</slot>
        </p>
        <div class="xc-alert__close" v-if="props.closable">
          <XcIcon @click.stop="close" icon="xmark" />
        </div>
      </div>
    </div>
  </transition>
</template>
<style scoped>
@import './style.css';
</style>
