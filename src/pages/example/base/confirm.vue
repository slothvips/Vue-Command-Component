<script lang="tsx" setup>
import { createElementPlusDialog } from "@/components/index";
import Content from "./components/Content.vue";
import { provide } from "vue";
import { ElMessage } from "element-plus";

provide("base", "来自base的🩷");

const CommandDialog = createElementPlusDialog();

const openDialog = () => {
  CommandDialog(<Content />, {
    title: "基础用法",
  });
};

const openDialog2 = () => {
  const { hide, show, destroyWithResolve } = CommandDialog(<Content />, {
    title: "外部控制",
  });
  [2, 4, 6].forEach((t) => {
    setTimeout(() => {
      t === 2 && hide();
      t === 4 && show();
      t === 6 && destroyWithResolve();
    }, t * 1000);
  });
};

const openDialog3 = () => {
  const { destroyWithResolve, destroyWithReject } = CommandDialog(<Content />, {
    title: "confirm dialog",
    // onCancel: true,
    onCancel: () => {
      destroyWithReject("cancel");
      ElMessage.error("cancel");
    },
    // onConfirm: true,
    onConfirm: () => {
      destroyWithResolve("confirm");
      ElMessage.success("confirm");
    },
  });
};
</script>

<template>
  <div>
    <el-button type="primary" @click="openDialog">打开弹窗</el-button>
  </div>
</template>

<style lang="scss" scoped></style>
