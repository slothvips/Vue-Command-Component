<script setup lang="ts">
import { ElConfigProvider } from "element-plus";
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import { NConfigProvider, darkTheme, lightTheme } from "naive-ui";
import { ConfigProvider } from "vant";
import { useData } from "vitepress";
import DefaultTheme from "vitepress/theme";
const { isDark } = useData();
</script>

<template>
  <ElConfigProvider :locale="zhCn">
    <NConfigProvider :theme="isDark ? darkTheme : lightTheme">
      <ConfigProvider :theme="isDark ? 'dark' : 'light'">
        <DefaultTheme.Layout />
      </ConfigProvider>
    </NConfigProvider>
  </ElConfigProvider>
</template>
