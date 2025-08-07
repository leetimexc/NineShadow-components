<script setup lang="ts">
import { NsMessageBox, NsMessage } from "shadow-ui";

function openConfirm() {
  NsMessageBox.prompt("Place input your name", "Tip", { type: "info" })
    .then(({ value }) => {
      NsMessage.info(`your name is: ${value}`);
    })
    .catch((action) => {
      NsMessage.warning(`action: ${action}`);
    });
}
</script>

<template>
  <ns-button @click="openConfirm" plain> Click to open the Confirm</ns-button>
</template>
