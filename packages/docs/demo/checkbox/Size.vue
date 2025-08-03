<template>
  <div class="demo-checkbox">
    <div>
      <xc-checkbox-group v-model="checkboxGroup1" size="large">
        <xc-checkbox-button v-for="item in options" :key="item" :label="item">
          {{ item }}
        </xc-checkbox-button>
      </xc-checkbox-group>
    </div>
    <div style="margin-top: 20px">
      <xc-checkbox-group v-model="checkboxGroup2">
        <xc-checkbox-button v-for="item in options" :key="item" :label="item">
          {{ item }}
        </xc-checkbox-button>
      </xc-checkbox-group>
    </div>
    <div style="margin-top: 20px">
      <xc-checkbox-group v-model="checkboxGroup3" size="small">
        <xc-checkbox-button v-for="item in options" :key="item" :label="item">
          {{ item }}
        </xc-checkbox-button>
      </xc-checkbox-group>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const options = ['选项A', '选项B', '选项C']
const checkboxGroup1 = ref(['选项A'])
const checkboxGroup2 = ref(['选项A'])
const checkboxGroup3 = ref(['选项A'])
</script>
