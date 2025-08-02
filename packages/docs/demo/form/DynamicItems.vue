<template>
  <div class="form-demo">
    <xc-form
      ref="dynamicFormRef"
      :model="dynamicForm"
      label-width="120px"
      class="demo-dynamic-form"
    >
      <xc-form-item
        v-for="(domain, index) in dynamicForm.domains"
        :key="domain.key"
        :label="'域名' + index"
        :prop="`domains.${index}.value`"
        required
      >
        <div class="domain-item">
          <xc-input v-model="domain.value" />
          <xc-button
            type="danger"
            @click.prevent="removeDomain(domain)"
            style="margin-left: 10px"
          >
            删除
          </xc-button>
        </div>
      </xc-form-item>
      <xc-form-item>
        <xc-button type="primary" @click="submitForm(dynamicFormRef)">
          提交
        </xc-button>
        <xc-button style="margin-left: 10px" @click="addDomain">
          新增域名
        </xc-button>
        <xc-button style="margin-left: 10px" @click="resetForm(dynamicFormRef)">
          重置
        </xc-button>
      </xc-form-item>
    </xc-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance } from 'shadow-ui'

interface DomainItem {
  key: number
  value: string
}

const dynamicFormRef = ref<FormInstance>()
let id = 1

const dynamicForm = reactive({
  domains: [
    {
      key: 0,
      value: '',
    },
  ] as DomainItem[],
})

const removeDomain = (item: DomainItem) => {
  const index = dynamicForm.domains.indexOf(item)
  if (index !== -1) {
    dynamicForm.domains.splice(index, 1)
  }
}

const addDomain = () => {
  dynamicForm.domains.push({
    key: id++,
    value: '',
  })
}

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!', dynamicForm.domains)
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
  dynamicForm.domains = [
    {
      key: 0,
      value: '',
    },
  ]
  id = 1
}
</script>

<style scoped>
.form-demo {
  max-width: 600px;
}

.domain-item {
  display: flex;
  align-items: center;
}
</style>
