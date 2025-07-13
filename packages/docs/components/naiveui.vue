<template>
  <div class="flex justify-center items-center">
    <el-button @click="open">来吧</el-button>
    <el-button @click="open2">来吧(preset: dialog)</el-button>
    <el-button @click="openDrawer">打开抽屉</el-button>
  </div>
</template>

<script setup lang="tsx">
import { useModal, useDialog, useDrawer } from "@vue-cmd/naive";
import DialogContent from "./shared/DialogContent.vue";
import { NCard } from "naive-ui";

const modal = useModal();
const open = () => {
  modal(
    <NCard>
      <DialogContent />
    </NCard>,
    {
      attrs: {
        style: {
          width: "600px",
        },
      },
    },
  );
};

const dialog = useDialog();
const open2 = () => {
  dialog(<DialogContent />, {
    attrs: {
      style: {
        width: "600px",
      },
    },
  });
};

const drawer = useDrawer();
const openDrawer = () => {
  drawer(
    <NCard>
      <DialogContent />
    </NCard>,
    {
      attrs: {
        drawerAttrs: {
          placement: "right",
          width: 600,
        },
        contentAttrs: {
          title: "抽屉示例",
        },
      },
    },
  );
};
</script>

<style lang="scss" scoped></style>
