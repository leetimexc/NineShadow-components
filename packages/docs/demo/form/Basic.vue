<template>
  <div class="form-demo">
    <xc-form :model="form" label-width="120px">
      <xc-form-item label="用户名">
        <xc-input v-model="form.name" placeholder="请输入用户名" />
      </xc-form-item>
      <xc-form-item label="邮箱">
        <xc-input v-model="form.email" placeholder="请输入邮箱" />
      </xc-form-item>
      <xc-form-item label="活动区域">
        <xc-select v-model="form.region" placeholder="请选择活动区域">
          <xc-option label="区域一" value="shanghai" />
          <xc-option label="区域二" value="beijing" />
        </xc-select>
      </xc-form-item>
      <xc-form-item>
        <xc-button type="primary">提交</xc-button>
        <xc-button style="margin-left: 10px">取消</xc-button>
      </xc-form-item>
    </xc-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  region: '',
})
</script>

<style scoped>
.form-demo {
  max-width: 600px;
}
</style>
