---
title: Checkbox
description: Checkbox 组件文档

next:
  link: /components/radio
  text: Radio 单选框

prev:
  link: /components/button
  text: Button 按钮
---

# Checkbox 多选框

在一组备选项中进行多选。

## 基础用法

单独使用可以表示两种状态之间的切换。

:::preview
demo-preview=../demo/checkbox_old/Basic.vue
:::

## 禁用状态

多选框不可用状态。设置 `disabled` 属性即可。

:::preview
demo-preview=../demo/checkbox_old/Disabled.vue
:::

## 多选框组

适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。

:::preview
demo-preview=../demo/checkbox_old/Group.vue
:::

## 中间状态

`indeterminate` 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果。

:::preview
demo-preview=../demo/checkbox_old/Indeterminate.vue
:::

## 可选项目数量的限制

使用 `min` 和 `max` 属性能够限制可以被勾选的项目的数量。

:::preview
demo-preview=../demo/checkbox_old/Limit.vue
:::

## 带有边框

设置 `border` 属性可以渲染为带有边框的多选框。

:::preview
demo-preview=../demo/checkbox_old/Border.vue
:::

## 按钮样式

按钮样式的多选组合。只需要把 `ns-checkbox` 元素替换为 `ns-checkbox-button` 元素即可。

:::preview
demo-preview=../demo/checkbox_old/Button.vue
:::

## 带有边框的按钮样式

设置 `border` 属性可以渲染为带有边框的按钮样式多选框。

:::preview
demo-preview=../demo/checkbox_old/BorderButton.vue
:::

## 不同尺寸

Checkbox 组件提供除了默认值以外的三种尺寸：`large`、`default`、`small`。

:::preview
demo-preview=../demo/checkbox_old/Size.vue
:::

## API

### Checkbox 属性

| 属性名                | 说明                                         | 类型                               | 可选值                  | 默认值  |
| --------------------- | -------------------------------------------- | ---------------------------------- | ----------------------- | ------- |
| model-value / v-model | 绑定值                                       | string / number / boolean          | —                       | —       |
| label                 | 选中状态的值（只有在 checkbox-group 时有效） | string / number / boolean / object | —                       | —       |
| true-label            | 选中时的值                                   | string / number                    | —                       | —       |
| false-label           | 没有选中时的值                               | string / number                    | —                       | —       |
| disabled              | 是否禁用                                     | boolean                            | —                       | false   |
| border                | 是否显示边框                                 | boolean                            | —                       | false   |
| size                  | 多选框的尺寸                                 | string                             | large / default / small | default |
| name                  | 原生 name 属性                               | string                             | —                       | —       |
| checked               | 当前是否勾选                                 | boolean                            | —                       | false   |
| indeterminate         | 设置 indeterminate 状态，只负责样式控制      | boolean                            | —                       | false   |

### Checkbox 事件

| 事件名 | 说明                     | 回调参数          |
| ------ | ------------------------ | ----------------- |
| change | 当绑定值变化时触发的事件 | value: 更新后的值 |

### Checkbox 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

### CheckboxGroup 属性

| 属性名                | 说明                                       | 类型    | 可选值                  | 默认值  |
| --------------------- | ------------------------------------------ | ------- | ----------------------- | ------- |
| model-value / v-model | 绑定值                                     | array   | —                       | []      |
| size                  | 多选框组尺寸                               | string  | large / default / small | default |
| disabled              | 是否禁用                                   | boolean | —                       | false   |
| min                   | 可被勾选的 checkbox 的最小数量             | number  | —                       | —       |
| max                   | 可被勾选的 checkbox 的最大数量             | number  | —                       | —       |
| text-color            | 按钮形式的 checkbox 激活时的文本颜色       | string  | —                       | #ffffff |
| fill                  | 按钮形式的 checkbox 激活时的填充色和边框色 | string  | —                       | #409EFF |

### CheckboxGroup 事件

| 事件名 | 说明                     | 回调参数          |
| ------ | ------------------------ | ----------------- |
| change | 当绑定值变化时触发的事件 | value: 更新后的值 |

### CheckboxGroup 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

### CheckboxButton 属性

| 属性名      | 说明                                         | 类型                               | 可选值 | 默认值 |
| ----------- | -------------------------------------------- | ---------------------------------- | ------ | ------ |
| label       | 选中状态的值（只有在 checkbox-group 时有效） | string / number / boolean / object | —      | —      |
| true-label  | 选中时的值                                   | string / number                    | —      | —      |
| false-label | 没有选中时的值                               | string / number                    | —      | —      |
| disabled    | 是否禁用                                     | boolean                            | —      | false  |
| name        | 原生 name 属性                               | string                             | —      | —      |
| checked     | 当前是否勾选                                 | boolean                            | —      | false  |
