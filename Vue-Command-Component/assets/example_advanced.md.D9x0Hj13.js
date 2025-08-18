import{ax as ge,ay as ln,j as he,r as X,C as Q,G as N,D as ie,P as L,q as Mt,u as e,a3 as At,E as T,az as Kt,i as Re,c as Z,w as xe,l as wn,I as Ce,J as ee,ab as Ze,K as de,aA as sn,$ as yt,H as oe,n as Fe,p as St,d as Dn,F as be,W as Te,B as fe,t as _e,k,T as Gn,aB as Qn,aa as ft,ac as Gt,af as Ue,v as Le,aC as Et,g as Qt,f as qt,ae as qn,X as Xn,aD as Jn}from"./chunks/framework.ZlEsIilh.js";import{i as Cn,b as Me,d as re,u as ea,a as ta,c as na,e as aa,_ as je,f as la,g as Ve,h as Sn,U as $t,C as Pt,j as We,k as sa,l as ra,m as oa,n as ia,o as ua,p as ca,E as qe,q as pe,r as Se,s as rn,t as da,v as fa,w as va,x as ma,y as pa,z as ha,A as xt,B as at,D as Bt,F as _t,G as lt,H as He,I as ba,J as _n,K as Vt,L as Ft,M as ga,Q as ya,N as Mn,O as ht,P as bt}from"./chunks/index.CIQb551O.js";import{E as ka,a as wa,b as Da,v as on,C as Nt,T as Ca,c as Xt,d as kt,e as Sa,f as _a,g as Ma}from"./chunks/el-tag.CXFFUXSI.js";import{i as $a,d as Pa,f as xa}from"./chunks/theme.EkMg1Mgs.js";const Ta=`<template>
  <div>
    {{ width }}
    <el-divider />
    <el-button @click="openDialog">打开弹窗</el-button>
  </div>
</template>

<script setup lang="tsx">
import { useDialog } from "@vue-cmd/element-plus";
import DialogContent from "./shared/DialogContent.vue";
import { ref } from "vue";

const width = ref(300);
let direction = 1;
const run = () => {
  width.value += direction;
  if (width.value >= window.innerWidth) {
    direction = -1;
  }
  if (width.value <= 450) {
    direction = 1;
  }
  requestAnimationFrame(run);
};
run();

const CommandDialog = useDialog();
const openDialog = () => {
  width.value = 450;
  const consumer = CommandDialog(<DialogContent />, () => ({
    title: \`当前宽度: \${width.value}px\`,
    width: \`\${width.value}px\`,
  }));

  console.log(consumer);
};
<\/script>

<style lang="scss" scoped></style>
`;var Xe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Je(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var $n={exports:{}};(function(l,s){(function(n,t){l.exports=t()})(Xe,function(){var n=1e3,t=6e4,i=36e5,c="millisecond",r="second",v="minute",g="hour",m="day",y="week",u="month",V="quarter",P="year",x="date",S="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,K=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,U={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(R){var E=["th","st","nd","rd"],I=R%100;return"["+R+(E[(I-20)%10]||E[I]||E[0])+"]"}},h=function(R,E,I){var G=String(R);return!G||G.length>=E?R:""+Array(E+1-G.length).join(I)+R},f={s:h,z:function(R){var E=-R.utcOffset(),I=Math.abs(E),G=Math.floor(I/60),d=I%60;return(E<=0?"+":"-")+h(G,2,"0")+":"+h(d,2,"0")},m:function R(E,I){if(E.date()<I.date())return-R(I,E);var G=12*(I.year()-E.year())+(I.month()-E.month()),d=E.clone().add(G,u),o=I-d<0,w=E.clone().add(G+(o?-1:1),u);return+(-(G+(I-d)/(o?d-w:w-d))||0)},a:function(R){return R<0?Math.ceil(R)||0:Math.floor(R)},p:function(R){return{M:u,y:P,w:y,d:m,D:x,h:g,m:v,s:r,ms:c,Q:V}[R]||String(R||"").toLowerCase().replace(/s$/,"")},u:function(R){return R===void 0}},Y="en",W={};W[Y]=U;var F="$isDayjsObject",H=function(R){return R instanceof q||!(!R||!R[F])},B=function R(E,I,G){var d;if(!E)return Y;if(typeof E=="string"){var o=E.toLowerCase();W[o]&&(d=o),I&&(W[o]=I,d=o);var w=E.split("-");if(!d&&w.length>1)return R(w[0])}else{var C=E.name;W[C]=E,d=C}return!G&&d&&(Y=d),d||!G&&Y},A=function(R,E){if(H(R))return R.clone();var I=typeof E=="object"?E:{};return I.date=R,I.args=arguments,new q(I)},z=f;z.l=B,z.i=H,z.w=function(R,E){return A(R,{locale:E.$L,utc:E.$u,x:E.$x,$offset:E.$offset})};var q=function(){function R(I){this.$L=B(I.locale,null,!0),this.parse(I),this.$x=this.$x||I.x||{},this[F]=!0}var E=R.prototype;return E.parse=function(I){this.$d=function(G){var d=G.date,o=G.utc;if(d===null)return new Date(NaN);if(z.u(d))return new Date;if(d instanceof Date)return new Date(d);if(typeof d=="string"&&!/Z$/i.test(d)){var w=d.match($);if(w){var C=w[2]-1||0,b=(w[7]||"0").substring(0,3);return o?new Date(Date.UTC(w[1],C,w[3]||1,w[4]||0,w[5]||0,w[6]||0,b)):new Date(w[1],C,w[3]||1,w[4]||0,w[5]||0,w[6]||0,b)}}return new Date(d)}(I),this.init()},E.init=function(){var I=this.$d;this.$y=I.getFullYear(),this.$M=I.getMonth(),this.$D=I.getDate(),this.$W=I.getDay(),this.$H=I.getHours(),this.$m=I.getMinutes(),this.$s=I.getSeconds(),this.$ms=I.getMilliseconds()},E.$utils=function(){return z},E.isValid=function(){return this.$d.toString()!==S},E.isSame=function(I,G){var d=A(I);return this.startOf(G)<=d&&d<=this.endOf(G)},E.isAfter=function(I,G){return A(I)<this.startOf(G)},E.isBefore=function(I,G){return this.endOf(G)<A(I)},E.$g=function(I,G,d){return z.u(I)?this[G]:this.set(d,I)},E.unix=function(){return Math.floor(this.valueOf()/1e3)},E.valueOf=function(){return this.$d.getTime()},E.startOf=function(I,G){var d=this,o=!!z.u(G)||G,w=z.p(I),C=function(ye,ve){var ke=z.w(d.$u?Date.UTC(d.$y,ve,ye):new Date(d.$y,ve,ye),d);return o?ke:ke.endOf(m)},b=function(ye,ve){return z.w(d.toDate()[ye].apply(d.toDate("s"),(o?[0,0,0,0]:[23,59,59,999]).slice(ve)),d)},O=this.$W,p=this.$M,j=this.$D,te="set"+(this.$u?"UTC":"");switch(w){case P:return o?C(1,0):C(31,11);case u:return o?C(1,p):C(0,p+1);case y:var ae=this.$locale().weekStart||0,ue=(O<ae?O+7:O)-ae;return C(o?j-ue:j+(6-ue),p);case m:case x:return b(te+"Hours",0);case g:return b(te+"Minutes",1);case v:return b(te+"Seconds",2);case r:return b(te+"Milliseconds",3);default:return this.clone()}},E.endOf=function(I){return this.startOf(I,!1)},E.$set=function(I,G){var d,o=z.p(I),w="set"+(this.$u?"UTC":""),C=(d={},d[m]=w+"Date",d[x]=w+"Date",d[u]=w+"Month",d[P]=w+"FullYear",d[g]=w+"Hours",d[v]=w+"Minutes",d[r]=w+"Seconds",d[c]=w+"Milliseconds",d)[o],b=o===m?this.$D+(G-this.$W):G;if(o===u||o===P){var O=this.clone().set(x,1);O.$d[C](b),O.init(),this.$d=O.set(x,Math.min(this.$D,O.daysInMonth())).$d}else C&&this.$d[C](b);return this.init(),this},E.set=function(I,G){return this.clone().$set(I,G)},E.get=function(I){return this[z.p(I)]()},E.add=function(I,G){var d,o=this;I=Number(I);var w=z.p(G),C=function(p){var j=A(o);return z.w(j.date(j.date()+Math.round(p*I)),o)};if(w===u)return this.set(u,this.$M+I);if(w===P)return this.set(P,this.$y+I);if(w===m)return C(1);if(w===y)return C(7);var b=(d={},d[v]=t,d[g]=i,d[r]=n,d)[w]||1,O=this.$d.getTime()+I*b;return z.w(O,this)},E.subtract=function(I,G){return this.add(-1*I,G)},E.format=function(I){var G=this,d=this.$locale();if(!this.isValid())return d.invalidDate||S;var o=I||"YYYY-MM-DDTHH:mm:ssZ",w=z.z(this),C=this.$H,b=this.$m,O=this.$M,p=d.weekdays,j=d.months,te=d.meridiem,ae=function(ve,ke,Pe,Ye){return ve&&(ve[ke]||ve(G,o))||Pe[ke].slice(0,Ye)},ue=function(ve){return z.s(C%12||12,ve,"0")},ye=te||function(ve,ke,Pe){var Ye=ve<12?"AM":"PM";return Pe?Ye.toLowerCase():Ye};return o.replace(K,function(ve,ke){return ke||function(Pe){switch(Pe){case"YY":return String(G.$y).slice(-2);case"YYYY":return z.s(G.$y,4,"0");case"M":return O+1;case"MM":return z.s(O+1,2,"0");case"MMM":return ae(d.monthsShort,O,j,3);case"MMMM":return ae(j,O);case"D":return G.$D;case"DD":return z.s(G.$D,2,"0");case"d":return String(G.$W);case"dd":return ae(d.weekdaysMin,G.$W,p,2);case"ddd":return ae(d.weekdaysShort,G.$W,p,3);case"dddd":return p[G.$W];case"H":return String(C);case"HH":return z.s(C,2,"0");case"h":return ue(1);case"hh":return ue(2);case"a":return ye(C,b,!0);case"A":return ye(C,b,!1);case"m":return String(b);case"mm":return z.s(b,2,"0");case"s":return String(G.$s);case"ss":return z.s(G.$s,2,"0");case"SSS":return z.s(G.$ms,3,"0");case"Z":return w}return null}(ve)||w.replace(":","")})},E.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},E.diff=function(I,G,d){var o,w=this,C=z.p(G),b=A(I),O=(b.utcOffset()-this.utcOffset())*t,p=this-b,j=function(){return z.m(w,b)};switch(C){case P:o=j()/12;break;case u:o=j();break;case V:o=j()/3;break;case y:o=(p-O)/6048e5;break;case m:o=(p-O)/864e5;break;case g:o=p/i;break;case v:o=p/t;break;case r:o=p/n;break;default:o=p}return d?o:z.a(o)},E.daysInMonth=function(){return this.endOf(u).$D},E.$locale=function(){return W[this.$L]},E.locale=function(I,G){if(!I)return this.$L;var d=this.clone(),o=B(I,G,!0);return o&&(d.$L=o),d},E.clone=function(){return z.w(this.$d,this)},E.toDate=function(){return new Date(this.valueOf())},E.toJSON=function(){return this.isValid()?this.toISOString():null},E.toISOString=function(){return this.$d.toISOString()},E.toString=function(){return this.$d.toUTCString()},R}(),ne=q.prototype;return A.prototype=ne,[["$ms",c],["$s",r],["$m",v],["$H",g],["$W",m],["$M",u],["$y",P],["$D",x]].forEach(function(R){ne[R[1]]=function(E){return this.$g(E,R[0],R[1])}}),A.extend=function(R,E){return R.$i||(R(E,q,A),R.$i=!0),A},A.locale=B,A.isDayjs=H,A.unix=function(R){return A(1e3*R)},A.en=W[Y],A.Ls=W,A.p={},A})})($n);var Va=$n.exports;const J=Je(Va),Ot=(l,s)=>[l>0?l-1:void 0,l,l<s?l+1:void 0],Pn=l=>Array.from(Array.from({length:l}).keys()),xn=l=>l.replace(/\W?m{1,2}|\W?ZZ/g,"").replace(/\W?h{1,2}|\W?s{1,3}|\W?a/gi,"").trim(),Tn=l=>l.replace(/\W?D{1,2}|\W?Do|\W?d{1,4}|\W?M{1,4}|\W?Y{2,4}/g,"").trim(),un=function(l,s){const n=ln(l),t=ln(s);return n&&t?l.getTime()===s.getTime():!n&&!t?l===s:!1},cn=function(l,s){const n=ge(l),t=ge(s);return n&&t?l.length!==s.length?!1:l.every((i,c)=>un(i,s[c])):!n&&!t?un(l,s):!1},dn=function(l,s,n){const t=Cn(s)||s==="x"?J(l).locale(n):J(l,s).locale(n);return t.isValid()?t:void 0},fn=function(l,s,n){return Cn(s)?l:s==="x"?+l:J(l).locale(n).format(s)},It=(l,s)=>{var n;const t=[],i=s==null?void 0:s();for(let c=0;c<l;c++)t.push((n=i==null?void 0:i.includes(c))!=null?n:!1);return t},wt=l=>ge(l)?l.map(s=>s.toDate()):l.toDate();var Vn={exports:{}};(function(l,s){(function(n,t){l.exports=t()})(Xe,function(){return function(n,t,i){var c=t.prototype,r=function(u){return u&&(u.indexOf?u:u.s)},v=function(u,V,P,x,S){var $=u.name?u:u.$locale(),K=r($[V]),U=r($[P]),h=K||U.map(function(Y){return Y.slice(0,x)});if(!S)return h;var f=$.weekStart;return h.map(function(Y,W){return h[(W+(f||0))%7]})},g=function(){return i.Ls[i.locale()]},m=function(u,V){return u.formats[V]||function(P){return P.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(x,S,$){return S||$.slice(1)})}(u.formats[V.toUpperCase()])},y=function(){var u=this;return{months:function(V){return V?V.format("MMMM"):v(u,"months")},monthsShort:function(V){return V?V.format("MMM"):v(u,"monthsShort","months",3)},firstDayOfWeek:function(){return u.$locale().weekStart||0},weekdays:function(V){return V?V.format("dddd"):v(u,"weekdays")},weekdaysMin:function(V){return V?V.format("dd"):v(u,"weekdaysMin","weekdays",2)},weekdaysShort:function(V){return V?V.format("ddd"):v(u,"weekdaysShort","weekdays",3)},longDateFormat:function(V){return m(u.$locale(),V)},meridiem:this.$locale().meridiem,ordinal:this.$locale().ordinal}};c.localeData=function(){return y.bind(this)()},i.localeData=function(){var u=g();return{firstDayOfWeek:function(){return u.weekStart||0},weekdays:function(){return i.weekdays()},weekdaysShort:function(){return i.weekdaysShort()},weekdaysMin:function(){return i.weekdaysMin()},months:function(){return i.months()},monthsShort:function(){return i.monthsShort()},longDateFormat:function(V){return m(u,V)},meridiem:u.meridiem,ordinal:u.ordinal}},i.months=function(){return v(g(),"months")},i.monthsShort=function(){return v(g(),"monthsShort","months",3)},i.weekdays=function(u){return v(g(),"weekdays",null,null,u)},i.weekdaysShort=function(u){return v(g(),"weekdaysShort","weekdays",3,u)},i.weekdaysMin=function(u){return v(g(),"weekdaysMin","weekdays",2,u)}}})})(Vn);var Ya=Vn.exports;const Oa=Je(Ya),Ia=["year","years","month","months","date","dates","week","datetime","datetimerange","daterange","monthrange","yearrange"],Be=l=>!l&&l!==0?[]:ge(l)?l:[l];var Yn={exports:{}};(function(l,s){(function(n,t){l.exports=t()})(Xe,function(){var n={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,i=/\d/,c=/\d\d/,r=/\d\d?/,v=/\d*[^-_:/,()\s\d]+/,g={},m=function($){return($=+$)+($>68?1900:2e3)},y=function($){return function(K){this[$]=+K}},u=[/[+-]\d\d:?(\d\d)?|Z/,function($){(this.zone||(this.zone={})).offset=function(K){if(!K||K==="Z")return 0;var U=K.match(/([+-]|\d\d)/g),h=60*U[1]+(+U[2]||0);return h===0?0:U[0]==="+"?-h:h}($)}],V=function($){var K=g[$];return K&&(K.indexOf?K:K.s.concat(K.f))},P=function($,K){var U,h=g.meridiem;if(h){for(var f=1;f<=24;f+=1)if($.indexOf(h(f,0,K))>-1){U=f>12;break}}else U=$===(K?"pm":"PM");return U},x={A:[v,function($){this.afternoon=P($,!1)}],a:[v,function($){this.afternoon=P($,!0)}],Q:[i,function($){this.month=3*($-1)+1}],S:[i,function($){this.milliseconds=100*+$}],SS:[c,function($){this.milliseconds=10*+$}],SSS:[/\d{3}/,function($){this.milliseconds=+$}],s:[r,y("seconds")],ss:[r,y("seconds")],m:[r,y("minutes")],mm:[r,y("minutes")],H:[r,y("hours")],h:[r,y("hours")],HH:[r,y("hours")],hh:[r,y("hours")],D:[r,y("day")],DD:[c,y("day")],Do:[v,function($){var K=g.ordinal,U=$.match(/\d+/);if(this.day=U[0],K)for(var h=1;h<=31;h+=1)K(h).replace(/\[|\]/g,"")===$&&(this.day=h)}],w:[r,y("week")],ww:[c,y("week")],M:[r,y("month")],MM:[c,y("month")],MMM:[v,function($){var K=V("months"),U=(V("monthsShort")||K.map(function(h){return h.slice(0,3)})).indexOf($)+1;if(U<1)throw new Error;this.month=U%12||U}],MMMM:[v,function($){var K=V("months").indexOf($)+1;if(K<1)throw new Error;this.month=K%12||K}],Y:[/[+-]?\d+/,y("year")],YY:[c,function($){this.year=m($)}],YYYY:[/\d{4}/,y("year")],Z:u,ZZ:u};function S($){var K,U;K=$,U=g&&g.formats;for(var h=($=K.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(A,z,q){var ne=q&&q.toUpperCase();return z||U[q]||n[q]||U[ne].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(R,E,I){return E||I.slice(1)})})).match(t),f=h.length,Y=0;Y<f;Y+=1){var W=h[Y],F=x[W],H=F&&F[0],B=F&&F[1];h[Y]=B?{regex:H,parser:B}:W.replace(/^\[|\]$/g,"")}return function(A){for(var z={},q=0,ne=0;q<f;q+=1){var R=h[q];if(typeof R=="string")ne+=R.length;else{var E=R.regex,I=R.parser,G=A.slice(ne),d=E.exec(G)[0];I.call(z,d),A=A.replace(d,"")}}return function(o){var w=o.afternoon;if(w!==void 0){var C=o.hours;w?C<12&&(o.hours+=12):C===12&&(o.hours=0),delete o.afternoon}}(z),z}}return function($,K,U){U.p.customParseFormat=!0,$&&$.parseTwoDigitYear&&(m=$.parseTwoDigitYear);var h=K.prototype,f=h.parse;h.parse=function(Y){var W=Y.date,F=Y.utc,H=Y.args;this.$u=F;var B=H[1];if(typeof B=="string"){var A=H[2]===!0,z=H[3]===!0,q=A||z,ne=H[2];z&&(ne=H[2]),g=this.$locale(),!A&&ne&&(g=U.Ls[ne]),this.$d=function(G,d,o,w){try{if(["x","X"].indexOf(d)>-1)return new Date((d==="X"?1e3:1)*G);var C=S(d)(G),b=C.year,O=C.month,p=C.day,j=C.hours,te=C.minutes,ae=C.seconds,ue=C.milliseconds,ye=C.zone,ve=C.week,ke=new Date,Pe=p||(b||O?1:ke.getDate()),Ye=b||ke.getFullYear(),we=0;b&&!O||(we=O>0?O-1:ke.getMonth());var Ae,Oe=j||0,Ke=te||0,$e=ae||0,se=ue||0;return ye?new Date(Date.UTC(Ye,we,Pe,Oe,Ke,$e,se+60*ye.offset*1e3)):o?new Date(Date.UTC(Ye,we,Pe,Oe,Ke,$e,se)):(Ae=new Date(Ye,we,Pe,Oe,Ke,$e,se),ve&&(Ae=w(Ae).week(ve).toDate()),Ae)}catch{return new Date("")}}(W,B,F,U),this.init(),ne&&ne!==!0&&(this.$L=this.locale(ne).$L),q&&W!=this.format(B)&&(this.$d=new Date("")),g={}}else if(B instanceof Array)for(var R=B.length,E=1;E<=R;E+=1){H[1]=B[E-1];var I=U.apply(this,H);if(I.isValid()){this.$d=I.$d,this.$L=I.$L,this.init();break}E===R&&(this.$d=new Date(""))}else f.call(this,Y)}}})})(Yn);var Ra=Yn.exports;const Aa=Je(Ra);var On={exports:{}};(function(l,s){(function(n,t){l.exports=t()})(Xe,function(){return function(n,t){var i=t.prototype,c=i.format;i.format=function(r){var v=this,g=this.$locale();if(!this.isValid())return c.bind(this)(r);var m=this.$utils(),y=(r||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(u){switch(u){case"Q":return Math.ceil((v.$M+1)/3);case"Do":return g.ordinal(v.$D);case"gggg":return v.weekYear();case"GGGG":return v.isoWeekYear();case"wo":return g.ordinal(v.week(),"W");case"w":case"ww":return m.s(v.week(),u==="w"?1:2,"0");case"W":case"WW":return m.s(v.isoWeek(),u==="W"?1:2,"0");case"k":case"kk":return m.s(String(v.$H===0?24:v.$H),u==="k"?1:2,"0");case"X":return Math.floor(v.$d.getTime()/1e3);case"x":return v.$d.getTime();case"z":return"["+v.offsetName()+"]";case"zzz":return"["+v.offsetName("long")+"]";default:return u}});return c.bind(this)(y)}}})})(On);var Ea=On.exports;const Ba=Je(Ea);var In={exports:{}};(function(l,s){(function(n,t){l.exports=t()})(Xe,function(){var n="week",t="year";return function(i,c,r){var v=c.prototype;v.week=function(g){if(g===void 0&&(g=null),g!==null)return this.add(7*(g-this.week()),"day");var m=this.$locale().yearStart||1;if(this.month()===11&&this.date()>25){var y=r(this).startOf(t).add(1,t).date(m),u=r(this).endOf(n);if(y.isBefore(u))return 1}var V=r(this).startOf(t).date(m).startOf(n).subtract(1,"millisecond"),P=this.diff(V,n,!0);return P<0?r(this).startOf("week").week():Math.ceil(P)},v.weeks=function(g){return g===void 0&&(g=null),this.week(g)}}})})(In);var Fa=In.exports;const Na=Je(Fa);var Rn={exports:{}};(function(l,s){(function(n,t){l.exports=t()})(Xe,function(){return function(n,t){t.prototype.weekYear=function(){var i=this.month(),c=this.week(),r=this.year();return c===1&&i===11?r+1:i===0&&c>=52?r-1:r}}})})(Rn);var Wa=Rn.exports;const La=Je(Wa);var An={exports:{}};(function(l,s){(function(n,t){l.exports=t()})(Xe,function(){return function(n,t,i){t.prototype.dayOfYear=function(c){var r=Math.round((i(this).startOf("day")-i(this).startOf("year"))/864e5)+1;return c==null?r:this.add(c-r,"day")}}})})(An);var Ua=An.exports;const ja=Je(Ua);var En={exports:{}};(function(l,s){(function(n,t){l.exports=t()})(Xe,function(){return function(n,t){t.prototype.isSameOrAfter=function(i,c){return this.isSame(i,c)||this.isAfter(i,c)}}})})(En);var za=En.exports;const Za=Je(za);var Bn={exports:{}};(function(l,s){(function(n,t){l.exports=t()})(Xe,function(){return function(n,t){t.prototype.isSameOrBefore=function(i,c){return this.isSame(i,c)||this.isBefore(i,c)}}})})(Bn);var Ha=Bn.exports;const Ka=Je(Ha),vn=["hours","minutes","seconds"],Wt="HH:mm:ss",dt="YYYY-MM-DD",Ga={date:dt,dates:dt,week:"gggg[w]ww",year:"YYYY",years:"YYYY",month:"YYYY-MM",months:"YYYY-MM",datetime:`${dt} ${Wt}`,monthrange:"YYYY-MM",yearrange:"YYYY",daterange:dt,datetimerange:`${dt} ${Wt}`},Fn=Me({disabledHours:{type:re(Function)},disabledMinutes:{type:re(Function)},disabledSeconds:{type:re(Function)}}),Qa=Me({visible:Boolean,actualVisible:{type:Boolean,default:void 0},format:{type:String,default:""}}),Nn=Me({id:{type:re([Array,String])},name:{type:re([Array,String])},popperClass:{type:String,default:""},format:String,valueFormat:String,dateFormat:String,timeFormat:String,type:{type:String,default:""},clearable:{type:Boolean,default:!0},clearIcon:{type:re([String,Object]),default:aa},editable:{type:Boolean,default:!0},prefixIcon:{type:re([String,Object]),default:""},size:na,readonly:Boolean,disabled:Boolean,placeholder:{type:String,default:""},popperOptions:{type:re(Object),default:()=>({})},modelValue:{type:re([Date,Array,String,Number]),default:""},rangeSeparator:{type:String,default:"-"},startPlaceholder:String,endPlaceholder:String,defaultValue:{type:re([Date,Array])},defaultTime:{type:re([Date,Array])},isRange:Boolean,...Fn,disabledDate:{type:Function},cellClassName:{type:Function},shortcuts:{type:Array,default:()=>[]},arrowControl:Boolean,tabindex:{type:re([String,Number]),default:0},validateEvent:{type:Boolean,default:!0},unlinkPanels:Boolean,placement:{type:re(String),values:ka,default:"bottom"},fallbackPlacements:{type:re(Array),default:["bottom","top","right","left"]},...ta,...ea(["ariaLabel"]),showNow:{type:Boolean,default:!0}}),qa=Me({id:{type:re(Array)},name:{type:re(Array)},modelValue:{type:re([Array,String])},startPlaceholder:String,endPlaceholder:String,disabled:Boolean}),Xa=he({name:"PickerRangeTrigger",inheritAttrs:!1}),Ja=he({...Xa,props:qa,emits:["mouseenter","mouseleave","click","touchstart","focus","blur","startInput","endInput","startChange","endChange"],setup(l,{expose:s,emit:n}){const t=la(),i=Ve("date"),c=Ve("range"),r=X(),v=X(),{wrapperRef:g,isFocused:m}=Sn(r),y=f=>{n("click",f)},u=f=>{n("mouseenter",f)},V=f=>{n("mouseleave",f)},P=f=>{n("mouseenter",f)},x=f=>{n("startInput",f)},S=f=>{n("endInput",f)},$=f=>{n("startChange",f)},K=f=>{n("endChange",f)};return s({focus:()=>{var f;(f=r.value)==null||f.focus()},blur:()=>{var f,Y;(f=r.value)==null||f.blur(),(Y=v.value)==null||Y.blur()}}),(f,Y)=>(N(),Q("div",{ref_key:"wrapperRef",ref:g,class:T([e(i).is("active",e(m)),f.$attrs.class]),style:At(f.$attrs.style),onClick:y,onMouseenter:u,onMouseleave:V,onTouchstartPassive:P},[ie(f.$slots,"prefix"),L("input",Mt(e(t),{id:f.id&&f.id[0],ref_key:"inputRef",ref:r,name:f.name&&f.name[0],placeholder:f.startPlaceholder,value:f.modelValue&&f.modelValue[0],class:e(c).b("input"),disabled:f.disabled,onInput:x,onChange:$}),null,16,["id","name","placeholder","value","disabled"]),ie(f.$slots,"range-separator"),L("input",Mt(e(t),{id:f.id&&f.id[1],ref_key:"endInputRef",ref:v,name:f.name&&f.name[1],placeholder:f.endPlaceholder,value:f.modelValue&&f.modelValue[1],class:e(c).b("input"),disabled:f.disabled,onInput:S,onChange:K}),null,16,["id","name","placeholder","value","disabled"]),ie(f.$slots,"suffix")],38))}});var el=je(Ja,[["__file","picker-range-trigger.vue"]]);const tl=he({name:"Picker"}),nl=he({...tl,props:Nn,emits:[$t,Pt,"focus","blur","clear","calendar-change","panel-change","visible-change","keydown"],setup(l,{expose:s,emit:n}){const t=l,i=Kt(),{lang:c}=We(),r=Ve("date"),v=Ve("input"),g=Ve("range"),{form:m,formItem:y}=sa(),u=Re("ElPopperOptions",{}),{valueOnClear:V}=ra(t,null),P=X(),x=X(),S=X(!1),$=X(!1),K=X(null);let U=!1;const{isFocused:h,handleFocus:f,handleBlur:Y}=Sn(x,{beforeFocus(){return t.readonly||o.value},afterFocus(){S.value=!0},beforeBlur(a){var M;return!U&&((M=P.value)==null?void 0:M.isFocusInsideContent(a))},afterBlur(){Ge(),S.value=!1,U=!1,t.validateEvent&&(y==null||y.validate("blur").catch(a=>rn()))}}),W=Z(()=>[r.b("editor"),r.bm("editor",t.type),v.e("wrapper"),r.is("disabled",o.value),r.is("active",S.value),g.b("editor"),Oe?g.bm("editor",Oe.value):"",i.class]),F=Z(()=>[v.e("icon"),g.e("close-icon"),ue.value?"":g.e("close-icon--hidden")]);xe(S,a=>{a?Fe(()=>{a&&(K.value=t.modelValue)}):(se.value=null,Fe(()=>{H(t.modelValue)}))});const H=(a,M)=>{(M||!cn(a,K.value))&&(n(Pt,a),M&&(K.value=a),t.validateEvent&&(y==null||y.validate("change").catch(le=>rn())))},B=a=>{if(!cn(t.modelValue,a)){let M;ge(a)?M=a.map(le=>fn(le,t.valueFormat,c.value)):a&&(M=fn(a,t.valueFormat,c.value)),n($t,a&&M,c.value)}},A=a=>{n("keydown",a)},z=Z(()=>x.value?Array.from(x.value.$el.querySelectorAll("input")):[]),q=(a,M,le)=>{const ce=z.value;ce.length&&(!le||le==="min"?(ce[0].setSelectionRange(a,M),ce[0].focus()):le==="max"&&(ce[1].setSelectionRange(a,M),ce[1].focus()))},ne=(a="",M=!1)=>{S.value=M;let le;ge(a)?le=a.map(ce=>ce.toDate()):le=a&&a.toDate(),se.value=null,B(le)},R=()=>{$.value=!0},E=()=>{n("visible-change",!0)},I=()=>{$.value=!1,S.value=!1,n("visible-change",!1)},G=()=>{S.value=!0},d=()=>{S.value=!1},o=Z(()=>t.disabled||(m==null?void 0:m.disabled)),w=Z(()=>{let a;if(ve.value?De.value.getDefaultValue&&(a=De.value.getDefaultValue()):ge(t.modelValue)?a=t.modelValue.map(M=>dn(M,t.valueFormat,c.value)):a=dn(t.modelValue,t.valueFormat,c.value),De.value.getRangeAvailableTime){const M=De.value.getRangeAvailableTime(a);$a(M,a)||(a=M,ve.value||B(wt(a)))}return ge(a)&&a.some(M=>!M)&&(a=[]),a}),C=Z(()=>{if(!De.value.panelReady)return"";const a=Ne(w.value);return ge(se.value)?[se.value[0]||a&&a[0]||"",se.value[1]||a&&a[1]||""]:se.value!==null?se.value:!O.value&&ve.value||!S.value&&ve.value?"":a?p.value||j.value||te.value?a.join(", "):a:""}),b=Z(()=>t.type.includes("time")),O=Z(()=>t.type.startsWith("time")),p=Z(()=>t.type==="dates"),j=Z(()=>t.type==="months"),te=Z(()=>t.type==="years"),ae=Z(()=>t.prefixIcon||(b.value?ia:ua)),ue=X(!1),ye=a=>{t.readonly||o.value||(ue.value&&(a.stopPropagation(),De.value.handleClear?De.value.handleClear():B(V.value),H(V.value,!0),ue.value=!1,I()),n("clear"))},ve=Z(()=>{const{modelValue:a}=t;return!a||ge(a)&&!a.filter(Boolean).length}),ke=async a=>{var M;t.readonly||o.value||(((M=a.target)==null?void 0:M.tagName)!=="INPUT"||h.value)&&(S.value=!0)},Pe=()=>{t.readonly||o.value||!ve.value&&t.clearable&&(ue.value=!0)},Ye=()=>{ue.value=!1},we=a=>{var M;t.readonly||o.value||(((M=a.touches[0].target)==null?void 0:M.tagName)!=="INPUT"||h.value)&&(S.value=!0)},Ae=Z(()=>t.type.includes("range")),Oe=oa(),Ke=Z(()=>{var a,M;return(M=(a=e(P))==null?void 0:a.popperRef)==null?void 0:M.contentRef}),$e=ca(x,a=>{const M=e(Ke),le=da(x);M&&(a.target===M||a.composedPath().includes(M))||a.target===le||le&&a.composedPath().includes(le)||(S.value=!1)});wn(()=>{$e==null||$e()});const se=X(null),Ge=()=>{if(se.value){const a=Ie(C.value);a&&et(a)&&(B(wt(a)),se.value=null)}se.value===""&&(B(V.value),H(V.value,!0),se.value=null)},Ie=a=>a?De.value.parseUserInput(a):null,Ne=a=>a?De.value.formatToString(a):null,et=a=>De.value.isValidValue(a),st=async a=>{if(t.readonly||o.value)return;const{code:M}=a;if(A(a),M===Se.esc){S.value===!0&&(S.value=!1,a.preventDefault(),a.stopPropagation());return}if(M===Se.down&&(De.value.handleFocusPicker&&(a.preventDefault(),a.stopPropagation()),S.value===!1&&(S.value=!0,await Fe()),De.value.handleFocusPicker)){De.value.handleFocusPicker();return}if(M===Se.tab){U=!0;return}if(M===Se.enter||M===Se.numpadEnter){(se.value===null||se.value===""||et(Ie(C.value)))&&(Ge(),S.value=!1),a.stopPropagation();return}if(se.value){a.stopPropagation();return}De.value.handleKeydownInput&&De.value.handleKeydownInput(a)},rt=a=>{se.value=a,S.value||(S.value=!0)},ot=a=>{const M=a.target;se.value?se.value=[M.value,se.value[1]]:se.value=[M.value,null]},it=a=>{const M=a.target;se.value?se.value=[se.value[0],M.value]:se.value=[null,M.value]},tt=()=>{var a;const M=se.value,le=Ie(M&&M[0]),ce=e(w);if(le&&le.isValid()){se.value=[Ne(le),((a=C.value)==null?void 0:a[1])||null];const Ee=[le,ce&&(ce[1]||null)];et(Ee)&&(B(wt(Ee)),se.value=null)}},Qe=()=>{var a;const M=e(se),le=Ie(M&&M[1]),ce=e(w);if(le&&le.isValid()){se.value=[((a=e(C))==null?void 0:a[0])||null,Ne(le)];const Ee=[ce&&ce[0],le];et(Ee)&&(B(wt(Ee)),se.value=null)}},De=X({}),ut=a=>{De.value[a[0]]=a[1],De.value.panelReady=!0},ct=a=>{n("calendar-change",a)},nt=(a,M,le)=>{n("panel-change",a,M,le)},D=()=>{var a;(a=x.value)==null||a.focus()},_=()=>{var a;(a=x.value)==null||a.blur()};return St("EP_PICKER_BASE",{props:t}),s({focus:D,blur:_,handleOpen:G,handleClose:d,onPick:ne}),(a,M)=>(N(),Ce(e(wa),Mt({ref_key:"refPopper",ref:P,visible:S.value,effect:"light",pure:"",trigger:"click"},a.$attrs,{role:"dialog",teleported:"",transition:`${e(r).namespace.value}-zoom-in-top`,"popper-class":[`${e(r).namespace.value}-picker__popper`,a.popperClass],"popper-options":e(u),"fallback-placements":a.fallbackPlacements,"gpu-acceleration":!1,placement:a.placement,"stop-popper-mouse-event":!1,"hide-after":0,persistent:"",onBeforeShow:R,onShow:E,onHide:I}),{default:ee(()=>[e(Ae)?(N(),Ce(el,{key:1,id:a.id,ref_key:"inputRef",ref:x,"model-value":e(C),name:a.name,disabled:e(o),readonly:!a.editable||a.readonly,"start-placeholder":a.startPlaceholder,"end-placeholder":a.endPlaceholder,class:T(e(W)),style:At(a.$attrs.style),"aria-label":a.ariaLabel,tabindex:a.tabindex,autocomplete:"off",role:"combobox",onClick:ke,onFocus:e(f),onBlur:e(Y),onStartInput:ot,onStartChange:tt,onEndInput:it,onEndChange:Qe,onMousedown:ke,onMouseenter:Pe,onMouseleave:Ye,onTouchstartPassive:we,onKeydown:st},{prefix:ee(()=>[e(ae)?(N(),Ce(e(pe),{key:0,class:T([e(v).e("icon"),e(g).e("icon")])},{default:ee(()=>[(N(),Ce(yt(e(ae))))]),_:1},8,["class"])):de("v-if",!0)]),"range-separator":ee(()=>[ie(a.$slots,"range-separator",{},()=>[L("span",{class:T(e(g).b("separator"))},oe(a.rangeSeparator),3)])]),suffix:ee(()=>[a.clearIcon?(N(),Ce(e(pe),{key:0,class:T(e(F)),onMousedown:Ze(e(sn),["prevent"]),onClick:ye},{default:ee(()=>[(N(),Ce(yt(a.clearIcon)))]),_:1},8,["class","onMousedown"])):de("v-if",!0)]),_:3},8,["id","model-value","name","disabled","readonly","start-placeholder","end-placeholder","class","style","aria-label","tabindex","onFocus","onBlur"])):(N(),Ce(e(qe),{key:0,id:a.id,ref_key:"inputRef",ref:x,"container-role":"combobox","model-value":e(C),name:a.name,size:e(Oe),disabled:e(o),placeholder:a.placeholder,class:T([e(r).b("editor"),e(r).bm("editor",a.type),a.$attrs.class]),style:At(a.$attrs.style),readonly:!a.editable||a.readonly||e(p)||e(j)||e(te)||a.type==="week","aria-label":a.ariaLabel,tabindex:a.tabindex,"validate-event":!1,onInput:rt,onFocus:e(f),onBlur:e(Y),onKeydown:st,onChange:Ge,onMousedown:ke,onMouseenter:Pe,onMouseleave:Ye,onTouchstartPassive:we,onClick:Ze(()=>{},["stop"])},{prefix:ee(()=>[e(ae)?(N(),Ce(e(pe),{key:0,class:T(e(v).e("icon")),onMousedown:Ze(ke,["prevent"]),onTouchstartPassive:we},{default:ee(()=>[(N(),Ce(yt(e(ae))))]),_:1},8,["class","onMousedown"])):de("v-if",!0)]),suffix:ee(()=>[ue.value&&a.clearIcon?(N(),Ce(e(pe),{key:0,class:T(`${e(v).e("icon")} clear-icon`),onMousedown:Ze(e(sn),["prevent"]),onClick:ye},{default:ee(()=>[(N(),Ce(yt(a.clearIcon)))]),_:1},8,["class","onMousedown"])):de("v-if",!0)]),_:1},8,["id","model-value","name","size","disabled","placeholder","class","style","readonly","aria-label","tabindex","onFocus","onBlur","onClick"]))]),content:ee(()=>[ie(a.$slots,"default",{visible:S.value,actualVisible:$.value,parsedValue:e(w),format:a.format,dateFormat:a.dateFormat,timeFormat:a.timeFormat,unlinkPanels:a.unlinkPanels,type:a.type,defaultValue:a.defaultValue,showNow:a.showNow,onPick:ne,onSelectRange:q,onSetPickerOption:ut,onCalendarChange:ct,onPanelChange:nt,onMousedown:Ze(()=>{},["stop"])})]),_:3},16,["visible","transition","popper-class","popper-options","fallback-placements","placement"]))}});var al=je(nl,[["__file","picker.vue"]]);const ll=Me({...Qa,datetimeRole:String,parsedValue:{type:re(Object)}}),sl=({getAvailableHours:l,getAvailableMinutes:s,getAvailableSeconds:n})=>{const t=(r,v,g,m)=>{const y={hour:l,minute:s,second:n};let u=r;return["hour","minute","second"].forEach(V=>{if(y[V]){let P;const x=y[V];switch(V){case"minute":{P=x(u.hour(),v,m);break}case"second":{P=x(u.hour(),u.minute(),v,m);break}default:{P=x(v,m);break}}if(P!=null&&P.length&&!P.includes(u[V]())){const S=g?0:P.length-1;u=u[V](P[S])}}}),u},i={};return{timePickerOptions:i,getAvailableTime:t,onSetOption:([r,v])=>{i[r]=v}}},Rt=l=>{const s=(t,i)=>t||i,n=t=>t!==!0;return l.map(s).filter(n)},Wn=(l,s,n)=>({getHoursList:(r,v)=>It(24,l&&(()=>l==null?void 0:l(r,v))),getMinutesList:(r,v,g)=>It(60,s&&(()=>s==null?void 0:s(r,v,g))),getSecondsList:(r,v,g,m)=>It(60,n&&(()=>n==null?void 0:n(r,v,g,m)))}),rl=(l,s,n)=>{const{getHoursList:t,getMinutesList:i,getSecondsList:c}=Wn(l,s,n);return{getAvailableHours:(m,y)=>Rt(t(m,y)),getAvailableMinutes:(m,y,u)=>Rt(i(m,y,u)),getAvailableSeconds:(m,y,u,V)=>Rt(c(m,y,u,V))}},ol=l=>{const s=X(l.parsedValue);return xe(()=>l.visible,n=>{n||(s.value=l.parsedValue)}),s},il=Me({role:{type:String,required:!0},spinnerDate:{type:re(Object),required:!0},showSeconds:{type:Boolean,default:!0},arrowControl:Boolean,amPmMode:{type:re(String),default:""},...Fn}),ul=he({__name:"basic-time-spinner",props:il,emits:[Pt,"select-range","set-option"],setup(l,{emit:s}){const n=l,t=Re("EP_PICKER_BASE"),{isRange:i,format:c}=t.props,r=Ve("time"),{getHoursList:v,getMinutesList:g,getSecondsList:m}=Wn(n.disabledHours,n.disabledMinutes,n.disabledSeconds);let y=!1;const u=X(),V=X(),P=X(),x=X(),S={hours:V,minutes:P,seconds:x},$=Z(()=>n.showSeconds?vn:vn.slice(0,2)),K=Z(()=>{const{spinnerDate:b}=n,O=b.hour(),p=b.minute(),j=b.second();return{hours:O,minutes:p,seconds:j}}),U=Z(()=>{const{hours:b,minutes:O}=e(K),{role:p,spinnerDate:j}=n,te=i?void 0:j;return{hours:v(p,te),minutes:g(b,p,te),seconds:m(b,O,p,te)}}),h=Z(()=>{const{hours:b,minutes:O,seconds:p}=e(K);return{hours:Ot(b,23),minutes:Ot(O,59),seconds:Ot(p,59)}}),f=Pa(b=>{y=!1,F(b)},200),Y=b=>{if(!!!n.amPmMode)return"";const p=n.amPmMode==="A";let j=b<12?" am":" pm";return p&&(j=j.toUpperCase()),j},W=b=>{let O=[0,0];if(!c||c===Wt)switch(b){case"hours":O=[0,2];break;case"minutes":O=[3,5];break;case"seconds":O=[6,8];break}const[p,j]=O;s("select-range",p,j),u.value=b},F=b=>{A(b,e(K)[b])},H=()=>{F("hours"),F("minutes"),F("seconds")},B=b=>b.querySelector(`.${r.namespace.value}-scrollbar__wrap`),A=(b,O)=>{if(n.arrowControl)return;const p=e(S[b]);p&&p.$el&&(B(p.$el).scrollTop=Math.max(0,O*z(b)))},z=b=>{const O=e(S[b]),p=O==null?void 0:O.$el.querySelector("li");return p&&Number.parseFloat(fa(p,"height"))||0},q=()=>{R(1)},ne=()=>{R(-1)},R=b=>{u.value||W("hours");const O=u.value,p=e(K)[O],j=u.value==="hours"?24:60,te=E(O,p,b,j);I(O,te),A(O,te),Fe(()=>W(O))},E=(b,O,p,j)=>{let te=(O+p+j)%j;const ae=e(U)[b];for(;ae[te]&&te!==O;)te=(te+p+j)%j;return te},I=(b,O)=>{if(e(U)[b][O])return;const{hours:te,minutes:ae,seconds:ue}=e(K);let ye;switch(b){case"hours":ye=n.spinnerDate.hour(O).minute(ae).second(ue);break;case"minutes":ye=n.spinnerDate.hour(te).minute(O).second(ue);break;case"seconds":ye=n.spinnerDate.hour(te).minute(ae).second(O);break}s(Pt,ye)},G=(b,{value:O,disabled:p})=>{p||(I(b,O),W(b),A(b,O))},d=b=>{const O=e(S[b]);if(!O)return;y=!0,f(b);const p=Math.min(Math.round((B(O.$el).scrollTop-(o(b)*.5-10)/z(b)+3)/z(b)),b==="hours"?23:59);I(b,p)},o=b=>e(S[b]).$el.offsetHeight,w=()=>{const b=O=>{const p=e(S[O]);p&&p.$el&&(B(p.$el).onscroll=()=>{d(O)})};b("hours"),b("minutes"),b("seconds")};Dn(()=>{Fe(()=>{!n.arrowControl&&w(),H(),n.role==="start"&&W("hours")})});const C=(b,O)=>{S[O].value=b??void 0};return s("set-option",[`${n.role}_scrollDown`,R]),s("set-option",[`${n.role}_emitSelectRange`,W]),xe(()=>n.spinnerDate,()=>{y||H()}),(b,O)=>(N(),Q("div",{class:T([e(r).b("spinner"),{"has-seconds":b.showSeconds}])},[b.arrowControl?de("v-if",!0):(N(!0),Q(be,{key:0},Te(e($),p=>(N(),Ce(e(Da),{key:p,ref_for:!0,ref:j=>C(j,p),class:T(e(r).be("spinner","wrapper")),"wrap-style":"max-height: inherit;","view-class":e(r).be("spinner","list"),noresize:"",tag:"ul",onMouseenter:j=>W(p),onMousemove:j=>F(p)},{default:ee(()=>[(N(!0),Q(be,null,Te(e(U)[p],(j,te)=>(N(),Q("li",{key:te,class:T([e(r).be("spinner","item"),e(r).is("active",te===e(K)[p]),e(r).is("disabled",j)]),onClick:ae=>G(p,{value:te,disabled:j})},[p==="hours"?(N(),Q(be,{key:0},[fe(oe(("0"+(b.amPmMode?te%12||12:te)).slice(-2))+oe(Y(te)),1)],64)):(N(),Q(be,{key:1},[fe(oe(("0"+te).slice(-2)),1)],64))],10,["onClick"]))),128))]),_:2},1032,["class","view-class","onMouseenter","onMousemove"]))),128)),b.arrowControl?(N(!0),Q(be,{key:1},Te(e($),p=>(N(),Q("div",{key:p,class:T([e(r).be("spinner","wrapper"),e(r).is("arrow")]),onMouseenter:j=>W(p)},[_e((N(),Ce(e(pe),{class:T(["arrow-up",e(r).be("spinner","arrow")])},{default:ee(()=>[k(e(va))]),_:1},8,["class"])),[[e(on),ne]]),_e((N(),Ce(e(pe),{class:T(["arrow-down",e(r).be("spinner","arrow")])},{default:ee(()=>[k(e(ma))]),_:1},8,["class"])),[[e(on),q]]),L("ul",{class:T(e(r).be("spinner","list"))},[(N(!0),Q(be,null,Te(e(h)[p],(j,te)=>(N(),Q("li",{key:te,class:T([e(r).be("spinner","item"),e(r).is("active",j===e(K)[p]),e(r).is("disabled",e(U)[p][j])])},[e(pa)(j)?(N(),Q(be,{key:0},[p==="hours"?(N(),Q(be,{key:0},[fe(oe(("0"+(b.amPmMode?j%12||12:j)).slice(-2))+oe(Y(j)),1)],64)):(N(),Q(be,{key:1},[fe(oe(("0"+j).slice(-2)),1)],64))],64)):de("v-if",!0)],2))),128))],2)],42,["onMouseenter"]))),128)):de("v-if",!0)],2))}});var cl=je(ul,[["__file","basic-time-spinner.vue"]]);const dl=he({__name:"panel-time-pick",props:ll,emits:["pick","select-range","set-picker-option"],setup(l,{emit:s}){const n=l,t=Re("EP_PICKER_BASE"),{arrowControl:i,disabledHours:c,disabledMinutes:r,disabledSeconds:v,defaultValue:g}=t.props,{getAvailableHours:m,getAvailableMinutes:y,getAvailableSeconds:u}=rl(c,r,v),V=Ve("time"),{t:P,lang:x}=We(),S=X([0,2]),$=ol(n),K=Z(()=>ha(n.actualVisible)?`${V.namespace.value}-zoom-in-top`:""),U=Z(()=>n.format.includes("ss")),h=Z(()=>n.format.includes("A")?"A":n.format.includes("a")?"a":""),f=d=>{const o=J(d).locale(x.value),w=R(o);return o.isSame(w)},Y=()=>{s("pick",$.value,!1)},W=(d=!1,o=!1)=>{o||s("pick",n.parsedValue,d)},F=d=>{if(!n.visible)return;const o=R(d).millisecond(0);s("pick",o,!0)},H=(d,o)=>{s("select-range",d,o),S.value=[d,o]},B=d=>{const o=[0,3].concat(U.value?[6]:[]),w=["hours","minutes"].concat(U.value?["seconds"]:[]),b=(o.indexOf(S.value[0])+d+o.length)%o.length;z.start_emitSelectRange(w[b])},A=d=>{const o=d.code,{left:w,right:C,up:b,down:O}=Se;if([w,C].includes(o)){B(o===w?-1:1),d.preventDefault();return}if([b,O].includes(o)){const p=o===b?-1:1;z.start_scrollDown(p),d.preventDefault();return}},{timePickerOptions:z,onSetOption:q,getAvailableTime:ne}=sl({getAvailableHours:m,getAvailableMinutes:y,getAvailableSeconds:u}),R=d=>ne(d,n.datetimeRole||"",!0),E=d=>d?J(d,n.format).locale(x.value):null,I=d=>d?d.format(n.format):null,G=()=>J(g).locale(x.value);return s("set-picker-option",["isValidValue",f]),s("set-picker-option",["formatToString",I]),s("set-picker-option",["parseUserInput",E]),s("set-picker-option",["handleKeydownInput",A]),s("set-picker-option",["getRangeAvailableTime",R]),s("set-picker-option",["getDefaultValue",G]),(d,o)=>(N(),Ce(Gn,{name:e(K)},{default:ee(()=>[d.actualVisible||d.visible?(N(),Q("div",{key:0,class:T(e(V).b("panel"))},[L("div",{class:T([e(V).be("panel","content"),{"has-seconds":e(U)}])},[k(cl,{ref:"spinner",role:d.datetimeRole||"start","arrow-control":e(i),"show-seconds":e(U),"am-pm-mode":e(h),"spinner-date":d.parsedValue,"disabled-hours":e(c),"disabled-minutes":e(r),"disabled-seconds":e(v),onChange:F,onSetOption:e(q),onSelectRange:H},null,8,["role","arrow-control","show-seconds","am-pm-mode","spinner-date","disabled-hours","disabled-minutes","disabled-seconds","onSetOption"])],2),L("div",{class:T(e(V).be("panel","footer"))},[L("button",{type:"button",class:T([e(V).be("panel","btn"),"cancel"]),onClick:Y},oe(e(P)("el.datepicker.cancel")),3),L("button",{type:"button",class:T([e(V).be("panel","btn"),"confirm"]),onClick:w=>W()},oe(e(P)("el.datepicker.confirm")),11,["onClick"])],2)],2)):de("v-if",!0)]),_:1},8,["name"]))}});var Lt=je(dl,[["__file","panel-time-pick.vue"]]);const Yt=Symbol(),fl=Me({...Nn,type:{type:re(String),default:"date"}}),vl=["date","dates","year","years","month","months","week","range"],Jt=Me({disabledDate:{type:re(Function)},date:{type:re(Object),required:!0},minDate:{type:re(Object)},maxDate:{type:re(Object)},parsedValue:{type:re([Object,Array])},rangeState:{type:re(Object),default:()=>({endDate:null,selecting:!1})}}),Ln=Me({type:{type:re(String),required:!0,values:Ia},dateFormat:String,timeFormat:String,showNow:{type:Boolean,default:!0}}),en=Me({unlinkPanels:Boolean,parsedValue:{type:re(Array)}}),tn=l=>({type:String,values:vl,default:l}),ml=Me({...Ln,parsedValue:{type:re([Object,Array])},visible:{type:Boolean},format:{type:String,default:""}}),vt=l=>{if(!ge(l))return!1;const[s,n]=l;return J.isDayjs(s)&&J.isDayjs(n)&&J(s).isValid()&&J(n).isValid()&&s.isSameOrBefore(n)},nn=(l,{lang:s,unit:n,unlinkPanels:t})=>{let i;if(ge(l)){let[c,r]=l.map(v=>J(v).locale(s));return t||(r=c.add(1,n)),[c,r]}else l?i=J(l):i=J();return i=i.locale(s),[i,i.add(1,n)]},pl=(l,s,{columnIndexOffset:n,startDate:t,nextEndDate:i,now:c,unit:r,relativeDateGetter:v,setCellMetadata:g,setRowMetadata:m})=>{for(let y=0;y<l.row;y++){const u=s[y];for(let V=0;V<l.column;V++){let P=u[V+n];P||(P={row:y,column:V,type:"normal",inRange:!1,start:!1,end:!1});const x=y*l.column+V,S=v(x);P.dayjs=S,P.date=S.toDate(),P.timestamp=S.valueOf(),P.type="normal",P.inRange=!!(t&&S.isSameOrAfter(t,r)&&i&&S.isSameOrBefore(i,r))||!!(t&&S.isSameOrBefore(t,r)&&i&&S.isSameOrAfter(i,r)),t!=null&&t.isSameOrAfter(i)?(P.start=!!i&&S.isSame(i,r),P.end=t&&S.isSame(t,r)):(P.start=!!t&&S.isSame(t,r),P.end=!!i&&S.isSame(i,r)),S.isSame(c,r)&&(P.type="today"),g==null||g(P,{rowIndex:y,columnIndex:V}),u[V+n]=P}m==null||m(u)}},Tt=(l,s,n)=>{const t=J().locale(n).startOf("month").month(s).year(l),i=t.daysInMonth();return Pn(i).map(c=>t.add(c,"day").toDate())},gt=(l,s,n,t)=>{const i=J().year(l).month(s).startOf("month"),c=Tt(l,s,n).find(r=>!(t!=null&&t(r)));return c?J(c).locale(n):i.locale(n)},Ut=(l,s,n)=>{const t=l.year();if(!(n!=null&&n(l.toDate())))return l.locale(s);const i=l.month();if(!Tt(t,i,s).every(n))return gt(t,i,s,n);for(let c=0;c<12;c++)if(!Tt(t,c,s).every(n))return gt(t,c,s,n);return l},mt=(l,s,n,t)=>{if(ge(l))return l.map(i=>mt(i,s,n,t));if(Qn(l)){const i=t.value?J(l):J(l,s);if(!i.isValid())return i}return J(l,s).locale(n)},hl=Me({...Jt,cellClassName:{type:re(Function)},showWeekNumber:Boolean,selectionMode:tn("date")}),bl=["changerange","pick","select"],jt=(l="")=>["normal","today"].includes(l),gl=(l,s)=>{const{lang:n}=We(),t=X(),i=X(),c=X(),r=X(),v=X([[],[],[],[],[],[]]);let g=!1;const m=l.date.$locale().weekStart||7,y=l.date.locale("en").localeData().weekdaysShort().map(o=>o.toLowerCase()),u=Z(()=>m>3?7-m:-m),V=Z(()=>{const o=l.date.startOf("month");return o.subtract(o.day()||7,"day")}),P=Z(()=>y.concat(y).slice(m,m+7)),x=Z(()=>xa(e(f)).some(o=>o.isCurrent)),S=Z(()=>{const o=l.date.startOf("month"),w=o.day()||7,C=o.daysInMonth(),b=o.subtract(1,"month").daysInMonth();return{startOfMonthDay:w,dateCountOfMonth:C,dateCountOfLastMonth:b}}),$=Z(()=>l.selectionMode==="dates"?Be(l.parsedValue):[]),K=(o,{count:w,rowIndex:C,columnIndex:b})=>{const{startOfMonthDay:O,dateCountOfMonth:p,dateCountOfLastMonth:j}=e(S),te=e(u);if(C>=0&&C<=1){const ae=O+te<0?7+O+te:O+te;if(b+C*7>=ae)return o.text=w,!0;o.text=j-(ae-b%7)+1+C*7,o.type="prev-month"}else return w<=p?o.text=w:(o.text=w-p,o.type="next-month"),!0;return!1},U=(o,{columnIndex:w,rowIndex:C},b)=>{const{disabledDate:O,cellClassName:p}=l,j=e($),te=K(o,{count:b,rowIndex:C,columnIndex:w}),ae=o.dayjs.toDate();return o.selected=j.find(ue=>ue.isSame(o.dayjs,"day")),o.isSelected=!!o.selected,o.isCurrent=W(o),o.disabled=O==null?void 0:O(ae),o.customClass=p==null?void 0:p(ae),te},h=o=>{if(l.selectionMode==="week"){const[w,C]=l.showWeekNumber?[1,7]:[0,6],b=d(o[w+1]);o[w].inRange=b,o[w].start=b,o[C].inRange=b,o[C].end=b}},f=Z(()=>{const{minDate:o,maxDate:w,rangeState:C,showWeekNumber:b}=l,O=e(u),p=e(v),j="day";let te=1;if(b)for(let ae=0;ae<6;ae++)p[ae][0]||(p[ae][0]={type:"week",text:e(V).add(ae*7+1,j).week()});return pl({row:6,column:7},p,{startDate:o,columnIndexOffset:b?1:0,nextEndDate:C.endDate||w||C.selecting&&o||null,now:J().locale(e(n)).startOf(j),unit:j,relativeDateGetter:ae=>e(V).add(ae-O,j),setCellMetadata:(...ae)=>{U(...ae,te)&&(te+=1)},setRowMetadata:h}),p});xe(()=>l.date,async()=>{var o;(o=e(t))!=null&&o.contains(document.activeElement)&&(await Fe(),await Y())});const Y=async()=>{var o;return(o=e(i))==null?void 0:o.focus()},W=o=>l.selectionMode==="date"&&jt(o.type)&&F(o,l.parsedValue),F=(o,w)=>w?J(w).locale(e(n)).isSame(l.date.date(Number(o.text)),"day"):!1,H=(o,w)=>{const C=o*7+(w-(l.showWeekNumber?1:0))-e(u);return e(V).add(C,"day")},B=o=>{var w;if(!l.rangeState.selecting)return;let C=o.target;if(C.tagName==="SPAN"&&(C=(w=C.parentNode)==null?void 0:w.parentNode),C.tagName==="DIV"&&(C=C.parentNode),C.tagName!=="TD")return;const b=C.parentNode.rowIndex-1,O=C.cellIndex;e(f)[b][O].disabled||(b!==e(c)||O!==e(r))&&(c.value=b,r.value=O,s("changerange",{selecting:!0,endDate:H(b,O)}))},A=o=>!e(x)&&(o==null?void 0:o.text)===1&&o.type==="normal"||o.isCurrent,z=o=>{g||e(x)||l.selectionMode!=="date"||G(o,!0)},q=o=>{o.target.closest("td")&&(g=!0)},ne=o=>{o.target.closest("td")&&(g=!1)},R=o=>{!l.rangeState.selecting||!l.minDate?(s("pick",{minDate:o,maxDate:null}),s("select",!0)):(o>=l.minDate?s("pick",{minDate:l.minDate,maxDate:o}):s("pick",{minDate:o,maxDate:l.minDate}),s("select",!1))},E=o=>{const w=o.week(),C=`${o.year()}w${w}`;s("pick",{year:o.year(),week:w,value:C,date:o.startOf("week")})},I=(o,w)=>{const C=w?Be(l.parsedValue).filter(b=>(b==null?void 0:b.valueOf())!==o.valueOf()):Be(l.parsedValue).concat([o]);s("pick",C)},G=(o,w=!1)=>{const C=o.target.closest("td");if(!C)return;const b=C.parentNode.rowIndex-1,O=C.cellIndex,p=e(f)[b][O];if(p.disabled||p.type==="week")return;const j=H(b,O);switch(l.selectionMode){case"range":{R(j);break}case"date":{s("pick",j,w);break}case"week":{E(j);break}case"dates":{I(j,!!p.selected);break}}},d=o=>{if(l.selectionMode!=="week")return!1;let w=l.date.startOf("day");if(o.type==="prev-month"&&(w=w.subtract(1,"month")),o.type==="next-month"&&(w=w.add(1,"month")),w=w.date(Number.parseInt(o.text,10)),l.parsedValue&&!ge(l.parsedValue)){const C=(l.parsedValue.day()-m+7)%7-1;return l.parsedValue.subtract(C,"day").isSame(w,"day")}return!1};return{WEEKS:P,rows:f,tbodyRef:t,currentCellRef:i,focus:Y,isCurrent:W,isWeekActive:d,isSelectedCell:A,handlePickDate:G,handleMouseUp:ne,handleMouseDown:q,handleMouseMove:B,handleFocus:z}},yl=(l,{isCurrent:s,isWeekActive:n})=>{const t=Ve("date-table"),{t:i}=We(),c=Z(()=>[t.b(),{"is-week-mode":l.selectionMode==="week"}]),r=Z(()=>i("el.datepicker.dateTablePrompt")),v=Z(()=>i("el.datepicker.week"));return{tableKls:c,tableLabel:r,weekLabel:v,getCellClasses:y=>{const u=[];return jt(y.type)&&!y.disabled?(u.push("available"),y.type==="today"&&u.push("today")):u.push(y.type),s(y)&&u.push("current"),y.inRange&&(jt(y.type)||l.selectionMode==="week")&&(u.push("in-range"),y.start&&u.push("start-date"),y.end&&u.push("end-date")),y.disabled&&u.push("disabled"),y.selected&&u.push("selected"),y.customClass&&u.push(y.customClass),u.join(" ")},getRowKls:y=>[t.e("row"),{current:n(y)}],t:i}},kl=Me({cell:{type:re(Object)}});var an=he({name:"ElDatePickerCell",props:kl,setup(l){const s=Ve("date-table-cell"),{slots:n}=Re(Yt);return()=>{const{cell:t}=l;return ie(n,"default",{...t},()=>{var i;return[k("div",{class:s.b()},[k("span",{class:s.e("text")},[(i=t==null?void 0:t.renderText)!=null?i:t==null?void 0:t.text])])]})}}});const wl=he({__name:"basic-date-table",props:hl,emits:bl,setup(l,{expose:s,emit:n}){const t=l,{WEEKS:i,rows:c,tbodyRef:r,currentCellRef:v,focus:g,isCurrent:m,isWeekActive:y,isSelectedCell:u,handlePickDate:V,handleMouseUp:P,handleMouseDown:x,handleMouseMove:S,handleFocus:$}=gl(t,n),{tableLabel:K,tableKls:U,weekLabel:h,getCellClasses:f,getRowKls:Y,t:W}=yl(t,{isCurrent:m,isWeekActive:y});let F=!1;return wn(()=>{F=!0}),s({focus:g}),(H,B)=>(N(),Q("table",{"aria-label":e(K),class:T(e(U)),cellspacing:"0",cellpadding:"0",role:"grid",onClick:e(V),onMousemove:e(S),onMousedown:Ze(e(x),["prevent"]),onMouseup:e(P)},[L("tbody",{ref_key:"tbodyRef",ref:r},[L("tr",null,[H.showWeekNumber?(N(),Q("th",{key:0,scope:"col"},oe(e(h)),1)):de("v-if",!0),(N(!0),Q(be,null,Te(e(i),(A,z)=>(N(),Q("th",{key:z,"aria-label":e(W)("el.datepicker.weeksFull."+A),scope:"col"},oe(e(W)("el.datepicker.weeks."+A)),9,["aria-label"]))),128))]),(N(!0),Q(be,null,Te(e(c),(A,z)=>(N(),Q("tr",{key:z,class:T(e(Y)(A[1]))},[(N(!0),Q(be,null,Te(A,(q,ne)=>(N(),Q("td",{key:`${z}.${ne}`,ref_for:!0,ref:R=>!e(F)&&e(u)(q)&&(v.value=R),class:T(e(f)(q)),"aria-current":q.isCurrent?"date":void 0,"aria-selected":q.isCurrent,tabindex:e(u)(q)?0:-1,onFocus:e($)},[k(e(an),{cell:q},null,8,["cell"])],42,["aria-current","aria-selected","tabindex","onFocus"]))),128))],2))),128))],512)],42,["aria-label","onClick","onMousemove","onMousedown","onMouseup"]))}});var zt=je(wl,[["__file","basic-date-table.vue"]]);const Dl=Me({...Jt,selectionMode:tn("month")}),Cl=he({__name:"basic-month-table",props:Dl,emits:["changerange","pick","select"],setup(l,{expose:s,emit:n}){const t=l,i=Ve("month-table"),{t:c,lang:r}=We(),v=X(),g=X(),m=X(t.date.locale("en").localeData().monthsShort().map(h=>h.toLowerCase())),y=X([[],[],[]]),u=X(),V=X(),P=Z(()=>{var h,f;const Y=y.value,W=J().locale(r.value).startOf("month");for(let F=0;F<3;F++){const H=Y[F];for(let B=0;B<4;B++){const A=H[B]||(H[B]={row:F,column:B,type:"normal",inRange:!1,start:!1,end:!1,text:-1,disabled:!1});A.type="normal";const z=F*4+B,q=t.date.startOf("year").month(z),ne=t.rangeState.endDate||t.maxDate||t.rangeState.selecting&&t.minDate||null;A.inRange=!!(t.minDate&&q.isSameOrAfter(t.minDate,"month")&&ne&&q.isSameOrBefore(ne,"month"))||!!(t.minDate&&q.isSameOrBefore(t.minDate,"month")&&ne&&q.isSameOrAfter(ne,"month")),(h=t.minDate)!=null&&h.isSameOrAfter(ne)?(A.start=!!(ne&&q.isSame(ne,"month")),A.end=t.minDate&&q.isSame(t.minDate,"month")):(A.start=!!(t.minDate&&q.isSame(t.minDate,"month")),A.end=!!(ne&&q.isSame(ne,"month"))),W.isSame(q)&&(A.type="today"),A.text=z,A.disabled=((f=t.disabledDate)==null?void 0:f.call(t,q.toDate()))||!1}}return Y}),x=()=>{var h;(h=g.value)==null||h.focus()},S=h=>{const f={},Y=t.date.year(),W=new Date,F=h.text;return f.disabled=t.disabledDate?Tt(Y,F,r.value).every(t.disabledDate):!1,f.current=Be(t.parsedValue).findIndex(H=>J.isDayjs(H)&&H.year()===Y&&H.month()===F)>=0,f.today=W.getFullYear()===Y&&W.getMonth()===F,h.inRange&&(f["in-range"]=!0,h.start&&(f["start-date"]=!0),h.end&&(f["end-date"]=!0)),f},$=h=>{const f=t.date.year(),Y=h.text;return Be(t.date).findIndex(W=>W.year()===f&&W.month()===Y)>=0},K=h=>{var f;if(!t.rangeState.selecting)return;let Y=h.target;if(Y.tagName==="SPAN"&&(Y=(f=Y.parentNode)==null?void 0:f.parentNode),Y.tagName==="DIV"&&(Y=Y.parentNode),Y.tagName!=="TD")return;const W=Y.parentNode.rowIndex,F=Y.cellIndex;P.value[W][F].disabled||(W!==u.value||F!==V.value)&&(u.value=W,V.value=F,n("changerange",{selecting:!0,endDate:t.date.startOf("year").month(W*4+F)}))},U=h=>{var f;const Y=(f=h.target)==null?void 0:f.closest("td");if((Y==null?void 0:Y.tagName)!=="TD"||xt(Y,"disabled"))return;const W=Y.cellIndex,H=Y.parentNode.rowIndex*4+W,B=t.date.startOf("year").month(H);if(t.selectionMode==="months"){if(h.type==="keydown"){n("pick",Be(t.parsedValue),!1);return}const A=gt(t.date.year(),H,r.value,t.disabledDate),z=xt(Y,"current")?Be(t.parsedValue).filter(q=>(q==null?void 0:q.year())!==A.year()||(q==null?void 0:q.month())!==A.month()):Be(t.parsedValue).concat([J(A)]);n("pick",z)}else t.selectionMode==="range"?t.rangeState.selecting?(t.minDate&&B>=t.minDate?n("pick",{minDate:t.minDate,maxDate:B}):n("pick",{minDate:B,maxDate:t.minDate}),n("select",!1)):(n("pick",{minDate:B,maxDate:null}),n("select",!0)):n("pick",H)};return xe(()=>t.date,async()=>{var h,f;(h=v.value)!=null&&h.contains(document.activeElement)&&(await Fe(),(f=g.value)==null||f.focus())}),s({focus:x}),(h,f)=>(N(),Q("table",{role:"grid","aria-label":e(c)("el.datepicker.monthTablePrompt"),class:T(e(i).b()),onClick:U,onMousemove:K},[L("tbody",{ref_key:"tbodyRef",ref:v},[(N(!0),Q(be,null,Te(e(P),(Y,W)=>(N(),Q("tr",{key:W},[(N(!0),Q(be,null,Te(Y,(F,H)=>(N(),Q("td",{key:H,ref_for:!0,ref:B=>$(F)&&(g.value=B),class:T(S(F)),"aria-selected":`${$(F)}`,"aria-label":e(c)(`el.datepicker.month${+F.text+1}`),tabindex:$(F)?0:-1,onKeydown:[ft(Ze(U,["prevent","stop"]),["space"]),ft(Ze(U,["prevent","stop"]),["enter"])]},[k(e(an),{cell:{...F,renderText:e(c)("el.datepicker.months."+m.value[F.text])}},null,8,["cell"])],42,["aria-selected","aria-label","tabindex","onKeydown"]))),128))]))),128))],512)],42,["aria-label"]))}});var Zt=je(Cl,[["__file","basic-month-table.vue"]]);const Sl=Me({...Jt,selectionMode:tn("year")}),_l=he({__name:"basic-year-table",props:Sl,emits:["changerange","pick","select"],setup(l,{expose:s,emit:n}){const t=l,i=(f,Y)=>{const W=J(String(f)).locale(Y).startOf("year"),H=W.endOf("year").dayOfYear();return Pn(H).map(B=>W.add(B,"day").toDate())},c=Ve("year-table"),{t:r,lang:v}=We(),g=X(),m=X(),y=Z(()=>Math.floor(t.date.year()/10)*10),u=X([[],[],[]]),V=X(),P=X(),x=Z(()=>{var f;const Y=u.value,W=J().locale(v.value).startOf("year");for(let F=0;F<3;F++){const H=Y[F];for(let B=0;B<4&&!(F*4+B>=10);B++){let A=H[B];A||(A={row:F,column:B,type:"normal",inRange:!1,start:!1,end:!1,text:-1,disabled:!1}),A.type="normal";const z=F*4+B+y.value,q=J().year(z),ne=t.rangeState.endDate||t.maxDate||t.rangeState.selecting&&t.minDate||null;A.inRange=!!(t.minDate&&q.isSameOrAfter(t.minDate,"year")&&ne&&q.isSameOrBefore(ne,"year"))||!!(t.minDate&&q.isSameOrBefore(t.minDate,"year")&&ne&&q.isSameOrAfter(ne,"year")),(f=t.minDate)!=null&&f.isSameOrAfter(ne)?(A.start=!!(ne&&q.isSame(ne,"year")),A.end=!!(t.minDate&&q.isSame(t.minDate,"year"))):(A.start=!!(t.minDate&&q.isSame(t.minDate,"year")),A.end=!!(ne&&q.isSame(ne,"year"))),W.isSame(q)&&(A.type="today"),A.text=z;const E=q.toDate();A.disabled=t.disabledDate&&t.disabledDate(E)||!1,H[B]=A}}return Y}),S=()=>{var f;(f=m.value)==null||f.focus()},$=f=>{const Y={},W=J().locale(v.value),F=f.text;return Y.disabled=t.disabledDate?i(F,v.value).every(t.disabledDate):!1,Y.today=W.year()===F,Y.current=Be(t.parsedValue).findIndex(H=>H.year()===F)>=0,f.inRange&&(Y["in-range"]=!0,f.start&&(Y["start-date"]=!0),f.end&&(Y["end-date"]=!0)),Y},K=f=>{const Y=f.text;return Be(t.date).findIndex(W=>W.year()===Y)>=0},U=f=>{var Y;const W=(Y=f.target)==null?void 0:Y.closest("td");if(!W||!W.textContent||xt(W,"disabled"))return;const F=W.cellIndex,B=W.parentNode.rowIndex*4+F+y.value,A=J().year(B);if(t.selectionMode==="range")t.rangeState.selecting?(t.minDate&&A>=t.minDate?n("pick",{minDate:t.minDate,maxDate:A}):n("pick",{minDate:A,maxDate:t.minDate}),n("select",!1)):(n("pick",{minDate:A,maxDate:null}),n("select",!0));else if(t.selectionMode==="years"){if(f.type==="keydown"){n("pick",Be(t.parsedValue),!1);return}const z=Ut(A.startOf("year"),v.value,t.disabledDate),q=xt(W,"current")?Be(t.parsedValue).filter(ne=>(ne==null?void 0:ne.year())!==B):Be(t.parsedValue).concat([z]);n("pick",q)}else n("pick",B)},h=f=>{var Y;if(!t.rangeState.selecting)return;const W=(Y=f.target)==null?void 0:Y.closest("td");if(!W)return;const F=W.parentNode.rowIndex,H=W.cellIndex;x.value[F][H].disabled||(F!==V.value||H!==P.value)&&(V.value=F,P.value=H,n("changerange",{selecting:!0,endDate:J().year(y.value).add(F*4+H,"year")}))};return xe(()=>t.date,async()=>{var f,Y;(f=g.value)!=null&&f.contains(document.activeElement)&&(await Fe(),(Y=m.value)==null||Y.focus())}),s({focus:S}),(f,Y)=>(N(),Q("table",{role:"grid","aria-label":e(r)("el.datepicker.yearTablePrompt"),class:T(e(c).b()),onClick:U,onMousemove:h},[L("tbody",{ref_key:"tbodyRef",ref:g},[(N(!0),Q(be,null,Te(e(x),(W,F)=>(N(),Q("tr",{key:F},[(N(!0),Q(be,null,Te(W,(H,B)=>(N(),Q("td",{key:`${F}_${B}`,ref_for:!0,ref:A=>K(H)&&(m.value=A),class:T(["available",$(H)]),"aria-selected":K(H),"aria-label":String(H.text),tabindex:K(H)?0:-1,onKeydown:[ft(Ze(U,["prevent","stop"]),["space"]),ft(Ze(U,["prevent","stop"]),["enter"])]},[k(e(an),{cell:H},null,8,["cell"])],42,["aria-selected","aria-label","tabindex","onKeydown"]))),128))]))),128))],512)],42,["aria-label"]))}});var Ht=je(_l,[["__file","basic-year-table.vue"]]);const Ml=he({__name:"panel-date-pick",props:ml,emits:["pick","set-picker-option","panel-change"],setup(l,{emit:s}){const n=l,t=(D,_,a)=>!0,i=Ve("picker-panel"),c=Ve("date-picker"),r=Kt(),v=Gt(),{t:g,lang:m}=We(),y=Re("EP_PICKER_BASE"),u=Re("ElIsDefaultFormat"),V=Re(Ca),{shortcuts:P,disabledDate:x,cellClassName:S,defaultTime:$}=y.props,K=Ue(y.props,"defaultValue"),U=X(),h=X(J().locale(m.value)),f=X(!1);let Y=!1;const W=Z(()=>J($).locale(m.value)),F=Z(()=>h.value.month()),H=Z(()=>h.value.year()),B=X([]),A=X(null),z=X(null),q=D=>B.value.length>0?t(D,B.value,n.format||"HH:mm:ss"):!0,ne=D=>$&&!Oe.value&&!f.value&&!Y?W.value.year(D.year()).month(D.month()).date(D.date()):ue.value?D.millisecond(0):D.startOf("day"),R=(D,..._)=>{if(!D)s("pick",D,..._);else if(ge(D)){const a=D.map(ne);s("pick",a,..._)}else s("pick",ne(D),..._);A.value=null,z.value=null,f.value=!1,Y=!1},E=async(D,_)=>{if(C.value==="date"){D=D;let a=n.parsedValue?n.parsedValue.year(D.year()).month(D.month()).date(D.date()):D;q(a)||(a=B.value[0][0].year(D.year()).month(D.month()).date(D.date())),h.value=a,R(a,ue.value||_),n.type==="datetime"&&(await Fe(),Qe())}else C.value==="week"?R(D.date):C.value==="dates"&&R(D,!0)},I=D=>{const _=D?"add":"subtract";h.value=h.value[_](1,"month"),nt("month")},G=D=>{const _=h.value,a=D?"add":"subtract";h.value=d.value==="year"?_[a](10,"year"):_[a](1,"year"),nt("year")},d=X("date"),o=Z(()=>{const D=g("el.datepicker.year");if(d.value==="year"){const _=Math.floor(H.value/10)*10;return D?`${_} ${D} - ${_+9} ${D}`:`${_} - ${_+9}`}return`${H.value} ${D}`}),w=D=>{const _=Et(D.value)?D.value():D.value;if(_){Y=!0,R(J(_).locale(m.value));return}D.onClick&&D.onClick({attrs:r,slots:v,emit:s})},C=Z(()=>{const{type:D}=n;return["week","month","months","year","years","dates"].includes(D)?D:"date"}),b=Z(()=>C.value==="dates"||C.value==="months"||C.value==="years"),O=Z(()=>C.value==="date"?d.value:C.value),p=Z(()=>!!P.length),j=async(D,_)=>{C.value==="month"?(h.value=gt(h.value.year(),D,m.value,x),R(h.value,!1)):C.value==="months"?R(D,_??!0):(h.value=gt(h.value.year(),D,m.value,x),d.value="date",["month","year","date","week"].includes(C.value)&&(R(h.value,!0),await Fe(),Qe())),nt("month")},te=async(D,_)=>{if(C.value==="year"){const a=h.value.startOf("year").year(D);h.value=Ut(a,m.value,x),R(h.value,!1)}else if(C.value==="years")R(D,_??!0);else{const a=h.value.year(D);h.value=Ut(a,m.value,x),d.value="month",["month","year","date","week"].includes(C.value)&&(R(h.value,!0),await Fe(),Qe())}nt("year")},ae=async D=>{d.value=D,await Fe(),Qe()},ue=Z(()=>n.type==="datetime"||n.type==="datetimerange"),ye=Z(()=>{const D=ue.value||C.value==="dates",_=C.value==="years",a=C.value==="months",M=d.value==="date",le=d.value==="year",ce=d.value==="month";return D&&M||_&&le||a&&ce}),ve=Z(()=>x?n.parsedValue?ge(n.parsedValue)?x(n.parsedValue[0].toDate()):x(n.parsedValue.toDate()):!0:!1),ke=()=>{if(b.value)R(n.parsedValue);else{let D=n.parsedValue;if(!D){const _=J($).locale(m.value),a=tt();D=_.year(a.year()).month(a.month()).date(a.date())}h.value=D,R(D)}},Pe=Z(()=>x?x(J().locale(m.value).toDate()):!1),Ye=()=>{const _=J().locale(m.value).toDate();f.value=!0,(!x||!x(_))&&q(_)&&(h.value=J().locale(m.value),R(h.value))},we=Z(()=>n.timeFormat||Tn(n.format)),Ae=Z(()=>n.dateFormat||xn(n.format)),Oe=Z(()=>{if(z.value)return z.value;if(!(!n.parsedValue&&!K.value))return(n.parsedValue||h.value).format(we.value)}),Ke=Z(()=>{if(A.value)return A.value;if(!(!n.parsedValue&&!K.value))return(n.parsedValue||h.value).format(Ae.value)}),$e=X(!1),se=()=>{$e.value=!0},Ge=()=>{$e.value=!1},Ie=D=>({hour:D.hour(),minute:D.minute(),second:D.second(),year:D.year(),month:D.month(),date:D.date()}),Ne=(D,_,a)=>{const{hour:M,minute:le,second:ce}=Ie(D),Ee=n.parsedValue?n.parsedValue.hour(M).minute(le).second(ce):D;h.value=Ee,R(h.value,!0),a||($e.value=_)},et=D=>{const _=J(D,we.value).locale(m.value);if(_.isValid()&&q(_)){const{year:a,month:M,date:le}=Ie(h.value);h.value=_.year(a).month(M).date(le),z.value=null,$e.value=!1,R(h.value,!0)}},st=D=>{const _=mt(D,Ae.value,m.value,u);if(_.isValid()){if(x&&x(_.toDate()))return;const{hour:a,minute:M,second:le}=Ie(h.value);h.value=_.hour(a).minute(M).second(le),A.value=null,R(h.value,!0)}},rt=D=>J.isDayjs(D)&&D.isValid()&&(x?!x(D.toDate()):!0),ot=D=>ge(D)?D.map(_=>_.format(n.format)):D.format(n.format),it=D=>mt(D,n.format,m.value,u),tt=()=>{const D=J(K.value).locale(m.value);if(!K.value){const _=W.value;return J().hour(_.hour()).minute(_.minute()).second(_.second()).locale(m.value)}return D},Qe=()=>{var D;["week","month","year","date"].includes(C.value)&&((D=U.value)==null||D.focus())},De=()=>{Qe(),C.value==="week"&&ct(Se.down)},ut=D=>{const{code:_}=D;[Se.up,Se.down,Se.left,Se.right,Se.home,Se.end,Se.pageUp,Se.pageDown].includes(_)&&(ct(_),D.stopPropagation(),D.preventDefault()),[Se.enter,Se.space,Se.numpadEnter].includes(_)&&A.value===null&&z.value===null&&(D.preventDefault(),R(h.value,!1))},ct=D=>{var _;const{up:a,down:M,left:le,right:ce,home:Ee,end:zn,pageUp:Zn,pageDown:Hn}=Se,Kn={year:{[a]:-4,[M]:4,[le]:-1,[ce]:1,offset:(me,ze)=>me.setFullYear(me.getFullYear()+ze)},month:{[a]:-4,[M]:4,[le]:-1,[ce]:1,offset:(me,ze)=>me.setMonth(me.getMonth()+ze)},week:{[a]:-1,[M]:1,[le]:-1,[ce]:1,offset:(me,ze)=>me.setDate(me.getDate()+ze*7)},date:{[a]:-7,[M]:7,[le]:-1,[ce]:1,[Ee]:me=>-me.getDay(),[zn]:me=>-me.getDay()+6,[Zn]:me=>-new Date(me.getFullYear(),me.getMonth(),0).getDate(),[Hn]:me=>new Date(me.getFullYear(),me.getMonth()+1,0).getDate(),offset:(me,ze)=>me.setDate(me.getDate()+ze)}},pt=h.value.toDate();for(;Math.abs(h.value.diff(pt,"year",!0))<1;){const me=Kn[O.value];if(!me)return;if(me.offset(pt,Et(me[D])?me[D](pt):(_=me[D])!=null?_:0),x&&x(pt))break;const ze=J(pt).locale(m.value);h.value=ze,s("pick",ze,!0);break}},nt=D=>{s("panel-change",h.value.toDate(),D,d.value)};return xe(()=>C.value,D=>{if(["month","year"].includes(D)){d.value=D;return}else if(D==="years"){d.value="year";return}else if(D==="months"){d.value="month";return}d.value="date"},{immediate:!0}),xe(()=>d.value,()=>{V==null||V.updatePopper()}),xe(()=>K.value,D=>{D&&(h.value=tt())},{immediate:!0}),xe(()=>n.parsedValue,D=>{if(D){if(b.value||ge(D))return;h.value=D}else h.value=tt()},{immediate:!0}),s("set-picker-option",["isValidValue",rt]),s("set-picker-option",["formatToString",ot]),s("set-picker-option",["parseUserInput",it]),s("set-picker-option",["handleFocusPicker",De]),(D,_)=>(N(),Q("div",{class:T([e(i).b(),e(c).b(),{"has-sidebar":D.$slots.sidebar||e(p),"has-time":e(ue)}])},[L("div",{class:T(e(i).e("body-wrapper"))},[ie(D.$slots,"sidebar",{class:T(e(i).e("sidebar"))}),e(p)?(N(),Q("div",{key:0,class:T(e(i).e("sidebar"))},[(N(!0),Q(be,null,Te(e(P),(a,M)=>(N(),Q("button",{key:M,type:"button",class:T(e(i).e("shortcut")),onClick:le=>w(a)},oe(a.text),11,["onClick"]))),128))],2)):de("v-if",!0),L("div",{class:T(e(i).e("body"))},[e(ue)?(N(),Q("div",{key:0,class:T(e(c).e("time-header"))},[L("span",{class:T(e(c).e("editor-wrap"))},[k(e(qe),{placeholder:e(g)("el.datepicker.selectDate"),"model-value":e(Ke),size:"small","validate-event":!1,onInput:a=>A.value=a,onChange:st},null,8,["placeholder","model-value","onInput"])],2),_e((N(),Q("span",{class:T(e(c).e("editor-wrap"))},[k(e(qe),{placeholder:e(g)("el.datepicker.selectTime"),"model-value":e(Oe),size:"small","validate-event":!1,onFocus:se,onInput:a=>z.value=a,onChange:et},null,8,["placeholder","model-value","onInput"]),k(e(Lt),{visible:$e.value,format:e(we),"parsed-value":h.value,onPick:Ne},null,8,["visible","format","parsed-value"])],2)),[[e(Nt),Ge]])],2)):de("v-if",!0),_e(L("div",{class:T([e(c).e("header"),(d.value==="year"||d.value==="month")&&e(c).e("header--bordered")])},[L("span",{class:T(e(c).e("prev-btn"))},[L("button",{type:"button","aria-label":e(g)("el.datepicker.prevYear"),class:T(["d-arrow-left",e(i).e("icon-btn")]),onClick:a=>G(!1)},[ie(D.$slots,"prev-year",{},()=>[k(e(pe),null,{default:ee(()=>[k(e(at))]),_:1})])],10,["aria-label","onClick"]),_e(L("button",{type:"button","aria-label":e(g)("el.datepicker.prevMonth"),class:T([e(i).e("icon-btn"),"arrow-left"]),onClick:a=>I(!1)},[ie(D.$slots,"prev-month",{},()=>[k(e(pe),null,{default:ee(()=>[k(e(Bt))]),_:1})])],10,["aria-label","onClick"]),[[Le,d.value==="date"]])],2),L("span",{role:"button",class:T(e(c).e("header-label")),"aria-live":"polite",tabindex:"0",onKeydown:ft(a=>ae("year"),["enter"]),onClick:a=>ae("year")},oe(e(o)),43,["onKeydown","onClick"]),_e(L("span",{role:"button","aria-live":"polite",tabindex:"0",class:T([e(c).e("header-label"),{active:d.value==="month"}]),onKeydown:ft(a=>ae("month"),["enter"]),onClick:a=>ae("month")},oe(e(g)(`el.datepicker.month${e(F)+1}`)),43,["onKeydown","onClick"]),[[Le,d.value==="date"]]),L("span",{class:T(e(c).e("next-btn"))},[_e(L("button",{type:"button","aria-label":e(g)("el.datepicker.nextMonth"),class:T([e(i).e("icon-btn"),"arrow-right"]),onClick:a=>I(!0)},[ie(D.$slots,"next-month",{},()=>[k(e(pe),null,{default:ee(()=>[k(e(_t))]),_:1})])],10,["aria-label","onClick"]),[[Le,d.value==="date"]]),L("button",{type:"button","aria-label":e(g)("el.datepicker.nextYear"),class:T([e(i).e("icon-btn"),"d-arrow-right"]),onClick:a=>G(!0)},[ie(D.$slots,"next-year",{},()=>[k(e(pe),null,{default:ee(()=>[k(e(lt))]),_:1})])],10,["aria-label","onClick"])],2)],2),[[Le,d.value!=="time"]]),L("div",{class:T(e(i).e("content")),onKeydown:ut},[d.value==="date"?(N(),Ce(zt,{key:0,ref_key:"currentViewRef",ref:U,"selection-mode":e(C),date:h.value,"parsed-value":D.parsedValue,"disabled-date":e(x),"cell-class-name":e(S),onPick:E},null,8,["selection-mode","date","parsed-value","disabled-date","cell-class-name"])):de("v-if",!0),d.value==="year"?(N(),Ce(Ht,{key:1,ref_key:"currentViewRef",ref:U,"selection-mode":e(C),date:h.value,"disabled-date":e(x),"parsed-value":D.parsedValue,onPick:te},null,8,["selection-mode","date","disabled-date","parsed-value"])):de("v-if",!0),d.value==="month"?(N(),Ce(Zt,{key:2,ref_key:"currentViewRef",ref:U,"selection-mode":e(C),date:h.value,"parsed-value":D.parsedValue,"disabled-date":e(x),onPick:j},null,8,["selection-mode","date","parsed-value","disabled-date"])):de("v-if",!0)],34)],2)],2),_e(L("div",{class:T(e(i).e("footer"))},[_e(k(e(He),{text:"",size:"small",class:T(e(i).e("link-btn")),disabled:e(Pe),onClick:Ye},{default:ee(()=>[fe(oe(e(g)("el.datepicker.now")),1)]),_:1},8,["class","disabled"]),[[Le,!e(b)&&D.showNow]]),k(e(He),{plain:"",size:"small",class:T(e(i).e("link-btn")),disabled:e(ve),onClick:ke},{default:ee(()=>[fe(oe(e(g)("el.datepicker.confirm")),1)]),_:1},8,["class","disabled"])],2),[[Le,e(ye)]])],2))}});var $l=je(Ml,[["__file","panel-date-pick.vue"]]);const Pl=Me({...Ln,...en,visible:Boolean}),Un=l=>{const{emit:s}=Qt(),n=Kt(),t=Gt();return c=>{const r=Et(c.value)?c.value():c.value;if(r){s("pick",[J(r[0]).locale(l.value),J(r[1]).locale(l.value)]);return}c.onClick&&c.onClick({attrs:n,slots:t,emit:s})}},jn=(l,{defaultValue:s,leftDate:n,rightDate:t,unit:i,onParsedValueChanged:c})=>{const{emit:r}=Qt(),{pickerNs:v}=Re(Yt),g=Ve("date-range-picker"),{t:m,lang:y}=We(),u=Un(y),V=X(),P=X(),x=X({endDate:null,selecting:!1}),S=f=>{x.value=f},$=(f=!1)=>{const Y=e(V),W=e(P);vt([Y,W])&&r("pick",[Y,W],f)},K=f=>{x.value.selecting=f,f||(x.value.endDate=null)},U=f=>{if(ge(f)&&f.length===2){const[Y,W]=f;V.value=Y,n.value=Y,P.value=W,c(e(V),e(P))}else h()},h=()=>{const[f,Y]=nn(e(s),{lang:e(y),unit:i,unlinkPanels:l.unlinkPanels});V.value=void 0,P.value=void 0,n.value=f,t.value=Y};return xe(s,f=>{f&&h()},{immediate:!0}),xe(()=>l.parsedValue,U,{immediate:!0}),{minDate:V,maxDate:P,rangeState:x,lang:y,ppNs:v,drpNs:g,handleChangeRange:S,handleRangeConfirm:$,handleShortcutClick:u,onSelect:K,onReset:U,t:m}},Dt="month",xl=he({__name:"panel-date-range",props:Pl,emits:["pick","set-picker-option","calendar-change","panel-change"],setup(l,{emit:s}){const n=l,t=Re("EP_PICKER_BASE"),i=Re("ElIsDefaultFormat"),{disabledDate:c,cellClassName:r,defaultTime:v,clearable:g}=t.props,m=Ue(t.props,"format"),y=Ue(t.props,"shortcuts"),u=Ue(t.props,"defaultValue"),{lang:V}=We(),P=X(J().locale(V.value)),x=X(J().locale(V.value).add(1,Dt)),{minDate:S,maxDate:$,rangeState:K,ppNs:U,drpNs:h,handleChangeRange:f,handleRangeConfirm:Y,handleShortcutClick:W,onSelect:F,onReset:H,t:B}=jn(n,{defaultValue:u,leftDate:P,rightDate:x,unit:Dt,onParsedValueChanged:D});xe(()=>n.visible,_=>{!_&&K.value.selecting&&(H(n.parsedValue),F(!1))});const A=X({min:null,max:null}),z=X({min:null,max:null}),q=Z(()=>`${P.value.year()} ${B("el.datepicker.year")} ${B(`el.datepicker.month${P.value.month()+1}`)}`),ne=Z(()=>`${x.value.year()} ${B("el.datepicker.year")} ${B(`el.datepicker.month${x.value.month()+1}`)}`),R=Z(()=>P.value.year()),E=Z(()=>P.value.month()),I=Z(()=>x.value.year()),G=Z(()=>x.value.month()),d=Z(()=>!!y.value.length),o=Z(()=>A.value.min!==null?A.value.min:S.value?S.value.format(p.value):""),w=Z(()=>A.value.max!==null?A.value.max:$.value||S.value?($.value||S.value).format(p.value):""),C=Z(()=>z.value.min!==null?z.value.min:S.value?S.value.format(O.value):""),b=Z(()=>z.value.max!==null?z.value.max:$.value||S.value?($.value||S.value).format(O.value):""),O=Z(()=>n.timeFormat||Tn(m.value)),p=Z(()=>n.dateFormat||xn(m.value)),j=_=>vt(_)&&(c?!c(_[0].toDate())&&!c(_[1].toDate()):!0),te=()=>{P.value=P.value.subtract(1,"year"),n.unlinkPanels||(x.value=P.value.add(1,"month")),we("year")},ae=()=>{P.value=P.value.subtract(1,"month"),n.unlinkPanels||(x.value=P.value.add(1,"month")),we("month")},ue=()=>{n.unlinkPanels?x.value=x.value.add(1,"year"):(P.value=P.value.add(1,"year"),x.value=P.value.add(1,"month")),we("year")},ye=()=>{n.unlinkPanels?x.value=x.value.add(1,"month"):(P.value=P.value.add(1,"month"),x.value=P.value.add(1,"month")),we("month")},ve=()=>{P.value=P.value.add(1,"year"),we("year")},ke=()=>{P.value=P.value.add(1,"month"),we("month")},Pe=()=>{x.value=x.value.subtract(1,"year"),we("year")},Ye=()=>{x.value=x.value.subtract(1,"month"),we("month")},we=_=>{s("panel-change",[P.value.toDate(),x.value.toDate()],_)},Ae=Z(()=>{const _=(E.value+1)%12,a=E.value+1>=12?1:0;return n.unlinkPanels&&new Date(R.value+a,_)<new Date(I.value,G.value)}),Oe=Z(()=>n.unlinkPanels&&I.value*12+G.value-(R.value*12+E.value+1)>=12),Ke=Z(()=>!(S.value&&$.value&&!K.value.selecting&&vt([S.value,$.value]))),$e=Z(()=>n.type==="datetime"||n.type==="datetimerange"),se=(_,a)=>{if(_)return v?J(v[a]||v).locale(V.value).year(_.year()).month(_.month()).date(_.date()):_},Ge=(_,a=!0)=>{const M=_.minDate,le=_.maxDate,ce=se(M,0),Ee=se(le,1);$.value===Ee&&S.value===ce||(s("calendar-change",[M.toDate(),le&&le.toDate()]),$.value=Ee,S.value=ce,!(!a||$e.value)&&Y())},Ie=X(!1),Ne=X(!1),et=()=>{Ie.value=!1},st=()=>{Ne.value=!1},rt=(_,a)=>{A.value[a]=_;const M=J(_,p.value).locale(V.value);if(M.isValid()){if(c&&c(M.toDate()))return;a==="min"?(P.value=M,S.value=(S.value||P.value).year(M.year()).month(M.month()).date(M.date()),!n.unlinkPanels&&(!$.value||$.value.isBefore(S.value))&&(x.value=M.add(1,"month"),$.value=S.value.add(1,"month"))):(x.value=M,$.value=($.value||x.value).year(M.year()).month(M.month()).date(M.date()),!n.unlinkPanels&&(!S.value||S.value.isAfter($.value))&&(P.value=M.subtract(1,"month"),S.value=$.value.subtract(1,"month")))}},ot=(_,a)=>{A.value[a]=null},it=(_,a)=>{z.value[a]=_;const M=J(_,O.value).locale(V.value);M.isValid()&&(a==="min"?(Ie.value=!0,S.value=(S.value||P.value).hour(M.hour()).minute(M.minute()).second(M.second())):(Ne.value=!0,$.value=($.value||x.value).hour(M.hour()).minute(M.minute()).second(M.second()),x.value=$.value))},tt=(_,a)=>{z.value[a]=null,a==="min"?(P.value=S.value,Ie.value=!1,(!$.value||$.value.isBefore(S.value))&&($.value=S.value)):(x.value=$.value,Ne.value=!1,$.value&&$.value.isBefore(S.value)&&(S.value=$.value))},Qe=(_,a,M)=>{z.value.min||(_&&(P.value=_,S.value=(S.value||P.value).hour(_.hour()).minute(_.minute()).second(_.second())),M||(Ie.value=a),(!$.value||$.value.isBefore(S.value))&&($.value=S.value,x.value=_))},De=(_,a,M)=>{z.value.max||(_&&(x.value=_,$.value=($.value||x.value).hour(_.hour()).minute(_.minute()).second(_.second())),M||(Ne.value=a),$.value&&$.value.isBefore(S.value)&&(S.value=$.value))},ut=()=>{P.value=nn(e(u),{lang:e(V),unit:"month",unlinkPanels:n.unlinkPanels})[0],x.value=P.value.add(1,"month"),$.value=void 0,S.value=void 0,s("pick",null)},ct=_=>ge(_)?_.map(a=>a.format(m.value)):_.format(m.value),nt=_=>mt(_,m.value,V.value,i);function D(_,a){if(n.unlinkPanels&&a){const M=(_==null?void 0:_.year())||0,le=(_==null?void 0:_.month())||0,ce=a.year(),Ee=a.month();x.value=M===ce&&le===Ee?a.add(1,Dt):a}else x.value=P.value.add(1,Dt),a&&(x.value=x.value.hour(a.hour()).minute(a.minute()).second(a.second()))}return s("set-picker-option",["isValidValue",j]),s("set-picker-option",["parseUserInput",nt]),s("set-picker-option",["formatToString",ct]),s("set-picker-option",["handleClear",ut]),(_,a)=>(N(),Q("div",{class:T([e(U).b(),e(h).b(),{"has-sidebar":_.$slots.sidebar||e(d),"has-time":e($e)}])},[L("div",{class:T(e(U).e("body-wrapper"))},[ie(_.$slots,"sidebar",{class:T(e(U).e("sidebar"))}),e(d)?(N(),Q("div",{key:0,class:T(e(U).e("sidebar"))},[(N(!0),Q(be,null,Te(e(y),(M,le)=>(N(),Q("button",{key:le,type:"button",class:T(e(U).e("shortcut")),onClick:ce=>e(W)(M)},oe(M.text),11,["onClick"]))),128))],2)):de("v-if",!0),L("div",{class:T(e(U).e("body"))},[e($e)?(N(),Q("div",{key:0,class:T(e(h).e("time-header"))},[L("span",{class:T(e(h).e("editors-wrap"))},[L("span",{class:T(e(h).e("time-picker-wrap"))},[k(e(qe),{size:"small",disabled:e(K).selecting,placeholder:e(B)("el.datepicker.startDate"),class:T(e(h).e("editor")),"model-value":e(o),"validate-event":!1,onInput:M=>rt(M,"min"),onChange:M=>ot(M,"min")},null,8,["disabled","placeholder","class","model-value","onInput","onChange"])],2),_e((N(),Q("span",{class:T(e(h).e("time-picker-wrap"))},[k(e(qe),{size:"small",class:T(e(h).e("editor")),disabled:e(K).selecting,placeholder:e(B)("el.datepicker.startTime"),"model-value":e(C),"validate-event":!1,onFocus:M=>Ie.value=!0,onInput:M=>it(M,"min"),onChange:M=>tt(M,"min")},null,8,["class","disabled","placeholder","model-value","onFocus","onInput","onChange"]),k(e(Lt),{visible:Ie.value,format:e(O),"datetime-role":"start","parsed-value":P.value,onPick:Qe},null,8,["visible","format","parsed-value"])],2)),[[e(Nt),et]])],2),L("span",null,[k(e(pe),null,{default:ee(()=>[k(e(_t))]),_:1})]),L("span",{class:T([e(h).e("editors-wrap"),"is-right"])},[L("span",{class:T(e(h).e("time-picker-wrap"))},[k(e(qe),{size:"small",class:T(e(h).e("editor")),disabled:e(K).selecting,placeholder:e(B)("el.datepicker.endDate"),"model-value":e(w),readonly:!e(S),"validate-event":!1,onInput:M=>rt(M,"max"),onChange:M=>ot(M,"max")},null,8,["class","disabled","placeholder","model-value","readonly","onInput","onChange"])],2),_e((N(),Q("span",{class:T(e(h).e("time-picker-wrap"))},[k(e(qe),{size:"small",class:T(e(h).e("editor")),disabled:e(K).selecting,placeholder:e(B)("el.datepicker.endTime"),"model-value":e(b),readonly:!e(S),"validate-event":!1,onFocus:M=>e(S)&&(Ne.value=!0),onInput:M=>it(M,"max"),onChange:M=>tt(M,"max")},null,8,["class","disabled","placeholder","model-value","readonly","onFocus","onInput","onChange"]),k(e(Lt),{"datetime-role":"end",visible:Ne.value,format:e(O),"parsed-value":x.value,onPick:De},null,8,["visible","format","parsed-value"])],2)),[[e(Nt),st]])],2)],2)):de("v-if",!0),L("div",{class:T([[e(U).e("content"),e(h).e("content")],"is-left"])},[L("div",{class:T(e(h).e("header"))},[L("button",{type:"button",class:T([e(U).e("icon-btn"),"d-arrow-left"]),"aria-label":e(B)("el.datepicker.prevYear"),onClick:te},[ie(_.$slots,"prev-year",{},()=>[k(e(pe),null,{default:ee(()=>[k(e(at))]),_:1})])],10,["aria-label"]),L("button",{type:"button",class:T([e(U).e("icon-btn"),"arrow-left"]),"aria-label":e(B)("el.datepicker.prevMonth"),onClick:ae},[ie(_.$slots,"prev-month",{},()=>[k(e(pe),null,{default:ee(()=>[k(e(Bt))]),_:1})])],10,["aria-label"]),_.unlinkPanels?(N(),Q("button",{key:0,type:"button",disabled:!e(Oe),class:T([[e(U).e("icon-btn"),{"is-disabled":!e(Oe)}],"d-arrow-right"]),"aria-label":e(B)("el.datepicker.nextYear"),onClick:ve},[ie(_.$slots,"next-year",{},()=>[k(e(pe),null,{default:ee(()=>[k(e(lt))]),_:1})])],10,["disabled","aria-label"])):de("v-if",!0),_.unlinkPanels?(N(),Q("button",{key:1,type:"button",disabled:!e(Ae),class:T([[e(U).e("icon-btn"),{"is-disabled":!e(Ae)}],"arrow-right"]),"aria-label":e(B)("el.datepicker.nextMonth"),onClick:ke},[ie(_.$slots,"next-month",{},()=>[k(e(pe),null,{default:ee(()=>[k(e(_t))]),_:1})])],10,["disabled","aria-label"])):de("v-if",!0),L("div",null,oe(e(q)),1)],2),k(zt,{"selection-mode":"range",date:P.value,"min-date":e(S),"max-date":e($),"range-state":e(K),"disabled-date":e(c),"cell-class-name":e(r),onChangerange:e(f),onPick:Ge,onSelect:e(F)},null,8,["date","min-date","max-date","range-state","disabled-date","cell-class-name","onChangerange","onSelect"])],2),L("div",{class:T([[e(U).e("content"),e(h).e("content")],"is-right"])},[L("div",{class:T(e(h).e("header"))},[_.unlinkPanels?(N(),Q("button",{key:0,type:"button",disabled:!e(Oe),class:T([[e(U).e("icon-btn"),{"is-disabled":!e(Oe)}],"d-arrow-left"]),"aria-label":e(B)("el.datepicker.prevYear"),onClick:Pe},[ie(_.$slots,"prev-year",{},()=>[k(e(pe),null,{default:ee(()=>[k(e(at))]),_:1})])],10,["disabled","aria-label"])):de("v-if",!0),_.unlinkPanels?(N(),Q("button",{key:1,type:"button",disabled:!e(Ae),class:T([[e(U).e("icon-btn"),{"is-disabled":!e(Ae)}],"arrow-left"]),"aria-label":e(B)("el.datepicker.prevMonth"),onClick:Ye},[ie(_.$slots,"prev-month",{},()=>[k(e(pe),null,{default:ee(()=>[k(e(Bt))]),_:1})])],10,["disabled","aria-label"])):de("v-if",!0),L("button",{type:"button","aria-label":e(B)("el.datepicker.nextYear"),class:T([e(U).e("icon-btn"),"d-arrow-right"]),onClick:ue},[ie(_.$slots,"next-year",{},()=>[k(e(pe),null,{default:ee(()=>[k(e(lt))]),_:1})])],10,["aria-label"]),L("button",{type:"button",class:T([e(U).e("icon-btn"),"arrow-right"]),"aria-label":e(B)("el.datepicker.nextMonth"),onClick:ye},[ie(_.$slots,"next-month",{},()=>[k(e(pe),null,{default:ee(()=>[k(e(_t))]),_:1})])],10,["aria-label"]),L("div",null,oe(e(ne)),1)],2),k(zt,{"selection-mode":"range",date:x.value,"min-date":e(S),"max-date":e($),"range-state":e(K),"disabled-date":e(c),"cell-class-name":e(r),onChangerange:e(f),onPick:Ge,onSelect:e(F)},null,8,["date","min-date","max-date","range-state","disabled-date","cell-class-name","onChangerange","onSelect"])],2)],2)],2),e($e)?(N(),Q("div",{key:0,class:T(e(U).e("footer"))},[e(g)?(N(),Ce(e(He),{key:0,text:"",size:"small",class:T(e(U).e("link-btn")),onClick:ut},{default:ee(()=>[fe(oe(e(B)("el.datepicker.clear")),1)]),_:1},8,["class"])):de("v-if",!0),k(e(He),{plain:"",size:"small",class:T(e(U).e("link-btn")),disabled:e(Ke),onClick:M=>e(Y)(!1)},{default:ee(()=>[fe(oe(e(B)("el.datepicker.confirm")),1)]),_:1},8,["class","disabled","onClick"])],2)):de("v-if",!0)],2))}});var Tl=je(xl,[["__file","panel-date-range.vue"]]);const Vl=Me({...en}),Yl=["pick","set-picker-option","calendar-change"],Ol=({unlinkPanels:l,leftDate:s,rightDate:n})=>{const{t}=We(),i=()=>{s.value=s.value.subtract(1,"year"),l.value||(n.value=n.value.subtract(1,"year"))},c=()=>{l.value||(s.value=s.value.add(1,"year")),n.value=n.value.add(1,"year")},r=()=>{s.value=s.value.add(1,"year")},v=()=>{n.value=n.value.subtract(1,"year")},g=Z(()=>`${s.value.year()} ${t("el.datepicker.year")}`),m=Z(()=>`${n.value.year()} ${t("el.datepicker.year")}`),y=Z(()=>s.value.year()),u=Z(()=>n.value.year()===s.value.year()?s.value.year()+1:n.value.year());return{leftPrevYear:i,rightNextYear:c,leftNextYear:r,rightPrevYear:v,leftLabel:g,rightLabel:m,leftYear:y,rightYear:u}},Ct="year",Il=he({name:"DatePickerMonthRange"}),Rl=he({...Il,props:Vl,emits:Yl,setup(l,{emit:s}){const n=l,{lang:t}=We(),i=Re("EP_PICKER_BASE"),c=Re("ElIsDefaultFormat"),{shortcuts:r,disabledDate:v}=i.props,g=Ue(i.props,"format"),m=Ue(i.props,"defaultValue"),y=X(J().locale(t.value)),u=X(J().locale(t.value).add(1,Ct)),{minDate:V,maxDate:P,rangeState:x,ppNs:S,drpNs:$,handleChangeRange:K,handleRangeConfirm:U,handleShortcutClick:h,onSelect:f}=jn(n,{defaultValue:m,leftDate:y,rightDate:u,unit:Ct,onParsedValueChanged:o}),Y=Z(()=>!!r.length),{leftPrevYear:W,rightNextYear:F,leftNextYear:H,rightPrevYear:B,leftLabel:A,rightLabel:z,leftYear:q,rightYear:ne}=Ol({unlinkPanels:Ue(n,"unlinkPanels"),leftDate:y,rightDate:u}),R=Z(()=>n.unlinkPanels&&ne.value>q.value+1),E=(w,C=!0)=>{const b=w.minDate,O=w.maxDate;P.value===O&&V.value===b||(s("calendar-change",[b.toDate(),O&&O.toDate()]),P.value=O,V.value=b,C&&U())},I=()=>{y.value=nn(e(m),{lang:e(t),unit:"year",unlinkPanels:n.unlinkPanels})[0],u.value=y.value.add(1,"year"),s("pick",null)},G=w=>ge(w)?w.map(C=>C.format(g.value)):w.format(g.value),d=w=>mt(w,g.value,t.value,c);function o(w,C){if(n.unlinkPanels&&C){const b=(w==null?void 0:w.year())||0,O=C.year();u.value=b===O?C.add(1,Ct):C}else u.value=y.value.add(1,Ct)}return s("set-picker-option",["isValidValue",vt]),s("set-picker-option",["formatToString",G]),s("set-picker-option",["parseUserInput",d]),s("set-picker-option",["handleClear",I]),(w,C)=>(N(),Q("div",{class:T([e(S).b(),e($).b(),{"has-sidebar":!!w.$slots.sidebar||e(Y)}])},[L("div",{class:T(e(S).e("body-wrapper"))},[ie(w.$slots,"sidebar",{class:T(e(S).e("sidebar"))}),e(Y)?(N(),Q("div",{key:0,class:T(e(S).e("sidebar"))},[(N(!0),Q(be,null,Te(e(r),(b,O)=>(N(),Q("button",{key:O,type:"button",class:T(e(S).e("shortcut")),onClick:p=>e(h)(b)},oe(b.text),11,["onClick"]))),128))],2)):de("v-if",!0),L("div",{class:T(e(S).e("body"))},[L("div",{class:T([[e(S).e("content"),e($).e("content")],"is-left"])},[L("div",{class:T(e($).e("header"))},[L("button",{type:"button",class:T([e(S).e("icon-btn"),"d-arrow-left"]),onClick:e(W)},[ie(w.$slots,"prev-year",{},()=>[k(e(pe),null,{default:ee(()=>[k(e(at))]),_:1})])],10,["onClick"]),w.unlinkPanels?(N(),Q("button",{key:0,type:"button",disabled:!e(R),class:T([[e(S).e("icon-btn"),{[e(S).is("disabled")]:!e(R)}],"d-arrow-right"]),onClick:e(H)},[ie(w.$slots,"next-year",{},()=>[k(e(pe),null,{default:ee(()=>[k(e(lt))]),_:1})])],10,["disabled","onClick"])):de("v-if",!0),L("div",null,oe(e(A)),1)],2),k(Zt,{"selection-mode":"range",date:y.value,"min-date":e(V),"max-date":e(P),"range-state":e(x),"disabled-date":e(v),onChangerange:e(K),onPick:E,onSelect:e(f)},null,8,["date","min-date","max-date","range-state","disabled-date","onChangerange","onSelect"])],2),L("div",{class:T([[e(S).e("content"),e($).e("content")],"is-right"])},[L("div",{class:T(e($).e("header"))},[w.unlinkPanels?(N(),Q("button",{key:0,type:"button",disabled:!e(R),class:T([[e(S).e("icon-btn"),{"is-disabled":!e(R)}],"d-arrow-left"]),onClick:e(B)},[ie(w.$slots,"prev-year",{},()=>[k(e(pe),null,{default:ee(()=>[k(e(at))]),_:1})])],10,["disabled","onClick"])):de("v-if",!0),L("button",{type:"button",class:T([e(S).e("icon-btn"),"d-arrow-right"]),onClick:e(F)},[ie(w.$slots,"next-year",{},()=>[k(e(pe),null,{default:ee(()=>[k(e(lt))]),_:1})])],10,["onClick"]),L("div",null,oe(e(z)),1)],2),k(Zt,{"selection-mode":"range",date:u.value,"min-date":e(V),"max-date":e(P),"range-state":e(x),"disabled-date":e(v),onChangerange:e(K),onPick:E,onSelect:e(f)},null,8,["date","min-date","max-date","range-state","disabled-date","onChangerange","onSelect"])],2)],2)],2)],2))}});var Al=je(Rl,[["__file","panel-month-range.vue"]]);const El=Me({...en}),Bl=["pick","set-picker-option","calendar-change"],Fl=({unlinkPanels:l,leftDate:s,rightDate:n})=>{const t=()=>{s.value=s.value.subtract(10,"year"),l.value||(n.value=n.value.subtract(10,"year"))},i=()=>{l.value||(s.value=s.value.add(10,"year")),n.value=n.value.add(10,"year")},c=()=>{s.value=s.value.add(10,"year")},r=()=>{n.value=n.value.subtract(10,"year")},v=Z(()=>{const u=Math.floor(s.value.year()/10)*10;return`${u}-${u+9}`}),g=Z(()=>{const u=Math.floor(n.value.year()/10)*10;return`${u}-${u+9}`}),m=Z(()=>Math.floor(s.value.year()/10)*10+9),y=Z(()=>Math.floor(n.value.year()/10)*10);return{leftPrevYear:t,rightNextYear:i,leftNextYear:c,rightPrevYear:r,leftLabel:v,rightLabel:g,leftYear:m,rightYear:y}},mn="year",Nl=he({name:"DatePickerYearRange"}),Wl=he({...Nl,props:El,emits:Bl,setup(l,{emit:s}){const n=l,{lang:t}=We(),i=X(J().locale(t.value)),c=X(i.value.add(10,"year")),{pickerNs:r}=Re(Yt),v=Ve("date-range-picker"),g=Re("isDefaultFormat"),m=Z(()=>!!E.length),y=Z(()=>[r.b(),v.b(),{"has-sidebar":!!Gt().sidebar||m.value}]),u=Z(()=>({content:[r.e("content"),v.e("content"),"is-left"],arrowLeftBtn:[r.e("icon-btn"),"d-arrow-left"],arrowRightBtn:[r.e("icon-btn"),{[r.is("disabled")]:!W.value},"d-arrow-right"]})),V=Z(()=>({content:[r.e("content"),v.e("content"),"is-right"],arrowLeftBtn:[r.e("icon-btn"),{"is-disabled":!W.value},"d-arrow-left"],arrowRightBtn:[r.e("icon-btn"),"d-arrow-right"]})),P=Un(t),{leftPrevYear:x,rightNextYear:S,leftNextYear:$,rightPrevYear:K,leftLabel:U,rightLabel:h,leftYear:f,rightYear:Y}=Fl({unlinkPanels:Ue(n,"unlinkPanels"),leftDate:i,rightDate:c}),W=Z(()=>n.unlinkPanels&&Y.value>f.value+1),F=X(),H=X(),B=X({endDate:null,selecting:!1}),A=p=>{B.value=p},z=(p,j=!0)=>{const te=p.minDate,ae=p.maxDate;H.value===ae&&F.value===te||(s("calendar-change",[te.toDate(),ae&&ae.toDate()]),H.value=ae,F.value=te,j&&q())},q=(p=!1)=>{vt([F.value,H.value])&&s("pick",[F.value,H.value],p)},ne=p=>{B.value.selecting=p,p||(B.value.endDate=null)},R=Re("EP_PICKER_BASE"),{shortcuts:E,disabledDate:I}=R.props,G=Ue(R.props,"format"),d=Ue(R.props,"defaultValue"),o=()=>{let p;if(ge(d.value)){const j=J(d.value[0]);let te=J(d.value[1]);return n.unlinkPanels||(te=j.add(10,mn)),[j,te]}else d.value?p=J(d.value):p=J();return p=p.locale(t.value),[p,p.add(10,mn)]};xe(()=>d.value,p=>{if(p){const j=o();i.value=j[0],c.value=j[1]}},{immediate:!0}),xe(()=>n.parsedValue,p=>{if(p&&p.length===2)if(F.value=p[0],H.value=p[1],i.value=F.value,n.unlinkPanels&&H.value){const j=F.value.year(),te=H.value.year();c.value=j===te?H.value.add(10,"year"):H.value}else c.value=i.value.add(10,"year");else{const j=o();F.value=void 0,H.value=void 0,i.value=j[0],c.value=j[1]}},{immediate:!0});const w=p=>mt(p,G.value,t.value,g),C=p=>ge(p)?p.map(j=>j.format(G.value)):p.format(G.value),b=p=>vt(p)&&(I?!I(p[0].toDate())&&!I(p[1].toDate()):!0),O=()=>{const p=o();i.value=p[0],c.value=p[1],H.value=void 0,F.value=void 0,s("pick",null)};return s("set-picker-option",["isValidValue",b]),s("set-picker-option",["parseUserInput",w]),s("set-picker-option",["formatToString",C]),s("set-picker-option",["handleClear",O]),(p,j)=>(N(),Q("div",{class:T(e(y))},[L("div",{class:T(e(r).e("body-wrapper"))},[ie(p.$slots,"sidebar",{class:T(e(r).e("sidebar"))}),e(m)?(N(),Q("div",{key:0,class:T(e(r).e("sidebar"))},[(N(!0),Q(be,null,Te(e(E),(te,ae)=>(N(),Q("button",{key:ae,type:"button",class:T(e(r).e("shortcut")),onClick:ue=>e(P)(te)},oe(te.text),11,["onClick"]))),128))],2)):de("v-if",!0),L("div",{class:T(e(r).e("body"))},[L("div",{class:T(e(u).content)},[L("div",{class:T(e(v).e("header"))},[L("button",{type:"button",class:T(e(u).arrowLeftBtn),onClick:e(x)},[ie(p.$slots,"prev-year",{},()=>[k(e(pe),null,{default:ee(()=>[k(e(at))]),_:1})])],10,["onClick"]),p.unlinkPanels?(N(),Q("button",{key:0,type:"button",disabled:!e(W),class:T(e(u).arrowRightBtn),onClick:e($)},[ie(p.$slots,"next-year",{},()=>[k(e(pe),null,{default:ee(()=>[k(e(lt))]),_:1})])],10,["disabled","onClick"])):de("v-if",!0),L("div",null,oe(e(U)),1)],2),k(Ht,{"selection-mode":"range",date:i.value,"min-date":F.value,"max-date":H.value,"range-state":B.value,"disabled-date":e(I),onChangerange:A,onPick:z,onSelect:ne},null,8,["date","min-date","max-date","range-state","disabled-date"])],2),L("div",{class:T(e(V).content)},[L("div",{class:T(e(v).e("header"))},[p.unlinkPanels?(N(),Q("button",{key:0,type:"button",disabled:!e(W),class:T(e(V).arrowLeftBtn),onClick:e(K)},[ie(p.$slots,"prev-year",{},()=>[k(e(pe),null,{default:ee(()=>[k(e(at))]),_:1})])],10,["disabled","onClick"])):de("v-if",!0),L("button",{type:"button",class:T(e(V).arrowRightBtn),onClick:e(S)},[ie(p.$slots,"next-year",{},()=>[k(e(pe),null,{default:ee(()=>[k(e(lt))]),_:1})])],10,["onClick"]),L("div",null,oe(e(h)),1)],2),k(Ht,{"selection-mode":"range",date:c.value,"min-date":F.value,"max-date":H.value,"range-state":B.value,"disabled-date":e(I),onChangerange:A,onPick:z,onSelect:ne},null,8,["date","min-date","max-date","range-state","disabled-date"])],2)],2)],2)],2))}});var Ll=je(Wl,[["__file","panel-year-range.vue"]]);const Ul=function(l){switch(l){case"daterange":case"datetimerange":return Tl;case"monthrange":return Al;case"yearrange":return Ll;default:return $l}};J.extend(Oa);J.extend(Ba);J.extend(Aa);J.extend(Na);J.extend(La);J.extend(ja);J.extend(Za);J.extend(Ka);var jl=he({name:"ElDatePicker",install:null,props:fl,emits:[$t],setup(l,{expose:s,emit:n,slots:t}){const i=Ve("picker-panel"),c=Z(()=>!l.format);St("ElIsDefaultFormat",c),St("ElPopperOptions",qt(Ue(l,"popperOptions"))),St(Yt,{slots:t,pickerNs:i});const r=X();s({focus:()=>{var m;(m=r.value)==null||m.focus()},blur:()=>{var m;(m=r.value)==null||m.blur()},handleOpen:()=>{var m;(m=r.value)==null||m.handleOpen()},handleClose:()=>{var m;(m=r.value)==null||m.handleClose()}});const g=m=>{n($t,m)};return()=>{var m;const y=(m=l.format)!=null?m:Ga[l.type]||dt,u=Ul(l.type);return k(al,Mt(l,{format:y,type:l.type,ref:r,"onUpdate:modelValue":g}),{default:V=>k(u,V,{"prev-month":t["prev-month"],"next-month":t["next-month"],"prev-year":t["prev-year"],"next-year":t["next-year"]}),"range-separator":t["range-separator"]})}}});const zl=ba(jl),Zl=he({__name:"reactive-config",setup(l){const s=X(300);let n=1;const t=()=>{s.value+=n,s.value>=window.innerWidth&&(n=-1),s.value<=450&&(n=1),requestAnimationFrame(t)};t();const i=Vt(),c=()=>{s.value=450;const r=i(k(Ft,null,null),()=>({title:`当前宽度: ${s.value}px`,width:`${s.value}px`}));console.log(r)};return(r,v)=>{const g=_n,m=He;return N(),Q("div",null,[fe(oe(s.value)+" ",1),k(g),k(m,{onClick:c},{default:ee(()=>v[0]||(v[0]=[fe("打开弹窗")])),_:1,__:[0]})])}}}),Hl=`<template>
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

<script setup lang="tsx">
import { RxRender } from "@vue-cmd/core";
import { useDialog } from "@vue-cmd/element-plus";
import DialogContent from "./shared/DialogContent.vue";
import { ref, reactive } from "vue";

const count = ref(0);
setInterval(() => {
  count.value++;
}, 1000);

const CommandDialog = useDialog();
const openDialog = () => {
  CommandDialog(<DialogContent v-model={formValue.name} count={count.value} />);
};

const openDialog2 = () => {
  CommandDialog(
    RxRender(() => (
      <DialogContent v-model={formValue.name} count={count.value} />
    )),
  );
};

const formValue = reactive({
  name: "panda",
});
<\/script>

<style lang="scss" scoped></style>
`,Kl={class:"flex justify-center items-center"},Gl=he({__name:"reactive-component",setup(l){const s=X(0);setInterval(()=>{s.value++},1e3);const n=Vt(),t=()=>{n(k(Ft,{modelValue:c.name,"onUpdate:modelValue":r=>c.name=r,count:s.value},null))},i=()=>{n(ga(()=>k(Ft,{modelValue:c.name,"onUpdate:modelValue":r=>c.name=r,count:s.value},null)))},c=qt({name:"panda"});return(r,v)=>{const g=_n,m=He;return N(),Q("div",null,[fe(oe(c)+" ",1),k(g),fe(" "+oe(s.value)+" ",1),k(g),L("div",Kl,[k(m,{onClick:t},{default:ee(()=>v[0]||(v[0]=[fe("打开非响应性式弹窗")])),_:1,__:[0]}),k(m,{onClick:i},{default:ee(()=>v[1]||(v[1]=[fe("打开响应式弹窗")])),_:1,__:[1]})]),k(g)])}}}),Ql=`<template>
  <div class="flower-container">
    <div class="flower-stage">
      <div id="flower" class="flower"></div>
    </div>
    <div class="stage-info">
      <h3>{{ stages[currentStage].title }}</h3>
      <p>{{ stages[currentStage].description }}</p>
    </div>

    <div class="controls">
      <button
        class="step-btn"
        :disabled="currentStage === 0"
        @click="prevStage"
      >
        上一步
      </button>
      <div class="step-indicators">
        <div
          v-for="(_, index) in stages"
          :key="index"
          class="step-dot"
          :class="{ active: index === currentStage }"
          @click="goToStage(index)"
        ></div>
      </div>
      <button
        class="step-btn"
        :disabled="currentStage === stages.length - 1"
        @click="nextStage"
      >
        下一步
      </button>
    </div>
  </div>
</template>

<script setup lang="tsx">
import type { IConsumer } from "@vue-cmd/core";
import { useRawCommand } from "@vue-cmd/hooks";
import { onMounted, reactive, ref, Transition, TransitionGroup } from "vue";

const rawCommand = useRawCommand({
  immediate: false,
  fragment: true,
  appendTo: "#flower",
  customClassName: "flower-stage",
  displayDirective: "show",
  onShow: (el) => {
    el.style.opacity = "1";
  },
  onHide: (el) => {
    el.style.opacity = "0";
  },
});

// 定义在 reactive 中使用的 IConsumer 类型
// Vue 3 的 reactive 会自动解包 Ref 类型，并且会递归处理嵌套的对象和数组
type ReactiveIConsumer = Omit<
  IConsumer,
  "visible" | "componentRef" | "stack"
> & {
  visible: boolean;
  componentRef?: any;
  stack: ReactiveIConsumer[];
};
interface StageItem {
  title: string;
  description: string;
  consumer?: ReactiveIConsumer;
}

const stages = reactive<StageItem[]>([
  {
    title: "种子阶段",
    description: "这是一粒小小的种子，蕴含着生命的潜力，等待着发芽的时机。",
  },
  {
    title: "发芽阶段",
    description: "种子吸收了水分和养分，开始萌发出嫩绿的新芽。",
  },
  {
    title: "生长阶段",
    description: "幼苗逐渐长高，茎干变得更加挺拔，开始长出叶子。",
  },
  {
    title: "花蕾阶段",
    description: "植株顶端出现了花蕾，这是开花的前兆。",
  },
  {
    title: "绽放阶段",
    description: "花蕾逐渐打开，美丽的花瓣舒展开来，展现出绚丽的色彩。",
  },
]);

onMounted(() => {
  const seed = rawCommand(<div class="seed"></div>);
  const stem = rawCommand(<div class="stem"></div>);
  const leaf = rawCommand(
    <>
      <div class="leaf left-leaf"></div>
      <div class="leaf right-leaf"></div>
    </>,
  );
  const bud = rawCommand(<div class="bud"></div>);
  const petal = rawCommand(
    <>
      {new Array(8).fill(0).map((_, i) => (
        <div key={i + 1} class={"petal" + \` petal-\${i + 1}\`}></div>
      ))}
    </>,
  );

  stages[0].consumer = seed as unknown as ReactiveIConsumer;
  stages[1].consumer = stem as unknown as ReactiveIConsumer;
  stages[2].consumer = leaf as unknown as ReactiveIConsumer;
  stages[3].consumer = bud as unknown as ReactiveIConsumer;
  stages[4].consumer = petal as unknown as ReactiveIConsumer;
  goToStage(0);
});

// 当前所处的阶段
const currentStage = ref(0);

// 切换到下一个阶段
const nextStage = () => {
  if (currentStage.value < stages.length - 1) {
    currentStage.value++;
    goToStage(currentStage.value);
  }
};

// 切换到上一个阶段
const prevStage = () => {
  if (currentStage.value > 0) {
    currentStage.value--;
    goToStage(currentStage.value);
  }
};

// 跳转到指定阶段
const goToStage = (stage: number) => {
  if (stage >= 0 && stage < stages.length) {
    currentStage.value = stage;
    stages.forEach((item, index) => {
      if (index <= currentStage.value) {
        item.consumer?.show();
      } else {
        item.consumer?.hide();
      }
    });
  }
};
<\/script>

<style>
.flower-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
}

.flower-stage {
  position: relative;
  height: 300px;
  width: 300px;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
  border-radius: 50%;
}

.flower {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.8s ease;
}

/* 种子 */
.seed {
  position: absolute;
  bottom: 40px;
  left: 50%;
  margin-left: -8px;
  width: 16px;
  height: 10px;
  background-color: #8b4513;
  border-radius: 50% 50% 50% 50%;
  transition: all 0.8s ease;
  z-index: 1;
  transform: rotate(45deg) scale(1);
}

/* 茎 */
.stem {
  position: absolute;
  bottom: 40px;
  left: 50%;
  margin-left: -3px;
  width: 6px;
  background-color: #4caf50;
  transition: all 0.8s ease;
  border-radius: 3px;
  height: 200px;
}

/* 叶子 */
.leaf {
  position: absolute;
  width: 40px;
  height: 20px;
  background-color: #4caf50;
  border-radius: 50% 50% 50% 50%;
  transition: all 0.8s ease;
  transform: rotate(-30deg);
}

.left-leaf {
  left: calc(50% - 45px);
  top: 50%;
}

.right-leaf {
  right: calc(50% - 45px);
  top: 45%;
  transform: rotate(30deg);
}

/* 花蕾 */
.bud {
  position: absolute;
  bottom: 220px;
  left: 50%;
  margin-left: -10px;
  width: 20px;
  height: 20px;
  background-color: #ff9800;
  border-radius: 50%;
  transition: all 0.8s ease;
  transform: scale(1);
  z-index: 2;
}

/* 花瓣 */
.petal {
  position: absolute;
  bottom: 230px;
  left: 50%;
  width: 30px;
  height: 60px;
  margin-left: -15px;
  background-color: #ff5722;
  border-radius: 50% 50% 50% 50%;
  transition: all 0.8s ease;
  transform: scale(1) rotate(calc(var(--n) * 45deg)) translateY(-30px);
  transform-origin: bottom center;
}

.petal-1 {
  --n: 0;
}

.petal-2 {
  --n: 1;
}

.petal-3 {
  --n: 2;
}

.petal-4 {
  --n: 3;
}

.petal-5 {
  --n: 4;
}

.petal-6 {
  --n: 5;
}

.petal-7 {
  --n: 6;
}

.petal-8 {
  --n: 7;
}

/* 控制区和信息展示 */
.stage-info {
  text-align: center;
  margin-bottom: 2rem;
  min-height: 100px;
}

.stage-info h3 {
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.stage-info p {
  color: #666;
  line-height: 1.5;
}

.controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.step-btn {
  padding: 8px 16px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.step-btn:hover:not(:disabled) {
  background-color: #3a9d70;
}

.step-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.step-indicators {
  display: flex;
  gap: 10px;
}

.step-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #ddd;
  cursor: pointer;
  transition:
    background-color 0.3s,
    transform 0.3s;
}

.step-dot.active {
  background-color: #42b983;
  transform: scale(1.2);
}

.step-dot:hover:not(.active) {
  background-color: #bbb;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
`;var ql=Object.defineProperty,pn=Object.getOwnPropertySymbols,Xl=Object.prototype.hasOwnProperty,Jl=Object.prototype.propertyIsEnumerable,hn=(l,s,n)=>s in l?ql(l,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):l[s]=n,bn=(l,s)=>{for(var n in s||(s={}))Xl.call(s,n)&&hn(l,n,s[n]);if(pn)for(var n of pn(s))Jl.call(s,n)&&hn(l,n,s[n]);return l};/*!
* vue-router v4.5.1
* (c) 2025 Eduardo San Martin Morote
* @license MIT
*/var gn;(function(l){l.pop="pop",l.push="push"})(gn||(gn={}));var yn;(function(l){l.back="back",l.forward="forward",l.unknown=""})(yn||(yn={}));var kn;(function(l){l[l.aborted=4]="aborted",l[l.cancelled=8]="cancelled",l[l.duplicated=16]="duplicated"})(kn||(kn={}));const es=l=>{const s=Qt();return(n,t={})=>{var i,c;const r=bn(bn({},l),t);r.displayDirective=(i=r.displayDirective)!=null?i:"if",r.onShow=r.onShow||(m=>{m.style.display="block"}),r.onHide=r.onHide||(m=>{m.style.display="none"});const v=X((c=r.immediate)!=null?c:!0);r.visible=v;const g=ya(s,qn(he({setup(){return r.displayDirective==="show"&&xe(()=>v.value,()=>{Fe().then(()=>{const m=y=>y.shapeFlag===1?[y.el]:y.shapeFlag===16?y.children.map(u=>m(u)):(console.warn("TODO:other case wait implement",y),[]);m(n).flat(1/0).forEach(y=>{var u,V;v.value?(u=r.onShow)==null||u.call(r,y,g):(V=r.onHide)==null||V.call(r,y,g)})})},{immediate:!0}),()=>{const m=r.displayDirective,y=r.outer;return y?y(m==="if"?v.value?n:null:n):m==="if"?v.value?n:null:n}}})),r);return g}},ts={class:"flower-container"},ns={class:"stage-info"},as={class:"controls"},ls=["disabled"],ss={class:"step-indicators"},rs=["onClick"],os=["disabled"],is=he({__name:"flower",setup(l){const s=es({immediate:!1,fragment:!0,appendTo:"#flower",customClassName:"flower-stage",displayDirective:"show",onShow:v=>{v.style.opacity="1"},onHide:v=>{v.style.opacity="0"}}),n=qt([{title:"种子阶段",description:"这是一粒小小的种子，蕴含着生命的潜力，等待着发芽的时机。"},{title:"发芽阶段",description:"种子吸收了水分和养分，开始萌发出嫩绿的新芽。"},{title:"生长阶段",description:"幼苗逐渐长高，茎干变得更加挺拔，开始长出叶子。"},{title:"花蕾阶段",description:"植株顶端出现了花蕾，这是开花的前兆。"},{title:"绽放阶段",description:"花蕾逐渐打开，美丽的花瓣舒展开来，展现出绚丽的色彩。"}]);Dn(()=>{const v=s(k("div",{class:"seed"},null)),g=s(k("div",{class:"stem"},null)),m=s(k(be,null,[k("div",{class:"leaf left-leaf"},null),k("div",{class:"leaf right-leaf"},null)])),y=s(k("div",{class:"bud"},null)),u=s(k(be,null,[new Array(8).fill(0).map((V,P)=>k("div",{key:P+1,class:`petal petal-${P+1}`},null))]));n[0].consumer=v,n[1].consumer=g,n[2].consumer=m,n[3].consumer=y,n[4].consumer=u,r(0)});const t=X(0),i=()=>{t.value<n.length-1&&(t.value++,r(t.value))},c=()=>{t.value>0&&(t.value--,r(t.value))},r=v=>{v>=0&&v<n.length&&(t.value=v,n.forEach((g,m)=>{var y,u;m<=t.value?(y=g.consumer)==null||y.show():(u=g.consumer)==null||u.hide()}))};return(v,g)=>(N(),Q("div",ts,[g[0]||(g[0]=L("div",{class:"flower-stage"},[L("div",{id:"flower",class:"flower"})],-1)),L("div",ns,[L("h3",null,oe(n[t.value].title),1),L("p",null,oe(n[t.value].description),1)]),L("div",as,[L("button",{class:"step-btn",disabled:t.value===0,onClick:c}," 上一步 ",8,ls),L("div",ss,[(N(!0),Q(be,null,Te(n,(m,y)=>(N(),Q("div",{key:y,class:T(["step-dot",{active:y===t.value}]),onClick:u=>r(y)},null,10,rs))),128))]),L("button",{class:"step-btn",disabled:t.value===n.length-1,onClick:i}," 下一步 ",8,os)])]))}}),us=`<template>
  <div class="flex justify-center items-center">
    <el-button @click="openDialog">打开弹窗</el-button>
  </div>
</template>

<script setup lang="tsx">
import { useConsumer } from "@vue-cmd/core";
import { useDialog } from "@vue-cmd/element-plus";
import { defineComponent, ref } from "vue";

const CommandDialog = useDialog();

let step = 1;
const loading = ref(false);
const StepView = defineComponent({
  setup() {
    const consumer = useConsumer();
    const nextStep = () => {
      loading.value = true;
      setTimeout(() => {
        consumer.destroyWithResolve();
        loading.value = false;
      }, 2000);
    };

    return () => {
      return (
        <div v-loading={loading.value}>
          <p>step({step})ing...</p>
          <el-button onClick={() => nextStep()}>下一步</el-button>
        </div>
      );
    };
  },
});

const attrs = {
  // 防止任务进行中,弹窗被意外关闭
  beforeClose: (done: () => void) => {
    if (!loading.value) {
      done();
    }
  },
};

const openDialog = async () => {
  step = 1;
  await CommandDialog(<StepView />, {
    title: "步骤" + step,
    attrs,
  }).promise;
  step++;
  await CommandDialog(<StepView />, {
    title: "步骤" + step,
    attrs,
  }).promise;
  step++;
  await CommandDialog(<StepView />, {
    title: "步骤" + step,
    attrs,
  }).promise;
  console.log("所有任务完成");
};
<\/script>

<style lang="scss" scoped></style>
`,cs={class:"flex justify-center items-center"},ds=he({__name:"promise2",setup(l){const s=Vt();let n=1;const t=X(!1),i=he({setup(){const v=Mn(),g=()=>{t.value=!0,setTimeout(()=>{v.destroyWithResolve(),t.value=!1},2e3)};return()=>_e(k("div",null,[k("p",null,[fe("step("),n,fe(")ing...")]),k(He,{onClick:()=>g()},{default:()=>[fe("下一步")]})]),[[Xt,t.value]])}}),c={beforeClose:v=>{t.value||v()}},r=async()=>{n=1,await s(k(i,null,null),{title:"步骤"+n,attrs:c}).promise,n++,await s(k(i,null,null),{title:"步骤"+n,attrs:c}).promise,n++,await s(k(i,null,null),{title:"步骤"+n,attrs:c}).promise,console.log("所有任务完成")};return(v,g)=>{const m=He;return N(),Q("div",cs,[k(m,{onClick:r},{default:ee(()=>g[0]||(g[0]=[fe("打开弹窗")])),_:1,__:[0]})])}}}),fs=`<script lang="tsx" setup>
import { useDialog } from "@vue-cmd/element-plus";
import EditRow from "./edit-row.vue";
import { ref } from "vue";
const CommandDialog = useDialog();

const loading = ref(false);
const editRow = async (row: any) => {
  try {
    await CommandDialog(<EditRow row={row} />, { title: "编辑列" }).promise;
  } catch {
  } finally {
    loading.value = true;
    setTimeout(() => {
      loading.value = false;
      console.log("列表刷新成功");
    }, 2000);
  }
};

const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    state: "California",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    state: "California",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    state: "California",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    state: "California",
  },
];
<\/script>

<template>
  <el-table v-loading="loading" :data="tableData" style="width: 100%">
    <el-table-column fixed prop="date" label="Date" width="150" />
    <el-table-column prop="name" label="Name" width="120" />
    <el-table-column prop="state" label="State" width="120" />
    <el-table-column fixed="right" label="Operations" min-width="120">
      <template #default="{ row }">
        <el-button link type="primary" @click="editRow(row)">Edit</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
`,vs=he({__name:"edit-row",props:{row:{}},setup(l){const n=X({...l.row}),t=Mn(),i=X(!1),c=()=>{i.value=!0,setTimeout(()=>{i.value=!1,console.log("后端表示保存成功"),t.destroyWithResolve(n.value)},2e3)},r=()=>{t.destroyWithReject(new Error("取消编辑"))};return(v,g)=>{const m=He,y=Xt;return _e((N(),Ce(e(Sa),null,{default:ee(()=>[k(e(kt),{label:"日期"},{default:ee(()=>[k(e(zl),{modelValue:n.value.date,"onUpdate:modelValue":g[0]||(g[0]=u=>n.value.date=u),type:"date",placeholder:"选择日期",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD"},null,8,["modelValue"])]),_:1}),k(e(kt),{label:"姓名"},{default:ee(()=>[k(e(qe),{modelValue:n.value.name,"onUpdate:modelValue":g[1]||(g[1]=u=>n.value.name=u),placeholder:"请输入姓名"},null,8,["modelValue"])]),_:1}),k(e(kt),{label:"州/省"},{default:ee(()=>[k(e(qe),{modelValue:n.value.state,"onUpdate:modelValue":g[2]||(g[2]=u=>n.value.state=u),placeholder:"请输入州/省"},null,8,["modelValue"])]),_:1}),k(e(kt),null,{default:ee(()=>[k(m,{onClick:c},{default:ee(()=>g[3]||(g[3]=[fe("保存")])),_:1,__:[3]}),k(m,{onClick:r},{default:ee(()=>g[4]||(g[4]=[fe("取消")])),_:1,__:[4]})]),_:1})]),_:1})),[[y,i.value]])}}}),ms=he({__name:"promise",setup(l){const s=Vt(),n=X(!1),t=async c=>{try{await s(k(vs,{row:c},null),{title:"编辑列"}).promise}catch{}finally{n.value=!0,setTimeout(()=>{n.value=!1,console.log("列表刷新成功")},2e3)}},i=[{date:"2016-05-03",name:"Tom",state:"California"},{date:"2016-05-02",name:"Tom",state:"California"},{date:"2016-05-04",name:"Tom",state:"California"},{date:"2016-05-01",name:"Tom",state:"California"}];return(c,r)=>{const v=_a,g=He,m=Ma,y=Xt;return _e((N(),Ce(m,{data:i,style:{width:"100%"}},{default:ee(()=>[k(v,{fixed:"",prop:"date",label:"Date",width:"150"}),k(v,{prop:"name",label:"Name",width:"120"}),k(v,{prop:"state",label:"State",width:"120"}),k(v,{fixed:"right",label:"Operations","min-width":"120"},{default:ee(({row:u})=>[k(g,{link:"",type:"primary",onClick:V=>t(u)},{default:ee(()=>r[0]||(r[0]=[fe("Edit")])),_:2,__:[0]},1032,["onClick"])]),_:1})]),_:1})),[[y,n.value]])}}}),ks=JSON.parse('{"title":"进阶用法","description":"","frontmatter":{},"headers":[],"relativePath":"example/advanced.md","filePath":"example/advanced.md"}'),ps={name:"example/advanced.md"},ws=Object.assign(ps,{setup(l){const s=X(!0);return(n,t)=>{const i=Xn("ClientOnly");return N(),Q("div",null,[t[5]||(t[5]=Jn('<h1 id="进阶用法" tabindex="-1">进阶用法 <a class="header-anchor" href="#进阶用法" aria-label="Permalink to &quot;进阶用法&quot;">​</a></h1><p>本章节将介绍命令式组件的一些高级特性和使用场景。</p><h2 id="promise特性" tabindex="-1">Promise特性 <a class="header-anchor" href="#promise特性" aria-label="Permalink to &quot;Promise特性&quot;">​</a></h2><p>Promise是使用命令式组件后获得的最大优势之一，它使我们与组件的通信方式转变为基于Promise的异步流程。以下通过典型案例展示其带来的便利：</p><h3 id="案例一-表格行内编辑" tabindex="-1">案例一：表格行内编辑 <a class="header-anchor" href="#案例一-表格行内编辑" aria-label="Permalink to &quot;案例一：表格行内编辑&quot;">​</a></h3>',5)),_e(k(e(ht),null,null,512),[[Le,s.value]]),k(i,null,{default:ee(()=>[k(e(bt),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{s.value=!1}),vueCode:e(fs)},{vue:ee(()=>[k(ms)]),_:1},8,["vueCode"])]),_:1}),t[6]||(t[6]=L("p",null,"在管理系统中，通过弹窗编辑表格行数据是常见需求。对比命令式与声明式实现方式，命令式组件在开发体验和代码简洁度上具有明显优势。",-1)),t[7]||(t[7]=L("h3",{id:"案例二-多步骤弹窗",tabindex:"-1"},[fe("案例二：多步骤弹窗 "),L("a",{class:"header-anchor",href:"#案例二-多步骤弹窗","aria-label":'Permalink to "案例二：多步骤弹窗"'},"​")],-1)),t[8]||(t[8]=L("p",null,"某些场景下，需要在弹窗中执行多个连续步骤，例如：数据选择、内容编辑、信息确认等。利用Promise特性可以优雅地实现这类流程：",-1)),_e(k(e(ht),null,null,512),[[Le,s.value]]),k(i,null,{default:ee(()=>[k(e(bt),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[1]||(t[1]=()=>{s.value=!1}),vueCode:e(us)},{vue:ee(()=>[k(ds)]),_:1},8,["vueCode"])]),_:1}),t[9]||(t[9]=L("h3",{id:"案例三-整点花活儿-🤪",tabindex:"-1"},[fe("案例三：整点花活儿(🤪) "),L("a",{class:"header-anchor",href:"#案例三-整点花活儿-🤪","aria-label":'Permalink to "案例三：整点花活儿(🤪)"'},"​")],-1)),t[10]||(t[10]=L("p",null,"命令组件其实不仅仅是用于弹窗这类场景,它也可以当做一个特殊的节点挂载管理器:",-1)),_e(k(e(ht),null,null,512),[[Le,s.value]]),k(i,null,{default:ee(()=>[k(e(bt),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[2]||(t[2]=()=>{s.value=!1}),vueCode:e(Ql)},{vue:ee(()=>[k(is)]),_:1},8,["vueCode"])]),_:1}),t[11]||(t[11]=L("h2",{id:"响应式组件",tabindex:"-1"},[fe("响应式组件 "),L("a",{class:"header-anchor",href:"#响应式组件","aria-label":'Permalink to "响应式组件"'},"​")],-1)),t[12]||(t[12]=L("p",null,[fe("命令式组件存在一个固有限制："),L("code",null,"DialogContent"),fe("组件的视图无法自动响应props数据变化。此时可通过"),L("code",null,"RxRender"),fe("包装渲染函数，将VNode生成延迟到Vue组件的渲染函数内部执行。其核心原理是将渲染函数封装为响应式组件，从而实现视图的动态更新。")],-1)),_e(k(e(ht),null,null,512),[[Le,s.value]]),k(i,null,{default:ee(()=>[k(e(bt),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[3]||(t[3]=()=>{s.value=!1}),vueCode:e(Hl)},{vue:ee(()=>[k(Gl)]),_:1},8,["vueCode"])]),_:1}),t[13]||(t[13]=L("h2",{id:"响应式配置",tabindex:"-1"},[fe("响应式配置 "),L("a",{class:"header-anchor",href:"#响应式配置","aria-label":'Permalink to "响应式配置"'},"​")],-1)),t[14]||(t[14]=L("p",null,"通常组件的展示形式相对固定，但在特定场景下，我们可能需要根据数据变化动态调整组件配置。实现方式非常简单：只需将配置项设计为返回配置对象的函数即可。",-1)),_e(k(e(ht),null,null,512),[[Le,s.value]]),k(i,null,{default:ee(()=>[k(e(bt),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[4]||(t[4]=()=>{s.value=!1}),vueCode:e(Ta)},{vue:ee(()=>[k(Zl)]),_:1},8,["vueCode"])]),_:1})])}}});export{ks as __pageData,ws as default};
