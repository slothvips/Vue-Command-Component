<script lang="tsx" setup>
import {  createElementPlusDrawer } from "../../../components";
import Content from "./components/Content.vue";
import { provide } from "vue";

provide("base", "来自base的🩷");

// 抽屉示例
const CommandDrawer = createElementPlusDrawer();
const openDrawer = () => {
  CommandDrawer(<Content />, {
    title: "三秒后打开",
  });
};
</script>

<template>
  <!-- <el-container> -->
  <div class="p-20px">
    <div>
      <p>el-drawer和el-dialog的用法基本没什么区别.</p>
    </div>
    <el-button type="primary" @click="openDrawer">打开抽屉</el-button>
  </div>
  <!-- </el-container> -->
</template>

<style lang="scss" scoped></style>
