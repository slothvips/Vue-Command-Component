<script lang="tsx" setup>
import { useConsumer } from "@vue-cmd/core";
import {
  getCurrentInstance,
  inject,
  onMounted,
  onUnmounted,
  provide,
} from "vue";
import NestedCom from "../nested.vue";

defineEmits(["say"]);

const props = withDefaults(
  defineProps<{ nested?: boolean; count?: number }>(),
  {
    nested: false,
    count: 0,
  },
);
provide("nested", props.nested);

provide("content", "来自Content的🩷~");
const depth = inject("depth", 0);
provide("depth", depth + 1);

// false 可以忽略警告,当你的组件不需要总是在命令式组件内使用时可以使用这个参数
const consumer = useConsumer(false);

console.log(
  "来自vue 实例的全局属性",
  (getCurrentInstance()! as any).appContext.config.globalProperties.$panda,
);

const resetOption = () => {
  consumer.componentRef?.value?.resetPosition();
};

const model = defineModel<string>();

onMounted(() => {
  console.log("生命周期测试 onMounted");
});
onUnmounted(() => {
  console.log("生命周期测试 onUnmounted");
});

defineExpose({
  msg: "panda",
  sayHello: () => {
    alert("hello");
  },
});
</script>

<template>
  <div class="w-full p-20px">
    <div class="flex gap-20px flex-wrap">
      <el-button @click="consumer.destroy()">destroy</el-button>
      <el-button @click="consumer.destroyWithReject()"
        >destroyWithReject</el-button
      >
      <el-button @click="consumer.destroyWithResolve()"
        >destroyWithResolve</el-button
      >
      <el-button @click="consumer.hide()">hide</el-button>
      <el-button @click="consumer.show()">show(😯已经show了)</el-button>
      <el-button @click="resetOption"
        >弹窗位置复原(用于示例原生组件库暴露属性)</el-button
      >
      <el-button @click="$emit('say', 'panda')"
        >emit一个事件,value:'panda'</el-button
      >
    </div>
    <el-divider />
    <template v-if="nested">
      <el-divider>来一场无止境的嵌套吧</el-divider>
      <p>
        当弹窗嵌套过多页面开始出现闪烁,并不是这个库的问题,element-plus官网也有这个问题😄
      </p>
      <p>弹窗深度: {{ depth }}</p>
      <NestedCom />
    </template>
    <el-divider>prop响应式 {{ count }}</el-divider>
    <div>
      <el-input v-model="model"></el-input>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
