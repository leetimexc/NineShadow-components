<script setup lang="ts">
import { type DropdownItemProps, XcMessage } from 'shadow-ui'

const items: DropdownItemProps[] = [
  { command: '1', label: 'Action 1' },
  { command: '2', label: 'Action 2' },
  { command: '3', label: 'Action 3', disabled: true },
  { command: '4', label: 'Action 4', divided: true },
]

function handleClick() {
  XcMessage.info('button click')
}
</script>

<template>
  <div class="row">
    <xc-dropdown :items="items">
      <xc-button type="primary">
        Dropdown List
        <xc-icon icon="angle-down" style="margin-left: 8px" />
      </xc-button>
    </xc-dropdown>
    <xc-dropdown
      :items="items"
      type="primary"
      @click="handleClick"
      split-button
    >
      Dropdown List
    </xc-dropdown>
  </div>
</template>

<style scoped>
.row div {
  margin-right: 16px;
}
</style>
