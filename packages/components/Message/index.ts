import Message from './methods'
import { withInstallFunction } from '@shadow-ui/utils'

export const NsMessage = withInstallFunction(Message, '$message')

export * from './types'
