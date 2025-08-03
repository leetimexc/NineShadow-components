<script setup lang="ts">
import { XcMessageBox, XcMessage } from 'shadow-ui'

function openConfirm() {
  XcMessageBox.confirm(
    'proxy will permanently delete the file. Continue?',
    'Warning',
    { type: 'warning' }
  )
    .then((action) => {
      XcMessage.info(`action: ${action}`)
    })
    .catch((action) => {
      XcMessage.warning(`action: ${action}`)
    })
}
</script>

<template>
  <xc-button @click="openConfirm" plain> Click to open the Confirm</xc-button>
</template>
