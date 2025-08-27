<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { NsMessage } from 'shadow-ui'

const form = reactive({
  name: '',
  region: '',
  delivery: false,
  desc: '',
  count: 1,
  type: [],
  resource: '',
})

const options = ref([
  { value: 'beijing', label: 'Zone One' },
  { value: 'shanghai', label: 'Zone Two' },
])

const typeOptions = ref([
  { value: 'online', label: 'Online activities' },
  { value: 'promotion', label: 'Promotion activities' },
  { value: 'offline', label: 'Offline activities' },
])

const resourceOptions = ref([
  { value: 'sponsorship', label: 'Sponsorship' },
  { value: 'venue', label: 'Venue' },
])

const onSubmit = () => {
  NsMessage.success('submit!')
}
</script>

<template>
  <ns-form :model="form">
    <ns-form-item label="Activity name">
      <ns-input v-model="form.name" />
    </ns-form-item>
    <ns-form-item label="Activity zone">
      <ns-select
        v-model="form.region"
        placeholder="please select your zone"
        :options="options"
      />
    </ns-form-item>
    <ns-form-item label="Instant delivery">
      <ns-switch v-model="form.delivery" />
    </ns-form-item>
    <ns-form-item label="Activity form">
      <ns-input v-model="form.desc" type="textarea" />
    </ns-form-item>
    <ns-form-item label="Count">
      <ns-input-number v-model="form.count" :min="1" :max="100" />
    </ns-form-item>
    <ns-form-item label="Activity type">
      <ns-checkbox-group v-model="form.type">
        <ns-checkbox
          v-for="option in typeOptions"
          :key="option.value"
          :label="option.value"
        >
          {{ option.label }}
        </ns-checkbox>
      </ns-checkbox-group>
    </ns-form-item>
    <ns-form-item label="Activity resource">
      <ns-radio-group v-model="form.resource">
        <ns-radio
          v-for="option in resourceOptions"
          :key="option.value"
          :value="option.value"
        >
          {{ option.label }}
        </ns-radio>
      </ns-radio-group>
    </ns-form-item>
    <ns-form-item>
      <ns-button type="primary" @click="onSubmit">Create</ns-button>
      <ns-button>Cancel</ns-button>
    </ns-form-item>
  </ns-form>
</template>
