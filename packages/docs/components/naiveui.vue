<template>
  <div class="flex justify-center items-center">
    <el-button @click="open">来吧</el-button>
    <el-button @click="open2">来吧(preset: dialog)</el-button>
  </div>
</template>

<script setup lang="tsx">
import { useModal, useDialog } from "@vue-cmd/naive";
import DialogContent from "./dialog-content.vue";

const modal = useModal();
const open = () => {
  modal(<DialogContent />, {
    attrs: {
      // preset: "dialog",
      style:{
        width: "600px",
      },
    },
  });
};

const dialog = useDialog();
const open2 = () => {
  dialog(<DialogContent />, {
    attrs: {
      style:{
        width: "600px",
      },
    },
  });
};
</script>

<style lang="scss" scoped></style>
