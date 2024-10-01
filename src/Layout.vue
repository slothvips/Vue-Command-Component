<script lang="tsx" setup>
import { provide, computed } from "vue";
import { RouterView, useRoute } from "vue-router";
provide("Layout", "来自Layout的🩷");

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
  {
    path: "/example/base/confirm",
    text: "确认/取消弹窗",
  },
];

const advanceExampleRoutes = [
  {
    path: "/example/advance/promise",
    text: "利用promise特性",
  },
  {
    path: "/example/advance/communication",
    text: "promise方式通知外部组件",
  },
];

const $route = useRoute();

const activeExampleTitle = computed(() => {
  return baseExampleRoutes.find((e) => e.path === $route.fullPath)?.text || advanceExampleRoutes.find((e) => e.path === $route.fullPath)?.text;
  });
</script>

<template>
  <h3>
    点击这里查看👉
    <el-link href="https://github.com/pandavips/Vue3-Command-Dialog/tree/main/src/pages/example"> 示例代码 </el-link>
  </h3>

  <el-divider />
  <el-button v-for="e in baseExampleRoutes" type="primary" @click="$router.push(e.path)">{{ e.text }}</el-button>
  <el-divider />
  <el-button v-for="e in advanceExampleRoutes" type="primary" @click="$router.push(e.path)">{{ e.text }}</el-button>
  <el-divider />
  <h3>当前示例: {{ activeExampleTitle }}</h3>

  <RouterView />
</template>

<style scoped></style>
