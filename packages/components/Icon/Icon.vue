<script setup lang="ts">
import { type IconProps } from './types'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { omit } from 'lodash-es'
import { computed } from 'vue'

defineOptions({
  name: 'NsIcon',
  inheritAttrs: false,
})

const props = defineProps<IconProps>()

const filterProps = computed(() => omit(props, ['type', 'color']))
const customStyles = computed(() => ({ color: props.color ?? void 0 }))
</script>

<template>
  <i
    class="ns-icon"
    :class="{ [`ns-icon--${type}`]: type }"
    :style="customStyles"
    v-bind="$attrs"
  >
    <font-awesome-icon v-bind="filterProps" />
  </i>
</template>

<style scoped>
@import './style.css';
</style>
