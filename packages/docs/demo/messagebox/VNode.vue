<script setup lang="ts">
import { h, ref } from 'vue'
import { XcMessageBox, XcSwitch, type SwitchValueType } from 'shadow-ui'

function open1() {
  XcMessageBox({
    title: 'Message',
    message: h('p', null, [
      h('span', null, 'Message can be '),
      h('i', { style: 'color: teal' }, 'VNode'),
    ]),
  })
}

function open2() {
  const checked = ref<SwitchValueType>(false)
  XcMessageBox({
    title: 'Message',
    message: () =>
      h(XcSwitch, {
        modelValue: checked.value,
        'onUpdate:modelValue': (val: SwitchValueType) => {
          checked.value = val
        },
      }),
  })
}
</script>

<template>
  <xc-button @click="open1" plain>Common VNode</xc-button>
  <xc-button @click="open2" plain>Dynamic props</xc-button>
</template>
