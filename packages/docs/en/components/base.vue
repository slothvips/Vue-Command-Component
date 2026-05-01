<template>
  <div class="flex justify-center items-center">
    <el-button @click="openDialog">{{ text.openDialog }}</el-button>
  </div>
</template>

<script setup name="base-example" lang="tsx">
import { useDialog } from "@vue-cmd/element-plus";
import DialogContent from "./shared/DialogContent.vue";
import { useDemoLocale } from "./shared/locale";

const text = useDemoLocale();
const dialog = useDialog();
const openDialog = () => {
  dialog(<DialogContent />, {
    title: "hello world",
    width: "90%",
  });
};
</script>

<style lang="scss" scoped></style>
