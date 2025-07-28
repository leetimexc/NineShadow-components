import Notification from './methods'
import { withInstallFunction } from '@xc-element/utils'

export const XcNotification = withInstallFunction(Notification, '$notify')

export * from './types'
