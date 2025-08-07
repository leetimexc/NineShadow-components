<template>
  <div class="tooltip-base-box">
    <div class="row center">
      <ns-tooltip
        class="box-item"
        content="Top Left prompts info"
        placement="top-start"
      >
        <ns-button>top-start</ns-button>
      </ns-tooltip>
      <ns-tooltip
        class="box-item"
        content="Top Center prompts info"
        placement="top"
      >
        <ns-button>top</ns-button>
      </ns-tooltip>
      <ns-tooltip
        class="box-item"
        content="Top Right prompts info"
        placement="top-end"
      >
        <ns-button>top-end</ns-button>
      </ns-tooltip>
    </div>
    <div class="row">
      <ns-tooltip
        class="box-item"
        content="Left Top prompts info"
        placement="left-start"
      >
        <ns-button>left-start</ns-button>
      </ns-tooltip>
      <ns-tooltip
        class="box-item"
        content="Right Top prompts info"
        placement="right-start"
      >
        <ns-button>right-start</ns-button>
      </ns-tooltip>
    </div>
    <div class="row">
      <ns-tooltip
        class="box-item"
        content="Left Center prompts info"
        placement="left"
      >
        <ns-button class="mt-3 mb-3">left</ns-button>
      </ns-tooltip>
      <ns-tooltip
        class="box-item"
        content="Right Center prompts info"
        placement="right"
      >
        <ns-button>right</ns-button>
      </ns-tooltip>
    </div>
    <div class="row">
      <ns-tooltip
        class="box-item"
        content="Left Bottom prompts info"
        placement="left-end"
      >
        <ns-button>left-end</ns-button>
      </ns-tooltip>
      <ns-tooltip
        class="box-item"
        content="Right Bottom prompts info"
        placement="right-end"
      >
        <ns-button>right-end</ns-button>
      </ns-tooltip>
    </div>
    <div class="row center">
      <ns-tooltip
        class="box-item"
        content="Bottom Left prompts info"
        placement="bottom-start"
      >
        <ns-button>bottom-start</ns-button>
      </ns-tooltip>
      <ns-tooltip
        class="box-item"
        content="Bottom Center prompts info"
        placement="bottom"
      >
        <ns-button>bottom</ns-button>
      </ns-tooltip>
      <ns-tooltip
        class="box-item"
        content="Bottom Right prompts info"
        placement="bottom-end"
      >
        <ns-button>bottom-end</ns-button>
      </ns-tooltip>
    </div>
  </div>
</template>

<style>
.tooltip-base-box {
  width: 600px;
}
.tooltip-base-box .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tooltip-base-box .center {
  justify-content: center;
}
.tooltip-base-box .box-item {
  width: 110px;
  margin-top: 10px;
}
</style>
