<script setup lang="ts">
import {
  XcButton,
  XcPopconfirm,
  type DropdownItemProps,
  type FormInstance,
  ja,
  ko,
  en,
  zhCn,
  zhTw,
  XcConfigProvider,
  XcNotification,
  XcMessageBox,
  XcMessage,
  XcLoading,
  XcSelect,
  XcOption,
} from 'xc-element'
import { get } from 'lodash-es'
import { computed, ref, reactive, h } from 'vue'

const loading = ref(false)
const switchVal = ref(1)

function openLoading1() {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}

function openLoading2() {
  const _loading = XcLoading.service({
    lock: true,
    spinner: 'circle-notch',
    text: '加载中...',
    background: 'rgba(255,255,255,0.5)',
  })
  setTimeout(() => {
    _loading.close()
  }, 2000)
}

const language = ref('zhTw')
const langMap = {
  ja,
  ko,
  en,
  zhCn,
  zhTw,
} as const
const locale = computed(() => get(langMap, language.value))
const changelang = () => {
  const l = ['zhCn', 'zhTw', 'ko', 'en', 'ja']
  language.value = l[(l.indexOf(language.value) + 1) % l.length]
}

const items: DropdownItemProps[] = [
  { command: '1', label: 'Action 1' },
  { command: '2', label: 'Action 2' },
  { command: '3', label: 'Action 3', divided: true },
  { command: '4', label: 'Action 4', disabled: true },
]
function confirm() {
  console.log('confirm')
}
function cancel() {
  console.log('cancel')
}

const open1 = () => {
  XcMessage({
    showClose: true,
    message: 'This is a message.',
  })
}
const open2 = () => {
  XcMessage({
    showClose: true,
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
}
const open3 = () => {
  XcMessage({
    showClose: true,
    message: 'Warning, this is a warning message.',
    type: 'warning',
  })
}
const open4 = () => {
  XcMessage({
    showClose: true,
    message: 'Oops, this is a error message.',
    type: 'danger',
  })
}
function openNotify1() {
  XcNotification({
    title: 'Title',
    message: h('i', { style: 'color:teal' }, 'This is a remider'),
    position: 'bottom-right',
  })
}

function openNotify2() {
  XcNotification({
    title: 'Prompt',
    message: 'This is a message that does not auto close',
    duration: 0,
    position: 'top-left',
  })
}

function openConfirm() {
  XcMessageBox.confirm(
    'proxy will permanently delete the file. Continue?',
    'Warning',
    { type: 'warning' }
  )
    .then((action) => {
      XcMessage.info(`action: ${action}`)
    })
    .catch((action) => {
      XcMessage.warning(`action: ${action}`)
    })
}
const options = ref([
  { value: 'beijing', label: 'Beijing' },
  { value: 'shanghai', label: 'Shanghai' },
  { value: 'shenzhen', label: 'Shenzhen', disabled: true },
  { value: 'hangzhou', label: 'Hangzhou' },
])
const value = ref('')

const formRef = ref<FormInstance>()
const form = reactive({
  name: '',
  desc: '',
})

const rules = reactive({
  name: [{ required: true, message: '请输入活动名称', trigger: 'blur' }],
  desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' }],
})

const onSubmit = () => {
  formRef.value?.validate().then((valid) => {
    if (valid) {
      XcMessage.success('submit!')
    }
  })
}

const onReset = () => {
  formRef.value?.resetFields()
}
</script>

<template>
  <xc-popconfirm title="确定删除吗？" @confirm="confirm" @cancel="cancel">
    <xc-button type="primary" size="small">Button</xc-button>
  </xc-popconfirm>
  <div class="row">
    <div class="col">
      <div class="desc">disabled</div>
      <xc-dropdown :items="items" disabled>
        <span class="dropdown-link"
          >Dropdown List <xc-icon icon="angle-down"
        /></span>
      </xc-dropdown>
    </div>
    <div class="col">
      <div class="desc">undisabled</div>
      <xc-dropdown :items="items">
        <span class="dropdown-link"
          >Dropdown List <xc-icon icon="angle-down"
        /></span>
      </xc-dropdown>
    </div>
  </div>
  <xc-button @click="changelang" type="info" style="margin-right: 20px"
    >change language</xc-button
  >
  <xc-config-provider :locale="locale">
    <xc-popconfirm title="Are you shure to delete this item?">
      <xc-button>Delete</xc-button>
    </xc-popconfirm>
  </xc-config-provider>
  <xc-button @click="open1">open1</xc-button>
  <xc-button @click="open2">open2</xc-button>
  <xc-button @click="open3">open3</xc-button>
  <xc-button @click="open4">open4</xc-button>
  <xc-button @click="openNotify1" plain>Closes automatically</xc-button>
  <xc-button @click="openNotify2" plain>Won't closes automatically</xc-button>
  <xc-input v-model="form.name" show-password type="password" />
  <xc-input v-model="form.desc" type="textarea" />
  <xc-button @click="openConfirm" plain> Click to open the Confirm</xc-button>
  <xc-button
    v-loading.fullscreen.lock="loading"
    type="primary"
    @click="openLoading1"
  >
    As a directive
  </xc-button>
  <xc-button type="primary" @click="openLoading2"> As a service </xc-button>
  <xc-switch
    v-model="switchVal"
    size="small"
    :active-value="0"
    :inactive-value="1"
  />
  {{ switchVal }}
  <xc-select v-model="value" filterable clearable>
    <xc-option value="beijing" label="Beijing" />
    <xc-option value="shanghai" label="Shanghai" />
    <xc-option value="shenzhen" label="Shenzhen" disabled />
    <xc-option value="hangzhou" label="Hangzhou" />
  </xc-select>
  <xc-form ref="formRef" :model="form" :rules="rules">
    <xc-form-item label="Activity name" prop="name">
      <xc-input v-model="form.name" />
    </xc-form-item>
    <xc-form-item label="Activity form" prop="desc">
      <xc-input v-model="form.desc" type="textarea" />
    </xc-form-item>
    <xc-form-item>
      <xc-button type="primary" @click="onSubmit">Create</xc-button>
      <xc-button @click="onReset">Reset</xc-button>
    </xc-form-item>
  </xc-form>
</template>
