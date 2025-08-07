<script lang="ts" setup>
import { NsMessage } from "shadow-ui";

const open1 = () => {
  NsMessage({
    message: "Congrats, this is a success message.",
    type: "success",
  });
};
const open2 = () => {
  NsMessage.success("Congrats, this is a success message.");
};
</script>
<template>
  <div>
    <ns-button @click="open1">插件式调用</ns-button>
    <ns-button @click="open2">函数式调用</ns-button>
    <ns-button @click="$message.success('Congrats, this is a success message.')"
      >全局方法调用</ns-button
    >
  </div>
</template>
