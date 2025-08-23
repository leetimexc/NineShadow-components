import type { Component, ComputedRef, Ref } from 'vue'

export type ButtonType = 'primary' | 'secondary' | 'outline'
export type ButtonStatus = 'primary' | 'success' | 'warning' | 'danger' // 删除info
export type NativeType = 'button' | 'submit' | 'reset'
export type ButtonSize = 'large' | 'default' | 'small'

export interface ButtonProps {
  tag?: string | Component
  type?: ButtonType
  status?: ButtonStatus
  size?: ButtonSize
  nativeType?: NativeType
  disabled?: boolean
  loading?: boolean
  icon?: string
  circle?: boolean
  round?: boolean
  loadingIcon?: string
  autofocus?: boolean
  useThrottle?: boolean
  throttleDuration?: number
}

export interface ButtonGroupProps {
  size?: ButtonSize
  type?: ButtonType
  disabled?: boolean
  status?: ButtonStatus
}

export interface ButtonGroupContext {
  size?: ButtonSize
  type?: ButtonType
  disabled?: boolean
  status?: ButtonStatus
}

export interface ButtonEmits {
  (e: 'click', value: MouseEvent): void
}

export interface ButtonInstance {
  ref: Ref<HTMLButtonElement | void>
  disabled: ComputedRef<boolean>
  size: ComputedRef<ButtonSize | ''>
  type: ComputedRef<ButtonType | ''>
  status: ComputedRef<ButtonStatus | ''>
}
