---
title: Select
description: Select 组件文档

next:
  link: /components/input
  text: Input 输入框

prev:
  link: /components/radio
  text: Radio 单选框
---

# Select 选择器

当选项过多时，使用下拉菜单展示并选择内容。

## 基础用法

适用广泛的基础单选。

::: preview
demo-preview=../demo/select/Basic.vue
:::

## 禁用状态

选择器不可用状态。

::: preview
demo-preview=../demo/select/Disabled.vue
:::

## 可清空单选

包含清空按钮，可将选择器清空为初始状态。

::: preview
demo-preview=../demo/select/Clearable.vue
:::

## 基础多选

适用性较广的基础多选，用 Tag 展示已选项。

::: preview
demo-preview=../demo/select/Multiple.vue
:::

<!-- ## 禁用选项

可以禁用特定的选项。

::: preview
demo-preview=../demo/select/DisabledOption.vue
::: -->

## 自定义模板

可以自定义备选项的显示内容。

::: preview
demo-preview=../demo/select/CustomTemplate.vue
:::

## 可搜索

可以利用搜索功能快速查找选项。

::: preview
demo-preview=../demo/select/Filterable.vue
:::

## 远程搜索

从服务器搜索数据，输入关键字进行查找。

::: preview
demo-preview=../demo/select/Remote.vue
:::

## Select API

### Props

| 名称                  | 说明                   | 类型                                                      | 可选值 | 默认值 |
| --------------------- | ---------------------- | --------------------------------------------------------- | ------ | ------ |
| model-value / v-model | 绑定值                 | `string \| string[]`                                      | —      | —      |
| options               | 下拉选项数组           | `SelectOptionProps[]`                                     | —      | []     |
| placeholder           | 占位符                 | `string`                                                  | —      | —      |
| disabled              | 是否禁用               | `boolean`                                                 | —      | false  |
| clearable             | 是否可以清空选项       | `boolean`                                                 | —      | false  |
| multiple              | 是否多选               | `boolean`                                                 | —      | false  |
| render-label          | 自定义备选项的渲染函数 | `(option: SelectOptionProps) => VNode \| string`          | —      | —      |
| filterable            | 是否可搜索             | `boolean`                                                 | —      | false  |
| filter-method         | 自定义搜索方法         | `(value: string) => SelectOptionProps[]`                  | —      | —      |
| remote                | 是否为远程搜索         | `boolean`                                                 | —      | false  |
| remote-method         | 远程搜索方法           | `(value: string) => Promise<SelectOptionProps[] \| void>` | —      | —      |

### 事件

| 事件名         | 说明                                     | 回调参数                    |
| -------------- | ---------------------------------------- | --------------------------- |
| change         | 选中值发生变化时触发                     | (value: string \| string[]) |
| visible-change | 下拉框出现/隐藏时触发                    | (visible: boolean)          |
| clear          | 可清空的单选模式下用户点击清空按钮时触发 | —                           |
| focus          | 当选择器的输入框获得焦点时触发           | —                           |
| blur           | 当选择器的输入框失去焦点时触发           | —                           |

### 方法

| 方法名 | 说明                                   | 参数 |
| ------ | -------------------------------------- | ---- |
| focus  | 使选择器的输入框获取焦点               | —    |
| blur   | 使选择器的输入框失去焦点，并隐藏下拉框 | —    |

### SelectOptionProps 数据结构

| 属性     | 说明                                    | 类型      | 可选值 | 默认值 |
| -------- | --------------------------------------- | --------- | ------ | ------ |
| value    | 选项的值                                | `string`  | —      | —      |
| label    | 选项的标签，若不设置则默认与 value 相同 | `string`  | —      | —      |
| disabled | 是否禁用该选项                          | `boolean` | —      | false  |
