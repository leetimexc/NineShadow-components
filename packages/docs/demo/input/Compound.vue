<script lang="ts" setup>
import { ref } from 'vue'

const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
</script>

<template>
  <div>
    <ns-input v-model="input1" placeholder="请输入内容">
      <template #prepend>Http://</template>
    </ns-input>
  </div>
  <div style="margin-top: 15px">
    <ns-input v-model="input2" placeholder="请输入内容">
      <template #append>.com</template>
    </ns-input>
  </div>
  <div style="margin-top: 15px">
    <ns-input v-model="input3" placeholder="请输入内容">
      <template #prepend>Http://</template>
      <template #append>.com</template>
    </ns-input>
  </div>
</template>
