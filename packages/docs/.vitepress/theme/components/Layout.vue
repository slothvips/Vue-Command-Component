<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import { useData } from "vitepress";
import { NConfigProvider, darkTheme, lightTheme } from "naive-ui";
import { ConfigProvider } from "vant";

const { isDark } = useData();
</script>

<template>
  <NConfigProvider :theme="isDark ? darkTheme : lightTheme">
    <ConfigProvider :theme="isDark ? 'dark' : 'light'">
      <DefaultTheme.Layout />
    </ConfigProvider>
  </NConfigProvider>
</template>
