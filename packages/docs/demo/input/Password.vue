<script lang="ts" setup>
import { ref } from 'vue'

const input = ref('')
</script>

<template>
  <div>
    <ns-input v-model="input" show-password placeholder="请输入密码" />
  </div>
</template>
