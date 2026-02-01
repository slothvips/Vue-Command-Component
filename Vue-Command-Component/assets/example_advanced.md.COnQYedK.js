import{j as y,r as h,C as _,E as b,B as g,k as o,G as T,I as d,f as I,O as p,aw as M,g as N,w as L,n as $,d as F,F as A,V as U,y as q,t as w,H as Y,u as m,W as z,aW as X,v as x}from"./chunks/framework.BdKND-4d.js";import{u as V,_ as Z,c as H,a as Q,O as k,E as S}from"./chunks/index.CInZOI4_.js";import{E as G,a as C,v as E,b as B,c as K,d as j,e as J,f as ee,g as ne}from"./chunks/theme.DPtADWyO.js";/* empty css                      */const te=`<template>
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

const dialog = useDialog();
const openDialog = () => {
  width.value = 450;
  const consumer = dialog(<DialogContent />, () => ({
    title: \`当前宽度: \${width.value}px\`,
    width: \`\${width.value}px\`,
  }));

  console.log(consumer);
};
<\/script>

<style lang="scss" scoped></style>
`,oe=y({__name:"reactive-config",setup(i){const n=h(300);let t=1;const e=()=>{n.value+=t,n.value>=window.innerWidth&&(t=-1),n.value<=450&&(t=1),requestAnimationFrame(e)};e();const r=V(),f=()=>{n.value=450;const l=r(o(Z,null,null),()=>({title:`当前宽度: ${n.value}px`,width:`${n.value}px`}));console.log(l)};return(l,a)=>{const s=G,u=C;return b(),_("div",null,[g(T(n.value)+" ",1),o(s),o(u,{onClick:f},{default:d(()=>a[0]||(a[0]=[g("打开弹窗")])),_:1,__:[0]})])}}}),le=`<template>
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
import { useDialog } from "@vue-cmd/element-plus";
import DialogContent from "./shared/DialogContent.vue";
import { ref, reactive } from "vue";

const count = ref(0);
setInterval(() => {
  count.value++;
}, 1000);

const dialog = useDialog();
const openDialog = () => {
  dialog(<DialogContent v-model={formValue.name} count={count.value} />);
};

const openDialog2 = () => {
  dialog(() => <DialogContent v-model={formValue.name} count={count.value} />);
};

const formValue = reactive({
  name: "panda",
});
<\/script>

<style lang="scss" scoped></style>
`,ae={class:"flex justify-center items-center"},se=y({__name:"reactive-component",setup(i){const n=h(0);setInterval(()=>{n.value++},1e3);const t=V(),e=()=>{t(o(Z,{modelValue:f.name,"onUpdate:modelValue":l=>f.name=l,count:n.value},null))},r=()=>{t(()=>o(Z,{modelValue:f.name,"onUpdate:modelValue":l=>f.name=l,count:n.value},null))},f=I({name:"panda"});return(l,a)=>{const s=G,u=C;return b(),_("div",null,[g(T(f)+" ",1),o(s),g(" "+T(n.value)+" ",1),o(s),p("div",ae,[o(u,{onClick:e},{default:d(()=>a[0]||(a[0]=[g("打开非响应性式弹窗")])),_:1,__:[0]}),o(u,{onClick:r},{default:d(()=>a[1]||(a[1]=[g("打开响应式弹窗")])),_:1,__:[1]})]),o(s)])}}}),ie=`<template>
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
`;function W(i){"@babel/helpers - typeof";return W=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},W(i)}function re(i,n){if(W(i)!="object"||!i)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var e=t.call(i,n);if(W(e)!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(i)}function ue(i){var n=re(i,"string");return W(n)=="symbol"?n:n+""}function ce(i,n,t){return(n=ue(n))in i?Object.defineProperty(i,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[n]=t,i}function O(i,n){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(i);n&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable})),t.push.apply(t,e)}return t}function R(i){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?O(Object(t),!0).forEach(function(e){ce(i,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach(function(e){Object.defineProperty(i,e,Object.getOwnPropertyDescriptor(t,e))})}return i}const de=i=>{const n=N();return(t,e={})=>{var r,f;const l=R(R({},i),e);l.displayDirective=(r=l.displayDirective)!==null&&r!==void 0?r:"if",l.onShow=l.onShow||(u=>{u.style.display="block"}),l.onHide=l.onHide||(u=>{u.style.display="none"});const a=h((f=l.immediate)!==null&&f!==void 0?f:!0);l.visible=a;const s=H(n,M(y({setup(){return l.displayDirective==="show"&&L(()=>a.value,()=>{$().then(()=>{const u=c=>c.shapeFlag===1?[c.el]:c.shapeFlag===16?c.children.map(v=>u(v)):(console.warn("TODO:other case wait implement",c),[]);u(t).flat(1/0).forEach(c=>{var v,D;a.value?(v=l.onShow)===null||v===void 0||v.call(l,c,s):(D=l.onHide)===null||D===void 0||D.call(l,c,s)})})},{immediate:!0}),()=>{const u=l.displayDirective,c=l.outer;return c?c(u==="if"?a.value?t:null:t):u==="if"?a.value?t:null:t}}})),l);return s}},me={class:"flower-container"},pe={class:"stage-info"},fe={class:"controls"},ve=["disabled"],ge={class:"step-indicators"},be=["onClick"],he=["disabled"],we=y({__name:"flower",setup(i){const n=de({immediate:!1,fragment:!0,appendTo:"#flower",customClassName:"flower-stage",displayDirective:"show",onShow:a=>{a.style.opacity="1"},onHide:a=>{a.style.opacity="0"}}),t=I([{title:"种子阶段",description:"这是一粒小小的种子，蕴含着生命的潜力，等待着发芽的时机。"},{title:"发芽阶段",description:"种子吸收了水分和养分，开始萌发出嫩绿的新芽。"},{title:"生长阶段",description:"幼苗逐渐长高，茎干变得更加挺拔，开始长出叶子。"},{title:"花蕾阶段",description:"植株顶端出现了花蕾，这是开花的前兆。"},{title:"绽放阶段",description:"花蕾逐渐打开，美丽的花瓣舒展开来，展现出绚丽的色彩。"}]);F(()=>{const a=n(o("div",{class:"seed"},null)),s=n(o("div",{class:"stem"},null)),u=n(o(A,null,[o("div",{class:"leaf left-leaf"},null),o("div",{class:"leaf right-leaf"},null)])),c=n(o("div",{class:"bud"},null)),v=n(o(A,null,[new Array(8).fill(0).map((D,P)=>o("div",{key:P+1,class:`petal petal-${P+1}`},null))]));t[0].consumer=a,t[1].consumer=s,t[2].consumer=u,t[3].consumer=c,t[4].consumer=v,l(0)});const e=h(0),r=()=>{e.value<t.length-1&&(e.value++,l(e.value))},f=()=>{e.value>0&&(e.value--,l(e.value))},l=a=>{a>=0&&a<t.length&&(e.value=a,t.forEach((s,u)=>{var c,v;u<=e.value?(c=s.consumer)==null||c.show():(v=s.consumer)==null||v.hide()}))};return(a,s)=>(b(),_("div",me,[s[0]||(s[0]=p("div",{class:"flower-stage"},[p("div",{id:"flower",class:"flower"})],-1)),p("div",pe,[p("h3",null,T(t[e.value].title),1),p("p",null,T(t[e.value].description),1)]),p("div",fe,[p("button",{class:"step-btn",disabled:e.value===0,onClick:f}," 上一步 ",8,ve),p("div",ge,[(b(!0),_(A,null,U(t,(u,c)=>(b(),_("div",{key:c,class:q(["step-dot",{active:c===e.value}]),onClick:v=>l(c)},null,10,be))),128))]),p("button",{class:"step-btn",disabled:e.value===t.length-1,onClick:r}," 下一步 ",8,he)])]))}}),ye=`<template>
  <div class="flex justify-center items-center">
    <el-button @click="openDialog">打开弹窗</el-button>
  </div>
</template>

<script setup lang="tsx">
import { useConsumer } from "@vue-cmd/core";
import { useDialog } from "@vue-cmd/element-plus";
import { defineComponent, ref } from "vue";

const dialog = useDialog();

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
  await dialog(<StepView />, {
    title: "步骤" + step,
    attrs,
  }).promise;
  step++;
  await dialog(<StepView />, {
    title: "步骤" + step,
    attrs,
  }).promise;
  step++;
  await dialog(<StepView />, {
    title: "步骤" + step,
    attrs,
  }).promise;
  console.log("所有任务完成");
};
<\/script>

<style lang="scss" scoped></style>
`,_e={class:"flex justify-center items-center"},Ce=y({__name:"promise2",setup(i){const n=V();let t=1;const e=h(!1),r=y({setup(){const a=Q(),s=()=>{e.value=!0,setTimeout(()=>{a.destroyWithResolve(),e.value=!1},2e3)};return()=>w(o("div",null,[o("p",null,[g("step("),t,g(")ing...")]),o(C,{onClick:()=>s()},{default:()=>[g("下一步")]})]),[[E,e.value]])}}),f={beforeClose:a=>{e.value||a()}},l=async()=>{t=1,await n(o(r,null,null),{title:"步骤"+t,attrs:f}).promise,t++,await n(o(r,null,null),{title:"步骤"+t,attrs:f}).promise,t++,await n(o(r,null,null),{title:"步骤"+t,attrs:f}).promise,console.log("所有任务完成")};return(a,s)=>{const u=C;return b(),_("div",_e,[o(u,{onClick:l},{default:d(()=>s[0]||(s[0]=[g("打开弹窗")])),_:1,__:[0]})])}}}),De=`<script lang="tsx" setup>
import { useDialog } from "@vue-cmd/element-plus";
import EditRow from "./edit-row.vue";
import { ref } from "vue";
const dialog = useDialog();

const loading = ref(false);
const editRow = async (row: any) => {
  try {
    await dialog(<EditRow row={row} />, { title: "编辑列" }).promise;
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
`,xe=y({__name:"edit-row",props:{row:{}},setup(i){const t=h({...i.row}),e=Q(),r=h(!1),f=()=>{r.value=!0,setTimeout(()=>{r.value=!1,console.log("后端表示保存成功"),e.destroyWithResolve(t.value)},2e3)},l=()=>{e.destroyWithReject(new Error("取消编辑"))};return(a,s)=>{const u=C,c=E;return w((b(),Y(m(J),null,{default:d(()=>[o(m(B),{label:"日期"},{default:d(()=>[o(m(K),{modelValue:t.value.date,"onUpdate:modelValue":s[0]||(s[0]=v=>t.value.date=v),type:"date",placeholder:"选择日期",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD"},null,8,["modelValue"])]),_:1}),o(m(B),{label:"姓名"},{default:d(()=>[o(m(j),{modelValue:t.value.name,"onUpdate:modelValue":s[1]||(s[1]=v=>t.value.name=v),placeholder:"请输入姓名"},null,8,["modelValue"])]),_:1}),o(m(B),{label:"州/省"},{default:d(()=>[o(m(j),{modelValue:t.value.state,"onUpdate:modelValue":s[2]||(s[2]=v=>t.value.state=v),placeholder:"请输入州/省"},null,8,["modelValue"])]),_:1}),o(m(B),null,{default:d(()=>[o(u,{onClick:f},{default:d(()=>s[3]||(s[3]=[g("保存")])),_:1,__:[3]}),o(u,{onClick:l},{default:d(()=>s[4]||(s[4]=[g("取消")])),_:1,__:[4]})]),_:1})]),_:1})),[[c,r.value]])}}}),ke=y({__name:"promise",setup(i){const n=V(),t=h(!1),e=async f=>{try{await n(o(xe,{row:f},null),{title:"编辑列"}).promise}catch{}finally{t.value=!0,setTimeout(()=>{t.value=!1,console.log("列表刷新成功")},2e3)}},r=[{date:"2016-05-03",name:"Tom",state:"California"},{date:"2016-05-02",name:"Tom",state:"California"},{date:"2016-05-04",name:"Tom",state:"California"},{date:"2016-05-01",name:"Tom",state:"California"}];return(f,l)=>{const a=ee,s=C,u=ne,c=E;return w((b(),Y(u,{data:r,style:{width:"100%"}},{default:d(()=>[o(a,{fixed:"",prop:"date",label:"Date",width:"150"}),o(a,{prop:"name",label:"Name",width:"120"}),o(a,{prop:"state",label:"State",width:"120"}),o(a,{fixed:"right",label:"Operations","min-width":"120"},{default:d(({row:v})=>[o(s,{link:"",type:"primary",onClick:D=>e(v)},{default:d(()=>l[0]||(l[0]=[g("Edit")])),_:2,__:[0]},1032,["onClick"])]),_:1})]),_:1})),[[c,t.value]])}}}),Ae=JSON.parse('{"title":"进阶用法","description":"","frontmatter":{},"headers":[],"relativePath":"example/advanced.md","filePath":"example/advanced.md"}'),Se={name:"example/advanced.md"},Ze=Object.assign(Se,{setup(i){const n=h(!0);return(t,e)=>{const r=z("ClientOnly");return b(),_("div",null,[e[5]||(e[5]=X('<h1 id="进阶用法" tabindex="-1">进阶用法 <a class="header-anchor" href="#进阶用法" aria-label="Permalink to &quot;进阶用法&quot;">​</a></h1><p>本章节将介绍命令式组件的一些高级特性和使用场景。</p><h2 id="promise特性" tabindex="-1">Promise特性 <a class="header-anchor" href="#promise特性" aria-label="Permalink to &quot;Promise特性&quot;">​</a></h2><p>Promise是使用命令式组件后获得的最大优势之一，它使我们与组件的通信方式转变为基于Promise的异步流程。以下通过典型案例展示其带来的便利：</p><h3 id="案例一-表格行内编辑" tabindex="-1">案例一：表格行内编辑 <a class="header-anchor" href="#案例一-表格行内编辑" aria-label="Permalink to &quot;案例一：表格行内编辑&quot;">​</a></h3>',5)),w(o(m(k),null,null,512),[[x,n.value]]),o(r,null,{default:d(()=>[o(m(S),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{n.value=!1}),vueCode:m(De)},{vue:d(()=>[o(ke)]),_:1},8,["vueCode"])]),_:1}),e[6]||(e[6]=p("p",null,"在管理系统中，通过弹窗编辑表格行数据是常见需求。对比命令式与声明式实现方式，命令式组件在开发体验和代码简洁度上具有明显优势。",-1)),e[7]||(e[7]=p("h3",{id:"案例二-多步骤弹窗",tabindex:"-1"},[g("案例二：多步骤弹窗 "),p("a",{class:"header-anchor",href:"#案例二-多步骤弹窗","aria-label":'Permalink to "案例二：多步骤弹窗"'},"​")],-1)),e[8]||(e[8]=p("p",null,"某些场景下，需要在弹窗中执行多个连续步骤，例如：数据选择、内容编辑、信息确认等。利用Promise特性可以优雅地实现这类流程：",-1)),w(o(m(k),null,null,512),[[x,n.value]]),o(r,null,{default:d(()=>[o(m(S),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[1]||(e[1]=()=>{n.value=!1}),vueCode:m(ye)},{vue:d(()=>[o(Ce)]),_:1},8,["vueCode"])]),_:1}),e[9]||(e[9]=p("h3",{id:"案例三-整点花活儿-🤪",tabindex:"-1"},[g("案例三：整点花活儿(🤪) "),p("a",{class:"header-anchor",href:"#案例三-整点花活儿-🤪","aria-label":'Permalink to "案例三：整点花活儿(🤪)"'},"​")],-1)),e[10]||(e[10]=p("p",null,"命令组件其实不仅仅是用于弹窗这类场景,它也可以当做一个特殊的节点挂载管理器:",-1)),w(o(m(k),null,null,512),[[x,n.value]]),o(r,null,{default:d(()=>[o(m(S),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[2]||(e[2]=()=>{n.value=!1}),vueCode:m(ie)},{vue:d(()=>[o(we)]),_:1},8,["vueCode"])]),_:1}),e[11]||(e[11]=p("h2",{id:"响应式组件",tabindex:"-1"},[g("响应式组件 "),p("a",{class:"header-anchor",href:"#响应式组件","aria-label":'Permalink to "响应式组件"'},"​")],-1)),e[12]||(e[12]=p("p",null,"将第一个改成写函数即可.",-1)),w(o(m(k),null,null,512),[[x,n.value]]),o(r,null,{default:d(()=>[o(m(S),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[3]||(e[3]=()=>{n.value=!1}),vueCode:m(le)},{vue:d(()=>[o(se)]),_:1},8,["vueCode"])]),_:1}),e[13]||(e[13]=p("h2",{id:"响应式配置",tabindex:"-1"},[g("响应式配置 "),p("a",{class:"header-anchor",href:"#响应式配置","aria-label":'Permalink to "响应式配置"'},"​")],-1)),e[14]||(e[14]=p("p",null,"通常组件的展示形式相对固定，但在特定场景下，我们可能需要根据数据变化动态调整组件配置。实现方式非常简单：只需将配置项设计为返回配置对象的函数即可。",-1)),w(o(m(k),null,null,512),[[x,n.value]]),o(r,null,{default:d(()=>[o(m(S),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[4]||(e[4]=()=>{n.value=!1}),vueCode:m(te)},{vue:d(()=>[o(oe)]),_:1},8,["vueCode"])]),_:1})])}}});export{Ae as __pageData,Ze as default};
