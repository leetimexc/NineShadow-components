---
title: Form
description: Form 组件文档

next:
  link: /components/input
  text: Input 输入框

prev:
  link: /components/dropdown
  text: Dropdown 下拉菜单
---

# Form 表单

表单包含输入框、单选框、下拉选择、多选框等用户输入的组件，用于收集、校验和提交数据。

## 基础用法

在 Form 组件中，每个表单域由一个 FormItem 组件构成，表单域中可以放置各种类型的表单控件，包括 Input、Select、Checkbox、Radio 等。

::: preview
demo-preview=../demo/form/Basic.vue
:::

## 行内表单

设置 `inline` 属性可以让表单域变为行内的表单域。

::: preview
demo-preview=../demo/form/Inline.vue
:::

## 对齐方式

通过设置 `label-position` 属性可以改变表单域标签的位置，可选值为 `top`、`left`、`right`，默认为 `right`。

::: preview
demo-preview=../demo/form/LabelPosition.vue
:::

## 表单验证

Form 组件可以对表单进行验证，只需要通过 `rules` 属性传入约定的验证规则，并将 Form-Item 的 `prop` 属性设置为需要验证的字段名即可。

::: preview
demo-preview=../demo/form/Validation.vue
:::

## 自定义验证规则

除了使用内置的验证规则外，还可以自定义验证规则来完成更复杂的验证。

::: preview
demo-preview=../demo/form/CustomValidation.vue
:::

## 动态增减表单项

::: preview
demo-preview=../demo/form/DynamicItems.vue
:::

## 数字类型验证

::: preview
demo-preview=../demo/form/NumberValidation.vue
:::

## 表单内组件尺寸控制

通过设置 Form 上的 `size` 属性可以使该表单内所有可调节大小的组件继承该尺寸。FormItem 也具有该属性。

::: preview
demo-preview=../demo/form/Size.vue
:::

## Form API

### Form Props

| 名称                       | 说明                                                                                    | 类型                         | 默认值    |
| -------------------------- | --------------------------------------------------------------------------------------- | ---------------------------- | --------- |
| model                      | 表单数据对象                                                                            | `Record<string, any>`        | —         |
| rules                      | 表单验证规则                                                                            | `FormRules`                  | —         |
| inline                     | 行内表单模式                                                                            | `boolean`                    | `false`   |
| label-position             | 表单域标签的位置，如果值为 left 或者 right 时，则需要设置 label-width                   | `'top' \| 'left' \| 'right'` | `'right'` |
| label-width                | 表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。支持 auto。 | `string \| number`           | `'150px'` |
| label-suffix               | 表单域标签的后缀                                                                        | `string`                     | —         |
| hide-required-asterisk     | 是否隐藏必填字段的标签旁边的红色星号                                                    | `boolean`                    | `false`   |
| required-asterisk-position | 星号的位置                                                                              | `'left' \| 'right'`          | `'left'`  |
| show-message               | 是否显示校验错误信息                                                                    | `boolean`                    | `true`    |
| disabled                   | 是否禁用该表单内的所有组件。若设置为 true，则表单内组件上的 disabled 属性不再生效       | `boolean`                    | `false`   |

### Form Methods

| 方法名        | 说明                                                                                                                                                                 | 参数                                                                       |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| validate      | 对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise | `(callback?: FormValidateCallback) => FormValidateResult`                  |
| validateField | 对部分表单字段进行校验的方法                                                                                                                                         | `(keys?: string[], callback?: FormValidateCallback) => FormValidateResult` |
| resetFields   | 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果                                                                                                           | `(keys?: string[]) => void`                                                |
| clearValidate | 移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果                                                             | `(keys?: string[]) => void`                                                |

### Form Events

| 事件名称 | 说明                   | 回调参数                                                           |
| -------- | ---------------------- | ------------------------------------------------------------------ |
| validate | 任一表单项被校验后触发 | `(prop: FormItemProps, isValid: boolean, message: string) => void` |

## Form-Item API

### Form-Item Props

| 名称         | 说明                                                                         | 类型                 | 默认值  |
| ------------ | ---------------------------------------------------------------------------- | -------------------- | ------- |
| prop         | 表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的 | `string \| string[]` | —       |
| label        | 标签文本                                                                     | `string`             | —       |
| label-width  | 表单域标签的的宽度，例如 '50px'。支持 auto。                                 | `string \| number`   | —       |
| required     | 是否必填，如不设置，则会根据校验规则自动生成                                 | `boolean`            | `false` |
| rules        | 表单验证规则                                                                 | `FormItemRule[]`     | —       |
| error        | 表单域验证错误信息, 设置该值会使表单验证状态变为 error，并显示该错误信息     | `string`             | —       |
| show-message | 是否显示校验错误信息                                                         | `boolean`            | `true`  |
| disabled     | 是否禁用该字段                                                               | `boolean`            | `false` |

### Form-Item Methods

| 方法名        | 说明                                                                                                                                                                 | 参数                                                                       |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| validate      | 对该表单项进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise | `(trigger: string, callback?: FormValidateCallback) => FormValidateResult` |
| resetField    | 对该表单项进行重置，将其值重置为初始值并移除校验结果                                                                                                                 | `() => void`                                                               |
| clearValidate | 移除该表单项的校验结果                                                                                                                                               | `() => void`                                                               |

### Form-Item Slots

| 名称    | 说明                         |
| ------- | ---------------------------- |
| default | 表单域的内容                 |
| label   | 自定义标签文本               |
| error   | 自定义表单校验信息的显示方式 |
