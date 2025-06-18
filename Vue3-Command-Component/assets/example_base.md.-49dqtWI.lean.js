import{d as h,h as R,c as v,o as b,e as V,n as j,k as o,r as S,N as Q,G as e,w as s,a as i,aI as P,V as W,L as z,ap as $,aJ as M,F as T,j as d,t as B,p as F,ai as L,C as I,ae as Z,ag as C,ah as y}from"./chunks/framework.BbgJkY9P.js";import{D as U,J as X,_ as N,E as O,O as q,aQ as E,aH as g,aR as J,aw as Y,aU as H,aV as K,aW as ee,aX as te,aS as k,aT as _}from"./chunks/index.d1Ng9Fco.js";const ne=U({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},contentPosition:{type:String,values:["left","center","right"],default:"center"},borderStyle:{type:X(String),default:"solid"}}),le=h({name:"ElDivider"}),oe=h({...le,props:ne,setup(c){const l=c,r=O("divider"),t=R(()=>r.cssVar({"border-style":l.borderStyle}));return(a,u)=>(b(),v("div",{class:j([o(r).b(),o(r).m(a.direction)]),style:Q(o(t)),role:"separator"},[a.$slots.default&&a.direction!=="vertical"?(b(),v("div",{key:0,class:j([o(r).e("text"),o(r).is(a.contentPosition)])},[S(a.$slots,"default")],2)):V("v-if",!0)],6))}});var se=N(oe,[["__file","divider.vue"]]);const A=q(se),ae=`<template>
  <div>
    {{ formValue }}
    <el-divider />
    {{ count }}
    <el-divider />
    <div class="flex justify-center items-center">
      <el-button @click="openDialog">打开非响应性式弹窗</el-button>
      <el-button @click="openDialog2">打开响应式弹窗</el-button>
    </div>
    <el-divider />
  </div>
</template>

<script setup name="base-example" lang="tsx">
import { JSXReactive, useElementPlusDialog } from "vue3-command-component";
import DialogContent from "./dialog-content.vue";
import { ref ,reactive} from "vue";

const count=ref(0)
setInterval(()=>{
  count.value++
},1000)

const CommandDialog = useElementPlusDialog();
const openDialog = () => {
  CommandDialog(<DialogContent v-model={formValue.name} count={count.value} />); 
};

const openDialog2 = () => {
  CommandDialog(JSXReactive(()=> <DialogContent v-model={formValue.name} count={count.value} />));
};

const formValue=reactive({
  name:'panda',
})

<\/script>

<style lang="scss" scoped></style>
`,ie={class:"flex justify-center items-center"},G=h({__name:"nested",setup(c){const l=E(),r=()=>{l(e(f,{nested:!0},null),{title:"嵌套嵌套,还是嵌套"})};return(t,a)=>{const u=g;return b(),v("div",ie,[e(u,{onClick:r},{default:s(()=>a[0]||(a[0]=[i("打开弹窗")])),_:1})])}}}),ue={class:"flex gap-20px flex-wrap"},f=h({__name:"dialog-content",props:P({nested:{type:Boolean,default:!1},count:{default:0}},{modelValue:{},modelModifiers:{}}),emits:P(["say"],["update:modelValue"]),setup(c){W("nested",c.nested),W("content","来自Content的🩷~");const r=z("depth",0);W("depth",r+1);const t=J(!1);console.log("来自vue 实例的全局属性",$().appContext.config.globalProperties.$panda);const a=()=>{var m,n;(n=(m=t.componentRef)==null?void 0:m.value)==null||n.resetPosition()},u=M(c,"modelValue");return(m,n)=>{const p=g,D=A,w=Y;return b(),v(T,null,[d("div",ue,[e(p,{onClick:n[0]||(n[0]=x=>o(t).destroy())},{default:s(()=>n[7]||(n[7]=[i("destroy")])),_:1}),e(p,{onClick:n[1]||(n[1]=x=>o(t).destroyWithReject())},{default:s(()=>n[8]||(n[8]=[i("destroyWithReject")])),_:1}),e(p,{onClick:n[2]||(n[2]=x=>o(t).destroyWithResolve())},{default:s(()=>n[9]||(n[9]=[i("destroyWithResolve")])),_:1}),e(p,{onClick:n[3]||(n[3]=x=>o(t).hide())},{default:s(()=>n[10]||(n[10]=[i("hide")])),_:1}),e(p,{onClick:n[4]||(n[4]=x=>o(t).show())},{default:s(()=>n[11]||(n[11]=[i("show(😯已经show了)")])),_:1}),e(p,{onClick:a},{default:s(()=>n[12]||(n[12]=[i("弹窗位置复原(用于示例原生组件库暴露属性)")])),_:1}),e(p,{onClick:n[5]||(n[5]=x=>m.$emit("say","panda"))},{default:s(()=>n[13]||(n[13]=[i("emit一个事件,value:'panda'")])),_:1})]),e(D),m.nested?(b(),v(T,{key:0},[e(D,null,{default:s(()=>n[14]||(n[14]=[i("来一场无止境的嵌套吧")])),_:1}),n[15]||(n[15]=d("p",null,"当弹窗嵌套过多页面开始出现闪烁,并不是这个库的问题,element-plus官网也有这个问题😄",-1)),d("p",null,"弹窗深度: "+B(o(r)),1),e(G)],64)):V("",!0),e(D,null,{default:s(()=>[i("关于jsx响应式 "+B(m.count),1)]),_:1}),d("div",null,[e(w,{modelValue:u.value,"onUpdate:modelValue":n[6]||(n[6]=x=>u.value=x)},null,8,["modelValue"])])],64)}}}),re={class:"flex justify-center items-center"},de=h({__name:"reactive-component",setup(c){const l=F(0);setInterval(()=>{l.value++},1e3);const r=E(),t=()=>{r(e(f,{modelValue:u.name,"onUpdate:modelValue":m=>u.name=m,count:l.value},null))},a=()=>{r(H(()=>e(f,{modelValue:u.name,"onUpdate:modelValue":m=>u.name=m,count:l.value},null)))},u=L({name:"panda"});return(m,n)=>{const p=A,D=g;return b(),v("div",null,[i(B(u)+" ",1),e(p),i(" "+B(l.value)+" ",1),e(p),d("div",re,[e(D,{onClick:t},{default:s(()=>n[0]||(n[0]=[i("打开非响应性式弹窗")])),_:1}),e(D,{onClick:a},{default:s(()=>n[1]||(n[1]=[i("打开响应式弹窗")])),_:1})]),e(p)])}}}),pe=`<template>
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
`,me={class:"flex justify-center items-center"},ce=h({__name:"other-ui",setup(c){const l=K(),r=()=>{l(e(f,null,null),{title:"hello world",attrs:{size:"50vw"}})},t=ee(),a=()=>{t(e(f,null,null))},u=te(),m=()=>{u(e(f,null,null))};return(n,p)=>{const D=g,w=A;return b(),v("div",null,[d("div",me,[e(D,{onClick:r},{default:s(()=>p[0]||(p[0]=[i("打开el-drawer")])),_:1}),e(D,{onClick:a},{default:s(()=>p[1]||(p[1]=[i("打开vant-popup")])),_:1}),e(D,{onClick:m},{default:s(()=>p[2]||(p[2]=[i("打开vant-popup(从底部弹出)")])),_:1})]),e(w),p[3]||(p[3]=d("p",{class:"text-center"},"欢迎PR,或者联系我以提供更多组件的适配",-1))])}}}),ve=`<template>
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
`,be={class:"flex justify-center items-center"},fe=h({__name:"communication",setup(c){const l=E(),r=()=>{l(e(f,{onSay:t=>{console.log(t)}},null),{title:"hello world"})};return(t,a)=>{const u=g;return b(),v("div",be,[e(u,{onClick:r},{default:s(()=>a[0]||(a[0]=[i("打开弹窗")])),_:1})])}}}),ge=`<template>
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
`,he={class:"flex justify-center items-center"},De=h({__name:"native-slots",setup(c){const l=E(),r=()=>{const t=l(e(f,null,null),{title:"",slots:{header:()=>e("div",{class:"text-red text-30px"},[i("自定义头部")]),footer:()=>e("div",{class:"flex justify-center items-center gap-20px"},[e(g,{type:"primary",onClick:()=>t.destroyWithResolve("ok")},{default:()=>[i("确定")]}),e(g,{type:"default",onClick:()=>t.destroyWithReject("cancel")},{default:()=>[i("取消")]})])}})};return(t,a)=>{const u=g;return b(),v("div",he,[e(u,{onClick:r},{default:s(()=>a[0]||(a[0]=[i("打开弹窗")])),_:1})])}}}),Ce=`<template>
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
`,ye={class:"flex justify-center items-center"},ke=h({__name:"native-attributes",setup(c){const l=E(),r=()=>{l(e(f,null,null),{title:"组件原生属性(尝试拖拽我试试)",attrs:{modal:!0,modalClass:"custom-modal",appendToBody:!0,lockScroll:!0,openDelay:0,closeDelay:0,closeOnClickModal:!0,closeOnPressEscape:!0,showClose:!0,beforeClose:t=>{console.log("👹我将阻止你的关闭👹")},draggable:!0,alignCenter:!0}})};return(t,a)=>{const u=g;return b(),v("div",ye,[e(u,{onClick:r},{default:s(()=>a[0]||(a[0]=[i("打开弹窗")])),_:1})])}}}),_e=`<template>
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
`,xe=`<template>
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
`,Ee={class:"flex justify-center items-center"},Be=h({__name:"showhide",setup(c){const l=E();let r;const t=()=>{r=l(e(f,null,null),{title:"hello world",attrs:{"close-on-click-modal":!1}}),r.hide()};return t(),(a,u)=>{const m=g;return b(),v("div",Ee,[e(m,{onClick:u[0]||(u[0]=n=>o(r).show())},{default:s(()=>u[3]||(u[3]=[i("显示弹窗")])),_:1}),e(m,{onClick:u[1]||(u[1]=n=>o(r).hide())},{default:s(()=>u[4]||(u[4]=[i("隐藏弹窗")])),_:1}),e(m,{onClick:u[2]||(u[2]=n=>t())},{default:s(()=>u[5]||(u[5]=[i("重新创建一个弹窗🌟")])),_:1})])}}}),we=`<template>
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
`,We={class:"flex justify-center items-center"},Ze=h({__name:"base",setup(c){const l=E(),r=()=>{l(e(f,null,null),{title:"hello world"})};return(t,a)=>{const u=g;return b(),v("div",We,[e(u,{onClick:r},{default:s(()=>a[0]||(a[0]=[i("打开弹窗")])),_:1})])}}}),Ae=`<script lang="tsx" setup>
import { useConsumer } from "vue3-command-component";
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
  <el-divider>关于jsx响应式 {{ count }}</el-divider>
  <div>
    <el-input v-model="model"></el-input>
  </div>
</template>

<style lang="scss" scoped></style>
`,Ve=JSON.parse('{"title":"常规用法","description":"","frontmatter":{},"headers":[],"relativePath":"example/base.md","filePath":"example/base.md"}'),je={name:"example/base.md"},Fe=Object.assign(je,{setup(c){const l=F(!0);return(r,t)=>{const a=I("ClientOnly");return b(),v("div",null,[t[9]||(t[9]=Z("",8)),C(e(o(k),null,null,512),[[y,l.value]]),e(a,null,{default:s(()=>[e(o(_),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{l.value=!1}),vueCode:o(Ae)},{vue:s(()=>[e(f)]),_:1},8,["vueCode"])]),_:1}),t[10]||(t[10]=Z("",4)),C(e(o(k),null,null,512),[[y,l.value]]),e(a,null,{default:s(()=>[e(o(_),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[1]||(t[1]=()=>{l.value=!1}),vueCode:o(we)},{vue:s(()=>[e(Ze)]),_:1},8,["vueCode"])]),_:1}),t[11]||(t[11]=d("h2",{id:"显示和隐藏",tabindex:"-1"},[i("显示和隐藏 "),d("a",{class:"header-anchor",href:"#显示和隐藏","aria-label":'Permalink to "显示和隐藏"'},"​")],-1)),t[12]||(t[12]=d("p",null,[i("隐藏"),d("code",null,"hide"),i("只会隐藏掉组件,不会进行真正的销毁.")],-1)),C(e(o(k),null,null,512),[[y,l.value]]),e(a,null,{default:s(()=>[e(o(_),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[2]||(t[2]=()=>{l.value=!1}),vueCode:o(xe)},{vue:s(()=>[e(Be)]),_:1},8,["vueCode"])]),_:1}),t[13]||(t[13]=d("h2",{id:"嵌套",tabindex:"-1"},[i("嵌套 "),d("a",{class:"header-anchor",href:"#嵌套","aria-label":'Permalink to "嵌套"'},"​")],-1)),t[14]||(t[14]=d("p",null,"可以开始你的无限套娃之旅了~",-1)),C(e(o(k),null,null,512),[[y,l.value]]),e(a,null,{default:s(()=>[e(o(_),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[3]||(t[3]=()=>{l.value=!1}),vueCode:o(_e)},{vue:s(()=>[e(G)]),_:1},8,["vueCode"])]),_:1}),t[15]||(t[15]=d("h2",{id:"原生组件特性",tabindex:"-1"},[i("原生组件特性 "),d("a",{class:"header-anchor",href:"#原生组件特性","aria-label":'Permalink to "原生组件特性"'},"​")],-1)),t[16]||(t[16]=d("p",null,"支持原生组件所有的属性和事件,方法.",-1)),C(e(o(k),null,null,512),[[y,l.value]]),e(a,null,{default:s(()=>[e(o(_),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[4]||(t[4]=()=>{l.value=!1}),vueCode:o(Ce)},{vue:s(()=>[e(ke)]),_:1},8,["vueCode"])]),_:1}),t[17]||(t[17]=d("h2",{id:"原生组件插槽",tabindex:"-1"},[i("原生组件插槽 "),d("a",{class:"header-anchor",href:"#原生组件插槽","aria-label":'Permalink to "原生组件插槽"'},"​")],-1)),t[18]||(t[18]=d("p",null,"支持原生组件所有的插槽,包括具名插槽和作用域插槽.",-1)),C(e(o(k),null,null,512),[[y,l.value]]),e(a,null,{default:s(()=>[e(o(_),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[5]||(t[5]=()=>{l.value=!1}),vueCode:o(ge)},{vue:s(()=>[e(De)]),_:1},8,["vueCode"])]),_:1}),t[19]||(t[19]=d("h2",{id:"通信",tabindex:"-1"},[i("通信 "),d("a",{class:"header-anchor",href:"#通信","aria-label":'Permalink to "通信"'},"​")],-1)),t[20]||(t[20]=d("p",null,"你可以像往常一样,使用传统的emit来进行单向数据流的方式来进行通信. 然而下一章中,你会认识到一种更优雅的通信方式,那就是promise特性的弹窗.",-1)),t[21]||(t[21]=d("p",null,"打开弹窗emit一个事件吧,它虽然不如promise方式优雅,但是它可以不断的向外部发送消息,而promise仅限一次.",-1)),C(e(o(k),null,null,512),[[y,l.value]]),e(a,null,{default:s(()=>[e(o(_),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[6]||(t[6]=()=>{l.value=!1}),vueCode:o(ve)},{vue:s(()=>[e(fe)]),_:1},8,["vueCode"])]),_:1}),t[22]||(t[22]=Z("",6)),C(e(o(k),null,null,512),[[y,l.value]]),e(a,null,{default:s(()=>[e(o(_),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[7]||(t[7]=()=>{l.value=!1}),vueCode:o(pe)},{vue:s(()=>[e(ce)]),_:1},8,["vueCode"])]),_:1}),t[23]||(t[23]=d("h2",{id:"响应式组件",tabindex:"-1"},[i("响应式组件 "),d("a",{class:"header-anchor",href:"#响应式组件","aria-label":'Permalink to "响应式组件"'},"​")],-1)),t[24]||(t[24]=d("p",null,[i("由于jsx的书写方式,上述所有示例都有一个严重的缺陷,就是"),d("code",null,"DialogContent"),i("组件的视图是无法根据props数据的变化进行更新的,这个时候你就需要JSXReactive来包裹你的jsx")],-1)),C(e(o(k),null,null,512),[[y,l.value]]),e(a,null,{default:s(()=>[e(o(_),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[8]||(t[8]=()=>{l.value=!1}),vueCode:o(ae)},{vue:s(()=>[e(de)]),_:1},8,["vueCode"])]),_:1})])}}});export{Ve as __pageData,Fe as default};
