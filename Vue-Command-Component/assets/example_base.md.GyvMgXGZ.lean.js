import{d as F,c as u,o as y,G as i,w as t,a as l,k as a,p as A,C as f,aH as v,af as o,j as e,ag as r}from"./chunks/framework.CvJfJ0fb.js";import{aH as g,aR as D,aS as E,aV as d,aW as c,aX as B}from"./chunks/index.Gvba-8xK.js";const _=`<template>
  <div class="flex justify-center items-center">
    <el-button @click="openDialog">打开弹窗</el-button>
  </div>
</template>

<script setup lang="tsx">
import { useDialog } from "@vue-cmd/element-plus";
import DialogContent from "./dialog-content.vue";

const CommandDialog = useDialog();
const openDialog = () => {
  CommandDialog(
    <DialogContent
      // @ts-ignore
      onSay={(val: string) => {
        console.log(val);
      }}
    />,
    {
      title: "hello world",
    }
  );
};
<\/script>

<style lang="scss" scoped></style>
`,W={class:"flex justify-center items-center"},x=F({__name:"communication",setup(m){const n=D(),k=()=>{n(i(E,{onSay:s=>{console.log(s)}},null),{title:"hello world"})};return(s,h)=>{const p=g;return y(),u("div",W,[i(p,{onClick:k},{default:t(()=>h[0]||(h[0]=[l("打开弹窗")])),_:1})])}}}),w=`<template>
  <div class="flex justify-center items-center">
    <el-button @click="openDialog">打开弹窗</el-button>
  </div>
</template>

<script setup lang="tsx">
import { useDialog } from "@vue-cmd/element-plus";
import DialogContent from "./dialog-content.vue";

const CommandDialog = useDialog();
const openDialog = () => {
  const consumer = CommandDialog(<DialogContent />, {
    title: "",
    slots: {
      header: () => <div class="text-red text-30px">自定义头部</div>,
      footer: () => (
        <div class="flex justify-center items-center gap-20px">
          <el-button type="primary" onClick={() => consumer.destroyWithResolve("ok")}>
            确定
          </el-button>
          <el-button type="default" onClick={() => consumer.destroyWithReject("cancel")}>
            取消
          </el-button>
        </div>
      ),
    },
  });
};
<\/script>

<style lang="scss" scoped></style>
`,T={class:"flex justify-center items-center"},Z=F({__name:"native-slots",setup(m){const n=D(),k=()=>{const s=n(i(E,null,null),{title:"",slots:{header:()=>i("div",{class:"text-red text-30px"},[l("自定义头部")]),footer:()=>i("div",{class:"flex justify-center items-center gap-20px"},[i(g,{type:"primary",onClick:()=>s.destroyWithResolve("ok")},{default:()=>[l("确定")]}),i(g,{type:"default",onClick:()=>s.destroyWithReject("cancel")},{default:()=>[l("取消")]})])}})};return(s,h)=>{const p=g;return y(),u("div",T,[i(p,{onClick:k},{default:t(()=>h[0]||(h[0]=[l("打开弹窗")])),_:1})])}}}),V=`<template>
  <div class="flex justify-center items-center">
    <el-button @click="openDialog">打开弹窗</el-button>
  </div>
</template>

<script setup lang="tsx">
import { useDialog } from "@vue-cmd/element-plus";
import DialogContent from "./dialog-content.vue";

const CommandDialog = useDialog();
const openDialog = () => {
  CommandDialog(<DialogContent />, {
    title: "组件原生属性(尝试拖拽我试试)",
    attrs: {
      modal: true,
      modalClass: "custom-modal",
      appendToBody: true,
      lockScroll: true,
      openDelay: 0,
      closeDelay: 0,
      closeOnClickModal: true,
      closeOnPressEscape: true,
      showClose: true,
      beforeClose: (_done: () => void) => {
        console.log("👹我将阻止你的关闭👹");
        // done();
      },
      draggable: true,
      alignCenter: true,
    },
  });
};
<\/script>

<style lang="scss" scoped></style>
`,j={class:"flex justify-center items-center"},R=F({__name:"native-attributes",setup(m){const n=D(),k=()=>{n(i(E,null,null),{title:"组件原生属性(尝试拖拽我试试)",attrs:{modal:!0,modalClass:"custom-modal",appendToBody:!0,lockScroll:!0,openDelay:0,closeDelay:0,closeOnClickModal:!0,closeOnPressEscape:!0,showClose:!0,beforeClose:s=>{console.log("👹我将阻止你的关闭👹")},draggable:!0,alignCenter:!0}})};return(s,h)=>{const p=g;return y(),u("div",j,[i(p,{onClick:k},{default:t(()=>h[0]||(h[0]=[l("打开弹窗")])),_:1})])}}}),Q=`<template>
  <div class="flex justify-center items-center">
    <el-button @click="openDialog">打开弹窗</el-button>
  </div>
</template>

<script setup lang="tsx">
import { useDialog } from "@vue-cmd/element-plus";
import DialogContent from "./dialog-content.vue";

const CommandDialog = useDialog();
const openDialog = () => {
  CommandDialog(<DialogContent nested={true} />, {
    title: "嵌套嵌套,还是嵌套",
  });
};
<\/script>

<style lang="scss" scoped></style>
`,P=`<template>
  <div class="flex justify-center items-center">
    <el-button @click="consumer.show()">显示弹窗</el-button>
    <el-button @click="consumer.hide()">隐藏弹窗</el-button>

    <el-button @click="newDialog()">重新创建一个弹窗🌟</el-button>
  </div>
</template>

<script setup lang="tsx">
import { useDialog } from "@vue-cmd/element-plus";
import type { IConsumer } from "@vue-cmd/core";
import DialogContent from "./dialog-content.vue";

const CommandDialog = useDialog();
let consumer: IConsumer;
const newDialog = () => {
  consumer = CommandDialog(<DialogContent />, {
    title: "hello world",
    attrs: {
      "close-on-click-modal": false,
    },
  });
  consumer.hide();
};
newDialog();
<\/script>

<style lang="scss" scoped></style>
`,Y={class:"flex justify-center items-center"},G=F({__name:"showhide",setup(m){const n=D();let k;const s=()=>{k=n(i(E,null,null),{title:"hello world",attrs:{"close-on-click-modal":!1}}),k.hide()};return s(),(h,p)=>{const C=g;return y(),u("div",Y,[i(C,{onClick:p[0]||(p[0]=b=>a(k).show())},{default:t(()=>p[3]||(p[3]=[l("显示弹窗")])),_:1}),i(C,{onClick:p[1]||(p[1]=b=>a(k).hide())},{default:t(()=>p[4]||(p[4]=[l("隐藏弹窗")])),_:1}),i(C,{onClick:p[2]||(p[2]=b=>s())},{default:t(()=>p[5]||(p[5]=[l("重新创建一个弹窗🌟")])),_:1})])}}}),I=`<template>
  <div class="flex justify-center items-center">
    <el-button @click="openDialog">打开弹窗</el-button>
  </div>
</template>

<script setup name="base-example" lang="tsx">
import { useDialog } from "@vue-cmd/element-plus";
import DialogContent from "./dialog-content.vue";

const CommandDialog = useDialog();
const openDialog = () => {
  CommandDialog(<DialogContent />, {
    title: "hello world",
    width: "90%",
  });
};
<\/script>

<style lang="scss" scoped></style>
`,S={class:"flex justify-center items-center"},L=F({__name:"base",setup(m){const n=D(),k=()=>{n(i(E,null,null),{title:"hello world",width:"90%"})};return(s,h)=>{const p=g;return y(),u("div",S,[i(p,{onClick:k},{default:t(()=>h[0]||(h[0]=[l("打开弹窗")])),_:1})])}}}),X=`<script lang="tsx" setup>
import { useConsumer } from "@vue-cmd/core";
import { getCurrentInstance, inject, provide, } from "vue";
import NestedCom from "./nested.vue";

defineEmits(["say"]);

const props = withDefaults(defineProps<{ nested?: boolean,count?:number }>(), {
  nested: false,
  count:0
});
provide("nested", props.nested);

provide("content", "来自Content的🩷~");
const depth = inject("depth", 0);
provide("depth", depth + 1);

// false 可以忽略警告,当你的组件不需要总是在命令式组件内使用时可以使用这个参数
const consumer = useConsumer(false);
// const ins = getCurrentInstance();
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

const model = defineModel<string>();
<\/script>

<template>
  <div class="flex gap-20px flex-wrap">
    <el-button @click="consumer.destroy()">destroy</el-button>
    <el-button @click="consumer.destroyWithReject()">destroyWithReject</el-button>
    <el-button @click="consumer.destroyWithResolve()">destroyWithResolve</el-button>
    <el-button @click="consumer.hide()">hide</el-button>
    <el-button @click="consumer.show()">show(😯已经show了)</el-button>
    <el-button @click="resetOption">弹窗位置复原(用于示例原生组件库暴露属性)</el-button>
    <el-button @click="$emit('say', 'panda')">emit一个事件,value:'panda'</el-button>
  </div>
  <el-divider />
  <template v-if="nested">
    <el-divider>来一场无止境的嵌套吧</el-divider>
    <p>当弹窗嵌套过多页面开始出现闪烁,并不是这个库的问题,element-plus官网也有这个问题😄</p>
    <p>弹窗深度: {{ depth }}</p>
    <NestedCom />
  </template>
  <el-divider>关于组件响应式 {{ count }}</el-divider>
  <div>
    <el-input v-model="model"></el-input>
  </div>
</template>

<style lang="scss" scoped></style>
`,U=JSON.parse('{"title":"常规用法","description":"","frontmatter":{},"headers":[],"relativePath":"example/base.md","filePath":"example/base.md"}'),q={name:"example/base.md"},$=Object.assign(q,{setup(m){const n=A(!0);return(k,s)=>{const h=f("ClientOnly");return y(),u("div",null,[s[7]||(s[7]=v("",7)),o(i(a(d),null,null,512),[[r,n.value]]),i(h,null,{default:t(()=>[i(a(c),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[0]||(s[0]=()=>{n.value=!1}),vueCode:a(X)},{vue:t(()=>[i(E)]),_:1},8,["vueCode"])]),_:1}),s[8]||(s[8]=v("",14)),o(i(a(d),null,null,512),[[r,n.value]]),i(h,null,{default:t(()=>[i(a(c),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[1]||(s[1]=()=>{n.value=!1}),vueCode:a(I)},{vue:t(()=>[i(L)]),_:1},8,["vueCode"])]),_:1}),s[9]||(s[9]=e("h2",{id:"显示和隐藏",tabindex:"-1"},[l("显示和隐藏 "),e("a",{class:"header-anchor",href:"#显示和隐藏","aria-label":'Permalink to "显示和隐藏"'},"​")],-1)),s[10]||(s[10]=e("p",null,[l("隐藏"),e("code",null,"hide"),l("只会隐藏掉组件,不会进行真正的销毁.")],-1)),o(i(a(d),null,null,512),[[r,n.value]]),i(h,null,{default:t(()=>[i(a(c),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[2]||(s[2]=()=>{n.value=!1}),vueCode:a(P)},{vue:t(()=>[i(G)]),_:1},8,["vueCode"])]),_:1}),s[11]||(s[11]=e("h2",{id:"嵌套",tabindex:"-1"},[l("嵌套 "),e("a",{class:"header-anchor",href:"#嵌套","aria-label":'Permalink to "嵌套"'},"​")],-1)),s[12]||(s[12]=e("p",null,"可以开始你的无限套娃之旅了~",-1)),o(i(a(d),null,null,512),[[r,n.value]]),i(h,null,{default:t(()=>[i(a(c),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[3]||(s[3]=()=>{n.value=!1}),vueCode:a(Q)},{vue:t(()=>[i(B)]),_:1},8,["vueCode"])]),_:1}),s[13]||(s[13]=e("h2",{id:"原生组件特性",tabindex:"-1"},[l("原生组件特性 "),e("a",{class:"header-anchor",href:"#原生组件特性","aria-label":'Permalink to "原生组件特性"'},"​")],-1)),s[14]||(s[14]=e("p",null,[l("支持原生组件所有的属性和事件,方法.你可以将属性和事件放置到"),e("code",null,"attrs"),l("中,理论完美兼容支持原生组件的所有属性和事件.")],-1)),s[15]||(s[15]=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"响应式"),e("p",null,[l("但是目前这里有一个缺陷,就是"),e("code",null,"attrs"),l("中的属性即使是响应式数据,视图也无法响应式更新(实际上,命令函数后续的配置都不会响应式更新,但好在弹窗的配置一般比较固定,不会轻易变动),目前正在实验解决方案.")])],-1)),o(i(a(d),null,null,512),[[r,n.value]]),i(h,null,{default:t(()=>[i(a(c),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[4]||(s[4]=()=>{n.value=!1}),vueCode:a(V)},{vue:t(()=>[i(R)]),_:1},8,["vueCode"])]),_:1}),s[16]||(s[16]=e("h2",{id:"原生组件插槽",tabindex:"-1"},[l("原生组件插槽 "),e("a",{class:"header-anchor",href:"#原生组件插槽","aria-label":'Permalink to "原生组件插槽"'},"​")],-1)),s[17]||(s[17]=e("p",null,"支持原生组件所有的插槽,包括具名插槽和作用域插槽.",-1)),o(i(a(d),null,null,512),[[r,n.value]]),i(h,null,{default:t(()=>[i(a(c),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[5]||(s[5]=()=>{n.value=!1}),vueCode:a(w)},{vue:t(()=>[i(Z)]),_:1},8,["vueCode"])]),_:1}),s[18]||(s[18]=e("h2",{id:"通信",tabindex:"-1"},[l("通信 "),e("a",{class:"header-anchor",href:"#通信","aria-label":'Permalink to "通信"'},"​")],-1)),s[19]||(s[19]=e("p",null,"你可以像往常一样,使用传统的emit来进行单向数据流的方式来进行通信. 然而下一章中,你会认识到一种更优雅的通信方式,那就是promise特性的弹窗.",-1)),s[20]||(s[20]=e("p",null,"打开弹窗emit一个事件吧,它虽然不如promise方式优雅,但是它可以不断的向外部发送消息,而promise仅限一次.",-1)),o(i(a(d),null,null,512),[[r,n.value]]),i(h,null,{default:t(()=>[i(a(c),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[6]||(s[6]=()=>{n.value=!1}),vueCode:a(_)},{vue:t(()=>[i(x)]),_:1},8,["vueCode"])]),_:1}),s[21]||(s[21]=v("",4))])}}});export{U as __pageData,$ as default};
