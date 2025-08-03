<script lang="ts" setup>
import { XcNotification } from 'shadow-ui'

const open1 = () => {
  XcNotification({
    title: 'Success',
    message: 'This is a success message',
    type: 'success',
  })
}

const open2 = () => {
  XcNotification({
    title: 'Warning',
    message: 'This is a warning message',
    type: 'warning',
  })
}

const open3 = () => {
  XcNotification({
    title: 'Info',
    message: 'This is an info message',
    type: 'info',
  })
}

const open4 = () => {
  XcNotification({
    title: 'Error',
    message: 'This is an error message',
    type: 'danger',
  })
}
</script>

<template>
  <xc-button plain @click="open1"> Success </xc-button>
  <xc-button plain @click="open2"> Warning </xc-button>
  <xc-button plain @click="open3"> Info </xc-button>
  <xc-button plain @click="open4"> Error </xc-button>
</template>
