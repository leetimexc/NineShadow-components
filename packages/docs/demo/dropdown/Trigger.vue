<script setup lang="ts">
function handleCommand(command: string | number) {
  console.log(`点击了菜单项: ${command}`)
}
</script>

<template>
  <div class="demo-dropdown-trigger">
    <xc-dropdown trigger="hover" @command="handleCommand">
      <xc-button type="primary">
        悬停触发
        <i class="xc-icon-angle-down"></i>
      </xc-button>
      <template #dropdown>
        <xc-dropdown-item label="选项1" command="hover-1" />
        <xc-dropdown-item label="选项2" command="hover-2" />
        <xc-dropdown-item label="选项3" command="hover-3" />
      </template>
    </xc-dropdown>

    <xc-dropdown trigger="click" @command="handleCommand">
      <xc-button type="primary">
        点击触发
        <i class="xc-icon-angle-down"></i>
      </xc-button>
      <template #dropdown>
        <xc-dropdown-item label="选项1" command="click-1" />
        <xc-dropdown-item label="选项2" command="click-2" />
        <xc-dropdown-item label="选项3" command="click-3" />
      </template>
    </xc-dropdown>
  </div>
</template>

<style scoped>
.demo-dropdown-trigger {
  display: flex;
  gap: 16px;
}
</style>
