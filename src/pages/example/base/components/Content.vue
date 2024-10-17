<script lang="tsx" setup>
import { getConsumer } from "../../../../components";

import { getCurrentInstance, inject, provide, ref } from "vue";
import { useRoute } from "vue-router";
import Base from "../index.vue";

const nested = useRoute().query.nested === "true";

provide("content", "来自Content的🩷~");
const depth = inject("depth", 0);
provide("depth", depth + 1);

const consumer = getConsumer();

(window as any).dialogStack = consumer.stack;

const ins = getCurrentInstance();
const provides = ref();
Promise.resolve().then(() => {
  provides.value = {
    ...ins?.appContext.provides,
    ...(ins as any).provides,
  };
});
</script>

<template>
  <el-divider />
  <h3>接收到的注入数据</h3>
  <div>{{ provides }}</div>

  <el-divider />
  <el-button @click="consumer.destroy()">弹窗内部控制关闭</el-button>

  <template v-if="nested">
    <el-divider />
    <h4>弹窗深度:{{ depth }}</h4>
    <Base />
  </template>
</template>

<style lang="scss" scoped></style>
