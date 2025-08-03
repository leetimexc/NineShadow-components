<script lang="ts" setup>
import { h } from 'vue'
import { XcMessage } from 'shadow-ui'

const open = () => {
  XcMessage('This is a message.')
}

const openVn = () => {
  XcMessage({
    message: h('p', { style: 'line-height: 1; font-size: 14px' }, [
      h('span', null, 'Message can be '),
      h('i', { style: 'color: teal' }, 'VNode'),
    ]),
  })
}
</script>

<template>
  <xc-button :plain="true" @click="open">Show message</xc-button>
  <xc-button :plain="true" @click="openVn">VNode</xc-button>
</template>
