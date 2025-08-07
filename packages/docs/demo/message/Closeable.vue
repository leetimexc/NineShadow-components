<script lang="ts" setup>
import { NsMessage } from "shadow-ui";

const open1 = () => {
  NsMessage({
    showClose: true,
    message: "This is a message.",
  });
};
const open2 = () => {
  NsMessage({
    showClose: true,
    message: "Congrats, this is a success message.",
    type: "success",
  });
};
const open3 = () => {
  NsMessage({
    showClose: true,
    message: "Warning, this is a warning message.",
    type: "warning",
  });
};
const open4 = () => {
  NsMessage({
    showClose: true,
    message: "Oops, this is a error message.",
    type: "danger",
  });
};
</script>

<template>
  <ns-button :plain="true" @click="open1">Message</ns-button>
  <ns-button :plain="true" @click="open2">Success</ns-button>
  <ns-button :plain="true" @click="open3">Warning</ns-button>
  <ns-button :plain="true" @click="open4">Error</ns-button>
</template>
