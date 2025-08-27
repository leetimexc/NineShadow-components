<template>
  <ns-title :level="2">主题色</ns-title>
  <div class="color-display">
    <div class="color-item">
      <div class="color-block primary"></div>
      <div class="color-info">
        <div class="color-name">Primary</div>
        <div class="color-value">#0052d9</div>
        <div class="color-var">--ns-color-primary</div>
      </div>
    </div>
  </div>

  <ns-title :level="3">主题色的衍生色</ns-title>
  <div class="color-palette">
    <div class="color-item small">
      <div class="color-block primary"></div>
      <div class="color-name">Primary</div>
    </div>
    <div class="color-item small">
      <div class="color-block primary-light-9"></div>
      <div class="color-name">Light-9</div>
    </div>
    <div class="color-item small">
      <div class="color-block primary-light-8"></div>
      <div class="color-name">Light-8</div>
    </div>
    <div class="color-item small">
      <div class="color-block primary-light-7"></div>
      <div class="color-name">Light-7</div>
    </div>
    <div class="color-item small">
      <div class="color-block primary-light-6"></div>
      <div class="color-name">Light-6</div>
    </div>
    <div class="color-item small">
      <div class="color-block primary-light-5"></div>
      <div class="color-name">Light-5</div>
    </div>
    <div class="color-item small">
      <div class="color-block primary-light-4"></div>
      <div class="color-name">Light-4</div>
    </div>
    <div class="color-item small">
      <div class="color-block primary-light-3"></div>
      <div class="color-name">Light-3</div>
    </div>
    <div class="color-item small">
      <div class="color-block primary-dark-2"></div>
      <div class="color-name">Dark-2</div>
    </div>
  </div>

  <ns-title :level="2">功能色</ns-title>

  <ns-title :level="3">Success / 成功色</ns-title>
  <div class="color-display">
    <div class="color-item">
      <div class="color-block success"></div>
      <div class="color-info">
        <div class="color-name">Success</div>
        <div class="color-value">#008858</div>
        <div class="color-var">--ns-color-success</div>
      </div>
    </div>
  </div>

  <ns-title :level="4">成功色的衍生色</ns-title>
  <div class="color-palette">
    <div class="color-item small">
      <div class="color-block success"></div>
      <div class="color-name">Success</div>
    </div>
    <div class="color-item small">
      <div class="color-block success-light-9"></div>
      <div class="color-name">Light-9</div>
    </div>
    <div class="color-item small">
      <div class="color-block success-light-8"></div>
      <div class="color-name">Light-8</div>
    </div>
    <div class="color-item small">
      <div class="color-block success-light-7"></div>
      <div class="color-name">Light-7</div>
    </div>
    <div class="color-item small">
      <div class="color-block success-light-6"></div>
      <div class="color-name">Light-6</div>
    </div>
    <div class="color-item small">
      <div class="color-block success-light-5"></div>
      <div class="color-name">Light-5</div>
    </div>
    <div class="color-item small">
      <div class="color-block success-light-4"></div>
      <div class="color-name">Light-4</div>
    </div>
    <div class="color-item small">
      <div class="color-block success-light-3"></div>
      <div class="color-name">Light-3</div>
    </div>
    <div class="color-item small">
      <div class="color-block success-dark-2"></div>
      <div class="color-name">Dark-2</div>
    </div>
  </div>

  <ns-title :level="3">Warning / 警告色</ns-title>
  <div class="color-display">
    <div class="color-item">
      <div class="color-block warning"></div>
      <div class="color-info">
        <div class="color-name">Warning</div>
        <div class="color-value">#e6a23c</div>
        <div class="color-var">--ns-color-warning</div>
      </div>
    </div>
  </div>

  <ns-title :level="4">警告色的衍生色</ns-title>
  <div class="color-palette">
    <div class="color-item small">
      <div class="color-block warning"></div>
      <div class="color-name">Warning</div>
    </div>
    <div class="color-item small">
      <div class="color-block warning-light-9"></div>
      <div class="color-name">Light-9</div>
    </div>
    <div class="color-item small">
      <div class="color-block warning-light-8"></div>
      <div class="color-name">Light-8</div>
    </div>
    <div class="color-item small">
      <div class="color-block warning-light-7"></div>
      <div class="color-name">Light-7</div>
    </div>
    <div class="color-item small">
      <div class="color-block warning-light-6"></div>
      <div class="color-name">Light-6</div>
    </div>
    <div class="color-item small">
      <div class="color-block warning-light-5"></div>
      <div class="color-name">Light-5</div>
    </div>
    <div class="color-item small">
      <div class="color-block warning-light-4"></div>
      <div class="color-name">Light-4</div>
    </div>
    <div class="color-item small">
      <div class="color-block warning-light-3"></div>
      <div class="color-name">Light-3</div>
    </div>
    <div class="color-item small">
      <div class="color-block warning-dark-2"></div>
      <div class="color-name">Dark-2</div>
    </div>
  </div>

  <ns-title :level="3">Danger / 危险色</ns-title>
  <div class="color-display">
    <div class="color-item">
      <div class="color-block danger"></div>
      <div class="color-info">
        <div class="color-name">Danger</div>
        <div class="color-value">#d54941</div>
        <div class="color-var">--ns-color-danger</div>
      </div>
    </div>
  </div>

  <ns-title :level="4">危险色的衍生色</ns-title>
  <div class="color-palette">
    <div class="color-item small">
      <div class="color-block danger"></div>
      <div class="color-name">Danger</div>
    </div>
    <div class="color-item small">
      <div class="color-block danger-light-9"></div>
      <div class="color-name">Light-9</div>
    </div>
    <div class="color-item small">
      <div class="color-block danger-light-8"></div>
      <div class="color-name">Light-8</div>
    </div>
    <div class="color-item small">
      <div class="color-block danger-light-7"></div>
      <div class="color-name">Light-7</div>
    </div>
    <div class="color-item small">
      <div class="color-block danger-light-6"></div>
      <div class="color-name">Light-6</div>
    </div>
    <div class="color-item small">
      <div class="color-block danger-light-5"></div>
      <div class="color-name">Light-5</div>
    </div>
    <div class="color-item small">
      <div class="color-block danger-light-4"></div>
      <div class="color-name">Light-4</div>
    </div>
    <div class="color-item small">
      <div class="color-block danger-light-3"></div>
      <div class="color-name">Light-3</div>
    </div>
    <div class="color-item small">
      <div class="color-block danger-dark-2"></div>
      <div class="color-name">Dark-2</div>
    </div>
  </div>

  <ns-title :level="3">Info / 信息色</ns-title>
  <div class="color-display">
    <div class="color-item">
      <div class="color-block info"></div>
      <div class="color-info">
        <div class="color-name">Info</div>
        <div class="color-value">#909399</div>
        <div class="color-var">--ns-color-info</div>
      </div>
    </div>
  </div>

  <ns-title :level="4">信息色的衍生色</ns-title>
  <div class="color-palette">
    <div class="color-item small">
      <div class="color-block info"></div>
      <div class="color-name">Info</div>
    </div>
    <div class="color-item small">
      <div class="color-block info-light-9"></div>
      <div class="color-name">Light-9</div>
    </div>
    <div class="color-item small">
      <div class="color-block info-light-8"></div>
      <div class="color-name">Light-8</div>
    </div>
    <div class="color-item small">
      <div class="color-block info-light-7"></div>
      <div class="color-name">Light-7</div>
    </div>
    <div class="color-item small">
      <div class="color-block info-light-6"></div>
      <div class="color-name">Light-6</div>
    </div>
    <div class="color-item small">
      <div class="color-block info-light-5"></div>
      <div class="color-name">Light-5</div>
    </div>
    <div class="color-item small">
      <div class="color-block info-light-4"></div>
      <div class="color-name">Light-4</div>
    </div>
    <div class="color-item small">
      <div class="color-block info-light-3"></div>
      <div class="color-name">Light-3</div>
    </div>
    <div class="color-item small">
      <div class="color-block info-dark-2"></div>
      <div class="color-name">Dark-2</div>
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

