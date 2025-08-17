import type { InjectionKey } from 'vue'
import type { RadioGroupProps } from './types'

export const UPDATE_MODEL_EVENT = 'update:modelValue'
export const CHANGE_EVENT = 'change'

export interface RadioGroupContext extends RadioGroupProps {
  changeEvent: (val: RadioGroupProps['modelValue']) => void
}

export const provideKey: InjectionKey<RadioGroupContext> =
  Symbol('propsByRadioGroup')
