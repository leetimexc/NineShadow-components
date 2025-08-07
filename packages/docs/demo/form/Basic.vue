<script lang="ts" setup>
import { reactive, ref } from "vue";
import { NsMessage } from "shadow-ui";

const form = reactive({
  name: "",
  region: "",
  delivery: false,
  desc: "",
});

const options = ref([
  { value: "beijing", label: "Zone One" },
  { value: "shanghai", label: "Zone Two" },
]);

const onSubmit = () => {
  NsMessage.success("submit!");
};
</script>

<template>
  <ns-form :model="form">
    <ns-form-item label="Activity name">
      <ns-input v-model="form.name" />
    </ns-form-item>
    <ns-form-item label="Activity zone">
      <ns-select
        v-model="form.region"
        placeholder="please select your zone"
        :options="options"
      />
    </ns-form-item>
    <ns-form-item label="Instant delivery">
      <ns-switch v-model="form.delivery" />
    </ns-form-item>
    <ns-form-item label="Activity form">
      <ns-input v-model="form.desc" type="textarea" />
    </ns-form-item>
    <ns-form-item>
      <ns-button type="primary" @click="onSubmit">Create</ns-button>
      <ns-button>Cancel</ns-button>
    </ns-form-item>
  </ns-form>
</template>
