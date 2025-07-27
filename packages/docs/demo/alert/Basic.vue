<template>
  <h2>通过 slot 传入内容</h2>
  <div style="max-width: 600px">
    <xc-alert type="success">Success alert</xc-alert>
    <xc-alert type="info">Info alert</xc-alert>
    <xc-alert type="warning">Warning alert</xc-alert>
    <xc-alert type="danger">Error alert</xc-alert>
  </div>
  <h2>通过 prop 传入内容</h2>
  <div style="max-width: 600px">
    <xc-alert type="success" title="Success alert" />
    <xc-alert type="info" title="Info alert" />
    <xc-alert type="warning" title="Warning alert" />
    <xc-alert type="danger" title="Error alert" />
  </div>
</template>
