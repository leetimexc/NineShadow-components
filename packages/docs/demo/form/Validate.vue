<script lang="ts" setup>
import { reactive, ref } from "vue";
import { NsMessage, type FormInstance } from "shadow-ui";

const formRef = ref<FormInstance>();
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

const rules = reactive({
  name: [
    { required: true, message: "请输入活动名称", trigger: "blur" },
    { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
  ],
  region: [{ required: true, message: "请选择活动区域", trigger: "change" }],
  desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
});

const onSubmit = () => {
  formRef.value?.validate().then((valid) => {
    if (valid) {
      NsMessage.success("submit!");
    }
  });
};

const onReset = () => {
  formRef.value?.resetFields();
};
</script>

<template>
  <ns-form ref="formRef" :model="form" :rules="rules">
    <ns-form-item label="Activity name" prop="name">
      <ns-input v-model="form.name" />
    </ns-form-item>
    <ns-form-item label="Activity zone" prop="region">
      <ns-select
        v-model="form.region"
        placeholder="please select your zone"
        :options="options"
      />
    </ns-form-item>
    <ns-form-item label="Instant delivery" prop="delivery">
      <ns-switch v-model="form.delivery" />
    </ns-form-item>
    <ns-form-item label="Activity form" prop="desc">
      <ns-input v-model="form.desc" type="textarea" />
    </ns-form-item>
    <ns-form-item>
      <ns-button type="primary" @click="onSubmit">Create</ns-button>
      <ns-button @click="onReset">Reset</ns-button>
    </ns-form-item>
  </ns-form>
</template>
