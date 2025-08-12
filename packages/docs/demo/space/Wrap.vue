<template>
  <p>反转换行：</p>
  <ns-space wrap="reverse" :size="[10, 20]" class="margin" style="width: 300px">
    <ns-button v-for="item in 10" :key="item">按钮</ns-button>
  </ns-space>
</template>
