<script setup lang="ts">
import { XcMessage, XcMessageBox } from 'shadow-ui'

function openMsgBox() {
  XcMessageBox.confirm(
    'proxy will permanently delete the file. Continue?',
    'Warning',
    {
      type: 'warning',
      center: true,
      // 这里展示一下 不用 Promise 写法的时候
      callback(action) {
        if (action === 'confirm') {
          XcMessage.info(action)
        } else {
          XcMessage.warning(action as string)
        }
      },
    }
  )
}
</script>

<template>
  <xc-button @click="openMsgBox" plain>Click to open Message Box</xc-button>
</template>
