import Notification from './methods'
import { withInstallFunction } from '@shadow-ui/utils'

export const XcNotification = withInstallFunction(Notification, '$notify')

export * from './types'
