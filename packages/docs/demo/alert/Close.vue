<script setup>
import { XcMessage } from 'xc-element'

function handleClose() {
  XcMessage.info('close callback')
}
</script>
<template>
  <div class="basic block">
    <xc-alert title="Unclosable alert" type="success" :closable="false" />
    <xc-alert title="Alert with callback" type="warning" @close="handleClose" />
  </div>
</template>
