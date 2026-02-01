import{j as C,C as y,E as m,k as i,I as h,B as t,r as f,u as e,W as A,aW as v,t as d,O as p,v as g}from"./chunks/framework.BdKND-4d.js";import{b as B,_ as E,u as D,O as c,E as u,d as _}from"./chunks/index.CInZOI4_.js";import{a as o}from"./chunks/theme.DPtADWyO.js";import{T as w}from"./chunks/nested.DtV-8oLL.js";const x=`<template>
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
`,W={class:"flex justify-center items-center"},T=C({__name:"el-drawer",setup(F){const n=B(),k=()=>{n(i(E,null,null),{title:"抽屉示例",size:"50%",attrs:{direction:"rtl"}})},s=()=>{const l=n(i(E,null,null),{title:"自定义抽屉",size:"50%",attrs:{direction:"ltr","destroy-on-close":!0,"with-header":!0,"close-on-click-modal":!1,"close-on-press-escape":!1,"show-close":!0},slots:{footer:()=>i("div",{class:"flex justify-end p-4 gap-2"},[i(o,{onClick:()=>l.destroyWithReject("取消")},{default:()=>[t("取消")]}),i(o,{type:"primary",onClick:()=>l.destroyWithResolve("确认")},{default:()=>[t("确认")]})])}})};return(l,a)=>{const r=o;return m(),y("div",W,[i(r,{onClick:k},{default:h(()=>a[0]||(a[0]=[t("打开抽屉")])),_:1,__:[0]}),i(r,{onClick:s,type:"primary"},{default:h(()=>a[1]||(a[1]=[t("自定义抽屉")])),_:1,__:[1]})])}}}),Z=`<template>
  <div class="flex justify-center items-center">
    <el-button @click="openDialog">打开弹窗</el-button>
  </div>
</template>

<script setup lang="tsx">
import { useDialog } from "@vue-cmd/element-plus";
import DialogContent from "./shared/DialogContent.vue";

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
`,V={class:"flex justify-center items-center"},R=C({__name:"communication",setup(F){const n=D(),k=()=>{n(i(E,{onSay:s=>{console.log(s)}},null),{title:"hello world"})};return(s,l)=>{const a=o;return m(),y("div",V,[i(a,{onClick:k},{default:h(()=>l[0]||(l[0]=[t("打开弹窗")])),_:1,__:[0]})])}}}),q=`<template>
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
`,j={class:"flex justify-center items-center"},Q=C({__name:"component-ref",setup(F){const n=f(),k=()=>{var a;console.log(0),(a=n.value)==null||a.sayHello()},s=D(),l=()=>{s(()=>i(E,{ref:n},null),{title:"hello world",width:"90%",slots:{footer:()=>i(o,{onClick:k},{default:()=>[t("Hello It's me~")]})}})};return(a,r)=>{const b=o;return m(),y("div",j,[i(b,{onClick:l},{default:h(()=>r[0]||(r[0]=[t("打开弹窗")])),_:1,__:[0]})])}}}),G=`<template>
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
`,I={class:"flex justify-center items-center"},P=C({__name:"native-slots",setup(F){const n=D(),k=()=>{const s=n(i(E,null,null),{title:"",slots:{header:()=>i("div",{class:"text-red text-30px"},[t("自定义头部")]),footer:()=>i("div",{class:"flex justify-center items-center gap-20px"},[i(o,{type:"primary",onClick:()=>s.destroyWithResolve("ok")},{default:()=>[t("确定")]}),i(o,{type:"default",onClick:()=>s.destroyWithReject("cancel")},{default:()=>[t("取消")]})])}})};return(s,l)=>{const a=o;return m(),y("div",I,[i(a,{onClick:k},{default:h(()=>l[0]||(l[0]=[t("打开弹窗")])),_:1,__:[0]})])}}}),Y=`<template>
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
`,L={class:"flex justify-center items-center"},S=C({__name:"native-attributes",setup(F){const n=D(),k=()=>{n(i(E,null,null),{title:"组件原生属性(尝试拖拽我试试)",attrs:{modal:!0,modalClass:"custom-modal",appendToBody:!0,lockScroll:!0,openDelay:0,closeDelay:0,closeOnClickModal:!0,closeOnPressEscape:!0,showClose:!0,beforeClose:s=>{console.log("👹我将阻止你的关闭👹")},draggable:!0,alignCenter:!0}})};return(s,l)=>{const a=o;return m(),y("div",L,[i(a,{onClick:k},{default:h(()=>l[0]||(l[0]=[t("打开弹窗")])),_:1,__:[0]})])}}}),z=`<template>
  <div class="flex justify-center items-center">
    <el-button @click="consumer.show()">显示弹窗</el-button>
    <el-button @click="consumer.hide()">隐藏弹窗</el-button>

    <el-button @click="newDialog()">重新创建一个弹窗🌟</el-button>
  </div>
</template>

<script setup lang="tsx">
import { useDialog } from "@vue-cmd/element-plus";
import type { IConsumer } from "@vue-cmd/core";
import DialogContent from "./shared/DialogContent.vue";

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
`,M={class:"flex justify-center items-center"},X=C({__name:"showhide",setup(F){const n=D();let k;const s=()=>{k=n(i(E,null,null),{title:"hello world",attrs:{"close-on-click-modal":!1}}),k.hide()};return s(),(l,a)=>{const r=o;return m(),y("div",M,[i(r,{onClick:a[0]||(a[0]=b=>e(k).show())},{default:h(()=>a[3]||(a[3]=[t("显示弹窗")])),_:1,__:[3]}),i(r,{onClick:a[1]||(a[1]=b=>e(k).hide())},{default:h(()=>a[4]||(a[4]=[t("隐藏弹窗")])),_:1,__:[4]}),i(r,{onClick:a[2]||(a[2]=b=>s())},{default:h(()=>a[5]||(a[5]=[t("重新创建一个弹窗🌟")])),_:1,__:[5]})])}}}),N=`<template>
  <div class="flex justify-center items-center">
    <el-button @click="openDialog">打开弹窗</el-button>
  </div>
</template>

<script setup name="base-example" lang="tsx">
import { useDialog } from "@vue-cmd/element-plus";
import DialogContent from "./shared/DialogContent.vue";

const dialog = useDialog();
const openDialog = () => {
  dialog(<DialogContent />, {
    title: "hello world",
    width: "90%",
  });
};
<\/script>

<style lang="scss" scoped></style>
`,U={class:"flex justify-center items-center"},$=C({__name:"base",setup(F){const n=D(),k=()=>{n(i(E,null,null),{title:"hello world",width:"90%"})};return(s,l)=>{const a=o;return m(),y("div",U,[i(a,{onClick:k},{default:h(()=>l[0]||(l[0]=[t("打开弹窗")])),_:1,__:[0]})])}}}),O=`<script lang="tsx" setup>
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
`,ns=JSON.parse('{"title":"常规用法","description":"","frontmatter":{},"headers":[],"relativePath":"example/base.md","filePath":"example/base.md"}'),H={name:"example/base.md"},as=Object.assign(H,{setup(F){const n=f(!0);return(k,s)=>{const l=A("ClientOnly");return m(),y("div",null,[s[9]||(s[9]=v("",9)),d(i(e(c),null,null,512),[[g,n.value]]),i(l,null,{default:h(()=>[i(e(u),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[0]||(s[0]=()=>{n.value=!1}),vueCode:e(O)},{vue:h(()=>[i(E)]),_:1},8,["vueCode"])]),_:1}),s[10]||(s[10]=v("",15)),d(i(e(c),null,null,512),[[g,n.value]]),i(l,null,{default:h(()=>[i(e(u),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[1]||(s[1]=()=>{n.value=!1}),vueCode:e(N)},{vue:h(()=>[i($)]),_:1},8,["vueCode"])]),_:1}),s[11]||(s[11]=p("h2",{id:"显示和隐藏",tabindex:"-1"},[t("显示和隐藏 "),p("a",{class:"header-anchor",href:"#显示和隐藏","aria-label":'Permalink to "显示和隐藏"'},"​")],-1)),s[12]||(s[12]=p("p",null,[t("隐藏"),p("code",null,"hide"),t("只会隐藏掉组件,不会进行真正的销毁.某些组件关闭事件过于单一可能不支持这个功能,"),p("code",null,"element-plus"),t("支持是因为我抓住了一个timing😄.")],-1)),d(i(e(c),null,null,512),[[g,n.value]]),i(l,null,{default:h(()=>[i(e(u),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[2]||(s[2]=()=>{n.value=!1}),vueCode:e(z)},{vue:h(()=>[i(X)]),_:1},8,["vueCode"])]),_:1}),s[13]||(s[13]=p("h2",{id:"嵌套",tabindex:"-1"},[t("嵌套 "),p("a",{class:"header-anchor",href:"#嵌套","aria-label":'Permalink to "嵌套"'},"​")],-1)),s[14]||(s[14]=p("p",null,"可以开始你的无限套娃之旅了~",-1)),d(i(e(c),null,null,512),[[g,n.value]]),i(l,null,{default:h(()=>[i(e(u),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[3]||(s[3]=()=>{n.value=!1}),vueCode:e(w)},{vue:h(()=>[i(_)]),_:1},8,["vueCode"])]),_:1}),s[15]||(s[15]=p("h2",{id:"原生组件特性",tabindex:"-1"},[t("原生组件特性 "),p("a",{class:"header-anchor",href:"#原生组件特性","aria-label":'Permalink to "原生组件特性"'},"​")],-1)),s[16]||(s[16]=p("p",null,[t("支持原生组件所有的属性和事件,方法.你可以将属性和事件放置到"),p("code",null,"attrs"),t("中,理论完美兼容支持原生组件的所有属性和事件.")],-1)),d(i(e(c),null,null,512),[[g,n.value]]),i(l,null,{default:h(()=>[i(e(u),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[4]||(s[4]=()=>{n.value=!1}),vueCode:e(Y)},{vue:h(()=>[i(S)]),_:1},8,["vueCode"])]),_:1}),s[17]||(s[17]=p("h2",{id:"原生组件插槽",tabindex:"-1"},[t("原生组件插槽 "),p("a",{class:"header-anchor",href:"#原生组件插槽","aria-label":'Permalink to "原生组件插槽"'},"​")],-1)),s[18]||(s[18]=p("p",null,"支持原生组件所有的插槽,包括具名插槽和作用域插槽.",-1)),d(i(e(c),null,null,512),[[g,n.value]]),i(l,null,{default:h(()=>[i(e(u),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[5]||(s[5]=()=>{n.value=!1}),vueCode:e(G)},{vue:h(()=>[i(P)]),_:1},8,["vueCode"])]),_:1}),s[19]||(s[19]=p("h2",{id:"组件ref引用",tabindex:"-1"},[t("组件Ref引用 "),p("a",{class:"header-anchor",href:"#组件ref引用","aria-label":'Permalink to "组件Ref引用"'},"​")],-1)),s[20]||(s[20]=p("p",null,[t("使用传递"),p("code",null,"返回 VNode的函数"),t("即可.")],-1)),d(i(e(c),null,null,512),[[g,n.value]]),i(l,null,{default:h(()=>[i(e(u),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[6]||(s[6]=()=>{n.value=!1}),vueCode:e(q)},{vue:h(()=>[i(Q)]),_:1},8,["vueCode"])]),_:1}),s[21]||(s[21]=p("h2",{id:"通信",tabindex:"-1"},[t("通信 "),p("a",{class:"header-anchor",href:"#通信","aria-label":'Permalink to "通信"'},"​")],-1)),s[22]||(s[22]=p("p",null,"你可以像往常一样,使用传统的emit来进行单向数据流的方式来进行通信. 然而下一章中,你会认识到一种更优雅的通信方式,那就是promise特性的弹窗.",-1)),s[23]||(s[23]=p("p",null,"打开弹窗emit一个事件吧,它虽然不如promise方式优雅,但是它可以不断的向外部发送消息,而promise仅限一次.",-1)),d(i(e(c),null,null,512),[[g,n.value]]),i(l,null,{default:h(()=>[i(e(u),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[7]||(s[7]=()=>{n.value=!1}),vueCode:e(Z)},{vue:h(()=>[i(R)]),_:1},8,["vueCode"])]),_:1}),s[24]||(s[24]=v("",5)),d(i(e(c),null,null,512),[[g,n.value]]),i(l,null,{default:h(()=>[i(e(u),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[8]||(s[8]=()=>{n.value=!1}),vueCode:e(x)},{vue:h(()=>[i(T)]),_:1},8,["vueCode"])]),_:1}),s[25]||(s[25]=v("",7))])}}});export{ns as __pageData,as as default};
