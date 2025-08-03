import type { ComputedRef, InjectionKey, Ref } from 'vue'

export type CheckboxValueType = string | number | boolean | object

export type CheckboxSize = 'large' | 'default' | 'small'

export interface CheckboxProps {
  modelValue?: CheckboxValueType
  label?: CheckboxValueType
  indeterminate?: boolean
  disabled?: boolean
  checked?: boolean
  name?: string
  trueLabel?: string | number
  falseLabel?: string | number
  id?: string
  border?: boolean
  size?: CheckboxSize
}

export interface CheckboxEmits {
  (e: 'update:modelValue', value: CheckboxValueType): void
  (e: 'change', value: CheckboxValueType): void
}

export interface CheckboxInstance {
  checked: ComputedRef<boolean>
  isDisabled: ComputedRef<boolean>
  focus: () => void
}

// CheckboxGroup 相关类型
export interface CheckboxGroupProps {
  modelValue: CheckboxValueType[]
  disabled?: boolean
  min?: number
  max?: number
  size?: CheckboxSize
  textColor?: string
  fill?: string
}

export interface CheckboxGroupEmits {
  (e: 'update:modelValue', value: CheckboxValueType[]): void
  (e: 'change', value: CheckboxValueType[]): void
}

// CheckboxGroup 注入的上下文
export interface CheckboxGroupContext {
  modelValue: Ref<CheckboxValueType[]>
  changeEvent: (val: CheckboxValueType[]) => void
  disabled: ComputedRef<boolean>
  size: ComputedRef<CheckboxSize | undefined>
  min: ComputedRef<number | undefined>
  max: ComputedRef<number | undefined>
  textColor: ComputedRef<string | undefined>
  fill: ComputedRef<string | undefined>
}

export const checkboxGroupContextKey: InjectionKey<CheckboxGroupContext> =
  Symbol('checkboxGroupContextKey')

// CheckboxButton 相关类型
export interface CheckboxButtonProps {
  label?: CheckboxValueType
  disabled?: boolean
  name?: string
  trueLabel?: string | number
  falseLabel?: string | number
  checked?: boolean
  border?: boolean
}
