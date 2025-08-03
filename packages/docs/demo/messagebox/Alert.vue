<script setup lang="ts">
import { XcMessageBox, XcMessage } from 'shadow-ui'

function openAlert() {
  XcMessageBox.alert('This is a message', 'Title')
    .then((action) => {
      XcMessage.info(`action: ${action}`)
    })
    .catch((action) => {
      XcMessage.warning(`action: ${action}`)
    })
}
</script>

<template>
  <xc-button @click="openAlert" plain> Click to open the Alert</xc-button>
</template>
