<template>
  <div class="tooltip-base-box">
    <div class="row center">
      <xc-tooltip
        class="box-item"
        content="Top Left prompts info"
        placement="top-start"
      >
        <xc-button>top-start</xc-button>
      </xc-tooltip>
      <xc-tooltip
        class="box-item"
        content="Top Center prompts info"
        placement="top"
      >
        <xc-button>top</xc-button>
      </xc-tooltip>
      <xc-tooltip
        class="box-item"
        content="Top Right prompts info"
        placement="top-end"
      >
        <xc-button>top-end</xc-button>
      </xc-tooltip>
    </div>
    <div class="row">
      <xc-tooltip
        class="box-item"
        content="Left Top prompts info"
        placement="left-start"
      >
        <xc-button>left-start</xc-button>
      </xc-tooltip>
      <xc-tooltip
        class="box-item"
        content="Right Top prompts info"
        placement="right-start"
      >
        <xc-button>right-start</xc-button>
      </xc-tooltip>
    </div>
    <div class="row">
      <xc-tooltip
        class="box-item"
        content="Left Center prompts info"
        placement="left"
      >
        <xc-button class="mt-3 mb-3">left</xc-button>
      </xc-tooltip>
      <xc-tooltip
        class="box-item"
        content="Right Center prompts info"
        placement="right"
      >
        <xc-button>right</xc-button>
      </xc-tooltip>
    </div>
    <div class="row">
      <xc-tooltip
        class="box-item"
        content="Left Bottom prompts info"
        placement="left-end"
      >
        <xc-button>left-end</xc-button>
      </xc-tooltip>
      <xc-tooltip
        class="box-item"
        content="Right Bottom prompts info"
        placement="right-end"
      >
        <xc-button>right-end</xc-button>
      </xc-tooltip>
    </div>
    <div class="row center">
      <xc-tooltip
        class="box-item"
        content="Bottom Left prompts info"
        placement="bottom-start"
      >
        <xc-button>bottom-start</xc-button>
      </xc-tooltip>
      <xc-tooltip
        class="box-item"
        content="Bottom Center prompts info"
        placement="bottom"
      >
        <xc-button>bottom</xc-button>
      </xc-tooltip>
      <xc-tooltip
        class="box-item"
        content="Bottom Right prompts info"
        placement="bottom-end"
      >
        <xc-button>bottom-end</xc-button>
      </xc-tooltip>
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
