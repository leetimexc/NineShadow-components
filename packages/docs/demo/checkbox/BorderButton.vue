<template>
  <div class="demo-checkbox">
    <ns-checkbox-group v-model="checkboxGroup1">
      <ns-checkbox-button
        v-for="item in options"
        :key="item"
        :label="item"
        border
      >
        {{ item }}
      </ns-checkbox-button>
    </ns-checkbox-group>
  </div>
</template>

<script setup>
import { ref } from "vue";

const options = ["选项A", "选项B", "选项C"];
const checkboxGroup1 = ref(["选项A"]);
</script>
