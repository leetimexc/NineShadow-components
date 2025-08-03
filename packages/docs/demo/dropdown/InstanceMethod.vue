<script setup lang="ts">
import type { DropdownItemProps, DropdownInstance } from 'shadow-ui'
import { ref } from 'vue'

const items: DropdownItemProps[] = [
  { command: '1', label: 'Action 1' },
  { command: '2', label: 'Action 2' },
  { command: '3', label: 'Action 3', disabled: true },
  { command: '4', label: 'Action 4', divided: true },
]
const dropdownRef = ref<DropdownInstance>()
</script>

<template>
  <xc-button @click="() => dropdownRef?.open()">open</xc-button>
  <xc-button @click="() => dropdownRef?.close()">close</xc-button>
  <br />
  <xc-dropdown ref="dropdownRef" :items="items">
    <span class="dropdown-link">
      Dropdown List
      <xc-icon icon="angle-down" />
    </span>
  </xc-dropdown>
</template>

<style scoped>
.dropdown-link {
  display: flex;
  align-items: center;
  cursor: pointer;
  color: var(--xc-color-primary);
  margin-top: 20px;
  i {
    margin-left: 8px;
  }
}
</style>
