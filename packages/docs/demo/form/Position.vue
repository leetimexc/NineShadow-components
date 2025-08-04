<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { XcMessage, type FormProps } from 'shadow-ui'

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
const labelPosition = ref<FormProps['labelPosition']>('right')

const onSubmit = () => {
  XcMessage.success('submit')
}
</script>

<template>
  <xc-button-group size="small">
    <xc-button
      @click="labelPosition = 'left'"
      :type="labelPosition === 'left' ? 'primary' : 'info'"
      >Left</xc-button
    >
    <xc-button
      @click="labelPosition = 'right'"
      :type="labelPosition === 'right' ? 'primary' : 'info'"
      >Right</xc-button
    >
    <xc-button
      @click="labelPosition = 'top'"
      :type="labelPosition === 'top' ? 'primary' : 'info'"
      >Top</xc-button
    >
  </xc-button-group>
  <div style="margin: 20px"></div>
  <xc-form :model="form" :label-position="labelPosition">
    <xc-form-item label="Activity name">
      <xc-input v-model="form.name" />
    </xc-form-item>
    <xc-form-item label="Activity zone">
      <xc-select
        v-model="form.region"
        placeholder="please select your zone"
        :options="options"
      />
    </xc-form-item>
    <xc-form-item label="Instant delivery">
      <xc-switch v-model="form.delivery" />
    </xc-form-item>
    <xc-form-item label="Activity form">
      <xc-input v-model="form.desc" type="textarea" />
    </xc-form-item>
    <xc-form-item>
      <xc-button type="primary" @click="onSubmit">Create</xc-button>
      <xc-button>Cancel</xc-button>
    </xc-form-item>
  </xc-form>
</template>
