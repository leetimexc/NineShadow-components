import { vLoading } from './directive'
import { Loading } from './service'
import type { App } from 'vue'

export const NsLoading = {
  name: 'NsLoading',
  install(app: App) {
    app.directive('loading', vLoading)
    app.config.globalProperties.$loading = Loading
  },
  directive: vLoading,
  service: Loading,
}

export default NsLoading

export { vLoading, vLoading as NsLoadingDirective, Loading as NsLoadingService }
export * from './types'
