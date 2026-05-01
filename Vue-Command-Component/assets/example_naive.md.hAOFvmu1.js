import{j as f,C as u,E as m,k as e,I as l,B as a,G as p,u as s,r as C,W as b,aW as y,t as w,O as i,v as D}from"./chunks/framework.Dr0ZuDOg.js";import{O as F,E as B}from"./chunks/index.DB_ntYdK.js";import{u as x,a as A,b as N}from"./chunks/index.Z_7rcR0E.js";import{u as E,_ as d}from"./chunks/DialogContent.vue_vue_type_script_setup_true_lang.C-idPmwU.js";import{a as T,N as h}from"./chunks/theme.a7z_s1GA.js";const O=`<template>
  <div class="flex justify-center items-center">
    <el-button @click="open">{{ text.comeOn }}</el-button>
    <el-button @click="open2">{{ text.comeOnPreset }}</el-button>
    <el-button @click="openDrawer">{{ text.drawerButton }}</el-button>
  </div>
</template>

<script setup lang="tsx">
import { useModal, useDialog, useDrawer } from "@vue-cmd/naive";
import DialogContent from "./shared/DialogContent.vue";
import { NCard } from "naive-ui";
import { useDemoLocale } from "./shared/locale";

const text = useDemoLocale();
const modal = useModal();
const open = () => {
  modal(
    <NCard>
      <DialogContent />
    </NCard>,
    {
      attrs: {
        style: {
          width: "600px",
        },
      },
    },
  );
};

const dialog = useDialog();
const open2 = () => {
  dialog(<DialogContent />, {
    attrs: {
      style: {
        width: "600px",
      },
    },
  });
};

const drawer = useDrawer();
const openDrawer = () => {
  drawer(
    <NCard>
      <DialogContent />
    </NCard>,
    {
      attrs: {
        drawerAttrs: {
          placement: "right",
          width: 600,
        },
        contentAttrs: {
          title: text.drawerTitle,
        },
      },
    },
  );
};
<\/script>

<style lang="scss" scoped></style>
`,P={class:"flex justify-center items-center"},V=f({__name:"naiveui",setup(k){const t=E(),c=x(),n=()=>{c(e(h,null,{default:()=>[e(d,null,null)]}),{attrs:{style:{width:"600px"}}})},o=A(),v=()=>{o(e(d,null,null),{attrs:{style:{width:"600px"}}})},g=N(),_=()=>{g(e(h,null,{default:()=>[e(d,null,null)]}),{attrs:{drawerAttrs:{placement:"right",width:600},contentAttrs:{title:t.drawerTitle}}})};return(S,I)=>{const r=T;return m(),u("div",P,[e(r,{onClick:n},{default:l(()=>[a(p(s(t).comeOn),1)]),_:1}),e(r,{onClick:v},{default:l(()=>[a(p(s(t).comeOnPreset),1)]),_:1}),e(r,{onClick:_},{default:l(()=>[a(p(s(t).drawerButton),1)]),_:1})])}}}),z=JSON.parse('{"title":"常规用法","description":"","frontmatter":{},"headers":[],"relativePath":"example/naive.md","filePath":"example/naive.md"}'),W={name:"example/naive.md"},G=Object.assign(W,{setup(k){const t=C(!0);return(c,n)=>{const o=b("ClientOnly");return m(),u("div",null,[n[1]||(n[1]=y(`<h1 id="常规用法" tabindex="-1">常规用法 <a class="header-anchor" href="#常规用法" aria-label="Permalink to &quot;常规用法&quot;">​</a></h1><p><code>NaiveUI</code> 的一些组件进行演示。</p><p>要是用<code>naiveui</code>的命令式组件,需要安装<code>@vue-cmd/naive</code>包.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用npm</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @vue-cmd/naive</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> naive-ui</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用pnpm</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @vue-cmd/naive</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> naive-ui</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用yarn</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @vue-cmd/naive</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> naive-ui</span></span></code></pre></div><h2 id="基础使用" tabindex="-1">基础使用 <a class="header-anchor" href="#基础使用" aria-label="Permalink to &quot;基础使用&quot;">​</a></h2>`,5)),w(e(s(F),null,null,512),[[D,t.value]]),e(o,null,{default:l(()=>[e(s(B),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:n[0]||(n[0]=()=>{t.value=!1}),vueCode:s(O)},{vue:l(()=>[e(V)]),_:1},8,["vueCode"])]),_:1}),n[2]||(n[2]=i("h2",{id:"属性说明",tabindex:"-1"},[a("属性说明 "),i("a",{class:"header-anchor",href:"#属性说明","aria-label":'Permalink to "属性说明"'},"​")],-1)),n[3]||(n[3]=i("p",null,[a("更多属性请参考: "),i("a",{href:"https://www.naiveui.com/zh-CN/os-theme/components/modal#API",target:"_blank",rel:"noreferrer"},"naive-ui modal文档"),a("。 "),i("a",{href:"https://www.naiveui.com/zh-CN/os-theme/components/drawer#API",target:"_blank",rel:"noreferrer"},"naive-ui drawer文档"),a("。")],-1))])}}});export{z as __pageData,G as default};
