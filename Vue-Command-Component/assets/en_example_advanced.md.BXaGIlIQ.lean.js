import{j as _,r as h,C,E as f,B as p,k as e,G as S,I as s,f as E,O as r,d as G,F as B,V as Q,y as L,t as b,H as I,u as i,W as M,aW as j,v as x}from"./chunks/framework.Dr0ZuDOg.js";import{u as W,a as P,O as D,E as k}from"./chunks/index.DB_ntYdK.js";import{_ as V}from"./chunks/DialogContent.vue_vue_type_script_setup_true_lang.CqhwfsyT.js";import{E as Y,a as y,v as A,b as T,c as O,d as R,e as U,f as $,g as q}from"./chunks/theme.a7z_s1GA.js";import{u as z}from"./chunks/index.CvxmRnEr.js";/* empty css                      */const F=`<template>
  <div>
    {{ width }}
    <el-divider />
    <el-button @click="openDialog">Open dialog</el-button>
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
    title: \`Current width: \${width.value}px\`,
    width: \`\${width.value}px\`,
  }));

  console.log(consumer);
};
<\/script>

<style lang="scss" scoped></style>
`,X=_({__name:"reactive-config",setup(w){const a=h(300);let t=1;const n=()=>{a.value+=t,a.value>=window.innerWidth&&(t=-1),a.value<=450&&(t=1),requestAnimationFrame(n)};n();const d=W(),c=()=>{a.value=450;const u=d(e(V,null,null),()=>({title:`Current width: ${a.value}px`,width:`${a.value}px`}));console.log(u)};return(u,l)=>{const o=Y,m=y;return f(),C("div",null,[p(S(a.value)+" ",1),e(o),e(m,{onClick:c},{default:s(()=>l[0]||(l[0]=[p("Open dialog")])),_:1,__:[0]})])}}}),H=`<template>
  <div>
    {{ formValue }}
    <el-divider />
    {{ count }}
    <el-divider />
    <div class="flex justify-center items-center">
      <el-button @click="openDialog">Open non-reactive dialog</el-button>
      <el-button @click="openDialog2">Open reactive dialog</el-button>
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
`,J={class:"flex justify-center items-center"},K=_({__name:"reactive-component",setup(w){const a=h(0);setInterval(()=>{a.value++},1e3);const t=W(),n=()=>{t(e(V,{modelValue:c.name,"onUpdate:modelValue":u=>c.name=u,count:a.value},null))},d=()=>{t(()=>e(V,{modelValue:c.name,"onUpdate:modelValue":u=>c.name=u,count:a.value},null))},c=E({name:"panda"});return(u,l)=>{const o=Y,m=y;return f(),C("div",null,[p(S(c)+" ",1),e(o),p(" "+S(a.value)+" ",1),e(o),r("div",J,[e(m,{onClick:n},{default:s(()=>l[0]||(l[0]=[p("Open non-reactive dialog")])),_:1,__:[0]}),e(m,{onClick:d},{default:s(()=>l[1]||(l[1]=[p("Open reactive dialog")])),_:1,__:[1]})]),e(o)])}}}),ee=`<template>
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
        Previous
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
        Next
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

// Define the IConsumer type used in reactive
// Vue 3 reactive automatically unwraps Ref types and recursively handles nested objects and arrays
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
    title: "Seed stage",
    description: "This tiny seed holds the potential of life and waits for the right moment to sprout.",
  },
  {
    title: "Sprouting stage",
    description: "The seed absorbs water and nutrients and begins to grow tender green shoots.",
  },
  {
    title: "Growth stage",
    description: "The seedling grows taller, its stem becomes stronger, and leaves begin to appear.",
  },
  {
    title: "Bud stage",
    description: "A bud appears at the top of the plant, signaling that flowering is near.",
  },
  {
    title: "Blooming stage",
    description: "The bud opens gradually, and beautiful petals unfold with vivid colors.",
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

// Current stage
const currentStage = ref(0);

// Switch to next stage
const nextStage = () => {
  if (currentStage.value < stages.length - 1) {
    currentStage.value++;
    goToStage(currentStage.value);
  }
};

// Switch to previous stage
const prevStage = () => {
  if (currentStage.value > 0) {
    currentStage.value--;
    goToStage(currentStage.value);
  }
};

// Jump to the specified stage
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

/* Seed */
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

/* Stem */
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

/* Leaves */
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

/* Bud */
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

/* Petals */
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

/* Controls and information display */
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
`,ne={class:"flower-container"},te={class:"stage-info"},ae={class:"controls"},oe=["disabled"],le={class:"step-indicators"},se=["onClick"],ie=["disabled"],re=_({__name:"flower",setup(w){const a=z({immediate:!1,fragment:!0,appendTo:"#flower",customClassName:"flower-stage",displayDirective:"show",onShow:l=>{l.style.opacity="1"},onHide:l=>{l.style.opacity="0"}}),t=E([{title:"Seed stage",description:"This tiny seed holds the potential of life and waits for the right moment to sprout."},{title:"Sprouting stage",description:"The seed absorbs water and nutrients and begins to grow tender green shoots."},{title:"Growth stage",description:"The seedling grows taller, its stem becomes stronger, and leaves begin to appear."},{title:"Bud stage",description:"A bud appears at the top of the plant, signaling that flowering is near."},{title:"Blooming stage",description:"The bud opens gradually, and beautiful petals unfold with vivid colors."}]);G(()=>{const l=a(e("div",{class:"seed"},null)),o=a(e("div",{class:"stem"},null)),m=a(e(B,null,[e("div",{class:"leaf left-leaf"},null),e("div",{class:"leaf right-leaf"},null)])),g=a(e("div",{class:"bud"},null)),v=a(e(B,null,[new Array(8).fill(0).map((N,Z)=>e("div",{key:Z+1,class:`petal petal-${Z+1}`},null))]));t[0].consumer=l,t[1].consumer=o,t[2].consumer=m,t[3].consumer=g,t[4].consumer=v,u(0)});const n=h(0),d=()=>{n.value<t.length-1&&(n.value++,u(n.value))},c=()=>{n.value>0&&(n.value--,u(n.value))},u=l=>{l>=0&&l<t.length&&(n.value=l,t.forEach((o,m)=>{var g,v;m<=n.value?(g=o.consumer)==null||g.show():(v=o.consumer)==null||v.hide()}))};return(l,o)=>(f(),C("div",ne,[o[0]||(o[0]=r("div",{class:"flower-stage"},[r("div",{id:"flower",class:"flower"})],-1)),r("div",te,[r("h3",null,S(t[n.value].title),1),r("p",null,S(t[n.value].description),1)]),r("div",ae,[r("button",{class:"step-btn",disabled:n.value===0,onClick:c}," Previous ",8,oe),r("div",le,[(f(!0),C(B,null,Q(t,(m,g)=>(f(),C("div",{key:g,class:L(["step-dot",{active:g===n.value}]),onClick:v=>u(g)},null,10,se))),128))]),r("button",{class:"step-btn",disabled:n.value===t.length-1,onClick:d}," Next ",8,ie)])]))}}),de=`<template>
  <div class="flex justify-center items-center">
    <el-button @click="openDialog">Open dialog</el-button>
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
          <el-button onClick={() => nextStep()}>Next</el-button>
        </div>
      );
    };
  },
});

const attrs = {
  // Prevent the dialog from being closed accidentally while the task is in progress
  beforeClose: (done: () => void) => {
    if (!loading.value) {
      done();
    }
  },
};

const openDialog = async () => {
  step = 1;
  await dialog(<StepView />, {
    title: "Step " + step,
    attrs,
  }).promise;
  step++;
  await dialog(<StepView />, {
    title: "Step " + step,
    attrs,
  }).promise;
  step++;
  await dialog(<StepView />, {
    title: "Step " + step,
    attrs,
  }).promise;
  console.log("All tasks finished");
};
<\/script>

<style lang="scss" scoped></style>
`,ue={class:"flex justify-center items-center"},ce=_({__name:"promise2",setup(w){const a=W();let t=1;const n=h(!1),d=_({setup(){const l=P(),o=()=>{n.value=!0,setTimeout(()=>{l.destroyWithResolve(),n.value=!1},2e3)};return()=>b(e("div",null,[e("p",null,[p("step("),t,p(")ing...")]),e(y,{onClick:()=>o()},{default:()=>[p("Next")]})]),[[A,n.value]])}}),c={beforeClose:l=>{n.value||l()}},u=async()=>{t=1,await a(e(d,null,null),{title:"Step "+t,attrs:c}).promise,t++,await a(e(d,null,null),{title:"Step "+t,attrs:c}).promise,t++,await a(e(d,null,null),{title:"Step "+t,attrs:c}).promise,console.log("All tasks finished")};return(l,o)=>{const m=y;return f(),C("div",ue,[e(m,{onClick:u},{default:s(()=>o[0]||(o[0]=[p("Open dialog")])),_:1,__:[0]})])}}}),pe=`<script lang="tsx" setup>
import { useDialog } from "@vue-cmd/element-plus";
import EditRow from "./edit-row.vue";
import { ref } from "vue";
const dialog = useDialog();

const loading = ref(false);
const editRow = async (row: any) => {
  try {
    await dialog(<EditRow row={row} />, { title: "Edit row" }).promise;
  } catch {
  } finally {
    loading.value = true;
    setTimeout(() => {
      loading.value = false;
      console.log("List refreshed successfully");
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
`,me=_({__name:"edit-row",props:{row:{}},setup(w){const t=h({...w.row}),n=P(),d=h(!1),c=()=>{d.value=!0,setTimeout(()=>{d.value=!1,console.log("Backend reports save success"),n.destroyWithResolve(t.value)},2e3)},u=()=>{n.destroyWithReject(new Error("CancelEdit"))};return(l,o)=>{const m=y,g=A;return b((f(),I(i(U),null,{default:s(()=>[e(i(T),{label:"Date"},{default:s(()=>[e(i(O),{modelValue:t.value.date,"onUpdate:modelValue":o[0]||(o[0]=v=>t.value.date=v),type:"date",placeholder:"Select date",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD"},null,8,["modelValue"])]),_:1}),e(i(T),{label:"Name"},{default:s(()=>[e(i(R),{modelValue:t.value.name,"onUpdate:modelValue":o[1]||(o[1]=v=>t.value.name=v),placeholder:"Please enterName"},null,8,["modelValue"])]),_:1}),e(i(T),{label:"State/Province"},{default:s(()=>[e(i(R),{modelValue:t.value.state,"onUpdate:modelValue":o[2]||(o[2]=v=>t.value.state=v),placeholder:"Please enterState/Province"},null,8,["modelValue"])]),_:1}),e(i(T),null,{default:s(()=>[e(m,{onClick:c},{default:s(()=>o[3]||(o[3]=[p("Save")])),_:1,__:[3]}),e(m,{onClick:u},{default:s(()=>o[4]||(o[4]=[p("Cancel")])),_:1,__:[4]})]),_:1})]),_:1})),[[g,d.value]])}}}),ve=_({__name:"promise",setup(w){const a=W(),t=h(!1),n=async c=>{try{await a(e(me,{row:c},null),{title:"Edit row"}).promise}catch{}finally{t.value=!0,setTimeout(()=>{t.value=!1,console.log("List refreshed successfully")},2e3)}},d=[{date:"2016-05-03",name:"Tom",state:"California"},{date:"2016-05-02",name:"Tom",state:"California"},{date:"2016-05-04",name:"Tom",state:"California"},{date:"2016-05-01",name:"Tom",state:"California"}];return(c,u)=>{const l=$,o=y,m=q,g=A;return b((f(),I(m,{data:d,style:{width:"100%"}},{default:s(()=>[e(l,{fixed:"",prop:"date",label:"Date",width:"150"}),e(l,{prop:"name",label:"Name",width:"120"}),e(l,{prop:"state",label:"State",width:"120"}),e(l,{fixed:"right",label:"Operations","min-width":"120"},{default:s(({row:v})=>[e(o,{link:"",type:"primary",onClick:N=>n(v)},{default:s(()=>u[0]||(u[0]=[p("Edit")])),_:2,__:[0]},1032,["onClick"])]),_:1})]),_:1})),[[g,t.value]])}}}),ye=JSON.parse('{"title":"Advanced Usage","description":"","frontmatter":{},"headers":[],"relativePath":"en/example/advanced.md","filePath":"en/example/advanced.md"}'),ge={name:"en/example/advanced.md"},xe=Object.assign(ge,{setup(w){const a=h(!0);return(t,n)=>{const d=M("ClientOnly");return f(),C("div",null,[n[5]||(n[5]=j("",5)),b(e(i(D),null,null,512),[[x,a.value]]),e(d,null,{default:s(()=>[e(i(k),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:n[0]||(n[0]=()=>{a.value=!1}),vueCode:i(pe)},{vue:s(()=>[e(ve)]),_:1},8,["vueCode"])]),_:1}),n[6]||(n[6]=r("p",null,"In admin systems, editing table row data in a dialog is a common requirement. Compared with declarative implementation, imperative components provide clear advantages in developer experience and code simplicity.",-1)),n[7]||(n[7]=r("h3",{id:"case-2-multi-step-dialogs",tabindex:"-1"},[p("Case 2: Multi-Step Dialogs "),r("a",{class:"header-anchor",href:"#case-2-multi-step-dialogs","aria-label":'Permalink to "Case 2: Multi-Step Dialogs"'},"​")],-1)),n[8]||(n[8]=r("p",null,"In some scenarios, a dialog needs to perform multiple consecutive steps, such as data selection, content editing, and information confirmation. Promise support makes this type of flow elegant:",-1)),b(e(i(D),null,null,512),[[x,a.value]]),e(d,null,{default:s(()=>[e(i(k),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:n[1]||(n[1]=()=>{a.value=!1}),vueCode:i(de)},{vue:s(()=>[e(ce)]),_:1},8,["vueCode"])]),_:1}),n[9]||(n[9]=r("h3",{id:"case-3-a-creative-trick",tabindex:"-1"},[p("Case 3: A Creative Trick "),r("a",{class:"header-anchor",href:"#case-3-a-creative-trick","aria-label":'Permalink to "Case 3: A Creative Trick"'},"​")],-1)),n[10]||(n[10]=r("p",null,"Command components are not limited to dialog-like scenarios. They can also work as a special node mount manager:",-1)),b(e(i(D),null,null,512),[[x,a.value]]),e(d,null,{default:s(()=>[e(i(k),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:n[2]||(n[2]=()=>{a.value=!1}),vueCode:i(ee)},{vue:s(()=>[e(re)]),_:1},8,["vueCode"])]),_:1}),n[11]||(n[11]=r("h2",{id:"reactive-components",tabindex:"-1"},[p("Reactive Components "),r("a",{class:"header-anchor",href:"#reactive-components","aria-label":'Permalink to "Reactive Components"'},"​")],-1)),n[12]||(n[12]=r("p",null,"Change the first argument to a function.",-1)),b(e(i(D),null,null,512),[[x,a.value]]),e(d,null,{default:s(()=>[e(i(k),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:n[3]||(n[3]=()=>{a.value=!1}),vueCode:i(H)},{vue:s(()=>[e(K)]),_:1},8,["vueCode"])]),_:1}),n[13]||(n[13]=r("h2",{id:"reactive-configuration",tabindex:"-1"},[p("Reactive Configuration "),r("a",{class:"header-anchor",href:"#reactive-configuration","aria-label":'Permalink to "Reactive Configuration"'},"​")],-1)),n[14]||(n[14]=r("p",null,"Component presentation is usually relatively fixed, but in specific scenarios you may need to adjust component configuration dynamically based on data changes. The implementation is simple: make the configuration item a function that returns a config object.",-1)),b(e(i(D),null,null,512),[[x,a.value]]),e(d,null,{default:s(()=>[e(i(k),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:n[4]||(n[4]=()=>{a.value=!1}),vueCode:i(F)},{vue:s(()=>[e(X)]),_:1},8,["vueCode"])]),_:1})])}}});export{ye as __pageData,xe as default};
