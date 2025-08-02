---
title: Collapse
description: Collapse 组件文档

next:
  link: /components/dropdown
  text: Dropdown 下拉菜单

prev:
  link: /components/button
  text: Button 按钮
---

# Collapse 折叠面板

通过折叠面板收纳内容区域，点击面板标题可展开或收起内容。

## 基础用法

可同时展开多个面板，面板之间互不影响。

:::preview
demo-preview=../demo/collapse/Basic.vue
:::

## 手风琴效果

通过 `accordion` 属性来设置是否以手风琴模式显示，手风琴模式下每次只能展开一个面板。

:::preview
demo-preview=../demo/collapse/Accordion.vue
:::

## 自定义标题

除了可以通过 `title` 属性设置标题外，还可以通过具名插槽 `title` 来自定义标题内容。

:::preview
demo-preview=../demo/collapse/CustomTitle.vue
:::

## 禁用状态

通过 `disabled` 属性禁用某个折叠面板。

:::preview
demo-preview=../demo/collapse/Disabled.vue
:::

## API

### Collapse 属性

| 属性名                | 说明                                                                    | 类型           | 默认值 |
| --------------------- | ----------------------------------------------------------------------- | -------------- | ------ |
| model-value / v-model | 当前激活的面板(如果是手风琴模式，绑定值类型需要为 string，否则为 array) | string / array | —      |
| accordion             | 是否手风琴模式                                                          | boolean        | false  |

### Collapse 事件

| 事件名 | 说明                   | 回调参数                      |
| ------ | ---------------------- | ----------------------------- |
| change | 当前激活面板改变时触发 | (activeNames: array / string) |

### CollapseItem 属性

| 属性名   | 说明       | 类型            | 默认值 |
| -------- | ---------- | --------------- | ------ |
| name     | 唯一标志符 | string / number | —      |
| title    | 面板标题   | string          | —      |
| disabled | 是否禁用   | boolean         | false  |

### CollapseItem 插槽

| 插槽名 | 说明               |
| ------ | ------------------ |
| —      | 折叠面板的内容     |
| title  | 折叠面板的标题内容 |
