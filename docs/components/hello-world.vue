<template>
  <div>
    <el-button @click="openDialog">打开弹窗</el-button>
  </div>
</template>

<script setup name="hello-world" lang="tsx">
import { createElementPlusDialog } from "vue3-command-dialog";
import DialogContent from "./dialog-content.vue";
const CommandDialog = createElementPlusDialog();

const openDialog = () => {
  CommandDialog(<DialogContent />, {
    title: "hello world",
  });
};
</script>

<style lang="scss" scoped></style>
