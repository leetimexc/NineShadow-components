<script setup lang="ts">
import { h } from 'vue'
import { XcMessage, XcMessageBox } from 'shadow-ui'
import { delay } from 'lodash-es'

async function openMsgBox() {
  try {
    const action = await XcMessageBox({
      title: 'Message',
      message: h('p', null, [
        h('span', null, 'Message can be '),
        h('i', { style: 'color: teal' }, 'VNode'),
      ]),
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      type: 'danger',
      icon: 'trash',
      beforeClose(action, instance, done) {
        if (action !== 'confirm') {
          done()
          return
        }

        instance.confirmButtonLoading = true
        instance.confirmButtonText = 'Loading...'
        delay(() => {
          done()
          delay(() => (instance.confirmButtonLoading = false), 1000)
        }, 3000)
      },
    })

    XcMessage.info(`action : ${action}`)
  } catch (action) {
    XcMessage.warning(`action : ${action}`)
  }
}
</script>

<template>
  <xc-button @click="openMsgBox" plain>Click to open Message Box</xc-button>
</template>
