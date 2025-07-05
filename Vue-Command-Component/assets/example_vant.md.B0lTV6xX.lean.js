import{G as t,K as C,d as V,p as k,c as y,o as g,a as i,w as v,t as m,C as x,aN as B,ac as D,j as p,ad as P,k as h}from"./chunks/framework.C_gkk_1N.js";import{ap as E,a7 as A,ag as w,ai as T,al as N,am as S}from"./chunks/index.C8NBfs2y.js";import{P as W,F as O,C as Z}from"./chunks/theme.D4WTkJiL.js";const I=`<template>
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
      // 这个文档引入较多组件库,样式影响太严重,所以我直接把弹窗挂载到body上规避影响,你实际使用时可能并不需要
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
`,F={round:!0,lockScroll:!0},U=(r,{componentRef:s,visible:o,onMounted:n,config:a,consumer:d})=>{const{attrs:u,...l}=a.value,e=()=>{d.value.destroy()};return t(W,C({ref:s,show:o.value,onClickCloseIcon:e,onVnodeMounted:n},F,l,u),{default:()=>r,...a.value.slots})},j=E({render:U,defaultConfig:{attrs:F}}),q=V({__name:"vant",setup(r){const s=j({}),o=()=>{s(t(T,null,null),{attrs:{position:"center",round:!0,closeable:!0,style:{width:"375px",height:"667px"}}})},n=k(""),a=k(""),d=[{text:"浙江省",value:"330000",children:[{text:"杭州市",value:"330100"}]},{text:"江苏省",value:"320000",children:[{text:"南京市",value:"320100"}]}],u=()=>{const l=s(t(Z,{modelValue:a.value,"onUpdate:modelValue":e=>a.value=e,title:"请选择所在地区",options:d,onClose:()=>{l.destroy()},onFinish:({selectedOptions:e})=>{n.value=e.map(c=>c.text).join("/"),l.destroy()}},null),{position:"bottom",appendTo:"body",attrs:{round:!0,style:{width:"375px",height:"667px"}}})};return(l,e)=>{const c=A,f=w,_=O;return g(),y("div",null,[t(c,{onClick:o},{default:v(()=>e[1]||(e[1]=[i("打开Vant弹窗")])),_:1,__:[1]}),t(f),i(" "+m(n.value)+" "+m(a.value)+" ",1),t(_,{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=b=>n.value=b),"is-link":"",readonly:"",label:"地区",placeholder:"请选择所在地区",onClick:u},null,8,["modelValue"])])}}}),z=JSON.parse('{"title":"Vant示例","description":"","frontmatter":{},"headers":[],"relativePath":"example/vant.md","filePath":"example/vant.md"}'),G={name:"example/vant.md"},L=Object.assign(G,{setup(r){const s=k(!0);return(o,n)=>{const a=x("ClientOnly");return g(),y("div",null,[n[1]||(n[1]=B("",6)),D(t(h(N),null,null,512),[[P,s.value]]),t(a,null,{default:v(()=>[t(h(S),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:n[0]||(n[0]=()=>{s.value=!1}),vueCode:h(I)},{vue:v(()=>[t(q)]),_:1},8,["vueCode"])]),_:1}),n[2]||(n[2]=p("h2",{id:"属性说明",tabindex:"-1"},[i("属性说明 "),p("a",{class:"header-anchor",href:"#属性说明","aria-label":'Permalink to "属性说明"'},"​")],-1)),n[3]||(n[3]=p("p",null,[i("更多属性请参考 "),p("a",{href:"https://vant-ui.github.io/vant/#/zh-CN/popup#api",target:"_blank",rel:"noreferrer"},"Vant Popup文档"),i("。")],-1))])}}});export{z as __pageData,L as default};
