<script lang="ts" setup>
import type { AlertProps, AlertEmits, AlertInstance } from "./types";
import { typeIconMap } from "@shadow-ui/utils";
import { ref, computed } from "vue";
import NsIcon from "../Icon/Icon.vue";

defineOptions({
  name: "NsAlert",
});
const props = withDefaults(defineProps<AlertProps>(), {
  effect: "light",
  type: "info",
  closable: true,
});
const emit = defineEmits<AlertEmits>();
const slots = defineSlots();

const visible = ref(true);

const iconName = computed(() => typeIconMap.get(props.type) ?? "circle-info");
const withDescription = computed(() => props.description || slots.default);

function close() {
  visible.value = false;
  emit("close");
}

function open() {
  visible.value = true;
}

defineExpose<AlertInstance>({
  close,
  open,
});
</script>
<template>
  <transition name="ns-alert-fade">
    <div
      v-show="visible"
      class="ns-alert"
      role="alert"
      :class="{
        [`ns-alert__${props.type}`]: props.type,
        [`ns-alert__${props.effect}`]: props.effect,
        'text-center': props.center,
      }"
    >
      <NsIcon
        v-if="props.showIcon"
        class="ns-alert__icon"
        :class="{ 'big-icon': withDescription }"
        :icon="iconName"
      />
      <div class="ns-alert__content">
        <span
          class="ns-alert__title"
          :class="{ 'with-desc': withDescription }"
          :style="{
            display: props.center && !props.showIcon ? 'flow' : 'inline',
          }"
        >
          <slot name="title">{{ props.title }}</slot>
        </span>
        <p class="ns-alert__description">
          <slot>{{ props.description }}</slot>
        </p>
        <div class="ns-alert__close" v-if="props.closable">
          <NsIcon @click.stop="close" icon="xmark" />
        </div>
      </div>
    </div>
  </transition>
</template>
<style scoped>
@import "./style.css";
</style>
