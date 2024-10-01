<script lang="tsx" setup>
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import en from "element-plus/dist/locale/en.mjs";
import { provide, ref, computed } from "vue";
import Layout from "./Layout.vue";

provide("App", "来自App的🩷");

const language = ref("zh-cn");
const locale = computed(() => (language.value === "zh-cn" ? zhCn : en));
</script>

<template>
  <el-config-provider :locale="locale">
    <Layout />
  </el-config-provider>
</template>

<style scoped></style>
