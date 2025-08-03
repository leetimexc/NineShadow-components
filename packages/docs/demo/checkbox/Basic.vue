<template>
  <div class="demo-checkbox">
    <xc-checkbox v-model="checked1">选项1</xc-checkbox>
    <xc-checkbox v-model="checked2">选项2</xc-checkbox>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const checked1 = ref(true)
const checked2 = ref(false)
</script>

<style scoped>
.demo-checkbox .xc-checkbox {
  margin-right: 20px;
}
</style>
