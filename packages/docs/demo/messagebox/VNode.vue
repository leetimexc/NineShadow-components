<script setup lang="ts">
import { h, ref } from "vue";
import { NsMessageBox, NsSwitch, type SwitchValueType } from "shadow-ui";

function open1() {
  NsMessageBox({
    title: "Message",
    message: h("p", null, [
      h("span", null, "Message can be "),
      h("i", { style: "color: teal" }, "VNode"),
    ]),
  });
}

function open2() {
  const checked = ref<SwitchValueType>(false);
  NsMessageBox({
    title: "Message",
    message: () =>
      h(NsSwitch, {
        modelValue: checked.value,
        "onUpdate:modelValue": (val: SwitchValueType) => {
          checked.value = val;
        },
      }),
  });
}
</script>

<template>
  <ns-button @click="open1" plain>Common VNode</ns-button>
  <ns-button @click="open2" plain>Dynamic props</ns-button>
</template>
