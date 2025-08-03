<script lang="ts" setup>
import { XcMessage } from 'shadow-ui'

const open1 = () => {
  XcMessage({
    showClose: true,
    message: 'This is a message.',
  })
}
const open2 = () => {
  XcMessage({
    showClose: true,
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
}
const open3 = () => {
  XcMessage({
    showClose: true,
    message: 'Warning, this is a warning message.',
    type: 'warning',
  })
}
const open4 = () => {
  XcMessage({
    showClose: true,
    message: 'Oops, this is a error message.',
    type: 'danger',
  })
}
</script>

<template>
  <xc-button :plain="true" @click="open1">Message</xc-button>
  <xc-button :plain="true" @click="open2">Success</xc-button>
  <xc-button :plain="true" @click="open3">Warning</xc-button>
  <xc-button :plain="true" @click="open4">Error</xc-button>
</template>
