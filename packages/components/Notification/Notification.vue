<script setup lang="ts">
import type { NotificationProps, NotificationCompInstance } from './types'
import { computed, onMounted, ref } from 'vue'
import { getLastBottomOffset } from './methods'
import { delay, bind } from 'lodash-es'
import { useOffset } from '@shadow-ui/hooks'
import { addUnit } from '@shadow-ui/utils'
import { typeIconMap, RenderVnode } from '@shadow-ui/utils'
import NsIcon from '../Icon/Icon.vue'

defineOptions({ name: 'NsNotification' })

const props = withDefaults(defineProps<NotificationProps>(), {
  type: 'info',
  duration: 3000,
  offset: 20,
  position: 'top-right',
  transitionName: 'fade',
  showClose: true,
})

const visible = ref(false)
const notifyRef = ref<HTMLDivElement>()
// div 高度
const boxHeight = ref(0)

const { topOffset, bottomOffset } = useOffset({
  getLastBottomOffset: bind(getLastBottomOffset, props),
  offset: props.offset,
  boxHeight,
})

const iconName = computed(() => typeIconMap.get(props.type) ?? 'circle-info')

const horizontalClass = computed(() =>
  props.position.endsWith('right') ? 'right' : 'left'
)

const verticalProperty = computed(() =>
  props.position.startsWith('top') ? 'top' : 'bottom'
)

const customStyle = computed(() => ({
  // top: addUnit(topOffset.value),
  [verticalProperty.value]: addUnit(topOffset.value),
  zIndex: props.zIndex,
}))

let timer: number
function startTimmer() {
  if (props.duration === 0) return
  timer = delay(close, props.duration)
}

function clearTimer() {
  clearTimeout(timer)
}

function close() {
  visible.value = false
}

onMounted(() => {
  visible.value = true
  startTimmer()
})

defineExpose<NotificationCompInstance>({
  bottomOffset,
  close,
})
</script>

<template>
  <transition
    :name="`ns-notification-${transitionName}`"
    @after-leave="!visible && onDestory()"
    @enter="boxHeight = notifyRef!.getBoundingClientRect().height"
  >
    <div
      ref="notifyRef"
      class="ns-notification"
      :class="{
        [`ns-notification--${type}`]: type,
        [horizontalClass]: true,
        'show-close': showClose,
      }"
      :style="customStyle"
      v-show="visible"
      role="alert"
      @click="onClick"
      @mouseenter="clearTimer"
      @mouseleave="startTimmer"
    >
      <ns-icon v-if="iconName" :icon="iconName" class="ns-notification__icon" />

      <div class="ns-notification__text">
        <div class="ns-notification__title">{{ title }}</div>
        <div class="ns-notification__content">
          <slot>
            <render-vnode v-if="message" :vNode="message" />
          </slot>
        </div>
      </div>
      <div class="ns-notification__close" v-if="showClose">
        <ns-icon icon="xmark" @click.stop="close" />
      </div>
    </div>
  </transition>
</template>

<style>
@import './style.css';
</style>
