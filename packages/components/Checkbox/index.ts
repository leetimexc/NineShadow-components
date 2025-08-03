import Checkbox from './Checkbox.vue'
import CheckboxGroup from './CheckboxGroup.vue'
import CheckboxButton from './CheckboxButton.vue'
import { withInstall } from '@shadow-ui/utils'

export const XcCheckbox = withInstall(Checkbox)
export const XcCheckboxGroup = withInstall(CheckboxGroup)
export const XcCheckboxButton = withInstall(CheckboxButton)

export * from './types'
