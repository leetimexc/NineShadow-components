<script lang="ts" setup>
import { XcMessage } from 'shadow-ui'

const openCenter = () => {
  XcMessage({
    showClose: true,
    message: 'Centered text',
    center: true,
  })
}
</script>

<template>
  <xc-button plain @click="openCenter">Centered text</xc-button>
</template>
