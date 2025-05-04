import{p as i,C as d,c as p,o as u,j as n,am as c,G as t,a as o,an as m,k as s,w as r}from"./chunks/framework.Dy8d1JIq.js";import{_ as v}from"./chunks/dialog-content.vue_vue_type_script_setup_true_lang.BPYeugrp.js";import{aE as b,aF as f}from"./chunks/index.DeUEKb4O.js";const h=`<script lang="tsx" setup>
import { useConsumer } from "vue3-command-component";
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
<\/script>

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
`,W=JSON.parse('{"title":"说明","description":"","frontmatter":{},"headers":[],"relativePath":"example/index.md","filePath":"example/index.md"}'),y={name:"example/index.md"},_=Object.assign(y,{setup(C){const l=i(!0);return(x,e)=>{const a=d("ClientOnly");return u(),p("div",null,[e[1]||(e[1]=n("h1",{id:"说明",tabindex:"-1"},[o("说明 "),n("a",{class:"header-anchor",href:"#说明","aria-label":'Permalink to "说明"'},"​")],-1)),e[2]||(e[2]=n("p",null,"因为弹窗对于命令式组件来说,是最能展现它能力的使用场景,所以我将使用弹窗来展示使用示例.",-1)),e[3]||(e[3]=n("p",null,"熟悉了弹窗的用法,触类旁通的也会理解其他组件使用方式.",-1)),e[4]||(e[4]=n("p",null,"那么,我们开始吧.",-1)),e[5]||(e[5]=n("p",null,[o("示例中会多次使用弹窗内容组件"),n("code",null,"dialog-content"),o(",下边是它的样子:")],-1)),c(t(s(b),null,null,512),[[m,l.value]]),t(a,null,{default:r(()=>[t(s(f),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{l.value=!1}),vueCode:s(h)},{vue:r(()=>[t(v)]),_:1},8,["vueCode"])]),_:1})])}}});export{W as __pageData,_ as default};
