import Message from './methods'
import { withInstallFunction } from '@shadow-ui/utils'

export const XcMessage = withInstallFunction(Message, '$message')

export * from './types'
