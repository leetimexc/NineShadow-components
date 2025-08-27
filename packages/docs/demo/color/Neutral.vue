<template>
  <ns-title :level="2">文本颜色</ns-title>
  <div class="color-display">
    <div class="color-item">
      <div class="color-block text-primary"></div>
      <div class="color-info">
        <div class="color-name">主要文本</div>
        <div class="color-value">#303133</div>
        <div class="color-var">--ns-text-color-primary</div>
      </div>
    </div>
    <div class="color-item">
      <div class="color-block text-regular"></div>
      <div class="color-info">
        <div class="color-name">常规文本</div>
        <div class="color-value">#606266</div>
        <div class="color-var">--ns-text-color-regular</div>
      </div>
    </div>
    <div class="color-item">
      <div class="color-block text-secondary"></div>
      <div class="color-info">
        <div class="color-name">次要文本</div>
        <div class="color-value">#909399</div>
        <div class="color-var">--ns-text-color-secondary</div>
      </div>
    </div>
    <div class="color-item">
      <div class="color-block text-placeholder"></div>
      <div class="color-info">
        <div class="color-name">占位文本</div>
        <div class="color-value">#a8abb2</div>
        <div class="color-var">--ns-text-color-placeholder</div>
      </div>
    </div>
    <div class="color-item">
      <div class="color-block text-disabled"></div>
      <div class="color-info">
        <div class="color-name">禁用文本</div>
        <div class="color-value">#c0c4cc</div>
        <div class="color-var">--ns-text-color-disabled</div>
      </div>
    </div>
  </div>

  <ns-title :level="2">边框颜色</ns-title>
  <div class="color-display">
    <div class="color-item">
      <div class="color-block border-base"></div>
      <div class="color-info">
        <div class="color-name">基础边框</div>
        <div class="color-value">#dcdfe6</div>
        <div class="color-var">--ns-border-color</div>
      </div>
    </div>
    <div class="color-item">
      <div class="color-block border-light"></div>
      <div class="color-info">
        <div class="color-name">浅色边框</div>
        <div class="color-value">#e4e7ed</div>
        <div class="color-var">--ns-border-color-light</div>
      </div>
    </div>
    <div class="color-item">
      <div class="color-block border-lighter"></div>
      <div class="color-info">
        <div class="color-name">更浅边框</div>
        <div class="color-value">#ebeef5</div>
        <div class="color-var">--ns-border-color-lighter</div>
      </div>
    </div>
    <div class="color-item">
      <div class="color-block border-extra-light"></div>
      <div class="color-info">
        <div class="color-name">极浅边框</div>
        <div class="color-value">#f2f6fc</div>
        <div class="color-var">--ns-border-color-extra-light</div>
      </div>
    </div>
    <div class="color-item">
      <div class="color-block border-dark"></div>
      <div class="color-info">
        <div class="color-name">深色边框</div>
        <div class="color-value">#d4d7de</div>
        <div class="color-var">--ns-border-color-dark</div>
      </div>
    </div>
    <div class="color-item">
      <div class="color-block border-darker"></div>
      <div class="color-info">
        <div class="color-name">更深边框</div>
        <div class="color-value">#cdd0d6</div>
        <div class="color-var">--ns-border-color-darker</div>
      </div>
    </div>
  </div>

  <ns-title :level="2">填充颜色</ns-title>
  <div class="color-display">
    <div class="color-item">
      <div class="color-block fill-base"></div>
      <div class="color-info">
        <div class="color-name">基础填充</div>
        <div class="color-value">#f0f2f5</div>
        <div class="color-var">--ns-fill-color</div>
      </div>
    </div>
    <div class="color-item">
      <div class="color-block fill-light"></div>
      <div class="color-info">
        <div class="color-name">浅色填充</div>
        <div class="color-value">#f5f7fa</div>
        <div class="color-var">--ns-fill-color-light</div>
      </div>
    </div>
    <div class="color-item">
      <div class="color-block fill-lighter"></div>
      <div class="color-info">
        <div class="color-name">更浅填充</div>
        <div class="color-value">#fafafa</div>
        <div class="color-var">--ns-fill-color-lighter</div>
      </div>
    </div>
    <div class="color-item">
      <div class="color-block fill-extra-light"></div>
      <div class="color-info">
        <div class="color-name">极浅填充</div>
        <div class="color-value">#fafcff</div>
        <div class="color-var">--ns-fill-color-extra-light</div>
      </div>
    </div>
    <div class="color-item">
      <div class="color-block fill-dark"></div>
      <div class="color-info">
        <div class="color-name">深色填充</div>
        <div class="color-value">#ebedf0</div>
        <div class="color-var">--ns-fill-color-dark</div>
      </div>
    </div>
    <div class="color-item">
      <div class="color-block fill-darker"></div>
      <div class="color-info">
        <div class="color-name">更深填充</div>
        <div class="color-value">#e6e8eb</div>
        <div class="color-var">--ns-fill-color-darker</div>
      </div>
    </div>
    <div class="color-item">
      <div class="color-block fill-blank"></div>
      <div class="color-info">
        <div class="color-name">空白填充</div>
        <div class="color-value">#ffffff</div>
        <div class="color-var">--ns-fill-color-blank</div>
      </div>
    </div>
  </div>

  <ns-title :level="2">背景颜色</ns-title>
  <div class="color-display">
    <div class="color-item">
      <div class="color-block bg-base"></div>
      <div class="color-info">
        <div class="color-name">基础背景</div>
        <div class="color-value">#ffffff</div>
        <div class="color-var">--ns-bg-color</div>
      </div>
    </div>
    <div class="color-item">
      <div class="color-block bg-page"></div>
      <div class="color-info">
        <div class="color-name">页面背景</div>
        <div class="color-value">#f2f3f5</div>
        <div class="color-var">--ns-bg-color-page</div>
      </div>
    </div>
    <div class="color-item">
      <div class="color-block bg-overlay"></div>
      <div class="color-info">
        <div class="color-name">遮罩背景</div>
        <div class="color-value">#ffffff</div>
        <div class="color-var">--ns-bg-color-overlay</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.color-display {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 30px;
}

