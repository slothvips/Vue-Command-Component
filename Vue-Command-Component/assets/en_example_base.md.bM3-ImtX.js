import{j as C,C as m,E,k as i,I as a,B as l,G as b,u as n,r as w,W as _,aW as f,t as d,O as o,v as c}from"./chunks/framework.Dr0ZuDOg.js";import{b as x,u as D,O as g,E as u}from"./chunks/index.DB_ntYdK.js";import{_ as y,u as A,a as W}from"./chunks/DialogContent.vue_vue_type_script_setup_true_lang.CqhwfsyT.js";import{a as r}from"./chunks/theme.a7z_s1GA.js";import{T}from"./chunks/nested.CA8UmkTC.js";const Z=`<template>
  <div class="flex justify-center items-center">
    <el-button @click="openDrawer">Open drawer</el-button>
    <el-button @click="openCustomDrawer" type="primary">Custom drawer</el-button>
  </div>
</template>

<script setup lang="tsx">
import { useDrawer } from "@vue-cmd/element-plus";
import DialogContent from "./shared/DialogContent.vue";

const CommandDrawer = useDrawer();

// Basic usage
const openDrawer = () => {
  CommandDrawer(<DialogContent />, {
    title: "Drawer example",
    size: "50%",
    attrs: {
      direction: "rtl",
    },
  });
};

// Custom usage
const openCustomDrawer = () => {
  const consumer = CommandDrawer(<DialogContent />, {
    title: "Custom drawer",
    size: "50%",
    attrs: {
      direction: "ltr",
      "destroy-on-close": true,
      "with-header": true,
      "close-on-click-modal": false,
      "close-on-press-escape": false,
      "show-close": true,
    },
    slots: {
      footer: () => (
        <div class="flex justify-end p-4 gap-2">
          <el-button onClick={() => consumer.destroyWithReject("Cancel")}>
            Cancel
          </el-button>
          <el-button
            type="primary"
            onClick={() => consumer.destroyWithResolve("Confirm")}
          >
            Confirm
          </el-button>
        </div>
      ),
    },
  });
};
<\/script>

<style lang="scss" scoped></style>
`,j={class:"flex justify-center items-center"},V=C({__name:"el-drawer",setup(F){const e=x(),k=()=>{e(i(y,null,null),{title:"Drawer example",size:"50%",attrs:{direction:"rtl"}})},s=()=>{const t=e(i(y,null,null),{title:"Custom drawer",size:"50%",attrs:{direction:"ltr","destroy-on-close":!0,"with-header":!0,"close-on-click-modal":!1,"close-on-press-escape":!1,"show-close":!0},slots:{footer:()=>i("div",{class:"flex justify-end p-4 gap-2"},[i(r,{onClick:()=>t.destroyWithReject("Cancel")},{default:()=>[l("Cancel")]}),i(r,{type:"primary",onClick:()=>t.destroyWithResolve("Confirm")},{default:()=>[l("Confirm")]})])}})};return(t,p)=>{const h=r;return E(),m("div",j,[i(h,{onClick:k},{default:a(()=>p[0]||(p[0]=[l("Open drawer")])),_:1,__:[0]}),i(h,{onClick:s,type:"primary"},{default:a(()=>p[1]||(p[1]=[l("Custom drawer")])),_:1,__:[1]})])}}}),P=`<template>
  <div class="flex justify-center items-center">
    <el-button @click="openDialog">{{ text.openDialog }}</el-button>
  </div>
</template>

<script setup lang="tsx">
import { useDialog } from "@vue-cmd/element-plus";
import DialogContent from "./shared/DialogContent.vue";
import { useDemoLocale } from "./shared/locale";

const text = useDemoLocale();
const dialog = useDialog();
const openDialog = () => {
  dialog(
    <DialogContent
      // @ts-ignore
      onSay={(val: string) => {
        console.log(val);
      }}
    />,
    {
      title: "hello world",
    },
  );
};
<\/script>

<style lang="scss" scoped></style>
`,R={class:"flex justify-center items-center"},q=C({__name:"communication",setup(F){const e=A(),k=D(),s=()=>{k(i(y,{onSay:t=>{console.log(t)}},null),{title:"hello world"})};return(t,p)=>{const h=r;return E(),m("div",R,[i(h,{onClick:s},{default:a(()=>[l(b(n(e).openDialog),1)]),_:1})])}}}),I=`<template>
  <div class="flex justify-center items-center">
    <el-button @click="openDialog">Open dialog</el-button>
  </div>
</template>

<script setup name="base-example" lang="tsx">
import { useDialog } from "@vue-cmd/element-plus";
import DialogContent from "./shared/DialogContent.vue";
import { ref } from "vue";

const dialogContentRef = ref();

const sayHello = () => {
  console.log(0);
  dialogContentRef.value?.sayHello();
};

const dialog = useDialog();
const openDialog = () => {
  dialog(() => <DialogContent ref={dialogContentRef} />, {
    title: "hello world",
    width: "90%",
    slots: {
      footer: () => <el-button onClick={sayHello}>Hello It's me~</el-button>,
    },
  });
};
<\/script>

<style lang="scss" scoped></style>
`,L={class:"flex justify-center items-center"},Q=C({__name:"component-ref",setup(F){const e=w(),k=()=>{var p;console.log(0),(p=e.value)==null||p.sayHello()},s=D(),t=()=>{s(()=>i(y,{ref:e},null),{title:"hello world",width:"90%",slots:{footer:()=>i(r,{onClick:k},{default:()=>[l("Hello It's me~")]})}})};return(p,h)=>{const v=r;return E(),m("div",L,[i(v,{onClick:t},{default:a(()=>h[0]||(h[0]=[l("Open dialog")])),_:1,__:[0]})])}}}),S=`<template>
  <div class="flex justify-center items-center">
    <el-button @click="openDialog">Open dialog</el-button>
  </div>
</template>

<script setup lang="tsx">
import { useDialog } from "@vue-cmd/element-plus";
import DialogContent from "./shared/DialogContent.vue";

const dialog = useDialog();
const openDialog = () => {
  const consumer = dialog(<DialogContent />, {
    title: "",
    slots: {
      header: () => <div class="text-red text-30px">Custom header</div>,
      footer: () => (
        <div class="flex justify-center items-center gap-20px">
          <el-button
            type="primary"
            onClick={() => consumer.destroyWithResolve("ok")}
          >
            OK
          </el-button>
          <el-button
            type="default"
            onClick={() => consumer.destroyWithReject("cancel")}
          >
            Cancel
          </el-button>
        </div>
      ),
    },
  });
};
<\/script>

<style lang="scss" scoped></style>
`,Y={class:"flex justify-center items-center"},N=C({__name:"native-slots",setup(F){const e=D(),k=()=>{const s=e(i(y,null,null),{title:"",slots:{header:()=>i("div",{class:"text-red text-30px"},[l("Custom header")]),footer:()=>i("div",{class:"flex justify-center items-center gap-20px"},[i(r,{type:"primary",onClick:()=>s.destroyWithResolve("ok")},{default:()=>[l("OK")]}),i(r,{type:"default",onClick:()=>s.destroyWithReject("cancel")},{default:()=>[l("Cancel")]})])}})};return(s,t)=>{const p=r;return E(),m("div",Y,[i(p,{onClick:k},{default:a(()=>t[0]||(t[0]=[l("Open dialog")])),_:1,__:[0]})])}}}),G=`<template>
  <div class="flex justify-center items-center">
    <el-button @click="openDialog">Open dialog</el-button>
  </div>
</template>

<script setup lang="tsx">
import { useDialog } from "@vue-cmd/element-plus";
import DialogContent from "./shared/DialogContent.vue";

const dialog = useDialog();
const openDialog = () => {
  dialog(<DialogContent />, {
    title: "Native component props (try dragging me)",
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
        console.log("I will prevent closing");
        // done();
      },
      draggable: true,
      alignCenter: true,
    },
  });
};
<\/script>

<style lang="scss" scoped></style>
`,U={class:"flex justify-center items-center"},z=C({__name:"native-attributes",setup(F){const e=D(),k=()=>{e(i(y,null,null),{title:"Native component props (try dragging me)",attrs:{modal:!0,modalClass:"custom-modal",appendToBody:!0,lockScroll:!0,openDelay:0,closeDelay:0,closeOnClickModal:!0,closeOnPressEscape:!0,showClose:!0,beforeClose:s=>{console.log("I will prevent closing")},draggable:!0,alignCenter:!0}})};return(s,t)=>{const p=r;return E(),m("div",U,[i(p,{onClick:k},{default:a(()=>t[0]||(t[0]=[l("Open dialog")])),_:1,__:[0]})])}}}),M=`<template>
  <div class="flex justify-center items-center">
    <el-button @click="consumer.show()">{{ text.showDialog }}</el-button>
    <el-button @click="consumer.hide()">{{ text.hideDialog }}</el-button>

    <el-button @click="newDialog()">{{ text.recreateDialog }}</el-button>
  </div>
</template>

<script setup lang="tsx">
import { useDialog } from "@vue-cmd/element-plus";
import type { IConsumer } from "@vue-cmd/core";
import DialogContent from "./shared/DialogContent.vue";
import { useDemoLocale } from "./shared/locale";

const text = useDemoLocale();
const dialog = useDialog();
let consumer: IConsumer;
const newDialog = () => {
  consumer = dialog(<DialogContent />, {
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
`,O={class:"flex justify-center items-center"},X=C({__name:"showhide",setup(F){const e=A(),k=D();let s;const t=()=>{s=k(i(y,null,null),{title:"hello world",attrs:{"close-on-click-modal":!1}}),s.hide()};return t(),(p,h)=>{const v=r;return E(),m("div",O,[i(v,{onClick:h[0]||(h[0]=B=>n(s).show())},{default:a(()=>[l(b(n(e).showDialog),1)]),_:1}),i(v,{onClick:h[1]||(h[1]=B=>n(s).hide())},{default:a(()=>[l(b(n(e).hideDialog),1)]),_:1}),i(v,{onClick:h[2]||(h[2]=B=>t())},{default:a(()=>[l(b(n(e).recreateDialog),1)]),_:1})])}}}),$=`<template>
  <div class="flex justify-center items-center">
    <el-button @click="openDialog">{{ text.openDialog }}</el-button>
  </div>
</template>

<script setup name="base-example" lang="tsx">
import { useDialog } from "@vue-cmd/element-plus";
import DialogContent from "./shared/DialogContent.vue";
import { useDemoLocale } from "./shared/locale";

const text = useDemoLocale();
const dialog = useDialog();
const openDialog = () => {
  dialog(<DialogContent />, {
    title: "hello world",
    width: "90%",
  });
};
<\/script>

<style lang="scss" scoped></style>
`,H={class:"flex justify-center items-center"},K=C({__name:"base",setup(F){const e=A(),k=D(),s=()=>{k(i(y,null,null),{title:"hello world",width:"90%"})};return(t,p)=>{const h=r;return E(),m("div",H,[i(h,{onClick:s},{default:a(()=>[l(b(n(e).openDialog),1)]),_:1})])}}}),J=`<script lang="tsx" setup>
import { useConsumer } from "@vue-cmd/core";
import {
  getCurrentInstance,
  inject,
  onMounted,
  onUnmounted,
  provide,
} from "vue";
import NestedCom from "../nested.vue";
import { useDemoLocale } from "./locale";

defineEmits(["say"]);

const props = withDefaults(
  defineProps<{ nested?: boolean; count?: number }>(),
  {
    nested: false,
    count: 0,
  },
);
provide("nested", props.nested);

const text = useDemoLocale();
provide("content", text.contentProvide);
const depth = inject("depth", 0);
provide("depth", depth + 1);

const consumer = useConsumer(false);

console.log(
  text.globalPropertyLog,
  (getCurrentInstance()! as any).appContext.config.globalProperties.$panda,
);

const resetOption = () => {
  consumer.componentRef?.value?.resetPosition();
};

const model = defineModel<string>();

onMounted(() => {
  console.log(text.mountedLog);
});
onUnmounted(() => {
  console.log(text.unmountedLog);
});

defineExpose({
  msg: "panda",
  sayHello: () => {
    alert("hello");
  },
});
<\/script>

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
      <el-button @click="consumer.show()">show</el-button>
      <el-button @click="resetOption">{{ text.resetPosition }}</el-button>
      <el-button @click="$emit('say', 'panda')">{{ text.emitEvent }}</el-button>
    </div>
    <el-divider />
    <template v-if="nested">
      <el-divider>{{ text.nestedDivider }}</el-divider>
      <p>{{ text.nestedWarning }}</p>
      <p>{{ text.dialogDepth }}: {{ depth }}</p>
      <NestedCom />
    </template>
    <el-divider>{{ text.reactiveProp }} {{ count }}</el-divider>
    <div>
      <el-input v-model="model"></el-input>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
`,ls=JSON.parse('{"title":"Basic Usage","description":"","frontmatter":{},"headers":[],"relativePath":"en/example/base.md","filePath":"en/example/base.md"}'),ss={name:"en/example/base.md"},os=Object.assign(ss,{setup(F){const e=w(!0);return(k,s)=>{const t=_("ClientOnly");return E(),m("div",null,[s[9]||(s[9]=f(`<h1 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-label="Permalink to &quot;Basic Usage&quot;">​</a></h1><p>This page shows several common usage patterns.</p><p>Dialogs are the most typical use case for imperative components, so the examples use the <code>dialog</code> component from <code>element-plus</code>. These examples can help you understand how to use other components in the same way.</p><p>To use the <code>dialog</code> component from <code>element-plus</code>, install the <code>@vue-cmd/element-plus</code> package.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># npm</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @vue-cmd/element-plus</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> element-plus</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># pnpm</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @vue-cmd/element-plus</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> element-plus</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># yarn</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @vue-cmd/element-plus</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> element-plus</span></span></code></pre></div><h2 id="appetizer" tabindex="-1">Appetizer <a class="header-anchor" href="#appetizer" aria-label="Permalink to &quot;Appetizer&quot;">​</a></h2><h3 id="dialogcontent-preview" tabindex="-1">DialogContent Preview <a class="header-anchor" href="#dialogcontent-preview" aria-label="Permalink to &quot;DialogContent Preview&quot;">​</a></h3><p>The examples use the dialog content component <code>DialogContent</code> multiple times. This is what it looks like:</p><div class="warning custom-block"><p class="custom-block-title">Do not interact with it yet. We have not really started; this component needs to work together with an imperative component, so clicking the button below will not do anything.</p><p>Also, <code>import { useConsumer } from &quot;@vue-cmd/core&quot;;</code> is used here to make the demos work across component libraries. In real usage, import it from the specific package you are using, for example <code>import { useConsumer } from &quot;@vue-cmd/element-plus&quot;</code>.</p></div>`,9)),d(i(n(g),null,null,512),[[c,e.value]]),i(t,null,{default:a(()=>[i(n(u),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[0]||(s[0]=()=>{e.value=!1}),vueCode:n(J)},{vue:a(()=>[i(y)]),_:1},8,["vueCode"])]),_:1}),s[10]||(s[10]=f(`<h3 id="the-consumer-object" tabindex="-1">The consumer Object <a class="header-anchor" href="#the-consumer-object" aria-label="Permalink to &quot;The consumer Object&quot;">​</a></h3><p><code>consumer</code> is an important object. It is the bridge for communication between the inside and outside of a command component. It exposes as many potentially useful properties and methods as possible. Inside a dialog, use <code>useConsumer</code> to get it. Outside a dialog, call the command function created by <code>useDialog</code> to get it. They are the same object, so you will find that they are strictly equal.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Outside</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> dialog</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useDialog</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> consumer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dialog</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DialogContent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Inside</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> consumer2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useConsumer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(consumer </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> consumer2); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span></code></pre></div><p>With this, both the inside and outside have the ability to control the imperative component.</p><p>The shape of <code>consumer</code> is:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IConsumer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /** Component instance metadata */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  meta</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Meta</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /** Reactive visibility state. Although hide and show are provided, this is still exposed for special scenarios such as watching visibility changes. */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  visible</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /** Hide */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  hide</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /** Show */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  show</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /** Destroy without advancing the promise state */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  destroy</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">external</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /** Promise */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  promise</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">unknown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /** Promise executor resolve */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  resolve</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">val</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> unknown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /** Promise executor reject */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  reject</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">reason</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> unknown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /** Destroy and resolve the promise */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  destroyWithResolve</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">val</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> unknown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /** Destroy and reject the promise */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  destroyWithReject</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">reason</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> unknown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /** Unsubscribe */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  off</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> symbol</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">callback</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">args</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> unknown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /** Subscribe */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  on</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> symbol</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    callback</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">args</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> unknown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    config</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IOnConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /** Subscribe once */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  once</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> symbol</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">callback</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">args</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> unknown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /** Emit */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  emit</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> symbol</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">args</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> unknown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /** UI library component instance ref */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  componentRef</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /** Mounted HTML container element */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  container</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HTMLDivElement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /** Component nesting stack */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  stack</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IConsumer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[];</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /** Current index in the component nesting stack */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  stackIndex</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /** Mounted */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  mounted</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /** Destroyed */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  destroyed</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Several important properties are introduced below. For the rest, refer to the type definitions.</p><ul><li><code>meta</code> is similar to the <code>meta</code> property in <code>vue-router</code> and stores component-related information.</li><li><code>visible</code> is a reactive boolean that indicates whether the component is visible. You can even control the component directly through this property instead of calling <code>show</code> or <code>hide</code>.</li><li><code>hide</code> hides the component when you need to control visibility.</li><li><code>show</code> shows the component when you need to control visibility.</li><li><code>container</code> is the container element.</li><li><code>stack</code> is the component nesting stack. It stores all currently nested component instances.</li><li><code>stackIndex</code> is the current index in the component nesting stack.</li><li><code>componentRef</code> is a reactive object that represents the native component instance. You can use it to access properties exposed by the native component, but when adapting a native component, you must assign the instance to it for this to work correctly.</li></ul><div class="danger custom-block"><p class="custom-block-title">Note</p><p>The Consumer object includes an event system, but it is not recommended for business logic. This system is mainly used for enhancing and wrapping imperative components and may change in future versions.</p></div><h2 id="creation-and-destruction" tabindex="-1">Creation and Destruction <a class="header-anchor" href="#creation-and-destruction" aria-label="Permalink to &quot;Creation and Destruction&quot;">​</a></h2><p>Now let&#39;s introduce the concrete usage of imperative components.</p><p>Dialog invocation and destruction mainly use <code>destroy</code>, <code>destroyWithResolve</code>, and <code>destroyWithReject</code>.</p><p><code>destroyWithResolve</code> and <code>destroyWithReject</code> advance the promise state to resolved or rejected, while <code>destroy</code> only destroys the dialog without advancing the promise state. If you are concerned about whether a Promise that never reaches a terminal state causes memory leaks, see this article: <a href="https://juejin.cn/post/7419297143788470282?searchId=20250502235657363591F19D1773229FA7" target="_blank" rel="noreferrer">Does a Promise that never completes cause a memory leak?</a>.</p><div class="info custom-block"><p class="custom-block-title">Tips</p><p>The first argument of <code>dialog</code> supports two forms:</p><ul><li>Pass a VNode directly, which is concise and powerful.</li></ul><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> dialog</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useDialog</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dialog</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DialogContent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;, {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // dialog(&lt;DialogContent /&gt;, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  title: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hello world&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  width: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;90%&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><ul><li>Pass a function that returns a VNode. Use this when you need reactive props or run into special cases.</li></ul><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> dialog</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useDialog</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dialog</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DialogContent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;, {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // dialog(&lt;DialogContent /&gt;, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  title: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hello world&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  width: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;90%&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div></div>`,14)),d(i(n(g),null,null,512),[[c,e.value]]),i(t,null,{default:a(()=>[i(n(u),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[1]||(s[1]=()=>{e.value=!1}),vueCode:n($)},{vue:a(()=>[i(K)]),_:1},8,["vueCode"])]),_:1}),s[11]||(s[11]=o("h2",{id:"show-and-hide",tabindex:"-1"},[l("Show and Hide "),o("a",{class:"header-anchor",href:"#show-and-hide","aria-label":'Permalink to "Show and Hide"'},"​")],-1)),s[12]||(s[12]=o("p",null,[o("code",null,"hide"),l(" only hides the component and does not actually destroy it. Some component close events are too limited to support this feature. "),o("code",null,"element-plus"),l(" supports it because we found the right timing.")],-1)),d(i(n(g),null,null,512),[[c,e.value]]),i(t,null,{default:a(()=>[i(n(u),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[2]||(s[2]=()=>{e.value=!1}),vueCode:n(M)},{vue:a(()=>[i(X)]),_:1},8,["vueCode"])]),_:1}),s[13]||(s[13]=o("h2",{id:"nesting",tabindex:"-1"},[l("Nesting "),o("a",{class:"header-anchor",href:"#nesting","aria-label":'Permalink to "Nesting"'},"​")],-1)),s[14]||(s[14]=o("p",null,"Start your journey into infinitely nested dialogs.",-1)),d(i(n(g),null,null,512),[[c,e.value]]),i(t,null,{default:a(()=>[i(n(u),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[3]||(s[3]=()=>{e.value=!1}),vueCode:n(T)},{vue:a(()=>[i(W)]),_:1},8,["vueCode"])]),_:1}),s[15]||(s[15]=o("h2",{id:"native-component-features",tabindex:"-1"},[l("Native Component Features "),o("a",{class:"header-anchor",href:"#native-component-features","aria-label":'Permalink to "Native Component Features"'},"​")],-1)),s[16]||(s[16]=o("p",null,[l("All native component props, events, and methods are supported. Put props and events into "),o("code",null,"attrs"),l("; in theory, this is fully compatible with all native component props and events.")],-1)),d(i(n(g),null,null,512),[[c,e.value]]),i(t,null,{default:a(()=>[i(n(u),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[4]||(s[4]=()=>{e.value=!1}),vueCode:n(G)},{vue:a(()=>[i(z)]),_:1},8,["vueCode"])]),_:1}),s[17]||(s[17]=o("h2",{id:"native-component-slots",tabindex:"-1"},[l("Native Component Slots "),o("a",{class:"header-anchor",href:"#native-component-slots","aria-label":'Permalink to "Native Component Slots"'},"​")],-1)),s[18]||(s[18]=o("p",null,"All native component slots are supported, including named slots and scoped slots.",-1)),d(i(n(g),null,null,512),[[c,e.value]]),i(t,null,{default:a(()=>[i(n(u),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[5]||(s[5]=()=>{e.value=!1}),vueCode:n(S)},{vue:a(()=>[i(N)]),_:1},8,["vueCode"])]),_:1}),s[19]||(s[19]=o("h2",{id:"component-ref",tabindex:"-1"},[l("Component Ref "),o("a",{class:"header-anchor",href:"#component-ref","aria-label":'Permalink to "Component Ref"'},"​")],-1)),s[20]||(s[20]=o("p",null,"Pass a function that returns a VNode.",-1)),d(i(n(g),null,null,512),[[c,e.value]]),i(t,null,{default:a(()=>[i(n(u),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[6]||(s[6]=()=>{e.value=!1}),vueCode:n(I)},{vue:a(()=>[i(Q)]),_:1},8,["vueCode"])]),_:1}),s[21]||(s[21]=o("h2",{id:"communication",tabindex:"-1"},[l("Communication "),o("a",{class:"header-anchor",href:"#communication","aria-label":'Permalink to "Communication"'},"​")],-1)),s[22]||(s[22]=o("p",null,[l("You can communicate with the component as usual through traditional "),o("code",null,"emit"),l(" and one-way data flow.")],-1)),s[23]||(s[23]=o("p",null,"In the next chapter, however, you will see a more elegant communication method: Promise-based dialogs.",-1)),s[24]||(s[24]=o("p",null,"Open the dialog and emit an event. It is not as elegant as the Promise approach, but it can keep sending messages to the outside, while a Promise resolves only once.",-1)),d(i(n(g),null,null,512),[[c,e.value]]),i(t,null,{default:a(()=>[i(n(u),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[7]||(s[7]=()=>{e.value=!1}),vueCode:n(P)},{vue:a(()=>[i(q)]),_:1},8,["vueCode"])]),_:1}),s[25]||(s[25]=f(`<h2 id="provide-and-inject" tabindex="-1">provide and inject <a class="header-anchor" href="#provide-and-inject" aria-label="Permalink to &quot;provide and inject&quot;">​</a></h2><p>This works the same way as Vue&#39;s <code>provide</code> and <code>inject</code>. You can also use <code>provideProps</code> to implement private injection, which limits the injected values to the command component and prevents components outside it from being polluted.</p><p>Usage is simple.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> dialog</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useDialog</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dialog</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">div</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  provideProps: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    a: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    b: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h2 id="el-drawer" tabindex="-1">el-drawer <a class="header-anchor" href="#el-drawer" aria-label="Permalink to &quot;el-drawer&quot;">​</a></h2>`,5)),d(i(n(g),null,null,512),[[c,e.value]]),i(t,null,{default:a(()=>[i(n(u),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[8]||(s[8]=()=>{e.value=!1}),vueCode:n(Z)},{vue:a(()=>[i(V)]),_:1},8,["vueCode"])]),_:1}),s[26]||(s[26]=f(`<h2 id="props-reference" tabindex="-1">Props Reference <a class="header-anchor" href="#props-reference" aria-label="Permalink to &quot;Props Reference&quot;">​</a></h2><p>For more props, refer to: <a href="https://element-plus.org/en-US/component/dialog.html#api" target="_blank" rel="noreferrer">element-plus dialog documentation</a>. <a href="https://element-plus.org/en-US/component/drawer.html#api" target="_blank" rel="noreferrer">element-plus drawer documentation</a>.</p><p>Place props and events from the official documentation into <code>attrs</code>.</p><p>We lift <code>title</code> and <code>width/size</code> to the top level because they are used so often, saving one layer of <code>attrs</code>. If these props are also present in <code>attrs</code>, they will be overridden.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> dialog</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useDialog</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dialog</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DialogContent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  title: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  width: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;80%&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  attrs: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // If these props exist in attrs, they will be overridden</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    title: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    width: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;80%&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Event</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    onXX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p>You can easily wrap this again and lift your frequently used props to the top-level object. Here is a simple example:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useDialogExample</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> dialog</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useDialog</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">contentVnode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">config</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> YourConfigInterface</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dialog</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(contentVnode, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      attrs: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // Your frequently used props</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        title: config?.title,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        width: config?.width,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        draggable: config?.draggable,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        fullscreen: config?.fullscreen,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      ...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">config,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div>`,7))])}}});export{ls as __pageData,os as default};
