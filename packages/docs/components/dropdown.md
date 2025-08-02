---
title: Dropdown
description: Dropdown 组件文档

next:
  link: /components/icon
  text: Icon 图标

prev:
  link: /components/collapse
  text: Collapse 折叠面板
---

# Dropdown 下拉菜单

常用的下拉菜单，用于显示链接列表或执行操作的菜单。

## 基础用法

移动到按钮上即可展开下拉菜单，菜单项可以是文本或自定义内容。

:::preview 基础用法
demo-preview=../demo/dropdown/Basic.vue
:::

## 触发方式

可以配置点击激活或者悬停激活。

:::preview 触发方式
demo-preview=../demo/dropdown/Trigger.vue
:::

## 分割按钮

分割按钮的下拉菜单，左侧是功能按钮，右侧是下拉菜单。

:::preview 分割按钮
demo-preview=../demo/dropdown/SplitButton.vue
:::

## 尺寸

Dropdown 组件提供了三种尺寸：large、默认和 small。

:::preview 不同尺寸
demo-preview=../demo/dropdown/Sizes.vue
:::

## API

### Dropdown 属性

| 属性名        | 说明                                               | 类型    | 默认值 |
| ------------- | -------------------------------------------------- | ------- | ------ |
| type          | 菜单按钮类型，同 Button 组件的 type 属性           | string  | —      |
| size          | 菜单尺寸，可选值为 large、small 或留空使用默认尺寸 | string  | —      |
| trigger       | 触发下拉的行为                                     | string  | hover  |
| placement     | 菜单弹出位置                                       | string  | bottom |
| disabled      | 是否禁用                                           | boolean | false  |
| hide-on-click | 是否在点击菜单项后隐藏菜单                         | boolean | true   |
| split-button  | 是否为分割按钮                                     | boolean | false  |

### Dropdown 事件

| 事件名         | 说明                               | 回调参数                  |
| -------------- | ---------------------------------- | ------------------------- |
| click          | 分割按钮模式下，左侧按钮的点击事件 | event: MouseEvent         |
| command        | 点击菜单项触发的事件               | command: string \| number |
| visible-change | 下拉框出现/隐藏时触发              | visible: boolean          |

### Dropdown 方法

| 方法名 | 说明         | 参数 |
| ------ | ------------ | ---- |
| open   | 打开下拉菜单 | —    |
| close  | 关闭下拉菜单 | —    |

### Dropdown 插槽

| 插槽名   | 说明                                          |
| -------- | --------------------------------------------- |
| —        | 触发下拉菜单显示的元素，通常是 Button 或 Link |
| dropdown | 下拉菜单内容，通常是多个 DropdownItem 组件    |

### DropdownItem 属性

| 属性名   | 说明                                      | 类型            | 默认值 |
| -------- | ----------------------------------------- | --------------- | ------ |
| command  | 指令，会在 command 事件回调中作为参数传递 | string / number | —      |
| label    | 显示的文本                                | string          | —      |
| disabled | 是否禁用                                  | boolean         | false  |
| divided  | 是否显示分割线                            | boolean         | false  |

### DropdownItem 插槽

| 插槽名 | 说明                          |
| ------ | ----------------------------- |
| —      | 自定义内容，会覆盖 label 属性 |
