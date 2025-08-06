import Form from './Form.vue'
import FormItem from './FormItem.vue'

import { withInstall } from '@shadow-ui/utils'

export const NsForm = withInstall(Form)
export const NsFormItem = withInstall(FormItem)

export * from './types'
export * from './hooks'
