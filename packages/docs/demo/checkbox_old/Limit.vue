<template>
  <div class="demo-checkbox">
    <ns-checkbox-group v-model="checkedItems" :min="1" :max="2">
      <ns-checkbox v-for="item in items" :key="item" :label="item">
        {{ item }}
      </ns-checkbox>
    </ns-checkbox-group>
  </div>
</template>

<script setup>
import { ref } from "vue";

const items = ["选项A", "选项B", "选项C", "选项D"];
const checkedItems = ref(["选项A", "选项B"]);
</script>
