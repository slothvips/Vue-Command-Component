<template>
  <div class="flex justify-center items-center">
    <el-button @click="openDialog">Open dialog</el-button>
  </div>
</template>

<script setup lang="tsx">
import { useDialog } from "@vue-cmd/element-plus";
import DialogContent from "./shared/DialogContent.vue";

const dialog = useDialog();
const openDialog = () => {
  dialog(<DialogContent />, {
    title: "Native component props (try dragging me)",
    attrs: {
      modal: true,
      modalClass: "custom-modal",
      appendToBody: true,
      lockScroll: true,
      openDelay: 0,
      closeDelay: 0,
      closeOnClickModal: true,
      closeOnPressEscape: true,
      showClose: true,
      beforeClose: (_done: () => void) => {
        console.log("I will prevent closing");
        // done();
      },
      draggable: true,
      alignCenter: true,
    },
  });
};
</script>

<style lang="scss" scoped></style>
