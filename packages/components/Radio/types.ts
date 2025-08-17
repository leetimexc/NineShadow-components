import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from './constants'

// Size
export const RADIO_SIZES = ['s', 'm', 'l', 'xl'] as const
export type RadioSize = (typeof RADIO_SIZES)[number]

// Direction
export const RADIO_DIRECTION = ['vertical', 'horizontal'] as const
export type RadioDirection = (typeof RADIO_DIRECTION)[number]

export type RadioBaseProps = {
  size?: RadioSize
  value: number | string | boolean
  disabled?: boolean
}

export type RadioProps = RadioBaseProps & {
  modelValue?: number | string | boolean
  name?: string
  border?: boolean
  type?: 'radio' | 'button'
  solid?: boolean
}

export const radioEmits = {
  [UPDATE_MODEL_EVENT]: (val: RadioProps['modelValue']) => val,
  [CHANGE_EVENT]: (val: RadioProps['modelValue']) => val,
}

export type RadioEmits = typeof radioEmits

export type GapSize = RadioSize | number | [number, number]

export type RadioGroupProps = {
  modelValue?: number | string | boolean
  size?: GapSize
  type?: 'radio' | 'button'
  solid?: boolean
  disabled?: boolean
  direction?: RadioDirection
}

export const radioGroupEmits = radioEmits
export type RadioGroupEmits = typeof radioGroupEmits
