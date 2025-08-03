<script setup lang="ts">
import { h } from 'vue'
import { XcNotification } from 'shadow-ui'

function openNotify1() {
  XcNotification({
    title: 'Title',
    message: h('i', { style: 'color:teal' }, 'This is a remider'),
    position: 'bottom-right',
  })
}

function openNotify2() {
  XcNotification({
    title: 'Prompt',
    message: 'This is a message that does not auto close',
    duration: 0,
    position: 'top-left',
  })
}
</script>

<template>
  <xc-button @click="openNotify1" plain>Closes automatically</xc-button>
  <xc-button @click="openNotify2" plain>Won't closes automatically</xc-button>
</template>
