<template>
  <ns-affix :offset="80" position="bottom" @change="change">
    <ns-button>offset bottom 80px</ns-button>
  </ns-affix>
</template>
<script lang="ts" setup>
const change = (v: any) => {
  console.log(v)
}
</script>
