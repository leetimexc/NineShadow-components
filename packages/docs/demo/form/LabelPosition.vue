<template>
  <div class="form-demo">
    <xc-radio-group v-model="labelPosition" style="margin-bottom: 20px">
      <xc-radio-button label="left">左对齐</xc-radio-button>
      <xc-radio-button label="right">右对齐</xc-radio-button>
      <xc-radio-button label="top">顶部对齐</xc-radio-button>
    </xc-radio-group>

    <xc-form
      :label-position="labelPosition"
      :model="formLabelAlign"
      label-width="120px"
      style="max-width: 500px"
    >
      <xc-form-item label="名称">
        <xc-input v-model="formLabelAlign.name" />
      </xc-form-item>
      <xc-form-item label="活动区域">
        <xc-input v-model="formLabelAlign.region" />
      </xc-form-item>
      <xc-form-item label="活动形式">
        <xc-input v-model="formLabelAlign.type" />
      </xc-form-item>
    </xc-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const labelPosition = ref('right')

const formLabelAlign = reactive({
  name: '',
  region: '',
  type: '',
})
</script>

<style scoped>
.form-demo {
  max-width: 600px;
}
</style>
