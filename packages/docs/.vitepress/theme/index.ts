import { type App } from 'vue'
// import { ElementPlusContainer } from '@vitepress-demo-preview/component'
import { ElementPlusContainer } from 'vitepress-preview-component'
import DefaultTheme from 'vitepress/theme'
import XcElement from 'shadow-ui'

// import '@vitepress-demo-preview/component/dist/style.css'
import 'vitepress-preview-component/style.css'
import 'shadow-ui/dist/index.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component('demo-preview', ElementPlusContainer)
    app.use(XcElement)
  },
}
