<script lang="ts" setup>
import { NsNotification } from "shadow-ui";

const open1 = () => {
  NsNotification({
    title: "Success",
    message: "This is a success message",
    type: "success",
  });
};

const open2 = () => {
  NsNotification({
    title: "Warning",
    message: "This is a warning message",
    type: "warning",
  });
};

const open3 = () => {
  NsNotification({
    title: "Info",
    message: "This is an info message",
    type: "info",
  });
};

const open4 = () => {
  NsNotification({
    title: "Error",
    message: "This is an error message",
    type: "danger",
  });
};
</script>

<template>
  <ns-button plain @click="open1"> Success </ns-button>
  <ns-button plain @click="open2"> Warning </ns-button>
  <ns-button plain @click="open3"> Info </ns-button>
  <ns-button plain @click="open4"> Error </ns-button>
</template>
