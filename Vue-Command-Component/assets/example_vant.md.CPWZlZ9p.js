import{j as F,r as v,C as y,E as b,k as n,B as s,I as i,G as l,u as a,W as P,aW as V,t as D,O as d,v as A}from"./chunks/framework.Dr0ZuDOg.js";import{O as E,E as O}from"./chunks/index.DB_ntYdK.js";import{u as T,a as w}from"./chunks/index.DaMMoRl_.js";import{u as W,_ as N}from"./chunks/DialogContent.vue_vue_type_script_setup_true_lang.C-idPmwU.js";import{a as S,E as L,F as Z,B as I,C as U}from"./chunks/theme.a7z_s1GA.js";const j=`<template>
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
`,q=F({__name:"vant",setup(x){const e=W(),k=T({}),t=w(),c=()=>{k(n(N,null,null),{attrs:{position:"center",round:!0,closeable:!0,style:{width:"375px",height:"667px"}}})},r=v(""),h=v(""),_=[{text:e.provinces[0],value:"330000",children:[{text:e.cities[0],value:"330100"}]},{text:e.provinces[1],value:"320000",children:[{text:e.cities[1],value:"320100"}]}],f=()=>{const p=t(n("div",{style:"padding: 20px;"},[n("h3",null,[e.bottomPopupTitle]),n("p",null,[e.bottomPopupDescription]),n(I,{type:"primary",onClick:()=>{p.destroy()},style:"margin-top: 20px; width: 100%;"},{default:()=>[e.close]})]))},g=()=>{const p=t(n(U,{modelValue:h.value,"onUpdate:modelValue":o=>h.value=o,title:e.selectArea,options:_,onClose:()=>{p.destroy()},onFinish:({selectedOptions:o})=>{r.value=o.map(u=>u.text).join("/"),p.destroy()}},null),{appendTo:"body",attrs:{round:!0,style:{}}})};return(p,o)=>{const u=S,m=L,C=Z;return b(),y("div",null,[n(u,{onClick:c},{default:i(()=>[s(l(a(e).openVantPopup),1)]),_:1}),n(m),n(m,null,{default:i(()=>[s(l(a(e).bottomPopup),1)]),_:1}),n(u,{onClick:f},{default:i(()=>[s(l(a(e).openBottomPopup),1)]),_:1}),n(m,null,{default:i(()=>[s(l(a(e).areaPickerExample),1)]),_:1}),s(" "+l(r.value)+" "+l(h.value)+" ",1),n(C,{modelValue:r.value,"onUpdate:modelValue":o[0]||(o[0]=B=>r.value=B),"is-link":"",readonly:"",label:a(e).area,placeholder:a(e).selectArea,onClick:g},null,8,["modelValue","label","placeholder"])])}}}),X=JSON.parse('{"title":"Vant示例","description":"","frontmatter":{},"headers":[],"relativePath":"example/vant.md","filePath":"example/vant.md"}'),G={name:"example/vant.md"},$=Object.assign(G,{setup(x){const e=v(!0);return(k,t)=>{const c=P("ClientOnly");return b(),y("div",null,[t[1]||(t[1]=V(`<h1 id="vant示例" tabindex="-1">Vant示例 <a class="header-anchor" href="#vant示例" aria-label="Permalink to &quot;Vant示例&quot;">​</a></h1><p>本页面展示如何使用Vant UI组件库的适配器。</p><p>要使用Vant的命令式组件，需要安装<code>@vue-cmd/vant</code>包：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用npm</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @vue-cmd/vant</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vant</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用pnpm</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @vue-cmd/vant</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vant</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用yarn</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @vue-cmd/vant</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vant</span></span></code></pre></div><h2 id="基础使用" tabindex="-1">基础使用 <a class="header-anchor" href="#基础使用" aria-label="Permalink to &quot;基础使用&quot;">​</a></h2><p>Vant适配器目前支持Popup组件。下面是一个基本的使用示例：</p>`,6)),D(n(a(E),null,null,512),[[A,e.value]]),n(c,null,{default:i(()=>[n(a(O),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{e.value=!1}),vueCode:a(j)},{vue:i(()=>[n(q)]),_:1},8,["vueCode"])]),_:1}),t[2]||(t[2]=d("h2",{id:"属性说明",tabindex:"-1"},[s("属性说明 "),d("a",{class:"header-anchor",href:"#属性说明","aria-label":'Permalink to "属性说明"'},"​")],-1)),t[3]||(t[3]=d("p",null,[s("更多属性请参考 "),d("a",{href:"https://vant-ui.github.io/vant/#/zh-CN/popup#api",target:"_blank",rel:"noreferrer"},"Vant Popup文档"),s("。")],-1))])}}});export{X as __pageData,$ as default};
