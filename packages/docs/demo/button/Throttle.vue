<script setup>
// import { XcMessage } from 'xc-element'
function handleBtnClick() {
  // XcMessage.info('btn click')
  console.log('btn click')
}
</script>

<template>
  <p>
    <xc-button @click="handleBtnClick"> with throttle</xc-button>
    <xc-button :use-throttle="false" @click="handleBtnClick"
      >without throttle</xc-button
    >
  </p>
</template>
