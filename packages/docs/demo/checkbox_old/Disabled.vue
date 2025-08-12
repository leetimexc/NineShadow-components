<template>
  <div class="demo-checkbox">
    <ns-checkbox v-model="checked1" disabled>禁用且选中</ns-checkbox>
    <ns-checkbox v-model="checked2" disabled>禁用且未选中</ns-checkbox>
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
