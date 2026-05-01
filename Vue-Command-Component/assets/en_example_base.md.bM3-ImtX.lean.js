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
`,ls=JSON.parse('{"title":"Basic Usage","description":"","frontmatter":{},"headers":[],"relativePath":"en/example/base.md","filePath":"en/example/base.md"}'),ss={name:"en/example/base.md"},os=Object.assign(ss,{setup(F){const e=w(!0);return(k,s)=>{const t=_("ClientOnly");return E(),m("div",null,[s[9]||(s[9]=f("",9)),d(i(n(g),null,null,512),[[c,e.value]]),i(t,null,{default:a(()=>[i(n(u),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[0]||(s[0]=()=>{e.value=!1}),vueCode:n(J)},{vue:a(()=>[i(y)]),_:1},8,["vueCode"])]),_:1}),s[10]||(s[10]=f("",14)),d(i(n(g),null,null,512),[[c,e.value]]),i(t,null,{default:a(()=>[i(n(u),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[1]||(s[1]=()=>{e.value=!1}),vueCode:n($)},{vue:a(()=>[i(K)]),_:1},8,["vueCode"])]),_:1}),s[11]||(s[11]=o("h2",{id:"show-and-hide",tabindex:"-1"},[l("Show and Hide "),o("a",{class:"header-anchor",href:"#show-and-hide","aria-label":'Permalink to "Show and Hide"'},"​")],-1)),s[12]||(s[12]=o("p",null,[o("code",null,"hide"),l(" only hides the component and does not actually destroy it. Some component close events are too limited to support this feature. "),o("code",null,"element-plus"),l(" supports it because we found the right timing.")],-1)),d(i(n(g),null,null,512),[[c,e.value]]),i(t,null,{default:a(()=>[i(n(u),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[2]||(s[2]=()=>{e.value=!1}),vueCode:n(M)},{vue:a(()=>[i(X)]),_:1},8,["vueCode"])]),_:1}),s[13]||(s[13]=o("h2",{id:"nesting",tabindex:"-1"},[l("Nesting "),o("a",{class:"header-anchor",href:"#nesting","aria-label":'Permalink to "Nesting"'},"​")],-1)),s[14]||(s[14]=o("p",null,"Start your journey into infinitely nested dialogs.",-1)),d(i(n(g),null,null,512),[[c,e.value]]),i(t,null,{default:a(()=>[i(n(u),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[3]||(s[3]=()=>{e.value=!1}),vueCode:n(T)},{vue:a(()=>[i(W)]),_:1},8,["vueCode"])]),_:1}),s[15]||(s[15]=o("h2",{id:"native-component-features",tabindex:"-1"},[l("Native Component Features "),o("a",{class:"header-anchor",href:"#native-component-features","aria-label":'Permalink to "Native Component Features"'},"​")],-1)),s[16]||(s[16]=o("p",null,[l("All native component props, events, and methods are supported. Put props and events into "),o("code",null,"attrs"),l("; in theory, this is fully compatible with all native component props and events.")],-1)),d(i(n(g),null,null,512),[[c,e.value]]),i(t,null,{default:a(()=>[i(n(u),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[4]||(s[4]=()=>{e.value=!1}),vueCode:n(G)},{vue:a(()=>[i(z)]),_:1},8,["vueCode"])]),_:1}),s[17]||(s[17]=o("h2",{id:"native-component-slots",tabindex:"-1"},[l("Native Component Slots "),o("a",{class:"header-anchor",href:"#native-component-slots","aria-label":'Permalink to "Native Component Slots"'},"​")],-1)),s[18]||(s[18]=o("p",null,"All native component slots are supported, including named slots and scoped slots.",-1)),d(i(n(g),null,null,512),[[c,e.value]]),i(t,null,{default:a(()=>[i(n(u),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[5]||(s[5]=()=>{e.value=!1}),vueCode:n(S)},{vue:a(()=>[i(N)]),_:1},8,["vueCode"])]),_:1}),s[19]||(s[19]=o("h2",{id:"component-ref",tabindex:"-1"},[l("Component Ref "),o("a",{class:"header-anchor",href:"#component-ref","aria-label":'Permalink to "Component Ref"'},"​")],-1)),s[20]||(s[20]=o("p",null,"Pass a function that returns a VNode.",-1)),d(i(n(g),null,null,512),[[c,e.value]]),i(t,null,{default:a(()=>[i(n(u),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[6]||(s[6]=()=>{e.value=!1}),vueCode:n(I)},{vue:a(()=>[i(Q)]),_:1},8,["vueCode"])]),_:1}),s[21]||(s[21]=o("h2",{id:"communication",tabindex:"-1"},[l("Communication "),o("a",{class:"header-anchor",href:"#communication","aria-label":'Permalink to "Communication"'},"​")],-1)),s[22]||(s[22]=o("p",null,[l("You can communicate with the component as usual through traditional "),o("code",null,"emit"),l(" and one-way data flow.")],-1)),s[23]||(s[23]=o("p",null,"In the next chapter, however, you will see a more elegant communication method: Promise-based dialogs.",-1)),s[24]||(s[24]=o("p",null,"Open the dialog and emit an event. It is not as elegant as the Promise approach, but it can keep sending messages to the outside, while a Promise resolves only once.",-1)),d(i(n(g),null,null,512),[[c,e.value]]),i(t,null,{default:a(()=>[i(n(u),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[7]||(s[7]=()=>{e.value=!1}),vueCode:n(P)},{vue:a(()=>[i(q)]),_:1},8,["vueCode"])]),_:1}),s[25]||(s[25]=f("",5)),d(i(n(g),null,null,512),[[c,e.value]]),i(t,null,{default:a(()=>[i(n(u),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[8]||(s[8]=()=>{e.value=!1}),vueCode:n(Z)},{vue:a(()=>[i(V)]),_:1},8,["vueCode"])]),_:1}),s[26]||(s[26]=f("",7))])}}});export{ls as __pageData,os as default};
