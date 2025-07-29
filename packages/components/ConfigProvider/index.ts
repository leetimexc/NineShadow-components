import ConfigProvider from './ConfigProvider.vue'
import { withInstall } from '@shadow-ui/utils'

export const XcConfigProvider = withInstall(ConfigProvider)

export * from './types'
export * from './hooks'
