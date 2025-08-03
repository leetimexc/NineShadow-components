<script setup lang="ts">
import { XcMessageBox, XcMessage } from 'shadow-ui'

function openConfirm() {
  XcMessageBox.prompt('Place input your name', 'Tip', { type: 'info' })
    .then(({ value }) => {
      XcMessage.info(`your name is: ${value}`)
    })
    .catch((action) => {
      XcMessage.warning(`action: ${action}`)
    })
}
</script>

<template>
  <xc-button @click="openConfirm" plain> Click to open the Confirm</xc-button>
</template>
