<template>
  <div class="demo-checkbox">
    <div>
      <xc-checkbox v-model="checked1" label="选项1" border></xc-checkbox>
      <xc-checkbox v-model="checked2" label="选项2" border></xc-checkbox>
    </div>
    <div style="margin-top: 20px">
      <xc-checkbox
        v-model="checked3"
        label="选项1"
        border
        disabled
      ></xc-checkbox>
      <xc-checkbox
        v-model="checked4"
        label="选项2"
        border
        disabled
      ></xc-checkbox>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const checked1 = ref(true)
const checked2 = ref(false)
const checked3 = ref(true)
const checked4 = ref(false)
</script>

<style scoped>
.demo-checkbox .xc-checkbox {
  margin-right: 20px;
}
</style>
