<template>
  <div class="flex justify-center items-center">
    <el-button @click="consumer.show()">{{ text.showDialog }}</el-button>
    <el-button @click="consumer.hide()">{{ text.hideDialog }}</el-button>

    <el-button @click="newDialog()">{{ text.recreateDialog }}</el-button>
  </div>
</template>

<script setup lang="tsx">
import { useDialog } from "@vue-cmd/element-plus";
import type { IConsumer } from "@vue-cmd/core";
import DialogContent from "./shared/DialogContent.vue";
import { useDemoLocale } from "./shared/locale";

const text = useDemoLocale();
const dialog = useDialog();
let consumer: IConsumer;
const newDialog = () => {
  consumer = dialog(<DialogContent />, {
    title: "hello world",
    attrs: {
      "close-on-click-modal": false,
    },
  });
  consumer.hide();
};
newDialog();
</script>

<style lang="scss" scoped></style>
