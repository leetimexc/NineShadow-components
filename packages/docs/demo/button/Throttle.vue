<script setup>
// import { NsMessage } from 'shadow-ui'
function handleBtnClick() {
  // NsMessage.info('btn click')
  console.log("btn click");
}
</script>

<template>
  <p>
    <ns-button @click="handleBtnClick"> with throttle</ns-button>
    <ns-button :use-throttle="false" @click="handleBtnClick"
      >without throttle</ns-button
    >
  </p>
</template>
