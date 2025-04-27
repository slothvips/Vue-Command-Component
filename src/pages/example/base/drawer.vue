<script lang="tsx" setup>
import { useElementPlusDrawer } from "../../../components";
import Content from "./components/Content.vue";
import { getCurrentInstance, onMounted, provide } from "vue";

provide("base", "来自base的🩷");

// 抽屉示例
const CommandDrawer = useElementPlusDrawer();
const openDrawer = () => {
  CommandDrawer(<Content />, {
    title: "给👴打开",
  });
};

const ctx = getCurrentInstance();

onMounted(() => {
  console.log("drawer mounted", ctx?.vnode.el);
  // console.log('drawer mounted', ctx?.vnode.el.innerText);
});
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
