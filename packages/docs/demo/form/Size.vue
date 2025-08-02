<template>
  <div class="form-demo">
    <xc-radio-group v-model="size" style="margin-bottom: 20px">
      <xc-radio-button label="large">大型</xc-radio-button>
      <xc-radio-button label="default">默认</xc-radio-button>
      <xc-radio-button label="small">小型</xc-radio-button>
    </xc-radio-group>

    <xc-form
      ref="sizeFormRef"
      :model="sizeForm"
      :size="size"
      label-width="120px"
    >
      <xc-form-item label="活动名称">
        <xc-input v-model="sizeForm.name" placeholder="请输入活动名称" />
      </xc-form-item>
      <xc-form-item label="活动区域">
        <xc-select v-model="sizeForm.region" placeholder="请选择活动区域">
          <xc-option label="区域一" value="shanghai" />
          <xc-option label="区域二" value="beijing" />
        </xc-select>
      </xc-form-item>
      <xc-form-item label="活动时间">
        <xc-date-picker
          v-model="sizeForm.date"
          type="date"
          placeholder="选择日期"
          style="width: 100%"
        />
      </xc-form-item>
      <xc-form-item label="即时配送">
        <xc-switch v-model="sizeForm.delivery" />
      </xc-form-item>
      <xc-form-item>
        <xc-button type="primary">提交</xc-button>
        <xc-button style="margin-left: 10px">取消</xc-button>
      </xc-form-item>
    </xc-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const size = ref('default')

const sizeForm = reactive({
  name: '',
  region: '',
  date: '',
  delivery: false,
})
</script>

<style scoped>
.form-demo {
  max-width: 600px;
}
</style>
