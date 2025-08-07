<script setup lang="ts">
import { NsMessageBox, NsMessage } from "shadow-ui";

function openConfirm() {
  NsMessageBox.confirm(
    "proxy will permanently delete the file. Continue?",
    "Warning",
    { type: "warning" }
  )
    .then((action) => {
      NsMessage.info(`action: ${action}`);
    })
    .catch((action) => {
      NsMessage.warning(`action: ${action}`);
    });
}
</script>

<template>
  <ns-button @click="openConfirm" plain> Click to open the Confirm</ns-button>
</template>
