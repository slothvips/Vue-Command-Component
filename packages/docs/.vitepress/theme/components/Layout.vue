<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import { useData } from "vitepress";
import { ElConfigProvider } from "element-plus";
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'
import { NConfigProvider, darkTheme, lightTheme } from "naive-ui";
import { ConfigProvider } from "vant";
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
