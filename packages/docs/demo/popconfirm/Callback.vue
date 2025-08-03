<template>
  <xc-popconfirm
    width="220"
    confirm-button-text="Delete"
    cancel-button-text="No,Thanks"
    icon="trash"
    icon-color="#626aef"
    title="Are you sure to delete this item?"
    @confirm="$message.success('Delete Success')"
    @cancel="$message.info('Cancel')"
  >
    <xc-button>Delete</xc-button>
  </xc-popconfirm>
</template>
