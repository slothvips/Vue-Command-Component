<template>
  <div>
    <div class="flex justify-center items-center">
      <el-button @click="openDialog">打开el-drawer</el-button>
      <el-divider>以下粗略适配,暂时没时间适配,如果有需求可以自行适配一下(我也会适配的,只是时间问题)</el-divider>
      <el-button @click="openVantPopup">打开vant-popup</el-button>
      <el-button @click="openNaiveModal">打开naive-modal</el-button>
    </div>
    <el-divider />
    <p class="text-center">欢迎PR,或者联系我以提供更多组件的适配</p>
  </div>
</template>

<script setup lang="tsx">
import { useDrawer } from "@vue-cmd/element-plus";
import { usePopup } from "@vue-cmd/vant";
import { useModal } from "@vue-cmd/naive";
import DialogContent from "./dialog-content.vue";

const CommandDrawer = useDrawer();
const openDialog = () => {
  CommandDrawer(<DialogContent />, {
    title: "hello world",
    attrs: {
      size: "50vw",
    },
  });
};

const CommandVantPopup = usePopup();
const openVantPopup = () => {
  CommandVantPopup(<DialogContent />);
};

const CommandNaiveModal = useModal();
const openNaiveModal = () => {
  CommandNaiveModal(<DialogContent />);
};
</script>

<style lang="scss" scoped></style>