.color-item {
  display: flex;
  align-items: center;
  width: 280px;
}

.color-block {
  width: 80px;
  height: 80px;
  border-radius: 4px;
  margin-right: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.color-info {
  display: flex;
  flex-direction: column;
}

.color-name {
  font-weight: bold;
  margin-bottom: 4px;
}

.color-value {
  color: #666;
  margin-bottom: 2px;
}

.color-var {
  color: #999;
  font-size: 12px;
}

/* 文本颜色 */
.text-primary {
  background-color: var(--ns-text-color-primary);
}

.text-regular {
  background-color: var(--ns-text-color-regular);
}

.text-secondary {
  background-color: var(--ns-text-color-secondary);
}

.text-placeholder {
  background-color: var(--ns-text-color-placeholder);
}

.text-disabled {
  background-color: var(--ns-text-color-disabled);
}

/* 边框颜色 */
.border-base {
  background-color: var(--ns-border-color);
}

.border-light {
  background-color: var(--ns-border-color-light);
}

.border-lighter {
  background-color: var(--ns-border-color-lighter);
}

.border-extra-light {
  background-color: var(--ns-border-color-extra-light);
}

.border-dark {
  background-color: var(--ns-border-color-dark);
}

.border-darker {
  background-color: var(--ns-border-color-darker);
}

/* 填充颜色 */
.fill-base {
  background-color: var(--ns-fill-color);
}

.fill-light {
  background-color: var(--ns-fill-color-light);
}

.fill-lighter {
  background-color: var(--ns-fill-color-lighter);
}

.fill-extra-light {
  background-color: var(--ns-fill-color-extra-light);
}

.fill-dark {
  background-color: var(--ns-fill-color-dark);
}

.fill-darker {
  background-color: var(--ns-fill-color-darker);
}

.fill-blank {
  background-color: var(--ns-fill-color-blank);
  border: 1px solid #eee;
}

/* 背景颜色 */
.bg-base {
  background-color: var(--ns-bg-color);
  border: 1px solid #eee;
}

.bg-page {
  background-color: var(--ns-bg-color-page);
}

.bg-overlay {
  background-color: var(--ns-bg-color-overlay);
  border: 1px solid #eee;
}
</style>
