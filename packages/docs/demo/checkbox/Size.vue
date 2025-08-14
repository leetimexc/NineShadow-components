<template>
  <div class="demo-checkbox">
    <div>
      <ns-checkbox-group v-model="checkboxGroup1" size="large">
        <ns-checkbox-button v-for="item in options" :key="item" :label="item">
          {{ item }}
        </ns-checkbox-button>
      </ns-checkbox-group>
    </div>
    <div style="margin-top: 20px">
      <ns-checkbox-group v-model="checkboxGroup2">
        <ns-checkbox-button v-for="item in options" :key="item" :label="item">
          {{ item }}
        </ns-checkbox-button>
      </ns-checkbox-group>
    </div>
    <div style="margin-top: 20px">
      <ns-checkbox-group v-model="checkboxGroup3" size="small">
        <ns-checkbox-button v-for="item in options" :key="item" :label="item">
          {{ item }}
        </ns-checkbox-button>
      </ns-checkbox-group>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const options = ["选项A", "选项B", "选项C"];
const checkboxGroup1 = ref(["选项A"]);
const checkboxGroup2 = ref(["选项A"]);
const checkboxGroup3 = ref(["选项A"]);
</script>
