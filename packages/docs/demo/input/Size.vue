<script lang="ts" setup>
import { ref } from 'vue'

const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
</script>

<template>
  <div class="demo-input-size">
    <ns-input v-model="input1" size="large" placeholder="请输入内容" />
    <div style="margin: 15px 0">
      <ns-input v-model="input2" placeholder="请输入内容" />
    </div>
    <ns-input v-model="input3" size="small" placeholder="请输入内容" />
  </div>
</template>

<style scoped>
.demo-input-size .ns-input {
  width: 100%;
}
</style>
