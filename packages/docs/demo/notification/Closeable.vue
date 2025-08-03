<script lang="ts" setup>
import { XcNotification } from 'shadow-ui'

const open = () => {
  XcNotification.success({
    title: 'Info',
    message: 'This is a message without close button',
    showClose: false,
  })
}
</script>

<template>
  <xc-button plain @click="open"> Hide close button </xc-button>
</template>
