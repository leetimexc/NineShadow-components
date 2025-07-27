import { vLoading } from './directive'
import { Loading } from './service'
import type { App } from 'vue'

export const XcLoading = {
  name: 'XcLoading',
  install(app: App) {
    app.directive('loading', vLoading)
    app.config.globalProperties.$loading = Loading
  },
  directive: vLoading,
  service: Loading,
}

export default XcLoading

export { vLoading, vLoading as XcLoadingDirective, Loading as XcLoadingService }
export * from './types'
