<script setup lang="ts">
import { NsMessage, NsMessageBox } from "shadow-ui";

function openMsgBox() {
  NsMessageBox.confirm(
    "proxy will permanently delete the file. Continue?",
    "Warning",
    {
      type: "warning",
      center: true,
      // 这里展示一下 不用 Promise 写法的时候
      callback(action) {
        if (action === "confirm") {
          NsMessage.info(action);
        } else {
          NsMessage.warning(action as string);
        }
      },
    }
  );
}
</script>

<template>
  <ns-button @click="openMsgBox" plain>Click to open Message Box</ns-button>
</template>
