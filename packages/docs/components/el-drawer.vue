<template>
  <div class="flex justify-center items-center">
    <el-button @click="openDrawer">打开抽屉</el-button>
    <el-button @click="openCustomDrawer" type="primary">自定义抽屉</el-button>
  </div>
</template>

<script setup lang="tsx">
import { useDrawer } from "@vue-cmd/element-plus";
import DialogContent from "./shared/DialogContent.vue";

const CommandDrawer = useDrawer();

// 基础用法
const openDrawer = () => {
  CommandDrawer(<DialogContent />, {
    title: "抽屉示例",
    size: "50%",
    attrs: {
      direction: "rtl",
    },
  });
};

// 自定义用法
const openCustomDrawer = () => {
  const consumer = CommandDrawer(<DialogContent />, {
    title: "自定义抽屉",
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
          <el-button onClick={() => consumer.destroyWithReject("取消")}>
            取消
          </el-button>
          <el-button
            type="primary"
            onClick={() => consumer.destroyWithResolve("确认")}
          >
            确认
          </el-button>
        </div>
      ),
    },
  });
};
</script>

<style lang="scss" scoped></style>
