<template>
  <div class="form-demo">
    <xc-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
    >
      <xc-form-item label="活动名称" prop="name">
        <xc-input v-model="ruleForm.name" />
      </xc-form-item>
      <xc-form-item label="活动区域" prop="region">
        <xc-select v-model="ruleForm.region" placeholder="请选择活动区域">
          <xc-option label="区域一" value="shanghai" />
          <xc-option label="区域二" value="beijing" />
        </xc-select>
      </xc-form-item>
      <xc-form-item label="活动时间" prop="date">
        <xc-date-picker
          v-model="ruleForm.date"
          type="date"
          placeholder="选择日期"
          style="width: 100%"
        />
      </xc-form-item>
      <xc-form-item label="即时配送" prop="delivery">
        <xc-switch v-model="ruleForm.delivery" />
      </xc-form-item>
      <xc-form-item label="活动性质" prop="type">
        <xc-checkbox-group v-model="ruleForm.type">
          <xc-checkbox label="美食/餐厅线上活动" name="type" />
          <xc-checkbox label="地推活动" name="type" />
          <xc-checkbox label="线下主题活动" name="type" />
        </xc-checkbox-group>
      </xc-form-item>
      <xc-form-item label="特殊资源" prop="resource">
        <xc-radio-group v-model="ruleForm.resource">
          <xc-radio label="线上品牌商赞助" />
          <xc-radio label="线下场地免费" />
        </xc-radio-group>
      </xc-form-item>
      <xc-form-item label="活动形式" prop="desc">
        <xc-textarea v-model="ruleForm.desc" />
      </xc-form-item>
      <xc-form-item>
        <xc-button type="primary" @click="submitForm(ruleFormRef)">
          立即创建
        </xc-button>
        <xc-button style="margin-left: 10px" @click="resetForm(ruleFormRef)">
          重置
        </xc-button>
      </xc-form-item>
    </xc-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'shadow-ui'

const ruleFormRef = ref<FormInstance>()

const ruleForm = reactive({
  name: '',
  region: '',
  date: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const rules = reactive<FormRules>({
  name: [
    { required: true, message: '请输入活动名称', trigger: 'blur' },
    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
  ],
  region: [{ required: true, message: '请选择活动区域', trigger: 'change' }],
  date: [{ required: true, message: '请选择日期', trigger: 'change' }],
  type: [
    {
      type: 'array',
      required: true,
      message: '请至少选择一个活动性质',
      trigger: 'change',
    },
  ],
  resource: [{ required: true, message: '请选择活动资源', trigger: 'change' }],
  desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' }],
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
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
