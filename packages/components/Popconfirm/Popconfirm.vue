<script setup lang="ts">
import { ref, computed } from 'vue'
import { addUnit } from '@xc-element/utils'
import { useLocale } from '@xc-element/hooks'
import type { TooltipInstance } from '../Tooltip'
import type { PopconfirmProps, PopconfirmEmits } from './types'

import XcTooltip from '../Tooltip/Tooltip.vue'
import XcButton from '../Button/Button.vue'
import XcIcon from '../Icon/Icon.vue'

defineOptions({
  name: 'XcPopconfirm',
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
  <xc-tooltip ref="tooltipRef" trigger="click" :hide-timeout="hideAfter">
    <template #content>
      <div class="xc-popconfirm" :style="style">
        <div class="xc-popconfirm__main">
          <xc-icon v-if="!hideIcon && icon" :icon="icon" :color="iconColor" />
          {{ title }}
        </div>
        <div class="xc-popconfirm__action">
          <xc-button
            class="xc-popconfirm__cancel"
            size="small"
            :type="cancelButtonType"
            @click="cancel"
          >
            {{ cancelButtonText || locale.t('popconfirm.cancelButtonText') }}
          </xc-button>
          <xc-button
            class="xc-popconfirm__confirm"
            size="small"
            :type="confirmButtonType"
            @click="confrim"
          >
            {{ confirmButtonText || locale.t('popconfirm.confirmButtonText') }}
          </xc-button>
        </div>
      </div>
    </template>

    <template v-if="$slots.default" #default>
      <slot name="default"></slot>
    </template>

    <template v-if="$slots.reference" #default>
      <slot name="reference"></slot>
    </template>
  </xc-tooltip>
</template>

<style scoped>
@import './style.css';
</style>
