import Notification from './methods'
import { withInstallFunction } from '@shadow-ui/utils'

export const NsNotification = withInstallFunction(Notification, '$notify')

export * from './types'
