import Select from './Select.vue'
import Option from './Option.vue'

import { withInstall } from '@9shadow/ui‌/utils'

export const XcSelect = withInstall(Select)
export const XcOption = withInstall(Option)

console.log('Select', Select, 'Option', Option)

export * from './types'
