---
title: Icon
description: Icon 组件文档

next:
  link: /components/alert
  text: Alert 提示

prev:
  link: /components/dropdown
  text: Dropdown 下拉菜单
---

# Icon 图标

Shadow-UI 提供了一套基于 FontAwesome 的图标组件，可以轻松地在项目中使用各种图标。

## 基础用法

通过 `icon` 属性设置图标，支持 FontAwesome 的所有图标。

:::preview
demo-preview=../demo/icon/Basic.vue
:::

## 图标尺寸

通过 `size` 属性设置图标尺寸，支持 `xs`、`sm`、`lg`、`xl`、`2xl` 以及 `1x` 到 `10x` 的尺寸。

:::preview
demo-preview=../demo/icon/Sizes.vue
:::

## 图标颜色

通过 `type` 属性设置内置类型颜色，或通过 `color` 属性自定义颜色。

:::preview
demo-preview=../demo/icon/Colors.vue
:::

## 动画与变换

支持多种动画效果和变换方式，如旋转、翻转、脉冲等。

:::preview
demo-preview=../demo/icon/Animations.vue
:::

## API

### 属性

| 属性名      | 说明             | 类型                                                  | 可选值                                      | 默认值 |
| ----------- | ---------------- | ----------------------------------------------------- | ------------------------------------------- | ------ |
| icon        | 图标名称         | string \| Array\<string\> \| object \| IconDefinition | —                                           | —      |
| size        | 图标大小         | string                                                | xs / sm / lg / xl / 2xl / 1x-10x            | —      |
| type        | 图标类型         | string                                                | primary / success / warning / danger / info | —      |
| color       | 自定义颜色       | string                                                | 任何有效的 CSS 颜色值                       | —      |
| spin        | 旋转动画         | boolean                                               | —                                           | false  |
| pulse       | 脉冲旋转         | boolean                                               | —                                           | false  |
| border      | 边框             | boolean                                               | —                                           | false  |
| fixedWidth  | 固定宽度         | boolean                                               | —                                           | false  |
| flip        | 翻转             | string                                                | horizontal / vertical / both                | —      |
| listItem    | 列表项图标       | boolean                                               | —                                           | false  |
| pull        | 浮动             | string                                                | right / left                                | —      |
| rotation    | 旋转角度         | number \| string                                      | 90 / 180 / 270                              | —      |
| swapOpacity | 交换不透明度     | boolean                                               | —                                           | false  |
| transform   | 变换             | object \| string                                      | —                                           | —      |
| mask        | 遮罩             | object \| Array\<string\> \| string                   | —                                           | —      |
| symbol      | 符号             | boolean \| string                                     | —                                           | —      |
| title       | 标题             | string                                                | —                                           | —      |
| inverse     | 反色             | boolean                                               | —                                           | false  |
| bounce      | 弹跳动画         | boolean                                               | —                                           | false  |
| shake       | 摇晃动画         | boolean                                               | —                                           | false  |
| beat        | 跳动动画         | boolean                                               | —                                           | false  |
| fade        | 淡入淡出动画     | boolean                                               | —                                           | false  |
| beatFade    | 跳动淡入淡出动画 | boolean                                               | —                                           | false  |
| spinPulse   | 脉冲旋转动画     | boolean                                               | —                                           | false  |
| spinReverse | 反向旋转动画     | boolean                                               | —                                           | false  |

### 使用提示

1. 图标组件基于 FontAwesome，需要先在项目中安装并配置 FontAwesome。

2. 使用图标时，可以通过数组形式指定图标集和图标名称，例如 `['fas', 'user']`。

3. 可以组合使用多个属性，例如同时设置大小、颜色和动画效果。

4. 对于常用图标，推荐创建一个图标库，统一管理项目中使用的图标。
