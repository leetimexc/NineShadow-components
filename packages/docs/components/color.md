# 颜色系统

NineShadow 组件库的颜色系统为产品提供一致的视觉语言和用户体验，包括主题色、功能色和中性色三大类别。

## 主题色与功能色

:::preview
demo-preview=../demo/color/Basic.vue
:::

### 主题色

主题色是贯穿整个产品的核心颜色，用于表达品牌特性。

- **主色**: #0052d9 (`--ns-color-primary`)

主题色会衍生出不同明度的颜色变体，从 `light-9`（最浅）到 `light-3`，以及 `dark-2`（深色）。

| 变量名                       | 颜色值  | 用途                   |
| ---------------------------- | ------- | ---------------------- |
| `--ns-color-primary`         | #0052d9 | 按钮、链接、重点强调   |
| `--ns-color-primary-light-9` | #e6f0ff | 浅色背景、悬浮态       |
| `--ns-color-primary-light-5` | #80b4ff | 次要强调、图表         |
| `--ns-color-primary-dark-2`  | #0042ae | 按钮按下状态、文字强调 |

### 功能色

功能色用于表示不同的状态和操作反馈。

| 颜色类型 | 基础色值 | 变量名               | 主要应用场景         |
| -------- | -------- | -------------------- | -------------------- |
| 成功色   | #008858  | `--ns-color-success` | 成功状态、完成操作   |
| 警告色   | #e6a23c  | `--ns-color-warning` | 警告提示、需注意操作 |
| 危险色   | #d54941  | `--ns-color-danger`  | 错误状态、删除操作   |
| 信息色   | #909399  | `--ns-color-info`    | 中性信息、提示       |

每种功能色同样具有从 `light-9` 到 `light-3` 以及 `dark-2` 的衍生色，可用于不同强调程度的界面元素。

## 中性色

:::preview
demo-preview=../demo/color/Neutral.vue
:::

中性色是构建界面的基础，主要用于文本、背景、边框等元素。

### 文本颜色

| 变量名                        | 颜色值  | 应用场景           |
| ----------------------------- | ------- | ------------------ |
| `--ns-text-color-primary`     | #303133 | 标题、重要文本     |
| `--ns-text-color-regular`     | #606266 | 正文、常规文本     |
| `--ns-text-color-secondary`   | #909399 | 次要信息、说明文字 |
| `--ns-text-color-placeholder` | #a8abb2 | 占位符、提示文本   |
| `--ns-text-color-disabled`    | #c0c4cc | 禁用状态的文本     |

### 边框颜色

| 变量名                          | 颜色值  | 应用场景           |
| ------------------------------- | ------- | ------------------ |
| `--ns-border-color`             | #dcdfe6 | 常规边框           |
| `--ns-border-color-light`       | #e4e7ed | 分割线、次要边框   |
| `--ns-border-color-lighter`     | #ebeef5 | 表格边框、浅色分割 |
| `--ns-border-color-extra-light` | #f2f6fc | 最浅边框、背景分割 |

### 填充颜色

| 变量名                  | 颜色值  | 应用场景           |
| ----------------------- | ------- | ------------------ |
| `--ns-fill-color`       | #f0f2f5 | 基础填充背景       |
| `--ns-fill-color-light` | #f5f7fa | 浅色背景、卡片     |
| `--ns-fill-color-blank` | #ffffff | 纯白填充、弹窗背景 |

### 背景颜色

| 变量名                  | 颜色值  | 应用场景 |
| ----------------------- | ------- | -------- |
| `--ns-bg-color`         | #ffffff | 组件背景 |
| `--ns-bg-color-page`    | #f2f3f5 | 页面背景 |
| `--ns-bg-color-overlay` | #ffffff | 浮层背景 |

## 颜色设计原则

### 对比度

NineShadow 颜色系统遵循 WCAG 2.1 AA 级标准，确保文本与背景之间有足够的对比度，提高可读性。主要文本（`--ns-text-color-primary`）与背景的对比度不低于 4.5:1，次要文本不低于 3:1。

### 色彩一致性

组件库中相同语义的元素使用相同的颜色，确保用户体验的一致性。例如，所有"成功"状态使用相同的绿色系，所有"危险"状态使用相同的红色系。

### 无障碍设计

为支持色盲和色弱用户，关键信息不仅通过颜色传达，还结合了形状、文本或图标等其他视觉元素。例如，错误状态除了使用红色外，还会配合感叹号图标。

## 使用方式

### 基础用法

```css
/* 使用主题色 */
.element {
  color: var(--ns-color-primary);
  background-color: var(--ns-color-primary-light-9);
}

/* 使用功能色 */
.success-message {
  color: var(--ns-color-success);
}

/* 使用中性色 */
.text-content {
  color: var(--ns-text-color-regular);
  border: 1px solid var(--ns-border-color);
}
```

### 自定义主题

通过覆盖 CSS 变量自定义主题：

```css
:root {
  /* 自定义主题色 */
  --ns-color-primary: #6a5acd;

  /* 自动生成衍生色 */
  --ns-color-primary-light-9: color-mix(
    in srgb,
    var(--ns-color-primary) 10%,
    white
  );
  --ns-color-primary-light-8: color-mix(
    in srgb,
    var(--ns-color-primary) 20%,
    white
  );
  /* ... 其他衍生色 ... */

  /* 自定义功能色 */
  --ns-color-success: #2e8b57;
  --ns-color-warning: #ff8c00;
}
```

### 暗黑模式

NineShadow 支持暗黑模式，通过媒体查询或自定义类名切换：

```css
@media (prefers-color-scheme: dark) {
  :root {
    --ns-bg-color: #1a1a1a;
    --ns-text-color-primary: #f0f0f0;
    /* ... 其他暗黑模式变量 ... */
  }
}

/* 或通过类名切换 */
.ns-theme-dark {
  --ns-bg-color: #1a1a1a;
  --ns-text-color-primary: #f0f0f0;
}
```

## 最佳实践

1. **语义化使用**：根据颜色的语义选择合适的变量，而非直接使用颜色值
2. **适当的对比度**：确保前景色和背景色之间有足够的对比度
3. **一致性**：在整个应用中保持颜色使用的一致性
4. **适度使用强调色**：主题色应适度使用，避免页面过于花哨
