import ConfigProvider from './ConfigProvider.vue'
import { withInstall } from '@shadow-ui/utils'

export const NsConfigProvider = withInstall(ConfigProvider)

export * from './types'
export * from './hooks'
