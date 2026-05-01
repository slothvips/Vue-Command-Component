import{j as C,r as h,C as _,E as g,B as m,k as n,G as S,I as s,f as E,O as r,d as M,F as W,V as L,y as N,t as b,H as I,u as i,W as P,aW as $,v as y}from"./chunks/framework.Dr0ZuDOg.js";import{u as V,a as Y,O as D,E as k}from"./chunks/index.DB_ntYdK.js";import{_ as B}from"./chunks/DialogContent.vue_vue_type_script_setup_true_lang.C-idPmwU.js";import{E as Q,a as x,v as A,b as T,c as j,d as R,e as U,f as q,g as z}from"./chunks/theme.a7z_s1GA.js";import{u as F}from"./chunks/index.CvxmRnEr.js";/* empty css                      */const X=`<template>
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
`,O=C({__name:"reactive-config",setup(w){const a=h(300);let t=1;const e=()=>{a.value+=t,a.value>=window.innerWidth&&(t=-1),a.value<=450&&(t=1),requestAnimationFrame(e)};e();const u=V(),c=()=>{a.value=450;const d=u(n(B,null,null),()=>({title:`当前宽度: ${a.value}px`,width:`${a.value}px`}));console.log(d)};return(d,l)=>{const o=Q,p=x;return g(),_("div",null,[m(S(a.value)+" ",1),n(o),n(p,{onClick:c},{default:s(()=>l[0]||(l[0]=[m("打开弹窗")])),_:1,__:[0]})])}}}),H=`<template>
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
`,J={class:"flex justify-center items-center"},K=C({__name:"reactive-component",setup(w){const a=h(0);setInterval(()=>{a.value++},1e3);const t=V(),e=()=>{t(n(B,{modelValue:c.name,"onUpdate:modelValue":d=>c.name=d,count:a.value},null))},u=()=>{t(()=>n(B,{modelValue:c.name,"onUpdate:modelValue":d=>c.name=d,count:a.value},null))},c=E({name:"panda"});return(d,l)=>{const o=Q,p=x;return g(),_("div",null,[m(S(c)+" ",1),n(o),m(" "+S(a.value)+" ",1),n(o),r("div",J,[n(p,{onClick:e},{default:s(()=>l[0]||(l[0]=[m("打开非响应性式弹窗")])),_:1,__:[0]}),n(p,{onClick:u},{default:s(()=>l[1]||(l[1]=[m("打开响应式弹窗")])),_:1,__:[1]})]),n(o)])}}}),nn=`<template>
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
`,en={class:"flower-container"},tn={class:"stage-info"},an={class:"controls"},on=["disabled"],ln={class:"step-indicators"},sn=["onClick"],rn=["disabled"],un=C({__name:"flower",setup(w){const a=F({immediate:!1,fragment:!0,appendTo:"#flower",customClassName:"flower-stage",displayDirective:"show",onShow:l=>{l.style.opacity="1"},onHide:l=>{l.style.opacity="0"}}),t=E([{title:"种子阶段",description:"这是一粒小小的种子，蕴含着生命的潜力，等待着发芽的时机。"},{title:"发芽阶段",description:"种子吸收了水分和养分，开始萌发出嫩绿的新芽。"},{title:"生长阶段",description:"幼苗逐渐长高，茎干变得更加挺拔，开始长出叶子。"},{title:"花蕾阶段",description:"植株顶端出现了花蕾，这是开花的前兆。"},{title:"绽放阶段",description:"花蕾逐渐打开，美丽的花瓣舒展开来，展现出绚丽的色彩。"}]);M(()=>{const l=a(n("div",{class:"seed"},null)),o=a(n("div",{class:"stem"},null)),p=a(n(W,null,[n("div",{class:"leaf left-leaf"},null),n("div",{class:"leaf right-leaf"},null)])),f=a(n("div",{class:"bud"},null)),v=a(n(W,null,[new Array(8).fill(0).map((G,Z)=>n("div",{key:Z+1,class:`petal petal-${Z+1}`},null))]));t[0].consumer=l,t[1].consumer=o,t[2].consumer=p,t[3].consumer=f,t[4].consumer=v,d(0)});const e=h(0),u=()=>{e.value<t.length-1&&(e.value++,d(e.value))},c=()=>{e.value>0&&(e.value--,d(e.value))},d=l=>{l>=0&&l<t.length&&(e.value=l,t.forEach((o,p)=>{var f,v;p<=e.value?(f=o.consumer)==null||f.show():(v=o.consumer)==null||v.hide()}))};return(l,o)=>(g(),_("div",en,[o[0]||(o[0]=r("div",{class:"flower-stage"},[r("div",{id:"flower",class:"flower"})],-1)),r("div",tn,[r("h3",null,S(t[e.value].title),1),r("p",null,S(t[e.value].description),1)]),r("div",an,[r("button",{class:"step-btn",disabled:e.value===0,onClick:c}," 上一步 ",8,on),r("div",ln,[(g(!0),_(W,null,L(t,(p,f)=>(g(),_("div",{key:f,class:N(["step-dot",{active:f===e.value}]),onClick:v=>d(f)},null,10,sn))),128))]),r("button",{class:"step-btn",disabled:e.value===t.length-1,onClick:u}," 下一步 ",8,rn)])]))}}),dn=`<template>
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
`,cn={class:"flex justify-center items-center"},mn=C({__name:"promise2",setup(w){const a=V();let t=1;const e=h(!1),u=C({setup(){const l=Y(),o=()=>{e.value=!0,setTimeout(()=>{l.destroyWithResolve(),e.value=!1},2e3)};return()=>b(n("div",null,[n("p",null,[m("step("),t,m(")ing...")]),n(x,{onClick:()=>o()},{default:()=>[m("下一步")]})]),[[A,e.value]])}}),c={beforeClose:l=>{e.value||l()}},d=async()=>{t=1,await a(n(u,null,null),{title:"步骤"+t,attrs:c}).promise,t++,await a(n(u,null,null),{title:"步骤"+t,attrs:c}).promise,t++,await a(n(u,null,null),{title:"步骤"+t,attrs:c}).promise,console.log("所有任务完成")};return(l,o)=>{const p=x;return g(),_("div",cn,[n(p,{onClick:d},{default:s(()=>o[0]||(o[0]=[m("打开弹窗")])),_:1,__:[0]})])}}}),pn=`<script lang="tsx" setup>
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
`,vn=C({__name:"edit-row",props:{row:{}},setup(w){const t=h({...w.row}),e=Y(),u=h(!1),c=()=>{u.value=!0,setTimeout(()=>{u.value=!1,console.log("后端表示保存成功"),e.destroyWithResolve(t.value)},2e3)},d=()=>{e.destroyWithReject(new Error("取消编辑"))};return(l,o)=>{const p=x,f=A;return b((g(),I(i(U),null,{default:s(()=>[n(i(T),{label:"日期"},{default:s(()=>[n(i(j),{modelValue:t.value.date,"onUpdate:modelValue":o[0]||(o[0]=v=>t.value.date=v),type:"date",placeholder:"选择日期",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD"},null,8,["modelValue"])]),_:1}),n(i(T),{label:"姓名"},{default:s(()=>[n(i(R),{modelValue:t.value.name,"onUpdate:modelValue":o[1]||(o[1]=v=>t.value.name=v),placeholder:"请输入姓名"},null,8,["modelValue"])]),_:1}),n(i(T),{label:"州/省"},{default:s(()=>[n(i(R),{modelValue:t.value.state,"onUpdate:modelValue":o[2]||(o[2]=v=>t.value.state=v),placeholder:"请输入州/省"},null,8,["modelValue"])]),_:1}),n(i(T),null,{default:s(()=>[n(p,{onClick:c},{default:s(()=>o[3]||(o[3]=[m("保存")])),_:1,__:[3]}),n(p,{onClick:d},{default:s(()=>o[4]||(o[4]=[m("取消")])),_:1,__:[4]})]),_:1})]),_:1})),[[f,u.value]])}}}),fn=C({__name:"promise",setup(w){const a=V(),t=h(!1),e=async c=>{try{await a(n(vn,{row:c},null),{title:"编辑列"}).promise}catch{}finally{t.value=!0,setTimeout(()=>{t.value=!1,console.log("列表刷新成功")},2e3)}},u=[{date:"2016-05-03",name:"Tom",state:"California"},{date:"2016-05-02",name:"Tom",state:"California"},{date:"2016-05-04",name:"Tom",state:"California"},{date:"2016-05-01",name:"Tom",state:"California"}];return(c,d)=>{const l=q,o=x,p=z,f=A;return b((g(),I(p,{data:u,style:{width:"100%"}},{default:s(()=>[n(l,{fixed:"",prop:"date",label:"Date",width:"150"}),n(l,{prop:"name",label:"Name",width:"120"}),n(l,{prop:"state",label:"State",width:"120"}),n(l,{fixed:"right",label:"Operations","min-width":"120"},{default:s(({row:v})=>[n(o,{link:"",type:"primary",onClick:G=>e(v)},{default:s(()=>d[0]||(d[0]=[m("Edit")])),_:2,__:[0]},1032,["onClick"])]),_:1})]),_:1})),[[f,t.value]])}}}),yn=JSON.parse('{"title":"进阶用法","description":"","frontmatter":{},"headers":[],"relativePath":"example/advanced.md","filePath":"example/advanced.md"}'),gn={name:"example/advanced.md"},Dn=Object.assign(gn,{setup(w){const a=h(!0);return(t,e)=>{const u=P("ClientOnly");return g(),_("div",null,[e[5]||(e[5]=$('<h1 id="进阶用法" tabindex="-1">进阶用法 <a class="header-anchor" href="#进阶用法" aria-label="Permalink to &quot;进阶用法&quot;">​</a></h1><p>本章节将介绍命令式组件的一些高级特性和使用场景。</p><h2 id="promise特性" tabindex="-1">Promise特性 <a class="header-anchor" href="#promise特性" aria-label="Permalink to &quot;Promise特性&quot;">​</a></h2><p>Promise是使用命令式组件后获得的最大优势之一，它使我们与组件的通信方式转变为基于Promise的异步流程。以下通过典型案例展示其带来的便利：</p><h3 id="案例一-表格行内编辑" tabindex="-1">案例一：表格行内编辑 <a class="header-anchor" href="#案例一-表格行内编辑" aria-label="Permalink to &quot;案例一：表格行内编辑&quot;">​</a></h3>',5)),b(n(i(D),null,null,512),[[y,a.value]]),n(u,null,{default:s(()=>[n(i(k),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{a.value=!1}),vueCode:i(pn)},{vue:s(()=>[n(fn)]),_:1},8,["vueCode"])]),_:1}),e[6]||(e[6]=r("p",null,"在管理系统中，通过弹窗编辑表格行数据是常见需求。对比命令式与声明式实现方式，命令式组件在开发体验和代码简洁度上具有明显优势。",-1)),e[7]||(e[7]=r("h3",{id:"案例二-多步骤弹窗",tabindex:"-1"},[m("案例二：多步骤弹窗 "),r("a",{class:"header-anchor",href:"#案例二-多步骤弹窗","aria-label":'Permalink to "案例二：多步骤弹窗"'},"​")],-1)),e[8]||(e[8]=r("p",null,"某些场景下，需要在弹窗中执行多个连续步骤，例如：数据选择、内容编辑、信息确认等。利用Promise特性可以优雅地实现这类流程：",-1)),b(n(i(D),null,null,512),[[y,a.value]]),n(u,null,{default:s(()=>[n(i(k),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[1]||(e[1]=()=>{a.value=!1}),vueCode:i(dn)},{vue:s(()=>[n(mn)]),_:1},8,["vueCode"])]),_:1}),e[9]||(e[9]=r("h3",{id:"案例三-整点花活儿-🤪",tabindex:"-1"},[m("案例三：整点花活儿(🤪) "),r("a",{class:"header-anchor",href:"#案例三-整点花活儿-🤪","aria-label":'Permalink to "案例三：整点花活儿(🤪)"'},"​")],-1)),e[10]||(e[10]=r("p",null,"命令组件其实不仅仅是用于弹窗这类场景,它也可以当做一个特殊的节点挂载管理器:",-1)),b(n(i(D),null,null,512),[[y,a.value]]),n(u,null,{default:s(()=>[n(i(k),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[2]||(e[2]=()=>{a.value=!1}),vueCode:i(nn)},{vue:s(()=>[n(un)]),_:1},8,["vueCode"])]),_:1}),e[11]||(e[11]=r("h2",{id:"响应式组件",tabindex:"-1"},[m("响应式组件 "),r("a",{class:"header-anchor",href:"#响应式组件","aria-label":'Permalink to "响应式组件"'},"​")],-1)),e[12]||(e[12]=r("p",null,"将第一个改成写函数即可.",-1)),b(n(i(D),null,null,512),[[y,a.value]]),n(u,null,{default:s(()=>[n(i(k),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[3]||(e[3]=()=>{a.value=!1}),vueCode:i(H)},{vue:s(()=>[n(K)]),_:1},8,["vueCode"])]),_:1}),e[13]||(e[13]=r("h2",{id:"响应式配置",tabindex:"-1"},[m("响应式配置 "),r("a",{class:"header-anchor",href:"#响应式配置","aria-label":'Permalink to "响应式配置"'},"​")],-1)),e[14]||(e[14]=r("p",null,"通常组件的展示形式相对固定，但在特定场景下，我们可能需要根据数据变化动态调整组件配置。实现方式非常简单：只需将配置项设计为返回配置对象的函数即可。",-1)),b(n(i(D),null,null,512),[[y,a.value]]),n(u,null,{default:s(()=>[n(i(k),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[4]||(e[4]=()=>{a.value=!1}),vueCode:i(X)},{vue:s(()=>[n(O)]),_:1},8,["vueCode"])]),_:1})])}}});export{yn as __pageData,Dn as default};
