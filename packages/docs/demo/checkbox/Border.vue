<template>
  <div class="demo-checkbox">
    <div>
      <ns-checkbox v-model="checked1" label="选项1" border></ns-checkbox>
      <ns-checkbox v-model="checked2" label="选项2" border></ns-checkbox>
    </div>
    <div style="margin-top: 20px">
      <ns-checkbox
        v-model="checked3"
        label="选项1"
        border
        disabled
      ></ns-checkbox>
      <ns-checkbox
        v-model="checked4"
        label="选项2"
        border
        disabled
      ></ns-checkbox>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const checked1 = ref(true);
const checked2 = ref(false);
const checked3 = ref(true);
const checked4 = ref(false);
</script>

<style scoped>
.demo-checkbox .ns-checkbox {
  margin-right: 20px;
}
</style>
