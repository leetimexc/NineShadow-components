<template>
  <div>
    <ns-button type="primary" loading>Loading</ns-button>
    <ns-button type="primary" loading-icon="circle-notch" loading
      >Loading</ns-button
    >
    <ns-button type="primary" loading>
      <template #loading>
        <ns-icon style="margin-right: 6px" icon="star" spin />
      </template>
      Loading
    </ns-button>
  </div>
</template>