.color-palette {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 30px;
}

.color-item {
  display: flex;
  align-items: center;
  width: 280px;
}

.color-item.small {
  flex-direction: column;
  width: 60px;
  text-align: center;
}

.color-block {
  width: 80px;
  height: 80px;
  border-radius: 4px;
  margin-right: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.color-item.small .color-block {
  width: 60px;
  height: 60px;
  margin-right: 0;
  margin-bottom: 8px;
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

/* 主题色 */
.primary {
  background-color: var(--ns-color-primary);
}

.primary-light-9 {
  background-color: var(--ns-color-primary-light-9);
}

.primary-light-8 {
  background-color: var(--ns-color-primary-light-8);
}

.primary-light-7 {
  background-color: var(--ns-color-primary-light-7);
}

.primary-light-6 {
  background-color: var(--ns-color-primary-light-6);
}

.primary-light-5 {
  background-color: var(--ns-color-primary-light-5);
}

.primary-light-4 {
  background-color: var(--ns-color-primary-light-4);
}

.primary-light-3 {
  background-color: var(--ns-color-primary-light-3);
}

.primary-dark-2 {
  background-color: var(--ns-color-primary-dark-2);
}

/* 功能色 */
.success {
  background-color: var(--ns-color-success);
}

.success-light-9 {
  background-color: var(--ns-color-success-light-9);
}

.success-light-8 {
  background-color: var(--ns-color-success-light-8);
}

.success-light-7 {
  background-color: var(--ns-color-success-light-7);
}

.success-light-6 {
  background-color: var(--ns-color-success-light-6);
}

.success-light-5 {
  background-color: var(--ns-color-success-light-5);
}

.success-light-4 {
  background-color: var(--ns-color-success-light-4);
}

.success-light-3 {
  background-color: var(--ns-color-success-light-3);
}

.success-dark-2 {
  background-color: var(--ns-color-success-dark-2);
}

.warning {
  background-color: var(--ns-color-warning);
}

.warning-light-9 {
  background-color: var(--ns-color-warning-light-9);
}

.warning-light-8 {
  background-color: var(--ns-color-warning-light-8);
}

.warning-light-7 {
  background-color: var(--ns-color-warning-light-7);
}

.warning-light-6 {
  background-color: var(--ns-color-warning-light-6);
}

.warning-light-5 {
  background-color: var(--ns-color-warning-light-5);
}

.warning-light-4 {
  background-color: var(--ns-color-warning-light-4);
}

.warning-light-3 {
  background-color: var(--ns-color-warning-light-3);
}

.warning-dark-2 {
  background-color: var(--ns-color-warning-dark-2);
}

.danger {
  background-color: var(--ns-color-danger);
}

.danger-light-9 {
  background-color: var(--ns-color-danger-light-9);
}

.danger-light-8 {
  background-color: var(--ns-color-danger-light-8);
}

.danger-light-7 {
  background-color: var(--ns-color-danger-light-7);
}

.danger-light-6 {
  background-color: var(--ns-color-danger-light-6);
}

.danger-light-5 {
  background-color: var(--ns-color-danger-light-5);
}

.danger-light-4 {
  background-color: var(--ns-color-danger-light-4);
}

.danger-light-3 {
  background-color: var(--ns-color-danger-light-3);
}

.danger-dark-2 {
  background-color: var(--ns-color-danger-dark-2);
}

.info {
  background-color: var(--ns-color-info);
}

.info-light-9 {
  background-color: var(--ns-color-info-light-9);
}

.info-light-8 {
  background-color: var(--ns-color-info-light-8);
}

.info-light-7 {
  background-color: var(--ns-color-info-light-7);
}

.info-light-6 {
  background-color: var(--ns-color-info-light-6);
}

.info-light-5 {
  background-color: var(--ns-color-info-light-5);
}

.info-light-4 {
  background-color: var(--ns-color-info-light-4);
}

.info-light-3 {
  background-color: var(--ns-color-info-light-3);
}

.info-dark-2 {
  background-color: var(--ns-color-info-dark-2);
}
</style>
