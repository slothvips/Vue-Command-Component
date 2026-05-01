<template>
  <div class="flex justify-center items-center">
    <el-button @click="openDrawer">Open drawer</el-button>
    <el-button @click="openCustomDrawer" type="primary">Custom drawer</el-button>
  </div>
</template>

<script setup lang="tsx">
import { useDrawer } from "@vue-cmd/element-plus";
import DialogContent from "./shared/DialogContent.vue";

const CommandDrawer = useDrawer();

// Basic usage
const openDrawer = () => {
  CommandDrawer(<DialogContent />, {
    title: "Drawer example",
    size: "50%",
    attrs: {
      direction: "rtl",
    },
  });
};

// Custom usage
const openCustomDrawer = () => {
  const consumer = CommandDrawer(<DialogContent />, {
    title: "Custom drawer",
    size: "50%",
    attrs: {
      direction: "ltr",
      "destroy-on-close": true,
      "with-header": true,
      "close-on-click-modal": false,
      "close-on-press-escape": false,
      "show-close": true,
    },
    slots: {
      footer: () => (
        <div class="flex justify-end p-4 gap-2">
          <el-button onClick={() => consumer.destroyWithReject("Cancel")}>
            Cancel
          </el-button>
          <el-button
            type="primary"
            onClick={() => consumer.destroyWithResolve("Confirm")}
          >
            Confirm
          </el-button>
        </div>
      ),
    },
  });
};
</script>

<style lang="scss" scoped></style>
