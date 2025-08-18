import{j as U,c as C,C as D,G as b,D as A,k as s,J as p,t as G,P as V,a3 as he,u as o,E as S,B,H as Q,v as ee,T as Wt,aB as ke,r as T,i as lt,aE as cn,ab as x,b as pn,n as se,d as Fe,p as Bt,f as Pe,aF as ct,w as le,I as M,K as E,U as bl,aa as be,aG as gl,Y as hl,aH as Ge,aI as yl,g as It,l as wl,ax as De,m as Cl,aC as $e,aJ as Vl,X as Ee,aK as Sl,F as St,W as en,aL as Dl,$ as Se,aM as kl,h as Et,aN as tn,aO as _l,aP as nn,_ as ce,aD as et}from"./chunks/framework.ZlEsIilh.js";import{b as pe,d as ge,_ as re,g as ie,y as Y,V as Dt,I as Xe,W as Me,C as ye,U as q,c as pt,X as ln,m as ot,Y as Rt,Z as Tl,u as mt,$ as Nt,k as ft,a0 as $t,s as Qe,a1 as vt,a2 as mn,a3 as on,q as ne,a4 as Ue,j as fn,z as Oe,x as vn,a5 as Wl,w as Bl,a6 as Il,E as bt,a7 as El,a8 as Ot,a9 as Re,aa as Rl,h as Nl,l as $l,ab as Ol,ac as an,ad as Ll,r as bn,ae as Lt,a as Ml,af as Ae,e as Al,ag as Ul,ah as Pl,ai as Fl,aj as Zl,ak as sn,al as zl,am as Gl,an as xl,ao as Ql,ap as Yl,N as qe,H as oe,K as gt,aq as ht,O as Ce,P as Ve,R as Xl}from"./chunks/index.CIQb551O.js";import{v as rn,u as un,E as ql,s as jl,C as Kl,a as Hl,b as Jl,f as gn,g as hn,d as Mt,e as At,c as eo}from"./chunks/el-tag.CXFFUXSI.js";import{a as tt,c as Ne,g as xe,i as nt,d as to,b as no}from"./chunks/theme.EkMg1Mgs.js";import{T as lo}from"./chunks/nested.CqEPtGev.js";const oo=pe({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"},showZero:{type:Boolean,default:!0},color:String,badgeStyle:{type:ge([String,Object,Array])},offset:{type:ge(Array),default:[0,0]},badgeClass:{type:String}}),ao=U({name:"ElBadge"}),so=U({...ao,props:oo,setup(e,{expose:i}){const l=e,t=ie("badge"),a=C(()=>l.isDot?"":Y(l.value)&&Y(l.max)?l.max<l.value?`${l.max}+`:`${l.value}`:`${l.value}`),f=C(()=>{var n,m,v,d,c;return[{backgroundColor:l.color,marginRight:Dt(-((m=(n=l.offset)==null?void 0:n[0])!=null?m:0)),marginTop:Dt((d=(v=l.offset)==null?void 0:v[1])!=null?d:0)},(c=l.badgeStyle)!=null?c:{}]});return i({content:a}),(n,m)=>(b(),D("div",{class:S(o(t).b())},[A(n.$slots,"default"),s(Wt,{name:`${o(t).namespace.value}-zoom-in-center`,persisted:""},{default:p(()=>[G(V("sup",{class:S([o(t).e("content"),o(t).em("content",n.type),o(t).is("fixed",!!n.$slots.default),o(t).is("dot",n.isDot),o(t).is("hide-zero",!n.showZero&&l.value===0),n.badgeClass]),style:he(o(f))},[A(n.$slots,"content",{value:o(a)},()=>[B(Q(o(a)),1)])],6),[[ee,!n.hidden&&(o(a)||n.isDot||n.$slots.content)]])]),_:3},8,["name"])],2))}});var io=re(so,[["__file","badge.vue"]]);const ro=Xe(io),yn=pe({modelValue:{type:[String,Number,Boolean],default:void 0},size:pt,disabled:Boolean,label:{type:[String,Number,Boolean],default:void 0},value:{type:[String,Number,Boolean],default:void 0},name:{type:String,default:void 0}}),uo=pe({...yn,border:Boolean}),wn={[q]:e=>ke(e)||Y(e)||Me(e),[ye]:e=>ke(e)||Y(e)||Me(e)},Cn=Symbol("radioGroupKey"),Vn=(e,i)=>{const l=T(),t=lt(Cn,void 0),a=C(()=>!!t),f=C(()=>ln(e.value)?e.label:e.value),n=C({get(){return a.value?t.modelValue:e.modelValue},set(r){a.value?t.changeEvent(r):i&&i(q,r),l.value.checked=e.modelValue===f.value}}),m=ot(C(()=>t==null?void 0:t.size)),v=Rt(C(()=>t==null?void 0:t.disabled)),d=T(!1),c=C(()=>v.value||a.value&&n.value!==f.value?-1:0);return Tl({from:"label act as value",replacement:"value",version:"3.0.0",scope:"el-radio",ref:"https://element-plus.org/en-US/component/radio.html"},C(()=>a.value&&ln(e.value))),{radioRef:l,isGroup:a,radioGroup:t,focus:d,size:m,disabled:v,tabIndex:c,modelValue:n,actualValue:f}},co=U({name:"ElRadio"}),po=U({...co,props:uo,emits:wn,setup(e,{emit:i}){const l=e,t=ie("radio"),{radioRef:a,radioGroup:f,focus:n,size:m,disabled:v,modelValue:d,actualValue:c}=Vn(l,i);function r(){se(()=>i(ye,d.value))}return(h,g)=>{var k;return b(),D("label",{class:S([o(t).b(),o(t).is("disabled",o(v)),o(t).is("focus",o(n)),o(t).is("bordered",h.border),o(t).is("checked",o(d)===o(c)),o(t).m(o(m))])},[V("span",{class:S([o(t).e("input"),o(t).is("disabled",o(v)),o(t).is("checked",o(d)===o(c))])},[G(V("input",{ref_key:"radioRef",ref:a,"onUpdate:modelValue":O=>pn(d)?d.value=O:null,class:S(o(t).e("original")),value:o(c),name:h.name||((k=o(f))==null?void 0:k.name),disabled:o(v),checked:o(d)===o(c),type:"radio",onFocus:O=>n.value=!0,onBlur:O=>n.value=!1,onChange:r,onClick:x(()=>{},["stop"])},null,42,["onUpdate:modelValue","value","name","disabled","checked","onFocus","onBlur","onClick"]),[[cn,o(d)]]),V("span",{class:S(o(t).e("inner"))},null,2)],2),V("span",{class:S(o(t).e("label")),onKeydown:x(()=>{},["stop"])},[A(h.$slots,"default",{},()=>[B(Q(h.label),1)])],42,["onKeydown"])],2)}}});var mo=re(po,[["__file","radio.vue"]]);const fo=pe({...yn}),vo=U({name:"ElRadioButton"}),bo=U({...vo,props:fo,setup(e){const i=e,l=ie("radio"),{radioRef:t,focus:a,size:f,disabled:n,modelValue:m,radioGroup:v,actualValue:d}=Vn(i),c=C(()=>({backgroundColor:(v==null?void 0:v.fill)||"",borderColor:(v==null?void 0:v.fill)||"",boxShadow:v!=null&&v.fill?`-1px 0 0 0 ${v.fill}`:"",color:(v==null?void 0:v.textColor)||""}));return(r,h)=>{var g;return b(),D("label",{class:S([o(l).b("button"),o(l).is("active",o(m)===o(d)),o(l).is("disabled",o(n)),o(l).is("focus",o(a)),o(l).bm("button",o(f))])},[G(V("input",{ref_key:"radioRef",ref:t,"onUpdate:modelValue":k=>pn(m)?m.value=k:null,class:S(o(l).be("button","original-radio")),value:o(d),type:"radio",name:r.name||((g=o(v))==null?void 0:g.name),disabled:o(n),onFocus:k=>a.value=!0,onBlur:k=>a.value=!1,onClick:x(()=>{},["stop"])},null,42,["onUpdate:modelValue","value","name","disabled","onFocus","onBlur","onClick"]),[[cn,o(m)]]),V("span",{class:S(o(l).be("button","inner")),style:he(o(m)===o(d)?o(c):{}),onKeydown:x(()=>{},["stop"])},[A(r.$slots,"default",{},()=>[B(Q(r.label),1)])],46,["onKeydown"])],2)}}});var Sn=re(bo,[["__file","radio-button.vue"]]);const go=pe({id:{type:String,default:void 0},size:pt,disabled:Boolean,modelValue:{type:[String,Number,Boolean],default:void 0},fill:{type:String,default:""},textColor:{type:String,default:""},name:{type:String,default:void 0},validateEvent:{type:Boolean,default:!0},...mt(["ariaLabel"])}),ho=wn,yo=U({name:"ElRadioGroup"}),wo=U({...yo,props:go,emits:ho,setup(e,{emit:i}){const l=e,t=ie("radio"),a=Nt(),f=T(),{formItem:n}=ft(),{inputId:m,isLabeledByFormItem:v}=$t(l,{formItemContext:n}),d=r=>{i(q,r),se(()=>i(ye,r))};Fe(()=>{const r=f.value.querySelectorAll("[type=radio]"),h=r[0];!Array.from(r).some(g=>g.checked)&&h&&(h.tabIndex=0)});const c=C(()=>l.name||a.value);return Bt(Cn,Pe({...ct(l),changeEvent:d,name:c})),le(()=>l.modelValue,()=>{l.validateEvent&&(n==null||n.validate("change").catch(r=>Qe()))}),(r,h)=>(b(),D("div",{id:o(m),ref_key:"radioGroupRef",ref:f,class:S(o(t).b("group")),role:"radiogroup","aria-label":o(v)?void 0:r.ariaLabel||"radio-group","aria-labelledby":o(v)?o(n).labelId:void 0},[A(r.$slots,"default")],10,["id","aria-label","aria-labelledby"]))}});var Dn=re(wo,[["__file","radio-group.vue"]]);const Co=Xe(mo,{RadioButton:Sn,RadioGroup:Dn}),Vo=vt(Dn);vt(Sn);const So=(e="")=>e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d"),kt=pe({type:{type:String,values:["primary","success","info","warning","danger"],default:"primary"},closable:Boolean,disableTransitions:Boolean,hit:Boolean,color:String,size:{type:String,values:mn},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),Do={close:e=>e instanceof MouseEvent,click:e=>e instanceof MouseEvent},ko=U({name:"ElTag"}),_o=U({...ko,props:kt,emits:Do,setup(e,{emit:i}){const l=e,t=ot(),a=ie("tag"),f=C(()=>{const{type:d,hit:c,effect:r,closable:h,round:g}=l;return[a.b(),a.is("closable",h),a.m(d||"primary"),a.m(t.value),a.m(r),a.is("hit",c),a.is("round",g)]}),n=d=>{i("close",d)},m=d=>{i("click",d)},v=d=>{var c,r,h;(h=(r=(c=d==null?void 0:d.component)==null?void 0:c.subTree)==null?void 0:r.component)!=null&&h.bum&&(d.component.subTree.component.bum=null)};return(d,c)=>d.disableTransitions?(b(),D("span",{key:0,class:S(o(f)),style:he({backgroundColor:d.color}),onClick:m},[V("span",{class:S(o(a).e("content"))},[A(d.$slots,"default")],2),d.closable?(b(),M(o(ne),{key:0,class:S(o(a).e("close")),onClick:x(n,["stop"])},{default:p(()=>[s(o(on))]),_:1},8,["class","onClick"])):E("v-if",!0)],6)):(b(),M(Wt,{key:1,name:`${o(a).namespace.value}-zoom-in-center`,appear:"",onVnodeMounted:v},{default:p(()=>[V("span",{class:S(o(f)),style:he({backgroundColor:d.color}),onClick:m},[V("span",{class:S(o(a).e("content"))},[A(d.$slots,"default")],2),d.closable?(b(),M(o(ne),{key:0,class:S(o(a).e("close")),onClick:x(n,["stop"])},{default:p(()=>[s(o(on))]),_:1},8,["class","onClick"])):E("v-if",!0)],6)]),_:3},8,["name"]))}});var To=re(_o,[["__file","tag.vue"]]);const Wo=Xe(To),ve={},Bo=pe({id:{type:String,default:void 0},step:{type:Number,default:1},stepStrictly:Boolean,max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},modelValue:Number,readonly:Boolean,disabled:Boolean,size:pt,controls:{type:Boolean,default:!0},controlsPosition:{type:String,default:"",values:["","right"]},valueOnClear:{type:[String,Number,null],validator:e=>e===null||Y(e)||["min","max"].includes(e),default:null},name:String,placeholder:String,precision:{type:Number,validator:e=>e>=0&&e===Number.parseInt(`${e}`,10)},validateEvent:{type:Boolean,default:!0},...mt(["ariaLabel"])}),Io={[ye]:(e,i)=>i!==e,blur:e=>e instanceof FocusEvent,focus:e=>e instanceof FocusEvent,[Ue]:e=>Y(e)||tt(e),[q]:e=>Y(e)||tt(e)},Eo=U({name:"ElInputNumber"}),Ro=U({...Eo,props:Bo,emits:Io,setup(e,{expose:i,emit:l}){const t=e,{t:a}=fn(),f=ie("input-number"),n=T(),m=Pe({currentValue:t.modelValue,userInput:null}),{formItem:v}=ft(),d=C(()=>Y(t.modelValue)&&t.modelValue<=t.min),c=C(()=>Y(t.modelValue)&&t.modelValue>=t.max),r=C(()=>{const y=N(t.step);return Oe(t.precision)?Math.max(N(t.modelValue),y):(y>t.precision,t.precision)}),h=C(()=>t.controls&&t.controlsPosition==="right"),g=ot(),k=Rt(),O=C(()=>{if(m.userInput!==null)return m.userInput;let y=m.currentValue;if(tt(y))return"";if(Y(y)){if(Number.isNaN(y))return"";Oe(t.precision)||(y=y.toFixed(t.precision))}return y}),R=(y,W)=>{if(Oe(W)&&(W=r.value),W===0)return Math.round(y);let L=String(y);const Z=L.indexOf(".");if(Z===-1||!L.replace(".","").split("")[Z+W])return y;const Ze=L.length;return L.charAt(Ze-1)==="5"&&(L=`${L.slice(0,Math.max(0,Ze-1))}6`),Number.parseFloat(Number(L).toFixed(W))},N=y=>{if(tt(y))return 0;const W=y.toString(),L=W.indexOf(".");let Z=0;return L!==-1&&(Z=W.length-L-1),Z},F=(y,W=1)=>Y(y)?R(y+t.step*W):m.currentValue,me=()=>{if(t.readonly||k.value||c.value)return;const y=Number(O.value)||0,W=F(y);P(W),l(Ue,m.currentValue),je()},we=()=>{if(t.readonly||k.value||d.value)return;const y=Number(O.value)||0,W=F(y,-1);P(W),l(Ue,m.currentValue),je()},_=(y,W)=>{const{max:L,min:Z,step:z,precision:ae,stepStrictly:Ze,valueOnClear:Be}=t;L<Z&&Ot("InputNumber","min should not be greater than max.");let j=Number(y);if(tt(y)||Number.isNaN(j))return null;if(y===""){if(Be===null)return null;j=ke(Be)?{min:Z,max:L}[Be]:Be}return Ze&&(j=R(Math.round(j/z)*z,ae),j!==y&&W&&l(q,j)),Oe(ae)||(j=R(j,ae)),(j>L||j<Z)&&(j=j>L?L:Z,W&&l(q,j)),j},P=(y,W=!0)=>{var L;const Z=m.currentValue,z=_(y);if(!W){l(q,z);return}Z===z&&y||(m.userInput=null,l(q,z),Z!==z&&l(ye,z,Z),t.validateEvent&&((L=v==null?void 0:v.validate)==null||L.call(v,"change").catch(ae=>Qe())),m.currentValue=z)},ue=y=>{m.userInput=y;const W=y===""?null:Number(y);l(Ue,W),P(W,!1)},_e=y=>{const W=y!==""?Number(y):"";(Y(W)&&!Number.isNaN(W)||y==="")&&P(W),je(),m.userInput=null},I=()=>{var y,W;(W=(y=n.value)==null?void 0:y.focus)==null||W.call(y)},Te=()=>{var y,W;(W=(y=n.value)==null?void 0:y.blur)==null||W.call(y)},We=y=>{l("focus",y)},fe=y=>{var W,L;m.userInput=null,El()&&m.currentValue===null&&((W=n.value)!=null&&W.input)&&(n.value.input.value=""),l("blur",y),t.validateEvent&&((L=v==null?void 0:v.validate)==null||L.call(v,"blur").catch(Z=>Qe()))},je=()=>{m.currentValue!==t.modelValue&&(m.currentValue=t.modelValue)},Ct=y=>{document.activeElement===y.target&&y.preventDefault()};return le(()=>t.modelValue,(y,W)=>{const L=_(y,!0);m.userInput===null&&L!==W&&(m.currentValue=L)},{immediate:!0}),Fe(()=>{var y;const{min:W,max:L,modelValue:Z}=t,z=(y=n.value)==null?void 0:y.input;if(z.setAttribute("role","spinbutton"),Number.isFinite(L)?z.setAttribute("aria-valuemax",String(L)):z.removeAttribute("aria-valuemax"),Number.isFinite(W)?z.setAttribute("aria-valuemin",String(W)):z.removeAttribute("aria-valuemin"),z.setAttribute("aria-valuenow",m.currentValue||m.currentValue===0?String(m.currentValue):""),z.setAttribute("aria-disabled",String(k.value)),!Y(Z)&&Z!=null){let ae=Number(Z);Number.isNaN(ae)&&(ae=null),l(q,ae)}z.addEventListener("wheel",Ct,{passive:!1})}),bl(()=>{var y,W;const L=(y=n.value)==null?void 0:y.input;L==null||L.setAttribute("aria-valuenow",`${(W=m.currentValue)!=null?W:""}`)}),i({focus:I,blur:Te}),(y,W)=>(b(),D("div",{class:S([o(f).b(),o(f).m(o(g)),o(f).is("disabled",o(k)),o(f).is("without-controls",!y.controls),o(f).is("controls-right",o(h))]),onDragstart:x(()=>{},["prevent"])},[y.controls?G((b(),D("span",{key:0,role:"button","aria-label":o(a)("el.inputNumber.decrease"),class:S([o(f).e("decrease"),o(f).is("disabled",o(d))]),onKeydown:be(we,["enter"])},[A(y.$slots,"decrease-icon",{},()=>[s(o(ne),null,{default:p(()=>[o(h)?(b(),M(o(vn),{key:0})):(b(),M(o(Wl),{key:1}))]),_:1})])],42,["aria-label","onKeydown"])),[[o(rn),we]]):E("v-if",!0),y.controls?G((b(),D("span",{key:1,role:"button","aria-label":o(a)("el.inputNumber.increase"),class:S([o(f).e("increase"),o(f).is("disabled",o(c))]),onKeydown:be(me,["enter"])},[A(y.$slots,"increase-icon",{},()=>[s(o(ne),null,{default:p(()=>[o(h)?(b(),M(o(Bl),{key:0})):(b(),M(o(Il),{key:1}))]),_:1})])],42,["aria-label","onKeydown"])),[[o(rn),me]]):E("v-if",!0),s(o(bt),{id:y.id,ref_key:"input",ref:n,type:"number",step:y.step,"model-value":o(O),placeholder:y.placeholder,readonly:y.readonly,disabled:o(k),size:o(g),max:y.max,min:y.min,name:y.name,"aria-label":y.ariaLabel,"validate-event":!1,onKeydown:[be(x(me,["prevent"]),["up"]),be(x(we,["prevent"]),["down"])],onBlur:fe,onFocus:We,onInput:ue,onChange:_e},gl({_:2},[y.$slots.prefix?{name:"prefix",fn:p(()=>[A(y.$slots,"prefix")])}:void 0,y.$slots.suffix?{name:"suffix",fn:p(()=>[A(y.$slots,"suffix")])}:void 0]),1032,["id","step","model-value","placeholder","readonly","disabled","size","max","min","name","aria-label","onKeydown"])],42,["onDragstart"]))}});var No=re(Ro,[["__file","input-number.vue"]]);const $o=Xe(No);function Oo(){const e=hl(),i=T(0),l=11,t=C(()=>({minWidth:`${Math.max(i.value,l)}px`}));return Re(e,()=>{var f,n;i.value=(n=(f=e.value)==null?void 0:f.getBoundingClientRect().width)!=null?n:0}),{calculatorRef:e,calculatorWidth:i,inputStyle:t}}const kn=Symbol("ElSelectGroup"),yt=Symbol("ElSelect"),_t="ElOption",Lo=pe({value:{type:[String,Number,Boolean,Object],required:!0},label:{type:[String,Number]},created:Boolean,disabled:Boolean});function Mo(e,i){const l=lt(yt);l||Ot(_t,"usage: <el-select><el-option /></el-select/>");const t=lt(kn,{disabled:!1}),a=C(()=>c(Ne(l.props.modelValue),e.value)),f=C(()=>{var g;if(l.props.multiple){const k=Ne((g=l.props.modelValue)!=null?g:[]);return!a.value&&k.length>=l.props.multipleLimit&&l.props.multipleLimit>0}else return!1}),n=C(()=>e.label||(Ge(e.value)?"":e.value)),m=C(()=>e.value||e.label||""),v=C(()=>e.disabled||i.groupDisabled||f.value),d=It(),c=(g=[],k)=>{if(Ge(e.value)){const O=l.props.valueKey;return g&&g.some(R=>yl(xe(R,O))===xe(k,O))}else return g&&g.includes(k)},r=()=>{!e.disabled&&!t.disabled&&(l.states.hoveringIndex=l.optionsArray.indexOf(d.proxy))},h=g=>{const k=new RegExp(So(g),"i");i.visible=k.test(String(n.value))||e.created};return le(()=>n.value,()=>{!e.created&&!l.props.remote&&l.setSelected()}),le(()=>e.value,(g,k)=>{const{remote:O,valueKey:R}=l.props;if((O?g!==k:!nt(g,k))&&(l.onOptionDestroy(k,d.proxy),l.onOptionCreate(d.proxy)),!e.created&&!O){if(R&&Ge(g)&&Ge(k)&&g[R]===k[R])return;l.setSelected()}}),le(()=>t.disabled,()=>{i.groupDisabled=t.disabled},{immediate:!0}),{select:l,currentLabel:n,currentValue:m,itemSelected:a,isDisabled:v,hoverItem:r,updateOption:h}}const Ao=U({name:_t,componentName:_t,props:Lo,setup(e){const i=ie("select"),l=Nt(),t=C(()=>[i.be("dropdown","item"),i.is("disabled",o(m)),i.is("selected",o(n)),i.is("hovering",o(h))]),a=Pe({index:-1,groupDisabled:!1,visible:!0,hover:!1}),{currentLabel:f,itemSelected:n,isDisabled:m,select:v,hoverItem:d,updateOption:c}=Mo(e,a),{visible:r,hover:h}=ct(a),g=It().proxy;v.onOptionCreate(g),wl(()=>{const O=g.value,{selected:R}=v.states,N=R.some(F=>F.value===g.value);se(()=>{v.states.cachedOptions.get(O)===g&&!N&&v.states.cachedOptions.delete(O)}),v.onOptionDestroy(O,g)});function k(){m.value||v.handleOptionSelect(g)}return{ns:i,id:l,containerKls:t,currentLabel:f,itemSelected:n,isDisabled:m,select:v,visible:r,hover:h,states:a,hoverItem:d,updateOption:c,selectOptionClick:k}}});function Uo(e,i){return G((b(),D("li",{id:e.id,class:S(e.containerKls),role:"option","aria-disabled":e.isDisabled||void 0,"aria-selected":e.itemSelected,onMousemove:e.hoverItem,onClick:x(e.selectOptionClick,["stop"])},[A(e.$slots,"default",{},()=>[V("span",null,Q(e.currentLabel),1)])],42,["id","aria-disabled","aria-selected","onMousemove","onClick"])),[[ee,e.visible]])}var Ut=re(Ao,[["render",Uo],["__file","option.vue"]]);const Po=U({name:"ElSelectDropdown",componentName:"ElSelectDropdown",setup(){const e=lt(yt),i=ie("select"),l=C(()=>e.props.popperClass),t=C(()=>e.props.multiple),a=C(()=>e.props.fitInputWidth),f=T("");function n(){var m;f.value=`${(m=e.selectRef)==null?void 0:m.offsetWidth}px`}return Fe(()=>{n(),Re(e.selectRef,n)}),{ns:i,minWidth:f,popperClass:l,isMultiple:t,isFitInputWidth:a}}});function Fo(e,i,l,t,a,f){return b(),D("div",{class:S([e.ns.b("dropdown"),e.ns.is("multiple",e.isMultiple),e.popperClass]),style:he({[e.isFitInputWidth?"width":"minWidth"]:e.minWidth})},[e.$slots.header?(b(),D("div",{key:0,class:S(e.ns.be("dropdown","header"))},[A(e.$slots,"header")],2)):E("v-if",!0),A(e.$slots,"default"),e.$slots.footer?(b(),D("div",{key:1,class:S(e.ns.be("dropdown","footer"))},[A(e.$slots,"footer")],2)):E("v-if",!0)],6)}var Zo=re(Po,[["render",Fo],["__file","select-dropdown.vue"]]);const zo=(e,i)=>{const{t:l}=fn(),t=Nt(),a=ie("select"),f=ie("input"),n=Pe({inputValue:"",options:new Map,cachedOptions:new Map,optionValues:[],selected:[],selectionWidth:0,collapseItemWidth:0,selectedLabel:"",hoveringIndex:-1,previousQuery:null,inputHovering:!1,menuVisibleOnFocus:!1,isBeforeHide:!1}),m=T(),v=T(),d=T(),c=T(),r=T(),h=T(),g=T(),k=T(),O=T(),R=T(),N=T(),{isComposing:F,handleCompositionStart:me,handleCompositionUpdate:we,handleCompositionEnd:_}=Rl({afterComposition:u=>Yt(u)}),{wrapperRef:P,isFocused:ue,handleBlur:_e}=Nl(r,{beforeFocus(){return W.value},afterFocus(){e.automaticDropdown&&!I.value&&(I.value=!0,n.menuVisibleOnFocus=!0)},beforeBlur(u){var w,$;return((w=d.value)==null?void 0:w.isFocusInsideContent(u))||(($=c.value)==null?void 0:$.isFocusInsideContent(u))},afterBlur(){var u;I.value=!1,n.menuVisibleOnFocus=!1,e.validateEvent&&((u=fe==null?void 0:fe.validate)==null||u.call(fe,"blur").catch(w=>Qe()))}}),I=T(!1),Te=T(),{form:We,formItem:fe}=ft(),{inputId:je}=$t(e,{formItemContext:fe}),{valueOnClear:Ct,isEmptyValue:y}=$l(e),W=C(()=>e.disabled||(We==null?void 0:We.disabled)),L=C(()=>De(e.modelValue)?e.modelValue.length>0:!y(e.modelValue)),Z=C(()=>{var u;return(u=We==null?void 0:We.statusIcon)!=null?u:!1}),z=C(()=>e.clearable&&!W.value&&n.inputHovering&&L.value),ae=C(()=>e.remote&&e.filterable&&!e.remoteShowSuffix?"":e.suffixIcon),Ze=C(()=>a.is("reverse",!!(ae.value&&I.value))),Be=C(()=>(fe==null?void 0:fe.validateState)||""),j=C(()=>Be.value&&Ol[Be.value]),Mn=C(()=>e.remote?300:0),An=C(()=>e.remote&&!n.inputValue&&n.options.size===0),Un=C(()=>e.loading?e.loadingText||l("el.select.loading"):e.filterable&&n.inputValue&&n.options.size>0&&Ke.value===0?e.noMatchText||l("el.select.noMatch"):n.options.size===0?e.noDataText||l("el.select.noData"):null),Ke=C(()=>J.value.filter(u=>u.visible).length),J=C(()=>{const u=Array.from(n.options.values()),w=[];return n.optionValues.forEach($=>{const X=u.findIndex(te=>te.value===$);X>-1&&w.push(u[X])}),w.length>=u.length?w:u}),Pn=C(()=>Array.from(n.cachedOptions.values())),Fn=C(()=>{const u=J.value.filter(w=>!w.created).some(w=>w.currentLabel===n.inputValue);return e.filterable&&e.allowCreate&&n.inputValue!==""&&!u}),Ft=()=>{e.filterable&&$e(e.filterMethod)||e.filterable&&e.remote&&$e(e.remoteMethod)||J.value.forEach(u=>{var w;(w=u.updateOption)==null||w.call(u,n.inputValue)})},Zt=ot(),Zn=C(()=>["small"].includes(Zt.value)?"small":"default"),zn=C({get(){return I.value&&!An.value},set(u){I.value=u}}),Gn=C(()=>{if(e.multiple&&!Oe(e.modelValue))return Ne(e.modelValue).length===0&&!n.inputValue;const u=De(e.modelValue)?e.modelValue[0]:e.modelValue;return e.filterable||Oe(u)?!n.inputValue:!0}),xn=C(()=>{var u;const w=(u=e.placeholder)!=null?u:l("el.select.placeholder");return e.multiple||!L.value?w:n.selectedLabel}),Qn=C(()=>an?null:"mouseenter");le(()=>e.modelValue,(u,w)=>{e.multiple&&e.filterable&&!e.reserveKeyword&&(n.inputValue="",at("")),st(),!nt(u,w)&&e.validateEvent&&(fe==null||fe.validate("change").catch($=>Qe()))},{flush:"post",deep:!0}),le(()=>I.value,u=>{u?at(n.inputValue):(n.inputValue="",n.previousQuery=null,n.isBeforeHide=!0),i("visible-change",u)}),le(()=>n.options.entries(),()=>{Lt&&(st(),e.defaultFirstOption&&(e.filterable||e.remote)&&Ke.value&&zt())},{flush:"post"}),le([()=>n.hoveringIndex,J],([u])=>{Y(u)&&u>-1?Te.value=J.value[u]||{}:Te.value={},J.value.forEach(w=>{w.hover=Te.value===w})}),Cl(()=>{n.isBeforeHide||Ft()});const at=u=>{n.previousQuery===u||F.value||(n.previousQuery=u,e.filterable&&$e(e.filterMethod)?e.filterMethod(u):e.filterable&&e.remote&&$e(e.remoteMethod)&&e.remoteMethod(u),e.defaultFirstOption&&(e.filterable||e.remote)&&Ke.value?se(zt):se(Yn))},zt=()=>{const u=J.value.filter(te=>te.visible&&!te.disabled&&!te.states.groupDisabled),w=u.find(te=>te.created),$=u[0],X=J.value.map(te=>te.value);n.hoveringIndex=Kt(X,w||$)},st=()=>{if(e.multiple)n.selectedLabel="";else{const w=De(e.modelValue)?e.modelValue[0]:e.modelValue,$=Gt(w);n.selectedLabel=$.currentLabel,n.selected=[$];return}const u=[];Oe(e.modelValue)||Ne(e.modelValue).forEach(w=>{u.push(Gt(w))}),n.selected=u},Gt=u=>{let w;const $=Vl(u);for(let ze=n.cachedOptions.size-1;ze>=0;ze--){const Ie=Pn.value[ze];if($?xe(Ie.value,e.valueKey)===xe(u,e.valueKey):Ie.value===u){w={value:u,currentLabel:Ie.currentLabel,get isDisabled(){return Ie.isDisabled}};break}}if(w)return w;const X=$?u.label:u??"";return{value:u,currentLabel:X}},Yn=()=>{n.hoveringIndex=J.value.findIndex(u=>n.selected.some(w=>ut(w)===ut(u)))},Xn=()=>{n.selectionWidth=v.value.getBoundingClientRect().width},qn=()=>{n.collapseItemWidth=R.value.getBoundingClientRect().width},Vt=()=>{var u,w;(w=(u=d.value)==null?void 0:u.updatePopper)==null||w.call(u)},xt=()=>{var u,w;(w=(u=c.value)==null?void 0:u.updatePopper)==null||w.call(u)},Qt=()=>{n.inputValue.length>0&&!I.value&&(I.value=!0),at(n.inputValue)},Yt=u=>{if(n.inputValue=u.target.value,e.remote)Xt();else return Qt()},Xt=to(()=>{Qt()},Mn.value),He=u=>{nt(e.modelValue,u)||i(ye,u)},jn=u=>no(u,w=>{const $=n.cachedOptions.get(w);return $&&!$.disabled&&!$.states.groupDisabled}),Kn=u=>{if(e.multiple&&u.code!==bn.delete&&u.target.value.length<=0){const w=Ne(e.modelValue).slice(),$=jn(w);if($<0)return;const X=w[$];w.splice($,1),i(q,w),He(w),i("remove-tag",X)}},Hn=(u,w)=>{const $=n.selected.indexOf(w);if($>-1&&!W.value){const X=Ne(e.modelValue).slice();X.splice($,1),i(q,X),He(X),i("remove-tag",w.value)}u.stopPropagation(),rt()},qt=u=>{u.stopPropagation();const w=e.multiple?[]:Ct.value;if(e.multiple)for(const $ of n.selected)$.isDisabled&&w.push($.value);i(q,w),He(w),n.hoveringIndex=-1,I.value=!1,i("clear"),rt()},jt=u=>{var w;if(e.multiple){const $=Ne((w=e.modelValue)!=null?w:[]).slice(),X=Kt($,u);X>-1?$.splice(X,1):(e.multipleLimit<=0||$.length<e.multipleLimit)&&$.push(u.value),i(q,$),He($),u.created&&at(""),e.filterable&&!e.reserveKeyword&&(n.inputValue="")}else i(q,u.value),He(u.value),I.value=!1;rt(),!I.value&&se(()=>{it(u)})},Kt=(u,w)=>Oe(w)?-1:Ge(w.value)?u.findIndex($=>nt(xe($,e.valueKey),ut(w))):u.indexOf(w.value),it=u=>{var w,$,X,te,ze;const Ie=De(u)?u[0]:u;let dt=null;if(Ie!=null&&Ie.value){const Je=J.value.filter(vl=>vl.value===Ie.value);Je.length>0&&(dt=Je[0].$el)}if(d.value&&dt){const Je=(te=(X=($=(w=d.value)==null?void 0:w.popperRef)==null?void 0:$.contentRef)==null?void 0:X.querySelector)==null?void 0:te.call(X,`.${a.be("dropdown","wrap")}`);Je&&Ll(Je,dt)}(ze=N.value)==null||ze.handleScroll()},Jn=u=>{n.options.set(u.value,u),n.cachedOptions.set(u.value,u)},el=(u,w)=>{n.options.get(u)===w&&n.options.delete(u)},tl=C(()=>{var u,w;return(w=(u=d.value)==null?void 0:u.popperRef)==null?void 0:w.contentRef}),nl=()=>{n.isBeforeHide=!1,se(()=>{var u;(u=N.value)==null||u.update(),it(n.selected)})},rt=()=>{var u;(u=r.value)==null||u.focus()},ll=()=>{var u;if(I.value){I.value=!1,se(()=>{var w;return(w=r.value)==null?void 0:w.blur()});return}(u=r.value)==null||u.blur()},ol=u=>{qt(u)},al=u=>{if(I.value=!1,ue.value){const w=new FocusEvent("focus",u);se(()=>_e(w))}},sl=()=>{n.inputValue.length>0?n.inputValue="":I.value=!1},Ht=()=>{W.value||(an&&(n.inputHovering=!0),n.menuVisibleOnFocus?n.menuVisibleOnFocus=!1:I.value=!I.value)},il=()=>{if(!I.value)Ht();else{const u=J.value[n.hoveringIndex];u&&!u.isDisabled&&jt(u)}},ut=u=>Ge(u.value)?xe(u.value,e.valueKey):u.value,rl=C(()=>J.value.filter(u=>u.visible).every(u=>u.isDisabled)),ul=C(()=>e.multiple?e.collapseTags?n.selected.slice(0,e.maxCollapseTags):n.selected:[]),dl=C(()=>e.multiple?e.collapseTags?n.selected.slice(e.maxCollapseTags):[]:[]),Jt=u=>{if(!I.value){I.value=!0;return}if(!(n.options.size===0||Ke.value===0||F.value)&&!rl.value){u==="next"?(n.hoveringIndex++,n.hoveringIndex===n.options.size&&(n.hoveringIndex=0)):u==="prev"&&(n.hoveringIndex--,n.hoveringIndex<0&&(n.hoveringIndex=n.options.size-1));const w=J.value[n.hoveringIndex];(w.isDisabled||!w.visible)&&Jt(u),se(()=>it(Te.value))}},cl=()=>{if(!v.value)return 0;const u=window.getComputedStyle(v.value);return Number.parseFloat(u.gap||"6px")},pl=C(()=>{const u=cl();return{maxWidth:`${R.value&&e.maxCollapseTags===1?n.selectionWidth-n.collapseItemWidth-u:n.selectionWidth}px`}}),ml=C(()=>({maxWidth:`${n.selectionWidth}px`})),fl=u=>{i("popup-scroll",u)};return Re(v,Xn),Re(k,Vt),Re(P,Vt),Re(O,xt),Re(R,qn),Fe(()=>{st()}),{inputId:je,contentId:t,nsSelect:a,nsInput:f,states:n,isFocused:ue,expanded:I,optionsArray:J,hoverOption:Te,selectSize:Zt,filteredOptionsCount:Ke,updateTooltip:Vt,updateTagTooltip:xt,debouncedOnInputChange:Xt,onInput:Yt,deletePrevTag:Kn,deleteTag:Hn,deleteSelected:qt,handleOptionSelect:jt,scrollToOption:it,hasModelValue:L,shouldShowPlaceholder:Gn,currentPlaceholder:xn,mouseEnterEventName:Qn,needStatusIcon:Z,showClose:z,iconComponent:ae,iconReverse:Ze,validateState:Be,validateIcon:j,showNewOption:Fn,updateOptions:Ft,collapseTagSize:Zn,setSelected:st,selectDisabled:W,emptyText:Un,handleCompositionStart:me,handleCompositionUpdate:we,handleCompositionEnd:_,onOptionCreate:Jn,onOptionDestroy:el,handleMenuEnter:nl,focus:rt,blur:ll,handleClearClick:ol,handleClickOutside:al,handleEsc:sl,toggleMenu:Ht,selectOption:il,getValueKey:ut,navigateOptions:Jt,dropdownMenuVisible:zn,showTagList:ul,collapseTagList:dl,popupScroll:fl,tagStyle:pl,collapseTagStyle:ml,popperRef:tl,inputRef:r,tooltipRef:d,tagTooltipRef:c,prefixRef:h,suffixRef:g,selectRef:m,wrapperRef:P,selectionRef:v,scrollbarRef:N,menuRef:k,tagMenuRef:O,collapseItemRef:R}};var Go=U({name:"ElOptions",setup(e,{slots:i}){const l=lt(yt);let t=[];return()=>{var a,f;const n=(a=i.default)==null?void 0:a.call(i),m=[];function v(d){De(d)&&d.forEach(c=>{var r,h,g,k;const O=(r=(c==null?void 0:c.type)||{})==null?void 0:r.name;O==="ElOptionGroup"?v(!ke(c.children)&&!De(c.children)&&$e((h=c.children)==null?void 0:h.default)?(g=c.children)==null?void 0:g.default():c.children):O==="ElOption"?m.push((k=c.props)==null?void 0:k.value):De(c.children)&&v(c.children)})}return n.length&&v((f=n[0])==null?void 0:f.children),nt(m,t)||(t=m,l&&(l.states.optionValues=m)),n}}});const xo=pe({name:String,id:String,modelValue:{type:ge([Array,String,Number,Boolean,Object]),default:void 0},autocomplete:{type:String,default:"off"},automaticDropdown:Boolean,size:pt,effect:{type:ge(String),default:"light"},disabled:Boolean,clearable:Boolean,filterable:Boolean,allowCreate:Boolean,loading:Boolean,popperClass:{type:String,default:""},popperOptions:{type:ge(Object),default:()=>({})},remote:Boolean,loadingText:String,noMatchText:String,noDataText:String,remoteMethod:Function,filterMethod:Function,multiple:Boolean,multipleLimit:{type:Number,default:0},placeholder:{type:String},defaultFirstOption:Boolean,reserveKeyword:{type:Boolean,default:!0},valueKey:{type:String,default:"value"},collapseTags:Boolean,collapseTagsTooltip:Boolean,maxCollapseTags:{type:Number,default:1},teleported:un.teleported,persistent:{type:Boolean,default:!0},clearIcon:{type:Ae,default:Al},fitInputWidth:Boolean,suffixIcon:{type:Ae,default:vn},tagType:{...kt.type,default:"info"},tagEffect:{...kt.effect,default:"light"},validateEvent:{type:Boolean,default:!0},remoteShowSuffix:Boolean,showArrow:{type:Boolean,default:!0},offset:{type:Number,default:12},placement:{type:ge(String),values:ql,default:"bottom-start"},fallbackPlacements:{type:ge(Array),default:["bottom-start","top-start","right","left"]},tabindex:{type:[String,Number],default:0},appendTo:un.appendTo,...Ml,...mt(["ariaLabel"])});jl.scroll;const dn="ElSelect",Qo=U({name:dn,componentName:dn,components:{ElSelectMenu:Zo,ElOption:Ut,ElOptions:Go,ElTag:Wo,ElScrollbar:Jl,ElTooltip:Hl,ElIcon:ne},directives:{ClickOutside:Kl},props:xo,emits:[q,ye,"remove-tag","clear","visible-change","focus","blur","popup-scroll"],setup(e,{emit:i}){const l=C(()=>{const{modelValue:v,multiple:d}=e,c=d?[]:void 0;return De(v)?d?v:c:d?c:v}),t=Pe({...ct(e),modelValue:l}),a=zo(t,i),{calculatorRef:f,inputStyle:n}=Oo();Bt(yt,Pe({props:t,states:a.states,selectRef:a.selectRef,optionsArray:a.optionsArray,setSelected:a.setSelected,handleOptionSelect:a.handleOptionSelect,onOptionCreate:a.onOptionCreate,onOptionDestroy:a.onOptionDestroy}));const m=C(()=>e.multiple?a.states.selected.map(v=>v.currentLabel):a.states.selectedLabel);return{...a,modelValue:l,selectedLabel:m,calculatorRef:f,inputStyle:n}}});function Yo(e,i){const l=Ee("el-tag"),t=Ee("el-tooltip"),a=Ee("el-icon"),f=Ee("el-option"),n=Ee("el-options"),m=Ee("el-scrollbar"),v=Ee("el-select-menu"),d=Sl("click-outside");return G((b(),D("div",{ref:"selectRef",class:S([e.nsSelect.b(),e.nsSelect.m(e.selectSize)]),[kl(e.mouseEnterEventName)]:c=>e.states.inputHovering=!0,onMouseleave:c=>e.states.inputHovering=!1},[s(t,{ref:"tooltipRef",visible:e.dropdownMenuVisible,placement:e.placement,teleported:e.teleported,"popper-class":[e.nsSelect.e("popper"),e.popperClass],"popper-options":e.popperOptions,"fallback-placements":e.fallbackPlacements,effect:e.effect,pure:"",trigger:"click",transition:`${e.nsSelect.namespace.value}-zoom-in-top`,"stop-popper-mouse-event":!1,"gpu-acceleration":!1,persistent:e.persistent,"append-to":e.appendTo,"show-arrow":e.showArrow,offset:e.offset,onBeforeShow:e.handleMenuEnter,onHide:c=>e.states.isBeforeHide=!1},{default:p(()=>{var c;return[V("div",{ref:"wrapperRef",class:S([e.nsSelect.e("wrapper"),e.nsSelect.is("focused",e.isFocused),e.nsSelect.is("hovering",e.states.inputHovering),e.nsSelect.is("filterable",e.filterable),e.nsSelect.is("disabled",e.selectDisabled)]),onClick:x(e.toggleMenu,["prevent"])},[e.$slots.prefix?(b(),D("div",{key:0,ref:"prefixRef",class:S(e.nsSelect.e("prefix"))},[A(e.$slots,"prefix")],2)):E("v-if",!0),V("div",{ref:"selectionRef",class:S([e.nsSelect.e("selection"),e.nsSelect.is("near",e.multiple&&!e.$slots.prefix&&!!e.states.selected.length)])},[e.multiple?A(e.$slots,"tag",{key:0},()=>[(b(!0),D(St,null,en(e.showTagList,r=>(b(),D("div",{key:e.getValueKey(r),class:S(e.nsSelect.e("selected-item"))},[s(l,{closable:!e.selectDisabled&&!r.isDisabled,size:e.collapseTagSize,type:e.tagType,effect:e.tagEffect,"disable-transitions":"",style:he(e.tagStyle),onClose:h=>e.deleteTag(h,r)},{default:p(()=>[V("span",{class:S(e.nsSelect.e("tags-text"))},[A(e.$slots,"label",{label:r.currentLabel,value:r.value},()=>[B(Q(r.currentLabel),1)])],2)]),_:2},1032,["closable","size","type","effect","style","onClose"])],2))),128)),e.collapseTags&&e.states.selected.length>e.maxCollapseTags?(b(),M(t,{key:0,ref:"tagTooltipRef",disabled:e.dropdownMenuVisible||!e.collapseTagsTooltip,"fallback-placements":["bottom","top","right","left"],effect:e.effect,placement:"bottom",teleported:e.teleported},{default:p(()=>[V("div",{ref:"collapseItemRef",class:S(e.nsSelect.e("selected-item"))},[s(l,{closable:!1,size:e.collapseTagSize,type:e.tagType,effect:e.tagEffect,"disable-transitions":"",style:he(e.collapseTagStyle)},{default:p(()=>[V("span",{class:S(e.nsSelect.e("tags-text"))}," + "+Q(e.states.selected.length-e.maxCollapseTags),3)]),_:1},8,["size","type","effect","style"])],2)]),content:p(()=>[V("div",{ref:"tagMenuRef",class:S(e.nsSelect.e("selection"))},[(b(!0),D(St,null,en(e.collapseTagList,r=>(b(),D("div",{key:e.getValueKey(r),class:S(e.nsSelect.e("selected-item"))},[s(l,{class:"in-tooltip",closable:!e.selectDisabled&&!r.isDisabled,size:e.collapseTagSize,type:e.tagType,effect:e.tagEffect,"disable-transitions":"",onClose:h=>e.deleteTag(h,r)},{default:p(()=>[V("span",{class:S(e.nsSelect.e("tags-text"))},[A(e.$slots,"label",{label:r.currentLabel,value:r.value},()=>[B(Q(r.currentLabel),1)])],2)]),_:2},1032,["closable","size","type","effect","onClose"])],2))),128))],2)]),_:3},8,["disabled","effect","teleported"])):E("v-if",!0)]):E("v-if",!0),V("div",{class:S([e.nsSelect.e("selected-item"),e.nsSelect.e("input-wrapper"),e.nsSelect.is("hidden",!e.filterable)])},[G(V("input",{id:e.inputId,ref:"inputRef","onUpdate:modelValue":r=>e.states.inputValue=r,type:"text",name:e.name,class:S([e.nsSelect.e("input"),e.nsSelect.is(e.selectSize)]),disabled:e.selectDisabled,autocomplete:e.autocomplete,style:he(e.inputStyle),tabindex:e.tabindex,role:"combobox",readonly:!e.filterable,spellcheck:"false","aria-activedescendant":((c=e.hoverOption)==null?void 0:c.id)||"","aria-controls":e.contentId,"aria-expanded":e.dropdownMenuVisible,"aria-label":e.ariaLabel,"aria-autocomplete":"none","aria-haspopup":"listbox",onKeydown:[be(x(r=>e.navigateOptions("next"),["stop","prevent"]),["down"]),be(x(r=>e.navigateOptions("prev"),["stop","prevent"]),["up"]),be(x(e.handleEsc,["stop","prevent"]),["esc"]),be(x(e.selectOption,["stop","prevent"]),["enter"]),be(x(e.deletePrevTag,["stop"]),["delete"])],onCompositionstart:e.handleCompositionStart,onCompositionupdate:e.handleCompositionUpdate,onCompositionend:e.handleCompositionEnd,onInput:e.onInput,onClick:x(e.toggleMenu,["stop"])},null,46,["id","onUpdate:modelValue","name","disabled","autocomplete","tabindex","readonly","aria-activedescendant","aria-controls","aria-expanded","aria-label","onKeydown","onCompositionstart","onCompositionupdate","onCompositionend","onInput","onClick"]),[[Dl,e.states.inputValue]]),e.filterable?(b(),D("span",{key:0,ref:"calculatorRef","aria-hidden":"true",class:S(e.nsSelect.e("input-calculator")),textContent:Q(e.states.inputValue)},null,10,["textContent"])):E("v-if",!0)],2),e.shouldShowPlaceholder?(b(),D("div",{key:1,class:S([e.nsSelect.e("selected-item"),e.nsSelect.e("placeholder"),e.nsSelect.is("transparent",!e.hasModelValue||e.expanded&&!e.states.inputValue)])},[e.hasModelValue?A(e.$slots,"label",{key:0,label:e.currentPlaceholder,value:e.modelValue},()=>[V("span",null,Q(e.currentPlaceholder),1)]):(b(),D("span",{key:1},Q(e.currentPlaceholder),1))],2)):E("v-if",!0)],2),V("div",{ref:"suffixRef",class:S(e.nsSelect.e("suffix"))},[e.iconComponent&&!e.showClose?(b(),M(a,{key:0,class:S([e.nsSelect.e("caret"),e.nsSelect.e("icon"),e.iconReverse])},{default:p(()=>[(b(),M(Se(e.iconComponent)))]),_:1},8,["class"])):E("v-if",!0),e.showClose&&e.clearIcon?(b(),M(a,{key:1,class:S([e.nsSelect.e("caret"),e.nsSelect.e("icon"),e.nsSelect.e("clear")]),onClick:e.handleClearClick},{default:p(()=>[(b(),M(Se(e.clearIcon)))]),_:1},8,["class","onClick"])):E("v-if",!0),e.validateState&&e.validateIcon&&e.needStatusIcon?(b(),M(a,{key:2,class:S([e.nsInput.e("icon"),e.nsInput.e("validateIcon"),e.nsInput.is("loading",e.validateState==="validating")])},{default:p(()=>[(b(),M(Se(e.validateIcon)))]),_:1},8,["class"])):E("v-if",!0)],2)],10,["onClick"])]}),content:p(()=>[s(v,{ref:"menuRef"},{default:p(()=>[e.$slots.header?(b(),D("div",{key:0,class:S(e.nsSelect.be("dropdown","header")),onClick:x(()=>{},["stop"])},[A(e.$slots,"header")],10,["onClick"])):E("v-if",!0),G(s(m,{id:e.contentId,ref:"scrollbarRef",tag:"ul","wrap-class":e.nsSelect.be("dropdown","wrap"),"view-class":e.nsSelect.be("dropdown","list"),class:S([e.nsSelect.is("empty",e.filteredOptionsCount===0)]),role:"listbox","aria-label":e.ariaLabel,"aria-orientation":"vertical",onScroll:e.popupScroll},{default:p(()=>[e.showNewOption?(b(),M(f,{key:0,value:e.states.inputValue,created:!0},null,8,["value"])):E("v-if",!0),s(n,null,{default:p(()=>[A(e.$slots,"default")]),_:3})]),_:3},8,["id","wrap-class","view-class","class","aria-label","onScroll"]),[[ee,e.states.options.size>0&&!e.loading]]),e.$slots.loading&&e.loading?(b(),D("div",{key:1,class:S(e.nsSelect.be("dropdown","loading"))},[A(e.$slots,"loading")],2)):e.loading||e.filteredOptionsCount===0?(b(),D("div",{key:2,class:S(e.nsSelect.be("dropdown","empty"))},[A(e.$slots,"empty",{},()=>[V("span",null,Q(e.emptyText),1)])],2)):E("v-if",!0),e.$slots.footer?(b(),D("div",{key:3,class:S(e.nsSelect.be("dropdown","footer")),onClick:x(()=>{},["stop"])},[A(e.$slots,"footer")],10,["onClick"])):E("v-if",!0)]),_:3},512)]),_:3},8,["visible","placement","teleported","popper-class","popper-options","fallback-placements","effect","transition","persistent","append-to","show-arrow","offset","onBeforeShow","onHide"])],16,["onMouseleave"])),[[d,e.handleClickOutside,e.popperRef]])}var Xo=re(Qo,[["render",Yo],["__file","select.vue"]]);const qo=U({name:"ElOptionGroup",componentName:"ElOptionGroup",props:{label:String,disabled:Boolean},setup(e){const i=ie("select"),l=T(),t=It(),a=T([]);Bt(kn,Pe({...ct(e)}));const f=C(()=>a.value.some(d=>d.visible===!0)),n=d=>{var c;return d.type.name==="ElOption"&&!!((c=d.component)!=null&&c.proxy)},m=d=>{const c=Ne(d),r=[];return c.forEach(h=>{var g;Et(h)&&(n(h)?r.push(h.component.proxy):De(h.children)&&h.children.length?r.push(...m(h.children)):(g=h.component)!=null&&g.subTree&&r.push(...m(h.component.subTree)))}),r},v=()=>{a.value=m(t.subTree)};return Fe(()=>{v()}),Ul(l,v,{attributes:!0,subtree:!0,childList:!0}),{groupRef:l,visible:f,ns:i}}});function jo(e,i,l,t,a,f){return G((b(),D("ul",{ref:"groupRef",class:S(e.ns.be("group","wrap"))},[V("li",{class:S(e.ns.be("group","title"))},Q(e.label),3),V("li",null,[V("ul",{class:S(e.ns.b("group"))},[A(e.$slots,"default")],2)])],2)),[[ee,e.visible]])}var _n=re(qo,[["render",jo],["__file","option-group.vue"]]);const Tn=Xe(Xo,{Option:Ut,OptionGroup:_n}),Wn=vt(Ut);vt(_n);const Ko=e=>["",...mn].includes(e),Ho=pe({modelValue:{type:[Boolean,String,Number],default:!1},disabled:Boolean,loading:Boolean,size:{type:String,validator:Ko},width:{type:[String,Number],default:""},inlinePrompt:Boolean,inactiveActionIcon:{type:Ae},activeActionIcon:{type:Ae},activeIcon:{type:Ae},inactiveIcon:{type:Ae},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},beforeChange:{type:ge(Function)},id:String,tabindex:{type:[String,Number]},...mt(["ariaLabel"])}),Jo={[q]:e=>Me(e)||ke(e)||Y(e),[ye]:e=>Me(e)||ke(e)||Y(e),[Ue]:e=>Me(e)||ke(e)||Y(e)},Bn="ElSwitch",ea=U({name:Bn}),ta=U({...ea,props:Ho,emits:Jo,setup(e,{expose:i,emit:l}){const t=e,{formItem:a}=ft(),f=ot(),n=ie("switch"),{inputId:m}=$t(t,{formItemContext:a}),v=Rt(C(()=>t.loading)),d=T(t.modelValue!==!1),c=T(),r=T(),h=C(()=>[n.b(),n.m(f.value),n.is("disabled",v.value),n.is("checked",N.value)]),g=C(()=>[n.e("label"),n.em("label","left"),n.is("active",!N.value)]),k=C(()=>[n.e("label"),n.em("label","right"),n.is("active",N.value)]),O=C(()=>({width:Dt(t.width)}));le(()=>t.modelValue,()=>{d.value=!0});const R=C(()=>d.value?t.modelValue:!1),N=C(()=>R.value===t.activeValue);[t.activeValue,t.inactiveValue].includes(R.value)||(l(q,t.inactiveValue),l(ye,t.inactiveValue),l(Ue,t.inactiveValue)),le(N,_=>{var P;c.value.checked=_,t.validateEvent&&((P=a==null?void 0:a.validate)==null||P.call(a,"change").catch(ue=>Qe()))});const F=()=>{const _=N.value?t.inactiveValue:t.activeValue;l(q,_),l(ye,_),l(Ue,_),se(()=>{c.value.checked=N.value})},me=()=>{if(v.value)return;const{beforeChange:_}=t;if(!_){F();return}const P=_();[tn(P),Me(P)].includes(!0)||Ot(Bn,"beforeChange must return type `Promise<boolean>` or `boolean`"),tn(P)?P.then(_e=>{_e&&F()}).catch(_e=>{}):P&&F()},we=()=>{var _,P;(P=(_=c.value)==null?void 0:_.focus)==null||P.call(_)};return Fe(()=>{c.value.checked=N.value}),i({focus:we,checked:N}),(_,P)=>(b(),D("div",{class:S(o(h)),onClick:x(me,["prevent"])},[V("input",{id:o(m),ref_key:"input",ref:c,class:S(o(n).e("input")),type:"checkbox",role:"switch","aria-checked":o(N),"aria-disabled":o(v),"aria-label":_.ariaLabel,name:_.name,"true-value":_.activeValue,"false-value":_.inactiveValue,disabled:o(v),tabindex:_.tabindex,onChange:F,onKeydown:be(me,["enter"])},null,42,["id","aria-checked","aria-disabled","aria-label","name","true-value","false-value","disabled","tabindex","onKeydown"]),!_.inlinePrompt&&(_.inactiveIcon||_.inactiveText)?(b(),D("span",{key:0,class:S(o(g))},[_.inactiveIcon?(b(),M(o(ne),{key:0},{default:p(()=>[(b(),M(Se(_.inactiveIcon)))]),_:1})):E("v-if",!0),!_.inactiveIcon&&_.inactiveText?(b(),D("span",{key:1,"aria-hidden":o(N)},Q(_.inactiveText),9,["aria-hidden"])):E("v-if",!0)],2)):E("v-if",!0),V("span",{ref_key:"core",ref:r,class:S(o(n).e("core")),style:he(o(O))},[_.inlinePrompt?(b(),D("div",{key:0,class:S(o(n).e("inner"))},[_.activeIcon||_.inactiveIcon?(b(),M(o(ne),{key:0,class:S(o(n).is("icon"))},{default:p(()=>[(b(),M(Se(o(N)?_.activeIcon:_.inactiveIcon)))]),_:1},8,["class"])):_.activeText||_.inactiveText?(b(),D("span",{key:1,class:S(o(n).is("text")),"aria-hidden":!o(N)},Q(o(N)?_.activeText:_.inactiveText),11,["aria-hidden"])):E("v-if",!0)],2)):E("v-if",!0),V("div",{class:S(o(n).e("action"))},[_.loading?(b(),M(o(ne),{key:0,class:S(o(n).is("loading"))},{default:p(()=>[s(o(Pl))]),_:1},8,["class"])):o(N)?A(_.$slots,"active-action",{key:1},()=>[_.activeActionIcon?(b(),M(o(ne),{key:0},{default:p(()=>[(b(),M(Se(_.activeActionIcon)))]),_:1})):E("v-if",!0)]):o(N)?E("v-if",!0):A(_.$slots,"inactive-action",{key:2},()=>[_.inactiveActionIcon?(b(),M(o(ne),{key:0},{default:p(()=>[(b(),M(Se(_.inactiveActionIcon)))]),_:1})):E("v-if",!0)])],2)],6),!_.inlinePrompt&&(_.activeIcon||_.activeText)?(b(),D("span",{key:1,class:S(o(k))},[_.activeIcon?(b(),M(o(ne),{key:0},{default:p(()=>[(b(),M(Se(_.activeIcon)))]),_:1})):E("v-if",!0),!_.activeIcon&&_.activeText?(b(),D("span",{key:1,"aria-hidden":!o(N)},Q(_.activeText),9,["aria-hidden"])):E("v-if",!0)],2)):E("v-if",!0)],10,["onClick"]))}});var na=re(ta,[["__file","switch.vue"]]);const la=Xe(na),In=["success","info","warning","error"],K=Fl({customClass:"",dangerouslyUseHTMLString:!1,duration:3e3,icon:void 0,id:"",message:"",onClose:void 0,showClose:!1,type:"info",plain:!1,offset:16,zIndex:0,grouping:!1,repeatNum:1,appendTo:Lt?document.body:void 0}),oa=pe({customClass:{type:String,default:K.customClass},dangerouslyUseHTMLString:{type:Boolean,default:K.dangerouslyUseHTMLString},duration:{type:Number,default:K.duration},icon:{type:Ae,default:K.icon},id:{type:String,default:K.id},message:{type:ge([String,Object,Function]),default:K.message},onClose:{type:ge(Function),default:K.onClose},showClose:{type:Boolean,default:K.showClose},type:{type:String,values:In,default:K.type},plain:{type:Boolean,default:K.plain},offset:{type:Number,default:K.offset},zIndex:{type:Number,default:K.zIndex},grouping:{type:Boolean,default:K.grouping},repeatNum:{type:Number,default:K.repeatNum}}),aa={destroy:()=>!0},de=_l([]),sa=e=>{const i=de.findIndex(a=>a.id===e),l=de[i];let t;return i>0&&(t=de[i-1]),{current:l,prev:t}},ia=e=>{const{prev:i}=sa(e);return i?i.vm.exposed.bottom.value:0},ra=(e,i)=>de.findIndex(t=>t.id===e)>0?16:i,ua=U({name:"ElMessage"}),da=U({...ua,props:oa,emits:aa,setup(e,{expose:i,emit:l}){const t=e,{Close:a}=Gl,f=T(!1),{ns:n,zIndex:m}=Zl("message"),{currentZIndex:v,nextZIndex:d}=m,c=T(),r=T(!1),h=T(0);let g;const k=C(()=>t.type?t.type==="error"?"danger":t.type:"info"),O=C(()=>{const I=t.type;return{[n.bm("icon",I)]:I&&sn[I]}}),R=C(()=>t.icon||sn[t.type]||""),N=C(()=>ia(t.id)),F=C(()=>ra(t.id,t.offset)+N.value),me=C(()=>h.value+F.value),we=C(()=>({top:`${F.value}px`,zIndex:v.value}));function _(){t.duration!==0&&({stop:g}=xl(()=>{ue()},t.duration))}function P(){g==null||g()}function ue(){r.value=!1,se(()=>{var I;f.value||((I=t.onClose)==null||I.call(t),l("destroy"))})}function _e({code:I}){I===bn.esc&&ue()}return Fe(()=>{_(),d(),r.value=!0}),le(()=>t.repeatNum,()=>{P(),_()}),zl(document,"keydown",_e),Re(c,()=>{h.value=c.value.getBoundingClientRect().height}),i({visible:r,bottom:me,close:ue}),(I,Te)=>(b(),M(Wt,{name:o(n).b("fade"),onBeforeEnter:We=>f.value=!0,onBeforeLeave:I.onClose,onAfterLeave:We=>I.$emit("destroy"),persisted:""},{default:p(()=>[G(V("div",{id:I.id,ref_key:"messageRef",ref:c,class:S([o(n).b(),{[o(n).m(I.type)]:I.type},o(n).is("closable",I.showClose),o(n).is("plain",I.plain),I.customClass]),style:he(o(we)),role:"alert",onMouseenter:P,onMouseleave:_},[I.repeatNum>1?(b(),M(o(ro),{key:0,value:I.repeatNum,type:o(k),class:S(o(n).e("badge"))},null,8,["value","type","class"])):E("v-if",!0),o(R)?(b(),M(o(ne),{key:1,class:S([o(n).e("icon"),o(O)])},{default:p(()=>[(b(),M(Se(o(R))))]),_:1},8,["class"])):E("v-if",!0),A(I.$slots,"default",{},()=>[I.dangerouslyUseHTMLString?(b(),D(St,{key:1},[E(" Caution here, message could've been compromised, never use user's input as message "),V("p",{class:S(o(n).e("content")),innerHTML:I.message},null,10,["innerHTML"])],2112)):(b(),D("p",{key:0,class:S(o(n).e("content"))},Q(I.message),3))]),I.showClose?(b(),M(o(ne),{key:2,class:S(o(n).e("closeBtn")),onClick:x(ue,["stop"])},{default:p(()=>[s(o(a))]),_:1},8,["class","onClick"])):E("v-if",!0)],46,["id"]),[[ee,r.value]])]),_:3},8,["name","onBeforeEnter","onBeforeLeave","onAfterLeave"]))}});var ca=re(da,[["__file","message.vue"]]);let pa=1;const En=e=>{const i=!e||ke(e)||Et(e)||$e(e)?{message:e}:e,l={...K,...i};if(!l.appendTo)l.appendTo=document.body;else if(ke(l.appendTo)){let t=document.querySelector(l.appendTo);Ql(t)||(t=document.body),l.appendTo=t}return Me(ve.grouping)&&!l.grouping&&(l.grouping=ve.grouping),Y(ve.duration)&&l.duration===3e3&&(l.duration=ve.duration),Y(ve.offset)&&l.offset===16&&(l.offset=ve.offset),Me(ve.showClose)&&!l.showClose&&(l.showClose=ve.showClose),l},ma=e=>{const i=de.indexOf(e);if(i===-1)return;de.splice(i,1);const{handler:l}=e;l.close()},fa=({appendTo:e,...i},l)=>{const t=`message_${pa++}`,a=i.onClose,f=document.createElement("div"),n={...i,id:t,onClose:()=>{a==null||a(),ma(c)},onDestroy:()=>{nn(null,f)}},m=s(ca,n,$e(n.message)||Et(n.message)?{default:$e(n.message)?n.message:()=>n.message}:null);m.appContext=l||Ye._context,nn(m,f),e.appendChild(f.firstElementChild);const v=m.component,c={id:t,vnode:m,vm:v,handler:{close:()=>{v.exposed.close()}},props:m.component.props};return c},Ye=(e={},i)=>{if(!Lt)return{close:()=>{}};const l=En(e);if(l.grouping&&de.length){const a=de.find(({vnode:f})=>{var n;return((n=f.props)==null?void 0:n.message)===l.message});if(a)return a.props.repeatNum+=1,a.props.type=l.type,a.handler}if(Y(ve.max)&&de.length>=ve.max)return{close:()=>{}};const t=fa(l,i);return de.push(t),t.handler};In.forEach(e=>{Ye[e]=(i={},l)=>{const t=En(i);return Ye({...t,type:e},l)}});function va(e){const i=[...de];for(const l of i)(!e||e===l.props.type)&&l.handler.close()}Ye.closeAll=va;Ye._context=null;const H=Yl(Ye,"$message"),ba=`<template>
  <div>
    <h4>多弹窗管理 - 命令式</h4>
    <div class="button-group">
      <el-button @click="openUserDialog" type="primary">用户管理</el-button>
      <el-button @click="openOrderDialog" type="warning">订单管理</el-button>
      <el-button @click="openProductDialog" type="success">商品管理</el-button>
      <el-button @click="openSettingsDialog" type="info">系统设置</el-button>
    </div>
  </div>
</template>

<script setup lang="tsx">
import { useDialog } from "@vue-cmd/element-plus";
import { ElMessage } from "element-plus";
import ManagerComponents from "./shared/ManagerComponents.vue";

const CommandDialog = useDialog();

// 弹窗打开方法
const openUserDialog = () => {
  CommandDialog(<ManagerComponents type="user" showButtons={false} />, {
    title: "用户管理",
    width: "600px",
  });
};

const openOrderDialog = () => {
  CommandDialog(<ManagerComponents type="order" showButtons={false} />, {
    title: "订单管理",
    width: "700px",
  });
};

const openProductDialog = () => {
  CommandDialog(<ManagerComponents type="product" showButtons={false} />, {
    title: "商品管理",
    width: "650px",
  });
};

const openSettingsDialog = async () => {
  try {
    const result = await CommandDialog(
      <ManagerComponents type="settings" showButtons={true} />,
      {
        title: "系统设置",
        width: "500px",
      },
    ).promise;

    console.log("保存的设置:", result);
  } catch {
    // 用户取消了设置
  }
};
<\/script>

<style scoped>
h4 {
  margin-bottom: 16px;
  color: #67c23a;
}

.button-group {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.DialogContent {
  padding: 20px 0;
}

.DialogContent p {
  margin-bottom: 16px;
  font-weight: bold;
}
</style>
`,Pt=[{id:1,name:"张三",email:"zhangsan@example.com",role:"admin"},{id:2,name:"李四",email:"lisi@example.com",role:"user"},{id:3,name:"王五",email:"wangwu@example.com",role:"user"}],ga=[{id:"ORD001",amount:"¥299",status:"已完成"},{id:"ORD002",amount:"¥599",status:"进行中"}],ha=[{name:"商品A",price:"¥99",stock:100},{name:"商品B",price:"¥199",stock:50}],Rn={name:"张三",email:"zhangsan@example.com"},ya={systemName:"管理系统",timeout:30,enableLog:!0},wa={key:0,class:"DialogContent"},Ca={key:1,class:"DialogContent"},Va={key:2,class:"DialogContent"},Sa={key:3,class:"DialogContent"},Da={key:0,style:{"text-align":"right","margin-top":"20px"}},ka={__name:"ManagerComponents",props:{type:{type:String,required:!0,validator:e=>["user","order","product","settings"].includes(e)},showButtons:{type:Boolean,default:!0}},emits:["save","cancel"],setup(e,{emit:i}){const l=i,t=qe(!1),a=T({...ya}),f=()=>{try{return t.promise instanceof Promise}catch{return!1}},n=()=>{H.success("设置已保存"),f()?t.destroyWithResolve(a.value):l("save",a.value)},m=()=>{f()?t.destroyWithReject():l("cancel")};return(v,d)=>{const c=gn,r=oe,h=hn,g=bt,k=Mt,O=$o,R=la,N=At;return b(),D("div",null,[e.type==="user"?(b(),D("div",wa,[d[4]||(d[4]=V("p",null,"用户管理功能",-1)),s(h,{data:o(Pt),size:"small"},{default:p(()=>[s(c,{prop:"name",label:"姓名"}),s(c,{prop:"email",label:"邮箱"}),s(c,{label:"操作"},{default:p(()=>[s(r,{size:"small"},{default:p(()=>d[3]||(d[3]=[B("编辑")])),_:1,__:[3]})]),_:1})]),_:1},8,["data"])])):E("",!0),e.type==="order"?(b(),D("div",Ca,[d[6]||(d[6]=V("p",null,"订单管理功能",-1)),s(h,{data:o(ga),size:"small"},{default:p(()=>[s(c,{prop:"id",label:"订单号"}),s(c,{prop:"amount",label:"金额"}),s(c,{prop:"status",label:"状态"}),s(c,{label:"操作"},{default:p(()=>[s(r,{size:"small"},{default:p(()=>d[5]||(d[5]=[B("查看")])),_:1,__:[5]})]),_:1})]),_:1},8,["data"])])):E("",!0),e.type==="product"?(b(),D("div",Va,[d[8]||(d[8]=V("p",null,"商品管理功能",-1)),s(h,{data:o(ha),size:"small"},{default:p(()=>[s(c,{prop:"name",label:"商品名"}),s(c,{prop:"price",label:"价格"}),s(c,{prop:"stock",label:"库存"}),s(c,{label:"操作"},{default:p(()=>[s(r,{size:"small"},{default:p(()=>d[7]||(d[7]=[B("编辑")])),_:1,__:[7]})]),_:1})]),_:1},8,["data"])])):E("",!0),e.type==="settings"?(b(),D("div",Sa,[s(N,{model:a.value,"label-width":"100px"},{default:p(()=>[s(k,{label:"系统名称"},{default:p(()=>[s(g,{modelValue:a.value.systemName,"onUpdate:modelValue":d[0]||(d[0]=F=>a.value.systemName=F)},null,8,["modelValue"])]),_:1}),s(k,{label:"超时时间"},{default:p(()=>[s(O,{modelValue:a.value.timeout,"onUpdate:modelValue":d[1]||(d[1]=F=>a.value.timeout=F)},null,8,["modelValue"])]),_:1}),s(k,{label:"启用日志"},{default:p(()=>[s(R,{modelValue:a.value.enableLog,"onUpdate:modelValue":d[2]||(d[2]=F=>a.value.enableLog=F)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),e.showButtons?(b(),D("div",Da,[s(r,{onClick:m},{default:p(()=>d[9]||(d[9]=[B("取消")])),_:1,__:[9]}),s(r,{type:"primary",onClick:n},{default:p(()=>d[10]||(d[10]=[B("保存")])),_:1,__:[10]})])):E("",!0)])):E("",!0)])}}},Le=ce(ka,[["__scopeId","data-v-dd761715"]]),_a={class:"button-group"},Ta=U({__name:"comparison-command-multiple",setup(e){const i=gt(),l=()=>{i(s(Le,{type:"user",showButtons:!1},null),{title:"用户管理",width:"600px"})},t=()=>{i(s(Le,{type:"order",showButtons:!1},null),{title:"订单管理",width:"700px"})},a=()=>{i(s(Le,{type:"product",showButtons:!1},null),{title:"商品管理",width:"650px"})},f=async()=>{try{const n=await i(s(Le,{type:"settings",showButtons:!0},null),{title:"系统设置",width:"500px"}).promise;console.log("保存的设置:",n)}catch{}};return(n,m)=>{const v=oe;return b(),D("div",null,[m[4]||(m[4]=V("h4",null,"多弹窗管理 - 命令式",-1)),V("div",_a,[s(v,{onClick:l,type:"primary"},{default:p(()=>m[0]||(m[0]=[B("用户管理")])),_:1,__:[0]}),s(v,{onClick:t,type:"warning"},{default:p(()=>m[1]||(m[1]=[B("订单管理")])),_:1,__:[1]}),s(v,{onClick:a,type:"success"},{default:p(()=>m[2]||(m[2]=[B("商品管理")])),_:1,__:[2]}),s(v,{onClick:f,type:"info"},{default:p(()=>m[3]||(m[3]=[B("系统设置")])),_:1,__:[3]})])])}}}),Wa=ce(Ta,[["__scopeId","data-v-9521ada9"]]),Ba=`<template>
  <div>
    <h4>多弹窗管理 - 传统方式</h4>
    <div class="button-group">
      <el-button @click="openUserDialog" type="primary">用户管理</el-button>
      <el-button @click="openOrderDialog" type="warning">订单管理</el-button>
      <el-button @click="openProductDialog" type="success">商品管理</el-button>
      <el-button @click="openSettingsDialog" type="info">系统设置</el-button>
    </div>

    <!-- 用户管理弹窗 -->
    <el-dialog v-model="userDialogVisible" title="用户管理" width="600px">
      <ManagerComponents type="user" :show-buttons="false" />
      <template #footer>
        <el-button @click="userDialogVisible = false">关闭</el-button>
      </template>
    </el-dialog>

    <!-- 订单管理弹窗 -->
    <el-dialog v-model="orderDialogVisible" title="订单管理" width="700px">
      <ManagerComponents type="order" :show-buttons="false" />
      <template #footer>
        <el-button @click="orderDialogVisible = false">关闭</el-button>
      </template>
    </el-dialog>

    <!-- 商品管理弹窗 -->
    <el-dialog v-model="productDialogVisible" title="商品管理" width="650px">
      <ManagerComponents type="product" :show-buttons="false" />
      <template #footer>
        <el-button @click="productDialogVisible = false">关闭</el-button>
      </template>
    </el-dialog>

    <!-- 系统设置弹窗 -->
    <el-dialog v-model="settingsDialogVisible" title="系统设置" width="500px">
      <ManagerComponents
        type="settings"
        @save="saveSettings"
        @cancel="settingsDialogVisible = false"
      />
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ElMessage } from "element-plus";
import ManagerComponents from "./shared/ManagerComponents.vue";

// 弹窗状态管理
const userDialogVisible = ref(false);
const orderDialogVisible = ref(false);
const productDialogVisible = ref(false);
const settingsDialogVisible = ref(false);

// 弹窗打开方法
const openUserDialog = () => {
  userDialogVisible.value = true;
};

const openOrderDialog = () => {
  orderDialogVisible.value = true;
};

const openProductDialog = () => {
  productDialogVisible.value = true;
};

const openSettingsDialog = () => {
  settingsDialogVisible.value = true;
};

const saveSettings = (settings) => {
  ElMessage.success("设置已保存");
  console.log("保存的设置:", settings);
  settingsDialogVisible.value = false;
};
<\/script>

<style scoped>
h4 {
  margin-bottom: 16px;
  color: #409eff;
}

.button-group {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.DialogContent {
  padding: 20px 0;
}

.DialogContent p {
  margin-bottom: 16px;
  font-weight: bold;
}
</style>
`,Ia={class:"button-group"},Ea={__name:"comparison-traditional-multiple",setup(e){const i=T(!1),l=T(!1),t=T(!1),a=T(!1),f=()=>{i.value=!0},n=()=>{l.value=!0},m=()=>{t.value=!0},v=()=>{a.value=!0},d=c=>{H.success("设置已保存"),console.log("保存的设置:",c),a.value=!1};return(c,r)=>{const h=oe,g=ht;return b(),D("div",null,[r[15]||(r[15]=V("h4",null,"多弹窗管理 - 传统方式",-1)),V("div",Ia,[s(h,{onClick:f,type:"primary"},{default:p(()=>r[8]||(r[8]=[B("用户管理")])),_:1,__:[8]}),s(h,{onClick:n,type:"warning"},{default:p(()=>r[9]||(r[9]=[B("订单管理")])),_:1,__:[9]}),s(h,{onClick:m,type:"success"},{default:p(()=>r[10]||(r[10]=[B("商品管理")])),_:1,__:[10]}),s(h,{onClick:v,type:"info"},{default:p(()=>r[11]||(r[11]=[B("系统设置")])),_:1,__:[11]})]),s(g,{modelValue:i.value,"onUpdate:modelValue":r[1]||(r[1]=k=>i.value=k),title:"用户管理",width:"600px"},{footer:p(()=>[s(h,{onClick:r[0]||(r[0]=k=>i.value=!1)},{default:p(()=>r[12]||(r[12]=[B("关闭")])),_:1,__:[12]})]),default:p(()=>[s(Le,{type:"user","show-buttons":!1})]),_:1},8,["modelValue"]),s(g,{modelValue:l.value,"onUpdate:modelValue":r[3]||(r[3]=k=>l.value=k),title:"订单管理",width:"700px"},{footer:p(()=>[s(h,{onClick:r[2]||(r[2]=k=>l.value=!1)},{default:p(()=>r[13]||(r[13]=[B("关闭")])),_:1,__:[13]})]),default:p(()=>[s(Le,{type:"order","show-buttons":!1})]),_:1},8,["modelValue"]),s(g,{modelValue:t.value,"onUpdate:modelValue":r[5]||(r[5]=k=>t.value=k),title:"商品管理",width:"650px"},{footer:p(()=>[s(h,{onClick:r[4]||(r[4]=k=>t.value=!1)},{default:p(()=>r[14]||(r[14]=[B("关闭")])),_:1,__:[14]})]),default:p(()=>[s(Le,{type:"product","show-buttons":!1})]),_:1},8,["modelValue"]),s(g,{modelValue:a.value,"onUpdate:modelValue":r[7]||(r[7]=k=>a.value=k),title:"系统设置",width:"500px"},{default:p(()=>[s(Le,{type:"settings",onSave:d,onCancel:r[6]||(r[6]=k=>a.value=!1)})]),_:1},8,["modelValue"])])}}},Ra=ce(Ea,[["__scopeId","data-v-3cccd090"]]),Na=`<template>
  <div>
    <h4>多步骤工作流 - 命令式</h4>
    <el-button @click="handleWorkflow" type="success">开始工作流</el-button>
  </div>
</template>

<script setup lang="tsx">
import { useDialog } from "@vue-cmd/element-plus";
import WorkflowStep1 from "./shared/WorkflowStep1.vue";
import WorkflowStep2 from "./shared/WorkflowStep2.vue";
import WorkflowStep3 from "./shared/WorkflowStep3.vue";

const CommandDialog = useDialog();

const handleWorkflow = async () => {
  try {
    // 步骤1：选择数据
    const selectedDataType = await CommandDialog(<WorkflowStep1 />, {
      title: "步骤1: 选择数据",
      width: "500px",
    }).promise;

    // 步骤2：编辑内容 (支持返回上一步)
    let editData;
    try {
      editData = await CommandDialog(
        <WorkflowStep2 dataType={selectedDataType} />,
        {
          title: "步骤2: 编辑内容",
          width: "600px",
        },
      ).promise;
    } catch (error) {
      if (error === "back") {
        // 用户点击了上一步，重新开始流程
        return handleWorkflow();
      } else {
        // 用户取消了操作
        return;
      }
    }

    try {
      const result = await CommandDialog(
        <WorkflowStep3 dataType={selectedDataType} editData={editData} />,
        { title: "步骤3: 确认提交", width: "500px" },
      ).promise;

      // 执行成功，消息已在WorkflowStep3中显示
      console.log("工作流结果:", result);
    } catch (error) {
      if (error === "back") {
        // 用户点击了上一步，回到步骤2
        try {
          editData = await CommandDialog(
            <WorkflowStep2 dataType={selectedDataType} />,
            {
              title: "步骤2: 编辑内容",
              width: "600px",
            },
          ).promise;

          // 步骤2完成后，继续循环尝试步骤3
        } catch (step2Error) {
          if (step2Error === "back") {
            // 从步骤2返回步骤1，重新开始流程
            return handleWorkflow();
          } else {
            // 用户取消了操作
            return;
          }
        }
      } else {
        // 用户取消了操作
        return;
      }
    }
  } catch (error) {
    // 用户在第一步就取消了操作
    console.log("用户取消了工作流");
  }
};
<\/script>

<style scoped>
h4 {
  margin-bottom: 16px;
  color: #67c23a;
}

h5 {
  margin-bottom: 12px;
}

.step-content {
  padding: 20px 0;
}

.step-content p {
  margin-bottom: 12px;
}
</style>
`,$a={class:"step-content"},Oa={key:0,style:{"text-align":"right","margin-top":"20px"}},La={__name:"WorkflowStep1",props:{showButtons:{type:Boolean,default:!0}},emits:["next","cancel"],setup(e,{emit:i}){const l=i,t=qe(!1),a=T(""),f=()=>{try{return t.promise instanceof Promise}catch{return!1}},n=()=>{if(!a.value){H.warning("请选择数据类型");return}const v=a.value;f()?t.destroyWithResolve(v):l("next",{data:v})},m=()=>{f()?t.destroyWithReject():l("cancel")};return(v,d)=>{const c=Co,r=Vo,h=oe;return b(),D("div",$a,[d[6]||(d[6]=V("p",null,"请选择要处理的数据类型：",-1)),s(r,{modelValue:a.value,"onUpdate:modelValue":d[0]||(d[0]=g=>a.value=g)},{default:p(()=>[s(c,{label:"users"},{default:p(()=>d[1]||(d[1]=[B("用户数据")])),_:1,__:[1]}),s(c,{label:"orders"},{default:p(()=>d[2]||(d[2]=[B("订单数据")])),_:1,__:[2]}),s(c,{label:"products"},{default:p(()=>d[3]||(d[3]=[B("商品数据")])),_:1,__:[3]})]),_:1},8,["modelValue"]),e.showButtons?(b(),D("div",Oa,[s(h,{onClick:m},{default:p(()=>d[4]||(d[4]=[B("取消")])),_:1,__:[4]}),s(h,{type:"primary",onClick:n},{default:p(()=>d[5]||(d[5]=[B("下一步")])),_:1,__:[5]})])):E("",!0)])}}},Nn=ce(La,[["__scopeId","data-v-57eb7e39"]]),Ma={class:"step-content"},Aa={key:0,style:{"text-align":"right","margin-top":"20px"}},Ua={__name:"WorkflowStep2",props:{dataType:{type:String,required:!0},showButtons:{type:Boolean,default:!0}},emits:["next","back","cancel"],setup(e,{emit:i}){const l=i,t=qe(!1),a=T({method:"",note:""}),f=()=>{try{return t.promise instanceof Promise}catch{return!1}},n=()=>{if(!a.value.method){H.warning("请选择处理方式");return}const d=a.value;f()?t.destroyWithResolve(d):l("next",{data:d})},m=()=>{f()?t.destroyWithReject("back"):l("back")},v=()=>{f()?t.destroyWithReject():l("cancel")};return(d,c)=>{const r=Wn,h=Tn,g=Mt,k=bt,O=At,R=oe;return b(),D("div",Ma,[V("p",null,"正在处理: "+Q(e.dataType),1),s(O,{model:a.value,"label-width":"100px"},{default:p(()=>[s(g,{label:"处理方式"},{default:p(()=>[s(h,{modelValue:a.value.method,"onUpdate:modelValue":c[0]||(c[0]=N=>a.value.method=N)},{default:p(()=>[s(r,{label:"批量更新",value:"update"}),s(r,{label:"批量删除",value:"delete"}),s(r,{label:"导出数据",value:"export"})]),_:1},8,["modelValue"])]),_:1}),s(g,{label:"备注"},{default:p(()=>[s(k,{modelValue:a.value.note,"onUpdate:modelValue":c[1]||(c[1]=N=>a.value.note=N),type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),e.showButtons?(b(),D("div",Aa,[s(R,{onClick:m},{default:p(()=>c[2]||(c[2]=[B("上一步")])),_:1,__:[2]}),s(R,{onClick:v},{default:p(()=>c[3]||(c[3]=[B("取消")])),_:1,__:[3]}),s(R,{type:"primary",onClick:n},{default:p(()=>c[4]||(c[4]=[B("下一步")])),_:1,__:[4]})])):E("",!0)])}}},Tt=ce(Ua,[["__scopeId","data-v-00029642"]]),Pa={class:"step-content"},Fa={key:0,style:{"text-align":"right","margin-top":"20px"}},Za={__name:"WorkflowStep3",props:{dataType:{type:String,required:!0},editData:{type:Object,required:!0},showButtons:{type:Boolean,default:!0}},emits:["submit","back","cancel"],setup(e,{emit:i}){const l=e,t=i,a=qe(!1),f=T(!1),n=()=>{try{return a.promise instanceof Promise}catch{return!1}},m=async()=>{f.value=!0;try{await new Promise(r=>setTimeout(r,2e3));const c={dataType:l.dataType,method:l.editData.method,note:l.editData.note};H.success("工作流执行成功！"),n()?a.destroyWithResolve(c):t("submit",c)}catch{H.error("执行失败")}finally{f.value=!1}},v=()=>{n()?a.destroyWithReject("back"):t("back")},d=()=>{n()?a.destroyWithReject():t("cancel")};return(c,r)=>{const h=oe;return b(),D("div",Pa,[r[6]||(r[6]=V("h5",null,"请确认以下信息：",-1)),V("p",null,[r[0]||(r[0]=V("strong",null,"数据类型:",-1)),B(" "+Q(e.dataType),1)]),V("p",null,[r[1]||(r[1]=V("strong",null,"处理方式:",-1)),B(" "+Q(e.editData.method),1)]),V("p",null,[r[2]||(r[2]=V("strong",null,"备注:",-1)),B(" "+Q(e.editData.note||"无"),1)]),e.showButtons?(b(),D("div",Fa,[s(h,{onClick:v},{default:p(()=>r[3]||(r[3]=[B("上一步")])),_:1,__:[3]}),s(h,{onClick:d},{default:p(()=>r[4]||(r[4]=[B("取消")])),_:1,__:[4]}),s(h,{type:"primary",onClick:m,loading:f.value},{default:p(()=>r[5]||(r[5]=[B(" 确认提交 ")])),_:1,__:[5]},8,["loading"])])):E("",!0)])}}},$n=ce(Za,[["__scopeId","data-v-d6bff8d4"]]),za=U({__name:"comparison-command-workflow",setup(e){const i=gt(),l=async()=>{try{const t=await i(s(Nn,null,null),{title:"步骤1: 选择数据",width:"500px"}).promise;let a;try{a=await i(s(Tt,{dataType:t},null),{title:"步骤2: 编辑内容",width:"600px"}).promise}catch(f){return f==="back"?l():void 0}try{const f=await i(s($n,{dataType:t,editData:a},null),{title:"步骤3: 确认提交",width:"500px"}).promise;console.log("工作流结果:",f)}catch(f){if(f==="back")try{a=await i(s(Tt,{dataType:t},null),{title:"步骤2: 编辑内容",width:"600px"}).promise}catch(n){return n==="back"?l():void 0}else return}}catch{console.log("用户取消了工作流")}};return(t,a)=>{const f=oe;return b(),D("div",null,[a[1]||(a[1]=V("h4",null,"多步骤工作流 - 命令式",-1)),s(f,{onClick:l,type:"success"},{default:p(()=>a[0]||(a[0]=[B("开始工作流")])),_:1,__:[0]})])}}}),Ga=ce(za,[["__scopeId","data-v-7f86743f"]]),xa=`<template>
  <div>
    <h4>多步骤工作流 - 传统方式</h4>
    <el-button @click="handleWorkflow" type="primary">开始工作流</el-button>

    <!-- 步骤1：选择数据 -->
    <el-dialog v-model="step1Visible" title="步骤1: 选择数据" width="500px">
      <WorkflowStep1 @next="handleStep1Next" @cancel="step1Visible = false" />
    </el-dialog>

    <!-- 步骤2：编辑内容 -->
    <el-dialog v-model="step2Visible" title="步骤2: 编辑内容" width="600px">
      <WorkflowStep2
        :data-type="selectedDataType"
        @next="handleStep2Next"
        @back="goBackToStep1"
        @cancel="step2Visible = false"
      />
    </el-dialog>

    <!-- 步骤3：确认提交 -->
    <el-dialog v-model="step3Visible" title="步骤3: 确认提交" width="500px">
      <WorkflowStep3
        :data-type="selectedDataType"
        :edit-data="editForm"
        @submit="handleFinalSubmit"
        @back="goBackToStep2"
        @cancel="step3Visible = false"
      />
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ElMessage } from "element-plus";
import WorkflowStep1 from "./shared/WorkflowStep1.vue";
import WorkflowStep2 from "./shared/WorkflowStep2.vue";
import WorkflowStep3 from "./shared/WorkflowStep3.vue";

const step1Visible = ref(false);
const step2Visible = ref(false);
const step3Visible = ref(false);
const selectedDataType = ref("");
const editForm = ref({});

const handleWorkflow = () => {
  // 重置状态
  selectedDataType.value = "";
  editForm.value = {};
  step1Visible.value = true;
};

const handleStep1Next = ({ data }) => {
  selectedDataType.value = data;
  step1Visible.value = false;
  step2Visible.value = true;
};

const handleStep2Next = ({ data }) => {
  editForm.value = data;
  step2Visible.value = false;
  step3Visible.value = true;
};

const handleFinalSubmit = (result) => {
  step3Visible.value = false;
  console.log("工作流结果:", result);
};

const goBackToStep1 = () => {
  step2Visible.value = false;
  step1Visible.value = true;
};

const goBackToStep2 = () => {
  step3Visible.value = false;
  step2Visible.value = true;
};
<\/script>

<style scoped>
h4 {
  margin-bottom: 16px;
  color: #409eff;
}

h5 {
  margin-bottom: 12px;
}

.step-content {
  padding: 20px 0;
}

.step-content p {
  margin-bottom: 12px;
}
</style>
`,Qa={__name:"comparison-traditional-workflow",setup(e){const i=T(!1),l=T(!1),t=T(!1),a=T(""),f=T({}),n=()=>{a.value="",f.value={},i.value=!0},m=({data:h})=>{a.value=h,i.value=!1,l.value=!0},v=({data:h})=>{f.value=h,l.value=!1,t.value=!0},d=h=>{t.value=!1,console.log("工作流结果:",h)},c=()=>{l.value=!1,i.value=!0},r=()=>{t.value=!1,l.value=!0};return(h,g)=>{const k=oe,O=ht;return b(),D("div",null,[g[7]||(g[7]=V("h4",null,"多步骤工作流 - 传统方式",-1)),s(k,{onClick:n,type:"primary"},{default:p(()=>g[6]||(g[6]=[B("开始工作流")])),_:1,__:[6]}),s(O,{modelValue:i.value,"onUpdate:modelValue":g[1]||(g[1]=R=>i.value=R),title:"步骤1: 选择数据",width:"500px"},{default:p(()=>[s(Nn,{onNext:m,onCancel:g[0]||(g[0]=R=>i.value=!1)})]),_:1},8,["modelValue"]),s(O,{modelValue:l.value,"onUpdate:modelValue":g[3]||(g[3]=R=>l.value=R),title:"步骤2: 编辑内容",width:"600px"},{default:p(()=>[s(Tt,{"data-type":a.value,onNext:v,onBack:c,onCancel:g[2]||(g[2]=R=>l.value=!1)},null,8,["data-type"])]),_:1},8,["modelValue"]),s(O,{modelValue:t.value,"onUpdate:modelValue":g[5]||(g[5]=R=>t.value=R),title:"步骤3: 确认提交",width:"500px"},{default:p(()=>[s($n,{"data-type":a.value,"edit-data":f.value,onSubmit:d,onBack:r,onCancel:g[4]||(g[4]=R=>t.value=!1)},null,8,["data-type","edit-data"])]),_:1},8,["modelValue"])])}}},Ya=ce(Qa,[["__scopeId","data-v-ad4aebfc"]]),Xa=`<template>
  <div>
    <h4>表格编辑 - 命令式</h4>
    <UserTable
      :data="tableData"
      :show-role="true"
      @edit="editRow"
      @delete="deleteRow"
    />
  </div>
</template>

<script setup lang="tsx">
import { ref } from "vue";
import { useDialog } from "@vue-cmd/element-plus";
import { ElMessage } from "element-plus";
import UserTable from "./shared/UserTable.vue";
import UserEditForm from "./shared/UserEditForm.vue";
import DeleteConfirm from "./shared/DeleteConfirm.vue";
import { userData } from "./shared/mockData.js";

const CommandDialog = useDialog();
const tableData = ref([...userData]);

const editRow = async (row) => {
  try {
    const result = await CommandDialog(
      <UserEditForm user={row} showRole={true} />,
      {
        title: "编辑用户",
        width: "500px",
      },
    ).promise;

    // 更新表格数据
    const index = tableData.value.findIndex((item) => item.id === row.id);
    if (index !== -1) {
      tableData.value[index] = { ...result, id: row.id };
    }

    ElMessage.success("更新成功");
  } catch {
    // 用户取消编辑，无需处理
  }
};

const deleteRow = async (row) => {
  try {
    await CommandDialog(<DeleteConfirm user={row} />, {
      title: "确认删除",
      width: "400px",
    }).promise;

    // 从表格中删除
    const index = tableData.value.findIndex((item) => item.id === row.id);
    if (index !== -1) {
      tableData.value.splice(index, 1);
    }

    ElMessage.success("删除成功");
  } catch {
    // 用户取消删除，无需处理
  }
};
<\/script>

<style scoped>
h4 {
  margin-bottom: 16px;
  color: #67c23a;
}
</style>
`,On={__name:"UserTable",props:{data:{type:Array,required:!0},showRole:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},emits:["edit","delete"],setup(e){return(i,l)=>{const t=gn,a=oe,f=hn,n=eo;return G((b(),M(f,{data:e.data,style:{width:"100%"}},{default:p(()=>[s(t,{prop:"name",label:"姓名",width:"120"}),s(t,{prop:"email",label:"邮箱",width:"200"}),e.showRole?(b(),M(t,{key:0,prop:"role",label:"角色",width:"100"})):E("",!0),s(t,{label:"操作",width:"150"},{default:p(({row:m})=>[s(a,{size:"small",onClick:v=>i.$emit("edit",m)},{default:p(()=>l[0]||(l[0]=[B("编辑")])),_:2,__:[0]},1032,["onClick"]),s(a,{size:"small",type:"danger",onClick:v=>i.$emit("delete",m)},{default:p(()=>l[1]||(l[1]=[B("删除")])),_:2,__:[1]},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[n,e.loading]])}}},qa={class:"p-4"},ja={key:0,class:"dialog-footer"},Ka={__name:"UserEditForm",props:{user:{type:Object,required:!0},showRole:{type:Boolean,default:!1},showButtons:{type:Boolean,default:!0},loading:{type:Boolean,default:!1}},emits:["submit","cancel"],setup(e,{emit:i}){const l=e,t=i,a=T({...l.user}),f=qe(!1);le(()=>l.user,d=>{a.value={...d}},{deep:!0});const n=()=>{try{return f.promise instanceof Promise}catch{return!1}},m=async()=>{try{await new Promise(d=>setTimeout(d,1e3)),console.log("提交数据:",a.value),H.success("用户信息已更新"),n()?f.destroyWithResolve(a.value):t("submit",a.value)}catch{H.error("提交失败")}},v=()=>{n()?f.destroyWithReject():t("cancel")};return(d,c)=>{const r=bt,h=Mt,g=Wn,k=Tn,O=At,R=oe;return b(),D("div",qa,[s(O,{model:a.value,"label-width":"80px"},{default:p(()=>[s(h,{label:"姓名"},{default:p(()=>[s(r,{modelValue:a.value.name,"onUpdate:modelValue":c[0]||(c[0]=N=>a.value.name=N)},null,8,["modelValue"])]),_:1}),s(h,{label:"邮箱"},{default:p(()=>[s(r,{modelValue:a.value.email,"onUpdate:modelValue":c[1]||(c[1]=N=>a.value.email=N)},null,8,["modelValue"])]),_:1}),e.showRole?(b(),M(h,{key:0,label:"角色"},{default:p(()=>[s(k,{modelValue:a.value.role,"onUpdate:modelValue":c[2]||(c[2]=N=>a.value.role=N)},{default:p(()=>[s(g,{label:"管理员",value:"admin"}),s(g,{label:"用户",value:"user"})]),_:1},8,["modelValue"])]),_:1})):E("",!0)]),_:1},8,["model"]),e.showButtons?(b(),D("div",ja,[s(R,{onClick:v},{default:p(()=>c[3]||(c[3]=[B("取消")])),_:1,__:[3]}),s(R,{type:"primary",onClick:m,loading:e.loading},{default:p(()=>c[4]||(c[4]=[B("确认")])),_:1,__:[4]},8,["loading"])])):E("",!0)])}}},wt=ce(Ka,[["__scopeId","data-v-799f2cc1"]]),Ha={key:0,style:{"text-align":"right","margin-top":"20px"}},Ln={__name:"DeleteConfirm",props:{user:{type:Object,required:!0},showButtons:{type:Boolean,default:!0},loading:{type:Boolean,default:!1}},emits:["confirm","cancel"],setup(e,{emit:i}){const l=i,t=qe(!1),a=()=>{try{return t.promise instanceof Promise}catch{return!1}},f=async()=>{try{await new Promise(m=>setTimeout(m,1e3)),a()?t.destroyWithResolve(!0):l("confirm")}catch(m){console.error("删除失败:",m)}},n=()=>{a()?t.destroyWithReject():l("cancel")};return(m,v)=>{const d=oe;return b(),D("div",null,[V("p",null,'确定要删除用户 "'+Q(e.user.name)+'" 吗？',1),e.showButtons?(b(),D("div",Ha,[s(d,{onClick:n},{default:p(()=>v[0]||(v[0]=[B("取消")])),_:1,__:[0]}),s(d,{type:"danger",onClick:f,loading:e.loading},{default:p(()=>v[1]||(v[1]=[B("确认删除")])),_:1,__:[1]},8,["loading"])])):E("",!0)])}}},Ja=U({__name:"comparison-command-table",setup(e){const i=gt(),l=T([...Pt]),t=async f=>{try{const n=await i(s(wt,{user:f,showRole:!0},null),{title:"编辑用户",width:"500px"}).promise,m=l.value.findIndex(v=>v.id===f.id);m!==-1&&(l.value[m]={...n,id:f.id}),H.success("更新成功")}catch{}},a=async f=>{try{await i(s(Ln,{user:f},null),{title:"确认删除",width:"400px"}).promise;const n=l.value.findIndex(m=>m.id===f.id);n!==-1&&l.value.splice(n,1),H.success("删除成功")}catch{}};return(f,n)=>(b(),D("div",null,[n[0]||(n[0]=V("h4",null,"表格编辑 - 命令式",-1)),s(On,{data:l.value,"show-role":!0,onEdit:t,onDelete:a},null,8,["data"])]))}}),es=ce(Ja,[["__scopeId","data-v-688e7c30"]]),ts=`<template>
  <div>
    <h4>表格编辑 - 传统方式</h4>
    <UserTable
      :data="tableData"
      :show-role="true"
      :loading="loading"
      @edit="editRow"
      @delete="deleteRow"
    />

    <!-- 编辑弹窗 -->
    <el-dialog v-model="editVisible" title="编辑用户" width="500px">
      <UserEditForm
        v-if="editVisible"
        :user="currentRow"
        :show-role="true"
        @submit="handleEditSubmit"
        @cancel="editVisible = false"
      />
    </el-dialog>

    <!-- 删除确认弹窗 -->
    <el-dialog v-model="deleteVisible" title="确认删除" width="400px">
      <DeleteConfirm
        :user="currentRow"
        @confirm="confirmDelete"
        @cancel="deleteVisible = false"
      />
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ElMessage } from "element-plus";
import UserTable from "./shared/UserTable.vue";
import UserEditForm from "./shared/UserEditForm.vue";
import DeleteConfirm from "./shared/DeleteConfirm.vue";
import { userData } from "./shared/mockData.js";

const tableData = ref([...userData]);
const editVisible = ref(false);
const deleteVisible = ref(false);
const currentRow = ref({});
const loading = ref(false);

const editRow = (row) => {
  currentRow.value = { ...row };
  editVisible.value = true;
};

const handleEditSubmit = async (userData) => {
  loading.value = true;
  try {
    // 更新表格数据
    const index = tableData.value.findIndex(
      (item) => item.id === currentRow.value.id,
    );
    if (index !== -1) {
      tableData.value[index] = { ...userData, id: currentRow.value.id };
    }

    editVisible.value = false;
    ElMessage.success("更新成功");
  } catch (error) {
    ElMessage.error("更新失败");
  } finally {
    loading.value = false;
  }
};

const deleteRow = (row) => {
  currentRow.value = row;
  deleteVisible.value = true;
};

const confirmDelete = async () => {
  loading.value = true;
  try {
    // 从表格中删除
    const index = tableData.value.findIndex(
      (item) => item.id === currentRow.value.id,
    );
    if (index !== -1) {
      tableData.value.splice(index, 1);
    }

    deleteVisible.value = false;
    ElMessage.success("删除成功");
  } catch (error) {
    ElMessage.error("删除失败");
  } finally {
    loading.value = false;
  }
};
<\/script>

<style scoped>
h4 {
  margin-bottom: 16px;
  color: #409eff;
}
</style>
`,ns={__name:"comparison-traditional-table",setup(e){const i=T([...Pt]),l=T(!1),t=T(!1),a=T({}),f=T(!1),n=c=>{a.value={...c},l.value=!0},m=async c=>{f.value=!0;try{const r=i.value.findIndex(h=>h.id===a.value.id);r!==-1&&(i.value[r]={...c,id:a.value.id}),l.value=!1,H.success("更新成功")}catch{H.error("更新失败")}finally{f.value=!1}},v=c=>{a.value=c,t.value=!0},d=async()=>{f.value=!0;try{const c=i.value.findIndex(r=>r.id===a.value.id);c!==-1&&i.value.splice(c,1),t.value=!1,H.success("删除成功")}catch{H.error("删除失败")}finally{f.value=!1}};return(c,r)=>{const h=ht;return b(),D("div",null,[r[4]||(r[4]=V("h4",null,"表格编辑 - 传统方式",-1)),s(On,{data:i.value,"show-role":!0,loading:f.value,onEdit:n,onDelete:v},null,8,["data","loading"]),s(h,{modelValue:l.value,"onUpdate:modelValue":r[1]||(r[1]=g=>l.value=g),title:"编辑用户",width:"500px"},{default:p(()=>[l.value?(b(),M(wt,{key:0,user:a.value,"show-role":!0,onSubmit:m,onCancel:r[0]||(r[0]=g=>l.value=!1)},null,8,["user"])):E("",!0)]),_:1},8,["modelValue"]),s(h,{modelValue:t.value,"onUpdate:modelValue":r[3]||(r[3]=g=>t.value=g),title:"确认删除",width:"400px"},{default:p(()=>[s(Ln,{user:a.value,onConfirm:d,onCancel:r[2]||(r[2]=g=>t.value=!1)},null,8,["user"])]),_:1},8,["modelValue"])])}}},ls=ce(ns,[["__scopeId","data-v-1844cdb7"]]),os=`<template>
  <div>
    <!-- 业务内容 -->
    <el-button @click="openDialog" type="success">编辑用户 (命令式)</el-button>
  </div>
</template>

<script setup lang="tsx">
import { useDialog } from "@vue-cmd/element-plus";
import UserEditForm from "./shared/UserEditForm.vue";
import { defaultUser } from "./shared/mockData.js";

const CommandDialog = useDialog();

const openDialog = async () => {
  try {
    const result = await CommandDialog(<UserEditForm user={defaultUser} />, {
      title: "编辑用户",
      width: "500px",
    }).promise;

    // 用户提交了数据，处理后续逻辑
    console.log("最终结果:", result);
  } catch (error) {
    // 用户取消了操作
    console.log("用户取消了编辑");
  }
};
<\/script>
`,as=U({__name:"comparison-command-basic",setup(e){const i=gt(),l=async()=>{try{const t=await i(s(wt,{user:Rn},null),{title:"编辑用户",width:"500px"}).promise;console.log("最终结果:",t)}catch{console.log("用户取消了编辑")}};return(t,a)=>{const f=oe;return b(),D("div",null,[s(f,{onClick:l,type:"success"},{default:p(()=>a[0]||(a[0]=[B("编辑用户 (命令式)")])),_:1,__:[0]})])}}}),ss=`<template>
  <div>
    <!-- 业务内容 -->
    <el-button @click="openDialog" type="primary"
      >编辑用户 (传统方式)</el-button
    >

    <!-- 弹窗定义 -->
    <el-dialog
      v-model="dialogVisible"
      title="编辑用户"
      width="500px"
      @close="handleClose"
    >
      <UserEditForm
        :user="currentUser"
        @submit="handleSubmit"
        @cancel="handleCancel"
      />
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ElMessage } from "element-plus";
import UserEditForm from "./shared/UserEditForm.vue";
import { defaultUser } from "./shared/mockData.js";

