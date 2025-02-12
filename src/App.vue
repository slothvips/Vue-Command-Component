<script lang="tsx" setup>
import zhCn from "element-plus/es/locale/lang/zh-cn";
import en from "element-plus/es/locale/lang/en";
import { provide, ref, computed, watch } from "vue";
import Layout from "./Layout.vue";
import { useRoute, useRouter } from "vue-router";
import { destroyAllCommandComponentConsumer, activeCommandComponentConsumers } from "./components/Core";
import { useAfterRouteChangeCloseAllCommandComponent } from "./components/hooks";

provide("App", "来自App的🩷~");

const language = ref("zh-cn");
const locale = computed(() => (language.value === "zh-cn" ? zhCn : en));

useAfterRouteChangeCloseAllCommandComponent();

const router = useRouter();
(window as any).$router = router;
</script>

<template>
  <el-config-provider :locale="locale">
    <Layout />
  </el-config-provider>
</template>

<style scoped></style>
