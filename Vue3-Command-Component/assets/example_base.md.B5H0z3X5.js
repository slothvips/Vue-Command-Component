import{d as f,c as b,o as v,G as t,w as a,a as r,k as s,p as w,C as x,ae as Z,am as d,j as o,an as m}from"./chunks/framework.Dy8d1JIq.js";import{aC as g,at as C,aE as c,aF as p}from"./chunks/index.CLNZE_Wr.js";import{_ as h,a as k}from"./chunks/dialog-content.vue_vue_type_script_setup_true_lang.DrjTY4lX.js";const B=`<template>
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
`,W={class:"flex justify-center items-center"},j=f({__name:"communication",setup(D){const n=g(),u=()=>{n(t(h,{onSay:e=>{console.log(e)}},null),{title:"hello world"})};return(e,i)=>{const l=C;return v(),b("div",W,[t(l,{onClick:u},{default:a(()=>i[0]||(i[0]=[r("打开弹窗")])),_:1})])}}}),A=`<template>
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
`,T={class:"flex justify-center items-center"},G=f({__name:"native-attributes",setup(D){const n=g(),u=()=>{n(t(h,null,null),{title:"组件原生属性(尝试拖拽我试试)",attrs:{modal:!0,modalClass:"custom-modal",appendToBody:!0,lockScroll:!0,openDelay:0,closeDelay:0,closeOnClickModal:!0,closeOnPressEscape:!0,showClose:!0,beforeClose:e=>{console.log("👹我将阻止你的关闭👹")},draggable:!0,alignCenter:!0}})};return(e,i)=>{const l=C;return v(),b("div",T,[t(l,{onClick:u},{default:a(()=>i[0]||(i[0]=[r("打开弹窗")])),_:1})])}}}),P=`<template>
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
`,E=`<template>
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
`,Q={class:"flex justify-center items-center"},F=f({__name:"showhide",setup(D){const n=g();let u;const e=()=>{u=n(t(h,null,null),{title:"hello world",attrs:{"close-on-click-modal":!1}}),u.hide()};return e(),(i,l)=>{const y=C;return v(),b("div",Q,[t(y,{onClick:l[0]||(l[0]=_=>s(u).show())},{default:a(()=>l[3]||(l[3]=[r("显示弹窗")])),_:1}),t(y,{onClick:l[1]||(l[1]=_=>s(u).hide())},{default:a(()=>l[4]||(l[4]=[r("隐藏弹窗")])),_:1}),t(y,{onClick:l[2]||(l[2]=_=>e())},{default:a(()=>l[5]||(l[5]=[r("重新创建一个弹窗🌟")])),_:1})])}}}),M=`<template>
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
`,V={class:"flex justify-center items-center"},z=f({__name:"base",setup(D){const n=g(),u=()=>{n(t(h,null,null),{title:"hello world"})};return(e,i)=>{const l=C;return v(),b("div",V,[t(l,{onClick:u},{default:a(()=>i[0]||(i[0]=[r("打开弹窗")])),_:1})])}}}),X=JSON.parse('{"title":"常规用法","description":"","frontmatter":{},"headers":[],"relativePath":"example/base.md","filePath":"example/base.md"}'),S={name:"example/base.md"},$=Object.assign(S,{setup(D){const n=w(!0);return(u,e)=>{const i=x("ClientOnly");return v(),b("div",null,[e[5]||(e[5]=Z('<h1 id="常规用法" tabindex="-1">常规用法 <a class="header-anchor" href="#常规用法" aria-label="Permalink to &quot;常规用法&quot;">​</a></h1><p>这里会展示一些常规用法.</p><p>这里展示的所有<code>api</code>,在弹窗内部都可以使用<code>useConsumer</code>获取到同一个<code>consumer</code>来使用;弹窗内部和外部获取到的<code>consumer</code>是全等的,换句话说,他们的作用是完全相同的.</p><h2 id="创建和销毁" tabindex="-1">创建和销毁 <a class="header-anchor" href="#创建和销毁" aria-label="Permalink to &quot;创建和销毁&quot;">​</a></h2><p>弹窗的唤起和销毁</p><p>销毁主要使用<code>destroy</code>和<code>destroyWithResolve</code>、<code>destroyWithReject</code>来进行销毁操作。</p><p><code>destroyWithResolve</code>和<code>destroyWithReject</code>会将promise的状态推进到resolve和reject,而<code>destroy</code>只是销毁弹窗,不会推进promise的状态(你可能会担心一个永远不会被推进到终态的promise会不会内存泄漏,那么你可以参见这篇文章:<a href="https://juejin.cn/post/7419297143788470282?searchId=20250502235657363591F19D1773229FA7" target="_blank" rel="noreferrer">一个永远不会完成的 Promise 是否会造成存储泄漏</a>.</p>',7)),d(t(s(c),null,null,512),[[m,n.value]]),t(i,null,{default:a(()=>[t(s(p),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{n.value=!1}),vueCode:s(M)},{vue:a(()=>[t(z)]),_:1},8,["vueCode"])]),_:1}),e[6]||(e[6]=o("h2",{id:"显示和隐藏",tabindex:"-1"},[r("显示和隐藏 "),o("a",{class:"header-anchor",href:"#显示和隐藏","aria-label":'Permalink to "显示和隐藏"'},"​")],-1)),e[7]||(e[7]=o("p",null,[r("隐藏"),o("code",null,"hide"),r("只会隐藏掉组件,不会进行真正的销毁.")],-1)),d(t(s(c),null,null,512),[[m,n.value]]),t(i,null,{default:a(()=>[t(s(p),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[1]||(e[1]=()=>{n.value=!1}),vueCode:s(E)},{vue:a(()=>[t(F)]),_:1},8,["vueCode"])]),_:1}),e[8]||(e[8]=o("h2",{id:"嵌套",tabindex:"-1"},[r("嵌套 "),o("a",{class:"header-anchor",href:"#嵌套","aria-label":'Permalink to "嵌套"'},"​")],-1)),e[9]||(e[9]=o("p",null,"可以开始你的无限套娃之旅了~",-1)),d(t(s(c),null,null,512),[[m,n.value]]),t(i,null,{default:a(()=>[t(s(p),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[2]||(e[2]=()=>{n.value=!1}),vueCode:s(P)},{vue:a(()=>[t(k)]),_:1},8,["vueCode"])]),_:1}),e[10]||(e[10]=o("h2",{id:"原生组件特性",tabindex:"-1"},[r("原生组件特性 "),o("a",{class:"header-anchor",href:"#原生组件特性","aria-label":'Permalink to "原生组件特性"'},"​")],-1)),e[11]||(e[11]=o("p",null,"支持原生组件所有的属性和事件,方法.",-1)),d(t(s(c),null,null,512),[[m,n.value]]),t(i,null,{default:a(()=>[t(s(p),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[3]||(e[3]=()=>{n.value=!1}),vueCode:s(A)},{vue:a(()=>[t(G)]),_:1},8,["vueCode"])]),_:1}),e[12]||(e[12]=o("h2",{id:"通信",tabindex:"-1"},[r("通信 "),o("a",{class:"header-anchor",href:"#通信","aria-label":'Permalink to "通信"'},"​")],-1)),e[13]||(e[13]=o("p",null,"你可以像往常一样,使用传统的emit来进行单项数据流来进行通信. 然而下一章中,你讲认识到一种更高效的通信方式,那就是promise特性的弹窗.",-1)),e[14]||(e[14]=o("p",null,"打开弹窗emit一个事件吧,它虽然不如promise方式优雅,但是它可以不断的向外部发送消息,而promise仅限一次.",-1)),d(t(s(c),null,null,512),[[m,n.value]]),t(i,null,{default:a(()=>[t(s(p),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[4]||(e[4]=()=>{n.value=!1}),vueCode:s(B)},{vue:a(()=>[t(j)]),_:1},8,["vueCode"])]),_:1}),e[15]||(e[15]=o("h2",{id:"provide和inject",tabindex:"-1"},[r("provide和inject "),o("a",{class:"header-anchor",href:"#provide和inject","aria-label":'Permalink to "provide和inject"'},"​")],-1)),e[16]||(e[16]=o("p",null,"这一块和vue3的provide和inject是一样的,没有任何区别.",-1))])}}});export{X as __pageData,$ as default};
