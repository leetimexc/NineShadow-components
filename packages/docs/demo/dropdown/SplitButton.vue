<script setup lang="ts">
import { type DropdownItemProps, NsMessage } from "shadow-ui";

const items: DropdownItemProps[] = [
  { command: "1", label: "Action 1" },
  { command: "2", label: "Action 2" },
  { command: "3", label: "Action 3", disabled: true },
  { command: "4", label: "Action 4", divided: true },
];

function handleClick() {
  NsMessage.info("button click");
}
</script>

<template>
  <div class="row">
    <ns-dropdown :items="items">
      <ns-button type="primary">
        Dropdown List
        <ns-icon icon="angle-down" style="margin-left: 8px" />
      </ns-button>
    </ns-dropdown>
    <ns-dropdown
      :items="items"
      type="primary"
      @click="handleClick"
      split-button
    >
      Dropdown List
    </ns-dropdown>
  </div>
</template>

<style scoped>
.row div {
  margin-right: 16px;
}
</style>
