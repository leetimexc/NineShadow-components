<script lang="ts" setup>
import { reactive, ref } from "vue";
import { NsMessage, type FormProps } from "shadow-ui";

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
const labelPosition = ref<FormProps["labelPosition"]>("right");

const onSubmit = () => {
  NsMessage.success("submit");
};
</script>

<template>
  <ns-button-group size="small">
    <ns-button
      @click="labelPosition = 'left'"
      :type="labelPosition === 'left' ? 'primary' : 'info'"
      >Left</ns-button
    >
    <ns-button
      @click="labelPosition = 'right'"
      :type="labelPosition === 'right' ? 'primary' : 'info'"
      >Right</ns-button
    >
    <ns-button
      @click="labelPosition = 'top'"
      :type="labelPosition === 'top' ? 'primary' : 'info'"
      >Top</ns-button
    >
  </ns-button-group>
  <div style="margin: 20px"></div>
  <ns-form :model="form" :label-position="labelPosition">
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
