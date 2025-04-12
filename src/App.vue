<script lang="tsx" setup>
import en from "element-plus/es/locale/lang/en";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import { computed, provide, ref } from "vue";
import { useRouter } from "vue-router";
import { useCloseAllOnRouteChange } from "./components/hooks";
import Layout from "./Layout.vue";

provide("App", "来自App的🩷~");

const language = ref("zh-cn");
const locale = computed(() => (language.value === "zh-cn" ? zhCn : en));

useCloseAllOnRouteChange();

const router = useRouter();
(window as any).$router = router;
</script>

<template>
  <el-config-provider :locale="locale">
    <Layout />
  </el-config-provider>
</template>

<style scoped></style>
