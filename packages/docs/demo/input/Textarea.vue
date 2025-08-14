<script lang="ts" setup>
import { ref } from 'vue'

const textarea = ref('')
</script>

<template>
  <div>
    <ns-input
      v-model="textarea"
      type="textarea"
      placeholder="请输入内容"
      :rows="2"
    />
  </div>
</template>
