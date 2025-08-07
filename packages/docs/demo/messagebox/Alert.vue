<script setup lang="ts">
import { NsMessageBox, NsMessage } from "shadow-ui";

function openAlert() {
  NsMessageBox.alert("This is a message", "Title")
    .then((action) => {
      NsMessage.info(`action: ${action}`);
    })
    .catch((action) => {
      NsMessage.warning(`action: ${action}`);
    });
}
</script>

<template>
  <ns-button @click="openAlert" plain> Click to open the Alert</ns-button>
</template>
