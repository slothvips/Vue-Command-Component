<template>
  <div class="flex justify-center items-center">
    <el-button @click="openDialog">Open dialog</el-button>
  </div>
</template>

<script setup name="base-example" lang="tsx">
import { useDialog } from "@vue-cmd/element-plus";
import DialogContent from "./shared/DialogContent.vue";
import { ref } from "vue";

const dialogContentRef = ref();

const sayHello = () => {
  console.log(0);
  dialogContentRef.value?.sayHello();
};

const dialog = useDialog();
const openDialog = () => {
  dialog(() => <DialogContent ref={dialogContentRef} />, {
    title: "hello world",
    width: "90%",
    slots: {
      footer: () => <el-button onClick={sayHello}>Hello It's me~</el-button>,
    },
  });
};
</script>

<style lang="scss" scoped></style>
