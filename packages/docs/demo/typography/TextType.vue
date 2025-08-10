<template>
  <ns-space dir="vertical">
    <div
      style="
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        display: flex;
        transition: all 0.2s ease-in-out;
        /* gap: 16px; */
      "
    >
      <ns-text>NsElement</ns-text>
      <ns-text type="secondary">Secondary</ns-text>
      <ns-text type="third">third</ns-text>
      <ns-text type="primary">Primary</ns-text>
      <ns-text type="success">Success</ns-text>
      <ns-text type="warning">Warning</ns-text>
      <ns-text type="danger">Danger</ns-text>
      <ns-text type="disabled">Disabled</ns-text>

      <ns-text mark>Mark</ns-text>
      <ns-text strong>Bold</ns-text>
      <ns-text underline>Underline</ns-text>
      <ns-text del>Line through</ns-text>
    </div>
  </ns-space>
</template>
