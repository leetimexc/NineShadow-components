<script setup lang="ts">
import type { MessageBoxProps, MessageBoxAction } from './types'
import type { InputInstance } from '../Input/types'
import { useZIndex, useId } from '@xc-element/hooks'
import { typeIconMap } from '@xc-element/utils'
import { reactive, computed, ref, watch, nextTick, type Ref } from 'vue'

import XcOverlay from '../Overlay/Overlay.vue'
import XcIcon from '../Icon/Icon.vue'
import XcButton from '../Button/Button.vue'
import XcInput from '../Input/Input.vue'
import { isFunction, isNil } from 'lodash-es'

defineOptions({
  name: 'XcMessageBox',
  inheritAttrs: false,
})

const props = withDefaults(defineProps<MessageBoxProps>(), {
  lockScroll: true,
  showClose: true,
  closeOnClickModal: true,
  confirmButtonType: 'primary',
  roundButton: false,
  boxType: '',
  inputValue: '',
  inputPlaceholder: 'Please input...',
  confirmButtonText: 'Ok',
  cancelButtonText: 'Cancel',
  showConfirmButton: true,
})

const { doAction } = props
const { nextZIndex } = useZIndex()

const headerRef = ref<HTMLElement>()
const inputRef = ref<InputInstance>()
const inputId = useId()

const state = reactive({
  ...props,
  zIndex: nextZIndex(),
})

const hasMessage = computed(() => !!state.message)
const iconComponent = computed(
  () => state.icon ?? typeIconMap.get(state.type ?? '')
)

watch(
  () => props.visible?.value,
  (val) => {
    if (val) state.zIndex = nextZIndex()
    if (props.boxType !== 'prompt') return

    if (!val) return

    nextTick(() => {
      inputRef.value && inputRef.value.focus()
    })
  }
)

function handleWrapperClick() {
  props.closeOnClickModal && handleAction('close')
}

function handleInputEnter(e: KeyboardEvent) {
  if (state.inputType === 'textarea') return
  e.preventDefault()
  return handleAction('confirm')
}

function handleAction(action: MessageBoxAction) {
  isFunction(props.beforeClose)
    ? props.beforeClose(action, state, () => doAction(action, state.inputValue))
    : doAction(action, state.inputValue)
}

function handleClose() {
  handleAction('close')
}
</script>

<template>
  <transition name="fade-in-linear" @after-leave="destroy">
    <xc-overlay v-show="(visible as Ref).value" :z-index="state.zIndex" mask>
      <div
        role="dialog"
        class="xc-overlay-message-box"
        @click="handleWrapperClick"
      >
        <div
          ref="rootRef"
          :class="[
            'xc-message-box',
            {
              'is-center': state.center,
            },
          ]"
          @click.stop
        >
          <div
            v-if="!isNil(state.title)"
            ref="headerRef"
            class="xc-message-box__header"
            :class="{ 'show-close': state.showClose }"
          >
            <div class="xc-message-box__title">
              <xc-icon
                v-if="iconComponent && state.center"
                :class="{
                  [`xc-icon-${state.type}`]: state.type,
                }"
                :icon="iconComponent"
              />
              {{ state.title }}
            </div>
            <button
              v-if="showClose"
              class="xc-message-box__header-btn"
              @click.stop="handleClose"
            >
              <xc-icon icon="xmark" />
            </button>
          </div>
          <div class="xc-message-box__content">
            <xc-icon
              v-if="iconComponent && !state.center && hasMessage"
              :class="{
                [`xc-icon-${state.type}`]: state.type,
              }"
              :icon="iconComponent"
            />
            <div v-if="hasMessage" class="xc-message-box__message">
              <slot>
                <component
                  :is="state.showInput ? 'label' : 'p'"
                  :for="state.showInput ? inputId : void 0"
                >
                  {{ state.message }}
                </component>
              </slot>
            </div>
          </div>
          <div v-show="state.showInput" class="xc-message-box__input">
            <xc-input
              v-model="state.inputValue"
              ref="inputRef"
              :placeholder="state.inputPlaceholder"
              :type="state.inputType"
              @keyup.enter="handleInputEnter"
            />
          </div>
          <div class="xc-message-box__footer">
            <xc-button
              v-if="state.showCancelButton"
              class="xc-message-box__footer-btn xc-message-box__cancel-btn"
              :type="state.cancelButtonType"
              :round="state.roundButton"
              :loading="state.cancelButtonLoading"
              @click="handleAction('cancel')"
              @keydown.prevent.enter="handleAction('cancel')"
              >{{ state.cancelButtonText }}</xc-button
            >
            <xc-button
              v-show="state.showConfirmButton"
              class="xc-message-box__footer-btn xc-message-box__confirm-btn"
              :type="state.confirmButtonType ?? 'primary'"
              :round="state.roundButton"
              :loading="state.confirmButtonLoading"
              @click="handleAction('confirm')"
              @keydown.prevent.enter="handleAction('confirm')"
              >{{ state.confirmButtonText }}</xc-button
            >
          </div>
        </div>
      </div>
    </xc-overlay>
  </transition>
</template>

<style>
@import './style.css';
</style>
