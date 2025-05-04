import{d as k,c as v,o as D,j as r,G as t,w as l,a as i,k as o,p as w,C as W,ae as B,am as m,an as h}from"./chunks/framework.Dy8d1JIq.js";import{aG as Z,aH as A,aI as P,at as p,aC as y,aE as b,aF as g}from"./chunks/index.DeUEKb4O.js";import{E as j,_ as c,a as T}from"./chunks/dialog-content.vue_vue_type_script_setup_true_lang.BPYeugrp.js";const F=`<template>
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
`,V={class:"flex justify-center items-center"},G=k({__name:"other-ui",setup(f){const n=Z(),u=()=>{n(t(c,null,null),{title:"hello world",attrs:{size:"50vw"}})},e=A(),s=()=>{e(t(c,null,null))},a=P(),C=()=>{a(t(c,null,null))};return(_,d)=>{const E=p,x=j;return D(),v("div",null,[r("div",V,[t(E,{onClick:u},{default:l(()=>d[0]||(d[0]=[i("打开el-drawer")])),_:1}),t(E,{onClick:s},{default:l(()=>d[1]||(d[1]=[i("打开vant-popup")])),_:1}),t(E,{onClick:C},{default:l(()=>d[2]||(d[2]=[i("打开vant-popup(从底部弹出)")])),_:1})]),t(x),d[3]||(d[3]=r("p",{class:"text-center"},"欢迎PR,或者联系我以提供更多组件的适配",-1))])}}}),Q=`<template>
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
`,z={class:"flex justify-center items-center"},L=k({__name:"communication",setup(f){const n=y(),u=()=>{n(t(c,{onSay:e=>{console.log(e)}},null),{title:"hello world"})};return(e,s)=>{const a=p;return D(),v("div",z,[t(a,{onClick:u},{default:l(()=>s[0]||(s[0]=[i("打开弹窗")])),_:1})])}}}),M=`<template>
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
`,R={class:"flex justify-center items-center"},S=k({__name:"native-slots",setup(f){const n=y(),u=()=>{const e=n(t(c,null,null),{title:"",slots:{header:()=>t("div",{class:"text-red text-30px"},[i("自定义头部")]),footer:()=>t("div",{class:"flex justify-center items-center gap-20px"},[t(p,{type:"primary",onClick:()=>e.destroyWithResolve("ok")},{default:()=>[i("确定")]}),t(p,{type:"default",onClick:()=>e.destroyWithReject("cancel")},{default:()=>[i("取消")]})])}})};return(e,s)=>{const a=p;return D(),v("div",R,[t(a,{onClick:u},{default:l(()=>s[0]||(s[0]=[i("打开弹窗")])),_:1})])}}}),U=`<template>
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
`,I={class:"flex justify-center items-center"},O=k({__name:"native-attributes",setup(f){const n=y(),u=()=>{n(t(c,null,null),{title:"组件原生属性(尝试拖拽我试试)",attrs:{modal:!0,modalClass:"custom-modal",appendToBody:!0,lockScroll:!0,openDelay:0,closeDelay:0,closeOnClickModal:!0,closeOnPressEscape:!0,showClose:!0,beforeClose:e=>{console.log("👹我将阻止你的关闭👹")},draggable:!0,alignCenter:!0}})};return(e,s)=>{const a=p;return D(),v("div",I,[t(a,{onClick:u},{default:l(()=>s[0]||(s[0]=[i("打开弹窗")])),_:1})])}}}),X=`<template>
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
`,$=`<template>
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
`,N={class:"flex justify-center items-center"},q=k({__name:"showhide",setup(f){const n=y();let u;const e=()=>{u=n(t(c,null,null),{title:"hello world",attrs:{"close-on-click-modal":!1}}),u.hide()};return e(),(s,a)=>{const C=p;return D(),v("div",N,[t(C,{onClick:a[0]||(a[0]=_=>o(u).show())},{default:l(()=>a[3]||(a[3]=[i("显示弹窗")])),_:1}),t(C,{onClick:a[1]||(a[1]=_=>o(u).hide())},{default:l(()=>a[4]||(a[4]=[i("隐藏弹窗")])),_:1}),t(C,{onClick:a[2]||(a[2]=_=>e())},{default:l(()=>a[5]||(a[5]=[i("重新创建一个弹窗🌟")])),_:1})])}}}),J=`<template>
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
`,H={class:"flex justify-center items-center"},K=k({__name:"base",setup(f){const n=y(),u=()=>{n(t(c,null,null),{title:"hello world"})};return(e,s)=>{const a=p;return D(),v("div",H,[t(a,{onClick:u},{default:l(()=>s[0]||(s[0]=[i("打开弹窗")])),_:1})])}}}),le=JSON.parse('{"title":"常规用法","description":"","frontmatter":{},"headers":[],"relativePath":"example/base.md","filePath":"example/base.md"}'),Y={name:"example/base.md"},oe=Object.assign(Y,{setup(f){const n=w(!0);return(u,e)=>{const s=W("ClientOnly");return D(),v("div",null,[e[7]||(e[7]=B("",7)),m(t(o(b),null,null,512),[[h,n.value]]),t(s,null,{default:l(()=>[t(o(g),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{n.value=!1}),vueCode:o(J)},{vue:l(()=>[t(K)]),_:1},8,["vueCode"])]),_:1}),e[8]||(e[8]=r("h2",{id:"显示和隐藏",tabindex:"-1"},[i("显示和隐藏 "),r("a",{class:"header-anchor",href:"#显示和隐藏","aria-label":'Permalink to "显示和隐藏"'},"​")],-1)),e[9]||(e[9]=r("p",null,[i("隐藏"),r("code",null,"hide"),i("只会隐藏掉组件,不会进行真正的销毁.")],-1)),m(t(o(b),null,null,512),[[h,n.value]]),t(s,null,{default:l(()=>[t(o(g),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[1]||(e[1]=()=>{n.value=!1}),vueCode:o($)},{vue:l(()=>[t(q)]),_:1},8,["vueCode"])]),_:1}),e[10]||(e[10]=r("h2",{id:"嵌套",tabindex:"-1"},[i("嵌套 "),r("a",{class:"header-anchor",href:"#嵌套","aria-label":'Permalink to "嵌套"'},"​")],-1)),e[11]||(e[11]=r("p",null,"可以开始你的无限套娃之旅了~",-1)),m(t(o(b),null,null,512),[[h,n.value]]),t(s,null,{default:l(()=>[t(o(g),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[2]||(e[2]=()=>{n.value=!1}),vueCode:o(X)},{vue:l(()=>[t(T)]),_:1},8,["vueCode"])]),_:1}),e[12]||(e[12]=r("h2",{id:"原生组件特性",tabindex:"-1"},[i("原生组件特性 "),r("a",{class:"header-anchor",href:"#原生组件特性","aria-label":'Permalink to "原生组件特性"'},"​")],-1)),e[13]||(e[13]=r("p",null,"支持原生组件所有的属性和事件,方法.",-1)),m(t(o(b),null,null,512),[[h,n.value]]),t(s,null,{default:l(()=>[t(o(g),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[3]||(e[3]=()=>{n.value=!1}),vueCode:o(U)},{vue:l(()=>[t(O)]),_:1},8,["vueCode"])]),_:1}),e[14]||(e[14]=r("h2",{id:"原生组件插槽",tabindex:"-1"},[i("原生组件插槽 "),r("a",{class:"header-anchor",href:"#原生组件插槽","aria-label":'Permalink to "原生组件插槽"'},"​")],-1)),e[15]||(e[15]=r("p",null,"支持原生组件所有的属性和事件,方法.",-1)),m(t(o(b),null,null,512),[[h,n.value]]),t(s,null,{default:l(()=>[t(o(g),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[4]||(e[4]=()=>{n.value=!1}),vueCode:o(M)},{vue:l(()=>[t(S)]),_:1},8,["vueCode"])]),_:1}),e[16]||(e[16]=r("h2",{id:"通信",tabindex:"-1"},[i("通信 "),r("a",{class:"header-anchor",href:"#通信","aria-label":'Permalink to "通信"'},"​")],-1)),e[17]||(e[17]=r("p",null,"你可以像往常一样,使用传统的emit来进行单项数据流来进行通信. 然而下一章中,你讲认识到一种更高效的通信方式,那就是promise特性的弹窗.",-1)),e[18]||(e[18]=r("p",null,"打开弹窗emit一个事件吧,它虽然不如promise方式优雅,但是它可以不断的向外部发送消息,而promise仅限一次.",-1)),m(t(o(b),null,null,512),[[h,n.value]]),t(s,null,{default:l(()=>[t(o(g),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[5]||(e[5]=()=>{n.value=!1}),vueCode:o(Q)},{vue:l(()=>[t(L)]),_:1},8,["vueCode"])]),_:1}),e[19]||(e[19]=B("",6)),m(t(o(b),null,null,512),[[h,n.value]]),t(s,null,{default:l(()=>[t(o(g),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[6]||(e[6]=()=>{n.value=!1}),vueCode:o(F)},{vue:l(()=>[t(G)]),_:1},8,["vueCode"])]),_:1})])}}});export{le as __pageData,oe as default};
