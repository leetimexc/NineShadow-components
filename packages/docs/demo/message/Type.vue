<script lang="ts" setup>
import { NsMessage } from "shadow-ui";

const open1 = () => {
  NsMessage("This is a message.");
};
const open2 = () => {
  NsMessage({
    message: "Congrats, this is a success message.",
    type: "success",
  });
};
const open3 = () => {
  NsMessage({
    message: "Warning, this is a warning message.",
    type: "warning",
  });
};
const open4 = () => {
  NsMessage.error("Oops, this is a error message.");
};
</script>

<template>
  <ns-button :plain="true" @click="open2">Success</ns-button>
  <ns-button :plain="true" @click="open3">Warning</ns-button>
  <ns-button :plain="true" @click="open1">Message</ns-button>
  <ns-button :plain="true" @click="open4">Error</ns-button>
</template>
