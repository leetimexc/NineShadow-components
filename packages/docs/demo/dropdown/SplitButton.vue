<script setup lang="ts">
function handleCommand(command: string | number) {
  console.log(`点击了菜单项: ${command}`)
}

function handleClick() {
  console.log('按钮被点击')
}
</script>

<template>
  <div class="demo-dropdown-split-button">
    <xc-dropdown
      split-button
      type="primary"
      @click="handleClick"
      @command="handleCommand"
    >
      分割按钮
      <template #dropdown>
        <xc-dropdown-item label="选项1" command="1" />
        <xc-dropdown-item label="选项2" command="2" />
        <xc-dropdown-item label="选项3" command="3" />
      </template>
    </xc-dropdown>
  </div>
</template>

<style scoped>
.demo-dropdown-split-button {
  margin-bottom: 20px;
}
</style>
