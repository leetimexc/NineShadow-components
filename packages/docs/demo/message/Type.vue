<script lang="ts" setup>
import { XcMessage } from 'shadow-ui'

const open1 = () => {
  XcMessage('This is a message.')
}
const open2 = () => {
  XcMessage({
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
}
const open3 = () => {
  XcMessage({
    message: 'Warning, this is a warning message.',
    type: 'warning',
  })
}
const open4 = () => {
  XcMessage.error('Oops, this is a error message.')
}
</script>

<template>
  <xc-button :plain="true" @click="open2">Success</xc-button>
  <xc-button :plain="true" @click="open3">Warning</xc-button>
  <xc-button :plain="true" @click="open1">Message</xc-button>
  <xc-button :plain="true" @click="open4">Error</xc-button>
</template>
