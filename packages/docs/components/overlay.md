# Overlay 遮罩层

遮罩层组件，用于创建一个覆盖在页面上的遮罩效果，通常用于模态框、对话框等需要聚焦用户注意力的场景。

## 基础用法

通过设置 `mask` 属性来控制是否显示遮罩背景色。默认情况下，遮罩层会有半透明黑色背景。

:::preview
demo-preview=../demo/overlay/Basic.vue
:::

## 自定义样式

通过 `overlay-class` 和 `z-index` 属性来自定义遮罩层的样式和层级。

:::preview
demo-preview=../demo/overlay/CustomStyle.vue
:::

## 事件处理

通过监听 `click` 事件来处理用户点击遮罩层的行为。

:::preview
demo-preview=../demo/overlay/Events.vue
:::

## API

### 属性

| 属性名        | 说明                | 类型                    | 默认值 |
| ------------- | ------------------- | ----------------------- | ------ |
| mask          | 是否显示遮罩背景色  | boolean                 | true   |
| z-index       | 遮罩层的 z-index 值 | number                  | 2000   |
| overlay-class | 自定义遮罩层的类名  | string / array / object | —      |

### 事件

| 事件名 | 说明             | 回调参数            |
| ------ | ---------------- | ------------------- |
| click  | 点击遮罩层时触发 | (event: MouseEvent) |

### 插槽

| 插槽名  | 说明       |
| ------- | ---------- |
| default | 遮罩层内容 |
