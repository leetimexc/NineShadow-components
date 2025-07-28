import ConfigProvider from './ConfigProvider.vue'
import { withInstall } from '@xc-element/utils'

export const XcConfigProvider = withInstall(ConfigProvider)

export * from './types'
export * from './hooks'
