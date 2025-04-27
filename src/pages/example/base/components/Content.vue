<script lang="tsx" setup>
import { getCurrentInstance, inject, onUnmounted, provide, ref } from "vue";
import { useRoute } from "vue-router";
import { getConsumer } from "../../../../components";
import Base from "../index.vue";

const nested = useRoute().query.nested === "true";

provide("content", "来自Content的🩷~");

const depth = inject("depth", 0);
provide("depth", depth + 1);

const consumer = getConsumer();
console.log("弹窗实例", consumer);

(window as any).dialogStack = consumer.stack;
onUnmounted(() => {
  (window as any).dialogStack = null;
  Reflect.deleteProperty(window, "dialogStack");
});

const ins = getCurrentInstance();

const layoutInfo = inject("Layout");
const contentInfo = inject("content");
const baseInfo = inject("base");

const provides = ref();
Promise.resolve().then(() => {
  provides.value = {
    ...(ins as any).provides,
    ...ins?.appContext.provides,
  };
});

console.log("来自vue 实例的全局属性", (getCurrentInstance()! as any).appContext.config.globalProperties.$panda);
</script>

<template>
  <el-divider />
  <h3>接收到的注入数据</h3>
  <div>{{ provides }}</div>

  <div>{{ layoutInfo }}</div>
  <div>{{ contentInfo }}</div>
  <div>{{ baseInfo }}</div>
  <el-divider />
  <el-button @click="consumer.destroy()">弹窗内部控制关闭</el-button>

  <template v-if="nested">
    <el-divider />
    <h4>弹窗深度:{{ depth }}</h4>
    <Base />
  </template>
</template>

<style lang="scss" scoped></style>
