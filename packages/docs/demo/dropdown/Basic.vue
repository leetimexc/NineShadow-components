<script setup lang="ts">
import { ref } from 'vue'

function handleCommand(command: string | number) {
  console.log(`点击了菜单项: ${command}`)
}
</script>

<template>
  <xc-dropdown @command="handleCommand">
    <xc-button type="primary">
      下拉菜单
      <i class="xc-icon-angle-down"></i>
    </xc-button>
    <template #dropdown>
      <xc-dropdown-item label="选项1" command="1" />
      <xc-dropdown-item label="选项2" command="2" />
      <xc-dropdown-item label="选项3" command="3" />
      <xc-dropdown-item label="选项4" command="4" disabled />
      <xc-dropdown-item label="选项5" command="5" divided />
    </template>
  </xc-dropdown>
</template>
