import{j as _,r as h,C,G as b,B as f,k as e,H as S,J as m,f as j,P as u,ay as L,g as F,w as U,n as X,d as q,F as B,W as z,E as H,t as w,I as M,u as p,X as J,aY as K,v as D}from"./chunks/framework.Cdqz12yZ.js";import{x as W,_ as A,I as nn,Q as en,N as O,O as x,E as k}from"./chunks/index.Bv9V6kn_.js";import{E as $,a as y,v as Z,b as V,c as tn,d as E,e as an,f as on,g as ln}from"./chunks/theme.B-R_-AgB.js";/* empty css                      */const sn=`<template>
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
`,rn=_({__name:"reactive-config",setup(i){const a=h(300);let t=1;const n=()=>{a.value+=t,a.value>=window.innerWidth&&(t=-1),a.value<=450&&(t=1),requestAnimationFrame(n)};n();const d=W(),v=()=>{a.value=450;const o=d(e(A,null,null),()=>({title:`当前宽度: ${a.value}px`,width:`${a.value}px`}));console.log(o)};return(o,l)=>{const s=$,r=y;return b(),C("div",null,[f(S(a.value)+" ",1),e(s),e(r,{onClick:v},{default:m(()=>l[0]||(l[0]=[f("打开弹窗")])),_:1,__:[0]})])}}}),un=`<template>
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
`,dn={class:"flex justify-center items-center"},cn=_({__name:"reactive-component",setup(i){const a=h(0);setInterval(()=>{a.value++},1e3);const t=W(),n=()=>{t(e(A,{modelValue:v.name,"onUpdate:modelValue":o=>v.name=o,count:a.value},null))},d=()=>{t(nn(()=>e(A,{modelValue:v.name,"onUpdate:modelValue":o=>v.name=o,count:a.value},null)))},v=j({name:"panda"});return(o,l)=>{const s=$,r=y;return b(),C("div",null,[f(S(v)+" ",1),e(s),f(" "+S(a.value)+" ",1),e(s),u("div",dn,[e(r,{onClick:n},{default:m(()=>l[0]||(l[0]=[f("打开非响应性式弹窗")])),_:1,__:[0]}),e(r,{onClick:d},{default:m(()=>l[1]||(l[1]=[f("打开响应式弹窗")])),_:1,__:[1]})]),e(s)])}}}),mn=`<template>
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
`;var pn=Object.defineProperty,I=Object.getOwnPropertySymbols,vn=Object.prototype.hasOwnProperty,fn=Object.prototype.propertyIsEnumerable,Y=(i,a,t)=>a in i?pn(i,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[a]=t,Q=(i,a)=>{for(var t in a||(a={}))vn.call(a,t)&&Y(i,t,a[t]);if(I)for(var t of I(a))fn.call(a,t)&&Y(i,t,a[t]);return i};/*!
* vue-router v4.5.1
* (c) 2025 Eduardo San Martin Morote
* @license MIT
*/var P;(function(i){i.pop="pop",i.push="push"})(P||(P={}));var G;(function(i){i.back="back",i.forward="forward",i.unknown=""})(G||(G={}));var N;(function(i){i[i.aborted=4]="aborted",i[i.cancelled=8]="cancelled",i[i.duplicated=16]="duplicated"})(N||(N={}));const gn=i=>{const a=F();return(t,n={})=>{var d,v;const o=Q(Q({},i),n);o.displayDirective=(d=o.displayDirective)!=null?d:"if",o.onShow=o.onShow||(r=>{r.style.display="block"}),o.onHide=o.onHide||(r=>{r.style.display="none"});const l=h((v=o.immediate)!=null?v:!0);o.visible=l;const s=en(a,L(_({setup(){return o.displayDirective==="show"&&U(()=>l.value,()=>{X().then(()=>{const r=c=>c.shapeFlag===1?[c.el]:c.shapeFlag===16?c.children.map(g=>r(g)):(console.warn("TODO:other case wait implement",c),[]);r(t).flat(1/0).forEach(c=>{var g,T;l.value?(g=o.onShow)==null||g.call(o,c,s):(T=o.onHide)==null||T.call(o,c,s)})})},{immediate:!0}),()=>{const r=o.displayDirective,c=o.outer;return c?c(r==="if"?l.value?t:null:t):r==="if"?l.value?t:null:t}}})),o);return s}},bn={class:"flower-container"},hn={class:"stage-info"},wn={class:"controls"},_n=["disabled"],Cn={class:"step-indicators"},yn=["onClick"],Dn=["disabled"],xn=_({__name:"flower",setup(i){const a=gn({immediate:!1,fragment:!0,appendTo:"#flower",customClassName:"flower-stage",displayDirective:"show",onShow:l=>{l.style.opacity="1"},onHide:l=>{l.style.opacity="0"}}),t=j([{title:"种子阶段",description:"这是一粒小小的种子，蕴含着生命的潜力，等待着发芽的时机。"},{title:"发芽阶段",description:"种子吸收了水分和养分，开始萌发出嫩绿的新芽。"},{title:"生长阶段",description:"幼苗逐渐长高，茎干变得更加挺拔，开始长出叶子。"},{title:"花蕾阶段",description:"植株顶端出现了花蕾，这是开花的前兆。"},{title:"绽放阶段",description:"花蕾逐渐打开，美丽的花瓣舒展开来，展现出绚丽的色彩。"}]);q(()=>{const l=a(e("div",{class:"seed"},null)),s=a(e("div",{class:"stem"},null)),r=a(e(B,null,[e("div",{class:"leaf left-leaf"},null),e("div",{class:"leaf right-leaf"},null)])),c=a(e("div",{class:"bud"},null)),g=a(e(B,null,[new Array(8).fill(0).map((T,R)=>e("div",{key:R+1,class:`petal petal-${R+1}`},null))]));t[0].consumer=l,t[1].consumer=s,t[2].consumer=r,t[3].consumer=c,t[4].consumer=g,o(0)});const n=h(0),d=()=>{n.value<t.length-1&&(n.value++,o(n.value))},v=()=>{n.value>0&&(n.value--,o(n.value))},o=l=>{l>=0&&l<t.length&&(n.value=l,t.forEach((s,r)=>{var c,g;r<=n.value?(c=s.consumer)==null||c.show():(g=s.consumer)==null||g.hide()}))};return(l,s)=>(b(),C("div",bn,[s[0]||(s[0]=u("div",{class:"flower-stage"},[u("div",{id:"flower",class:"flower"})],-1)),u("div",hn,[u("h3",null,S(t[n.value].title),1),u("p",null,S(t[n.value].description),1)]),u("div",wn,[u("button",{class:"step-btn",disabled:n.value===0,onClick:v}," 上一步 ",8,_n),u("div",Cn,[(b(!0),C(B,null,z(t,(r,c)=>(b(),C("div",{key:c,class:H(["step-dot",{active:c===n.value}]),onClick:g=>o(c)},null,10,yn))),128))]),u("button",{class:"step-btn",disabled:n.value===t.length-1,onClick:d}," 下一步 ",8,Dn)])]))}}),kn=`<template>
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
`,Sn={class:"flex justify-center items-center"},Tn=_({__name:"promise2",setup(i){const a=W();let t=1;const n=h(!1),d=_({setup(){const l=O(),s=()=>{n.value=!0,setTimeout(()=>{l.destroyWithResolve(),n.value=!1},2e3)};return()=>w(e("div",null,[e("p",null,[f("step("),t,f(")ing...")]),e(y,{onClick:()=>s()},{default:()=>[f("下一步")]})]),[[Z,n.value]])}}),v={beforeClose:l=>{n.value||l()}},o=async()=>{t=1,await a(e(d,null,null),{title:"步骤"+t,attrs:v}).promise,t++,await a(e(d,null,null),{title:"步骤"+t,attrs:v}).promise,t++,await a(e(d,null,null),{title:"步骤"+t,attrs:v}).promise,console.log("所有任务完成")};return(l,s)=>{const r=y;return b(),C("div",Sn,[e(r,{onClick:o},{default:m(()=>s[0]||(s[0]=[f("打开弹窗")])),_:1,__:[0]})])}}}),Vn=`<script lang="tsx" setup>
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
`,Wn=_({__name:"edit-row",props:{row:{}},setup(i){const t=h({...i.row}),n=O(),d=h(!1),v=()=>{d.value=!0,setTimeout(()=>{d.value=!1,console.log("后端表示保存成功"),n.destroyWithResolve(t.value)},2e3)},o=()=>{n.destroyWithReject(new Error("取消编辑"))};return(l,s)=>{const r=y,c=Z;return w((b(),M(p(an),null,{default:m(()=>[e(p(V),{label:"日期"},{default:m(()=>[e(p(tn),{modelValue:t.value.date,"onUpdate:modelValue":s[0]||(s[0]=g=>t.value.date=g),type:"date",placeholder:"选择日期",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD"},null,8,["modelValue"])]),_:1}),e(p(V),{label:"姓名"},{default:m(()=>[e(p(E),{modelValue:t.value.name,"onUpdate:modelValue":s[1]||(s[1]=g=>t.value.name=g),placeholder:"请输入姓名"},null,8,["modelValue"])]),_:1}),e(p(V),{label:"州/省"},{default:m(()=>[e(p(E),{modelValue:t.value.state,"onUpdate:modelValue":s[2]||(s[2]=g=>t.value.state=g),placeholder:"请输入州/省"},null,8,["modelValue"])]),_:1}),e(p(V),null,{default:m(()=>[e(r,{onClick:v},{default:m(()=>s[3]||(s[3]=[f("保存")])),_:1,__:[3]}),e(r,{onClick:o},{default:m(()=>s[4]||(s[4]=[f("取消")])),_:1,__:[4]})]),_:1})]),_:1})),[[c,d.value]])}}}),Bn=_({__name:"promise",setup(i){const a=W(),t=h(!1),n=async v=>{try{await a(e(Wn,{row:v},null),{title:"编辑列"}).promise}catch{}finally{t.value=!0,setTimeout(()=>{t.value=!1,console.log("列表刷新成功")},2e3)}},d=[{date:"2016-05-03",name:"Tom",state:"California"},{date:"2016-05-02",name:"Tom",state:"California"},{date:"2016-05-04",name:"Tom",state:"California"},{date:"2016-05-01",name:"Tom",state:"California"}];return(v,o)=>{const l=on,s=y,r=ln,c=Z;return w((b(),M(r,{data:d,style:{width:"100%"}},{default:m(()=>[e(l,{fixed:"",prop:"date",label:"Date",width:"150"}),e(l,{prop:"name",label:"Name",width:"120"}),e(l,{prop:"state",label:"State",width:"120"}),e(l,{fixed:"right",label:"Operations","min-width":"120"},{default:m(({row:g})=>[e(s,{link:"",type:"primary",onClick:T=>n(g)},{default:m(()=>o[0]||(o[0]=[f("Edit")])),_:2,__:[0]},1032,["onClick"])]),_:1})]),_:1})),[[c,t.value]])}}}),Yn=JSON.parse('{"title":"进阶用法","description":"","frontmatter":{},"headers":[],"relativePath":"example/advanced.md","filePath":"example/advanced.md"}'),An={name:"example/advanced.md"},Qn=Object.assign(An,{setup(i){const a=h(!0);return(t,n)=>{const d=J("ClientOnly");return b(),C("div",null,[n[5]||(n[5]=K("",5)),w(e(p(x),null,null,512),[[D,a.value]]),e(d,null,{default:m(()=>[e(p(k),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:n[0]||(n[0]=()=>{a.value=!1}),vueCode:p(Vn)},{vue:m(()=>[e(Bn)]),_:1},8,["vueCode"])]),_:1}),n[6]||(n[6]=u("p",null,"在管理系统中，通过弹窗编辑表格行数据是常见需求。对比命令式与声明式实现方式，命令式组件在开发体验和代码简洁度上具有明显优势。",-1)),n[7]||(n[7]=u("h3",{id:"案例二-多步骤弹窗",tabindex:"-1"},[f("案例二：多步骤弹窗 "),u("a",{class:"header-anchor",href:"#案例二-多步骤弹窗","aria-label":'Permalink to "案例二：多步骤弹窗"'},"​")],-1)),n[8]||(n[8]=u("p",null,"某些场景下，需要在弹窗中执行多个连续步骤，例如：数据选择、内容编辑、信息确认等。利用Promise特性可以优雅地实现这类流程：",-1)),w(e(p(x),null,null,512),[[D,a.value]]),e(d,null,{default:m(()=>[e(p(k),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:n[1]||(n[1]=()=>{a.value=!1}),vueCode:p(kn)},{vue:m(()=>[e(Tn)]),_:1},8,["vueCode"])]),_:1}),n[9]||(n[9]=u("h3",{id:"案例三-整点花活儿-🤪",tabindex:"-1"},[f("案例三：整点花活儿(🤪) "),u("a",{class:"header-anchor",href:"#案例三-整点花活儿-🤪","aria-label":'Permalink to "案例三：整点花活儿(🤪)"'},"​")],-1)),n[10]||(n[10]=u("p",null,"命令组件其实不仅仅是用于弹窗这类场景,它也可以当做一个特殊的节点挂载管理器:",-1)),w(e(p(x),null,null,512),[[D,a.value]]),e(d,null,{default:m(()=>[e(p(k),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:n[2]||(n[2]=()=>{a.value=!1}),vueCode:p(mn)},{vue:m(()=>[e(xn)]),_:1},8,["vueCode"])]),_:1}),n[11]||(n[11]=u("h2",{id:"响应式组件",tabindex:"-1"},[f("响应式组件 "),u("a",{class:"header-anchor",href:"#响应式组件","aria-label":'Permalink to "响应式组件"'},"​")],-1)),n[12]||(n[12]=u("p",null,[f("命令式组件存在一个固有限制："),u("code",null,"DialogContent"),f("组件的视图无法自动响应props数据变化。此时可通过"),u("code",null,"RxRender"),f("包装渲染函数，将VNode生成延迟到Vue组件的渲染函数内部执行。其核心原理是将渲染函数封装为响应式组件，从而实现视图的动态更新。")],-1)),w(e(p(x),null,null,512),[[D,a.value]]),e(d,null,{default:m(()=>[e(p(k),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:n[3]||(n[3]=()=>{a.value=!1}),vueCode:p(un)},{vue:m(()=>[e(cn)]),_:1},8,["vueCode"])]),_:1}),n[13]||(n[13]=u("h2",{id:"响应式配置",tabindex:"-1"},[f("响应式配置 "),u("a",{class:"header-anchor",href:"#响应式配置","aria-label":'Permalink to "响应式配置"'},"​")],-1)),n[14]||(n[14]=u("p",null,"通常组件的展示形式相对固定，但在特定场景下，我们可能需要根据数据变化动态调整组件配置。实现方式非常简单：只需将配置项设计为返回配置对象的函数即可。",-1)),w(e(p(x),null,null,512),[[D,a.value]]),e(d,null,{default:m(()=>[e(p(k),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:n[4]||(n[4]=()=>{a.value=!1}),vueCode:p(sn)},{vue:m(()=>[e(rn)]),_:1},8,["vueCode"])]),_:1})])}}});export{Yn as __pageData,Qn as default};
