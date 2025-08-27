<template>
  <ns-title :level="2">通过 slot 传入内容</ns-title>
  <div style="max-width: 600px">
    <ns-alert type="success">Success alert</ns-alert>
    <ns-alert type="info">Info alert</ns-alert>
    <ns-alert type="warning">Warning alert</ns-alert>
    <ns-alert type="danger">Error alert</ns-alert>
  </div>
  <hr />
  <ns-title :level="2">通过 prop 传入内容</ns-title>
  <div style="max-width: 600px">
    <ns-alert type="success" title="Success alert" />
    <ns-alert type="info" title="Info alert" />
    <ns-alert type="warning" title="Warning alert" />
    <ns-alert type="danger" title="Error alert" />
  </div>
</template>
