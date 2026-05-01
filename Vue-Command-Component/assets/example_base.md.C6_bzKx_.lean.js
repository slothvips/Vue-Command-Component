import{j as D,C as y,E as m,k as i,I as l,B as e,G as v,u as a,r as _,W as x,aW as f,t as d,O as h,v as c}from"./chunks/framework.Dr0ZuDOg.js";import{b as w,u as C,O as g,E as u}from"./chunks/index.DB_ntYdK.js";import{_ as E,u as A,a as W}from"./chunks/DialogContent.vue_vue_type_script_setup_true_lang.C-idPmwU.js";import{a as r}from"./chunks/theme.a7z_s1GA.js";import{T}from"./chunks/nested.D-fp10l2.js";const Z=`<template>
  <div class="flex justify-center items-center">
    <el-button @click="openDrawer">打开抽屉</el-button>
    <el-button @click="openCustomDrawer" type="primary">自定义抽屉</el-button>
  </div>
</template>

<script setup lang="tsx">
import { useDrawer } from "@vue-cmd/element-plus";
import DialogContent from "./shared/DialogContent.vue";

const CommandDrawer = useDrawer();

// 基础用法
const openDrawer = () => {
  CommandDrawer(<DialogContent />, {
    title: "抽屉示例",
    size: "50%",
    attrs: {
      direction: "rtl",
    },
  });
};

// 自定义用法
const openCustomDrawer = () => {
  const consumer = CommandDrawer(<DialogContent />, {
    title: "自定义抽屉",
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
          <el-button onClick={() => consumer.destroyWithReject("取消")}>
            取消
          </el-button>
          <el-button
            type="primary"
            onClick={() => consumer.destroyWithResolve("确认")}
          >
            确认
          </el-button>
        </div>
      ),
    },
  });
};
<\/script>

<style lang="scss" scoped></style>
`,V={class:"flex justify-center items-center"},R=D({__name:"el-drawer",setup(F){const n=w(),o=()=>{n(i(E,null,null),{title:"抽屉示例",size:"50%",attrs:{direction:"rtl"}})},s=()=>{const t=n(i(E,null,null),{title:"自定义抽屉",size:"50%",attrs:{direction:"ltr","destroy-on-close":!0,"with-header":!0,"close-on-click-modal":!1,"close-on-press-escape":!1,"show-close":!0},slots:{footer:()=>i("div",{class:"flex justify-end p-4 gap-2"},[i(r,{onClick:()=>t.destroyWithReject("取消")},{default:()=>[e("取消")]}),i(r,{type:"primary",onClick:()=>t.destroyWithResolve("确认")},{default:()=>[e("确认")]})])}})};return(t,k)=>{const p=r;return m(),y("div",V,[i(p,{onClick:o},{default:l(()=>k[0]||(k[0]=[e("打开抽屉")])),_:1,__:[0]}),i(p,{onClick:s,type:"primary"},{default:l(()=>k[1]||(k[1]=[e("自定义抽屉")])),_:1,__:[1]})])}}}),q=`<template>
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
`,j={class:"flex justify-center items-center"},Q=D({__name:"communication",setup(F){const n=A(),o=C(),s=()=>{o(i(E,{onSay:t=>{console.log(t)}},null),{title:"hello world"})};return(t,k)=>{const p=r;return m(),y("div",j,[i(p,{onClick:s},{default:l(()=>[e(v(a(n).openDialog),1)]),_:1})])}}}),L=`<template>
  <div class="flex justify-center items-center">
    <el-button @click="openDialog">打开弹窗</el-button>
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
`,P={class:"flex justify-center items-center"},G=D({__name:"component-ref",setup(F){const n=_(),o=()=>{var k;console.log(0),(k=n.value)==null||k.sayHello()},s=C(),t=()=>{s(()=>i(E,{ref:n},null),{title:"hello world",width:"90%",slots:{footer:()=>i(r,{onClick:o},{default:()=>[e("Hello It's me~")]})}})};return(k,p)=>{const b=r;return m(),y("div",P,[i(b,{onClick:t},{default:l(()=>p[0]||(p[0]=[e("打开弹窗")])),_:1,__:[0]})])}}}),I=`<template>
  <div class="flex justify-center items-center">
    <el-button @click="openDialog">打开弹窗</el-button>
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
      header: () => <div class="text-red text-30px">自定义头部</div>,
      footer: () => (
        <div class="flex justify-center items-center gap-20px">
          <el-button
            type="primary"
            onClick={() => consumer.destroyWithResolve("ok")}
          >
            确定
          </el-button>
          <el-button
            type="default"
            onClick={() => consumer.destroyWithReject("cancel")}
          >
            取消
          </el-button>
        </div>
      ),
    },
  });
};
<\/script>

<style lang="scss" scoped></style>
`,Y={class:"flex justify-center items-center"},S=D({__name:"native-slots",setup(F){const n=C(),o=()=>{const s=n(i(E,null,null),{title:"",slots:{header:()=>i("div",{class:"text-red text-30px"},[e("自定义头部")]),footer:()=>i("div",{class:"flex justify-center items-center gap-20px"},[i(r,{type:"primary",onClick:()=>s.destroyWithResolve("ok")},{default:()=>[e("确定")]}),i(r,{type:"default",onClick:()=>s.destroyWithReject("cancel")},{default:()=>[e("取消")]})])}})};return(s,t)=>{const k=r;return m(),y("div",Y,[i(k,{onClick:o},{default:l(()=>t[0]||(t[0]=[e("打开弹窗")])),_:1,__:[0]})])}}}),z=`<template>
  <div class="flex justify-center items-center">
    <el-button @click="openDialog">打开弹窗</el-button>
  </div>
</template>

<script setup lang="tsx">
import { useDialog } from "@vue-cmd/element-plus";
import DialogContent from "./shared/DialogContent.vue";

const dialog = useDialog();
const openDialog = () => {
  dialog(<DialogContent />, {
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
`,X={class:"flex justify-center items-center"},M=D({__name:"native-attributes",setup(F){const n=C(),o=()=>{n(i(E,null,null),{title:"组件原生属性(尝试拖拽我试试)",attrs:{modal:!0,modalClass:"custom-modal",appendToBody:!0,lockScroll:!0,openDelay:0,closeDelay:0,closeOnClickModal:!0,closeOnPressEscape:!0,showClose:!0,beforeClose:s=>{console.log("👹我将阻止你的关闭👹")},draggable:!0,alignCenter:!0}})};return(s,t)=>{const k=r;return m(),y("div",X,[i(k,{onClick:o},{default:l(()=>t[0]||(t[0]=[e("打开弹窗")])),_:1,__:[0]})])}}}),N=`<template>
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
`,U={class:"flex justify-center items-center"},$=D({__name:"showhide",setup(F){const n=A(),o=C();let s;const t=()=>{s=o(i(E,null,null),{title:"hello world",attrs:{"close-on-click-modal":!1}}),s.hide()};return t(),(k,p)=>{const b=r;return m(),y("div",U,[i(b,{onClick:p[0]||(p[0]=B=>a(s).show())},{default:l(()=>[e(v(a(n).showDialog),1)]),_:1}),i(b,{onClick:p[1]||(p[1]=B=>a(s).hide())},{default:l(()=>[e(v(a(n).hideDialog),1)]),_:1}),i(b,{onClick:p[2]||(p[2]=B=>t())},{default:l(()=>[e(v(a(n).recreateDialog),1)]),_:1})])}}}),O=`<template>
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
`,H={class:"flex justify-center items-center"},J=D({__name:"base",setup(F){const n=A(),o=C(),s=()=>{o(i(E,null,null),{title:"hello world",width:"90%"})};return(t,k)=>{const p=r;return m(),y("div",H,[i(p,{onClick:s},{default:l(()=>[e(v(a(n).openDialog),1)]),_:1})])}}}),K=`<script lang="tsx" setup>
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
`,ls=JSON.parse('{"title":"常规用法","description":"","frontmatter":{},"headers":[],"relativePath":"example/base.md","filePath":"example/base.md"}'),ss={name:"example/base.md"},hs=Object.assign(ss,{setup(F){const n=_(!0);return(o,s)=>{const t=x("ClientOnly");return m(),y("div",null,[s[9]||(s[9]=f("",9)),d(i(a(g),null,null,512),[[c,n.value]]),i(t,null,{default:l(()=>[i(a(u),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[0]||(s[0]=()=>{n.value=!1}),vueCode:a(K)},{vue:l(()=>[i(E)]),_:1},8,["vueCode"])]),_:1}),s[10]||(s[10]=f("",15)),d(i(a(g),null,null,512),[[c,n.value]]),i(t,null,{default:l(()=>[i(a(u),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[1]||(s[1]=()=>{n.value=!1}),vueCode:a(O)},{vue:l(()=>[i(J)]),_:1},8,["vueCode"])]),_:1}),s[11]||(s[11]=h("h2",{id:"显示和隐藏",tabindex:"-1"},[e("显示和隐藏 "),h("a",{class:"header-anchor",href:"#显示和隐藏","aria-label":'Permalink to "显示和隐藏"'},"​")],-1)),s[12]||(s[12]=h("p",null,[e("隐藏"),h("code",null,"hide"),e("只会隐藏掉组件,不会进行真正的销毁.某些组件关闭事件过于单一可能不支持这个功能,"),h("code",null,"element-plus"),e("支持是因为我抓住了一个timing😄.")],-1)),d(i(a(g),null,null,512),[[c,n.value]]),i(t,null,{default:l(()=>[i(a(u),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[2]||(s[2]=()=>{n.value=!1}),vueCode:a(N)},{vue:l(()=>[i($)]),_:1},8,["vueCode"])]),_:1}),s[13]||(s[13]=h("h2",{id:"嵌套",tabindex:"-1"},[e("嵌套 "),h("a",{class:"header-anchor",href:"#嵌套","aria-label":'Permalink to "嵌套"'},"​")],-1)),s[14]||(s[14]=h("p",null,"可以开始你的无限套娃之旅了~",-1)),d(i(a(g),null,null,512),[[c,n.value]]),i(t,null,{default:l(()=>[i(a(u),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[3]||(s[3]=()=>{n.value=!1}),vueCode:a(T)},{vue:l(()=>[i(W)]),_:1},8,["vueCode"])]),_:1}),s[15]||(s[15]=h("h2",{id:"原生组件特性",tabindex:"-1"},[e("原生组件特性 "),h("a",{class:"header-anchor",href:"#原生组件特性","aria-label":'Permalink to "原生组件特性"'},"​")],-1)),s[16]||(s[16]=h("p",null,[e("支持原生组件所有的属性和事件,方法.你可以将属性和事件放置到"),h("code",null,"attrs"),e("中,理论完美兼容支持原生组件的所有属性和事件.")],-1)),d(i(a(g),null,null,512),[[c,n.value]]),i(t,null,{default:l(()=>[i(a(u),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[4]||(s[4]=()=>{n.value=!1}),vueCode:a(z)},{vue:l(()=>[i(M)]),_:1},8,["vueCode"])]),_:1}),s[17]||(s[17]=h("h2",{id:"原生组件插槽",tabindex:"-1"},[e("原生组件插槽 "),h("a",{class:"header-anchor",href:"#原生组件插槽","aria-label":'Permalink to "原生组件插槽"'},"​")],-1)),s[18]||(s[18]=h("p",null,"支持原生组件所有的插槽,包括具名插槽和作用域插槽.",-1)),d(i(a(g),null,null,512),[[c,n.value]]),i(t,null,{default:l(()=>[i(a(u),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[5]||(s[5]=()=>{n.value=!1}),vueCode:a(I)},{vue:l(()=>[i(S)]),_:1},8,["vueCode"])]),_:1}),s[19]||(s[19]=h("h2",{id:"组件ref引用",tabindex:"-1"},[e("组件Ref引用 "),h("a",{class:"header-anchor",href:"#组件ref引用","aria-label":'Permalink to "组件Ref引用"'},"​")],-1)),s[20]||(s[20]=h("p",null,[e("使用传递"),h("code",null,"返回 VNode的函数"),e("即可.")],-1)),d(i(a(g),null,null,512),[[c,n.value]]),i(t,null,{default:l(()=>[i(a(u),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[6]||(s[6]=()=>{n.value=!1}),vueCode:a(L)},{vue:l(()=>[i(G)]),_:1},8,["vueCode"])]),_:1}),s[21]||(s[21]=h("h2",{id:"通信",tabindex:"-1"},[e("通信 "),h("a",{class:"header-anchor",href:"#通信","aria-label":'Permalink to "通信"'},"​")],-1)),s[22]||(s[22]=h("p",null,"你可以像往常一样,使用传统的emit来进行单向数据流的方式来进行通信. 然而下一章中,你会认识到一种更优雅的通信方式,那就是promise特性的弹窗.",-1)),s[23]||(s[23]=h("p",null,"打开弹窗emit一个事件吧,它虽然不如promise方式优雅,但是它可以不断的向外部发送消息,而promise仅限一次.",-1)),d(i(a(g),null,null,512),[[c,n.value]]),i(t,null,{default:l(()=>[i(a(u),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[7]||(s[7]=()=>{n.value=!1}),vueCode:a(q)},{vue:l(()=>[i(Q)]),_:1},8,["vueCode"])]),_:1}),s[24]||(s[24]=f("",5)),d(i(a(g),null,null,512),[[c,n.value]]),i(t,null,{default:l(()=>[i(a(u),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[8]||(s[8]=()=>{n.value=!1}),vueCode:a(Z)},{vue:l(()=>[i(R)]),_:1},8,["vueCode"])]),_:1}),s[25]||(s[25]=f("",7))])}}});export{ls as __pageData,hs as default};
