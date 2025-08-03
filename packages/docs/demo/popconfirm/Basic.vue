<script setup lang="ts">
import { ja, ko, en, zhCn, zhTw, XcConfigProvider } from 'shadow-ui'
import { get } from 'lodash-es'

import { computed, ref } from 'vue'

const language = ref('')
const langMap = {
  ja,
  ko,
  en,
  zhCn,
  zhTw,
} as const
const locale = computed(() => get(langMap, language.value))
const changelang = () => {
  const l = ['zhCn', 'zhTw', 'ko', 'en', 'ja']
  language.value = l[(l.indexOf(language.value) + 1) % l.length]
}
</script>
<template>
  <xc-button @click="changelang" type="info" style="margin-right: 20px"
    >change language</xc-button
  >
  <xc-config-provider :locale="locale">
    <xc-popconfirm title="Are you shure to delete this item?">
      <xc-button>Delete</xc-button>
    </xc-popconfirm>
  </xc-config-provider>
</template>
