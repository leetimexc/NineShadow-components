---
title: Loading
description: Loading 组件文档

next:
  link: /components/message
  text: Message 消息提示

prev:
  link: /components/alert
  text: Alert 提示
---

# Loading 加载

用于在页面或元素上显示加载状态，提供视觉反馈，告知用户系统正在处理操作。

## 基础用法

通过指令方式或服务方式使用加载组件。

### 指令方式

通过 `v-loading` 指令可以轻松地在任何元素上添加加载状态。

::: preview
demo-preview=../demo/loading/Basic.vue
:::

### 自定义文本

可以通过 `xc-loading-text` 属性自定义加载文本。

::: preview
demo-preview=../demo/loading/CustomText.vue
:::

### 自定义背景色

可以通过 `xc-loading-background` 属性自定义加载遮罩的背景色。

::: preview
demo-preview=../demo/loading/CustomBackground.vue
:::

### 全屏加载

添加 `fullscreen` 修饰符可以使加载状态全屏显示，并且会锁定滚动。

::: preview
demo-preview=../demo/loading/Fullscreen.vue
:::

### 服务方式

除了指令方式，也可以通过服务方式调用 Loading。

::: preview
demo-preview=../demo/loading/Service.vue
:::

## API

### 指令

| 名称      | 说明                               |
| --------- | ---------------------------------- |
| v-loading | 控制加载状态的显示，接受一个布尔值 |

### 指令修饰符

| 名称       | 说明                         |
| ---------- | ---------------------------- |
| fullscreen | 全屏显示加载状态             |
| lock       | 锁定滚动条                   |
| body       | 将加载状态添加到 body 元素上 |

### 指令属性

| 名称                  | 说明                                              |
| --------------------- | ------------------------------------------------- |
| xc-loading-text       | 自定义加载文本                                    |
| xc-loading-spinner    | 自定义加载图标，可以是图标名称或 false 以禁用图标 |
| xc-loading-background | 自定义加载背景色                                  |

### 服务方法

```typescript
XcLoadingService(options: LoadingOptions): LoadingInstance
```

### LoadingOptions

| 名称       | 类型                  | 默认值                               | 说明                                              |
| ---------- | --------------------- | ------------------------------------ | ------------------------------------------------- |
| target     | HTMLElement \| string | document.body                        | 加载状态的目标元素，可以是 DOM 元素或选择器字符串 |
| body       | boolean               | false                                | 是否将加载状态添加到 body 元素上                  |
| fullscreen | boolean               | true (当 target 为 document.body 时) | 是否全屏显示                                      |
| lock       | boolean               | false                                | 是否锁定滚动条                                    |
| text       | string                | -                                    | 加载文本                                          |
| spinner    | boolean \| string     | true                                 | 是否显示加载图标或自定义图标名称                  |
| background | string                | 'rgba(0, 0, 0, 0.5)'                 | 加载背景色                                        |
| zIndex     | number                | -                                    | 自定义 z-index 值                                 |

### LoadingInstance

| 名称    | 类型                   | 说明               |
| ------- | ---------------------- | ------------------ |
| close   | () => void             | 关闭加载状态       |
| setText | (text: string) => void | 动态设置加载文本   |
| visible | Ref\<boolean\>         | 控制加载状态的显示 |
