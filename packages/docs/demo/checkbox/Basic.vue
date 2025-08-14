<template>
  <div class="demo-checkbox">
    <ns-checkbox v-model="checked1">选项1</ns-checkbox>
    <ns-checkbox v-model="checked2">选项2</ns-checkbox>
  </div>
</template>

<script setup>
import { ref } from "vue";

const checked1 = ref(true);
const checked2 = ref(false);
</script>

<style scoped>
.demo-checkbox .ns-checkbox {
  margin-right: 20px;
}
</style>
