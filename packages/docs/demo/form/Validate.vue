<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { XcMessage, type FormInstance } from 'shadow-ui'

const formRef = ref<FormInstance>()
const form = reactive({
  name: '',
  region: '',
  delivery: false,
  desc: '',
})

const options = ref([
  { value: 'beijing', label: 'Zone One' },
  { value: 'shanghai', label: 'Zone Two' },
])

const rules = reactive({
  name: [
    { required: true, message: '请输入活动名称', trigger: 'blur' },
    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
  ],
  region: [{ required: true, message: '请选择活动区域', trigger: 'change' }],
  desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' }],
})

const onSubmit = () => {
  formRef.value?.validate().then((valid) => {
    if (valid) {
      XcMessage.success('submit!')
    }
  })
}

const onReset = () => {
  formRef.value?.resetFields()
}
</script>

<template>
  <xc-form ref="formRef" :model="form" :rules="rules">
    <xc-form-item label="Activity name" prop="name">
      <xc-input v-model="form.name" />
    </xc-form-item>
    <xc-form-item label="Activity zone" prop="region">
      <xc-select
        v-model="form.region"
        placeholder="please select your zone"
        :options="options"
      />
    </xc-form-item>
    <xc-form-item label="Instant delivery" prop="delivery">
      <xc-switch v-model="form.delivery" />
    </xc-form-item>
    <xc-form-item label="Activity form" prop="desc">
      <xc-input v-model="form.desc" type="textarea" />
    </xc-form-item>
    <xc-form-item>
      <xc-button type="primary" @click="onSubmit">Create</xc-button>
      <xc-button @click="onReset">Reset</xc-button>
    </xc-form-item>
  </xc-form>
</template>
