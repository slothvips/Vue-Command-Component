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
  const consumer = dialog(<DialogContent />, {
    title: "",
    slots: {
      header: () => <div class="text-red text-30px">Custom header</div>,
      footer: () => (
        <div class="flex justify-center items-center gap-20px">
          <el-button
            type="primary"
            onClick={() => consumer.destroyWithResolve("ok")}
          >
            OK
          </el-button>
          <el-button
            type="default"
            onClick={() => consumer.destroyWithReject("cancel")}
          >
            Cancel
          </el-button>
        </div>
      ),
    },
  });
};
</script>

<style lang="scss" scoped></style>
