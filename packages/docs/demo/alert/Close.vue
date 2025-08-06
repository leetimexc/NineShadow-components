<script setup>
import { NsMessage } from "shadow-ui";

function handleClose() {
  NsMessage.info("close callback");
}
</script>
<template>
  <div class="basic block">
    <ns-alert title="Unclosable alert" type="success" :closable="false" />
    <ns-alert title="Alert with callback" type="warning" @close="handleClose" />
  </div>
</template>
