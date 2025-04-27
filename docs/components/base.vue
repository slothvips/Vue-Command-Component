<template>
  <div class="flex justify-center items-center h-full">
    <div class="mb-4">
      <el-button @click="openDialog">打开弹窗</el-button>
      <el-button type="success" @click="openDialog2">兼容组件库原生属性</el-button>
      <el-button type="info" @click="openDialog3">嵌套</el-button>
      <el-button type="warning">确认取消</el-button>
      <el-button type="danger">抽屉</el-button>
    </div>
  </div>
</template>

<script setup name="base-example" lang="tsx">
import { useElementPlusDialog } from "vue3-command-dialog";
import DialogContent from "./dialog-content.vue";

const CommandDialog = useElementPlusDialog();
const openDialog = () =>
  CommandDialog(<DialogContent />, {
    title: "hello world",
  });

const openDialog2 = () =>
  CommandDialog(<DialogContent />, {
    title: "可拖拽弹窗",
    attrs: {
      draggable: true,
      center: true,
      closeOnClickModal: false,
    },
  });

// const BaseExampleNested = resolveComponent("base-example");
const openDialog3 = () =>
  CommandDialog(<DialogContent nested />, {
    title: "嵌套弹窗",
  });

// const openDialog4 = () =>
//   CommandDialog(<DialogContent />, {
//     title: "hello world",
//   });
</script>

<style lang="scss" scoped></style>
