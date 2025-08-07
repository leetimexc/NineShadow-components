<template>
  <ns-popconfirm
    width="220"
    confirm-button-text="Delete"
    cancel-button-text="No,Thanks"
    icon="trash"
    icon-color="#626aef"
    title="Are you sure to delete this item?"
    @confirm="$message.success('Delete Success')"
    @cancel="$message.info('Cancel')"
  >
    <ns-button>Delete</ns-button>
  </ns-popconfirm>
</template>
