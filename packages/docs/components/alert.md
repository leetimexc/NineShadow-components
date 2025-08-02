---
title: Alert
description: Alert 组件文档

next:
  link: /components/alert
  text: Alert 警告提示

prev:
  link: /components/button
  text: Button 按钮
---

# Alert 警告提示

用于页面中展示重要的提示信息，可以带有图标、标题和描述。

## 基础用法

Alert 组件提供四种类型的提示：`success`、`info`、`warning` 和 `danger`。

可以通过 `slot` 传入内容，也可以通过 `title` 属性设置标题。

:::preview
demo-preview=../demo/alert/Basic.vue
:::

## 带有图标

通过设置 `show-icon` 属性来显示图标，提高可读性。

:::preview
demo-preview=../demo/alert/ShowIcon.vue
:::

## 带有描述信息

通过设置 `description` 属性或使用默认 slot 添加辅助性文字介绍。

:::preview
demo-preview=../demo/alert/Desc.vue
:::

## 带图标和描述

同时使用 `show-icon` 和 `description` 属性，可以更醒目地展示重要信息。

:::preview
demo-preview=../demo/alert/IconDesc.vue
:::

## 可关闭的提示

设置 `closable` 属性可以使提示可关闭。默认情况下，Alert 组件是不可关闭的。

通过绑定 `close` 事件可以在关闭时触发回调函数。

:::preview
demo-preview=../demo/alert/Close.vue
:::

## 不同主题

Alert 组件提供了两种不同的主题：`light` 和 `dark`。

通过设置 `effect` 属性来改变主题，默认为 `light`。

:::preview
demo-preview=../demo/alert/Theme.vue
:::

## 文字居中

使用 `center` 属性可以让文字水平居中。

:::preview
demo-preview=../demo/alert/TextCenter.vue
:::

## API

### 属性

| 属性名      | 说明         | 类型    | 可选值                            | 默认值 |
| ----------- | ------------ | ------- | --------------------------------- | ------ |
| title       | 标题         | string  | —                                 | —      |
| type        | 类型         | string  | success / info / warning / danger | info   |
| description | 辅助性文字   | string  | —                                 | —      |
| closable    | 是否可关闭   | boolean | —                                 | false  |
| center      | 文字是否居中 | boolean | —                                 | false  |
| show-icon   | 是否显示图标 | boolean | —                                 | false  |
| effect      | 主题         | string  | light / dark                      | light  |

### 事件

| 事件名 | 说明                    | 回调参数 |
| ------ | ----------------------- | -------- |
| close  | 关闭 Alert 时触发的事件 | —        |

### 插槽

| 插槽名  | 说明       |
| ------- | ---------- |
| default | 描述       |
| title   | 标题的内容 |

### 方法

通过 ref 可以获取到 Alert 组件实例并调用实例方法。

| 方法名 | 说明               | 参数 |
| ------ | ------------------ | ---- |
| close  | 关闭 Alert         | —    |
| open   | 打开 Alert（重现） | —    |
