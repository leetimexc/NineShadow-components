# NsSwitch 开关

开关组件，用于在两种状态之间进行切换。

## 基本用法

通过 `v-model` 绑定一个 `Boolean` 类型的变量。

::: preview
demo-preview=../demo/switch/SwitchBasic.vue
:::

## 禁用状态

通过 `disabled` 属性指定是否禁用开关。

::: preview
demo-preview=../demo/switch/SwitchDisabled.vue
:::

## 文字描述

使用 `active-text` 和 `inactive-text` 属性来设置开关的文字描述。

::: preview
demo-preview=../demo/switch/SwitchText.vue
:::

## 不同尺寸

提供 `small` 和 `large` 两种尺寸，默认为中等尺寸。

::: preview
demo-preview=../demo/switch/SwitchSize.vue
:::

## 自定义值

通过 `active-value` 和 `inactive-value` 属性可以自定义开关的值，而不仅限于 `Boolean` 类型。

::: preview
demo-preview=../demo/switch/SwitchCustomValue.vue
:::

## API

### 属性

| 属性名                | 说明             | 类型                      | 默认值 |
| --------------------- | ---------------- | ------------------------- | ------ |
| model-value / v-model | 绑定值           | boolean / string / number | —      |
| disabled              | 是否禁用         | boolean                   | false  |
| active-text           | 打开时的文字描述 | string                    | —      |
| inactive-text         | 关闭时的文字描述 | string                    | —      |
| active-value          | 打开时的值       | boolean / string / number | true   |
| inactive-value        | 关闭时的值       | boolean / string / number | false  |
| name                  | 原生 name 属性   | string                    | —      |
| id                    | 原生 id 属性     | string                    | —      |
| size                  | 开关尺寸         | 'small' / 'large'         | —      |

### 事件

| 事件名 | 说明                     | 参数       |
| ------ | ------------------------ | ---------- |
| change | 状态发生变化时的回调函数 | 新状态的值 |

### 方法

| 方法名 | 说明           | 参数 |
| ------ | -------------- | ---- |
| focus  | 使开关获取焦点 | —    |
