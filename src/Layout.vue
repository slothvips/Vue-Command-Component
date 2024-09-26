<script lang="tsx" setup>
import { provide } from "vue";
import { RouterView } from "vue-router";
provide("Layout", "来自Layout的🩷");

// 基础用法
const baseExampleRoutes = [
  {
    path: "/example/base",
    text: "基础用法",
  },
  {
    path: "/example/base?nested=true",
    text: "嵌套",
  },
  {
    path: "/example/base/compatible-native-attributes",
    text: "完美兼容组件库属性",
  },
];

// 基础用法
const advanceExampleRoutes = [
  {
    path: "/example/advance/promise",
    text: "利用promise特性",
  },
];
</script>

<template>
  <h3>基础用法</h3>
  <el-row>
    <el-col v-for="e in baseExampleRoutes" :span="24 / baseExampleRoutes.length">
      <el-button type="primary" @click="$router.push(e.path)">{{ e.text }}</el-button>
    </el-col>
  </el-row>
  <el-divider />
  <h3>进阶用法</h3>
  <el-row>
    <el-col v-for="e in advanceExampleRoutes" :span="24 / advanceExampleRoutes.length">
      <el-button type="primary" @click="$router.push(e.path)">{{ e.text }}</el-button>
    </el-col>
  </el-row>
  <el-divider />
  <RouterView />
</template>

<style scoped></style>
