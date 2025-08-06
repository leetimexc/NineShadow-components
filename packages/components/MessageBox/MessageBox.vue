<script setup lang="ts">
import type { MessageBoxProps, MessageBoxAction } from './types'
import type { InputInstance } from '../Input/types'
import { useZIndex, useId } from '@shadow-ui/hooks'
import { typeIconMap } from '@shadow-ui/utils'
import { reactive, computed, ref, watch, nextTick, type Ref } from 'vue'

import NsOverlay from '../Overlay/Overlay.vue'
import NsIcon from '../Icon/Icon.vue'
import NsButton from '../Button/Button.vue'
import NsInput from '../Input/Input.vue'
import { isFunction, isNil } from 'lodash-es'

defineOptions({
  name: 'NsMessageBox',
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
    <ns-overlay v-show="(visible as Ref).value" :z-index="state.zIndex" mask>
      <div
        role="dialog"
        class="ns-overlay-message-box"
        @click="handleWrapperClick"
      >
        <div
          ref="rootRef"
          :class="[
            'ns-message-box',
            {
              'is-center': state.center,
            },
          ]"
          @click.stop
        >
          <div
            v-if="!isNil(state.title)"
            ref="headerRef"
            class="ns-message-box__header"
            :class="{ 'show-close': state.showClose }"
          >
            <div class="ns-message-box__title">
              <ns-icon
                v-if="iconComponent && state.center"
                :class="{
                  [`ns-icon-${state.type}`]: state.type,
                }"
                :icon="iconComponent"
              />
              {{ state.title }}
            </div>
            <button
              v-if="showClose"
              class="ns-message-box__header-btn"
              @click.stop="handleClose"
            >
              <ns-icon icon="xmark" />
            </button>
          </div>
          <div class="ns-message-box__content">
            <ns-icon
              v-if="iconComponent && !state.center && hasMessage"
              :class="{
                [`ns-icon-${state.type}`]: state.type,
              }"
              :icon="iconComponent"
            />
            <div v-if="hasMessage" class="ns-message-box__message">
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
          <div v-show="state.showInput" class="ns-message-box__input">
            <ns-input
              v-model="state.inputValue"
              ref="inputRef"
              :placeholder="state.inputPlaceholder"
              :type="state.inputType"
              @keyup.enter="handleInputEnter"
            />
          </div>
          <div class="ns-message-box__footer">
            <ns-button
              v-if="state.showCancelButton"
              class="ns-message-box__footer-btn ns-message-box__cancel-btn"
              :type="state.cancelButtonType"
              :round="state.roundButton"
              :loading="state.cancelButtonLoading"
              @click="handleAction('cancel')"
              @keydown.prevent.enter="handleAction('cancel')"
              >{{ state.cancelButtonText }}</ns-button
            >
            <ns-button
              v-show="state.showConfirmButton"
              class="ns-message-box__footer-btn ns-message-box__confirm-btn"
              :type="state.confirmButtonType ?? 'primary'"
              :round="state.roundButton"
              :loading="state.confirmButtonLoading"
              @click="handleAction('confirm')"
              @keydown.prevent.enter="handleAction('confirm')"
              >{{ state.confirmButtonText }}</ns-button
            >
          </div>
        </div>
      </div>
    </ns-overlay>
  </transition>
</template>

<style>
@import './style.css';
</style>
