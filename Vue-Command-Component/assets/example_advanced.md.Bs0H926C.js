import{j as y,r as h,C as _,E as b,B as v,k as o,G as T,I as m,f as I,O as c,aw as N,g as M,w as L,n as $,d as F,F as R,V as U,y as q,t as w,H as Y,u as p,W as z,aW as X,v as x}from"./chunks/framework.BdKND-4d.js";import{u as B,_ as A,R as H,c as K,a as Q,O as k,E as S}from"./chunks/index.CIiaSTa5.js";import{E as G,a as C,v as Z,b as V,c as J,d as P,e as nn,f as en,g as tn}from"./chunks/theme.DPtADWyO.js";/* empty css                      */const on=`<template>
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
`,an=y({__name:"reactive-config",setup(i){const e=h(300);let t=1;const n=()=>{e.value+=t,e.value>=window.innerWidth&&(t=-1),e.value<=450&&(t=1),requestAnimationFrame(n)};n();const r=B(),f=()=>{e.value=450;const a=r(o(A,null,null),()=>({title:`当前宽度: ${e.value}px`,width:`${e.value}px`}));console.log(a)};return(a,l)=>{const s=G,u=C;return b(),_("div",null,[v(T(e.value)+" ",1),o(s),o(u,{onClick:f},{default:m(()=>l[0]||(l[0]=[v("打开弹窗")])),_:1,__:[0]})])}}}),ln=`<template>
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
`,sn={class:"flex justify-center items-center"},rn=y({__name:"reactive-component",setup(i){const e=h(0);setInterval(()=>{e.value++},1e3);const t=B(),n=()=>{t(o(A,{modelValue:f.name,"onUpdate:modelValue":a=>f.name=a,count:e.value},null))},r=()=>{t(H(()=>o(A,{modelValue:f.name,"onUpdate:modelValue":a=>f.name=a,count:e.value},null)))},f=I({name:"panda"});return(a,l)=>{const s=G,u=C;return b(),_("div",null,[v(T(f)+" ",1),o(s),v(" "+T(e.value)+" ",1),o(s),c("div",sn,[o(u,{onClick:n},{default:m(()=>l[0]||(l[0]=[v("打开非响应性式弹窗")])),_:1,__:[0]}),o(u,{onClick:r},{default:m(()=>l[1]||(l[1]=[v("打开响应式弹窗")])),_:1,__:[1]})]),o(s)])}}}),un=`<template>
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
`;function W(i){"@babel/helpers - typeof";return W=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},W(i)}function cn(i,e){if(W(i)!="object"||!i)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var n=t.call(i,e);if(W(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function dn(i){var e=cn(i,"string");return W(e)=="symbol"?e:e+""}function mn(i,e,t){return(e=dn(e))in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function j(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable})),t.push.apply(t,n)}return t}function O(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?j(Object(t),!0).forEach(function(n){mn(i,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(t,n))})}return i}const pn=i=>{const e=M();return(t,n={})=>{var r,f;const a=O(O({},i),n);a.displayDirective=(r=a.displayDirective)!==null&&r!==void 0?r:"if",a.onShow=a.onShow||(u=>{u.style.display="block"}),a.onHide=a.onHide||(u=>{u.style.display="none"});const l=h((f=a.immediate)!==null&&f!==void 0?f:!0);a.visible=l;const s=K(e,N(y({setup(){return a.displayDirective==="show"&&L(()=>l.value,()=>{$().then(()=>{const u=d=>d.shapeFlag===1?[d.el]:d.shapeFlag===16?d.children.map(g=>u(g)):(console.warn("TODO:other case wait implement",d),[]);u(t).flat(1/0).forEach(d=>{var g,D;l.value?(g=a.onShow)===null||g===void 0||g.call(a,d,s):(D=a.onHide)===null||D===void 0||D.call(a,d,s)})})},{immediate:!0}),()=>{const u=a.displayDirective,d=a.outer;return d?d(u==="if"?l.value?t:null:t):u==="if"?l.value?t:null:t}}})),a);return s}},fn={class:"flower-container"},vn={class:"stage-info"},gn={class:"controls"},bn=["disabled"],hn={class:"step-indicators"},wn=["onClick"],yn=["disabled"],_n=y({__name:"flower",setup(i){const e=pn({immediate:!1,fragment:!0,appendTo:"#flower",customClassName:"flower-stage",displayDirective:"show",onShow:l=>{l.style.opacity="1"},onHide:l=>{l.style.opacity="0"}}),t=I([{title:"种子阶段",description:"这是一粒小小的种子，蕴含着生命的潜力，等待着发芽的时机。"},{title:"发芽阶段",description:"种子吸收了水分和养分，开始萌发出嫩绿的新芽。"},{title:"生长阶段",description:"幼苗逐渐长高，茎干变得更加挺拔，开始长出叶子。"},{title:"花蕾阶段",description:"植株顶端出现了花蕾，这是开花的前兆。"},{title:"绽放阶段",description:"花蕾逐渐打开，美丽的花瓣舒展开来，展现出绚丽的色彩。"}]);F(()=>{const l=e(o("div",{class:"seed"},null)),s=e(o("div",{class:"stem"},null)),u=e(o(R,null,[o("div",{class:"leaf left-leaf"},null),o("div",{class:"leaf right-leaf"},null)])),d=e(o("div",{class:"bud"},null)),g=e(o(R,null,[new Array(8).fill(0).map((D,E)=>o("div",{key:E+1,class:`petal petal-${E+1}`},null))]));t[0].consumer=l,t[1].consumer=s,t[2].consumer=u,t[3].consumer=d,t[4].consumer=g,a(0)});const n=h(0),r=()=>{n.value<t.length-1&&(n.value++,a(n.value))},f=()=>{n.value>0&&(n.value--,a(n.value))},a=l=>{l>=0&&l<t.length&&(n.value=l,t.forEach((s,u)=>{var d,g;u<=n.value?(d=s.consumer)==null||d.show():(g=s.consumer)==null||g.hide()}))};return(l,s)=>(b(),_("div",fn,[s[0]||(s[0]=c("div",{class:"flower-stage"},[c("div",{id:"flower",class:"flower"})],-1)),c("div",vn,[c("h3",null,T(t[n.value].title),1),c("p",null,T(t[n.value].description),1)]),c("div",gn,[c("button",{class:"step-btn",disabled:n.value===0,onClick:f}," 上一步 ",8,bn),c("div",hn,[(b(!0),_(R,null,U(t,(u,d)=>(b(),_("div",{key:d,class:q(["step-dot",{active:d===n.value}]),onClick:g=>a(d)},null,10,wn))),128))]),c("button",{class:"step-btn",disabled:n.value===t.length-1,onClick:r}," 下一步 ",8,yn)])]))}}),Cn=`<template>
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
`,Dn={class:"flex justify-center items-center"},xn=y({__name:"promise2",setup(i){const e=B();let t=1;const n=h(!1),r=y({setup(){const l=Q(),s=()=>{n.value=!0,setTimeout(()=>{l.destroyWithResolve(),n.value=!1},2e3)};return()=>w(o("div",null,[o("p",null,[v("step("),t,v(")ing...")]),o(C,{onClick:()=>s()},{default:()=>[v("下一步")]})]),[[Z,n.value]])}}),f={beforeClose:l=>{n.value||l()}},a=async()=>{t=1,await e(o(r,null,null),{title:"步骤"+t,attrs:f}).promise,t++,await e(o(r,null,null),{title:"步骤"+t,attrs:f}).promise,t++,await e(o(r,null,null),{title:"步骤"+t,attrs:f}).promise,console.log("所有任务完成")};return(l,s)=>{const u=C;return b(),_("div",Dn,[o(u,{onClick:a},{default:m(()=>s[0]||(s[0]=[v("打开弹窗")])),_:1,__:[0]})])}}}),kn=`<script lang="tsx" setup>
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
`,Sn=y({__name:"edit-row",props:{row:{}},setup(i){const t=h({...i.row}),n=Q(),r=h(!1),f=()=>{r.value=!0,setTimeout(()=>{r.value=!1,console.log("后端表示保存成功"),n.destroyWithResolve(t.value)},2e3)},a=()=>{n.destroyWithReject(new Error("取消编辑"))};return(l,s)=>{const u=C,d=Z;return w((b(),Y(p(nn),null,{default:m(()=>[o(p(V),{label:"日期"},{default:m(()=>[o(p(J),{modelValue:t.value.date,"onUpdate:modelValue":s[0]||(s[0]=g=>t.value.date=g),type:"date",placeholder:"选择日期",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD"},null,8,["modelValue"])]),_:1}),o(p(V),{label:"姓名"},{default:m(()=>[o(p(P),{modelValue:t.value.name,"onUpdate:modelValue":s[1]||(s[1]=g=>t.value.name=g),placeholder:"请输入姓名"},null,8,["modelValue"])]),_:1}),o(p(V),{label:"州/省"},{default:m(()=>[o(p(P),{modelValue:t.value.state,"onUpdate:modelValue":s[2]||(s[2]=g=>t.value.state=g),placeholder:"请输入州/省"},null,8,["modelValue"])]),_:1}),o(p(V),null,{default:m(()=>[o(u,{onClick:f},{default:m(()=>s[3]||(s[3]=[v("保存")])),_:1,__:[3]}),o(u,{onClick:a},{default:m(()=>s[4]||(s[4]=[v("取消")])),_:1,__:[4]})]),_:1})]),_:1})),[[d,r.value]])}}}),Tn=y({__name:"promise",setup(i){const e=B(),t=h(!1),n=async f=>{try{await e(o(Sn,{row:f},null),{title:"编辑列"}).promise}catch{}finally{t.value=!0,setTimeout(()=>{t.value=!1,console.log("列表刷新成功")},2e3)}},r=[{date:"2016-05-03",name:"Tom",state:"California"},{date:"2016-05-02",name:"Tom",state:"California"},{date:"2016-05-04",name:"Tom",state:"California"},{date:"2016-05-01",name:"Tom",state:"California"}];return(f,a)=>{const l=en,s=C,u=tn,d=Z;return w((b(),Y(u,{data:r,style:{width:"100%"}},{default:m(()=>[o(l,{fixed:"",prop:"date",label:"Date",width:"150"}),o(l,{prop:"name",label:"Name",width:"120"}),o(l,{prop:"state",label:"State",width:"120"}),o(l,{fixed:"right",label:"Operations","min-width":"120"},{default:m(({row:g})=>[o(s,{link:"",type:"primary",onClick:D=>n(g)},{default:m(()=>a[0]||(a[0]=[v("Edit")])),_:2,__:[0]},1032,["onClick"])]),_:1})]),_:1})),[[d,t.value]])}}}),Zn=JSON.parse('{"title":"进阶用法","description":"","frontmatter":{},"headers":[],"relativePath":"example/advanced.md","filePath":"example/advanced.md"}'),Wn={name:"example/advanced.md"},En=Object.assign(Wn,{setup(i){const e=h(!0);return(t,n)=>{const r=z("ClientOnly");return b(),_("div",null,[n[5]||(n[5]=X('<h1 id="进阶用法" tabindex="-1">进阶用法 <a class="header-anchor" href="#进阶用法" aria-label="Permalink to &quot;进阶用法&quot;">​</a></h1><p>本章节将介绍命令式组件的一些高级特性和使用场景。</p><h2 id="promise特性" tabindex="-1">Promise特性 <a class="header-anchor" href="#promise特性" aria-label="Permalink to &quot;Promise特性&quot;">​</a></h2><p>Promise是使用命令式组件后获得的最大优势之一，它使我们与组件的通信方式转变为基于Promise的异步流程。以下通过典型案例展示其带来的便利：</p><h3 id="案例一-表格行内编辑" tabindex="-1">案例一：表格行内编辑 <a class="header-anchor" href="#案例一-表格行内编辑" aria-label="Permalink to &quot;案例一：表格行内编辑&quot;">​</a></h3>',5)),w(o(p(k),null,null,512),[[x,e.value]]),o(r,null,{default:m(()=>[o(p(S),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:n[0]||(n[0]=()=>{e.value=!1}),vueCode:p(kn)},{vue:m(()=>[o(Tn)]),_:1},8,["vueCode"])]),_:1}),n[6]||(n[6]=c("p",null,"在管理系统中，通过弹窗编辑表格行数据是常见需求。对比命令式与声明式实现方式，命令式组件在开发体验和代码简洁度上具有明显优势。",-1)),n[7]||(n[7]=c("h3",{id:"案例二-多步骤弹窗",tabindex:"-1"},[v("案例二：多步骤弹窗 "),c("a",{class:"header-anchor",href:"#案例二-多步骤弹窗","aria-label":'Permalink to "案例二：多步骤弹窗"'},"​")],-1)),n[8]||(n[8]=c("p",null,"某些场景下，需要在弹窗中执行多个连续步骤，例如：数据选择、内容编辑、信息确认等。利用Promise特性可以优雅地实现这类流程：",-1)),w(o(p(k),null,null,512),[[x,e.value]]),o(r,null,{default:m(()=>[o(p(S),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:n[1]||(n[1]=()=>{e.value=!1}),vueCode:p(Cn)},{vue:m(()=>[o(xn)]),_:1},8,["vueCode"])]),_:1}),n[9]||(n[9]=c("h3",{id:"案例三-整点花活儿-🤪",tabindex:"-1"},[v("案例三：整点花活儿(🤪) "),c("a",{class:"header-anchor",href:"#案例三-整点花活儿-🤪","aria-label":'Permalink to "案例三：整点花活儿(🤪)"'},"​")],-1)),n[10]||(n[10]=c("p",null,"命令组件其实不仅仅是用于弹窗这类场景,它也可以当做一个特殊的节点挂载管理器:",-1)),w(o(p(k),null,null,512),[[x,e.value]]),o(r,null,{default:m(()=>[o(p(S),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:n[2]||(n[2]=()=>{e.value=!1}),vueCode:p(un)},{vue:m(()=>[o(_n)]),_:1},8,["vueCode"])]),_:1}),n[11]||(n[11]=c("h2",{id:"响应式组件",tabindex:"-1"},[v("响应式组件 "),c("a",{class:"header-anchor",href:"#响应式组件","aria-label":'Permalink to "响应式组件"'},"​")],-1)),n[12]||(n[12]=c("p",null,[v("命令式组件存在一个固有限制："),c("code",null,"DialogContent"),v("组件的视图无法自动响应props数据变化。此时可通过"),c("code",null,"RxRender"),v("包装渲染函数，将VNode生成延迟到Vue组件的渲染函数内部执行。其核心原理是将渲染函数封装为响应式组件，从而实现视图的动态更新。")],-1)),w(o(p(k),null,null,512),[[x,e.value]]),o(r,null,{default:m(()=>[o(p(S),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:n[3]||(n[3]=()=>{e.value=!1}),vueCode:p(ln)},{vue:m(()=>[o(rn)]),_:1},8,["vueCode"])]),_:1}),n[13]||(n[13]=c("h2",{id:"响应式配置",tabindex:"-1"},[v("响应式配置 "),c("a",{class:"header-anchor",href:"#响应式配置","aria-label":'Permalink to "响应式配置"'},"​")],-1)),n[14]||(n[14]=c("p",null,"通常组件的展示形式相对固定，但在特定场景下，我们可能需要根据数据变化动态调整组件配置。实现方式非常简单：只需将配置项设计为返回配置对象的函数即可。",-1)),w(o(p(k),null,null,512),[[x,e.value]]),o(r,null,{default:m(()=>[o(p(S),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:n[4]||(n[4]=()=>{e.value=!1}),vueCode:p(on)},{vue:m(()=>[o(an)]),_:1},8,["vueCode"])]),_:1})])}}});export{Zn as __pageData,En as default};
