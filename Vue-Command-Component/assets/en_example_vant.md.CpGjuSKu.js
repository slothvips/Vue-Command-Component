import{j as F,r as v,C as y,E as f,k as n,B as s,I as i,G as l,u as a,W as P,aW as V,t as D,O as c,v as T}from"./chunks/framework.Dr0ZuDOg.js";import{O as A,E}from"./chunks/index.DB_ntYdK.js";import{u as O,a as w}from"./chunks/index.DaMMoRl_.js";import{u as W,_ as S}from"./chunks/DialogContent.vue_vue_type_script_setup_true_lang.CqhwfsyT.js";import{a as U,E as N,F as Z,B as L,C as I}from"./chunks/theme.a7z_s1GA.js";const j=`<template>
  <div>
    <el-button @click="openPopup">{{ text.openVantPopup }}</el-button>
    <el-divider />
    <el-divider>{{ text.bottomPopup }}</el-divider>
    <el-button @click="openBottomPopup">{{ text.openBottomPopup }}</el-button>
    <el-divider>{{ text.areaPickerExample }}</el-divider>
    {{ fieldValue }}
    {{ cascaderValue }}
    <van-field
      v-model="fieldValue"
      is-link
      readonly
      :label="text.area"
      :placeholder="text.selectArea"
      @click="openPopup2"
    />
  </div>
</template>

<script setup lang="tsx">
import { usePopup, usePopupOnBottom } from "@vue-cmd/vant";
import DialogContent from "./shared/DialogContent.vue";
import { ref } from "vue";
import { useDemoLocale } from "./shared/locale";

const text = useDemoLocale();
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
const options = [
  {
    text: text.provinces[0],
    value: "330000",
    children: [{ text: text.cities[0], value: "330100" }],
  },
  {
    text: text.provinces[1],
    value: "320000",
    children: [{ text: text.cities[1], value: "320100" }],
  },
];

const openBottomPopup = () => {
  const consumer = popupOnBottom(
    <div style="padding: 20px;">
      <h3>{text.bottomPopupTitle}</h3>
      <p>{text.bottomPopupDescription}</p>
      <van-button
        type="primary"
        onClick={() => {
          consumer!.destroy();
        }}
        style="margin-top: 20px; width: 100%;"
      >
        {text.close}
      </van-button>
    </div>,
  );
};

const openPopup2 = () => {
  const consumer = popupOnBottom(
    <van-cascader
      v-model={cascaderValue.value}
      title={text.selectArea}
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
      // This mainly avoids style interference; you may not need it in real usage
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
`,q=F({__name:"vant",setup(b){const e=W(),k=O({}),t=w(),d=()=>{k(n(S,null,null),{attrs:{position:"center",round:!0,closeable:!0,style:{width:"375px",height:"667px"}}})},r=v(""),h=v(""),g=[{text:e.provinces[0],value:"330000",children:[{text:e.cities[0],value:"330100"}]},{text:e.provinces[1],value:"320000",children:[{text:e.cities[1],value:"320100"}]}],x=()=>{const p=t(n("div",{style:"padding: 20px;"},[n("h3",null,[e.bottomPopupTitle]),n("p",null,[e.bottomPopupDescription]),n(L,{type:"primary",onClick:()=>{p.destroy()},style:"margin-top: 20px; width: 100%;"},{default:()=>[e.close]})]))},_=()=>{const p=t(n(I,{modelValue:h.value,"onUpdate:modelValue":o=>h.value=o,title:e.selectArea,options:g,onClose:()=>{p.destroy()},onFinish:({selectedOptions:o})=>{r.value=o.map(u=>u.text).join("/"),p.destroy()}},null),{appendTo:"body",attrs:{round:!0,style:{}}})};return(p,o)=>{const u=U,m=N,B=Z;return f(),y("div",null,[n(u,{onClick:d},{default:i(()=>[s(l(a(e).openVantPopup),1)]),_:1}),n(m),n(m,null,{default:i(()=>[s(l(a(e).bottomPopup),1)]),_:1}),n(u,{onClick:x},{default:i(()=>[s(l(a(e).openBottomPopup),1)]),_:1}),n(m,null,{default:i(()=>[s(l(a(e).areaPickerExample),1)]),_:1}),s(" "+l(r.value)+" "+l(h.value)+" ",1),n(B,{modelValue:r.value,"onUpdate:modelValue":o[0]||(o[0]=C=>r.value=C),"is-link":"",readonly:"",label:a(e).area,placeholder:a(e).selectArea,onClick:_},null,8,["modelValue","label","placeholder"])])}}}),X=JSON.parse('{"title":"Vant","description":"","frontmatter":{},"headers":[],"relativePath":"en/example/vant.md","filePath":"en/example/vant.md"}'),G={name:"en/example/vant.md"},$=Object.assign(G,{setup(b){const e=v(!0);return(k,t)=>{const d=P("ClientOnly");return f(),y("div",null,[t[1]||(t[1]=V(`<h1 id="vant" tabindex="-1">Vant <a class="header-anchor" href="#vant" aria-label="Permalink to &quot;Vant&quot;">​</a></h1><p>This page shows how to use the adapter for the Vant UI component library.</p><p>To use imperative components for Vant, install the <code>@vue-cmd/vant</code> package:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># npm</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @vue-cmd/vant</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vant</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># pnpm</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @vue-cmd/vant</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vant</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># yarn</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @vue-cmd/vant</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vant</span></span></code></pre></div><h2 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-label="Permalink to &quot;Basic Usage&quot;">​</a></h2><p>The Vant adapter currently supports the Popup component. The following is a basic usage example:</p>`,6)),D(n(a(A),null,null,512),[[T,e.value]]),n(d,null,{default:i(()=>[n(a(E),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{e.value=!1}),vueCode:a(j)},{vue:i(()=>[n(q)]),_:1},8,["vueCode"])]),_:1}),t[2]||(t[2]=c("h2",{id:"props-reference",tabindex:"-1"},[s("Props Reference "),c("a",{class:"header-anchor",href:"#props-reference","aria-label":'Permalink to "Props Reference"'},"​")],-1)),t[3]||(t[3]=c("p",null,[s("For more props, refer to the "),c("a",{href:"https://vant-ui.github.io/vant/#/en-US/popup#api",target:"_blank",rel:"noreferrer"},"Vant Popup documentation"),s(".")],-1))])}}});export{X as __pageData,$ as default};
