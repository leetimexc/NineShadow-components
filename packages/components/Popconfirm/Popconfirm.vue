<script setup lang="ts">
import { ref, computed } from 'vue'
import { addUnit } from '@shadow-ui/utils'
import { useLocale } from '@shadow-ui/hooks'
import type { TooltipInstance } from '../Tooltip'
import type { PopconfirmProps, PopconfirmEmits } from './types'

import NsTooltip from '../Tooltip/Tooltip.vue'
import NsButton from '../Button/Button.vue'
import NsIcon from '../Icon/Icon.vue'

defineOptions({
  name: 'NsPopconfirm',
})

const props = withDefaults(defineProps<PopconfirmProps>(), {
  title: '',
  confirmButtonType: 'primary',
  icon: 'question-circle',
  iconColor: '#f90',
  hideAfter: 200,
  width: 150,
})

const emits = defineEmits<PopconfirmEmits>()
const tooltipRef = ref<TooltipInstance>()
const style = computed(() => ({ width: addUnit(props.width) }))

const locale = useLocale()

function hidePopper() {
  tooltipRef.value?.hide()
}

function confrim(e: MouseEvent) {
  emits('confirm', e)
  hidePopper()
}

function cancel(e: MouseEvent) {
  emits('cancel', e)
  hidePopper()
}
</script>

<template>
  <ns-tooltip ref="tooltipRef" trigger="click" :hide-timeout="hideAfter">
    <template #content>
      <div class="ns-popconfirm" :style="style">
        <div class="ns-popconfirm__main">
          <ns-icon v-if="!hideIcon && icon" :icon="icon" :color="iconColor" />
          {{ title }}
        </div>
        <div class="ns-popconfirm__action">
          <ns-button
            class="ns-popconfirm__cancel"
            size="small"
            :type="cancelButtonType"
            @click="cancel"
          >
            {{ cancelButtonText || locale.t('popconfirm.cancelButtonText') }}
          </ns-button>
          <ns-button
            class="ns-popconfirm__confirm"
            size="small"
            :type="confirmButtonType"
            @click="confrim"
          >
            {{ confirmButtonText || locale.t('popconfirm.confirmButtonText') }}
          </ns-button>
        </div>
      </div>
    </template>

    <template v-if="$slots.default" #default>
      <slot name="default"></slot>
    </template>

    <template v-if="$slots.reference" #default>
      <slot name="reference"></slot>
    </template>
  </ns-tooltip>
</template>

<style scoped>
@import './style.css';
</style>
