<script lang="ts" setup>
import { XcMessage } from 'shadow-ui'

const open1 = () => {
  XcMessage({
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
}
const open2 = () => {
  XcMessage.success('Congrats, this is a success message.')
}
</script>
<template>
  <div>
    <xc-button @click="open1">插件式调用</xc-button>
    <xc-button @click="open2">函数式调用</xc-button>
    <xc-button @click="$message.success('Congrats, this is a success message.')"
      >全局方法调用</xc-button
    >
  </div>
</template>
