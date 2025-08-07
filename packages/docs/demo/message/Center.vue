<script lang="ts" setup>
import { NsMessage } from "shadow-ui";

const openCenter = () => {
  NsMessage({
    showClose: true,
    message: "Centered text",
    center: true,
  });
};
</script>

<template>
  <ns-button plain @click="openCenter">Centered text</ns-button>
</template>
