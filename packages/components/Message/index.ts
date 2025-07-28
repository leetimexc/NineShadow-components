import Message from './methods'
import { withInstallFunction } from '@xc-element/utils'

export const XcMessage = withInstallFunction(Message, '$message')

export * from './types'
