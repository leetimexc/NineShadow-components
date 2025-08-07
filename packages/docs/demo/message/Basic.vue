<script lang="ts" setup>
import { h } from "vue";
import { NsMessage } from "shadow-ui";

const open = () => {
  NsMessage("This is a message.");
};

const openVn = () => {
  NsMessage({
    message: h("p", { style: "line-height: 1; font-size: 14px" }, [
      h("span", null, "Message can be "),
      h("i", { style: "color: teal" }, "VNode"),
    ]),
  });
};
</script>

<template>
  <ns-button :plain="true" @click="open">Show message</ns-button>
  <ns-button :plain="true" @click="openVn">VNode</ns-button>
</template>
