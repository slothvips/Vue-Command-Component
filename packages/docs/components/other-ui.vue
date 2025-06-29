<template>
  <div>
    <div class="flex justify-center items-center">
      <el-button @click="openDialog">打开el-drawer</el-button>
      <el-button @click="openVantPopup">打开vant-popup</el-button>
      <el-button @click="openNaiveModal">打开naive-modal</el-button>
    </div>
    <el-divider />
    <p class="text-center">欢迎PR,或者联系我以提供更多组件的适配</p>
  </div>
</template>

<script setup name="base-example" lang="tsx">
import { useElementPlusDrawer } from "@vue-cmd/element-plus";
import { useVantPopup } from "@vue-cmd/vant";
import { useNaiveModal } from "@vue-cmd/naive";
import DialogContent from "./dialog-content.vue";

const CommandDrawer = useElementPlusDrawer();
const openDialog = () => {
  CommandDrawer(<DialogContent />, {
    title: "hello world",
    attrs: {
      size: "50vw",
    },
  });
};

const CommandVantPopup = useVantPopup();
const openVantPopup = () => {
  CommandVantPopup(<DialogContent />);
};

const CommandNaiveModal = useNaiveModal();
const openNaiveModal = () => {
  CommandNaiveModal(<DialogContent />);
};
</script>

<style lang="scss" scoped></style>
