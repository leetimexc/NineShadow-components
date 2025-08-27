<template>
  <ns-title :level="2">Dark Theme</ns-title>
  <div style="max-width: 600px">
    <ns-alert title="Success Alert" type="success" effect="dark" />
    <ns-alert title="Info Alert" type="info" effect="dark" />
    <ns-alert title="Warning Alert" type="warning" effect="dark" />
    <ns-alert title="Error Alert" type="danger" effect="dark" />
  </div>
  <ns-title :level="2">Light Theme</ns-title>
  <div style="max-width: 600px">
    <ns-alert title="Success Alert" type="success" effect="light" />
    <ns-alert title="Info Alert" type="info" effect="light" />
    <ns-alert title="Warning Alert" type="warning" effect="light" />
    <ns-alert title="Error Alert" type="danger" effect="light" />
  </div>
</template>
