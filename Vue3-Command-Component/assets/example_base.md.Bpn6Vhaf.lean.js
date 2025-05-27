import{d as f,h as T,c as p,o as m,e as Z,n as B,k as o,r as V,N as F,G as t,w as l,a as r,V as w,L as G,ag as R,F as W,j as d,t as S,p as $,C as z,ae as x,am as D,an as y}from"./chunks/framework.Dy8d1JIq.js";import{G as Q,H as M,_ as L,O as I,$ as U,aC as E,at as h,aD as N,aG as O,aH as X,aI as q,aE as k,aF as _}from"./chunks/index.Bru4QDMm.js";const H=Q({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},contentPosition:{type:String,values:["left","center","right"],default:"center"},borderStyle:{type:M(String),default:"solid"}}),J=f({name:"ElDivider"}),Y=f({...J,props:H,setup(c){const a=c,u=I("divider"),e=T(()=>u.cssVar({"border-style":a.borderStyle}));return(s,i)=>(m(),p("div",{class:B([o(u).b(),o(u).m(s.direction)]),style:F(o(e)),role:"separator"},[s.$slots.default&&s.direction!=="vertical"?(m(),p("div",{key:0,class:B([o(u).e("text"),o(u).is(s.contentPosition)])},[V(s.$slots,"default")],2)):Z("v-if",!0)],6))}});var K=L(Y,[["__file","divider.vue"]]);const A=U(K),ee=`<template>
  <div>
    <div class="flex justify-center items-center">
      <el-button @click="openDialog">打开el-drawer</el-button>
      <el-button @click="openVantPopup">打开vant-popup</el-button>
      <el-button @click="openVantPopupOnBottom">打开vant-popup(从底部弹出)</el-button>
    </div>
    <el-divider />
    <p class="text-center">欢迎PR,或者联系我以提供更多组件的适配</p>
  </div>
</template>

<script setup name="base-example" lang="tsx">
import { useElementPlusDrawer, useVantUiPopup, useVantUiPopupOnBottom } from "vue3-command-component";
import DialogContent from "./dialog-content.vue";

const CommandDrawer = useElementPlusDrawer();
const openDialog = () => {
  CommandDrawer(<DialogContent />, {
    title: "hello world",
    attrs: {
      size: "50vw",
    },
  });
};

const CommandVantPopup = useVantUiPopup();
const openVantPopup = () => {
  CommandVantPopup(<DialogContent />);
};

const CommandVantPopupOnBottom = useVantUiPopupOnBottom();
const openVantPopupOnBottom = () => {
  CommandVantPopupOnBottom(<DialogContent />);
};
<\/script>

<style lang="scss" scoped></style>
`,te={class:"flex justify-center items-center"},P=f({__name:"nested",setup(c){const a=E(),u=()=>{a(t(g,{nested:!0},null),{title:"嵌套嵌套,还是嵌套"})};return(e,s)=>{const i=h;return m(),p("div",te,[t(i,{onClick:u},{default:l(()=>s[0]||(s[0]=[r("打开弹窗")])),_:1})])}}}),ne={class:"flex gap-20px flex-wrap"},g=f({__name:"dialog-content",props:{nested:{type:Boolean,default:!1}},emits:["say"],setup(c){w("nested",c.nested),w("content","来自Content的🩷~");const u=G("depth",0);w("depth",u+1);const e=N(!1);console.log("来自vue 实例的全局属性",R().appContext.config.globalProperties.$panda);const s=()=>{var i,n;(n=(i=e.componentRef)==null?void 0:i.value)==null||n.resetPosition()};return(i,n)=>{const v=h,b=A;return m(),p(W,null,[d("div",ne,[t(v,{onClick:n[0]||(n[0]=C=>o(e).destroy())},{default:l(()=>n[6]||(n[6]=[r("destroy")])),_:1}),t(v,{onClick:n[1]||(n[1]=C=>o(e).destroyWithReject())},{default:l(()=>n[7]||(n[7]=[r("destroyWithReject")])),_:1}),t(v,{onClick:n[2]||(n[2]=C=>o(e).destroyWithResolve())},{default:l(()=>n[8]||(n[8]=[r("destroyWithResolve")])),_:1}),t(v,{onClick:n[3]||(n[3]=C=>o(e).hide())},{default:l(()=>n[9]||(n[9]=[r("hide")])),_:1}),t(v,{onClick:n[4]||(n[4]=C=>o(e).show())},{default:l(()=>n[10]||(n[10]=[r("show(😯已经show了)")])),_:1}),t(v,{onClick:s},{default:l(()=>n[11]||(n[11]=[r("弹窗位置复原(用于示例原生组件库暴露属性)")])),_:1}),t(v,{onClick:n[5]||(n[5]=C=>i.$emit("say","panda"))},{default:l(()=>n[12]||(n[12]=[r("emit一个事件,value:'panda'")])),_:1})]),t(b),i.nested?(m(),p(W,{key:0},[t(b,null,{default:l(()=>n[13]||(n[13]=[r("来一场无止境的嵌套吧")])),_:1}),n[14]||(n[14]=d("p",null,"当弹窗嵌套过多页面开始出现闪烁,并不是这个库的问题,element-plus官网也有这个问题😄",-1)),d("p",null,"弹窗深度: "+S(o(u)),1),t(P)],64)):Z("",!0)],64)}}}),oe={class:"flex justify-center items-center"},le=f({__name:"other-ui",setup(c){const a=O(),u=()=>{a(t(g,null,null),{title:"hello world",attrs:{size:"50vw"}})},e=X(),s=()=>{e(t(g,null,null))},i=q(),n=()=>{i(t(g,null,null))};return(v,b)=>{const C=h,j=A;return m(),p("div",null,[d("div",oe,[t(C,{onClick:u},{default:l(()=>b[0]||(b[0]=[r("打开el-drawer")])),_:1}),t(C,{onClick:s},{default:l(()=>b[1]||(b[1]=[r("打开vant-popup")])),_:1}),t(C,{onClick:n},{default:l(()=>b[2]||(b[2]=[r("打开vant-popup(从底部弹出)")])),_:1})]),t(j),b[3]||(b[3]=d("p",{class:"text-center"},"欢迎PR,或者联系我以提供更多组件的适配",-1))])}}}),se=`<template>
  <div class="flex justify-center items-center">
    <el-button @click="openDialog">打开弹窗</el-button>
  </div>
</template>

<script setup name="base-example" lang="tsx">
import { useElementPlusDialog } from "vue3-command-component";
import DialogContent from "./dialog-content.vue";

const CommandDialog = useElementPlusDialog();
const openDialog = () => {
  CommandDialog(
    <DialogContent
      onSay={(val) => {
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
`,ae={class:"flex justify-center items-center"},ie=f({__name:"communication",setup(c){const a=E(),u=()=>{a(t(g,{onSay:e=>{console.log(e)}},null),{title:"hello world"})};return(e,s)=>{const i=h;return m(),p("div",ae,[t(i,{onClick:u},{default:l(()=>s[0]||(s[0]=[r("打开弹窗")])),_:1})])}}}),re=`<template>
  <div class="flex justify-center items-center">
    <el-button @click="openDialog">打开弹窗</el-button>
  </div>
</template>

<script setup name="base-example" lang="tsx">
import { useElementPlusDialog } from "vue3-command-component";
import DialogContent from "./dialog-content.vue";

const CommandDialog = useElementPlusDialog();
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
`,ue={class:"flex justify-center items-center"},de=f({__name:"native-slots",setup(c){const a=E(),u=()=>{const e=a(t(g,null,null),{title:"",slots:{header:()=>t("div",{class:"text-red text-30px"},[r("自定义头部")]),footer:()=>t("div",{class:"flex justify-center items-center gap-20px"},[t(h,{type:"primary",onClick:()=>e.destroyWithResolve("ok")},{default:()=>[r("确定")]}),t(h,{type:"default",onClick:()=>e.destroyWithReject("cancel")},{default:()=>[r("取消")]})])}})};return(e,s)=>{const i=h;return m(),p("div",ue,[t(i,{onClick:u},{default:l(()=>s[0]||(s[0]=[r("打开弹窗")])),_:1})])}}}),pe=`<template>
  <div class="flex justify-center items-center">
    <el-button @click="openDialog">打开弹窗</el-button>
  </div>
</template>

<script setup name="base-example" lang="tsx">
import { useElementPlusDialog } from "vue3-command-component";
import DialogContent from "./dialog-content.vue";

const CommandDialog = useElementPlusDialog();
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
`,me={class:"flex justify-center items-center"},ce=f({__name:"native-attributes",setup(c){const a=E(),u=()=>{a(t(g,null,null),{title:"组件原生属性(尝试拖拽我试试)",attrs:{modal:!0,modalClass:"custom-modal",appendToBody:!0,lockScroll:!0,openDelay:0,closeDelay:0,closeOnClickModal:!0,closeOnPressEscape:!0,showClose:!0,beforeClose:e=>{console.log("👹我将阻止你的关闭👹")},draggable:!0,alignCenter:!0}})};return(e,s)=>{const i=h;return m(),p("div",me,[t(i,{onClick:u},{default:l(()=>s[0]||(s[0]=[r("打开弹窗")])),_:1})])}}}),ve=`<template>
  <div class="flex justify-center items-center">
    <el-button @click="openDialog">打开弹窗</el-button>
  </div>
</template>

<script setup name="base-example" lang="tsx">
import { useElementPlusDialog } from "vue3-command-component";
import DialogContent from "./dialog-content.vue";

const CommandDialog = useElementPlusDialog();
const openDialog = () => {
  CommandDialog(<DialogContent nested={true} />, {
    title: "嵌套嵌套,还是嵌套",
  });
};
<\/script>

<style lang="scss" scoped></style>
`,be=`<template>
  <div class="flex justify-center items-center">
    <el-button @click="consumer.show()">显示弹窗</el-button>
    <el-button @click="consumer.hide()">隐藏弹窗</el-button>

    <el-button @click="newDialog()">重新创建一个弹窗🌟</el-button>
  </div>
</template>

<script setup name="base-example" lang="tsx">
import { useElementPlusDialog, type IConsumer } from "vue3-command-component";
import DialogContent from "./dialog-content.vue";

const CommandDialog = useElementPlusDialog();
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
`,he={class:"flex justify-center items-center"},ge=f({__name:"showhide",setup(c){const a=E();let u;const e=()=>{u=a(t(g,null,null),{title:"hello world",attrs:{"close-on-click-modal":!1}}),u.hide()};return e(),(s,i)=>{const n=h;return m(),p("div",he,[t(n,{onClick:i[0]||(i[0]=v=>o(u).show())},{default:l(()=>i[3]||(i[3]=[r("显示弹窗")])),_:1}),t(n,{onClick:i[1]||(i[1]=v=>o(u).hide())},{default:l(()=>i[4]||(i[4]=[r("隐藏弹窗")])),_:1}),t(n,{onClick:i[2]||(i[2]=v=>e())},{default:l(()=>i[5]||(i[5]=[r("重新创建一个弹窗🌟")])),_:1})])}}}),fe=`<template>
  <div class="flex justify-center items-center">
    <el-button @click="openDialog">打开弹窗</el-button>
  </div>
</template>

<script setup name="base-example" lang="tsx">
import { useElementPlusDialog } from "vue3-command-component";
import DialogContent from "./dialog-content.vue";

const CommandDialog = useElementPlusDialog();
const openDialog = () => {
  CommandDialog(<DialogContent />, {
    title: "hello world",
  });
};
<\/script>

<style lang="scss" scoped></style>
`,Ce={class:"flex justify-center items-center"},De=f({__name:"base",setup(c){const a=E(),u=()=>{a(t(g,null,null),{title:"hello world"})};return(e,s)=>{const i=h;return m(),p("div",Ce,[t(i,{onClick:u},{default:l(()=>s[0]||(s[0]=[r("打开弹窗")])),_:1})])}}}),ye=`<script lang="tsx" setup>
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
`,we=JSON.parse('{"title":"常规用法","description":"","frontmatter":{},"headers":[],"relativePath":"example/base.md","filePath":"example/base.md"}'),ke={name:"example/base.md"},xe=Object.assign(ke,{setup(c){const a=$(!0);return(u,e)=>{const s=z("ClientOnly");return m(),p("div",null,[e[8]||(e[8]=x("",8)),D(t(o(k),null,null,512),[[y,a.value]]),t(s,null,{default:l(()=>[t(o(_),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{a.value=!1}),vueCode:o(ye)},{vue:l(()=>[t(g)]),_:1},8,["vueCode"])]),_:1}),e[9]||(e[9]=x("",4)),D(t(o(k),null,null,512),[[y,a.value]]),t(s,null,{default:l(()=>[t(o(_),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[1]||(e[1]=()=>{a.value=!1}),vueCode:o(fe)},{vue:l(()=>[t(De)]),_:1},8,["vueCode"])]),_:1}),e[10]||(e[10]=d("h2",{id:"显示和隐藏",tabindex:"-1"},[r("显示和隐藏 "),d("a",{class:"header-anchor",href:"#显示和隐藏","aria-label":'Permalink to "显示和隐藏"'},"​")],-1)),e[11]||(e[11]=d("p",null,[r("隐藏"),d("code",null,"hide"),r("只会隐藏掉组件,不会进行真正的销毁.")],-1)),D(t(o(k),null,null,512),[[y,a.value]]),t(s,null,{default:l(()=>[t(o(_),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[2]||(e[2]=()=>{a.value=!1}),vueCode:o(be)},{vue:l(()=>[t(ge)]),_:1},8,["vueCode"])]),_:1}),e[12]||(e[12]=d("h2",{id:"嵌套",tabindex:"-1"},[r("嵌套 "),d("a",{class:"header-anchor",href:"#嵌套","aria-label":'Permalink to "嵌套"'},"​")],-1)),e[13]||(e[13]=d("p",null,"可以开始你的无限套娃之旅了~",-1)),D(t(o(k),null,null,512),[[y,a.value]]),t(s,null,{default:l(()=>[t(o(_),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[3]||(e[3]=()=>{a.value=!1}),vueCode:o(ve)},{vue:l(()=>[t(P)]),_:1},8,["vueCode"])]),_:1}),e[14]||(e[14]=d("h2",{id:"原生组件特性",tabindex:"-1"},[r("原生组件特性 "),d("a",{class:"header-anchor",href:"#原生组件特性","aria-label":'Permalink to "原生组件特性"'},"​")],-1)),e[15]||(e[15]=d("p",null,"支持原生组件所有的属性和事件,方法.",-1)),D(t(o(k),null,null,512),[[y,a.value]]),t(s,null,{default:l(()=>[t(o(_),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[4]||(e[4]=()=>{a.value=!1}),vueCode:o(pe)},{vue:l(()=>[t(ce)]),_:1},8,["vueCode"])]),_:1}),e[16]||(e[16]=d("h2",{id:"原生组件插槽",tabindex:"-1"},[r("原生组件插槽 "),d("a",{class:"header-anchor",href:"#原生组件插槽","aria-label":'Permalink to "原生组件插槽"'},"​")],-1)),e[17]||(e[17]=d("p",null,"支持原生组件所有的插槽,包括具名插槽和作用域插槽.",-1)),D(t(o(k),null,null,512),[[y,a.value]]),t(s,null,{default:l(()=>[t(o(_),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[5]||(e[5]=()=>{a.value=!1}),vueCode:o(re)},{vue:l(()=>[t(de)]),_:1},8,["vueCode"])]),_:1}),e[18]||(e[18]=d("h2",{id:"通信",tabindex:"-1"},[r("通信 "),d("a",{class:"header-anchor",href:"#通信","aria-label":'Permalink to "通信"'},"​")],-1)),e[19]||(e[19]=d("p",null,"你可以像往常一样,使用传统的emit来进行单向数据流的方式来进行通信. 然而下一章中,你会认识到一种更优雅的通信方式,那就是promise特性的弹窗.",-1)),e[20]||(e[20]=d("p",null,"打开弹窗emit一个事件吧,它虽然不如promise方式优雅,但是它可以不断的向外部发送消息,而promise仅限一次.",-1)),D(t(o(k),null,null,512),[[y,a.value]]),t(s,null,{default:l(()=>[t(o(_),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[6]||(e[6]=()=>{a.value=!1}),vueCode:o(se)},{vue:l(()=>[t(ie)]),_:1},8,["vueCode"])]),_:1}),e[21]||(e[21]=x("",6)),D(t(o(k),null,null,512),[[y,a.value]]),t(s,null,{default:l(()=>[t(o(_),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[7]||(e[7]=()=>{a.value=!1}),vueCode:o(ee)},{vue:l(()=>[t(le)]),_:1},8,["vueCode"])]),_:1})])}}});export{we as __pageData,xe as default};
