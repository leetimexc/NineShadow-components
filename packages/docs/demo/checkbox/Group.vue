<template>
  <div class="demo-checkbox">
    <ns-checkbox-group v-model="checkList">
      <ns-checkbox label="选项A"></ns-checkbox>
      <ns-checkbox label="选项B"></ns-checkbox>
      <ns-checkbox label="选项C"></ns-checkbox>
      <ns-checkbox label="禁用" disabled></ns-checkbox>
      <ns-checkbox label="选中且禁用" disabled></ns-checkbox>
    </ns-checkbox-group>
  </div>
</template>

<script setup>
import { ref } from "vue";

const checkList = ref(["选项A", "选中且禁用"]);
</script>
