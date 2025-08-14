---
title: Input
description: Input 组件文档

next:
  link: /components/Form
  text: Form 表单

prev:
  link: /components/Select
  text: Select 选择器
---

# Input 输入框

通过鼠标或键盘输入字符。

## 基础用法

使用`v-model`实现双向绑定。

::: preview
demo-preview=../demo/input/Basic.vue
:::

## 禁用状态

通过 `disabled` 属性指定是否禁用 input 组件。

::: preview
demo-preview=../demo/input/Disabled.vue
:::

## 可清空

使用 `clearable` 属性即可得到一个可清空的输入框。

::: preview
demo-preview=../demo/input/Clearable.vue
:::

## 密码框

使用 `show-password` 属性即可得到一个可切换显示隐藏的密码框。

::: preview
demo-preview=../demo/input/Password.vue
:::

## 带图标的输入框

带有图标标记输入类型。

::: preview
demo-preview=../demo/input/Icon.vue
:::

## 文本域

用于输入多行文本信息，通过将 `type` 属性的值指定为 textarea。

::: preview
demo-preview=../demo/input/Textarea.vue
:::

## 复合型输入框

可前置或后置元素，一般为标签或按钮。

::: preview
demo-preview=../demo/input/Compound.vue
:::

## 尺寸

使用 `size` 属性改变输入框大小。除了默认大小外，还有另外两个选项：`large`, `small`。

::: preview
demo-preview=../demo/input/Size.vue
:::

## Input API

### Props

| 名称                  | 说明                   | 类型                | 可选值                  | 默认值  |
| --------------------- | ---------------------- | ------------------- | ----------------------- | ------- |
| type                  | 类型                   | `string`            | text / textarea         | text    |
| model-value / v-model | 绑定值                 | `string` / `number` | —                       | —       |
| size                  | 输入框尺寸             | `string`            | large / default / small | default |
| placeholder           | 输入框占位文本         | `string`            | —                       | —       |
| clearable             | 是否可清空             | `boolean`           | —                       | false   |
| show-password         | 是否显示切换密码图标   | `boolean`           | —                       | false   |
| disabled              | 是否禁用               | `boolean`           | —                       | false   |
| readonly              | 原生 readonly 属性     | `boolean`           | —                       | false   |
| autocomplete          | 原生 autocomplete 属性 | `string`            | on / off                | off     |
| autofocus             | 原生 autofocus 属性    | `boolean`           | —                       | false   |
| form                  | 原生 form 属性         | `string`            | —                       | —       |

### 插槽

| 插槽名  | 说明                                    |
| ------- | --------------------------------------- |
| prefix  | 输入框头部内容，只对 `type="text"` 有效 |
| suffix  | 输入框尾部内容，只对 `type="text"` 有效 |
| prepend | 输入框前置内容，只对 `type="text"` 有效 |
| append  | 输入框后置内容，只对 `type="text"` 有效 |

### 事件

| 事件名 | 说明                                          | 回调参数                  |
| ------ | --------------------------------------------- | ------------------------- |
| input  | 在 Input 值改变时触发                         | (value: string \| number) |
| change | 仅在输入框失去焦点或用户按下回车时触发        | (value: string \| number) |
| focus  | 在 Input 获得焦点时触发                       | (event: FocusEvent)       |
| blur   | 在 Input 失去焦点时触发                       | (event: FocusEvent)       |
| clear  | 在点击由 `clearable` 属性生成的清空按钮时触发 | —                         |

### 方法

| 方法名 | 说明                | 参数 |
| ------ | ------------------- | ---- |
| focus  | 使 input 获取焦点   | —    |
| blur   | 使 input 失去焦点   | —    |
| select | 选中 input 中的文字 | —    |
| clear  | 清空 input 的内容   | —    |
