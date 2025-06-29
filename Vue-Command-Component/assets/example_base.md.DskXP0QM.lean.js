import{d as X,h as O,c as Se,o as Ee,e as hr,n as io,k as W,r as vr,N as Xi,G as w,w as j,a as N,aI as hn,V as Ce,L as pe,ap as Wt,aJ as Ui,F as dt,j as K,t as lo,p as D,ai as pr,x as mr,at as ao,ax as Gi,q as we,v as ht,P as It,aj as No,K as Ne,Y as Fe,T as Me,aK as Vo,ag as ae,ah as ve,S as ut,as as Et,ad as g,af as ke,ao as br,aE as qi,D as Qi,s as co,aB as Ki,am as Ji,C as el,ae as So}from"./chunks/framework.CMDNF9iv.js";import{b3 as tl,O as ol,W as nl,_ as rl,P as il,Z as ll,aR as Te,a$ as vt,b0 as sl,aG as al,b4 as cl,b5 as Yo,aW as Yt,b6 as dl,b1 as Le,b2 as je}from"./chunks/index.DxKp0lnN.js";function ul(e,t,o){var n=-1,r=e.length;t<0&&(t=-t>r?0:r+t),o=o>r?r:o,o<0&&(o+=r),r=t>o?0:o-t>>>0,t>>>=0;for(var i=Array(r);++n<r;)i[n]=e[n+t];return i}function fl(e,t,o){var n=e.length;return o=o===void 0?n:o,ul(e,t,o)}var hl="\\ud800-\\udfff",vl="\\u0300-\\u036f",pl="\\ufe20-\\ufe2f",ml="\\u20d0-\\u20ff",bl=vl+pl+ml,gl="\\ufe0e\\ufe0f",xl="\\u200d",yl=RegExp("["+xl+hl+bl+gl+"]");function gr(e){return yl.test(e)}function Cl(e){return e.split("")}var xr="\\ud800-\\udfff",wl="\\u0300-\\u036f",Sl="\\ufe20-\\ufe2f",El="\\u20d0-\\u20ff",$l=wl+Sl+El,Bl="\\ufe0e\\ufe0f",kl="["+xr+"]",Do="["+$l+"]",To="\\ud83c[\\udffb-\\udfff]",zl="(?:"+Do+"|"+To+")",yr="[^"+xr+"]",Cr="(?:\\ud83c[\\udde6-\\uddff]){2}",wr="[\\ud800-\\udbff][\\udc00-\\udfff]",Rl="\\u200d",Sr=zl+"?",Er="["+Bl+"]?",Dl="(?:"+Rl+"(?:"+[yr,Cr,wr].join("|")+")"+Er+Sr+")*",Tl=Er+Sr+Dl,Fl="(?:"+[yr+Do+"?",Do,Cr,wr,kl].join("|")+")",Pl=RegExp(To+"(?="+To+")|"+Fl+Tl,"g");function Al(e){return e.match(Pl)||[]}function Ol(e){return gr(e)?Al(e):Cl(e)}function Il(e){return function(t){t=tl(t);var o=gr(t)?Ol(t):void 0,n=o?o[0]:t.charAt(0),r=o?fl(o,1).join(""):t.slice(1);return n[e]()+r}}var Ml=Il("toUpperCase");const Hl=ol({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},contentPosition:{type:String,values:["left","center","right"],default:"center"},borderStyle:{type:nl(String),default:"solid"}}),_l=X({name:"ElDivider"}),Wl=X({..._l,props:Hl,setup(e){const t=e,o=il("divider"),n=O(()=>o.cssVar({"border-style":t.borderStyle}));return(r,i)=>(Ee(),Se("div",{class:io([W(o).b(),W(o).m(r.direction)]),style:Xi(W(n)),role:"separator"},[r.$slots.default&&r.direction!=="vertical"?(Ee(),Se("div",{key:0,class:io([W(o).e("text"),W(o).is(r.contentPosition)])},[vr(r.$slots,"default")],2)):hr("v-if",!0)],6))}});var Ll=rl(Wl,[["__file","divider.vue"]]);const Zo=ll(Ll),jl=`<template>
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
import { RxRender } from "@vue-cmd/core";
import { useElementPlusDialog } from "@vue-cmd/element-plus";
import DialogContent from "./dialog-content.vue";
import { ref, reactive } from "vue";

const count = ref(0)
setInterval(() => {
  count.value++
}, 1000)

const CommandDialog = useElementPlusDialog();
const openDialog = () => {
  CommandDialog(<DialogContent v-model={formValue.name} count={count.value} />);
};

const openDialog2 = () => {
  CommandDialog(RxRender(() => <DialogContent v-model={formValue.name} count={count.value} />));
};

const formValue = reactive({
  name: 'panda',
})

<\/script>

<style lang="scss" scoped></style>
`,Nl={class:"flex justify-center items-center"},$r=X({__name:"nested",setup(e){const t=vt(),o=()=>{t(w(ze,{nested:!0},null),{title:"嵌套嵌套,还是嵌套"})};return(n,r)=>{const i=Te;return Ee(),Se("div",Nl,[w(i,{onClick:o},{default:j(()=>r[0]||(r[0]=[N("打开弹窗")])),_:1})])}}}),Vl={class:"flex gap-20px flex-wrap"},ze=X({__name:"dialog-content",props:hn({nested:{type:Boolean,default:!1},count:{default:0}},{modelValue:{},modelModifiers:{}}),emits:hn(["say"],["update:modelValue"]),setup(e){Ce("nested",e.nested),Ce("content","来自Content的🩷~");const o=pe("depth",0);Ce("depth",o+1);const n=sl(!1);console.log("来自vue 实例的全局属性",Wt().appContext.config.globalProperties.$panda);const r=()=>{var a,l;(l=(a=n.componentRef)==null?void 0:a.value)==null||l.resetPosition()},i=Ui(e,"modelValue");return(a,l)=>{const c=Te,d=Zo,v=al;return Ee(),Se(dt,null,[K("div",Vl,[w(c,{onClick:l[0]||(l[0]=p=>W(n).destroy())},{default:j(()=>l[7]||(l[7]=[N("destroy")])),_:1}),w(c,{onClick:l[1]||(l[1]=p=>W(n).destroyWithReject())},{default:j(()=>l[8]||(l[8]=[N("destroyWithReject")])),_:1}),w(c,{onClick:l[2]||(l[2]=p=>W(n).destroyWithResolve())},{default:j(()=>l[9]||(l[9]=[N("destroyWithResolve")])),_:1}),w(c,{onClick:l[3]||(l[3]=p=>W(n).hide())},{default:j(()=>l[10]||(l[10]=[N("hide")])),_:1}),w(c,{onClick:l[4]||(l[4]=p=>W(n).show())},{default:j(()=>l[11]||(l[11]=[N("show(😯已经show了)")])),_:1}),w(c,{onClick:r},{default:j(()=>l[12]||(l[12]=[N("弹窗位置复原(用于示例原生组件库暴露属性)")])),_:1}),w(c,{onClick:l[5]||(l[5]=p=>a.$emit("say","panda"))},{default:j(()=>l[13]||(l[13]=[N("emit一个事件,value:'panda'")])),_:1})]),w(d),a.nested?(Ee(),Se(dt,{key:0},[w(d,null,{default:j(()=>l[14]||(l[14]=[N("来一场无止境的嵌套吧")])),_:1}),l[15]||(l[15]=K("p",null,"当弹窗嵌套过多页面开始出现闪烁,并不是这个库的问题,element-plus官网也有这个问题😄",-1)),K("p",null,"弹窗深度: "+lo(W(o)),1),w($r)],64)):hr("",!0),w(d,null,{default:j(()=>[N("关于jsx响应式 "+lo(a.count),1)]),_:1}),K("div",null,[w(v,{modelValue:i.value,"onUpdate:modelValue":l[6]||(l[6]=p=>i.value=p)},null,8,["modelValue"])])],64)}}}),Yl={class:"flex justify-center items-center"},Zl=X({__name:"reactive-component",setup(e){const t=D(0);setInterval(()=>{t.value++},1e3);const o=vt(),n=()=>{o(w(ze,{modelValue:i.name,"onUpdate:modelValue":a=>i.name=a,count:t.value},null))},r=()=>{o(cl(()=>w(ze,{modelValue:i.name,"onUpdate:modelValue":a=>i.name=a,count:t.value},null)))},i=pr({name:"panda"});return(a,l)=>{const c=Zo,d=Te;return Ee(),Se("div",null,[N(lo(i)+" ",1),w(c),N(" "+lo(t.value)+" ",1),w(c),K("div",Yl,[w(d,{onClick:n},{default:j(()=>l[0]||(l[0]=[N("打开非响应性式弹窗")])),_:1}),w(d,{onClick:r},{default:j(()=>l[1]||(l[1]=[N("打开响应式弹窗")])),_:1})]),w(c)])}}}),Xl=`<template>
  <div>
    <div class="flex justify-center items-center">
      <el-button @click="openDialog">打开el-drawer</el-button>
      <el-divider>以下粗略适配,暂时没时间适配,如果有需求可以自行适配一下(我也会适配的,只是时间问题)</el-divider>
      <el-button @click="openVantPopup">打开vant-popup</el-button>
      <el-button @click="openNaiveModal">打开naive-modal</el-button>
    </div>
    <el-divider />
    <p class="text-center">欢迎PR,或者联系我以提供更多组件的适配</p>
  </div>
</template>

<script setup name="base-example" lang="tsx">
import { useElementPlusDrawer } from "@vue-cmd/element-plus";
import { useVantPopup } from "@vue-cmd/vant";
import { useNaiveModal } from "@vue-cmd/naive";
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

const CommandVantPopup = useVantPopup();
const openVantPopup = () => {
  CommandVantPopup(<DialogContent />);
};

const CommandNaiveModal = useNaiveModal();
const openNaiveModal = () => {
  CommandNaiveModal(<DialogContent />);
};
<\/script>

<style lang="scss" scoped></style>
`;function Ul(){}const Xo=Object.assign,Gl=typeof window<"u",Uo=e=>e!==null&&typeof e=="object",St=e=>e!=null,Fo=e=>typeof e=="function",ql=e=>Uo(e)&&Fo(e.then)&&Fo(e.catch),Br=e=>typeof e=="number"||/^\d+(\.\d+)?$/.test(e),Ql=()=>Gl?/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()):!1;function vn(e,t){const o=t.split(".");let n=e;return o.forEach(r=>{var i;n=Uo(n)&&(i=n[r])!=null?i:""}),n}const kr=null,Ge=[Number,String],nt={type:Boolean,default:!0},Ct=e=>({type:String,default:e});var Go=typeof window<"u";function zr(e){let t;ht(()=>{e(),It(()=>{t=!0})}),No(()=>{t&&e()})}function Rr(e,t,o={}){if(!Go)return;const{target:n=window,passive:r=!1,capture:i=!1}=o;let a=!1,l;const c=p=>{if(a)return;const S=W(p);S&&!l&&(S.addEventListener(e,t,{capture:i,passive:r}),l=!0)},d=p=>{if(a)return;const S=W(p);S&&l&&(S.removeEventListener(e,t,i),l=!1)};mr(()=>d(n)),ao(()=>d(n)),zr(()=>c(n));let v;return Gi(n)&&(v=we(n,(p,S)=>{d(S),c(p)})),()=>{v==null||v(),d(n),a=!0}}var Zt,Eo;function Kl(){if(!Zt&&(Zt=D(0),Eo=D(0),Go)){const e=()=>{Zt.value=window.innerWidth,Eo.value=window.innerHeight};e(),window.addEventListener("resize",e,{passive:!0}),window.addEventListener("orientationchange",e,{passive:!0})}return{width:Zt,height:Eo}}var Jl=/scroll|auto|overlay/i,es=Go?window:void 0;function ts(e){return e.tagName!=="HTML"&&e.tagName!=="BODY"&&e.nodeType===1}function os(e,t=es){let o=e;for(;o&&o!==t&&ts(o);){const{overflowY:n}=window.getComputedStyle(o);if(Jl.test(n))return o;o=o.parentNode}return t}Ql();const ns=e=>e.stopPropagation();function Dr(e,t){(typeof e.cancelable!="boolean"||e.cancelable)&&e.preventDefault(),ns(e)}Kl();function ot(e){if(St(e))return Br(e)?`${e}px`:String(e)}function rs(e){const t={};return e!==void 0&&(t.zIndex=+e),t}const is=/-(\w)/g,Tr=e=>e.replace(is,(t,o)=>o.toUpperCase()),{hasOwnProperty:ls}=Object.prototype;function ss(e,t,o){const n=t[o];St(n)&&(!ls.call(e,o)||!Uo(n)?e[o]=n:e[o]=Fr(Object(e[o]),n))}function Fr(e,t){return Object.keys(t).forEach(o=>{ss(e,t,o)}),e}var as={name:"姓名",tel:"电话",save:"保存",clear:"清空",cancel:"取消",confirm:"确认",delete:"删除",loading:"加载中...",noCoupon:"暂无优惠券",nameEmpty:"请填写姓名",addContact:"添加联系人",telInvalid:"请填写正确的电话",vanCalendar:{end:"结束",start:"开始",title:"日期选择",weekdays:["日","一","二","三","四","五","六"],monthTitle:(e,t)=>`${e}年${t}月`,rangePrompt:e=>`最多选择 ${e} 天`},vanCascader:{select:"请选择"},vanPagination:{prev:"上一页",next:"下一页"},vanPullRefresh:{pulling:"下拉即可刷新...",loosing:"释放即可刷新..."},vanSubmitBar:{label:"合计:"},vanCoupon:{unlimited:"无门槛",discount:e=>`${e}折`,condition:e=>`满${e}元可用`},vanCouponCell:{title:"优惠券",count:e=>`${e}张可用`},vanCouponList:{exchange:"兑换",close:"不使用",enable:"可用",disabled:"不可用",placeholder:"输入优惠码"},vanAddressEdit:{area:"地区",areaEmpty:"请选择地区",addressEmpty:"请填写详细地址",addressDetail:"详细地址",defaultAddress:"设为默认收货地址"},vanAddressList:{add:"新增地址"}};const pn=D("zh-CN"),mn=pr({"zh-CN":as}),cs={messages(){return mn[pn.value]},use(e,t){pn.value=e,this.add({[e]:t})},add(e={}){Fr(mn,e)}};var ds=cs;function us(e){const t=Tr(e)+".";return(o,...n)=>{const r=ds.messages(),i=vn(r,t+o)||vn(r,o);return Fo(i)?i(...n):i}}function Po(e,t){return t?typeof t=="string"?` ${e}--${t}`:Array.isArray(t)?t.reduce((o,n)=>o+Po(e,n),""):Object.keys(t).reduce((o,n)=>o+(t[n]?Po(e,n):""),""):""}function fs(e){return(t,o)=>(t&&typeof t!="string"&&(o=t,t=""),t=t?`${e}__${t}`:e,`${t}${Po(t,o)}`)}function Lt(e){const t=`van-${e}`;return[t,fs(t),us(t)]}const hs="van-haptics-feedback",bn=5;function vs(e,{args:t=[],done:o,canceled:n,error:r}){if(e){const i=e.apply(null,t);ql(i)?i.then(a=>{a?o():n&&n()}).catch(r||Ul):i?o():n&&n()}else o()}function uo(e){return e.install=t=>{const{name:o}=e;o&&(t.component(o,e),t.component(Tr(`-${o}`),e))},e}const ps=Symbol();function ms(e){const t=Wt();t&&Xo(t.proxy,e)}const[bs,gn]=Lt("badge"),gs={dot:Boolean,max:Ge,tag:Ct("div"),color:String,offset:Array,content:Ge,showZero:nt,position:Ct("top-right")};var xs=X({name:bs,props:gs,setup(e,{slots:t}){const o=()=>{if(t.content)return!0;const{content:l,showZero:c}=e;return St(l)&&l!==""&&(c||l!==0&&l!=="0")},n=()=>{const{dot:l,max:c,content:d}=e;if(!l&&o())return t.content?t.content():St(c)&&Br(d)&&+d>+c?`${c}+`:d},r=l=>l.startsWith("-")?l.replace("-",""):`-${l}`,i=O(()=>{const l={background:e.color};if(e.offset){const[c,d]=e.offset,{position:v}=e,[p,S]=v.split("-");t.default?(typeof d=="number"?l[p]=ot(p==="top"?d:-d):l[p]=p==="top"?ot(d):r(d),typeof c=="number"?l[S]=ot(S==="left"?c:-c):l[S]=S==="left"?ot(c):r(c)):(l.marginTop=ot(d),l.marginLeft=ot(c))}return l}),a=()=>{if(o()||e.dot)return w("div",{class:gn([e.position,{dot:e.dot,fixed:!!t.default}]),style:i.value},[n()])};return()=>{if(t.default){const{tag:l}=e;return w(l,{class:gn("wrapper")},{default:()=>[t.default(),a()]})}return a()}}});const ys=uo(xs);let Cs=2e3;const ws=()=>++Cs,[Ss,uu]=Lt("config-provider"),Es=Symbol(Ss),[$s,xn]=Lt("icon"),Bs=e=>e==null?void 0:e.includes("/"),ks={dot:Boolean,tag:Ct("i"),name:String,size:Ge,badge:Ge,color:String,badgeProps:Object,classPrefix:String};var zs=X({name:$s,props:ks,setup(e,{slots:t}){const o=pe(Es,null),n=O(()=>e.classPrefix||(o==null?void 0:o.iconPrefix)||xn());return()=>{const{tag:r,dot:i,name:a,size:l,badge:c,color:d}=e,v=Bs(a);return w(ys,Ne({dot:i,tag:r,class:[n.value,v?"":`${n.value}-${a}`],style:{color:d,fontSize:ot(l)},content:c},e.badgeProps),{default:()=>{var p;return[(p=t.default)==null?void 0:p.call(t),v&&w("img",{class:xn("image"),src:a},null)]}})}}});const Rs=uo(zs),Ds={show:Boolean,zIndex:Ge,overlay:nt,duration:Ge,teleport:[String,Object],lockScroll:nt,lazyRender:nt,beforeClose:Function,overlayStyle:Object,overlayClass:kr,transitionAppear:Boolean,closeOnClickOverlay:nt};function Ts(e,t){return e>t?"horizontal":t>e?"vertical":""}function Fs(){const e=D(0),t=D(0),o=D(0),n=D(0),r=D(0),i=D(0),a=D(""),l=D(!0),c=()=>a.value==="vertical",d=()=>a.value==="horizontal",v=()=>{o.value=0,n.value=0,r.value=0,i.value=0,a.value="",l.value=!0};return{move:y=>{const h=y.touches[0];o.value=(h.clientX<0?0:h.clientX)-e.value,n.value=h.clientY-t.value,r.value=Math.abs(o.value),i.value=Math.abs(n.value);const z=10;(!a.value||r.value<z&&i.value<z)&&(a.value=Ts(r.value,i.value)),l.value&&(r.value>bn||i.value>bn)&&(l.value=!1)},start:y=>{v(),e.value=y.touches[0].clientX,t.value=y.touches[0].clientY},reset:v,startX:e,startY:t,deltaX:o,deltaY:n,offsetX:r,offsetY:i,direction:a,isVertical:c,isHorizontal:d,isTap:l}}let Tt=0;const yn="van-overflow-hidden";function Ps(e,t){const o=Fs(),n="01",r="10",i=v=>{o.move(v);const p=o.deltaY.value>0?r:n,S=os(v.target,e.value),{scrollHeight:y,offsetHeight:h,scrollTop:z}=S;let x="11";z===0?x=h>=y?"00":"01":z+h>=y&&(x="10"),x!=="11"&&o.isVertical()&&!(parseInt(x,2)&parseInt(p,2))&&Dr(v)},a=()=>{document.addEventListener("touchstart",o.start),document.addEventListener("touchmove",i,{passive:!1}),Tt||document.body.classList.add(yn),Tt++},l=()=>{Tt&&(document.removeEventListener("touchstart",o.start),document.removeEventListener("touchmove",i),Tt--,Tt||document.body.classList.remove(yn))},c=()=>t()&&a(),d=()=>t()&&l();zr(c),ao(d),Fe(d),we(t,v=>{v?a():l()})}function Pr(e){const t=D(!1);return we(e,o=>{o&&(t.value=o)},{immediate:!0}),o=>()=>t.value?o():null}const Cn=()=>{var e;const{scopeId:t}=((e=Wt())==null?void 0:e.vnode)||{};return t?{[t]:""}:null},[As,Os]=Lt("overlay"),Is={show:Boolean,zIndex:Ge,duration:Ge,className:kr,lockScroll:nt,lazyRender:nt,customStyle:Object,teleport:[String,Object]};var Ms=X({name:As,props:Is,setup(e,{slots:t}){const o=D(),n=Pr(()=>e.show||!e.lazyRender),r=a=>{e.lockScroll&&Dr(a)},i=n(()=>{var a;const l=Xo(rs(e.zIndex),e.customStyle);return St(e.duration)&&(l.animationDuration=`${e.duration}s`),ae(w("div",{ref:o,style:l,class:[Os(),e.className]},[(a=t.default)==null?void 0:a.call(t)]),[[ve,e.show]])});return Rr("touchmove",r,{target:o}),()=>{const a=w(Me,{name:"van-fade",appear:!0},{default:i});return e.teleport?w(Vo,{to:e.teleport},{default:()=>[a]}):a}}});const Hs=uo(Ms),_s=Xo({},Ds,{round:Boolean,position:Ct("center"),closeIcon:Ct("cross"),closeable:Boolean,transition:String,iconPrefix:String,closeOnPopstate:Boolean,closeIconPosition:Ct("top-right"),safeAreaInsetTop:Boolean,safeAreaInsetBottom:Boolean}),[Ws,wn]=Lt("popup");var Ls=X({name:Ws,inheritAttrs:!1,props:_s,emits:["open","close","opened","closed","keydown","update:show","clickOverlay","clickCloseIcon"],setup(e,{emit:t,attrs:o,slots:n}){let r,i;const a=D(),l=D(),c=Pr(()=>e.show||!e.lazyRender),d=O(()=>{const f={zIndex:a.value};if(St(e.duration)){const s=e.position==="center"?"animationDuration":"transitionDuration";f[s]=`${e.duration}s`}return f}),v=()=>{r||(r=!0,a.value=e.zIndex!==void 0?+e.zIndex:ws(),t("open"))},p=()=>{r&&vs(e.beforeClose,{done(){r=!1,t("close"),t("update:show",!1)}})},S=f=>{t("clickOverlay",f),e.closeOnClickOverlay&&p()},y=()=>{if(e.overlay)return w(Hs,Ne({show:e.show,class:e.overlayClass,zIndex:a.value,duration:e.duration,customStyle:e.overlayStyle,role:e.closeOnClickOverlay?"button":void 0,tabindex:e.closeOnClickOverlay?0:void 0},Cn(),{onClick:S}),{default:n["overlay-content"]})},h=f=>{t("clickCloseIcon",f),p()},z=()=>{if(e.closeable)return w(Rs,{role:"button",tabindex:0,name:e.closeIcon,class:[wn("close-icon",e.closeIconPosition),hs],classPrefix:e.iconPrefix,onClick:h},null)};let x;const m=()=>{x&&clearTimeout(x),x=setTimeout(()=>{t("opened")})},$=()=>t("closed"),T=f=>t("keydown",f),B=c(()=>{var f;const{round:s,position:u,safeAreaInsetTop:b,safeAreaInsetBottom:R}=e;return ae(w("div",Ne({ref:l,style:d.value,role:"dialog",tabindex:0,class:[wn({round:s,[u]:u}),{"van-safe-area-top":b,"van-safe-area-bottom":R}],onKeydown:T},o,Cn()),[(f=n.default)==null?void 0:f.call(n),z()]),[[ve,e.show]])}),k=()=>{const{position:f,transition:s,transitionAppear:u}=e,b=f==="center"?"van-fade":`van-popup-slide-${f}`;return w(Me,{name:s||b,appear:u,onAfterEnter:m,onAfterLeave:$},{default:B})};return we(()=>e.show,f=>{f&&!r&&(v(),o.tabindex===0&&It(()=>{var s;(s=l.value)==null||s.focus()})),!f&&r&&(r=!1,t("close"))}),ms({popupRef:l}),Ps(l,()=>e.show&&e.lockScroll),Rr("popstate",()=>{e.closeOnPopstate&&(p(),i=!1)}),ht(()=>{e.show&&v()}),No(()=>{i&&(t("update:show",!0),i=!1)}),ao(()=>{e.show&&e.teleport&&(p(),i=!0)}),Ce(ps,()=>e.show),()=>e.teleport?w(Vo,{to:e.teleport},{default:()=>[y(),k()]}):w(dt,null,[y(),k()])}});const js=uo(Ls),Ar={round:!0,lockScroll:!0,closeable:!0},Ns=(e,{componentRef:t,visible:o,onMounted:n,config:r,consumer:i})=>{const a=()=>{i.value.destroy()};return w(js,Ne({ref:t,show:o.value,"onUpdate:show":l=>o.value=l,onClickCloseIcon:a,onVnodeMounted:n},Ar,r.attrs),{default:()=>e,...r.slots})},Vs=Yo({render:Ns,defaultConfig:{attrs:Ar}});function Ys(e){let t=".",o="__",n="--",r;if(e){let h=e.blockPrefix;h&&(t=h),h=e.elementPrefix,h&&(o=h),h=e.modifierPrefix,h&&(n=h)}const i={install(h){r=h.c;const z=h.context;z.bem={},z.bem.b=null,z.bem.els=null}};function a(h){let z,x;return{before(m){z=m.bem.b,x=m.bem.els,m.bem.els=null},after(m){m.bem.b=z,m.bem.els=x},$({context:m,props:$}){return h=typeof h=="string"?h:h({context:m,props:$}),m.bem.b=h,`${($==null?void 0:$.bPrefix)||t}${m.bem.b}`}}}function l(h){let z;return{before(x){z=x.bem.els},after(x){x.bem.els=z},$({context:x,props:m}){return h=typeof h=="string"?h:h({context:x,props:m}),x.bem.els=h.split(",").map($=>$.trim()),x.bem.els.map($=>`${(m==null?void 0:m.bPrefix)||t}${x.bem.b}${o}${$}`).join(", ")}}}function c(h){return{$({context:z,props:x}){h=typeof h=="string"?h:h({context:z,props:x});const m=h.split(",").map(B=>B.trim());function $(B){return m.map(k=>`&${(x==null?void 0:x.bPrefix)||t}${z.bem.b}${B!==void 0?`${o}${B}`:""}${n}${k}`).join(", ")}const T=z.bem.els;return T!==null?$(T[0]):$()}}}function d(h){return{$({context:z,props:x}){h=typeof h=="string"?h:h({context:z,props:x});const m=z.bem.els;return`&:not(${(x==null?void 0:x.bPrefix)||t}${z.bem.b}${m!==null&&m.length>0?`${o}${m[0]}`:""}${n}${h})`}}}return Object.assign(i,{cB:(...h)=>r(a(h[0]),h[1],h[2]),cE:(...h)=>r(l(h[0]),h[1],h[2]),cM:(...h)=>r(c(h[0]),h[1],h[2]),cNotM:(...h)=>r(d(h[0]),h[1],h[2])}),i}function Zs(e){let t=0;for(let o=0;o<e.length;++o)e[o]==="&"&&++t;return t}const Or=/\s*,(?![^(]*\))\s*/g,Xs=/\s+/g;function Us(e,t){const o=[];return t.split(Or).forEach(n=>{let r=Zs(n);if(r){if(r===1){e.forEach(a=>{o.push(n.replace("&",a))});return}}else{e.forEach(a=>{o.push((a&&a+" ")+n)});return}let i=[n];for(;r--;){const a=[];i.forEach(l=>{e.forEach(c=>{a.push(l.replace("&",c))})}),i=a}i.forEach(a=>o.push(a))}),o}function Gs(e,t){const o=[];return t.split(Or).forEach(n=>{e.forEach(r=>{o.push((r&&r+" ")+n)})}),o}function qs(e){let t=[""];return e.forEach(o=>{o=o&&o.trim(),o&&(o.includes("&")?t=Us(t,o):t=Gs(t,o))}),t.join(", ").replace(Xs," ")}function Sn(e){if(!e)return;const t=e.parentElement;t&&t.removeChild(e)}function fo(e,t){return(t??document.head).querySelector(`style[cssr-id="${e}"]`)}function Qs(e){const t=document.createElement("style");return t.setAttribute("cssr-id",e),t}function Xt(e){return e?/^\s*@(s|m)/.test(e):!1}const Ks=/[A-Z]/g;function Ir(e){return e.replace(Ks,t=>"-"+t.toLowerCase())}function Js(e,t="  "){return typeof e=="object"&&e!==null?` {
`+Object.entries(e).map(o=>t+`  ${Ir(o[0])}: ${o[1]};`).join(`
`)+`
`+t+"}":`: ${e};`}function ea(e,t,o){return typeof e=="function"?e({context:t.context,props:o}):e}function En(e,t,o,n){if(!t)return"";const r=ea(t,o,n);if(!r)return"";if(typeof r=="string")return`${e} {
${r}
}`;const i=Object.keys(r);if(i.length===0)return o.config.keepEmptyBlock?e+` {
}`:"";const a=e?[e+" {"]:[];return i.forEach(l=>{const c=r[l];if(l==="raw"){a.push(`
`+c+`
`);return}l=Ir(l),c!=null&&a.push(`  ${l}${Js(c)}`)}),e&&a.push("}"),a.join(`
`)}function Ao(e,t,o){e&&e.forEach(n=>{if(Array.isArray(n))Ao(n,t,o);else if(typeof n=="function"){const r=n(t);Array.isArray(r)?Ao(r,t,o):r&&o(r)}else n&&o(n)})}function Mr(e,t,o,n,r){const i=e.$;let a="";if(!i||typeof i=="string")Xt(i)?a=i:t.push(i);else if(typeof i=="function"){const d=i({context:n.context,props:r});Xt(d)?a=d:t.push(d)}else if(i.before&&i.before(n.context),!i.$||typeof i.$=="string")Xt(i.$)?a=i.$:t.push(i.$);else if(i.$){const d=i.$({context:n.context,props:r});Xt(d)?a=d:t.push(d)}const l=qs(t),c=En(l,e.props,n,r);a?o.push(`${a} {`):c.length&&o.push(c),e.children&&Ao(e.children,{context:n.context,props:r},d=>{if(typeof d=="string"){const v=En(l,{raw:d},n,r);o.push(v)}else Mr(d,t,o,n,r)}),t.pop(),a&&o.push("}"),i&&i.after&&i.after(n.context)}function ta(e,t,o){const n=[];return Mr(e,[],n,t,o),n.join(`

`)}function Oo(e){for(var t=0,o,n=0,r=e.length;r>=4;++n,r-=4)o=e.charCodeAt(n)&255|(e.charCodeAt(++n)&255)<<8|(e.charCodeAt(++n)&255)<<16|(e.charCodeAt(++n)&255)<<24,o=(o&65535)*1540483477+((o>>>16)*59797<<16),o^=o>>>24,t=(o&65535)*1540483477+((o>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(r){case 3:t^=(e.charCodeAt(n+2)&255)<<16;case 2:t^=(e.charCodeAt(n+1)&255)<<8;case 1:t^=e.charCodeAt(n)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}typeof window<"u"&&(window.__cssrContext={});function oa(e,t,o,n){const{els:r}=t;if(o===void 0)r.forEach(Sn),t.els=[];else{const i=fo(o,n);i&&r.includes(i)&&(Sn(i),t.els=r.filter(a=>a!==i))}}function $n(e,t){e.push(t)}function na(e,t,o,n,r,i,a,l,c){let d;if(o===void 0&&(d=t.render(n),o=Oo(d)),c){c.adapter(o,d??t.render(n));return}l===void 0&&(l=document.head);const v=fo(o,l);if(v!==null&&!i)return v;const p=v??Qs(o);if(d===void 0&&(d=t.render(n)),p.textContent=d,v!==null)return v;if(a){const S=l.querySelector(`meta[name="${a}"]`);if(S)return l.insertBefore(p,S),$n(t.els,p),p}return r?l.insertBefore(p,l.querySelector("style, link")):l.appendChild(p),$n(t.els,p),p}function ra(e){return ta(this,this.instance,e)}function ia(e={}){const{id:t,ssr:o,props:n,head:r=!1,force:i=!1,anchorMetaName:a,parent:l}=e;return na(this.instance,this,t,n,r,i,a,l,o)}function la(e={}){const{id:t,parent:o}=e;oa(this.instance,this,t,o)}const Ut=function(e,t,o,n){return{instance:e,$:t,props:o,children:n,els:[],render:ra,mount:ia,unmount:la}},sa=function(e,t,o,n){return Array.isArray(t)?Ut(e,{$:null},null,t):Array.isArray(o)?Ut(e,t,null,o):Array.isArray(n)?Ut(e,t,o,n):Ut(e,t,o,null)};function aa(e={}){const t={c:(...o)=>sa(t,...o),use:(o,...n)=>o.install(t,...n),find:fo,context:{},config:e};return t}function ca(e,t){if(e===void 0)return!1;if(t){const{context:{ids:o}}=t;return o.has(e)}return fo(e)!==null}const da="n",Mt=`.${da}-`,ua="__",fa="--",Hr=aa(),_r=Ys({blockPrefix:Mt,elementPrefix:ua,modifierPrefix:fa});Hr.use(_r);const{c:C,find:fu}=Hr,{cB:Y,cE:F,cM:H,cNotM:Io}=_r;function Wr(e){return C(({props:{bPrefix:t}})=>`${t||Mt}modal, ${t||Mt}drawer`,[e])}function ha(e){return C(({props:{bPrefix:t}})=>`${t||Mt}popover`,[e])}function Lr(e){return C(({props:{bPrefix:t}})=>`&${t||Mt}modal`,e)}function V(e,t){return e+(t==="default"?"":t.replace(/^[a-z]/,o=>o.toUpperCase()))}function qo(e){return e.composedPath()[0]||null}function Bn(e){return typeof e=="string"?e.endsWith("px")?Number(e.slice(0,e.length-2)):Number(e):e}function rt(e,t){const o=e.trim().split(/\s+/g),n={top:o[0]};switch(o.length){case 1:n.right=o[0],n.bottom=o[0],n.left=o[0];break;case 2:n.right=o[1],n.left=o[1],n.bottom=o[0];break;case 3:n.right=o[1],n.bottom=o[2],n.left=o[1];break;case 4:n.right=o[1],n.bottom=o[2],n.left=o[3];break;default:throw new Error("[seemly/getMargin]:"+e+" is not a valid value.")}return n}const kn={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aqua:"#0FF",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000",blanchedalmond:"#FFEBCD",blue:"#00F",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#0FF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgrey:"#A9A9A9",darkgreen:"#006400",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",fuchsia:"#F0F",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",gray:"#808080",grey:"#808080",green:"#008000",greenyellow:"#ADFF2F",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgray:"#D3D3D3",lightgrey:"#D3D3D3",lightgreen:"#90EE90",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",lime:"#0F0",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#F0F",maroon:"#800000",mediumaquamarine:"#66CDAA",mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",navy:"#000080",oldlace:"#FDF5E6",olive:"#808000",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",purple:"#800080",rebeccapurple:"#663399",red:"#F00",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",silver:"#C0C0C0",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",teal:"#008080",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",white:"#FFF",whitesmoke:"#F5F5F5",yellow:"#FF0",yellowgreen:"#9ACD32",transparent:"#0000"};function va(e,t,o){t/=100,o/=100;let n=(r,i=(r+e/60)%6)=>o-o*t*Math.max(Math.min(i,4-i,1),0);return[n(5)*255,n(3)*255,n(1)*255]}function pa(e,t,o){t/=100,o/=100;let n=t*Math.min(o,1-o),r=(i,a=(i+e/30)%12)=>o-n*Math.max(Math.min(a-3,9-a,1),-1);return[r(0)*255,r(8)*255,r(4)*255]}const He="^\\s*",_e="\\s*$",qe="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))%\\s*",ye="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*",it="([0-9A-Fa-f])",lt="([0-9A-Fa-f]{2})",jr=new RegExp(`${He}hsl\\s*\\(${ye},${qe},${qe}\\)${_e}`),Nr=new RegExp(`${He}hsv\\s*\\(${ye},${qe},${qe}\\)${_e}`),Vr=new RegExp(`${He}hsla\\s*\\(${ye},${qe},${qe},${ye}\\)${_e}`),Yr=new RegExp(`${He}hsva\\s*\\(${ye},${qe},${qe},${ye}\\)${_e}`),ma=new RegExp(`${He}rgb\\s*\\(${ye},${ye},${ye}\\)${_e}`),ba=new RegExp(`${He}rgba\\s*\\(${ye},${ye},${ye},${ye}\\)${_e}`),ga=new RegExp(`${He}#${it}${it}${it}${_e}`),xa=new RegExp(`${He}#${lt}${lt}${lt}${_e}`),ya=new RegExp(`${He}#${it}${it}${it}${it}${_e}`),Ca=new RegExp(`${He}#${lt}${lt}${lt}${lt}${_e}`);function be(e){return parseInt(e,16)}function wa(e){try{let t;if(t=Vr.exec(e))return[so(t[1]),Ue(t[5]),Ue(t[9]),st(t[13])];if(t=jr.exec(e))return[so(t[1]),Ue(t[5]),Ue(t[9]),1];throw new Error(`[seemly/hsla]: Invalid color value ${e}.`)}catch(t){throw t}}function Sa(e){try{let t;if(t=Yr.exec(e))return[so(t[1]),Ue(t[5]),Ue(t[9]),st(t[13])];if(t=Nr.exec(e))return[so(t[1]),Ue(t[5]),Ue(t[9]),1];throw new Error(`[seemly/hsva]: Invalid color value ${e}.`)}catch(t){throw t}}function ft(e){try{let t;if(t=xa.exec(e))return[be(t[1]),be(t[2]),be(t[3]),1];if(t=ma.exec(e))return[fe(t[1]),fe(t[5]),fe(t[9]),1];if(t=ba.exec(e))return[fe(t[1]),fe(t[5]),fe(t[9]),st(t[13])];if(t=ga.exec(e))return[be(t[1]+t[1]),be(t[2]+t[2]),be(t[3]+t[3]),1];if(t=Ca.exec(e))return[be(t[1]),be(t[2]),be(t[3]),st(be(t[4])/255)];if(t=ya.exec(e))return[be(t[1]+t[1]),be(t[2]+t[2]),be(t[3]+t[3]),st(be(t[4]+t[4])/255)];if(e in kn)return ft(kn[e]);if(jr.test(e)||Vr.test(e)){const[o,n,r,i]=wa(e);return[...pa(o,n,r),i]}else if(Nr.test(e)||Yr.test(e)){const[o,n,r,i]=Sa(e);return[...va(o,n,r),i]}throw new Error(`[seemly/rgba]: Invalid color value ${e}.`)}catch(t){throw t}}function Ea(e){return e>1?1:e<0?0:e}function Mo(e,t,o,n){return`rgba(${fe(e)}, ${fe(t)}, ${fe(o)}, ${Ea(n)})`}function $o(e,t,o,n,r){return fe((e*t*(1-n)+o*n)/r)}function Qo(e,t){Array.isArray(e)||(e=ft(e)),Array.isArray(t)||(t=ft(t));const o=e[3],n=t[3],r=st(o+n-o*n);return Mo($o(e[0],o,t[0],n,r),$o(e[1],o,t[1],n,r),$o(e[2],o,t[2],n,r),r)}function Gt(e,t){const[o,n,r,i=1]=Array.isArray(e)?e:ft(e);return typeof t.alpha=="number"?Mo(o,n,r,t.alpha):Mo(o,n,r,i)}function qt(e,t){const[o,n,r,i=1]=Array.isArray(e)?e:ft(e),{lightness:a=1,alpha:l=1}=t;return $a([o*a,n*a,r*a,i*l])}function st(e){const t=Math.round(Number(e)*100)/100;return t>1?1:t<0?0:t}function so(e){const t=Math.round(Number(e));return t>=360||t<0?0:t}function fe(e){const t=Math.round(Number(e));return t>255?255:t<0?0:t}function Ue(e){const t=Math.round(Number(e));return t>100?100:t<0?0:t}function $a(e){const[t,o,n]=e;return 3 in e?`rgba(${fe(t)}, ${fe(o)}, ${fe(n)}, ${st(e[3])})`:`rgba(${fe(t)}, ${fe(o)}, ${fe(n)}, 1)`}function Ba(e=8){return Math.random().toString(16).slice(2,2+e)}function no(e){return e.composedPath()[0]}const ka={mousemoveoutside:new WeakMap,clickoutside:new WeakMap};function za(e,t,o){if(e==="mousemoveoutside"){const n=r=>{t.contains(no(r))||o(r)};return{mousemove:n,touchstart:n}}else if(e==="clickoutside"){let n=!1;const r=a=>{n=!t.contains(no(a))},i=a=>{n&&(t.contains(no(a))||o(a))};return{mousedown:r,mouseup:i,touchstart:r,touchend:i}}return console.error(`[evtd/create-trap-handler]: name \`${e}\` is invalid. This could be a bug of evtd.`),{}}function Zr(e,t,o){const n=ka[e];let r=n.get(t);r===void 0&&n.set(t,r=new WeakMap);let i=r.get(o);return i===void 0&&r.set(o,i=za(e,t,o)),i}function Ra(e,t,o,n){if(e==="mousemoveoutside"||e==="clickoutside"){const r=Zr(e,t,o);return Object.keys(r).forEach(i=>{ce(i,document,r[i],n)}),!0}return!1}function Da(e,t,o,n){if(e==="mousemoveoutside"||e==="clickoutside"){const r=Zr(e,t,o);return Object.keys(r).forEach(i=>{he(i,document,r[i],n)}),!0}return!1}function Ta(){if(typeof window>"u")return{on:()=>{},off:()=>{}};const e=new WeakMap,t=new WeakMap;function o(){e.set(this,!0)}function n(){e.set(this,!0),t.set(this,!0)}function r(s,u,b){const R=s[u];return s[u]=function(){return b.apply(s,arguments),R.apply(s,arguments)},s}function i(s,u){s[u]=Event.prototype[u]}const a=new WeakMap,l=Object.getOwnPropertyDescriptor(Event.prototype,"currentTarget");function c(){var s;return(s=a.get(this))!==null&&s!==void 0?s:null}function d(s,u){l!==void 0&&Object.defineProperty(s,"currentTarget",{configurable:!0,enumerable:!0,get:u??l.get})}const v={bubble:{},capture:{}},p={};function S(){const s=function(u){const{type:b,eventPhase:R,bubbles:A}=u,I=no(u);if(R===2)return;const Z=R===1?"capture":"bubble";let G=I;const J=[];for(;G===null&&(G=window),J.push(G),G!==window;)G=G.parentNode||null;const q=v.capture[b],L=v.bubble[b];if(r(u,"stopPropagation",o),r(u,"stopImmediatePropagation",n),d(u,c),Z==="capture"){if(q===void 0)return;for(let ne=J.length-1;ne>=0&&!e.has(u);--ne){const le=J[ne],re=q.get(le);if(re!==void 0){a.set(u,le);for(const de of re){if(t.has(u))break;de(u)}}if(ne===0&&!A&&L!==void 0){const de=L.get(le);if(de!==void 0)for(const xe of de){if(t.has(u))break;xe(u)}}}}else if(Z==="bubble"){if(L===void 0)return;for(let ne=0;ne<J.length&&!e.has(u);++ne){const le=J[ne],re=L.get(le);if(re!==void 0){a.set(u,le);for(const de of re){if(t.has(u))break;de(u)}}}}i(u,"stopPropagation"),i(u,"stopImmediatePropagation"),d(u)};return s.displayName="evtdUnifiedHandler",s}function y(){const s=function(u){const{type:b,eventPhase:R}=u;if(R!==2)return;const A=p[b];A!==void 0&&A.forEach(I=>I(u))};return s.displayName="evtdUnifiedWindowEventHandler",s}const h=S(),z=y();function x(s,u){const b=v[s];return b[u]===void 0&&(b[u]=new Map,window.addEventListener(u,h,s==="capture")),b[u]}function m(s){return p[s]===void 0&&(p[s]=new Set,window.addEventListener(s,z)),p[s]}function $(s,u){let b=s.get(u);return b===void 0&&s.set(u,b=new Set),b}function T(s,u,b,R){const A=v[u][b];if(A!==void 0){const I=A.get(s);if(I!==void 0&&I.has(R))return!0}return!1}function B(s,u){const b=p[s];return!!(b!==void 0&&b.has(u))}function k(s,u,b,R){let A;if(typeof R=="object"&&R.once===!0?A=q=>{f(s,u,A,R),b(q)}:A=b,Ra(s,u,A,R))return;const Z=R===!0||typeof R=="object"&&R.capture===!0?"capture":"bubble",G=x(Z,s),J=$(G,u);if(J.has(A)||J.add(A),u===window){const q=m(s);q.has(A)||q.add(A)}}function f(s,u,b,R){if(Da(s,u,b,R))return;const I=R===!0||typeof R=="object"&&R.capture===!0,Z=I?"capture":"bubble",G=x(Z,s),J=$(G,u);if(u===window&&!T(u,I?"bubble":"capture",s,b)&&B(s,b)){const L=p[s];L.delete(b),L.size===0&&(window.removeEventListener(s,z),p[s]=void 0)}J.has(b)&&J.delete(b),J.size===0&&G.delete(u),G.size===0&&(window.removeEventListener(s,h,Z==="capture"),v[Z][s]=void 0)}return{on:k,off:f}}const{on:ce,off:he}=Ta();function Fa(e){const t=D(!!e.value);if(t.value)return ut(t);const o=we(e,n=>{n&&(t.value=!0,o())});return ut(t)}function Pa(e){const t=O(e),o=D(t.value);return we(t,n=>{o.value=n}),typeof e=="function"?o:{__v_isRef:!0,get value(){return o.value},set value(n){e.set(n)}}}function Xr(){return Wt()!==null}const Ur=typeof window<"u",At=D(null);function zn(e){if(e.clientX>0||e.clientY>0)At.value={x:e.clientX,y:e.clientY};else{const{target:t}=e;if(t instanceof Element){const{left:o,top:n,width:r,height:i}=t.getBoundingClientRect();o>0||n>0?At.value={x:o+r/2,y:n+i/2}:At.value={x:0,y:0}}else At.value=null}}let Qt=0,Rn=!0;function Aa(){if(!Ur)return ut(D(null));Qt===0&&ce("click",document,zn,!0);const e=()=>{Qt+=1};return Rn&&(Rn=Xr())?(Et(e),Fe(()=>{Qt-=1,Qt===0&&he("click",document,zn,!0)})):e(),ut(At)}const Oa=D(void 0);let Kt=0;function Dn(){Oa.value=Date.now()}let Tn=!0;function Ia(e){if(!Ur)return ut(D(!1));const t=D(!1);let o=null;function n(){o!==null&&window.clearTimeout(o)}function r(){n(),t.value=!0,o=window.setTimeout(()=>{t.value=!1},e)}Kt===0&&ce("click",window,Dn,!0);const i=()=>{Kt+=1,ce("click",window,r,!0)};return Tn&&(Tn=Xr())?(Et(i),Fe(()=>{Kt-=1,Kt===0&&he("click",window,Dn,!0),he("click",window,r,!0),n()})):i(),ut(t)}function Fn(e,t){return we(e,o=>{o!==void 0&&(t.value=o)}),O(()=>e.value===void 0?t.value:e.value)}function Ko(){const e=D(!1);return ht(()=>{e.value=!0}),ut(e)}const Ma=(typeof window>"u"?!1:/iPad|iPhone|iPod/.test(navigator.platform)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!window.MSStream;function Ha(){return Ma}const Gr="n-drawer-body",qr="n-drawer",Qr="n-modal-body",_a="n-modal-provider",Kr="n-modal",Jr="n-popover-body",jt=typeof document<"u"&&typeof window<"u",Jo=D(!1);function Pn(){Jo.value=!0}function An(){Jo.value=!1}let Ft=0;function ei(){return jt&&(Et(()=>{Ft||(window.addEventListener("compositionstart",Pn),window.addEventListener("compositionend",An)),Ft++}),Fe(()=>{Ft<=1?(window.removeEventListener("compositionstart",Pn),window.removeEventListener("compositionend",An),Ft=0):Ft--})),Jo}let bt=0,On="",In="",Mn="",Hn="";const _n=D("0px");function ti(e){if(typeof document>"u")return;const t=document.documentElement;let o,n=!1;const r=()=>{t.style.marginRight=On,t.style.overflow=In,t.style.overflowX=Mn,t.style.overflowY=Hn,_n.value="0px"};ht(()=>{o=we(e,i=>{if(i){if(!bt){const a=window.innerWidth-t.offsetWidth;a>0&&(On=t.style.marginRight,t.style.marginRight=`${a}px`,_n.value=`${a}px`),In=t.style.overflow,Mn=t.style.overflowX,Hn=t.style.overflowY,t.style.overflow="hidden",t.style.overflowX="hidden",t.style.overflowY="hidden"}n=!0,bt++}else bt--,bt||r(),n=!1},{immediate:!0})}),Fe(()=>{o==null||o(),n&&(bt--,bt||r(),n=!1)})}function Wa(e){const t={isDeactivated:!1};let o=!1;return No(()=>{if(t.isDeactivated=!1,!o){o=!0;return}e()}),ao(()=>{t.isDeactivated=!0,o||(o=!0)}),t}function Wn(e,t,o="default"){const n=t[o];if(n===void 0)throw new Error(`[vueuc/${e}]: slot[${o}] is empty.`);return n()}const gt="@@coContext",oi={mounted(e,{value:t,modifiers:o}){e[gt]={handler:void 0},typeof t=="function"&&(e[gt].handler=t,ce("clickoutside",e,t,{capture:o.capture}))},updated(e,{value:t,modifiers:o}){const n=e[gt];typeof t=="function"?n.handler?n.handler!==t&&(he("clickoutside",e,n.handler,{capture:o.capture}),n.handler=t,ce("clickoutside",e,t,{capture:o.capture})):(e[gt].handler=t,ce("clickoutside",e,t,{capture:o.capture})):n.handler&&(he("clickoutside",e,n.handler,{capture:o.capture}),n.handler=void 0)},unmounted(e,{modifiers:t}){const{handler:o}=e[gt];o&&he("clickoutside",e,o,{capture:t.capture}),e[gt].handler=void 0}};function La(e,t){console.error(`[vdirs/${e}]: ${t}`)}class ja{constructor(){this.elementZIndex=new Map,this.nextZIndex=2e3}get elementCount(){return this.elementZIndex.size}ensureZIndex(t,o){const{elementZIndex:n}=this;if(o!==void 0){t.style.zIndex=`${o}`,n.delete(t);return}const{nextZIndex:r}=this;n.has(t)&&n.get(t)+1===this.nextZIndex||(t.style.zIndex=`${r}`,n.set(t,r),this.nextZIndex=r+1,this.squashState())}unregister(t,o){const{elementZIndex:n}=this;n.has(t)?n.delete(t):o===void 0&&La("z-index-manager/unregister-element","Element not found when unregistering."),this.squashState()}squashState(){const{elementCount:t}=this;t||(this.nextZIndex=2e3),this.nextZIndex-t>2500&&this.rearrange()}rearrange(){const t=Array.from(this.elementZIndex.entries());t.sort((o,n)=>o[1]-n[1]),this.nextZIndex=2e3,t.forEach(o=>{const n=o[0],r=this.nextZIndex++;`${r}`!==n.style.zIndex&&(n.style.zIndex=`${r}`)})}}const Bo=new ja,xt="@@ziContext",ni={mounted(e,t){const{value:o={}}=t,{zIndex:n,enabled:r}=o;e[xt]={enabled:!!r,initialized:!1},r&&(Bo.ensureZIndex(e,n),e[xt].initialized=!0)},updated(e,t){const{value:o={}}=t,{zIndex:n,enabled:r}=o,i=e[xt].enabled;r&&!i&&(Bo.ensureZIndex(e,n),e[xt].initialized=!0),e[xt].enabled=!!r},unmounted(e,t){if(!e[xt].initialized)return;const{value:o={}}=t,{zIndex:n}=o;Bo.unregister(e,n)}},Na="@css-render/vue3-ssr";function Va(e,t){return`<style cssr-id="${e}">
${t}
</style>`}function Ya(e,t,o){const{styles:n,ids:r}=o;r.has(e)||n!==null&&(r.add(e),n.push(Va(e,t)))}const Za=typeof document<"u";function ho(){if(Za)return;const e=pe(Na,null);if(e!==null)return{adapter:(t,o)=>Ya(t,o,e),context:e}}function Ln(e,t){console.error(`[vueuc/${e}]: ${t}`)}function jn(e){return typeof e=="string"?document.querySelector(e):e()}const ri=X({name:"LazyTeleport",props:{to:{type:[String,Object],default:void 0},disabled:Boolean,show:{type:Boolean,required:!0}},setup(e){return{showTeleport:Fa(ke(e,"show")),mergedTo:O(()=>{const{to:t}=e;return t??"body"})}},render(){return this.showTeleport?this.disabled?Wn("lazy-teleport",this.$slots):g(Vo,{disabled:this.disabled,to:this.mergedTo},Wn("lazy-teleport",this.$slots)):null}});var at=[],Xa=function(){return at.some(function(e){return e.activeTargets.length>0})},Ua=function(){return at.some(function(e){return e.skippedTargets.length>0})},Nn="ResizeObserver loop completed with undelivered notifications.",Ga=function(){var e;typeof ErrorEvent=="function"?e=new ErrorEvent("error",{message:Nn}):(e=document.createEvent("Event"),e.initEvent("error",!1,!1),e.message=Nn),window.dispatchEvent(e)},Ht;(function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"})(Ht||(Ht={}));var ct=function(e){return Object.freeze(e)},qa=function(){function e(t,o){this.inlineSize=t,this.blockSize=o,ct(this)}return e}(),ii=function(){function e(t,o,n,r){return this.x=t,this.y=o,this.width=n,this.height=r,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,ct(this)}return e.prototype.toJSON=function(){var t=this,o=t.x,n=t.y,r=t.top,i=t.right,a=t.bottom,l=t.left,c=t.width,d=t.height;return{x:o,y:n,top:r,right:i,bottom:a,left:l,width:c,height:d}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}(),en=function(e){return e instanceof SVGElement&&"getBBox"in e},li=function(e){if(en(e)){var t=e.getBBox(),o=t.width,n=t.height;return!o&&!n}var r=e,i=r.offsetWidth,a=r.offsetHeight;return!(i||a||e.getClientRects().length)},Vn=function(e){var t;if(e instanceof Element)return!0;var o=(t=e==null?void 0:e.ownerDocument)===null||t===void 0?void 0:t.defaultView;return!!(o&&e instanceof o.Element)},Qa=function(e){switch(e.tagName){case"INPUT":if(e.type!=="image")break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},Ot=typeof window<"u"?window:{},Jt=new WeakMap,Yn=/auto|scroll/,Ka=/^tb|vertical/,Ja=/msie|trident/i.test(Ot.navigator&&Ot.navigator.userAgent),Oe=function(e){return parseFloat(e||"0")},wt=function(e,t,o){return e===void 0&&(e=0),t===void 0&&(t=0),o===void 0&&(o=!1),new qa((o?t:e)||0,(o?e:t)||0)},Zn=ct({devicePixelContentBoxSize:wt(),borderBoxSize:wt(),contentBoxSize:wt(),contentRect:new ii(0,0,0,0)}),si=function(e,t){if(t===void 0&&(t=!1),Jt.has(e)&&!t)return Jt.get(e);if(li(e))return Jt.set(e,Zn),Zn;var o=getComputedStyle(e),n=en(e)&&e.ownerSVGElement&&e.getBBox(),r=!Ja&&o.boxSizing==="border-box",i=Ka.test(o.writingMode||""),a=!n&&Yn.test(o.overflowY||""),l=!n&&Yn.test(o.overflowX||""),c=n?0:Oe(o.paddingTop),d=n?0:Oe(o.paddingRight),v=n?0:Oe(o.paddingBottom),p=n?0:Oe(o.paddingLeft),S=n?0:Oe(o.borderTopWidth),y=n?0:Oe(o.borderRightWidth),h=n?0:Oe(o.borderBottomWidth),z=n?0:Oe(o.borderLeftWidth),x=p+d,m=c+v,$=z+y,T=S+h,B=l?e.offsetHeight-T-e.clientHeight:0,k=a?e.offsetWidth-$-e.clientWidth:0,f=r?x+$:0,s=r?m+T:0,u=n?n.width:Oe(o.width)-f-k,b=n?n.height:Oe(o.height)-s-B,R=u+x+k+$,A=b+m+B+T,I=ct({devicePixelContentBoxSize:wt(Math.round(u*devicePixelRatio),Math.round(b*devicePixelRatio),i),borderBoxSize:wt(R,A,i),contentBoxSize:wt(u,b,i),contentRect:new ii(p,c,u,b)});return Jt.set(e,I),I},ai=function(e,t,o){var n=si(e,o),r=n.borderBoxSize,i=n.contentBoxSize,a=n.devicePixelContentBoxSize;switch(t){case Ht.DEVICE_PIXEL_CONTENT_BOX:return a;case Ht.BORDER_BOX:return r;default:return i}},ec=function(){function e(t){var o=si(t);this.target=t,this.contentRect=o.contentRect,this.borderBoxSize=ct([o.borderBoxSize]),this.contentBoxSize=ct([o.contentBoxSize]),this.devicePixelContentBoxSize=ct([o.devicePixelContentBoxSize])}return e}(),ci=function(e){if(li(e))return 1/0;for(var t=0,o=e.parentNode;o;)t+=1,o=o.parentNode;return t},tc=function(){var e=1/0,t=[];at.forEach(function(a){if(a.activeTargets.length!==0){var l=[];a.activeTargets.forEach(function(d){var v=new ec(d.target),p=ci(d.target);l.push(v),d.lastReportedSize=ai(d.target,d.observedBox),p<e&&(e=p)}),t.push(function(){a.callback.call(a.observer,l,a.observer)}),a.activeTargets.splice(0,a.activeTargets.length)}});for(var o=0,n=t;o<n.length;o++){var r=n[o];r()}return e},Xn=function(e){at.forEach(function(o){o.activeTargets.splice(0,o.activeTargets.length),o.skippedTargets.splice(0,o.skippedTargets.length),o.observationTargets.forEach(function(r){r.isActive()&&(ci(r.target)>e?o.activeTargets.push(r):o.skippedTargets.push(r))})})},oc=function(){var e=0;for(Xn(e);Xa();)e=tc(),Xn(e);return Ua()&&Ga(),e>0},ko,di=[],nc=function(){return di.splice(0).forEach(function(e){return e()})},rc=function(e){if(!ko){var t=0,o=document.createTextNode(""),n={characterData:!0};new MutationObserver(function(){return nc()}).observe(o,n),ko=function(){o.textContent="".concat(t?t--:t++)}}di.push(e),ko()},ic=function(e){rc(function(){requestAnimationFrame(e)})},ro=0,lc=function(){return!!ro},sc=250,ac={attributes:!0,characterData:!0,childList:!0,subtree:!0},Un=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],Gn=function(e){return e===void 0&&(e=0),Date.now()+e},zo=!1,cc=function(){function e(){var t=this;this.stopped=!0,this.listener=function(){return t.schedule()}}return e.prototype.run=function(t){var o=this;if(t===void 0&&(t=sc),!zo){zo=!0;var n=Gn(t);ic(function(){var r=!1;try{r=oc()}finally{if(zo=!1,t=n-Gn(),!lc())return;r?o.run(1e3):t>0?o.run(t):o.start()}})}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var t=this,o=function(){return t.observer&&t.observer.observe(document.body,ac)};document.body?o():Ot.addEventListener("DOMContentLoaded",o)},e.prototype.start=function(){var t=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),Un.forEach(function(o){return Ot.addEventListener(o,t.listener,!0)}))},e.prototype.stop=function(){var t=this;this.stopped||(this.observer&&this.observer.disconnect(),Un.forEach(function(o){return Ot.removeEventListener(o,t.listener,!0)}),this.stopped=!0)},e}(),Ho=new cc,qn=function(e){!ro&&e>0&&Ho.start(),ro+=e,!ro&&Ho.stop()},dc=function(e){return!en(e)&&!Qa(e)&&getComputedStyle(e).display==="inline"},uc=function(){function e(t,o){this.target=t,this.observedBox=o||Ht.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var t=ai(this.target,this.observedBox,!0);return dc(this.target)&&(this.lastReportedSize=t),this.lastReportedSize.inlineSize!==t.inlineSize||this.lastReportedSize.blockSize!==t.blockSize},e}(),fc=function(){function e(t,o){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=t,this.callback=o}return e}(),eo=new WeakMap,Qn=function(e,t){for(var o=0;o<e.length;o+=1)if(e[o].target===t)return o;return-1},to=function(){function e(){}return e.connect=function(t,o){var n=new fc(t,o);eo.set(t,n)},e.observe=function(t,o,n){var r=eo.get(t),i=r.observationTargets.length===0;Qn(r.observationTargets,o)<0&&(i&&at.push(r),r.observationTargets.push(new uc(o,n&&n.box)),qn(1),Ho.schedule())},e.unobserve=function(t,o){var n=eo.get(t),r=Qn(n.observationTargets,o),i=n.observationTargets.length===1;r>=0&&(i&&at.splice(at.indexOf(n),1),n.observationTargets.splice(r,1),qn(-1))},e.disconnect=function(t){var o=this,n=eo.get(t);n.observationTargets.slice().forEach(function(r){return o.unobserve(t,r.target)}),n.activeTargets.splice(0,n.activeTargets.length)},e}(),hc=function(){function e(t){if(arguments.length===0)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if(typeof t!="function")throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");to.connect(this,t)}return e.prototype.observe=function(t,o){if(arguments.length===0)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!Vn(t))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");to.observe(this,t,o)},e.prototype.unobserve=function(t){if(arguments.length===0)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!Vn(t))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");to.unobserve(this,t)},e.prototype.disconnect=function(){to.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();class vc{constructor(){this.handleResize=this.handleResize.bind(this),this.observer=new(typeof window<"u"&&window.ResizeObserver||hc)(this.handleResize),this.elHandlersMap=new Map}handleResize(t){for(const o of t){const n=this.elHandlersMap.get(o.target);n!==void 0&&n(o)}}registerHandler(t,o){this.elHandlersMap.set(t,o),this.observer.observe(t)}unregisterHandler(t){this.elHandlersMap.has(t)&&(this.elHandlersMap.delete(t),this.observer.unobserve(t))}}const Kn=new vc,Jn=X({name:"ResizeObserver",props:{onResize:Function},setup(e){let t=!1;const o=Wt().proxy;function n(r){const{onResize:i}=e;i!==void 0&&i(r)}ht(()=>{const r=o.$el;if(r===void 0){Ln("resize-observer","$el does not exist.");return}if(r.nextElementSibling!==r.nextSibling&&r.nodeType===3&&r.nodeValue!==""){Ln("resize-observer","$el can not be observed (it may be a text node).");return}r.nextElementSibling!==null&&(Kn.registerHandler(r.nextElementSibling,n),t=!0)}),Fe(()=>{t&&Kn.unregisterHandler(o.$el.nextElementSibling)})},render(){return vr(this.$slots,"default")}});function ui(e){return e instanceof HTMLElement}function fi(e){for(let t=0;t<e.childNodes.length;t++){const o=e.childNodes[t];if(ui(o)&&(vi(o)||fi(o)))return!0}return!1}function hi(e){for(let t=e.childNodes.length-1;t>=0;t--){const o=e.childNodes[t];if(ui(o)&&(vi(o)||hi(o)))return!0}return!1}function vi(e){if(!pc(e))return!1;try{e.focus({preventScroll:!0})}catch{}return document.activeElement===e}function pc(e){if(e.tabIndex>0||e.tabIndex===0&&e.getAttribute("tabIndex")!==null)return!0;if(e.getAttribute("disabled"))return!1;switch(e.nodeName){case"A":return!!e.href&&e.rel!=="ignore";case"INPUT":return e.type!=="hidden"&&e.type!=="file";case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}}let Pt=[];const pi=X({name:"FocusTrap",props:{disabled:Boolean,active:Boolean,autoFocus:{type:Boolean,default:!0},onEsc:Function,initialFocusTo:String,finalFocusTo:String,returnFocusOnDeactivated:{type:Boolean,default:!0}},setup(e){const t=Ba(),o=D(null),n=D(null);let r=!1,i=!1;const a=typeof document>"u"?null:document.activeElement;function l(){return Pt[Pt.length-1]===t}function c(x){var m;x.code==="Escape"&&l()&&((m=e.onEsc)===null||m===void 0||m.call(e,x))}ht(()=>{we(()=>e.active,x=>{x?(p(),ce("keydown",document,c)):(he("keydown",document,c),r&&S())},{immediate:!0})}),Fe(()=>{he("keydown",document,c),r&&S()});function d(x){if(!i&&l()){const m=v();if(m===null||m.contains(qo(x)))return;y("first")}}function v(){const x=o.value;if(x===null)return null;let m=x;for(;m=m.nextSibling,!(m===null||m instanceof Element&&m.tagName==="DIV"););return m}function p(){var x;if(!e.disabled){if(Pt.push(t),e.autoFocus){const{initialFocusTo:m}=e;m===void 0?y("first"):(x=jn(m))===null||x===void 0||x.focus({preventScroll:!0})}r=!0,document.addEventListener("focus",d,!0)}}function S(){var x;if(e.disabled||(document.removeEventListener("focus",d,!0),Pt=Pt.filter($=>$!==t),l()))return;const{finalFocusTo:m}=e;m!==void 0?(x=jn(m))===null||x===void 0||x.focus({preventScroll:!0}):e.returnFocusOnDeactivated&&a instanceof HTMLElement&&(i=!0,a.focus({preventScroll:!0}),i=!1)}function y(x){if(l()&&e.active){const m=o.value,$=n.value;if(m!==null&&$!==null){const T=v();if(T==null||T===$){i=!0,m.focus({preventScroll:!0}),i=!1;return}i=!0;const B=x==="first"?fi(T):hi(T);i=!1,B||(i=!0,m.focus({preventScroll:!0}),i=!1)}}}function h(x){if(i)return;const m=v();m!==null&&(x.relatedTarget!==null&&m.contains(x.relatedTarget)?y("last"):y("first"))}function z(x){i||(x.relatedTarget!==null&&x.relatedTarget===o.value?y("last"):y("first"))}return{focusableStartRef:o,focusableEndRef:n,focusableStyle:"position: absolute; height: 0; width: 0;",handleStartFocus:h,handleEndFocus:z}},render(){const{default:e}=this.$slots;if(e===void 0)return null;if(this.disabled)return e();const{active:t,focusableStyle:o}=this;return g(dt,null,[g("div",{"aria-hidden":"true",tabindex:t?"0":"-1",ref:"focusableStartRef",style:o,onFocus:this.handleStartFocus}),e(),g("div",{"aria-hidden":"true",style:o,ref:"focusableEndRef",tabindex:t?"0":"-1",onFocus:this.handleEndFocus})])}});function er(e){return e.replace(/#|\(|\)|,|\s|\./g,"_")}const mc=/^(\d|\.)+$/,tr=/(\d|\.)+/;function or(e,{c:t=1,offset:o=0,attachPx:n=!0}={}){if(typeof e=="number"){const r=(e+o)*t;return r===0?"0":`${r}px`}else if(typeof e=="string")if(mc.test(e)){const r=(Number(e)+o)*t;return n?r===0?"0":`${r}px`:`${r}`}else{const r=tr.exec(e);return r?e.replace(tr,String((Number(r[0])+o)*t)):e}return e}function nr(e){const{left:t,right:o,top:n,bottom:r}=rt(e);return`${n} ${t} ${r} ${o}`}const bc=new WeakSet;function mi(e){return!bc.has(e)}function bi(e,t){console.error(`[naive/${e}]: ${t}`)}function gc(e,t){throw new Error(`[naive/${e}]: ${t}`)}function ge(e,...t){if(Array.isArray(e))e.forEach(o=>ge(o,...t));else return e(...t)}function _o(e,t=!0,o=[]){return e.forEach(n=>{if(n!==null){if(typeof n!="object"){(typeof n=="string"||typeof n=="number")&&o.push(N(String(n)));return}if(Array.isArray(n)){_o(n,t,o);return}if(n.type===dt){if(n.children===null)return;Array.isArray(n.children)&&_o(n.children,t,o)}else{if(n.type===br&&t)return;o.push(n)}}}),o}function xc(e,t,o){if(!t)return null;const n=_o(t(o));return n.length===1?n[0]:(bi("getFirstSlotVNode",`slot[${e}] should have exactly one child`),null)}function Wo(e,t=[],o){const n={};return t.forEach(r=>{n[r]=e[r]}),Object.assign(n,o)}function tn(e){return Object.keys(e)}function yt(e,...t){return typeof e=="function"?e(...t):typeof e=="string"?N(e):typeof e=="number"?N(String(e)):null}function Ie(e){return e.some(t=>qi(t)?!(t.type===br||t.type===dt&&!Ie(t.children)):!0)?e:null}function rr(e,t){return e&&Ie(e())||t()}function De(e,t){const o=e&&Ie(e());return t(o||null)}function yc(e){return!(e&&Ie(e()))}const ir=X({render(){var e,t;return(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e)}}),$t="n-config-provider",Cc="n";function pt(e={},t={defaultBordered:!0}){const o=pe($t,null);return{inlineThemeDisabled:o==null?void 0:o.inlineThemeDisabled,mergedRtlRef:o==null?void 0:o.mergedRtlRef,mergedComponentPropsRef:o==null?void 0:o.mergedComponentPropsRef,mergedBreakpointsRef:o==null?void 0:o.mergedBreakpointsRef,mergedBorderedRef:O(()=>{var n,r;const{bordered:i}=e;return i!==void 0?i:(r=(n=o==null?void 0:o.mergedBorderedRef.value)!==null&&n!==void 0?n:t.defaultBordered)!==null&&r!==void 0?r:!0}),mergedClsPrefixRef:o?o.mergedClsPrefixRef:Qi(Cc),namespaceRef:O(()=>o==null?void 0:o.mergedNamespaceRef.value)}}function Bt(e,t,o,n){o||gc("useThemeClass","cssVarsRef is not passed");const r=pe($t,null),i=r==null?void 0:r.mergedThemeHashRef,a=r==null?void 0:r.styleMountTarget,l=D(""),c=ho();let d;const v=`__${e}`,p=()=>{let S=v;const y=t?t.value:void 0,h=i==null?void 0:i.value;h&&(S+=`-${h}`),y&&(S+=`-${y}`);const{themeOverrides:z,builtinThemeOverrides:x}=n;z&&(S+=`-${Oo(JSON.stringify(z))}`),x&&(S+=`-${Oo(JSON.stringify(x))}`),l.value=S,d=()=>{const m=o.value;let $="";for(const T in m)$+=`${T}: ${m[T]};`;C(`.${S}`,$).mount({id:S,ssr:c,parent:a}),d=void 0}};return co(()=>{p()}),{themeClass:l,onRender:()=>{d==null||d()}}}const lr="n-form-item";function wc(e,{defaultSize:t="medium",mergedSize:o,mergedDisabled:n}={}){const r=pe(lr,null);Ce(lr,null);const i=O(o?()=>o(r):()=>{const{size:c}=e;if(c)return c;if(r){const{mergedSize:d}=r;if(d.value!==void 0)return d.value}return t}),a=O(n?()=>n(r):()=>{const{disabled:c}=e;return c!==void 0?c:r?r.disabled.value:!1}),l=O(()=>{const{status:c}=e;return c||(r==null?void 0:r.mergedValidationStatus.value)});return Fe(()=>{r&&r.restoreValidation()}),{mergedSizeRef:i,mergedDisabledRef:a,mergedStatusRef:l,nTriggerFormBlur(){r&&r.handleContentBlur()},nTriggerFormChange(){r&&r.handleContentChange()},nTriggerFormFocus(){r&&r.handleContentFocus()},nTriggerFormInput(){r&&r.handleContentInput()}}}const _t="naive-ui-style";function Nt(e,t,o){if(!t)return;const n=ho(),r=O(()=>{const{value:l}=t;if(!l)return;const c=l[e];if(c)return c}),i=pe($t,null),a=()=>{co(()=>{const{value:l}=o,c=`${l}${e}Rtl`;if(ca(c,n))return;const{value:d}=r;d&&d.style.mount({id:c,head:!0,anchorMetaName:_t,props:{bPrefix:l?`.${l}-`:void 0},ssr:n,parent:i==null?void 0:i.styleMountTarget})})};return n?a():Et(a),r}const We={fontFamily:'v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',fontFamilyMono:"v-mono, SFMono-Regular, Menlo, Consolas, Courier, monospace",fontWeight:"400",fontWeightStrong:"500",cubicBezierEaseInOut:"cubic-bezier(.4, 0, .2, 1)",cubicBezierEaseOut:"cubic-bezier(0, 0, .2, 1)",cubicBezierEaseIn:"cubic-bezier(.4, 0, 1, 1)",borderRadius:"3px",borderRadiusSmall:"2px",fontSize:"14px",fontSizeMini:"12px",fontSizeTiny:"12px",fontSizeSmall:"14px",fontSizeMedium:"14px",fontSizeLarge:"15px",fontSizeHuge:"16px",lineHeight:"1.6",heightMini:"16px",heightTiny:"22px",heightSmall:"28px",heightMedium:"34px",heightLarge:"40px",heightHuge:"46px"},{fontSize:Sc,fontFamily:Ec,lineHeight:$c}=We,gi=C("body",`
 margin: 0;
 font-size: ${Sc};
 font-family: ${Ec};
 line-height: ${$c};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`,[C("input",`
 font-family: inherit;
 font-size: inherit;
 `)]);function vo(e,t,o){if(!t)return;const n=ho(),r=pe($t,null),i=()=>{const a=o.value;t.mount({id:a===void 0?e:a+e,head:!0,anchorMetaName:_t,props:{bPrefix:a?`.${a}-`:void 0},ssr:n,parent:r==null?void 0:r.styleMountTarget}),r!=null&&r.preflightStyleDisabled||gi.mount({id:"n-global",head:!0,anchorMetaName:_t,ssr:n,parent:r==null?void 0:r.styleMountTarget})};n?i():Et(i)}function $e(e,t,o,n,r,i){const a=ho(),l=pe($t,null);if(o){const d=()=>{const v=i==null?void 0:i.value;o.mount({id:v===void 0?t:v+t,head:!0,props:{bPrefix:v?`.${v}-`:void 0},anchorMetaName:_t,ssr:a,parent:l==null?void 0:l.styleMountTarget}),l!=null&&l.preflightStyleDisabled||gi.mount({id:"n-global",head:!0,anchorMetaName:_t,ssr:a,parent:l==null?void 0:l.styleMountTarget})};a?d():Et(d)}return O(()=>{var d;const{theme:{common:v,self:p,peers:S={}}={},themeOverrides:y={},builtinThemeOverrides:h={}}=r,{common:z,peers:x}=y,{common:m=void 0,[e]:{common:$=void 0,self:T=void 0,peers:B={}}={}}=(l==null?void 0:l.mergedThemeRef.value)||{},{common:k=void 0,[e]:f={}}=(l==null?void 0:l.mergedThemeOverridesRef.value)||{},{common:s,peers:u={}}=f,b=Yt({},v||$||m||n.common,k,s,z),R=Yt((d=p||T||n.self)===null||d===void 0?void 0:d(b),h,f,y);return{common:b,self:R,peers:Yt({},n.peers,B,S),peerOverrides:Yt({},h.peers,u,x)}})}$e.props={theme:Object,themeOverrides:Object,builtinThemeOverrides:Object};const Bc=Y("base-icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`,[C("svg",`
 height: 1em;
 width: 1em;
 `)]),xi=X({name:"BaseIcon",props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(e){vo("-base-icon",Bc,ke(e,"clsPrefix"))},render(){return g("i",{class:`${this.clsPrefix}-base-icon`,onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},this.$slots)}}),yi=X({name:"BaseIconSwitchTransition",setup(e,{slots:t}){const o=Ko();return()=>g(Me,{name:"icon-switch-transition",appear:o.value},t)}});function Vt(e,t){const o=X({render(){return t()}});return X({name:Ml(e),setup(){var n;const r=(n=pe($t,null))===null||n===void 0?void 0:n.mergedIconsRef;return()=>{var i;const a=(i=r==null?void 0:r.value)===null||i===void 0?void 0:i[e];return a?a():g(o,null)}}})}const kc=Vt("close",()=>g("svg",{viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0},g("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},g("g",{fill:"currentColor","fill-rule":"nonzero"},g("path",{d:"M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"}))))),zc=Vt("error",()=>g("svg",{viewBox:"0 0 48 48",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},g("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},g("g",{"fill-rule":"nonzero"},g("path",{d:"M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M17.8838835,16.1161165 L17.7823881,16.0249942 C17.3266086,15.6583353 16.6733914,15.6583353 16.2176119,16.0249942 L16.1161165,16.1161165 L16.0249942,16.2176119 C15.6583353,16.6733914 15.6583353,17.3266086 16.0249942,17.7823881 L16.1161165,17.8838835 L22.233,24 L16.1161165,30.1161165 L16.0249942,30.2176119 C15.6583353,30.6733914 15.6583353,31.3266086 16.0249942,31.7823881 L16.1161165,31.8838835 L16.2176119,31.9750058 C16.6733914,32.3416647 17.3266086,32.3416647 17.7823881,31.9750058 L17.8838835,31.8838835 L24,25.767 L30.1161165,31.8838835 L30.2176119,31.9750058 C30.6733914,32.3416647 31.3266086,32.3416647 31.7823881,31.9750058 L31.8838835,31.8838835 L31.9750058,31.7823881 C32.3416647,31.3266086 32.3416647,30.6733914 31.9750058,30.2176119 L31.8838835,30.1161165 L25.767,24 L31.8838835,17.8838835 L31.9750058,17.7823881 C32.3416647,17.3266086 32.3416647,16.6733914 31.9750058,16.2176119 L31.8838835,16.1161165 L31.7823881,16.0249942 C31.3266086,15.6583353 30.6733914,15.6583353 30.2176119,16.0249942 L30.1161165,16.1161165 L24,22.233 L17.8838835,16.1161165 L17.7823881,16.0249942 L17.8838835,16.1161165 Z"}))))),sr=Vt("info",()=>g("svg",{viewBox:"0 0 28 28",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},g("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},g("g",{"fill-rule":"nonzero"},g("path",{d:"M14,2 C20.6274,2 26,7.37258 26,14 C26,20.6274 20.6274,26 14,26 C7.37258,26 2,20.6274 2,14 C2,7.37258 7.37258,2 14,2 Z M14,11 C13.4477,11 13,11.4477 13,12 L13,12 L13,20 C13,20.5523 13.4477,21 14,21 C14.5523,21 15,20.5523 15,20 L15,20 L15,12 C15,11.4477 14.5523,11 14,11 Z M14,6.75 C13.3096,6.75 12.75,7.30964 12.75,8 C12.75,8.69036 13.3096,9.25 14,9.25 C14.6904,9.25 15.25,8.69036 15.25,8 C15.25,7.30964 14.6904,6.75 14,6.75 Z"}))))),Rc=Vt("success",()=>g("svg",{viewBox:"0 0 48 48",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},g("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},g("g",{"fill-rule":"nonzero"},g("path",{d:"M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M32.6338835,17.6161165 C32.1782718,17.1605048 31.4584514,17.1301307 30.9676119,17.5249942 L30.8661165,17.6161165 L20.75,27.732233 L17.1338835,24.1161165 C16.6457281,23.6279612 15.8542719,23.6279612 15.3661165,24.1161165 C14.9105048,24.5717282 14.8801307,25.2915486 15.2749942,25.7823881 L15.3661165,25.8838835 L19.8661165,30.3838835 C20.3217282,30.8394952 21.0415486,30.8698693 21.5323881,30.4750058 L21.6338835,30.3838835 L32.6338835,19.3838835 C33.1220388,18.8957281 33.1220388,18.1042719 32.6338835,17.6161165 Z"}))))),Dc=Vt("warning",()=>g("svg",{viewBox:"0 0 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},g("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},g("g",{"fill-rule":"nonzero"},g("path",{d:"M12,2 C17.523,2 22,6.478 22,12 C22,17.522 17.523,22 12,22 C6.477,22 2,17.522 2,12 C2,6.478 6.477,2 12,2 Z M12.0018002,15.0037242 C11.450254,15.0037242 11.0031376,15.4508407 11.0031376,16.0023869 C11.0031376,16.553933 11.450254,17.0010495 12.0018002,17.0010495 C12.5533463,17.0010495 13.0004628,16.553933 13.0004628,16.0023869 C13.0004628,15.4508407 12.5533463,15.0037242 12.0018002,15.0037242 Z M11.99964,7 C11.4868042,7.00018474 11.0642719,7.38637706 11.0066858,7.8837365 L11,8.00036004 L11.0018003,13.0012393 L11.00857,13.117858 C11.0665141,13.6151758 11.4893244,14.0010638 12.0021602,14.0008793 C12.514996,14.0006946 12.9375283,13.6145023 12.9951144,13.1171428 L13.0018002,13.0005193 L13,7.99964009 L12.9932303,7.8830214 C12.9352861,7.38570354 12.5124758,6.99981552 11.99964,7 Z"}))))),{cubicBezierEaseInOut:Tc}=We;function Lo({originalTransform:e="",left:t=0,top:o=0,transition:n=`all .3s ${Tc} !important`}={}){return[C("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:`${e} scale(0.75)`,left:t,top:o,opacity:0}),C("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${e}`,left:t,top:o,opacity:1}),C("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:t,top:o,transition:n})]}const Fc=Y("base-close",`
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 background-color: transparent;
 color: var(--n-close-icon-color);
 border-radius: var(--n-close-border-radius);
 height: var(--n-close-size);
 width: var(--n-close-size);
 font-size: var(--n-close-icon-size);
 outline: none;
 border: none;
 position: relative;
 padding: 0;
`,[H("absolute",`
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `),C("&::before",`
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `),Io("disabled",[C("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),C("&:hover::before",`
 background-color: var(--n-close-color-hover);
 `),C("&:focus::before",`
 background-color: var(--n-close-color-hover);
 `),C("&:active",`
 color: var(--n-close-icon-color-pressed);
 `),C("&:active::before",`
 background-color: var(--n-close-color-pressed);
 `)]),H("disabled",`
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `),H("round",[C("&::before",`
 border-radius: 50%;
 `)])]),Ci=X({name:"BaseClose",props:{isButtonTag:{type:Boolean,default:!0},clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},focusable:{type:Boolean,default:!0},round:Boolean,onClick:Function,absolute:Boolean},setup(e){return vo("-base-close",Fc,ke(e,"clsPrefix")),()=>{const{clsPrefix:t,disabled:o,absolute:n,round:r,isButtonTag:i}=e;return g(i?"button":"div",{type:i?"button":void 0,tabindex:o||!e.focusable?-1:0,"aria-disabled":o,"aria-label":"close",role:i?void 0:"button",disabled:o,class:[`${t}-base-close`,n&&`${t}-base-close--absolute`,o&&`${t}-base-close--disabled`,r&&`${t}-base-close--round`],onMousedown:l=>{e.focusable||l.preventDefault()},onClick:e.onClick},g(xi,{clsPrefix:t},{default:()=>g(kc,null)}))}}}),Pc=X({name:"FadeInExpandTransition",props:{appear:Boolean,group:Boolean,mode:String,onLeave:Function,onAfterLeave:Function,onAfterEnter:Function,width:Boolean,reverse:Boolean},setup(e,{slots:t}){function o(l){e.width?l.style.maxWidth=`${l.offsetWidth}px`:l.style.maxHeight=`${l.offsetHeight}px`,l.offsetWidth}function n(l){e.width?l.style.maxWidth="0":l.style.maxHeight="0",l.offsetWidth;const{onLeave:c}=e;c&&c()}function r(l){e.width?l.style.maxWidth="":l.style.maxHeight="";const{onAfterLeave:c}=e;c&&c()}function i(l){if(l.style.transition="none",e.width){const c=l.offsetWidth;l.style.maxWidth="0",l.offsetWidth,l.style.transition="",l.style.maxWidth=`${c}px`}else if(e.reverse)l.style.maxHeight=`${l.offsetHeight}px`,l.offsetHeight,l.style.transition="",l.style.maxHeight="0";else{const c=l.offsetHeight;l.style.maxHeight="0",l.offsetWidth,l.style.transition="",l.style.maxHeight=`${c}px`}l.offsetWidth}function a(l){var c;e.width?l.style.maxWidth="":e.reverse||(l.style.maxHeight=""),(c=e.onAfterEnter)===null||c===void 0||c.call(e)}return()=>{const{group:l,width:c,appear:d,mode:v}=e,p=l?Ki:Me,S={name:c?"fade-in-width-expand-transition":"fade-in-height-expand-transition",appear:d,onEnter:i,onAfterEnter:a,onBeforeLeave:o,onLeave:n,onAfterLeave:r};return l||(S.mode=v),g(p,S,t)}}}),Ac=C([C("@keyframes rotator",`
 0% {
 -webkit-transform: rotate(0deg);
 transform: rotate(0deg);
 }
 100% {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }`),Y("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[F("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[Lo()]),F("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[Lo({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),F("container",`
 animation: rotator 3s linear infinite both;
 `,[F("icon",`
 height: 1em;
 width: 1em;
 `)])])]),Ro="1.6s",Oc={strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0}},Ic=X({name:"BaseLoading",props:Object.assign({clsPrefix:{type:String,required:!0},show:{type:Boolean,default:!0},scale:{type:Number,default:1},radius:{type:Number,default:100}},Oc),setup(e){vo("-base-loading",Ac,ke(e,"clsPrefix"))},render(){const{clsPrefix:e,radius:t,strokeWidth:o,stroke:n,scale:r}=this,i=t/r;return g("div",{class:`${e}-base-loading`,role:"img","aria-label":"loading"},g(yi,null,{default:()=>this.show?g("div",{key:"icon",class:`${e}-base-loading__transition-wrapper`},g("div",{class:`${e}-base-loading__container`},g("svg",{class:`${e}-base-loading__icon`,viewBox:`0 0 ${2*i} ${2*i}`,xmlns:"http://www.w3.org/2000/svg",style:{color:n}},g("g",null,g("animateTransform",{attributeName:"transform",type:"rotate",values:`0 ${i} ${i};270 ${i} ${i}`,begin:"0s",dur:Ro,fill:"freeze",repeatCount:"indefinite"}),g("circle",{class:`${e}-base-loading__icon`,fill:"none",stroke:"currentColor","stroke-width":o,"stroke-linecap":"round",cx:i,cy:i,r:t-o/2,"stroke-dasharray":5.67*t,"stroke-dashoffset":18.48*t},g("animateTransform",{attributeName:"transform",type:"rotate",values:`0 ${i} ${i};135 ${i} ${i};450 ${i} ${i}`,begin:"0s",dur:Ro,fill:"freeze",repeatCount:"indefinite"}),g("animate",{attributeName:"stroke-dashoffset",values:`${5.67*t};${1.42*t};${5.67*t}`,begin:"0s",dur:Ro,fill:"freeze",repeatCount:"indefinite"})))))):g("div",{key:"placeholder",class:`${e}-base-loading__placeholder`},this.$slots)}))}}),{cubicBezierEaseInOut:ar}=We;function on({name:e="fade-in",enterDuration:t="0.2s",leaveDuration:o="0.2s",enterCubicBezier:n=ar,leaveCubicBezier:r=ar}={}){return[C(`&.${e}-transition-enter-active`,{transition:`all ${t} ${n}!important`}),C(`&.${e}-transition-leave-active`,{transition:`all ${o} ${r}!important`}),C(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`,{opacity:0}),C(`&.${e}-transition-leave-from, &.${e}-transition-enter-to`,{opacity:1})]}const M={neutralBase:"#FFF",neutralInvertBase:"#000",neutralTextBase:"#000",neutralPopover:"#fff",neutralCard:"#fff",neutralModal:"#fff",neutralBody:"#fff",alpha1:"0.82",alpha2:"0.72",alpha3:"0.38",alpha4:"0.24",alpha5:"0.18",alphaClose:"0.6",alphaDisabled:"0.5",alphaAvatar:"0.2",alphaProgressRail:".08",alphaInput:"0",alphaScrollbar:"0.25",alphaScrollbarHover:"0.4",primaryHover:"#36ad6a",primaryDefault:"#18a058",primaryActive:"#0c7a43",primarySuppl:"#36ad6a",infoHover:"#4098fc",infoDefault:"#2080f0",infoActive:"#1060c9",infoSuppl:"#4098fc",errorHover:"#de576d",errorDefault:"#d03050",errorActive:"#ab1f3f",errorSuppl:"#de576d",warningHover:"#fcb040",warningDefault:"#f0a020",warningActive:"#c97c10",warningSuppl:"#fcb040",successHover:"#36ad6a",successDefault:"#18a058",successActive:"#0c7a43",successSuppl:"#36ad6a"},Mc=ft(M.neutralBase),wi=ft(M.neutralInvertBase),Hc=`rgba(${wi.slice(0,3).join(", ")}, `;function cr(e){return`${Hc+String(e)})`}function ue(e){const t=Array.from(wi);return t[3]=Number(e),Qo(Mc,t)}const kt=Object.assign(Object.assign({name:"common"},We),{baseColor:M.neutralBase,primaryColor:M.primaryDefault,primaryColorHover:M.primaryHover,primaryColorPressed:M.primaryActive,primaryColorSuppl:M.primarySuppl,infoColor:M.infoDefault,infoColorHover:M.infoHover,infoColorPressed:M.infoActive,infoColorSuppl:M.infoSuppl,successColor:M.successDefault,successColorHover:M.successHover,successColorPressed:M.successActive,successColorSuppl:M.successSuppl,warningColor:M.warningDefault,warningColorHover:M.warningHover,warningColorPressed:M.warningActive,warningColorSuppl:M.warningSuppl,errorColor:M.errorDefault,errorColorHover:M.errorHover,errorColorPressed:M.errorActive,errorColorSuppl:M.errorSuppl,textColorBase:M.neutralTextBase,textColor1:"rgb(31, 34, 37)",textColor2:"rgb(51, 54, 57)",textColor3:"rgb(118, 124, 130)",textColorDisabled:ue(M.alpha4),placeholderColor:ue(M.alpha4),placeholderColorDisabled:ue(M.alpha5),iconColor:ue(M.alpha4),iconColorHover:qt(ue(M.alpha4),{lightness:.75}),iconColorPressed:qt(ue(M.alpha4),{lightness:.9}),iconColorDisabled:ue(M.alpha5),opacity1:M.alpha1,opacity2:M.alpha2,opacity3:M.alpha3,opacity4:M.alpha4,opacity5:M.alpha5,dividerColor:"rgb(239, 239, 245)",borderColor:"rgb(224, 224, 230)",closeIconColor:ue(Number(M.alphaClose)),closeIconColorHover:ue(Number(M.alphaClose)),closeIconColorPressed:ue(Number(M.alphaClose)),closeColorHover:"rgba(0, 0, 0, .09)",closeColorPressed:"rgba(0, 0, 0, .13)",clearColor:ue(M.alpha4),clearColorHover:qt(ue(M.alpha4),{lightness:.75}),clearColorPressed:qt(ue(M.alpha4),{lightness:.9}),scrollbarColor:cr(M.alphaScrollbar),scrollbarColorHover:cr(M.alphaScrollbarHover),scrollbarWidth:"5px",scrollbarHeight:"5px",scrollbarBorderRadius:"5px",progressRailColor:ue(M.alphaProgressRail),railColor:"rgb(219, 219, 223)",popoverColor:M.neutralPopover,tableColor:M.neutralCard,cardColor:M.neutralCard,modalColor:M.neutralModal,bodyColor:M.neutralBody,tagColor:"#eee",avatarColor:ue(M.alphaAvatar),invertedColor:"rgb(0, 20, 40)",inputColor:ue(M.alphaInput),codeColor:"rgb(244, 244, 248)",tabColor:"rgb(247, 247, 250)",actionColor:"rgb(250, 250, 252)",tableHeaderColor:"rgb(250, 250, 252)",hoverColor:"rgb(243, 243, 245)",tableColorHover:"rgba(0, 0, 100, 0.03)",tableColorStriped:"rgba(0, 0, 100, 0.02)",pressedColor:"rgb(237, 237, 239)",opacityDisabled:M.alphaDisabled,inputColorDisabled:"rgb(250, 250, 252)",buttonColor2:"rgba(46, 51, 56, .05)",buttonColor2Hover:"rgba(46, 51, 56, .09)",buttonColor2Pressed:"rgba(46, 51, 56, .13)",boxShadow1:"0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",boxShadow2:"0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",boxShadow3:"0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"}),_c={railInsetHorizontalBottom:"auto 2px 4px 2px",railInsetHorizontalTop:"4px 2px auto 2px",railInsetVerticalRight:"2px 4px 2px auto",railInsetVerticalLeft:"2px auto 2px 4px",railColor:"transparent"};function Wc(e){const{scrollbarColor:t,scrollbarColorHover:o,scrollbarHeight:n,scrollbarWidth:r,scrollbarBorderRadius:i}=e;return Object.assign(Object.assign({},_c),{height:n,width:r,borderRadius:i,color:t,colorHover:o})}const nn={name:"Scrollbar",common:kt,self:Wc},Lc=Y("scrollbar",`
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`,[C(">",[Y("scrollbar-container",`
 width: 100%;
 overflow: scroll;
 height: 100%;
 min-height: inherit;
 max-height: inherit;
 scrollbar-width: none;
 `,[C("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),C(">",[Y("scrollbar-content",`
 box-sizing: border-box;
 min-width: 100%;
 `)])])]),C(">, +",[Y("scrollbar-rail",`
 position: absolute;
 pointer-events: none;
 user-select: none;
 background: var(--n-scrollbar-rail-color);
 -webkit-user-select: none;
 `,[H("horizontal",`
 height: var(--n-scrollbar-height);
 `,[C(">",[F("scrollbar",`
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]),H("horizontal--top",`
 top: var(--n-scrollbar-rail-top-horizontal-top); 
 right: var(--n-scrollbar-rail-right-horizontal-top); 
 bottom: var(--n-scrollbar-rail-bottom-horizontal-top); 
 left: var(--n-scrollbar-rail-left-horizontal-top); 
 `),H("horizontal--bottom",`
 top: var(--n-scrollbar-rail-top-horizontal-bottom); 
 right: var(--n-scrollbar-rail-right-horizontal-bottom); 
 bottom: var(--n-scrollbar-rail-bottom-horizontal-bottom); 
 left: var(--n-scrollbar-rail-left-horizontal-bottom); 
 `),H("vertical",`
 width: var(--n-scrollbar-width);
 `,[C(">",[F("scrollbar",`
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]),H("vertical--left",`
 top: var(--n-scrollbar-rail-top-vertical-left); 
 right: var(--n-scrollbar-rail-right-vertical-left); 
 bottom: var(--n-scrollbar-rail-bottom-vertical-left); 
 left: var(--n-scrollbar-rail-left-vertical-left); 
 `),H("vertical--right",`
 top: var(--n-scrollbar-rail-top-vertical-right); 
 right: var(--n-scrollbar-rail-right-vertical-right); 
 bottom: var(--n-scrollbar-rail-bottom-vertical-right); 
 left: var(--n-scrollbar-rail-left-vertical-right); 
 `),H("disabled",[C(">",[F("scrollbar","pointer-events: none;")])]),C(">",[F("scrollbar",`
 z-index: 1;
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `,[on(),C("&:hover","background-color: var(--n-scrollbar-color-hover);")])])])])]),jc=Object.assign(Object.assign({},$e.props),{duration:{type:Number,default:0},scrollable:{type:Boolean,default:!0},xScrollable:Boolean,trigger:{type:String,default:"hover"},useUnifiedContainer:Boolean,triggerDisplayManually:Boolean,container:Function,content:Function,containerClass:String,containerStyle:[String,Object],contentClass:[String,Array],contentStyle:[String,Object],horizontalRailStyle:[String,Object],verticalRailStyle:[String,Object],onScroll:Function,onWheel:Function,onResize:Function,internalOnUpdateScrollLeft:Function,internalHoistYRail:Boolean,yPlacement:{type:String,default:"right"},xPlacement:{type:String,default:"bottom"}}),Si=X({name:"Scrollbar",props:jc,inheritAttrs:!1,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o,mergedRtlRef:n}=pt(e),r=Nt("Scrollbar",n,t),i=D(null),a=D(null),l=D(null),c=D(null),d=D(null),v=D(null),p=D(null),S=D(null),y=D(null),h=D(null),z=D(null),x=D(0),m=D(0),$=D(!1),T=D(!1);let B=!1,k=!1,f,s,u=0,b=0,R=0,A=0;const I=Ha(),Z=$e("Scrollbar","-scrollbar",Lc,nn,e,t),G=O(()=>{const{value:E}=S,{value:P}=v,{value:_}=h;return E===null||P===null||_===null?0:Math.min(E,_*E/P+Bn(Z.value.self.width)*1.5)}),J=O(()=>`${G.value}px`),q=O(()=>{const{value:E}=y,{value:P}=p,{value:_}=z;return E===null||P===null||_===null?0:_*E/P+Bn(Z.value.self.height)*1.5}),L=O(()=>`${q.value}px`),ne=O(()=>{const{value:E}=S,{value:P}=x,{value:_}=v,{value:ee}=h;if(E===null||_===null||ee===null)return 0;{const ie=_-E;return ie?P/ie*(ee-G.value):0}}),le=O(()=>`${ne.value}px`),re=O(()=>{const{value:E}=y,{value:P}=m,{value:_}=p,{value:ee}=z;if(E===null||_===null||ee===null)return 0;{const ie=_-E;return ie?P/ie*(ee-q.value):0}}),de=O(()=>`${re.value}px`),xe=O(()=>{const{value:E}=S,{value:P}=v;return E!==null&&P!==null&&P>E}),Pe=O(()=>{const{value:E}=y,{value:P}=p;return E!==null&&P!==null&&P>E}),Ae=O(()=>{const{trigger:E}=e;return E==="none"||$.value}),zt=O(()=>{const{trigger:E}=e;return E==="none"||T.value}),Q=O(()=>{const{container:E}=e;return E?E():a.value}),Ve=O(()=>{const{content:E}=e;return E?E():l.value}),Qe=(E,P)=>{if(!e.scrollable)return;if(typeof E=="number"){Ye(E,P??0,0,!1,"auto");return}const{left:_,top:ee,index:ie,elSize:me,position:Re,behavior:oe,el:Be,debounce:Ze=!0}=E;(_!==void 0||ee!==void 0)&&Ye(_??0,ee??0,0,!1,oe),Be!==void 0?Ye(0,Be.offsetTop,Be.offsetHeight,Ze,oe):ie!==void 0&&me!==void 0?Ye(0,ie*me,me,Ze,oe):Re==="bottom"?Ye(0,Number.MAX_SAFE_INTEGER,0,!1,oe):Re==="top"&&Ye(0,0,0,!1,oe)},U=Wa(()=>{e.container||Qe({top:x.value,left:m.value})}),Ke=()=>{U.isDeactivated||et()},Rt=E=>{if(U.isDeactivated)return;const{onResize:P}=e;P&&P(E),et()},po=(E,P)=>{if(!e.scrollable)return;const{value:_}=Q;_&&(typeof E=="object"?_.scrollBy(E):_.scrollBy(E,P||0))};function Ye(E,P,_,ee,ie){const{value:me}=Q;if(me){if(ee){const{scrollTop:Re,offsetHeight:oe}=me;if(P>Re){P+_<=Re+oe||me.scrollTo({left:E,top:P+_-oe,behavior:ie});return}}me.scrollTo({left:E,top:P,behavior:ie})}}function mo(){yo(),te(),et()}function bo(){Dt()}function Dt(){go(),xo()}function go(){s!==void 0&&window.clearTimeout(s),s=window.setTimeout(()=>{T.value=!1},e.duration)}function xo(){f!==void 0&&window.clearTimeout(f),f=window.setTimeout(()=>{$.value=!1},e.duration)}function yo(){f!==void 0&&window.clearTimeout(f),$.value=!0}function te(){s!==void 0&&window.clearTimeout(s),T.value=!0}function se(E){const{onScroll:P}=e;P&&P(E),Je()}function Je(){const{value:E}=Q;E&&(x.value=E.scrollTop,m.value=E.scrollLeft*(r!=null&&r.value?-1:1))}function ki(){const{value:E}=Ve;E&&(v.value=E.offsetHeight,p.value=E.offsetWidth);const{value:P}=Q;P&&(S.value=P.offsetHeight,y.value=P.offsetWidth);const{value:_}=d,{value:ee}=c;_&&(z.value=_.offsetWidth),ee&&(h.value=ee.offsetHeight)}function an(){const{value:E}=Q;E&&(x.value=E.scrollTop,m.value=E.scrollLeft*(r!=null&&r.value?-1:1),S.value=E.offsetHeight,y.value=E.offsetWidth,v.value=E.scrollHeight,p.value=E.scrollWidth);const{value:P}=d,{value:_}=c;P&&(z.value=P.offsetWidth),_&&(h.value=_.offsetHeight)}function et(){e.scrollable&&(e.useUnifiedContainer?an():(ki(),Je()))}function cn(E){var P;return!(!((P=i.value)===null||P===void 0)&&P.contains(qo(E)))}function zi(E){E.preventDefault(),E.stopPropagation(),k=!0,ce("mousemove",window,dn,!0),ce("mouseup",window,un,!0),b=m.value,R=r!=null&&r.value?window.innerWidth-E.clientX:E.clientX}function dn(E){if(!k)return;f!==void 0&&window.clearTimeout(f),s!==void 0&&window.clearTimeout(s);const{value:P}=y,{value:_}=p,{value:ee}=q;if(P===null||_===null)return;const me=(r!=null&&r.value?window.innerWidth-E.clientX-R:E.clientX-R)*(_-P)/(P-ee),Re=_-P;let oe=b+me;oe=Math.min(Re,oe),oe=Math.max(oe,0);const{value:Be}=Q;if(Be){Be.scrollLeft=oe*(r!=null&&r.value?-1:1);const{internalOnUpdateScrollLeft:Ze}=e;Ze&&Ze(oe)}}function un(E){E.preventDefault(),E.stopPropagation(),he("mousemove",window,dn,!0),he("mouseup",window,un,!0),k=!1,et(),cn(E)&&Dt()}function Ri(E){E.preventDefault(),E.stopPropagation(),B=!0,ce("mousemove",window,Co,!0),ce("mouseup",window,wo,!0),u=x.value,A=E.clientY}function Co(E){if(!B)return;f!==void 0&&window.clearTimeout(f),s!==void 0&&window.clearTimeout(s);const{value:P}=S,{value:_}=v,{value:ee}=G;if(P===null||_===null)return;const me=(E.clientY-A)*(_-P)/(P-ee),Re=_-P;let oe=u+me;oe=Math.min(Re,oe),oe=Math.max(oe,0);const{value:Be}=Q;Be&&(Be.scrollTop=oe)}function wo(E){E.preventDefault(),E.stopPropagation(),he("mousemove",window,Co,!0),he("mouseup",window,wo,!0),B=!1,et(),cn(E)&&Dt()}co(()=>{const{value:E}=Pe,{value:P}=xe,{value:_}=t,{value:ee}=d,{value:ie}=c;ee&&(E?ee.classList.remove(`${_}-scrollbar-rail--disabled`):ee.classList.add(`${_}-scrollbar-rail--disabled`)),ie&&(P?ie.classList.remove(`${_}-scrollbar-rail--disabled`):ie.classList.add(`${_}-scrollbar-rail--disabled`))}),ht(()=>{e.container||et()}),Fe(()=>{f!==void 0&&window.clearTimeout(f),s!==void 0&&window.clearTimeout(s),he("mousemove",window,Co,!0),he("mouseup",window,wo,!0)});const fn=O(()=>{const{common:{cubicBezierEaseInOut:E},self:{color:P,colorHover:_,height:ee,width:ie,borderRadius:me,railInsetHorizontalTop:Re,railInsetHorizontalBottom:oe,railInsetVerticalRight:Be,railInsetVerticalLeft:Ze,railColor:Di}}=Z.value,{top:Ti,right:Fi,bottom:Pi,left:Ai}=rt(Re),{top:Oi,right:Ii,bottom:Mi,left:Hi}=rt(oe),{top:_i,right:Wi,bottom:Li,left:ji}=rt(r!=null&&r.value?nr(Be):Be),{top:Ni,right:Vi,bottom:Yi,left:Zi}=rt(r!=null&&r.value?nr(Ze):Ze);return{"--n-scrollbar-bezier":E,"--n-scrollbar-color":P,"--n-scrollbar-color-hover":_,"--n-scrollbar-border-radius":me,"--n-scrollbar-width":ie,"--n-scrollbar-height":ee,"--n-scrollbar-rail-top-horizontal-top":Ti,"--n-scrollbar-rail-right-horizontal-top":Fi,"--n-scrollbar-rail-bottom-horizontal-top":Pi,"--n-scrollbar-rail-left-horizontal-top":Ai,"--n-scrollbar-rail-top-horizontal-bottom":Oi,"--n-scrollbar-rail-right-horizontal-bottom":Ii,"--n-scrollbar-rail-bottom-horizontal-bottom":Mi,"--n-scrollbar-rail-left-horizontal-bottom":Hi,"--n-scrollbar-rail-top-vertical-right":_i,"--n-scrollbar-rail-right-vertical-right":Wi,"--n-scrollbar-rail-bottom-vertical-right":Li,"--n-scrollbar-rail-left-vertical-right":ji,"--n-scrollbar-rail-top-vertical-left":Ni,"--n-scrollbar-rail-right-vertical-left":Vi,"--n-scrollbar-rail-bottom-vertical-left":Yi,"--n-scrollbar-rail-left-vertical-left":Zi,"--n-scrollbar-rail-color":Di}}),mt=o?Bt("scrollbar",void 0,fn,e):void 0;return Object.assign(Object.assign({},{scrollTo:Qe,scrollBy:po,sync:et,syncUnifiedContainer:an,handleMouseEnterWrapper:mo,handleMouseLeaveWrapper:bo}),{mergedClsPrefix:t,rtlEnabled:r,containerScrollTop:x,wrapperRef:i,containerRef:a,contentRef:l,yRailRef:c,xRailRef:d,needYBar:xe,needXBar:Pe,yBarSizePx:J,xBarSizePx:L,yBarTopPx:le,xBarLeftPx:de,isShowXBar:Ae,isShowYBar:zt,isIos:I,handleScroll:se,handleContentResize:Ke,handleContainerResize:Rt,handleYScrollMouseDown:Ri,handleXScrollMouseDown:zi,cssVars:o?void 0:fn,themeClass:mt==null?void 0:mt.themeClass,onRender:mt==null?void 0:mt.onRender})},render(){var e;const{$slots:t,mergedClsPrefix:o,triggerDisplayManually:n,rtlEnabled:r,internalHoistYRail:i,yPlacement:a,xPlacement:l,xScrollable:c}=this;if(!this.scrollable)return(e=t.default)===null||e===void 0?void 0:e.call(t);const d=this.trigger==="none",v=(y,h)=>g("div",{ref:"yRailRef",class:[`${o}-scrollbar-rail`,`${o}-scrollbar-rail--vertical`,`${o}-scrollbar-rail--vertical--${a}`,y],"data-scrollbar-rail":!0,style:[h||"",this.verticalRailStyle],"aria-hidden":!0},g(d?ir:Me,d?null:{name:"fade-in-transition"},{default:()=>this.needYBar&&this.isShowYBar&&!this.isIos?g("div",{class:`${o}-scrollbar-rail__scrollbar`,style:{height:this.yBarSizePx,top:this.yBarTopPx},onMousedown:this.handleYScrollMouseDown}):null})),p=()=>{var y,h;return(y=this.onRender)===null||y===void 0||y.call(this),g("div",Ne(this.$attrs,{role:"none",ref:"wrapperRef",class:[`${o}-scrollbar`,this.themeClass,r&&`${o}-scrollbar--rtl`],style:this.cssVars,onMouseenter:n?void 0:this.handleMouseEnterWrapper,onMouseleave:n?void 0:this.handleMouseLeaveWrapper}),[this.container?(h=t.default)===null||h===void 0?void 0:h.call(t):g("div",{role:"none",ref:"containerRef",class:[`${o}-scrollbar-container`,this.containerClass],style:this.containerStyle,onScroll:this.handleScroll,onWheel:this.onWheel},g(Jn,{onResize:this.handleContentResize},{default:()=>g("div",{ref:"contentRef",role:"none",style:[{width:this.xScrollable?"fit-content":null},this.contentStyle],class:[`${o}-scrollbar-content`,this.contentClass]},t)})),i?null:v(void 0,void 0),c&&g("div",{ref:"xRailRef",class:[`${o}-scrollbar-rail`,`${o}-scrollbar-rail--horizontal`,`${o}-scrollbar-rail--horizontal--${l}`],style:this.horizontalRailStyle,"data-scrollbar-rail":!0,"aria-hidden":!0},g(d?ir:Me,d?null:{name:"fade-in-transition"},{default:()=>this.needXBar&&this.isShowXBar&&!this.isIos?g("div",{class:`${o}-scrollbar-rail__scrollbar`,style:{width:this.xBarSizePx,right:r?this.xBarLeftPx:void 0,left:r?void 0:this.xBarLeftPx},onMousedown:this.handleXScrollMouseDown}):null}))])},S=this.container?p():g(Jn,{onResize:this.handleContainerResize},{default:p});return i?g(dt,null,S,v(this.themeClass,this.cssVars)):S}}),{cubicBezierEaseIn:dr,cubicBezierEaseOut:ur}=We;function Nc({transformOrigin:e="inherit",duration:t=".2s",enterScale:o=".9",originalTransform:n="",originalTransition:r=""}={}){return[C("&.fade-in-scale-up-transition-leave-active",{transformOrigin:e,transition:`opacity ${t} ${dr}, transform ${t} ${dr} ${r&&`,${r}`}`}),C("&.fade-in-scale-up-transition-enter-active",{transformOrigin:e,transition:`opacity ${t} ${ur}, transform ${t} ${ur} ${r&&`,${r}`}`}),C("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to",{opacity:0,transform:`${n} scale(${o})`}),C("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to",{opacity:1,transform:`${n} scale(1)`})]}const{cubicBezierEaseInOut:Xe}=We;function Vc({duration:e=".2s",delay:t=".1s"}={}){return[C("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),C("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),C("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${Xe},
 max-width ${e} ${Xe} ${t},
 margin-left ${e} ${Xe} ${t},
 margin-right ${e} ${Xe} ${t};
 `),C("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${Xe} ${t},
 max-width ${e} ${Xe},
 margin-left ${e} ${Xe},
 margin-right ${e} ${Xe};
 `)]}const Yc=Y("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),Zc=X({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(e){vo("-base-wave",Yc,ke(e,"clsPrefix"));const t=D(null),o=D(!1);let n=null;return Fe(()=>{n!==null&&window.clearTimeout(n)}),{active:o,selfRef:t,play(){n!==null&&(window.clearTimeout(n),o.value=!1,n=null),It(()=>{var r;(r=t.value)===null||r===void 0||r.offsetHeight,o.value=!0,n=window.setTimeout(()=>{o.value=!1,n=null},1e3)})}}},render(){const{clsPrefix:e}=this;return g("div",{ref:"selfRef","aria-hidden":!0,class:[`${e}-base-wave`,this.active&&`${e}-base-wave--active`]})}}),Xc=jt&&"chrome"in window;jt&&navigator.userAgent.includes("Firefox");const Uc=jt&&navigator.userAgent.includes("Safari")&&!Xc;function tt(e){return Qo(e,[255,255,255,.16])}function oo(e){return Qo(e,[0,0,0,.12])}const Gc="n-button-group",qc={paddingTiny:"0 6px",paddingSmall:"0 10px",paddingMedium:"0 14px",paddingLarge:"0 18px",paddingRoundTiny:"0 10px",paddingRoundSmall:"0 14px",paddingRoundMedium:"0 18px",paddingRoundLarge:"0 22px",iconMarginTiny:"6px",iconMarginSmall:"6px",iconMarginMedium:"6px",iconMarginLarge:"6px",iconSizeTiny:"14px",iconSizeSmall:"18px",iconSizeMedium:"18px",iconSizeLarge:"20px",rippleDuration:".6s"};function Qc(e){const{heightTiny:t,heightSmall:o,heightMedium:n,heightLarge:r,borderRadius:i,fontSizeTiny:a,fontSizeSmall:l,fontSizeMedium:c,fontSizeLarge:d,opacityDisabled:v,textColor2:p,textColor3:S,primaryColorHover:y,primaryColorPressed:h,borderColor:z,primaryColor:x,baseColor:m,infoColor:$,infoColorHover:T,infoColorPressed:B,successColor:k,successColorHover:f,successColorPressed:s,warningColor:u,warningColorHover:b,warningColorPressed:R,errorColor:A,errorColorHover:I,errorColorPressed:Z,fontWeight:G,buttonColor2:J,buttonColor2Hover:q,buttonColor2Pressed:L,fontWeightStrong:ne}=e;return Object.assign(Object.assign({},qc),{heightTiny:t,heightSmall:o,heightMedium:n,heightLarge:r,borderRadiusTiny:i,borderRadiusSmall:i,borderRadiusMedium:i,borderRadiusLarge:i,fontSizeTiny:a,fontSizeSmall:l,fontSizeMedium:c,fontSizeLarge:d,opacityDisabled:v,colorOpacitySecondary:"0.16",colorOpacitySecondaryHover:"0.22",colorOpacitySecondaryPressed:"0.28",colorSecondary:J,colorSecondaryHover:q,colorSecondaryPressed:L,colorTertiary:J,colorTertiaryHover:q,colorTertiaryPressed:L,colorQuaternary:"#0000",colorQuaternaryHover:q,colorQuaternaryPressed:L,color:"#0000",colorHover:"#0000",colorPressed:"#0000",colorFocus:"#0000",colorDisabled:"#0000",textColor:p,textColorTertiary:S,textColorHover:y,textColorPressed:h,textColorFocus:y,textColorDisabled:p,textColorText:p,textColorTextHover:y,textColorTextPressed:h,textColorTextFocus:y,textColorTextDisabled:p,textColorGhost:p,textColorGhostHover:y,textColorGhostPressed:h,textColorGhostFocus:y,textColorGhostDisabled:p,border:`1px solid ${z}`,borderHover:`1px solid ${y}`,borderPressed:`1px solid ${h}`,borderFocus:`1px solid ${y}`,borderDisabled:`1px solid ${z}`,rippleColor:x,colorPrimary:x,colorHoverPrimary:y,colorPressedPrimary:h,colorFocusPrimary:y,colorDisabledPrimary:x,textColorPrimary:m,textColorHoverPrimary:m,textColorPressedPrimary:m,textColorFocusPrimary:m,textColorDisabledPrimary:m,textColorTextPrimary:x,textColorTextHoverPrimary:y,textColorTextPressedPrimary:h,textColorTextFocusPrimary:y,textColorTextDisabledPrimary:p,textColorGhostPrimary:x,textColorGhostHoverPrimary:y,textColorGhostPressedPrimary:h,textColorGhostFocusPrimary:y,textColorGhostDisabledPrimary:x,borderPrimary:`1px solid ${x}`,borderHoverPrimary:`1px solid ${y}`,borderPressedPrimary:`1px solid ${h}`,borderFocusPrimary:`1px solid ${y}`,borderDisabledPrimary:`1px solid ${x}`,rippleColorPrimary:x,colorInfo:$,colorHoverInfo:T,colorPressedInfo:B,colorFocusInfo:T,colorDisabledInfo:$,textColorInfo:m,textColorHoverInfo:m,textColorPressedInfo:m,textColorFocusInfo:m,textColorDisabledInfo:m,textColorTextInfo:$,textColorTextHoverInfo:T,textColorTextPressedInfo:B,textColorTextFocusInfo:T,textColorTextDisabledInfo:p,textColorGhostInfo:$,textColorGhostHoverInfo:T,textColorGhostPressedInfo:B,textColorGhostFocusInfo:T,textColorGhostDisabledInfo:$,borderInfo:`1px solid ${$}`,borderHoverInfo:`1px solid ${T}`,borderPressedInfo:`1px solid ${B}`,borderFocusInfo:`1px solid ${T}`,borderDisabledInfo:`1px solid ${$}`,rippleColorInfo:$,colorSuccess:k,colorHoverSuccess:f,colorPressedSuccess:s,colorFocusSuccess:f,colorDisabledSuccess:k,textColorSuccess:m,textColorHoverSuccess:m,textColorPressedSuccess:m,textColorFocusSuccess:m,textColorDisabledSuccess:m,textColorTextSuccess:k,textColorTextHoverSuccess:f,textColorTextPressedSuccess:s,textColorTextFocusSuccess:f,textColorTextDisabledSuccess:p,textColorGhostSuccess:k,textColorGhostHoverSuccess:f,textColorGhostPressedSuccess:s,textColorGhostFocusSuccess:f,textColorGhostDisabledSuccess:k,borderSuccess:`1px solid ${k}`,borderHoverSuccess:`1px solid ${f}`,borderPressedSuccess:`1px solid ${s}`,borderFocusSuccess:`1px solid ${f}`,borderDisabledSuccess:`1px solid ${k}`,rippleColorSuccess:k,colorWarning:u,colorHoverWarning:b,colorPressedWarning:R,colorFocusWarning:b,colorDisabledWarning:u,textColorWarning:m,textColorHoverWarning:m,textColorPressedWarning:m,textColorFocusWarning:m,textColorDisabledWarning:m,textColorTextWarning:u,textColorTextHoverWarning:b,textColorTextPressedWarning:R,textColorTextFocusWarning:b,textColorTextDisabledWarning:p,textColorGhostWarning:u,textColorGhostHoverWarning:b,textColorGhostPressedWarning:R,textColorGhostFocusWarning:b,textColorGhostDisabledWarning:u,borderWarning:`1px solid ${u}`,borderHoverWarning:`1px solid ${b}`,borderPressedWarning:`1px solid ${R}`,borderFocusWarning:`1px solid ${b}`,borderDisabledWarning:`1px solid ${u}`,rippleColorWarning:u,colorError:A,colorHoverError:I,colorPressedError:Z,colorFocusError:I,colorDisabledError:A,textColorError:m,textColorHoverError:m,textColorPressedError:m,textColorFocusError:m,textColorDisabledError:m,textColorTextError:A,textColorTextHoverError:I,textColorTextPressedError:Z,textColorTextFocusError:I,textColorTextDisabledError:p,textColorGhostError:A,textColorGhostHoverError:I,textColorGhostPressedError:Z,textColorGhostFocusError:I,textColorGhostDisabledError:A,borderError:`1px solid ${A}`,borderHoverError:`1px solid ${I}`,borderPressedError:`1px solid ${Z}`,borderFocusError:`1px solid ${I}`,borderDisabledError:`1px solid ${A}`,rippleColorError:A,waveOpacity:"0.6",fontWeight:G,fontWeightStrong:ne})}const Ei={name:"Button",common:kt,self:Qc},Kc=C([Y("button",`
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[H("color",[F("border",{borderColor:"var(--n-border-color)"}),H("disabled",[F("border",{borderColor:"var(--n-border-color-disabled)"})]),Io("disabled",[C("&:focus",[F("state-border",{borderColor:"var(--n-border-color-focus)"})]),C("&:hover",[F("state-border",{borderColor:"var(--n-border-color-hover)"})]),C("&:active",[F("state-border",{borderColor:"var(--n-border-color-pressed)"})]),H("pressed",[F("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),H("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[F("border",{border:"var(--n-border-disabled)"})]),Io("disabled",[C("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[F("state-border",{border:"var(--n-border-focus)"})]),C("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[F("state-border",{border:"var(--n-border-hover)"})]),C("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[F("state-border",{border:"var(--n-border-pressed)"})]),H("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[F("state-border",{border:"var(--n-border-pressed)"})])]),H("loading","cursor: wait;"),Y("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[H("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),jt&&"MozBoxSizing"in document.createElement("div").style?C("&::moz-focus-inner",{border:0}):null,F("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),F("border",{border:"var(--n-border)"}),F("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),F("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[Y("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[Lo({top:"50%",originalTransform:"translateY(-50%)"})]),Vc()]),F("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[C("~",[F("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),H("block",`
 display: flex;
 width: 100%;
 `),H("dashed",[F("border, state-border",{borderStyle:"dashed !important"})]),H("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),C("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),C("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),Jc=Object.assign(Object.assign({},$e.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,renderIcon:Function,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!Uc}}),fr=X({name:"Button",props:Jc,slots:Object,setup(e){const t=D(null),o=D(null),n=D(!1),r=Pa(()=>!e.quaternary&&!e.tertiary&&!e.secondary&&!e.text&&(!e.color||e.ghost||e.dashed)&&e.bordered),i=pe(Gc,{}),{mergedSizeRef:a}=wc({},{defaultSize:"medium",mergedSize:B=>{const{size:k}=e;if(k)return k;const{size:f}=i;if(f)return f;const{mergedSize:s}=B||{};return s?s.value:"medium"}}),l=O(()=>e.focusable&&!e.disabled),c=B=>{var k;l.value||B.preventDefault(),!e.nativeFocusBehavior&&(B.preventDefault(),!e.disabled&&l.value&&((k=t.value)===null||k===void 0||k.focus({preventScroll:!0})))},d=B=>{var k;if(!e.disabled&&!e.loading){const{onClick:f}=e;f&&ge(f,B),e.text||(k=o.value)===null||k===void 0||k.play()}},v=B=>{switch(B.key){case"Enter":if(!e.keyboard)return;n.value=!1}},p=B=>{switch(B.key){case"Enter":if(!e.keyboard||e.loading){B.preventDefault();return}n.value=!0}},S=()=>{n.value=!1},{inlineThemeDisabled:y,mergedClsPrefixRef:h,mergedRtlRef:z}=pt(e),x=$e("Button","-button",Kc,Ei,e,h),m=Nt("Button",z,h),$=O(()=>{const B=x.value,{common:{cubicBezierEaseInOut:k,cubicBezierEaseOut:f},self:s}=B,{rippleDuration:u,opacityDisabled:b,fontWeight:R,fontWeightStrong:A}=s,I=a.value,{dashed:Z,type:G,ghost:J,text:q,color:L,round:ne,circle:le,textColor:re,secondary:de,tertiary:xe,quaternary:Pe,strong:Ae}=e,zt={"--n-font-weight":Ae?A:R};let Q={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const Ve=G==="tertiary",Qe=G==="default",U=Ve?"default":G;if(q){const te=re||L;Q={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":te||s[V("textColorText",U)],"--n-text-color-hover":te?tt(te):s[V("textColorTextHover",U)],"--n-text-color-pressed":te?oo(te):s[V("textColorTextPressed",U)],"--n-text-color-focus":te?tt(te):s[V("textColorTextHover",U)],"--n-text-color-disabled":te||s[V("textColorTextDisabled",U)]}}else if(J||Z){const te=re||L;Q={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":L||s[V("rippleColor",U)],"--n-text-color":te||s[V("textColorGhost",U)],"--n-text-color-hover":te?tt(te):s[V("textColorGhostHover",U)],"--n-text-color-pressed":te?oo(te):s[V("textColorGhostPressed",U)],"--n-text-color-focus":te?tt(te):s[V("textColorGhostHover",U)],"--n-text-color-disabled":te||s[V("textColorGhostDisabled",U)]}}else if(de){const te=Qe?s.textColor:Ve?s.textColorTertiary:s[V("color",U)],se=L||te,Je=G!=="default"&&G!=="tertiary";Q={"--n-color":Je?Gt(se,{alpha:Number(s.colorOpacitySecondary)}):s.colorSecondary,"--n-color-hover":Je?Gt(se,{alpha:Number(s.colorOpacitySecondaryHover)}):s.colorSecondaryHover,"--n-color-pressed":Je?Gt(se,{alpha:Number(s.colorOpacitySecondaryPressed)}):s.colorSecondaryPressed,"--n-color-focus":Je?Gt(se,{alpha:Number(s.colorOpacitySecondaryHover)}):s.colorSecondaryHover,"--n-color-disabled":s.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":se,"--n-text-color-hover":se,"--n-text-color-pressed":se,"--n-text-color-focus":se,"--n-text-color-disabled":se}}else if(xe||Pe){const te=Qe?s.textColor:Ve?s.textColorTertiary:s[V("color",U)],se=L||te;xe?(Q["--n-color"]=s.colorTertiary,Q["--n-color-hover"]=s.colorTertiaryHover,Q["--n-color-pressed"]=s.colorTertiaryPressed,Q["--n-color-focus"]=s.colorSecondaryHover,Q["--n-color-disabled"]=s.colorTertiary):(Q["--n-color"]=s.colorQuaternary,Q["--n-color-hover"]=s.colorQuaternaryHover,Q["--n-color-pressed"]=s.colorQuaternaryPressed,Q["--n-color-focus"]=s.colorQuaternaryHover,Q["--n-color-disabled"]=s.colorQuaternary),Q["--n-ripple-color"]="#0000",Q["--n-text-color"]=se,Q["--n-text-color-hover"]=se,Q["--n-text-color-pressed"]=se,Q["--n-text-color-focus"]=se,Q["--n-text-color-disabled"]=se}else Q={"--n-color":L||s[V("color",U)],"--n-color-hover":L?tt(L):s[V("colorHover",U)],"--n-color-pressed":L?oo(L):s[V("colorPressed",U)],"--n-color-focus":L?tt(L):s[V("colorFocus",U)],"--n-color-disabled":L||s[V("colorDisabled",U)],"--n-ripple-color":L||s[V("rippleColor",U)],"--n-text-color":re||(L?s.textColorPrimary:Ve?s.textColorTertiary:s[V("textColor",U)]),"--n-text-color-hover":re||(L?s.textColorHoverPrimary:s[V("textColorHover",U)]),"--n-text-color-pressed":re||(L?s.textColorPressedPrimary:s[V("textColorPressed",U)]),"--n-text-color-focus":re||(L?s.textColorFocusPrimary:s[V("textColorFocus",U)]),"--n-text-color-disabled":re||(L?s.textColorDisabledPrimary:s[V("textColorDisabled",U)])};let Ke={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};q?Ke={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:Ke={"--n-border":s[V("border",U)],"--n-border-hover":s[V("borderHover",U)],"--n-border-pressed":s[V("borderPressed",U)],"--n-border-focus":s[V("borderFocus",U)],"--n-border-disabled":s[V("borderDisabled",U)]};const{[V("height",I)]:Rt,[V("fontSize",I)]:po,[V("padding",I)]:Ye,[V("paddingRound",I)]:mo,[V("iconSize",I)]:bo,[V("borderRadius",I)]:Dt,[V("iconMargin",I)]:go,waveOpacity:xo}=s,yo={"--n-width":le&&!q?Rt:"initial","--n-height":q?"initial":Rt,"--n-font-size":po,"--n-padding":le||q?"initial":ne?mo:Ye,"--n-icon-size":bo,"--n-icon-margin":go,"--n-border-radius":q?"initial":le||ne?Rt:Dt};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":k,"--n-bezier-ease-out":f,"--n-ripple-duration":u,"--n-opacity-disabled":b,"--n-wave-opacity":xo},zt),Q),Ke),yo)}),T=y?Bt("button",O(()=>{let B="";const{dashed:k,type:f,ghost:s,text:u,color:b,round:R,circle:A,textColor:I,secondary:Z,tertiary:G,quaternary:J,strong:q}=e;k&&(B+="a"),s&&(B+="b"),u&&(B+="c"),R&&(B+="d"),A&&(B+="e"),Z&&(B+="f"),G&&(B+="g"),J&&(B+="h"),q&&(B+="i"),b&&(B+=`j${er(b)}`),I&&(B+=`k${er(I)}`);const{value:L}=a;return B+=`l${L[0]}`,B+=`m${f[0]}`,B}),$,e):void 0;return{selfElRef:t,waveElRef:o,mergedClsPrefix:h,mergedFocusable:l,mergedSize:a,showBorder:r,enterPressed:n,rtlEnabled:m,handleMousedown:c,handleKeydown:p,handleBlur:S,handleKeyup:v,handleClick:d,customColorCssVars:O(()=>{const{color:B}=e;if(!B)return null;const k=tt(B);return{"--n-border-color":B,"--n-border-color-hover":k,"--n-border-color-pressed":oo(B),"--n-border-color-focus":k,"--n-border-color-disabled":B}}),cssVars:y?void 0:$,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender}},render(){const{mergedClsPrefix:e,tag:t,onRender:o}=this;o==null||o();const n=De(this.$slots.default,r=>r&&g("span",{class:`${e}-button__content`},r));return g(t,{ref:"selfElRef",class:[this.themeClass,`${e}-button`,`${e}-button--${this.type}-type`,`${e}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${e}-button--rtl`,this.disabled&&`${e}-button--disabled`,this.block&&`${e}-button--block`,this.enterPressed&&`${e}-button--pressed`,!this.text&&this.dashed&&`${e}-button--dashed`,this.color&&`${e}-button--color`,this.secondary&&`${e}-button--secondary`,this.loading&&`${e}-button--loading`,this.ghost&&`${e}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&n,g(Pc,{width:!0},{default:()=>De(this.$slots.icon,r=>(this.loading||this.renderIcon||r)&&g("span",{class:`${e}-button__icon`,style:{margin:yc(this.$slots.default)?"0":""}},g(yi,null,{default:()=>this.loading?g(Ic,{clsPrefix:e,key:"loading",class:`${e}-icon-slot`,strokeWidth:20}):g("div",{key:"icon",class:`${e}-icon-slot`,role:"none"},this.renderIcon?this.renderIcon():r)})))}),this.iconPlacement==="left"&&n,this.text?null:g(Zc,{ref:"waveElRef",clsPrefix:e}),this.showBorder?g("div",{"aria-hidden":!0,class:`${e}-button__border`,style:this.customColorCssVars}):null,this.showBorder?g("div",{"aria-hidden":!0,class:`${e}-button__state-border`,style:this.customColorCssVars}):null)}}),ed={paddingSmall:"12px 16px 12px",paddingMedium:"19px 24px 20px",paddingLarge:"23px 32px 24px",paddingHuge:"27px 40px 28px",titleFontSizeSmall:"16px",titleFontSizeMedium:"18px",titleFontSizeLarge:"18px",titleFontSizeHuge:"18px",closeIconSize:"18px",closeSize:"22px"};function td(e){const{primaryColor:t,borderRadius:o,lineHeight:n,fontSize:r,cardColor:i,textColor2:a,textColor1:l,dividerColor:c,fontWeightStrong:d,closeIconColor:v,closeIconColorHover:p,closeIconColorPressed:S,closeColorHover:y,closeColorPressed:h,modalColor:z,boxShadow1:x,popoverColor:m,actionColor:$}=e;return Object.assign(Object.assign({},ed),{lineHeight:n,color:i,colorModal:z,colorPopover:m,colorTarget:t,colorEmbedded:$,colorEmbeddedModal:$,colorEmbeddedPopover:$,textColor:a,titleTextColor:l,borderColor:c,actionColor:$,titleFontWeight:d,closeColorHover:y,closeColorPressed:h,closeBorderRadius:o,closeIconColor:v,closeIconColorHover:p,closeIconColorPressed:S,fontSizeSmall:r,fontSizeMedium:r,fontSizeLarge:r,fontSizeHuge:r,boxShadow:x,borderRadius:o})}const $i={name:"Card",common:kt,self:td},od=C([Y("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[Lr({background:"var(--n-color-modal)"}),H("hoverable",[C("&:hover","box-shadow: var(--n-box-shadow);")]),H("content-segmented",[C(">",[F("content",{paddingTop:"var(--n-padding-bottom)"})])]),H("content-soft-segmented",[C(">",[F("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),H("footer-segmented",[C(">",[F("footer",{paddingTop:"var(--n-padding-bottom)"})])]),H("footer-soft-segmented",[C(">",[F("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),C(">",[Y("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[F("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),F("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),F("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),F("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),F("content","flex: 1; min-width: 0;"),F("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[C("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),F("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),Y("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[C("img",`
 display: block;
 width: 100%;
 `)]),H("bordered",`
 border: 1px solid var(--n-border-color);
 `,[C("&:target","border-color: var(--n-color-target);")]),H("action-segmented",[C(">",[F("action",[C("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),H("content-segmented, content-soft-segmented",[C(">",[F("content",{transition:"border-color 0.3s var(--n-bezier)"},[C("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),H("footer-segmented, footer-soft-segmented",[C(">",[F("footer",{transition:"border-color 0.3s var(--n-bezier)"},[C("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),H("embedded",`
 background-color: var(--n-color-embedded);
 `)]),Wr(Y("card",`
 background: var(--n-color-modal);
 `,[H("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),ha(Y("card",`
 background: var(--n-color-popover);
 `,[H("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),rn={title:[String,Function],contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],headerExtraClass:String,headerExtraStyle:[Object,String],footerClass:String,footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"},cover:Function,content:[String,Function],footer:Function,action:Function,headerExtra:Function},nd=tn(rn),rd=Object.assign(Object.assign({},$e.props),rn),id=X({name:"Card",props:rd,slots:Object,setup(e){const t=()=>{const{onClose:d}=e;d&&ge(d)},{inlineThemeDisabled:o,mergedClsPrefixRef:n,mergedRtlRef:r}=pt(e),i=$e("Card","-card",od,$i,e,n),a=Nt("Card",r,n),l=O(()=>{const{size:d}=e,{self:{color:v,colorModal:p,colorTarget:S,textColor:y,titleTextColor:h,titleFontWeight:z,borderColor:x,actionColor:m,borderRadius:$,lineHeight:T,closeIconColor:B,closeIconColorHover:k,closeIconColorPressed:f,closeColorHover:s,closeColorPressed:u,closeBorderRadius:b,closeIconSize:R,closeSize:A,boxShadow:I,colorPopover:Z,colorEmbedded:G,colorEmbeddedModal:J,colorEmbeddedPopover:q,[V("padding",d)]:L,[V("fontSize",d)]:ne,[V("titleFontSize",d)]:le},common:{cubicBezierEaseInOut:re}}=i.value,{top:de,left:xe,bottom:Pe}=rt(L);return{"--n-bezier":re,"--n-border-radius":$,"--n-color":v,"--n-color-modal":p,"--n-color-popover":Z,"--n-color-embedded":G,"--n-color-embedded-modal":J,"--n-color-embedded-popover":q,"--n-color-target":S,"--n-text-color":y,"--n-line-height":T,"--n-action-color":m,"--n-title-text-color":h,"--n-title-font-weight":z,"--n-close-icon-color":B,"--n-close-icon-color-hover":k,"--n-close-icon-color-pressed":f,"--n-close-color-hover":s,"--n-close-color-pressed":u,"--n-border-color":x,"--n-box-shadow":I,"--n-padding-top":de,"--n-padding-bottom":Pe,"--n-padding-left":xe,"--n-font-size":ne,"--n-title-font-size":le,"--n-close-size":A,"--n-close-icon-size":R,"--n-close-border-radius":b}}),c=o?Bt("card",O(()=>e.size[0]),l,e):void 0;return{rtlEnabled:a,mergedClsPrefix:n,mergedTheme:i,handleCloseClick:t,cssVars:o?void 0:l,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){const{segmented:e,bordered:t,hoverable:o,mergedClsPrefix:n,rtlEnabled:r,onRender:i,embedded:a,tag:l,$slots:c}=this;return i==null||i(),g(l,{class:[`${n}-card`,this.themeClass,a&&`${n}-card--embedded`,{[`${n}-card--rtl`]:r,[`${n}-card--content${typeof e!="boolean"&&e.content==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.content,[`${n}-card--footer${typeof e!="boolean"&&e.footer==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.footer,[`${n}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${n}-card--bordered`]:t,[`${n}-card--hoverable`]:o}],style:this.cssVars,role:this.role},De(c.cover,d=>{const v=this.cover?Ie([this.cover()]):d;return v&&g("div",{class:`${n}-card-cover`,role:"none"},v)}),De(c.header,d=>{const{title:v}=this,p=v?Ie(typeof v=="function"?[v()]:[v]):d;return p||this.closable?g("div",{class:[`${n}-card-header`,this.headerClass],style:this.headerStyle,role:"heading"},g("div",{class:`${n}-card-header__main`,role:"heading"},p),De(c["header-extra"],S=>{const y=this.headerExtra?Ie([this.headerExtra()]):S;return y&&g("div",{class:[`${n}-card-header__extra`,this.headerExtraClass],style:this.headerExtraStyle},y)}),this.closable&&g(Ci,{clsPrefix:n,class:`${n}-card-header__close`,onClick:this.handleCloseClick,absolute:!0})):null}),De(c.default,d=>{const{content:v}=this,p=v?Ie(typeof v=="function"?[v()]:[v]):d;return p&&g("div",{class:[`${n}-card__content`,this.contentClass],style:this.contentStyle,role:"none"},p)}),De(c.footer,d=>{const v=this.footer?Ie([this.footer()]):d;return v&&g("div",{class:[`${n}-card__footer`,this.footerClass],style:this.footerStyle,role:"none"},v)}),De(c.action,d=>{const v=this.action?Ie([this.action()]):d;return v&&g("div",{class:`${n}-card__action`,role:"none"},v)}))}}),ld="n-dialog-provider",sd={titleFontSize:"18px",padding:"16px 28px 20px 28px",iconSize:"28px",actionSpace:"12px",contentMargin:"8px 0 16px 0",iconMargin:"0 4px 0 0",iconMarginIconTop:"4px 0 8px 0",closeSize:"22px",closeIconSize:"18px",closeMargin:"20px 26px 0 0",closeMarginIconTop:"10px 16px 0 0"};function ad(e){const{textColor1:t,textColor2:o,modalColor:n,closeIconColor:r,closeIconColorHover:i,closeIconColorPressed:a,closeColorHover:l,closeColorPressed:c,infoColor:d,successColor:v,warningColor:p,errorColor:S,primaryColor:y,dividerColor:h,borderRadius:z,fontWeightStrong:x,lineHeight:m,fontSize:$}=e;return Object.assign(Object.assign({},sd),{fontSize:$,lineHeight:m,border:`1px solid ${h}`,titleTextColor:t,textColor:o,color:n,closeColorHover:l,closeColorPressed:c,closeIconColor:r,closeIconColorHover:i,closeIconColorPressed:a,closeBorderRadius:z,iconColor:y,iconColorInfo:d,iconColorSuccess:v,iconColorWarning:p,iconColorError:S,borderRadius:z,titleFontWeight:x})}const Bi={name:"Dialog",common:kt,peers:{Button:Ei},self:ad},ln={icon:Function,type:{type:String,default:"default"},title:[String,Function],closable:{type:Boolean,default:!0},negativeText:String,positiveText:String,positiveButtonProps:Object,negativeButtonProps:Object,content:[String,Function],action:Function,showIcon:{type:Boolean,default:!0},loading:Boolean,bordered:Boolean,iconPlacement:String,titleClass:[String,Array],titleStyle:[String,Object],contentClass:[String,Array],contentStyle:[String,Object],actionClass:[String,Array],actionStyle:[String,Object],onPositiveClick:Function,onNegativeClick:Function,onClose:Function},cd=tn(ln),dd=C([Y("dialog",`
 --n-icon-margin: var(--n-icon-margin-top) var(--n-icon-margin-right) var(--n-icon-margin-bottom) var(--n-icon-margin-left);
 word-break: break-word;
 line-height: var(--n-line-height);
 position: relative;
 background: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 margin: auto;
 border-radius: var(--n-border-radius);
 padding: var(--n-padding);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `,[F("icon",{color:"var(--n-icon-color)"}),H("bordered",{border:"var(--n-border)"}),H("icon-top",[F("close",{margin:"var(--n-close-margin)"}),F("icon",{margin:"var(--n-icon-margin)"}),F("content",{textAlign:"center"}),F("title",{justifyContent:"center"}),F("action",{justifyContent:"center"})]),H("icon-left",[F("icon",{margin:"var(--n-icon-margin)"}),H("closable",[F("title",`
 padding-right: calc(var(--n-close-size) + 6px);
 `)])]),F("close",`
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 z-index: 1;
 `),F("content",`
 font-size: var(--n-font-size);
 margin: var(--n-content-margin);
 position: relative;
 word-break: break-word;
 `,[H("last","margin-bottom: 0;")]),F("action",`
 display: flex;
 justify-content: flex-end;
 `,[C("> *:not(:last-child)",`
 margin-right: var(--n-action-space);
 `)]),F("icon",`
 font-size: var(--n-icon-size);
 transition: color .3s var(--n-bezier);
 `),F("title",`
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),Y("dialog-icon-container",`
 display: flex;
 justify-content: center;
 `)]),Wr(Y("dialog",`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)),Y("dialog",[Lr(`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)])]),ud={default:()=>g(sr,null),info:()=>g(sr,null),success:()=>g(Rc,null),warning:()=>g(Dc,null),error:()=>g(zc,null)},fd=X({name:"Dialog",alias:["NimbusConfirmCard","Confirm"],props:Object.assign(Object.assign({},$e.props),ln),slots:Object,setup(e){const{mergedComponentPropsRef:t,mergedClsPrefixRef:o,inlineThemeDisabled:n,mergedRtlRef:r}=pt(e),i=Nt("Dialog",r,o),a=O(()=>{var y,h;const{iconPlacement:z}=e;return z||((h=(y=t==null?void 0:t.value)===null||y===void 0?void 0:y.Dialog)===null||h===void 0?void 0:h.iconPlacement)||"left"});function l(y){const{onPositiveClick:h}=e;h&&h(y)}function c(y){const{onNegativeClick:h}=e;h&&h(y)}function d(){const{onClose:y}=e;y&&y()}const v=$e("Dialog","-dialog",dd,Bi,e,o),p=O(()=>{const{type:y}=e,h=a.value,{common:{cubicBezierEaseInOut:z},self:{fontSize:x,lineHeight:m,border:$,titleTextColor:T,textColor:B,color:k,closeBorderRadius:f,closeColorHover:s,closeColorPressed:u,closeIconColor:b,closeIconColorHover:R,closeIconColorPressed:A,closeIconSize:I,borderRadius:Z,titleFontWeight:G,titleFontSize:J,padding:q,iconSize:L,actionSpace:ne,contentMargin:le,closeSize:re,[h==="top"?"iconMarginIconTop":"iconMargin"]:de,[h==="top"?"closeMarginIconTop":"closeMargin"]:xe,[V("iconColor",y)]:Pe}}=v.value,Ae=rt(de);return{"--n-font-size":x,"--n-icon-color":Pe,"--n-bezier":z,"--n-close-margin":xe,"--n-icon-margin-top":Ae.top,"--n-icon-margin-right":Ae.right,"--n-icon-margin-bottom":Ae.bottom,"--n-icon-margin-left":Ae.left,"--n-icon-size":L,"--n-close-size":re,"--n-close-icon-size":I,"--n-close-border-radius":f,"--n-close-color-hover":s,"--n-close-color-pressed":u,"--n-close-icon-color":b,"--n-close-icon-color-hover":R,"--n-close-icon-color-pressed":A,"--n-color":k,"--n-text-color":B,"--n-border-radius":Z,"--n-padding":q,"--n-line-height":m,"--n-border":$,"--n-content-margin":le,"--n-title-font-size":J,"--n-title-font-weight":G,"--n-title-text-color":T,"--n-action-space":ne}}),S=n?Bt("dialog",O(()=>`${e.type[0]}${a.value[0]}`),p,e):void 0;return{mergedClsPrefix:o,rtlEnabled:i,mergedIconPlacement:a,mergedTheme:v,handlePositiveClick:l,handleNegativeClick:c,handleCloseClick:d,cssVars:n?void 0:p,themeClass:S==null?void 0:S.themeClass,onRender:S==null?void 0:S.onRender}},render(){var e;const{bordered:t,mergedIconPlacement:o,cssVars:n,closable:r,showIcon:i,title:a,content:l,action:c,negativeText:d,positiveText:v,positiveButtonProps:p,negativeButtonProps:S,handlePositiveClick:y,handleNegativeClick:h,mergedTheme:z,loading:x,type:m,mergedClsPrefix:$}=this;(e=this.onRender)===null||e===void 0||e.call(this);const T=i?g(xi,{clsPrefix:$,class:`${$}-dialog__icon`},{default:()=>De(this.$slots.icon,k=>k||(this.icon?yt(this.icon):ud[this.type]()))}):null,B=De(this.$slots.action,k=>k||v||d||c?g("div",{class:[`${$}-dialog__action`,this.actionClass],style:this.actionStyle},k||(c?[yt(c)]:[this.negativeText&&g(fr,Object.assign({theme:z.peers.Button,themeOverrides:z.peerOverrides.Button,ghost:!0,size:"small",onClick:h},S),{default:()=>yt(this.negativeText)}),this.positiveText&&g(fr,Object.assign({theme:z.peers.Button,themeOverrides:z.peerOverrides.Button,size:"small",type:m==="default"?"primary":m,disabled:x,loading:x,onClick:y},p),{default:()=>yt(this.positiveText)})])):null);return g("div",{class:[`${$}-dialog`,this.themeClass,this.closable&&`${$}-dialog--closable`,`${$}-dialog--icon-${o}`,t&&`${$}-dialog--bordered`,this.rtlEnabled&&`${$}-dialog--rtl`],style:n,role:"dialog"},r?De(this.$slots.close,k=>{const f=[`${$}-dialog__close`,this.rtlEnabled&&`${$}-dialog--rtl`];return k?g("div",{class:f},k):g(Ci,{clsPrefix:$,class:f,onClick:this.handleCloseClick})}):null,i&&o==="top"?g("div",{class:`${$}-dialog-icon-container`},T):null,g("div",{class:[`${$}-dialog__title`,this.titleClass],style:this.titleStyle},i&&o==="left"?T:null,rr(this.$slots.header,()=>[yt(a)])),g("div",{class:[`${$}-dialog__content`,B?"":`${$}-dialog__content--last`,this.contentClass],style:this.contentStyle},rr(this.$slots.default,()=>[yt(l)])),B)}});function hd(e){const{modalColor:t,textColor2:o,boxShadow3:n}=e;return{color:t,textColor:o,boxShadow:n}}const vd={name:"Modal",common:kt,peers:{Scrollbar:nn,Dialog:Bi,Card:$i},self:hd},jo="n-draggable";function pd(e,t){let o;const n=O(()=>e.value!==!1),r=O(()=>n.value?jo:""),i=O(()=>{const c=e.value;return c===!0||c===!1?!0:c?c.bounds!=="none":!0});function a(c){const d=c.querySelector(`.${jo}`);if(!d||!r.value)return;let v=0,p=0,S=0,y=0,h=0,z=0,x;function m(B){B.preventDefault(),x=B;const{x:k,y:f,right:s,bottom:u}=c.getBoundingClientRect();p=k,y=f,v=window.innerWidth-s,S=window.innerHeight-u;const{left:b,top:R}=c.style;h=+R.slice(0,-2),z=+b.slice(0,-2)}function $(B){if(!x)return;const{clientX:k,clientY:f}=x;let s=B.clientX-k,u=B.clientY-f;i.value&&(s>v?s=v:-s>p&&(s=-p),u>S?u=S:-u>y&&(u=-y));const b=s+z,R=u+h;c.style.top=`${R}px`,c.style.left=`${b}px`}function T(){x=void 0,t.onEnd(c)}ce("mousedown",d,m),ce("mousemove",window,$),ce("mouseup",window,T),o=()=>{he("mousedown",d,m),ce("mousemove",window,$),ce("mouseup",window,T)}}function l(){o&&(o(),o=void 0)}return mr(l),{stopDrag:l,startDrag:a,draggableRef:n,draggableClassRef:r}}const sn=Object.assign(Object.assign({},rn),ln),md=tn(sn),bd=X({name:"ModalBody",inheritAttrs:!1,slots:Object,props:Object.assign(Object.assign({show:{type:Boolean,required:!0},preset:String,displayDirective:{type:String,required:!0},trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},blockScroll:Boolean,draggable:{type:[Boolean,Object],default:!1}},sn),{renderMask:Function,onClickoutside:Function,onBeforeLeave:{type:Function,required:!0},onAfterLeave:{type:Function,required:!0},onPositiveClick:{type:Function,required:!0},onNegativeClick:{type:Function,required:!0},onClose:{type:Function,required:!0},onAfterEnter:Function,onEsc:Function}),setup(e){const t=D(null),o=D(null),n=D(e.show),r=D(null),i=D(null),a=pe(Kr);let l=null;we(ke(e,"show"),u=>{u&&(l=a.getMousePosition())},{immediate:!0});const{stopDrag:c,startDrag:d,draggableRef:v,draggableClassRef:p}=pd(ke(e,"draggable"),{onEnd:u=>{z(u)}}),S=O(()=>io([e.titleClass,p.value])),y=O(()=>io([e.headerClass,p.value]));we(ke(e,"show"),u=>{u&&(n.value=!0)}),ti(O(()=>e.blockScroll&&n.value));function h(){if(a.transformOriginRef.value==="center")return"";const{value:u}=r,{value:b}=i;if(u===null||b===null)return"";if(o.value){const R=o.value.containerScrollTop;return`${u}px ${b+R}px`}return""}function z(u){if(a.transformOriginRef.value==="center"||!l||!o.value)return;const b=o.value.containerScrollTop,{offsetLeft:R,offsetTop:A}=u,I=l.y,Z=l.x;r.value=-(R-Z),i.value=-(A-I-b),u.style.transformOrigin=h()}function x(u){It(()=>{z(u)})}function m(u){u.style.transformOrigin=h(),e.onBeforeLeave()}function $(u){const b=u;v.value&&d(b),e.onAfterEnter&&e.onAfterEnter(b)}function T(){n.value=!1,r.value=null,i.value=null,c(),e.onAfterLeave()}function B(){const{onClose:u}=e;u&&u()}function k(){e.onNegativeClick()}function f(){e.onPositiveClick()}const s=D(null);return we(s,u=>{u&&It(()=>{const b=u.el;b&&t.value!==b&&(t.value=b)})}),Ce(Qr,t),Ce(Gr,null),Ce(Jr,null),{mergedTheme:a.mergedThemeRef,appear:a.appearRef,isMounted:a.isMountedRef,mergedClsPrefix:a.mergedClsPrefixRef,bodyRef:t,scrollbarRef:o,draggableClass:p,displayed:n,childNodeRef:s,cardHeaderClass:y,dialogTitleClass:S,handlePositiveClick:f,handleNegativeClick:k,handleCloseClick:B,handleAfterEnter:$,handleAfterLeave:T,handleBeforeLeave:m,handleEnter:x}},render(){const{$slots:e,$attrs:t,handleEnter:o,handleAfterEnter:n,handleAfterLeave:r,handleBeforeLeave:i,preset:a,mergedClsPrefix:l}=this;let c=null;if(!a){if(c=xc("default",e.default,{draggableClass:this.draggableClass}),!c){bi("modal","default slot is empty");return}c=Ji(c),c.props=Ne({class:`${l}-modal`},t,c.props||{})}return this.displayDirective==="show"||this.displayed||this.show?ae(g("div",{role:"none",class:`${l}-modal-body-wrapper`},g(Si,{ref:"scrollbarRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:`${l}-modal-scroll-content`},{default:()=>{var d;return[(d=this.renderMask)===null||d===void 0?void 0:d.call(this),g(pi,{disabled:!this.trapFocus,active:this.show,onEsc:this.onEsc,autoFocus:this.autoFocus},{default:()=>{var v;return g(Me,{name:"fade-in-scale-up-transition",appear:(v=this.appear)!==null&&v!==void 0?v:this.isMounted,onEnter:o,onAfterEnter:n,onAfterLeave:r,onBeforeLeave:i},{default:()=>{const p=[[ve,this.show]],{onClickoutside:S}=this;return S&&p.push([oi,this.onClickoutside,void 0,{capture:!0}]),ae(this.preset==="confirm"||this.preset==="dialog"?g(fd,Object.assign({},this.$attrs,{class:[`${l}-modal`,this.$attrs.class],ref:"bodyRef",theme:this.mergedTheme.peers.Dialog,themeOverrides:this.mergedTheme.peerOverrides.Dialog},Wo(this.$props,cd),{titleClass:this.dialogTitleClass,"aria-modal":"true"}),e):this.preset==="card"?g(id,Object.assign({},this.$attrs,{ref:"bodyRef",class:[`${l}-modal`,this.$attrs.class],theme:this.mergedTheme.peers.Card,themeOverrides:this.mergedTheme.peerOverrides.Card},Wo(this.$props,nd),{headerClass:this.cardHeaderClass,"aria-modal":"true",role:"dialog"}),e):this.childNodeRef=c,p)}})}})]}})),[[ve,this.displayDirective==="if"||this.displayed||this.show]]):null}}),gd=C([Y("modal-container",`
 position: fixed;
 left: 0;
 top: 0;
 height: 0;
 width: 0;
 display: flex;
 `),Y("modal-mask",`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background-color: rgba(0, 0, 0, .4);
 `,[on({enterDuration:".25s",leaveDuration:".25s",enterCubicBezier:"var(--n-bezier-ease-out)",leaveCubicBezier:"var(--n-bezier-ease-out)"})]),Y("modal-body-wrapper",`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: visible;
 `,[Y("modal-scroll-content",`
 min-height: 100%;
 display: flex;
 position: relative;
 `)]),Y("modal",`
 position: relative;
 align-self: center;
 color: var(--n-text-color);
 margin: auto;
 box-shadow: var(--n-box-shadow);
 `,[Nc({duration:".25s",enterScale:".5"}),C(`.${jo}`,`
 cursor: move;
 user-select: none;
 `)])]),xd=Object.assign(Object.assign(Object.assign(Object.assign({},$e.props),{show:Boolean,unstableShowMask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},preset:String,to:[String,Object],displayDirective:{type:String,default:"if"},transformOrigin:{type:String,default:"mouse"},zIndex:Number,autoFocus:{type:Boolean,default:!0},trapFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0}}),sn),{draggable:[Boolean,Object],onEsc:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onBeforeLeave:Function,onAfterLeave:Function,onClose:Function,onPositiveClick:Function,onNegativeClick:Function,onMaskClick:Function,internalDialog:Boolean,internalModal:Boolean,internalAppear:{type:Boolean,default:void 0},overlayStyle:[String,Object],onBeforeHide:Function,onAfterHide:Function,onHide:Function}),yd=X({name:"Modal",inheritAttrs:!1,props:xd,slots:Object,setup(e){const t=D(null),{mergedClsPrefixRef:o,namespaceRef:n,inlineThemeDisabled:r}=pt(e),i=$e("Modal","-modal",gd,vd,e,o),a=Ia(64),l=Aa(),c=Ko(),d=e.internalDialog?pe(ld,null):null,v=e.internalModal?pe(_a,null):null,p=ei();function S(f){const{onUpdateShow:s,"onUpdate:show":u,onHide:b}=e;s&&ge(s,f),u&&ge(u,f),b&&!f&&b(f)}function y(){const{onClose:f}=e;f?Promise.resolve(f()).then(s=>{s!==!1&&S(!1)}):S(!1)}function h(){const{onPositiveClick:f}=e;f?Promise.resolve(f()).then(s=>{s!==!1&&S(!1)}):S(!1)}function z(){const{onNegativeClick:f}=e;f?Promise.resolve(f()).then(s=>{s!==!1&&S(!1)}):S(!1)}function x(){const{onBeforeLeave:f,onBeforeHide:s}=e;f&&ge(f),s&&s()}function m(){const{onAfterLeave:f,onAfterHide:s}=e;f&&ge(f),s&&s()}function $(f){var s;const{onMaskClick:u}=e;u&&u(f),e.maskClosable&&!((s=t.value)===null||s===void 0)&&s.contains(qo(f))&&S(!1)}function T(f){var s;(s=e.onEsc)===null||s===void 0||s.call(e),e.show&&e.closeOnEsc&&mi(f)&&(p.value||S(!1))}Ce(Kr,{getMousePosition:()=>{const f=d||v;if(f){const{clickedRef:s,clickedPositionRef:u}=f;if(s.value&&u.value)return u.value}return a.value?l.value:null},mergedClsPrefixRef:o,mergedThemeRef:i,isMountedRef:c,appearRef:ke(e,"internalAppear"),transformOriginRef:ke(e,"transformOrigin")});const B=O(()=>{const{common:{cubicBezierEaseOut:f},self:{boxShadow:s,color:u,textColor:b}}=i.value;return{"--n-bezier-ease-out":f,"--n-box-shadow":s,"--n-color":u,"--n-text-color":b}}),k=r?Bt("theme-class",void 0,B,e):void 0;return{mergedClsPrefix:o,namespace:n,isMounted:c,containerRef:t,presetProps:O(()=>Wo(e,md)),handleEsc:T,handleAfterLeave:m,handleClickoutside:$,handleBeforeLeave:x,doUpdateShow:S,handleNegativeClick:z,handlePositiveClick:h,handleCloseClick:y,cssVars:r?void 0:B,themeClass:k==null?void 0:k.themeClass,onRender:k==null?void 0:k.onRender}},render(){const{mergedClsPrefix:e}=this;return g(ri,{to:this.to,show:this.show},{default:()=>{var t;(t=this.onRender)===null||t===void 0||t.call(this);const{unstableShowMask:o}=this;return ae(g("div",{role:"none",ref:"containerRef",class:[`${e}-modal-container`,this.themeClass,this.namespace],style:this.cssVars},g(bd,Object.assign({style:this.overlayStyle},this.$attrs,{ref:"bodyWrapper",displayDirective:this.displayDirective,show:this.show,preset:this.preset,autoFocus:this.autoFocus,trapFocus:this.trapFocus,draggable:this.draggable,blockScroll:this.blockScroll},this.presetProps,{onEsc:this.handleEsc,onClose:this.handleCloseClick,onNegativeClick:this.handleNegativeClick,onPositiveClick:this.handlePositiveClick,onBeforeLeave:this.handleBeforeLeave,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave,onClickoutside:o?void 0:this.handleClickoutside,renderMask:o?()=>{var n;return g(Me,{name:"fade-in-transition",key:"mask",appear:(n=this.internalAppear)!==null&&n!==void 0?n:this.isMounted},{default:()=>this.show?g("div",{"aria-hidden":!0,ref:"containerRef",class:`${e}-modal-mask`,onClick:this.handleClickoutside}):null})}:void 0}),this.$slots)),[[ni,{zIndex:this.zIndex,enabled:this.show}]])}})}});function Cd(e){const{modalColor:t,textColor1:o,textColor2:n,boxShadow3:r,lineHeight:i,fontWeightStrong:a,dividerColor:l,closeColorHover:c,closeColorPressed:d,closeIconColor:v,closeIconColorHover:p,closeIconColorPressed:S,borderRadius:y,primaryColorHover:h}=e;return{bodyPadding:"16px 24px",borderRadius:y,headerPadding:"16px 24px",footerPadding:"16px 24px",color:t,textColor:n,titleTextColor:o,titleFontSize:"18px",titleFontWeight:a,boxShadow:r,lineHeight:i,headerBorderBottom:`1px solid ${l}`,footerBorderTop:`1px solid ${l}`,closeIconColor:v,closeIconColorHover:p,closeIconColorPressed:S,closeSize:"22px",closeIconSize:"18px",closeColorHover:c,closeColorPressed:d,closeBorderRadius:y,resizableTriggerColorHover:h}}const wd={name:"Drawer",common:kt,peers:{Scrollbar:nn},self:Cd},Sd=X({name:"NDrawerContent",inheritAttrs:!1,props:{blockScroll:Boolean,show:{type:Boolean,default:void 0},displayDirective:{type:String,required:!0},placement:{type:String,required:!0},contentClass:String,contentStyle:[Object,String],nativeScrollbar:{type:Boolean,required:!0},scrollbarProps:Object,trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},showMask:{type:[Boolean,String],required:!0},maxWidth:Number,maxHeight:Number,minWidth:Number,minHeight:Number,resizable:Boolean,onClickoutside:Function,onAfterLeave:Function,onAfterEnter:Function,onEsc:Function},setup(e){const t=D(!!e.show),o=D(null),n=pe(qr);let r=0,i="",a=null;const l=D(!1),c=D(!1),d=O(()=>e.placement==="top"||e.placement==="bottom"),{mergedClsPrefixRef:v,mergedRtlRef:p}=pt(e),S=Nt("Drawer",p,v),y=f,h=b=>{c.value=!0,r=d.value?b.clientY:b.clientX,i=document.body.style.cursor,document.body.style.cursor=d.value?"ns-resize":"ew-resize",document.body.addEventListener("mousemove",k),document.body.addEventListener("mouseleave",y),document.body.addEventListener("mouseup",f)},z=()=>{a!==null&&(window.clearTimeout(a),a=null),c.value?l.value=!0:a=window.setTimeout(()=>{l.value=!0},300)},x=()=>{a!==null&&(window.clearTimeout(a),a=null),l.value=!1},{doUpdateHeight:m,doUpdateWidth:$}=n,T=b=>{const{maxWidth:R}=e;if(R&&b>R)return R;const{minWidth:A}=e;return A&&b<A?A:b},B=b=>{const{maxHeight:R}=e;if(R&&b>R)return R;const{minHeight:A}=e;return A&&b<A?A:b};function k(b){var R,A;if(c.value)if(d.value){let I=((R=o.value)===null||R===void 0?void 0:R.offsetHeight)||0;const Z=r-b.clientY;I+=e.placement==="bottom"?Z:-Z,I=B(I),m(I),r=b.clientY}else{let I=((A=o.value)===null||A===void 0?void 0:A.offsetWidth)||0;const Z=r-b.clientX;I+=e.placement==="right"?Z:-Z,I=T(I),$(I),r=b.clientX}}function f(){c.value&&(r=0,c.value=!1,document.body.style.cursor=i,document.body.removeEventListener("mousemove",k),document.body.removeEventListener("mouseup",f),document.body.removeEventListener("mouseleave",y))}co(()=>{e.show&&(t.value=!0)}),we(()=>e.show,b=>{b||f()}),Fe(()=>{f()});const s=O(()=>{const{show:b}=e,R=[[ve,b]];return e.showMask||R.push([oi,e.onClickoutside,void 0,{capture:!0}]),R});function u(){var b;t.value=!1,(b=e.onAfterLeave)===null||b===void 0||b.call(e)}return ti(O(()=>e.blockScroll&&t.value)),Ce(Gr,o),Ce(Jr,null),Ce(Qr,null),{bodyRef:o,rtlEnabled:S,mergedClsPrefix:n.mergedClsPrefixRef,isMounted:n.isMountedRef,mergedTheme:n.mergedThemeRef,displayed:t,transitionName:O(()=>({right:"slide-in-from-right-transition",left:"slide-in-from-left-transition",top:"slide-in-from-top-transition",bottom:"slide-in-from-bottom-transition"})[e.placement]),handleAfterLeave:u,bodyDirectives:s,handleMousedownResizeTrigger:h,handleMouseenterResizeTrigger:z,handleMouseleaveResizeTrigger:x,isDragging:c,isHoverOnResizeTrigger:l}},render(){const{$slots:e,mergedClsPrefix:t}=this;return this.displayDirective==="show"||this.displayed||this.show?ae(g("div",{role:"none"},g(pi,{disabled:!this.showMask||!this.trapFocus,active:this.show,autoFocus:this.autoFocus,onEsc:this.onEsc},{default:()=>g(Me,{name:this.transitionName,appear:this.isMounted,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>ae(g("div",Ne(this.$attrs,{role:"dialog",ref:"bodyRef","aria-modal":"true",class:[`${t}-drawer`,this.rtlEnabled&&`${t}-drawer--rtl`,`${t}-drawer--${this.placement}-placement`,this.isDragging&&`${t}-drawer--unselectable`,this.nativeScrollbar&&`${t}-drawer--native-scrollbar`]}),[this.resizable?g("div",{class:[`${t}-drawer__resize-trigger`,(this.isDragging||this.isHoverOnResizeTrigger)&&`${t}-drawer__resize-trigger--hover`],onMouseenter:this.handleMouseenterResizeTrigger,onMouseleave:this.handleMouseleaveResizeTrigger,onMousedown:this.handleMousedownResizeTrigger}):null,this.nativeScrollbar?g("div",{class:[`${t}-drawer-content-wrapper`,this.contentClass],style:this.contentStyle,role:"none"},e):g(Si,Object.assign({},this.scrollbarProps,{contentStyle:this.contentStyle,contentClass:[`${t}-drawer-content-wrapper`,this.contentClass],theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar}),e)]),this.bodyDirectives)})})),[[ve,this.displayDirective==="if"||this.displayed||this.show]]):null}}),{cubicBezierEaseIn:Ed,cubicBezierEaseOut:$d}=We;function Bd({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-bottom"}={}){return[C(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${Ed}`}),C(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${$d}`}),C(`&.${o}-transition-enter-to`,{transform:"translateY(0)"}),C(`&.${o}-transition-enter-from`,{transform:"translateY(100%)"}),C(`&.${o}-transition-leave-from`,{transform:"translateY(0)"}),C(`&.${o}-transition-leave-to`,{transform:"translateY(100%)"})]}const{cubicBezierEaseIn:kd,cubicBezierEaseOut:zd}=We;function Rd({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-left"}={}){return[C(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${kd}`}),C(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${zd}`}),C(`&.${o}-transition-enter-to`,{transform:"translateX(0)"}),C(`&.${o}-transition-enter-from`,{transform:"translateX(-100%)"}),C(`&.${o}-transition-leave-from`,{transform:"translateX(0)"}),C(`&.${o}-transition-leave-to`,{transform:"translateX(-100%)"})]}const{cubicBezierEaseIn:Dd,cubicBezierEaseOut:Td}=We;function Fd({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-right"}={}){return[C(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${Dd}`}),C(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${Td}`}),C(`&.${o}-transition-enter-to`,{transform:"translateX(0)"}),C(`&.${o}-transition-enter-from`,{transform:"translateX(100%)"}),C(`&.${o}-transition-leave-from`,{transform:"translateX(0)"}),C(`&.${o}-transition-leave-to`,{transform:"translateX(100%)"})]}const{cubicBezierEaseIn:Pd,cubicBezierEaseOut:Ad}=We;function Od({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-top"}={}){return[C(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${Pd}`}),C(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${Ad}`}),C(`&.${o}-transition-enter-to`,{transform:"translateY(0)"}),C(`&.${o}-transition-enter-from`,{transform:"translateY(-100%)"}),C(`&.${o}-transition-leave-from`,{transform:"translateY(0)"}),C(`&.${o}-transition-leave-to`,{transform:"translateY(-100%)"})]}const Id=C([Y("drawer",`
 word-break: break-word;
 line-height: var(--n-line-height);
 position: absolute;
 pointer-events: all;
 box-shadow: var(--n-box-shadow);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background-color: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 `,[Fd(),Rd(),Od(),Bd(),H("unselectable",`
 user-select: none; 
 -webkit-user-select: none;
 `),H("native-scrollbar",[Y("drawer-content-wrapper",`
 overflow: auto;
 height: 100%;
 `)]),F("resize-trigger",`
 position: absolute;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `,[H("hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `)]),Y("drawer-content-wrapper",`
 box-sizing: border-box;
 `),Y("drawer-content",`
 height: 100%;
 display: flex;
 flex-direction: column;
 `,[H("native-scrollbar",[Y("drawer-body-content-wrapper",`
 height: 100%;
 overflow: auto;
 `)]),Y("drawer-body",`
 flex: 1 0 0;
 overflow: hidden;
 `),Y("drawer-body-content-wrapper",`
 box-sizing: border-box;
 padding: var(--n-body-padding);
 `),Y("drawer-header",`
 font-weight: var(--n-title-font-weight);
 line-height: 1;
 font-size: var(--n-title-font-size);
 color: var(--n-title-text-color);
 padding: var(--n-header-padding);
 transition: border .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-divider-color);
 border-bottom: var(--n-header-border-bottom);
 display: flex;
 justify-content: space-between;
 align-items: center;
 `,[F("main",`
 flex: 1;
 `),F("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),Y("drawer-footer",`
 display: flex;
 justify-content: flex-end;
 border-top: var(--n-footer-border-top);
 transition: border .3s var(--n-bezier);
 padding: var(--n-footer-padding);
 `)]),H("right-placement",`
 top: 0;
 bottom: 0;
 right: 0;
 border-top-left-radius: var(--n-border-radius);
 border-bottom-left-radius: var(--n-border-radius);
 `,[F("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 left: 0;
 transform: translateX(-1.5px);
 cursor: ew-resize;
 `)]),H("left-placement",`
 top: 0;
 bottom: 0;
 left: 0;
 border-top-right-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `,[F("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 right: 0;
 transform: translateX(1.5px);
 cursor: ew-resize;
 `)]),H("top-placement",`
 top: 0;
 left: 0;
 right: 0;
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `,[F("resize-trigger",`
 width: 100%;
 height: 3px;
 bottom: 0;
 left: 0;
 transform: translateY(1.5px);
 cursor: ns-resize;
 `)]),H("bottom-placement",`
 left: 0;
 bottom: 0;
 right: 0;
 border-top-left-radius: var(--n-border-radius);
 border-top-right-radius: var(--n-border-radius);
 `,[F("resize-trigger",`
 width: 100%;
 height: 3px;
 top: 0;
 left: 0;
 transform: translateY(-1.5px);
 cursor: ns-resize;
 `)])]),C("body",[C(">",[Y("drawer-container",`
 position: fixed;
 `)])]),Y("drawer-container",`
 position: relative;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 `,[C("> *",`
 pointer-events: all;
 `)]),Y("drawer-mask",`
 background-color: rgba(0, 0, 0, .3);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[H("invisible",`
 background-color: rgba(0, 0, 0, 0)
 `),on({enterDuration:"0.2s",leaveDuration:"0.2s",enterCubicBezier:"var(--n-bezier-in)",leaveCubicBezier:"var(--n-bezier-out)"})])]),Md=Object.assign(Object.assign({},$e.props),{show:Boolean,width:[Number,String],height:[Number,String],placement:{type:String,default:"right"},maskClosable:{type:Boolean,default:!0},showMask:{type:[Boolean,String],default:!0},to:[String,Object],displayDirective:{type:String,default:"if"},nativeScrollbar:{type:Boolean,default:!0},zIndex:Number,onMaskClick:Function,scrollbarProps:Object,contentClass:String,contentStyle:[Object,String],trapFocus:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0},maxWidth:Number,maxHeight:Number,minWidth:Number,minHeight:Number,resizable:Boolean,defaultWidth:{type:[Number,String],default:251},defaultHeight:{type:[Number,String],default:251},onUpdateWidth:[Function,Array],onUpdateHeight:[Function,Array],"onUpdate:width":[Function,Array],"onUpdate:height":[Function,Array],"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,drawerStyle:[String,Object],drawerClass:String,target:null,onShow:Function,onHide:Function}),Hd=X({name:"Drawer",inheritAttrs:!1,props:Md,setup(e){const{mergedClsPrefixRef:t,namespaceRef:o,inlineThemeDisabled:n}=pt(e),r=Ko(),i=$e("Drawer","-drawer",Id,wd,e,t),a=D(e.defaultWidth),l=D(e.defaultHeight),c=Fn(ke(e,"width"),a),d=Fn(ke(e,"height"),l),v=O(()=>{const{placement:f}=e;return f==="top"||f==="bottom"?"":or(c.value)}),p=O(()=>{const{placement:f}=e;return f==="left"||f==="right"?"":or(d.value)}),S=f=>{const{onUpdateWidth:s,"onUpdate:width":u}=e;s&&ge(s,f),u&&ge(u,f),a.value=f},y=f=>{const{onUpdateHeight:s,"onUpdate:width":u}=e;s&&ge(s,f),u&&ge(u,f),l.value=f},h=O(()=>[{width:v.value,height:p.value},e.drawerStyle||""]);function z(f){const{onMaskClick:s,maskClosable:u}=e;u&&T(!1),s&&s(f)}function x(f){z(f)}const m=ei();function $(f){var s;(s=e.onEsc)===null||s===void 0||s.call(e),e.show&&e.closeOnEsc&&mi(f)&&(m.value||T(!1))}function T(f){const{onHide:s,onUpdateShow:u,"onUpdate:show":b}=e;u&&ge(u,f),b&&ge(b,f),s&&!f&&ge(s,f)}Ce(qr,{isMountedRef:r,mergedThemeRef:i,mergedClsPrefixRef:t,doUpdateShow:T,doUpdateHeight:y,doUpdateWidth:S});const B=O(()=>{const{common:{cubicBezierEaseInOut:f,cubicBezierEaseIn:s,cubicBezierEaseOut:u},self:{color:b,textColor:R,boxShadow:A,lineHeight:I,headerPadding:Z,footerPadding:G,borderRadius:J,bodyPadding:q,titleFontSize:L,titleTextColor:ne,titleFontWeight:le,headerBorderBottom:re,footerBorderTop:de,closeIconColor:xe,closeIconColorHover:Pe,closeIconColorPressed:Ae,closeColorHover:zt,closeColorPressed:Q,closeIconSize:Ve,closeSize:Qe,closeBorderRadius:U,resizableTriggerColorHover:Ke}}=i.value;return{"--n-line-height":I,"--n-color":b,"--n-border-radius":J,"--n-text-color":R,"--n-box-shadow":A,"--n-bezier":f,"--n-bezier-out":u,"--n-bezier-in":s,"--n-header-padding":Z,"--n-body-padding":q,"--n-footer-padding":G,"--n-title-text-color":ne,"--n-title-font-size":L,"--n-title-font-weight":le,"--n-header-border-bottom":re,"--n-footer-border-top":de,"--n-close-icon-color":xe,"--n-close-icon-color-hover":Pe,"--n-close-icon-color-pressed":Ae,"--n-close-size":Qe,"--n-close-color-hover":zt,"--n-close-color-pressed":Q,"--n-close-icon-size":Ve,"--n-close-border-radius":U,"--n-resize-trigger-color-hover":Ke}}),k=n?Bt("drawer",void 0,B,e):void 0;return{mergedClsPrefix:t,namespace:o,mergedBodyStyle:h,handleOutsideClick:x,handleMaskClick:z,handleEsc:$,mergedTheme:i,cssVars:n?void 0:B,themeClass:k==null?void 0:k.themeClass,onRender:k==null?void 0:k.onRender,isMounted:r}},render(){const{mergedClsPrefix:e}=this;return g(ri,{to:this.to,show:this.show},{default:()=>{var t;return(t=this.onRender)===null||t===void 0||t.call(this),ae(g("div",{class:[`${e}-drawer-container`,this.namespace,this.themeClass],style:this.cssVars,role:"none"},this.showMask?g(Me,{name:"fade-in-transition",appear:this.isMounted},{default:()=>this.show?g("div",{"aria-hidden":!0,class:[`${e}-drawer-mask`,this.showMask==="transparent"&&`${e}-drawer-mask--invisible`],onClick:this.handleMaskClick}):null}):null,g(Sd,Object.assign({},this.$attrs,{class:[this.drawerClass,this.$attrs.class],style:[this.mergedBodyStyle,this.$attrs.style],blockScroll:this.blockScroll,contentStyle:this.contentStyle,contentClass:this.contentClass,placement:this.placement,scrollbarProps:this.scrollbarProps,show:this.show,displayDirective:this.displayDirective,nativeScrollbar:this.nativeScrollbar,onAfterEnter:this.onAfterEnter,onAfterLeave:this.onAfterLeave,trapFocus:this.trapFocus,autoFocus:this.autoFocus,resizable:this.resizable,maxHeight:this.maxHeight,minHeight:this.minHeight,maxWidth:this.maxWidth,minWidth:this.minWidth,showMask:this.showMask,onEsc:this.handleEsc,onClickoutside:this.handleOutsideClick}),this.$slots)),[[ni,{zIndex:this.zIndex,enabled:this.show}]])}})}}),_d=(e,{componentRef:t,visible:o,onMounted:n,config:r,consumer:i})=>{const a=c=>{c||i.value.destroy()},l=()=>{i.value.destroy()};return w(yd,Ne({ref:t,show:o.value,onUpdateShow:a,onAfterLeave:l,onVnodeMounted:n,preset:"dialog"},r.attrs),{default:()=>e,...r.slots})},Wd=Yo({render:_d,defaultConfig:{attrs:{preset:"dialog",closable:!0}}}),Ld=(e,{componentRef:t,visible:o,onMounted:n,config:r,consumer:i})=>{const a=c=>{c||i.value.destroy()},l=()=>{i.value.destroy()};return w(Hd,Ne({ref:t,show:o.value,onUpdateShow:a,onAfterLeave:l,onVnodeMounted:n,width:300,placement:"right"},r.attrs),{default:()=>e,...r.slots})};Yo({render:Ld,defaultConfig:{attrs:{width:300,placement:"right"}}});const jd={class:"flex justify-center items-center"},Nd=X({__name:"other-ui",setup(e){const t=dl(),o=()=>{t(w(ze,null,null),{title:"hello world",attrs:{size:"50vw"}})},n=Vs(),r=()=>{n(w(ze,null,null))},i=Wd(),a=()=>{i(w(ze,null,null))};return(l,c)=>{const d=Te,v=Zo;return Ee(),Se("div",null,[K("div",jd,[w(d,{onClick:o},{default:j(()=>c[0]||(c[0]=[N("打开el-drawer")])),_:1}),w(v,null,{default:j(()=>c[1]||(c[1]=[N("以下粗略适配,暂时没时间适配,如果有需求可以自行适配一下(我也会适配的,只是时间问题)")])),_:1}),w(d,{onClick:r},{default:j(()=>c[2]||(c[2]=[N("打开vant-popup")])),_:1}),w(d,{onClick:a},{default:j(()=>c[3]||(c[3]=[N("打开naive-modal")])),_:1})]),w(v),c[4]||(c[4]=K("p",{class:"text-center"},"欢迎PR,或者联系我以提供更多组件的适配",-1))])}}}),Vd=`<template>
  <div class="flex justify-center items-center">
    <el-button @click="openDialog">打开弹窗</el-button>
  </div>
</template>

<script setup name="base-example" lang="tsx">
import { useElementPlusDialog } from "@vue-cmd/element-plus";
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
`,Yd={class:"flex justify-center items-center"},Zd=X({__name:"communication",setup(e){const t=vt(),o=()=>{t(w(ze,{onSay:n=>{console.log(n)}},null),{title:"hello world"})};return(n,r)=>{const i=Te;return Ee(),Se("div",Yd,[w(i,{onClick:o},{default:j(()=>r[0]||(r[0]=[N("打开弹窗")])),_:1})])}}}),Xd=`<template>
  <div class="flex justify-center items-center">
    <el-button @click="openDialog">打开弹窗</el-button>
  </div>
</template>

<script setup name="base-example" lang="tsx">
import { useElementPlusDialog } from "@vue-cmd/element-plus";
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
`,Ud={class:"flex justify-center items-center"},Gd=X({__name:"native-slots",setup(e){const t=vt(),o=()=>{const n=t(w(ze,null,null),{title:"",slots:{header:()=>w("div",{class:"text-red text-30px"},[N("自定义头部")]),footer:()=>w("div",{class:"flex justify-center items-center gap-20px"},[w(Te,{type:"primary",onClick:()=>n.destroyWithResolve("ok")},{default:()=>[N("确定")]}),w(Te,{type:"default",onClick:()=>n.destroyWithReject("cancel")},{default:()=>[N("取消")]})])}})};return(n,r)=>{const i=Te;return Ee(),Se("div",Ud,[w(i,{onClick:o},{default:j(()=>r[0]||(r[0]=[N("打开弹窗")])),_:1})])}}}),qd=`<template>
  <div class="flex justify-center items-center">
    <el-button @click="openDialog">打开弹窗</el-button>
  </div>
</template>

<script setup name="base-example" lang="tsx">
import { useElementPlusDialog } from "@vue-cmd/element-plus";
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
`,Qd={class:"flex justify-center items-center"},Kd=X({__name:"native-attributes",setup(e){const t=vt(),o=()=>{t(w(ze,null,null),{title:"组件原生属性(尝试拖拽我试试)",attrs:{modal:!0,modalClass:"custom-modal",appendToBody:!0,lockScroll:!0,openDelay:0,closeDelay:0,closeOnClickModal:!0,closeOnPressEscape:!0,showClose:!0,beforeClose:n=>{console.log("👹我将阻止你的关闭👹")},draggable:!0,alignCenter:!0}})};return(n,r)=>{const i=Te;return Ee(),Se("div",Qd,[w(i,{onClick:o},{default:j(()=>r[0]||(r[0]=[N("打开弹窗")])),_:1})])}}}),Jd=`<template>
  <div class="flex justify-center items-center">
    <el-button @click="openDialog">打开弹窗</el-button>
  </div>
</template>

<script setup name="base-example" lang="tsx">
import { useElementPlusDialog } from "@vue-cmd/element-plus";
import DialogContent from "./dialog-content.vue";

const CommandDialog = useElementPlusDialog();
const openDialog = () => {
  CommandDialog(<DialogContent nested={true} />, {
    title: "嵌套嵌套,还是嵌套",
  });
};
<\/script>

<style lang="scss" scoped></style>
`,eu=`<template>
  <div class="flex justify-center items-center">
    <el-button @click="consumer.show()">显示弹窗</el-button>
    <el-button @click="consumer.hide()">隐藏弹窗</el-button>

    <el-button @click="newDialog()">重新创建一个弹窗🌟</el-button>
  </div>
</template>

<script setup name="base-example" lang="tsx">
import { useElementPlusDialog } from "@vue-cmd/element-plus";
import { type IConsumer } from "@vue-cmd/core";
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
`,tu={class:"flex justify-center items-center"},ou=X({__name:"showhide",setup(e){const t=vt();let o;const n=()=>{o=t(w(ze,null,null),{title:"hello world",attrs:{"close-on-click-modal":!1}}),o.hide()};return n(),(r,i)=>{const a=Te;return Ee(),Se("div",tu,[w(a,{onClick:i[0]||(i[0]=l=>W(o).show())},{default:j(()=>i[3]||(i[3]=[N("显示弹窗")])),_:1}),w(a,{onClick:i[1]||(i[1]=l=>W(o).hide())},{default:j(()=>i[4]||(i[4]=[N("隐藏弹窗")])),_:1}),w(a,{onClick:i[2]||(i[2]=l=>n())},{default:j(()=>i[5]||(i[5]=[N("重新创建一个弹窗🌟")])),_:1})])}}}),nu=`<template>
  <div class="flex justify-center items-center">
    <el-button @click="openDialog">打开弹窗</el-button>
  </div>
</template>

<script setup name="base-example" lang="tsx">
import { useElementPlusDialog } from "@vue-cmd/element-plus";
import DialogContent from "./dialog-content.vue";

const CommandDialog = useElementPlusDialog();
const openDialog = () => {
  CommandDialog(<DialogContent />, {
    title: "hello world",
  });
};
<\/script>

<style lang="scss" scoped></style>
`,ru={class:"flex justify-center items-center"},iu=X({__name:"base",setup(e){const t=vt(),o=()=>{t(w(ze,null,null),{title:"hello world"})};return(n,r)=>{const i=Te;return Ee(),Se("div",ru,[w(i,{onClick:o},{default:j(()=>r[0]||(r[0]=[N("打开弹窗")])),_:1})])}}}),lu=`<script lang="tsx" setup>
import { useConsumer } from "@vue-cmd/core";
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
`,hu=JSON.parse('{"title":"常规用法","description":"","frontmatter":{},"headers":[],"relativePath":"example/base.md","filePath":"example/base.md"}'),su={name:"example/base.md"},vu=Object.assign(su,{setup(e){const t=D(!0);return(o,n)=>{const r=el("ClientOnly");return Ee(),Se("div",null,[n[9]||(n[9]=So("",8)),ae(w(W(Le),null,null,512),[[ve,t.value]]),w(r,null,{default:j(()=>[w(W(je),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:n[0]||(n[0]=()=>{t.value=!1}),vueCode:W(lu)},{vue:j(()=>[w(ze)]),_:1},8,["vueCode"])]),_:1}),n[10]||(n[10]=So("",4)),ae(w(W(Le),null,null,512),[[ve,t.value]]),w(r,null,{default:j(()=>[w(W(je),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:n[1]||(n[1]=()=>{t.value=!1}),vueCode:W(nu)},{vue:j(()=>[w(iu)]),_:1},8,["vueCode"])]),_:1}),n[11]||(n[11]=K("h2",{id:"显示和隐藏",tabindex:"-1"},[N("显示和隐藏 "),K("a",{class:"header-anchor",href:"#显示和隐藏","aria-label":'Permalink to "显示和隐藏"'},"​")],-1)),n[12]||(n[12]=K("p",null,[N("隐藏"),K("code",null,"hide"),N("只会隐藏掉组件,不会进行真正的销毁.")],-1)),ae(w(W(Le),null,null,512),[[ve,t.value]]),w(r,null,{default:j(()=>[w(W(je),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:n[2]||(n[2]=()=>{t.value=!1}),vueCode:W(eu)},{vue:j(()=>[w(ou)]),_:1},8,["vueCode"])]),_:1}),n[13]||(n[13]=K("h2",{id:"嵌套",tabindex:"-1"},[N("嵌套 "),K("a",{class:"header-anchor",href:"#嵌套","aria-label":'Permalink to "嵌套"'},"​")],-1)),n[14]||(n[14]=K("p",null,"可以开始你的无限套娃之旅了~",-1)),ae(w(W(Le),null,null,512),[[ve,t.value]]),w(r,null,{default:j(()=>[w(W(je),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:n[3]||(n[3]=()=>{t.value=!1}),vueCode:W(Jd)},{vue:j(()=>[w($r)]),_:1},8,["vueCode"])]),_:1}),n[15]||(n[15]=K("h2",{id:"原生组件特性",tabindex:"-1"},[N("原生组件特性 "),K("a",{class:"header-anchor",href:"#原生组件特性","aria-label":'Permalink to "原生组件特性"'},"​")],-1)),n[16]||(n[16]=K("p",null,"支持原生组件所有的属性和事件,方法.",-1)),ae(w(W(Le),null,null,512),[[ve,t.value]]),w(r,null,{default:j(()=>[w(W(je),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:n[4]||(n[4]=()=>{t.value=!1}),vueCode:W(qd)},{vue:j(()=>[w(Kd)]),_:1},8,["vueCode"])]),_:1}),n[17]||(n[17]=K("h2",{id:"原生组件插槽",tabindex:"-1"},[N("原生组件插槽 "),K("a",{class:"header-anchor",href:"#原生组件插槽","aria-label":'Permalink to "原生组件插槽"'},"​")],-1)),n[18]||(n[18]=K("p",null,"支持原生组件所有的插槽,包括具名插槽和作用域插槽.",-1)),ae(w(W(Le),null,null,512),[[ve,t.value]]),w(r,null,{default:j(()=>[w(W(je),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:n[5]||(n[5]=()=>{t.value=!1}),vueCode:W(Xd)},{vue:j(()=>[w(Gd)]),_:1},8,["vueCode"])]),_:1}),n[19]||(n[19]=K("h2",{id:"通信",tabindex:"-1"},[N("通信 "),K("a",{class:"header-anchor",href:"#通信","aria-label":'Permalink to "通信"'},"​")],-1)),n[20]||(n[20]=K("p",null,"你可以像往常一样,使用传统的emit来进行单向数据流的方式来进行通信. 然而下一章中,你会认识到一种更优雅的通信方式,那就是promise特性的弹窗.",-1)),n[21]||(n[21]=K("p",null,"打开弹窗emit一个事件吧,它虽然不如promise方式优雅,但是它可以不断的向外部发送消息,而promise仅限一次.",-1)),ae(w(W(Le),null,null,512),[[ve,t.value]]),w(r,null,{default:j(()=>[w(W(je),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:n[6]||(n[6]=()=>{t.value=!1}),vueCode:W(Vd)},{vue:j(()=>[w(Zd)]),_:1},8,["vueCode"])]),_:1}),n[22]||(n[22]=So("",6)),ae(w(W(Le),null,null,512),[[ve,t.value]]),w(r,null,{default:j(()=>[w(W(je),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:n[7]||(n[7]=()=>{t.value=!1}),vueCode:W(Xl)},{vue:j(()=>[w(Nd)]),_:1},8,["vueCode"])]),_:1}),n[23]||(n[23]=K("h2",{id:"响应式组件",tabindex:"-1"},[N("响应式组件 "),K("a",{class:"header-anchor",href:"#响应式组件","aria-label":'Permalink to "响应式组件"'},"​")],-1)),n[24]||(n[24]=K("p",null,[N("由于jsx的书写方式,上述所有示例都有一个严重的缺陷,就是"),K("code",null,"DialogContent"),N("组件的视图是无法根据props数据的变化进行更新的,这个时候你就需要JSXReactive来包裹你的jsx.其原理是将渲染函数包裹成一个响应式组件,从而实现视图的更新.")],-1)),ae(w(W(Le),null,null,512),[[ve,t.value]]),w(r,null,{default:j(()=>[w(W(je),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:n[8]||(n[8]=()=>{t.value=!1}),vueCode:W(jl)},{vue:j(()=>[w(Zl)]),_:1},8,["vueCode"])]),_:1})])}}});export{hu as __pageData,vu as default};
