<template>
  <div class="form-demo">
    <xc-form
      ref="numberFormRef"
      :model="numberForm"
      :rules="rules"
      label-width="120px"
    >
      <xc-form-item label="年龄" prop="age">
        <xc-input
          v-model.number="numberForm.age"
          type="number"
          placeholder="请输入年龄"
        />
      </xc-form-item>
      <xc-form-item label="价格" prop="price">
        <xc-input
          v-model.number="numberForm.price"
          type="number"
          placeholder="请输入价格"
        />
      </xc-form-item>
      <xc-form-item label="数量" prop="count">
        <xc-input-number v-model="numberForm.count" :min="1" :max="100" />
      </xc-form-item>
      <xc-form-item>
        <xc-button type="primary" @click="submitForm(numberFormRef)">
          提交
        </xc-button>
        <xc-button style="margin-left: 10px" @click="resetForm(numberFormRef)">
          重置
        </xc-button>
      </xc-form-item>
    </xc-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'shadow-ui'

const numberFormRef = ref<FormInstance>()

const numberForm = reactive({
  age: '',
  price: '',
  count: 1,
})

const rules = reactive<FormRules>({
  age: [
    { required: true, message: '请输入年龄', trigger: 'blur' },
    { type: 'number', message: '年龄必须为数字', trigger: 'blur' },
    {
      type: 'number',
      min: 18,
      max: 120,
      message: '年龄必须在18到120之间',
      trigger: 'blur',
    },
  ],
  price: [
    { required: true, message: '请输入价格', trigger: 'blur' },
    { type: 'number', message: '价格必须为数字', trigger: 'blur' },
    { type: 'number', min: 0, message: '价格不能为负数', trigger: 'blur' },
  ],
  count: [
    { required: true, message: '请输入数量', trigger: 'change' },
    {
      type: 'number',
      min: 1,
      max: 100,
      message: '数量必须在1到100之间',
      trigger: 'change',
    },
  ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!', numberForm)
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<style scoped>
.form-demo {
  max-width: 600px;
}
</style>
