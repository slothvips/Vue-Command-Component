import{k as l,q as P,j as D,r as k,C as b,G as g,B as r,J as m,H as f,X as E,aN as A,t as w,P as d,v as O,u as v}from"./chunks/framework.CHGQel2V.js";import{aq as T,a7 as N,ag as S,ai as W,am as j,an as I}from"./chunks/index.C_FsA9K5.js";import{P as q,F as Z,C as U}from"./chunks/theme.IeujiQgH.js";const G=`<template>
  <div>
    <el-button @click="openPopup">打开Vant弹窗</el-button>
    <!-- 分割线 -->
    <el-divider />
    {{ fieldValue }}
    {{ cascaderValue }}
    <van-field v-model="fieldValue" is-link readonly label="地区" placeholder="请选择所在地区" @click="openPopup2" />
  </div>
</template>

<script setup lang="tsx">
import { usePopup } from "@vue-cmd/vant";
import DialogContent from "./dialog-content.vue";
import { ref } from "vue";

const popup = usePopup({
});

const openPopup = () => {
  popup(
    <DialogContent />,
    {
      attrs: {
        position: 'center',
        round: true,
        closeable: true,
        style: {
          width: '375px',
          height: '667px',
        }
      },
    }
  );
};


const fieldValue = ref('');
const cascaderValue = ref('');
// 选项列表，children 代表子选项，支持多级嵌套
const options = [
  {
    text: '浙江省',
    value: '330000',
    children: [{ text: '杭州市', value: '330100' }],
  },
  {
    text: '江苏省',
    value: '320000',
    children: [{ text: '南京市', value: '320100' }],
  },
];

const openPopup2 = () => {
  const consumer = popup(
    <van-cascader
      v-model={cascaderValue.value}
      title="请选择所在地区"
      options={options}
      onClose={() => {
        consumer!.destroy();
      }}
      onFinish={({ selectedOptions }: any) => {
        fieldValue.value = selectedOptions.map((option: any) => option.text).join('/');
        consumer!.destroy();
      }}
    />,
    {
      position: 'bottom',
      // 这里主要是规避样式干扰,你实际使用时可能并不需要
      appendTo: 'body',
      attrs: {
        round: true,
        style: {
          width: '375px',
          height: '667px',
        }
      },
    }
  );
};
<\/script>

<style lang="scss" scoped></style>
`;var M=Object.defineProperty,c=Object.getOwnPropertySymbols,F=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,y=(t,n,a)=>n in t?M(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,Q=(t,n)=>{for(var a in n||(n={}))F.call(n,a)&&y(t,a,n[a]);if(c)for(var a of c(n))_.call(n,a)&&y(t,a,n[a]);return t},Y=(t,n)=>{var a={};for(var e in t)F.call(t,e)&&n.indexOf(e)<0&&(a[e]=t[e]);if(t!=null&&c)for(var e of c(t))n.indexOf(e)<0&&_.call(t,e)&&(a[e]=t[e]);return a};const C={round:!0,lockScroll:!0},z=(t,{componentRef:n,visible:a,onMounted:e,config:i,consumer:h})=>{const u=i.value,{attrs:o}=u,s=Y(u,["attrs"]),p=()=>{h.value.destroy()};return l(q,P({ref:n,show:a.value,onClickCloseIcon:p,onVnodeMounted:e},C,s,o),Q({default:()=>t},i.value.slots))},L=T({render:z,defaultConfig:{attrs:C}}),R=D({__name:"vant",setup(t){const n=L({}),a=()=>{n(l(W,null,null),{attrs:{position:"center",round:!0,closeable:!0,style:{width:"375px",height:"667px"}}})},e=k(""),i=k(""),h=[{text:"浙江省",value:"330000",children:[{text:"杭州市",value:"330100"}]},{text:"江苏省",value:"320000",children:[{text:"南京市",value:"320100"}]}],u=()=>{const o=n(l(U,{modelValue:i.value,"onUpdate:modelValue":s=>i.value=s,title:"请选择所在地区",options:h,onClose:()=>{o.destroy()},onFinish:({selectedOptions:s})=>{e.value=s.map(p=>p.text).join("/"),o.destroy()}},null),{position:"bottom",appendTo:"body",attrs:{round:!0,style:{width:"375px",height:"667px"}}})};return(o,s)=>{const p=N,x=S,V=Z;return g(),b("div",null,[l(p,{onClick:a},{default:m(()=>s[1]||(s[1]=[r("打开Vant弹窗")])),_:1,__:[1]}),l(x),r(" "+f(e.value)+" "+f(i.value)+" ",1),l(V,{modelValue:e.value,"onUpdate:modelValue":s[0]||(s[0]=B=>e.value=B),"is-link":"",readonly:"",label:"地区",placeholder:"请选择所在地区",onClick:u},null,8,["modelValue"])])}}}),K=JSON.parse('{"title":"Vant示例","description":"","frontmatter":{},"headers":[],"relativePath":"example/vant.md","filePath":"example/vant.md"}'),X={name:"example/vant.md"},ee=Object.assign(X,{setup(t){const n=k(!0);return(a,e)=>{const i=E("ClientOnly");return g(),b("div",null,[e[1]||(e[1]=A("",6)),w(l(v(j),null,null,512),[[O,n.value]]),l(i,null,{default:m(()=>[l(v(I),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{n.value=!1}),vueCode:v(G)},{vue:m(()=>[l(R)]),_:1},8,["vueCode"])]),_:1}),e[2]||(e[2]=d("h2",{id:"属性说明",tabindex:"-1"},[r("属性说明 "),d("a",{class:"header-anchor",href:"#属性说明","aria-label":'Permalink to "属性说明"'},"​")],-1)),e[3]||(e[3]=d("p",null,[r("更多属性请参考 "),d("a",{href:"https://vant-ui.github.io/vant/#/zh-CN/popup#api",target:"_blank",rel:"noreferrer"},"Vant Popup文档"),r("。")],-1))])}}});export{K as __pageData,ee as default};
