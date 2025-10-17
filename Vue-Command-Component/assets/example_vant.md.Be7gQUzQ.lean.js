import{k as s,q as O,j as A,r as b,C as _,E as C,B as i,I as r,G as g,W as w,aW as T,t as W,O as h,v as S,u as f}from"./chunks/framework.BdKND-4d.js";import{F as j,_ as N,O as I,E as U}from"./chunks/index.JxdIIUY9.js";import{m as Z,P as q,a as G,E as M,F as Q,B as R,C as Y}from"./chunks/theme.6JvfIMAU.js";const z=`<template>
  <div>
    <el-button @click="openPopup">打开Vant弹窗</el-button>
    <!-- 分割线 -->
    <el-divider />
    <el-divider>底部弹窗</el-divider>
    <el-button @click="openBottomPopup">打开底部弹窗</el-button>
    <el-divider>示例:地区选择</el-divider>
    {{ fieldValue }}
    {{ cascaderValue }}
    <van-field v-model="fieldValue" is-link readonly label="地区" placeholder="请选择所在地区" @click="openPopup2" />
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
    </div>
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
        style: {
        },
      },
    },
  );
};
<\/script>

<style lang="scss" scoped></style>
`;var L=Object.defineProperty,v=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,F=(a,e,t)=>e in a?L(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,X=(a,e)=>{for(var t in e||(e={}))B.call(e,t)&&F(a,t,e[t]);if(v)for(var t of v(e))x.call(e,t)&&F(a,t,e[t]);return a},$=(a,e)=>{var t={};for(var n in a)B.call(a,n)&&e.indexOf(n)<0&&(t[n]=a[n]);if(a!=null&&v)for(var n of v(a))e.indexOf(n)<0&&x.call(a,n)&&(t[n]=a[n]);return t};const V={round:!0,lockScroll:!0},J=(a,{componentRef:e,visible:t,onMounted:n,config:o,consumer:u})=>{const d=o.value,{attrs:m}=d,k=$(d,["attrs"]),p=()=>{u.value.destroy()};return s(q,O({ref:e,show:t.value,"onUpdate:show":l=>t.value=l,onClosed:p,onVnodeMounted:n},V,k,m),X({default:()=>a},o.value.slots))},P=j({render:J,defaultConfig:{attrs:V}}),H=(a={})=>{const e=P(a);return(t,n={})=>{const o=Z({},n,{attrs:{position:"bottom",style:{width:"100vw"}}});return e(t,o)}},K=A({__name:"vant",setup(a){const e=P({}),t=H(),n=()=>{e(s(N,null,null),{attrs:{position:"center",round:!0,closeable:!0,style:{width:"375px",height:"667px"}}})},o=b(""),u=b(""),d=[{text:"浙江省",value:"330000",children:[{text:"杭州市",value:"330100"}]},{text:"江苏省",value:"320000",children:[{text:"南京市",value:"320100"}]}],m=()=>{const p=t(s("div",{style:"padding: 20px;"},[s("h3",null,[i("底部弹出示例")]),s("p",null,[i("这是一个从底部弹出的弹窗")]),s(R,{type:"primary",onClick:()=>{p.destroy()},style:"margin-top: 20px; width: 100%;"},{default:()=>[i("关闭")]})]))},k=()=>{const p=t(s(Y,{modelValue:u.value,"onUpdate:modelValue":l=>u.value=l,title:"请选择所在地区",options:d,onClose:()=>{p.destroy()},onFinish:({selectedOptions:l})=>{o.value=l.map(c=>c.text).join("/"),p.destroy()}},null),{appendTo:"body",attrs:{round:!0,style:{}}})};return(p,l)=>{const c=G,y=M,E=Q;return C(),_("div",null,[s(c,{onClick:n},{default:r(()=>l[1]||(l[1]=[i("打开Vant弹窗")])),_:1,__:[1]}),s(y),s(y,null,{default:r(()=>l[2]||(l[2]=[i("底部弹窗")])),_:1,__:[2]}),s(c,{onClick:m},{default:r(()=>l[3]||(l[3]=[i("打开底部弹窗")])),_:1,__:[3]}),s(y,null,{default:r(()=>l[4]||(l[4]=[i("示例:地区选择")])),_:1,__:[4]}),i(" "+g(o.value)+" "+g(u.value)+" ",1),s(E,{modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=D=>o.value=D),"is-link":"",readonly:"",label:"地区",placeholder:"请选择所在地区",onClick:k},null,8,["modelValue"])])}}}),sn=JSON.parse('{"title":"Vant示例","description":"","frontmatter":{},"headers":[],"relativePath":"example/vant.md","filePath":"example/vant.md"}'),nn={name:"example/vant.md"},ln=Object.assign(nn,{setup(a){const e=b(!0);return(t,n)=>{const o=w("ClientOnly");return C(),_("div",null,[n[1]||(n[1]=T("",6)),W(s(f(I),null,null,512),[[S,e.value]]),s(o,null,{default:r(()=>[s(f(U),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:n[0]||(n[0]=()=>{e.value=!1}),vueCode:f(z)},{vue:r(()=>[s(K)]),_:1},8,["vueCode"])]),_:1}),n[2]||(n[2]=h("h2",{id:"属性说明",tabindex:"-1"},[i("属性说明 "),h("a",{class:"header-anchor",href:"#属性说明","aria-label":'Permalink to "属性说明"'},"​")],-1)),n[3]||(n[3]=h("p",null,[i("更多属性请参考 "),h("a",{href:"https://vant-ui.github.io/vant/#/zh-CN/popup#api",target:"_blank",rel:"noreferrer"},"Vant Popup文档"),i("。")],-1))])}}});export{sn as __pageData,ln as default};
