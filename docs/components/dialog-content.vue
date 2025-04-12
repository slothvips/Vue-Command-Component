<script lang="tsx" setup>
import { getConsumer } from "vue3-command-dialog";
import { getCurrentInstance, inject, provide, ref } from "vue";
import BaseExample from "./base.vue";

withDefaults(defineProps<{ nested?: boolean }>(), {
  nested: false,
});

provide("content", "来自Content的🩷~");
const depth = inject("depth", 0);
provide("depth", depth + 1);
const consumer = getConsumer();
const ins = getCurrentInstance();
const provides = ref();
Promise.resolve().then(() => {
  provides.value = {
    ...ins?.appContext.provides,
    ...(ins as any).provides,
  };
});

// console.log("来自vue 实例的全局属性", (getCurrentInstance()! as any).appContext.config.globalProperties.$panda);

const resetOption = () => {
  consumer.componentRef?.value.resetPosition();
};

(window as any).dialogStack = consumer.stack;
</script>

<template>
  <el-divider />
  <h3>接收到的注入数据</h3>
  <div>{{ provides }}</div>
  <el-divider />
  <el-button @click="resetOption">弹窗位置复原</el-button>
  <el-button @click="consumer.destroy()">弹窗内部控制关闭</el-button>
  <template v-if="nested">
    <el-divider>嵌套</el-divider>
    <BaseExample />
  </template>
</template>

<style lang="scss" scoped></style>
