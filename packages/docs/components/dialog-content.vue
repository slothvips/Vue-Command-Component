<script lang="tsx" setup>
import { useConsumer } from "vue-command-component";
import { getCurrentInstance, inject, onUnmounted, provide, ref, useAttrs } from "vue";
import NestedCom from "./nested.vue";

defineEmits(["say"]);

const props = withDefaults(defineProps<{ nested?: boolean }>(), {
  nested: false,
});
provide("nested", props.nested);

provide("content", "来自Content的🩷~");
const depth = inject("depth", 0);
provide("depth", depth + 1);

// false 可以忽略警告,当你的组件不需要总是在命令式组件内使用时可以使用这个参数
const consumer = useConsumer(false);
const ins = getCurrentInstance();
// const provides = ref();
// Promise.resolve().then(() => {
//   provides.value = {
//     ...ins?.appContext.provides,
//     ...(ins as any).provides,
//   };
// });

console.log("来自vue 实例的全局属性", (getCurrentInstance()! as any).appContext.config.globalProperties.$panda);

const resetOption = () => {
  consumer.componentRef?.value?.resetPosition();
};
</script>

<template>
  <h3>接收到的注入数据:</h3>
  <el-divider />
  <div class="flex gap-20px flex-wrap">
    <el-button @click="consumer.destroy()">destroy</el-button>
    <el-button @click="consumer.destroyWithReject()">destroyWithReject</el-button>
    <el-button @click="consumer.destroyWithResolve()">destroyWithResolve</el-button>
    <el-button @click="consumer.hide()">hide</el-button>
    <el-button @click="consumer.show()">show(😯已经show了)</el-button>
    <el-button @click="resetOption">弹窗位置复原(用于示例原生组件库暴露属性)</el-button>
    <el-button @click="$emit('say', 'panda')">emit一个事件,value:'panda'</el-button>
  </div>
  <el-divider></el-divider>
  <template v-if="nested">
    <el-divider>来一场无止境的嵌套吧</el-divider>
    <p>当弹窗嵌套过多页面开始出现闪烁,并不是这个库的问题,element-plus官网也有这个问题😄</p>
    <p>弹窗深度: {{ depth }}</p>
    <NestedCom />
  </template>
</template>

<style lang="scss" scoped></style>
