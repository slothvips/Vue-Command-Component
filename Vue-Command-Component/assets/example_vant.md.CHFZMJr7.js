import{k as t,q as b,j as V,r as v,C as g,G as y,B as i,J as k,H as m,X as x,aN as B,t as D,P as p,v as P,u as h}from"./chunks/framework.BtNxmiVb.js";import{ap as E,a7 as A,ag as T,ai as w,al as N,am as S}from"./chunks/index.D5cWYCeG.js";import{P as W,F as O,C as Z}from"./chunks/theme.CvCdYeWl.js";const q=`<template>
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
`,F={round:!0,lockScroll:!0},I=(r,{componentRef:s,visible:o,onMounted:n,config:a,consumer:d})=>{const{attrs:u,...l}=a.value,e=()=>{d.value.destroy()};return t(W,b({ref:s,show:o.value,onClickCloseIcon:e,onVnodeMounted:n},F,l,u),{default:()=>r,...a.value.slots})},U=E({render:I,defaultConfig:{attrs:F}}),j=V({__name:"vant",setup(r){const s=U({}),o=()=>{s(t(w,null,null),{attrs:{position:"center",round:!0,closeable:!0,style:{width:"375px",height:"667px"}}})},n=v(""),a=v(""),d=[{text:"浙江省",value:"330000",children:[{text:"杭州市",value:"330100"}]},{text:"江苏省",value:"320000",children:[{text:"南京市",value:"320100"}]}],u=()=>{const l=s(t(Z,{modelValue:a.value,"onUpdate:modelValue":e=>a.value=e,title:"请选择所在地区",options:d,onClose:()=>{l.destroy()},onFinish:({selectedOptions:e})=>{n.value=e.map(c=>c.text).join("/"),l.destroy()}},null),{position:"bottom",appendTo:"body",attrs:{round:!0,style:{width:"375px",height:"667px"}}})};return(l,e)=>{const c=A,f=T,_=O;return y(),g("div",null,[t(c,{onClick:o},{default:k(()=>e[1]||(e[1]=[i("打开Vant弹窗")])),_:1,__:[1]}),t(f),i(" "+m(n.value)+" "+m(a.value)+" ",1),t(_,{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=C=>n.value=C),"is-link":"",readonly:"",label:"地区",placeholder:"请选择所在地区",onClick:u},null,8,["modelValue"])])}}}),z=JSON.parse('{"title":"Vant示例","description":"","frontmatter":{},"headers":[],"relativePath":"example/vant.md","filePath":"example/vant.md"}'),G={name:"example/vant.md"},L=Object.assign(G,{setup(r){const s=v(!0);return(o,n)=>{const a=x("ClientOnly");return y(),g("div",null,[n[1]||(n[1]=B(`<h1 id="vant示例" tabindex="-1">Vant示例 <a class="header-anchor" href="#vant示例" aria-label="Permalink to &quot;Vant示例&quot;">​</a></h1><p>本页面展示如何使用Vant UI组件库的适配器。</p><p>要使用Vant的命令式组件，需要安装<code>@vue-cmd/core</code>和<code>@vue-cmd/vant</code>两个包：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用npm</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @vue-cmd/core</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @vue-cmd/vant</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vant</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用pnpm</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @vue-cmd/core</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @vue-cmd/vant</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vant</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用yarn</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @vue-cmd/core</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @vue-cmd/vant</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vant</span></span></code></pre></div><h2 id="基础使用" tabindex="-1">基础使用 <a class="header-anchor" href="#基础使用" aria-label="Permalink to &quot;基础使用&quot;">​</a></h2><p>Vant适配器目前支持Popup组件。下面是一个基本的使用示例：</p>`,6)),D(t(h(N),null,null,512),[[P,s.value]]),t(a,null,{default:k(()=>[t(h(S),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:n[0]||(n[0]=()=>{s.value=!1}),vueCode:h(q)},{vue:k(()=>[t(j)]),_:1},8,["vueCode"])]),_:1}),n[2]||(n[2]=p("h2",{id:"属性说明",tabindex:"-1"},[i("属性说明 "),p("a",{class:"header-anchor",href:"#属性说明","aria-label":'Permalink to "属性说明"'},"​")],-1)),n[3]||(n[3]=p("p",null,[i("更多属性请参考 "),p("a",{href:"https://vant-ui.github.io/vant/#/zh-CN/popup#api",target:"_blank",rel:"noreferrer"},"Vant Popup文档"),i("。")],-1))])}}});export{z as __pageData,L as default};