// 状态管理
const dialogVisible = ref(false);
const currentUser = ref({});

// 事件处理
const openDialog = () => {
  currentUser.value = { ...defaultUser };
  dialogVisible.value = true;
};

const handleSubmit = (userData) => {
  // 处理提交逻辑
  console.log("提交数据:", userData);
  ElMessage.success("用户信息已更新");
  dialogVisible.value = false;
};

const handleCancel = () => {
  dialogVisible.value = false;
};

const handleClose = () => {
  currentUser.value = {};
};
<\/script>
`,is={__name:"comparison-traditional-basic",setup(e){const i=T(!1),l=T({}),t=()=>{l.value={...Rn},i.value=!0},a=m=>{console.log("提交数据:",m),H.success("用户信息已更新"),i.value=!1},f=()=>{i.value=!1},n=()=>{l.value={}};return(m,v)=>{const d=oe,c=ht;return b(),D("div",null,[s(d,{onClick:t,type:"primary"},{default:p(()=>v[1]||(v[1]=[B("编辑用户 (传统方式)")])),_:1,__:[1]}),s(c,{modelValue:i.value,"onUpdate:modelValue":v[0]||(v[0]=r=>i.value=r),title:"编辑用户",width:"500px",onClose:n},{default:p(()=>[s(wt,{user:l.value,onSubmit:a,onCancel:f},null,8,["user"])]),_:1},8,["modelValue"])])}}},fs=JSON.parse('{"title":"命令式 vs 传统方式对比","description":"","frontmatter":{},"headers":[],"relativePath":"guide/comparison.md","filePath":"guide/comparison.md"}'),rs={name:"guide/comparison.md"},vs=Object.assign(rs,{setup(e){const i=T(!0);return(l,t)=>{const a=Ee("ClientOnly");return b(),D("div",null,[t[9]||(t[9]=et("",7)),G(s(o(Ce),null,null,512),[[ee,i.value]]),s(a,null,{default:p(()=>[s(o(Ve),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{i.value=!1}),vueCode:o(ss)},{vue:p(()=>[s(is)]),_:1},8,["vueCode"])]),_:1}),t[10]||(t[10]=V("h4",{id:"命令式组件方式",tabindex:"-1"},[B("命令式组件方式 "),V("a",{class:"header-anchor",href:"#命令式组件方式","aria-label":'Permalink to "命令式组件方式"'},"​")],-1)),G(s(o(Ce),null,null,512),[[ee,i.value]]),s(a,null,{default:p(()=>[s(o(Ve),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[1]||(t[1]=()=>{i.value=!1}),vueCode:o(os)},{vue:p(()=>[s(as)]),_:1},8,["vueCode"])]),_:1}),t[11]||(t[11]=et("",4)),G(s(o(Ce),null,null,512),[[ee,i.value]]),s(a,null,{default:p(()=>[s(o(Ve),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[2]||(t[2]=()=>{i.value=!1}),vueCode:o(ts)},{vue:p(()=>[s(ls)]),_:1},8,["vueCode"])]),_:1}),t[12]||(t[12]=V("h4",{id:"命令式组件方式-1",tabindex:"-1"},[B("命令式组件方式 "),V("a",{class:"header-anchor",href:"#命令式组件方式-1","aria-label":'Permalink to "命令式组件方式"'},"​")],-1)),G(s(o(Ce),null,null,512),[[ee,i.value]]),s(a,null,{default:p(()=>[s(o(Ve),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[3]||(t[3]=()=>{i.value=!1}),vueCode:o(Xa)},{vue:p(()=>[s(es)]),_:1},8,["vueCode"])]),_:1}),t[13]||(t[13]=V("p",null,[V("strong",null,"对比结果：")],-1)),t[14]||(t[14]=V("ul",null,[V("li",null,"代码量：大幅减少，无需在模板中定义多个弹窗"),V("li",null,"状态管理：只需要业务数据，无需UI状态"),V("li",null,"事件处理：逻辑集中，无需分散的事件函数"),V("li",null,"异步流程：Promise链让操作流程一目了然")],-1)),t[15]||(t[15]=V("h3",{id:"_3-复杂嵌套弹窗",tabindex:"-1"},[B("3. 复杂嵌套弹窗 "),V("a",{class:"header-anchor",href:"#_3-复杂嵌套弹窗","aria-label":'Permalink to "3. 复杂嵌套弹窗"'},"​")],-1)),t[16]||(t[16]=V("p",null,"嵌套弹窗是一个常见但复杂的场景，传统方式需要手动管理多个弹窗状态和层级关系，而命令式组件能够自动处理这些复杂性。",-1)),G(s(o(Ce),null,null,512),[[ee,i.value]]),s(a,null,{default:p(()=>[s(o(Ve),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[4]||(t[4]=()=>{i.value=!1}),vueCode:o(lo)},{vue:p(()=>[s(Xl)]),_:1},8,["vueCode"])]),_:1}),t[17]||(t[17]=et("",5)),G(s(o(Ce),null,null,512),[[ee,i.value]]),s(a,null,{default:p(()=>[s(o(Ve),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[5]||(t[5]=()=>{i.value=!1}),vueCode:o(xa)},{vue:p(()=>[s(Ya)]),_:1},8,["vueCode"])]),_:1}),t[18]||(t[18]=V("h4",{id:"命令式组件方式-2",tabindex:"-1"},[B("命令式组件方式 "),V("a",{class:"header-anchor",href:"#命令式组件方式-2","aria-label":'Permalink to "命令式组件方式"'},"​")],-1)),G(s(o(Ce),null,null,512),[[ee,i.value]]),s(a,null,{default:p(()=>[s(o(Ve),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[6]||(t[6]=()=>{i.value=!1}),vueCode:o(Na)},{vue:p(()=>[s(Ga)]),_:1},8,["vueCode"])]),_:1}),t[19]||(t[19]=et("",5)),G(s(o(Ce),null,null,512),[[ee,i.value]]),s(a,null,{default:p(()=>[s(o(Ve),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[7]||(t[7]=()=>{i.value=!1}),vueCode:o(Ba)},{vue:p(()=>[s(Ra)]),_:1},8,["vueCode"])]),_:1}),t[20]||(t[20]=V("h4",{id:"命令式组件方式-3",tabindex:"-1"},[B("命令式组件方式 "),V("a",{class:"header-anchor",href:"#命令式组件方式-3","aria-label":'Permalink to "命令式组件方式"'},"​")],-1)),G(s(o(Ce),null,null,512),[[ee,i.value]]),s(a,null,{default:p(()=>[s(o(Ve),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[8]||(t[8]=()=>{i.value=!1}),vueCode:o(ba)},{vue:p(()=>[s(Wa)]),_:1},8,["vueCode"])]),_:1}),t[21]||(t[21]=et("",15))])}}});export{fs as __pageData,vs as default};
