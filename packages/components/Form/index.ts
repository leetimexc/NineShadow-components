import Form from './Form.vue'
import FormItem from './FormItem.vue'

import { withInstall } from '@xc-element/utils'

export const XcForm = withInstall(Form)
export const XcFormItem = withInstall(FormItem)

export * from './types'
export * from './hooks'
