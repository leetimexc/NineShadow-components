import type { Ref } from 'vue'

export const STATUS = ['success', 'warning', 'danger', 'primary'] as const
export type Status = (typeof STATUS)[number]

export const TITLETYPE = [...STATUS, 'secondary'] as const
export type TitleType = (typeof TITLETYPE)[number]
// Text
export const TEXTTYPE = [...TITLETYPE, 'third', 'disabled'] as const
export type TextType = (typeof TEXTTYPE)[number]

export type titleProps = {
  type?: TitleType
  level?: number
}

export type textProps = {
  type?: TextType
  del?: boolean
  mark?: boolean
  strong?: boolean
  underline?: boolean
}

export interface paragraphProps {
  rows?: number
  copyable?: boolean
  moreable?: boolean
  open?: boolean
  openText?: string
  closeText?: string
}

export type paragraphEmits = {
  copyBefore: [value: Ref<string>]
  changeOpen: [open: boolean]
  'update:open': [open: boolean]
}
