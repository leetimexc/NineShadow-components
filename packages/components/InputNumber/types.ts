export type InputNumberSize = 'large' | 'default' | 'small'

export type InputNumberProps = {
  modelValue?: number
  max?: number
  min?: number
  step?: number
  precision?: number
  size?: InputNumberSize
  disabled?: boolean
  message?: string
  controls?: boolean

  formatter?: (value: string) => string
}
