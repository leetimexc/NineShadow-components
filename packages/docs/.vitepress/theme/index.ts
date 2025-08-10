import { type App } from 'vue'
// import { ElementPlusContainer } from '@vitepress-demo-preview/component'
import { ElementPlusContainer } from 'vitepress-preview-component'
import DefaultTheme from 'vitepress/theme'
import NsElement from 'shadow-ui'

// import '@vitepress-demo-preview/component/dist/style.css'
import 'vitepress-preview-component/style.css'
import 'shadow-ui/dist/index.css'
import './custom.css' // 导入自定义CSS文件

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component('demo-preview', ElementPlusContainer)
    app.use(NsElement)
  },
}
