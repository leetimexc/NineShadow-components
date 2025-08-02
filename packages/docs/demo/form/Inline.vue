<template>
  <div class="form-demo">
    <xc-form :model="formInline" inline>
      <xc-form-item label="用户名">
        <xc-input v-model="formInline.user" placeholder="请输入用户名" />
      </xc-form-item>
      <xc-form-item label="活动区域">
        <xc-select v-model="formInline.region" placeholder="请选择活动区域">
          <xc-option label="区域一" value="shanghai" />
          <xc-option label="区域二" value="beijing" />
        </xc-select>
      </xc-form-item>
      <xc-form-item>
        <xc-button type="primary" @click="onSubmit">查询</xc-button>
      </xc-form-item>
    </xc-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const formInline = reactive({
  user: '',
  region: '',
})

const onSubmit = () => {
  console.log('submit!', formInline)
}
</script>

<style scoped>
.form-demo {
  max-width: 800px;
}
</style>
