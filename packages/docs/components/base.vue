<template>
  <div class="flex justify-center items-center">
    <el-button @click="openDialog">打开弹窗</el-button>
  </div>
</template>

<script setup name="base-example" lang="tsx">
import { useDialog } from "@vue-cmd/element-plus";
import DialogContent from "./dialog-content.vue";

const CommandDialog = useDialog();
const openDialog = () => {
  CommandDialog(<DialogContent />, {
    title: "hello world",
  });
};
</script>

<style lang="scss" scoped></style>
