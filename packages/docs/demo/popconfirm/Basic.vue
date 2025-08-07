<script setup lang="ts">
import { ja, ko, en, zhCn, zhTw, NsConfigProvider } from "shadow-ui";
import { get } from "lodash-es";

import { computed, ref } from "vue";

const language = ref("");
const langMap = {
  ja,
  ko,
  en,
  zhCn,
  zhTw,
} as const;
const locale = computed(() => get(langMap, language.value));
const changelang = () => {
  const l = ["zhCn", "zhTw", "ko", "en", "ja"];
  language.value = l[(l.indexOf(language.value) + 1) % l.length];
};
</script>
<template>
  <ns-button @click="changelang" type="info" style="margin-right: 20px"
    >change language</ns-button
  >
  <ns-config-provider :locale="locale">
    <ns-popconfirm title="Are you shure to delete this item?">
      <ns-button>Delete</ns-button>
    </ns-popconfirm>
  </ns-config-provider>
</template>
