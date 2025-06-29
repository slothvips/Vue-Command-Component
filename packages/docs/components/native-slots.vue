<template>
  <div class="flex justify-center items-center">
    <el-button @click="openDialog">打开弹窗</el-button>
  </div>
</template>

<script setup name="base-example" lang="tsx">
import { useElementPlusDialog } from "@vue-cmd/element-plus";
import DialogContent from "./dialog-content.vue";

const CommandDialog = useElementPlusDialog();
const openDialog = () => {
  const consumer = CommandDialog(<DialogContent />, {
    title: "",
    slots: {
      header: () => <div class="text-red text-30px">自定义头部</div>,
      footer: () => (
        <div class="flex justify-center items-center gap-20px">
          <el-button type="primary" onClick={() => consumer.destroyWithResolve("ok")}>
            确定
          </el-button>
          <el-button type="default" onClick={() => consumer.destroyWithReject("cancel")}>
            取消
          </el-button>
        </div>
      ),
    },
  });
};
</script>

<style lang="scss" scoped></style>
