<script setup>
import { XcMessage } from 'shadow-ui'

function handleClose() {
  XcMessage.info('close callback')
}
</script>
<template>
  <div class="basic block">
    <xc-alert title="Unclosable alert" type="success" closable />
    <xc-alert
      title="Alert with callback"
      type="warning"
      closable
      @close="handleClose"
    />
  </div>
</template>
