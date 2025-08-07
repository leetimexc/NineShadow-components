<script setup lang="ts">
import { h } from "vue";
import { NsNotification } from "shadow-ui";

function openNotify1() {
  NsNotification({
    title: "Title",
    message: h("i", { style: "color:teal" }, "This is a remider"),
    position: "bottom-right",
  });
}

function openNotify2() {
  NsNotification({
    title: "Prompt",
    message: "This is a message that does not auto close",
    duration: 0,
    position: "top-left",
  });
}
</script>

<template>
  <ns-button @click="openNotify1" plain>Closes automatically</ns-button>
  <ns-button @click="openNotify2" plain>Won't closes automatically</ns-button>
</template>
