<script setup lang="ts">
import {
  NsButton,
  NsPopconfirm,
  type DropdownItemProps,
  type FormInstance,
  ja,
  ko,
  en,
  zhCn,
  zhTw,
  NsConfigProvider,
  NsNotification,
  NsMessageBox,
  NsMessage,
  NsLoading,
  NsSelect,
  NsOption,
  NsTitle,
  NsText,
  NsParagraph,
} from 'shadow-ui'
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
  const _loading = NsLoading.service({
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
  NsMessage({
    showClose: true,
    message: 'This is a message.',
  })
}
const open2 = () => {
  NsMessage({
    showClose: true,
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
}
const open3 = () => {
  NsMessage({
    showClose: true,
    message: 'Warning, this is a warning message.',
    type: 'warning',
  })
}
const open4 = () => {
  NsMessage({
    showClose: true,
    message: 'Oops, this is a error message.',
    type: 'danger',
  })
}
function openNotify1() {
  NsNotification({
    title: 'Title',
    message: h('i', { style: 'color:teal' }, 'This is a remider'),
    position: 'bottom-right',
  })
}

function openNotify2() {
  NsNotification({
    title: 'Prompt',
    message: 'This is a message that does not auto close',
    duration: 0,
    position: 'top-left',
  })
}

function openConfirm() {
  NsMessageBox.confirm(
    'proxy will permanently delete the file. Continue?',
    'Warning',
    { type: 'warning' }
  )
    .then((action) => {
      NsMessage.info(`action: ${action}`)
    })
    .catch((action) => {
      NsMessage.warning(`action: ${action}`)
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
      NsMessage.success('submit!')
    }
  })
}

const onReset = () => {
  formRef.value?.resetFields()
}
</script>

<template>
  <ns-button size="small" type="primary">填充按钮</ns-button>
  <ns-button type="primary">填充按钮</ns-button>
  <ns-button size="large" type="primary">填充按钮</ns-button>
  <hr />
  <NsButton size="large">large</NsButton>
  <NsButton size="default">default</NsButton>
  <NsButton size="small">small</NsButton>
  <NsButton tag="a">aaaa</NsButton>
  <NsButton type="primary">primary</NsButton>
  <NsButton type="success">success</NsButton>
  <NsButton type="warning">warning</NsButton>
  <NsButton type="danger">danger</NsButton>
  <NsButton type="info">info</NsButton>
  <NsButton nativeType="submit">submit</NsButton>
  <NsButton nativeType="reset">reset</NsButton>
  <NsButton nativeType="button">button</NsButton>
  <hr />
  <ns-popconfirm title="确定删除吗？" @confirm="confirm" @cancel="cancel">
    <ns-button type="primary" size="small">Button</ns-button>
  </ns-popconfirm>
  <div class="row">
    <div class="col">
      <div class="desc">disabled</div>
      <ns-dropdown :items="items" disabled>
        <span class="dropdown-link"
          >Dropdown List <ns-icon icon="angle-down"
        /></span>
      </ns-dropdown>
    </div>
    <div class="col">
      <div class="desc">undisabled</div>
      <ns-dropdown :items="items">
        <span class="dropdown-link"
          >Dropdown List <ns-icon icon="angle-down"
        /></span>
      </ns-dropdown>
    </div>
  </div>
  <ns-button @click="changelang" type="info" style="margin-right: 20px"
    >change language</ns-button
  >
  <ns-config-provider :locale="locale">
    <ns-popconfirm title="Are you shure to delete this item?">
      <ns-button>Delete</ns-button>
    </ns-popconfirm>
  </ns-config-provider>
  <ns-button @click="open1">open1</ns-button>
  <ns-button @click="open2">open2</ns-button>
  <ns-button @click="open3">open3</ns-button>
  <ns-button @click="open4">open4</ns-button>
  <ns-button @click="openNotify1" plain>Closes automatically</ns-button>
  <ns-button @click="openNotify2" plain>Won't closes automatically</ns-button>
  <ns-input v-model="form.name" show-password type="password" />
  <ns-input v-model="form.desc" type="textarea" />
  <ns-button @click="openConfirm" plain> Click to open the Confirm</ns-button>
  <ns-button
    v-loading.fullscreen.lock="loading"
    type="primary"
    @click="openLoading1"
  >
    As a directive
  </ns-button>
  <ns-button type="primary" @click="openLoading2"> As a service </ns-button>
  <ns-switch
    v-model="switchVal"
    size="small"
    :active-value="0"
    :inactive-value="1"
  />
  {{ switchVal }}
  <ns-select v-model="value" filterable clearable>
    <ns-option value="beijing" label="Beijing" />
    <ns-option value="shanghai" label="Shanghai" />
    <ns-option value="shenzhen" label="Shenzhen" disabled />
    <ns-option value="hangzhou" label="Hangzhou" />
  </ns-select>
  <ns-form ref="formRef" :model="form" :rules="rules">
    <ns-form-item label="Activity name" prop="name">
      <ns-input v-model="form.name" />
    </ns-form-item>
    <ns-form-item label="Activity form" prop="desc">
      <ns-input v-model="form.desc" type="textarea" />
    </ns-form-item>
    <ns-form-item>
      <ns-button type="primary" @click="onSubmit">Create</ns-button>
      <ns-button @click="onReset">Reset</ns-button>
    </ns-form-item>
  </ns-form>

  <hr />
  <ns-title level="1">Title</ns-title>
  <ns-title level="2">Title</ns-title>
  <ns-title level="3">Title</ns-title>
  <ns-title level="4">Title</ns-title>
  <ns-title level="5">Title</ns-title>

  <ns-text>NsElement</ns-text>
  <ns-text type="secondary">Secondary</ns-text>
  <ns-text type="third">third</ns-text>
  <ns-text type="primary">Primary</ns-text>
  <ns-text type="success">Success</ns-text>
  <ns-text type="warning">Warning</ns-text>
  <ns-text type="info">Info</ns-text>
  <ns-text type="danger">Danger</ns-text>
  <ns-text type="disabled">Disabled</ns-text>

  <ns-text mark>Mark</ns-text>
  <ns-text strong>Bold</ns-text>
  <ns-text underline>Underline</ns-text>
  <ns-text del>Line through</ns-text>
</template>
