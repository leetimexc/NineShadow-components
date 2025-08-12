import { defineConfig } from 'vitepress'
import {
  containerPreview,
  componentPreview,
} from '@vitepress-demo-preview/plugin'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'shadow-ui',
  description: '组件库',
  appearance: false, // 关闭 darkMode @todo 深色模式完成后打开
  base: '/shadow-ui/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '开始使用', link: '/get-started' },
      { text: '组件', link: '/components/button' },
    ],
    search: {
      provider: 'local',
    },
    sidebar: [
      {
        text: '指南',
        collapsed: false,
        items: [{ text: '快速开始', link: '/get-started' }],
      },
      {
        text: '通用',
        collapsed: false,
        items: [
          { text: 'Color 颜色', link: '/color' },
          { text: 'Typography 排版', link: '/components/typography' },
        ],
      },
      {
        text: '基础组件',
        collapsed: false,
        items: [
          { text: 'Button 按钮', link: '/components/button' },
          { text: 'Collapse 折叠面板', link: '/components/collapse' },
          { text: 'Dropdown 下拉菜单', link: '/components/dropdown' },
          { text: 'Icon 图标', link: '/components/icon' },
        ],
      },
      {
        text: '反馈组件',
        collapsed: false,
        items: [
          { text: 'Alert 提示', link: '/components/alert' },
          { text: 'Loading 加载', link: '/components/loading' },
          { text: 'Message 消息提示', link: '/components/message' },
          { text: 'MessageBox 消息弹出框', link: '/components/messagebox' },
          { text: 'Notification 通知', link: '/components/notification' },
          { text: 'Popconfirm 气泡确认框', link: '/components/popconfirm' },
          { text: 'Tooltip 文字提示', link: '/components/tooltip' },
          { text: 'Overlay 覆盖层', link: '/components/overlay' },
        ],
      },
      {
        text: '表单组件',
        collapsed: false,
        items: [
          { text: 'Form 表单', link: '/components/form' },
          { text: 'Input 输入框', link: '/components/input' },
          { text: 'Select 选择器', link: '/components/select' },
          { text: 'Checkbox 复选框', link: '/components/checkbox' },
          { text: 'Radio 单选框', link: '/components/radio' },
          { text: 'Switch 开关', link: '/components/switch' },
        ],
      },
      {
        text: '布局',
        collapsed: false,
        items: [
          {
            text: 'ConfigProvider 配置提供者',
            link: '/components/configprovider',
          },
          { text: 'Space 间距', link: '/components/space' },
        ],
      },
      {
        text: '其他',
        collapsed: false,
        items: [{ text: 'Affix 固钉', link: '/components/affix' }],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/leetimexc/shadow-ui' },
    ],
  },
  markdown: {
    config: (md) => {
      md.use(containerPreview)
      md.use(componentPreview)
    },
  },
})
