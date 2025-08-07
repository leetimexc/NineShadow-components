<script lang="ts" setup>
import { NsNotification } from "shadow-ui";

const open = () => {
  NsNotification.success({
    title: "Info",
    message: "This is a message without close button",
    showClose: false,
  });
};
</script>

<template>
  <ns-button plain @click="open"> Hide close button </ns-button>
</template>
