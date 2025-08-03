<template>
  <div class="demo-checkbox">
    <xc-checkbox-group v-model="checkList">
      <xc-checkbox label="选项A"></xc-checkbox>
      <xc-checkbox label="选项B"></xc-checkbox>
      <xc-checkbox label="选项C"></xc-checkbox>
      <xc-checkbox label="禁用" disabled></xc-checkbox>
      <xc-checkbox label="选中且禁用" disabled></xc-checkbox>
    </xc-checkbox-group>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const checkList = ref(['选项A', '选中且禁用'])
</script>
