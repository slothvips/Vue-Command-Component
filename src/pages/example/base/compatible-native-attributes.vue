<script lang="tsx" setup>
import { createElementPlusDialog } from "@/components/index";
import { ref } from "vue";
const CommandDialog = createElementPlusDialog();

const count = ref(0);
setInterval(() => {
  count.value++;
}, 1000);
const openDialog = () => {
  CommandDialog(<div>我可以完美兼容官方属性哦</div>, {
    title: "我是一个可拖拽的弹窗",
    attrs: {
      // fullscreen: true,
      draggable: true,
      center: true,
      closeOnClickModal: false,
    },
    slots: {
      footer: () => {
        return <div>我是footer,{count.value}</div>;
      },
    },
  });
};
</script>

<template>
  <div>
    <el-button type="success" @click="openDialog">打开弹窗</el-button>
  </div>
</template>

<style lang="scss" scoped></style>
