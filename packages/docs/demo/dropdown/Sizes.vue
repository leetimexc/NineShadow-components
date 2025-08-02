<script setup lang="ts">
function handleCommand(command: string | number) {
  console.log(`点击了菜单项: ${command}`)
}
</script>

<template>
  <div class="demo-dropdown-sizes">
    <xc-dropdown size="large" @command="handleCommand">
      <xc-button type="primary" size="large">
        大型菜单
        <i class="xc-icon-angle-down"></i>
      </xc-button>
      <template #dropdown>
        <xc-dropdown-item label="选项1" command="large-1" />
        <xc-dropdown-item label="选项2" command="large-2" />
        <xc-dropdown-item label="选项3" command="large-3" />
      </template>
    </xc-dropdown>

    <xc-dropdown @command="handleCommand">
      <xc-button type="primary">
        默认尺寸
        <i class="xc-icon-angle-down"></i>
      </xc-button>
      <template #dropdown>
        <xc-dropdown-item label="选项1" command="default-1" />
        <xc-dropdown-item label="选项2" command="default-2" />
        <xc-dropdown-item label="选项3" command="default-3" />
      </template>
    </xc-dropdown>

    <xc-dropdown size="small" @command="handleCommand">
      <xc-button type="primary" size="small">
        小型菜单
        <i class="xc-icon-angle-down"></i>
      </xc-button>
      <template #dropdown>
        <xc-dropdown-item label="选项1" command="small-1" />
        <xc-dropdown-item label="选项2" command="small-2" />
        <xc-dropdown-item label="选项3" command="small-3" />
      </template>
    </xc-dropdown>
  </div>
</template>

<style scoped>
.demo-dropdown-sizes {
  display: flex;
  gap: 16px;
}
</style>
