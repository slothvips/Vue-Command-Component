import{j as _,C as u,E as m,k as e,I as l,B as t,G as p,u as s,r as C,W as b,aW as y,t as w,O as i,v as D}from"./chunks/framework.Dr0ZuDOg.js";import{O as F,E as B}from"./chunks/index.DB_ntYdK.js";import{u as x,a as A,b as N}from"./chunks/index.Z_7rcR0E.js";import{u as E,_ as d}from"./chunks/DialogContent.vue_vue_type_script_setup_true_lang.CqhwfsyT.js";import{a as T,N as h}from"./chunks/theme.a7z_s1GA.js";const P=`<template>
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
`,W={class:"flex justify-center items-center"},O=_({__name:"naiveui",setup(k){const a=E(),c=x(),n=()=>{c(e(h,null,{default:()=>[e(d,null,null)]}),{attrs:{style:{width:"600px"}}})},o=A(),v=()=>{o(e(d,null,null),{attrs:{style:{width:"600px"}}})},g=N(),f=()=>{g(e(h,null,{default:()=>[e(d,null,null)]}),{attrs:{drawerAttrs:{placement:"right",width:600},contentAttrs:{title:a.drawerTitle}}})};return(I,S)=>{const r=T;return m(),u("div",W,[e(r,{onClick:n},{default:l(()=>[t(p(s(a).comeOn),1)]),_:1}),e(r,{onClick:v},{default:l(()=>[t(p(s(a).comeOnPreset),1)]),_:1}),e(r,{onClick:f},{default:l(()=>[t(p(s(a).drawerButton),1)]),_:1})])}}}),q=JSON.parse('{"title":"Naive UI","description":"","frontmatter":{},"headers":[],"relativePath":"en/example/naive.md","filePath":"en/example/naive.md"}'),V={name:"en/example/naive.md"},G=Object.assign(V,{setup(k){const a=C(!0);return(c,n)=>{const o=b("ClientOnly");return m(),u("div",null,[n[1]||(n[1]=y("",5)),w(e(s(F),null,null,512),[[D,a.value]]),e(o,null,{default:l(()=>[e(s(B),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:n[0]||(n[0]=()=>{a.value=!1}),vueCode:s(P)},{vue:l(()=>[e(O)]),_:1},8,["vueCode"])]),_:1}),n[2]||(n[2]=i("h2",{id:"props-reference",tabindex:"-1"},[t("Props Reference "),i("a",{class:"header-anchor",href:"#props-reference","aria-label":'Permalink to "Props Reference"'},"​")],-1)),n[3]||(n[3]=i("p",null,[t("For more props, refer to: "),i("a",{href:"https://www.naiveui.com/en-US/os-theme/components/modal#API",target:"_blank",rel:"noreferrer"},"naive-ui modal documentation"),t(". "),i("a",{href:"https://www.naiveui.com/en-US/os-theme/components/drawer#API",target:"_blank",rel:"noreferrer"},"naive-ui drawer documentation"),t(".")],-1))])}}});export{q as __pageData,G as default};
