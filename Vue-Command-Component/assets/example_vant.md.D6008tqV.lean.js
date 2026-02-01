import{k as s,q as x,j as E,r as k,C as F,E as P,B as i,I as u,G as g,W as w,aW as D,t as j,O as m,v as A,u as b}from"./chunks/framework.BdKND-4d.js";import{e as S,_ as T,O as W,E as N}from"./chunks/index.CInZOI4_.js";import{m as I,P as U,a as Z,E as q,F as G,B as L,C as Q}from"./chunks/theme.DPtADWyO.js";const Y=`<template>
  <div>
    <el-button @click="openPopup">打开Vant弹窗</el-button>
    <!-- 分割线 -->
    <el-divider />
    <el-divider>底部弹窗</el-divider>
    <el-button @click="openBottomPopup">打开底部弹窗</el-button>
    <el-divider>示例:地区选择</el-divider>
    {{ fieldValue }}
    {{ cascaderValue }}
    <van-field
      v-model="fieldValue"
      is-link
      readonly
      label="地区"
      placeholder="请选择所在地区"
      @click="openPopup2"
    />
  </div>
</template>

<script setup lang="tsx">
import { usePopup, usePopupOnBottom } from "@vue-cmd/vant";
import DialogContent from "./shared/DialogContent.vue";
import { ref } from "vue";

const popup = usePopup({});
const popupOnBottom = usePopupOnBottom();

const openPopup = () => {
  popup(<DialogContent />, {
    attrs: {
      position: "center",
      round: true,
      closeable: true,
      style: {
        width: "375px",
        height: "667px",
      },
    },
  });
};

const fieldValue = ref("");
const cascaderValue = ref("");
// 选项列表，children 代表子选项，支持多级嵌套
const options = [
  {
    text: "浙江省",
    value: "330000",
    children: [{ text: "杭州市", value: "330100" }],
  },
  {
    text: "江苏省",
    value: "320000",
    children: [{ text: "南京市", value: "320100" }],
  },
];

const openBottomPopup = () => {
  const consumer = popupOnBottom(
    <div style="padding: 20px;">
      <h3>底部弹出示例</h3>
      <p>这是一个从底部弹出的弹窗</p>
      <van-button
        type="primary"
        onClick={() => {
          consumer!.destroy();
        }}
        style="margin-top: 20px; width: 100%;"
      >
        关闭
      </van-button>
    </div>,
  );
};

const openPopup2 = () => {
  const consumer = popupOnBottom(
    <van-cascader
      v-model={cascaderValue.value}
      title="请选择所在地区"
      options={options}
      onClose={() => {
        consumer!.destroy();
      }}
      onFinish={({ selectedOptions }: any) => {
        fieldValue.value = selectedOptions
          .map((option: any) => option.text)
          .join("/");
        consumer!.destroy();
      }}
    />,
    {
      // 这里主要是规避样式干扰,你实际使用时可能并不需要
      appendTo: "body",
      attrs: {
        round: true,
        style: {},
      },
    },
  );
};
<\/script>

<style lang="scss" scoped></style>
`;function z(e,n){if(e==null)return{};var o={};for(var t in e)if({}.hasOwnProperty.call(e,t)){if(n.includes(t))continue;o[t]=e[t]}return o}function M(e,n){if(e==null)return{};var o,t,l=z(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],n.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(l[o]=e[o])}return l}function d(e){"@babel/helpers - typeof";return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},d(e)}function R(e,n){if(d(e)!="object"||!e)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var t=o.call(e,n);if(d(t)!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function K(e){var n=R(e,"string");return d(n)=="symbol"?n:n+""}function X(e,n,o){return(n=K(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function _(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),o.push.apply(o,t)}return o}function J(e){for(var n=1;n<arguments.length;n++){var o=arguments[n]!=null?arguments[n]:{};n%2?_(Object(o),!0).forEach(function(t){X(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):_(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}const H=["attrs"],C={round:!0,lockScroll:!0},$=(e,{componentRef:n,visible:o,onMounted:t,config:l,consumer:r})=>{const c=l.value,{attrs:v}=c,y=M(c,H),p=()=>{r.value.destroy()};return s(U,x({ref:n,show:o.value,"onUpdate:show":a=>o.value=a,onClosed:p,onVnodeMounted:t},C,y,v),J({default:()=>e},l.value.slots))},B=S({render:$,defaultConfig:{attrs:C}}),ee=(e={})=>{const n=B(e);return(o,t={})=>n(o,I({},t,{attrs:{position:"bottom",style:{width:"100vw"}}}))},ne=E({__name:"vant",setup(e){const n=B({}),o=ee(),t=()=>{n(s(T,null,null),{attrs:{position:"center",round:!0,closeable:!0,style:{width:"375px",height:"667px"}}})},l=k(""),r=k(""),c=[{text:"浙江省",value:"330000",children:[{text:"杭州市",value:"330100"}]},{text:"江苏省",value:"320000",children:[{text:"南京市",value:"320100"}]}],v=()=>{const p=o(s("div",{style:"padding: 20px;"},[s("h3",null,[i("底部弹出示例")]),s("p",null,[i("这是一个从底部弹出的弹窗")]),s(L,{type:"primary",onClick:()=>{p.destroy()},style:"margin-top: 20px; width: 100%;"},{default:()=>[i("关闭")]})]))},y=()=>{const p=o(s(Q,{modelValue:r.value,"onUpdate:modelValue":a=>r.value=a,title:"请选择所在地区",options:c,onClose:()=>{p.destroy()},onFinish:({selectedOptions:a})=>{l.value=a.map(h=>h.text).join("/"),p.destroy()}},null),{appendTo:"body",attrs:{round:!0,style:{}}})};return(p,a)=>{const h=Z,f=q,O=G;return P(),F("div",null,[s(h,{onClick:t},{default:u(()=>a[1]||(a[1]=[i("打开Vant弹窗")])),_:1,__:[1]}),s(f),s(f,null,{default:u(()=>a[2]||(a[2]=[i("底部弹窗")])),_:1,__:[2]}),s(h,{onClick:v},{default:u(()=>a[3]||(a[3]=[i("打开底部弹窗")])),_:1,__:[3]}),s(f,null,{default:u(()=>a[4]||(a[4]=[i("示例:地区选择")])),_:1,__:[4]}),i(" "+g(l.value)+" "+g(r.value)+" ",1),s(O,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=V=>l.value=V),"is-link":"",readonly:"",label:"地区",placeholder:"请选择所在地区",onClick:y},null,8,["modelValue"])])}}}),le=JSON.parse('{"title":"Vant示例","description":"","frontmatter":{},"headers":[],"relativePath":"example/vant.md","filePath":"example/vant.md"}'),te={name:"example/vant.md"},ie=Object.assign(te,{setup(e){const n=k(!0);return(o,t)=>{const l=w("ClientOnly");return P(),F("div",null,[t[1]||(t[1]=D("",6)),j(s(b(W),null,null,512),[[A,n.value]]),s(l,null,{default:u(()=>[s(b(N),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{n.value=!1}),vueCode:b(Y)},{vue:u(()=>[s(ne)]),_:1},8,["vueCode"])]),_:1}),t[2]||(t[2]=m("h2",{id:"属性说明",tabindex:"-1"},[i("属性说明 "),m("a",{class:"header-anchor",href:"#属性说明","aria-label":'Permalink to "属性说明"'},"​")],-1)),t[3]||(t[3]=m("p",null,[i("更多属性请参考 "),m("a",{href:"https://vant-ui.github.io/vant/#/zh-CN/popup#api",target:"_blank",rel:"noreferrer"},"Vant Popup文档"),i("。")],-1))])}}});export{le as __pageData,ie as default};
