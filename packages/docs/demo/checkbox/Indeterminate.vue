<template>
  <div class="demo-checkbox">
    <ns-checkbox
      v-model="checkAll"
      :indeterminate="isIndeterminate"
      @change="handleCheckAllChange"
    >
      全选
    </ns-checkbox>
    <div style="margin: 15px 0"></div>
    <ns-checkbox-group
      v-model="checkedItems"
      @change="handleCheckedItemsChange"
    >
      <ns-checkbox v-for="item in items" :key="item" :label="item">
        {{ item }}
      </ns-checkbox>
    </ns-checkbox-group>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const checkAll = ref(false);
const isIndeterminate = ref(true);
const items = ["选项A", "选项B", "选项C", "选项D"];
const checkedItems = ref(["选项A", "选项B"]);

const handleCheckAllChange = (val) => {
  checkedItems.value = val ? items : [];
  isIndeterminate.value = false;
};

const handleCheckedItemsChange = (value) => {
  const checkedCount = value.length;
  checkAll.value = checkedCount === items.length;
  isIndeterminate.value = checkedCount > 0 && checkedCount < items.length;
};
</script>
