import Select from './Select.vue'
import Option from './Option.vue'

import { withInstall } from '@shadow-ui/utils'

export const NsSelect = withInstall(Select)
export const NsOption = withInstall(Option)

console.log('Select', Select, 'Option', Option)

export * from './types'
