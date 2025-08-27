---
title: Form
description: Form 组件文档

prev:
  link: components/tooltip
  text: Tooltip 文字提示

next: false
---

# Form 表单

表单目前包含 输入框, 下拉选择, 开关 等用户输入的组件。 使用表单，您可以收集、验证和提交数据。

::: tip
ps: 表单控件目前不全，待完善
:::

## 基本用法

最基础的表单包括各种输入表单项，比如`input`、`input-number`、`select`、`switch`、`radio`、`checkbox` 等。
在每个 `from` 组件中，需要使用 `from-item` 组件来包裹每个表单项,用于获取值与校验。

::: preview
demo-preview=../demo/form/Basic.vue
:::

## 对齐方式

通过 `label-position` 属性可以控制表单项的左右对齐方式。

::: preview
demo-preview=../demo/form/Position.vue
:::

## 表单校验

通过 `rules` 属性可以设置表单项的校验规则。书写规则参考 [async-validator](https://github.com/yiminghe/async-validator)。

::: preview
demo-preview=../demo/form/Validate.vue
:::

## 自定义校验规则

通过校验规则中的 `validator` 属性可以自定义校验规则。

::: preview
demo-preview=../demo/form/CustomValidate.vue
:::

## Form API

### Props

| Name                       | Description      | Type                               | Default |
| -------------------------- | ---------------- | ---------------------------------- | ------- |
| model                      | 表单数据         | `Record<string, any>`              | -       |
| rules                      | 校验规则         | `FormRules`                        | -       |
| disabled                   | 是否禁用表单     | `boolean`                          | `false` |
| label-position             | 标签位置         | `enum`- `'left' \| 'top'\| right'` | right   |
| label-width                | 标签宽度         | `number`                           | -       |
| label-suffix               | 标签后缀         | `string`                           | -       |
| show-message               | 是否显示提示     | `boolean`                          | true    |
| hide-required-asterisk     | 是否隐藏必填符号 | `boolean`                          | false   |
| required-asterisk-position | 必填符号位置     | `enum`-`'left' \| 'right'`         | `right` |

### Events

| Name     | Description          | Type                                                                |
| -------- | -------------------- | ------------------------------------------------------------------- |
| validate | 验证表单项校验后触发 | `(prop: FormItemProps, isValid: boolean, message: string ) => void` |

### Slots

| Name    | Description | Sub Component |
| ------- | ----------- | ------------- |
| default | 默认插槽    | FormItem      |

### Expose

| Name          | Description    | Type                                                                                                     |
| ------------- | -------------- | -------------------------------------------------------------------------------------------------------- |
| validate      | 校验表单项     | `() => Promise<boolean>`                                                                                 |
| validateField | 校验指定表单项 | `(props?: string[],callback?:(isValid:boolean,invalidFields?: ValidateFieldsError)) => Promise<boolean>` |
| resetFields   | 重置表单项     | `(props?: string[]) => void`                                                                             |
| clearValidate | 清除校验状态   | `(props?: string[]) => void`                                                                             |

## FormItem API

### Props

| Name         | Description                                                 | Type             | Default |
| ------------ | ----------------------------------------------------------- | ---------------- | ------- |
| prop         | 表单域 model 字段                                           | `string`         | -       |
| label        | 标签文本                                                    | `string`         | -       |
| label-width  | 标签宽度，例如 '50px'                                       | `string\|number` | -       |
| disabled     | 是否禁用表单域                                              | `boolean`        | `false` |
| required     | 是否必填，如不设置，则会根据校验规则自动生成                | `boolean`        | `false` |
| show-message | 是否显示校验错误信息                                        | `boolean`        | `true`  |
| error        | 错误提示文案，如不设置，则会从校验规则的 message 属性中获取 | `string`         | -       |
| rules        | 校验规则                                                    | `FormItemRule[]` | -       |

### Slots

| Name    | Description      | Type             |
| ------- | ---------------- | ---------------- |
| default | 默认插槽         | -                |
| label   | label 插槽       | `{label:string}` |
| error   | 错误提示文案插槽 | `{error:string}` |

### Expose

| Name            | Description  | Type                                                                                                            |
| --------------- | ------------ | --------------------------------------------------------------------------------------------------------------- |
| validateStatus  | 校验状态     | `Ref<ValidateStatus>` - `'success' \| 'error' \| 'validating' \| 'init'`                                        |
| validateMessage | 校验信息     | `Ref<string>`                                                                                                   |
| validate        | 校验表单项   | `(trigger: string,callback?: (valid: boolean,invalidFields?: ValidateFieldsError) => void) => Promise<boolean>` |
| resetField      | 重置表单项   | `() => void`                                                                                                    |
| clearValidate   | 清除校验结果 | `() => void`                                                                                                    |
