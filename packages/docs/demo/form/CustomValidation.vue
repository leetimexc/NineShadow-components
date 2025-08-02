<template>
  <div class="form-demo">
    <xc-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
    >
      <xc-form-item label="密码" prop="pass">
        <xc-input
          v-model="ruleForm.pass"
          type="password"
          autocomplete="off"
          placeholder="请输入密码"
        />
      </xc-form-item>
      <xc-form-item label="确认密码" prop="checkPass">
        <xc-input
          v-model="ruleForm.checkPass"
          type="password"
          autocomplete="off"
          placeholder="请再次输入密码"
        />
      </xc-form-item>
      <xc-form-item label="年龄" prop="age">
        <xc-input v-model.number="ruleForm.age" placeholder="请输入年龄" />
      </xc-form-item>
      <xc-form-item>
        <xc-button type="primary" @click="submitForm(ruleFormRef)">
          提交
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
  pass: '',
  checkPass: '',
  age: '',
})

// 自定义验证函数
const validatePass = (rule: any, value: string, callback: any) => {
  if (value === '') {
    callback(new Error('请输入密码'))
  } else {
    if (ruleForm.checkPass !== '') {
      // 对确认密码字段进行验证
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass', () => null)
    }
    callback()
  }
}

const validatePass2 = (rule: any, value: string, callback: any) => {
  if (value === '') {
    callback(new Error('请再次输入密码'))
  } else if (value !== ruleForm.pass) {
    callback(new Error('两次输入密码不一致!'))
  } else {
    callback()
  }
}

const validateAge = (rule: any, value: string, callback: any) => {
  if (!value) {
    return callback(new Error('请输入年龄'))
  }
  if (!Number.isInteger(Number(value))) {
    callback(new Error('请输入数字值'))
  } else {
    if (parseInt(value) < 18) {
      callback(new Error('必须年满18岁'))
    } else {
      callback()
    }
  }
}

const rules = reactive<FormRules>({
  pass: [{ validator: validatePass, trigger: 'blur' }],
  checkPass: [{ validator: validatePass2, trigger: 'blur' }],
  age: [{ validator: validateAge, trigger: 'blur' }],
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
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
