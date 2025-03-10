<template>
  <div>
    这里是弹窗内容
    <el-row>
      <el-col :span="12">
        <el-button @click="confirm">it's ok.</el-button>
        <el-button @click="close">close</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="tsx">
import { getConsumer } from "vue3-command-dialog";

const consumer = getConsumer();

const close = () => {
  consumer.destroyWithReject("close");
};
const confirm = () => {
  consumer.destroyWithResolve("confirm");
};
</script>

<style lang="scss" scoped></style>
