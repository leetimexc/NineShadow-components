<template>
  <div>
    <xc-button type="primary" loading>Loading</xc-button>
    <xc-button type="primary" loading-icon="circle-notch" loading
      >Loading</xc-button
    >
    <xc-button type="primary" loading>
      <template #loading>
        <xc-icon style="margin-right: 6px" icon="star" spin />
      </template>
      Loading
    </xc-button>
  </div>
</template>
