import{_ as S,r as _,C as w,E as y,J as k,O as c,k as e,I as l,B as u,u as h,j as Q,G as M,t as T,H as L,w as ae,W as oe,aW as P,v as U}from"./chunks/framework.Dr0ZuDOg.js";import{a as R,u as Y,O as E,E as Z}from"./chunks/index.DB_ntYdK.js";/* empty css                         *//* empty css                      */import{f as O,a as x,g as j,b as X,d as F,h as se,i as ie,e as $,j as W,k as G,l as re,m as de,n as J,o as H,v as ue}from"./chunks/theme.a7z_s1GA.js";import{T as me}from"./chunks/nested.CA8UmkTC.js";import{a as pe}from"./chunks/DialogContent.vue_vue_type_script_setup_true_lang.CqhwfsyT.js";const ce=`<template>
  <div>
    <h4>Multiple dialog management - imperative</h4>
    <div class="button-group">
      <el-button @click="openUserDialog" type="primary">User management</el-button>
      <el-button @click="openOrderDialog" type="warning">Order management</el-button>
      <el-button @click="openProductDialog" type="success">Product management</el-button>
      <el-button @click="openSettingsDialog" type="info">System settings</el-button>
    </div>
  </div>
</template>

<script setup lang="tsx">
import { useDialog } from "@vue-cmd/element-plus";
import { ElMessage } from "element-plus";
import ManagerComponents from "./shared/ManagerComponents.vue";

const dialog = useDialog();

// Dialog open methods
const openUserDialog = () => {
  dialog(<ManagerComponents type="user" showButtons={false} />, {
    title: "User management",
    width: "600px",
  });
};

const openOrderDialog = () => {
  dialog(<ManagerComponents type="order" showButtons={false} />, {
    title: "Order management",
    width: "700px",
  });
};

const openProductDialog = () => {
  dialog(<ManagerComponents type="product" showButtons={false} />, {
    title: "Product management",
    width: "650px",
  });
};

const openSettingsDialog = async () => {
  try {
    const result = await dialog(
      <ManagerComponents type="settings" showButtons={true} />,
      {
        title: "System settings",
        width: "500px",
      },
    ).promise;

    console.log("Saved settings:", result);
  } catch {
    // The user canceled settings
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
`,z=[{id:1,name:"Alice",email:"zhangsan@example.com",role:"admin"},{id:2,name:"Bob",email:"lisi@example.com",role:"user"},{id:3,name:"Charlie",email:"wangwu@example.com",role:"user"}],fe=[{id:"ORD001",amount:"¥299",status:"Completed"},{id:"ORD002",amount:"¥599",status:"In progress"}],ge=[{name:"Product A",price:"¥99",stock:100},{name:"Product B",price:"¥199",stock:50}],K={name:"Alice",email:"zhangsan@example.com"},ve={systemName:"Management System",timeout:30,enableLog:!0},be={key:0,class:"DialogContent"},he={key:1,class:"DialogContent"},ye={key:2,class:"DialogContent"},we={key:3,class:"DialogContent"},_e={key:0,style:{"text-align":"right","margin-top":"20px"}},De={__name:"ManagerComponents",props:{type:{type:String,required:!0,validator:p=>["user","order","product","settings"].includes(p)},showButtons:{type:Boolean,default:!0}},emits:["save","cancel"],setup(p,{emit:o}){const s=o,t=R(!1),n=_({...ve}),d=()=>{try{return t.promise instanceof Promise}catch{return!1}},f=()=>{W.success("Settings saved"),d()?t.destroyWithResolve(n.value):s("save",n.value)},m=()=>{d()?t.destroyWithReject():s("cancel")};return(g,i)=>{const r=O,a=x,b=j,v=F,D=X,B=se,C=ie,V=$;return y(),w("div",null,[p.type==="user"?(y(),w("div",be,[i[4]||(i[4]=c("p",null,"User management feature",-1)),e(b,{data:h(z),size:"small"},{default:l(()=>[e(r,{prop:"name",label:"Name"}),e(r,{prop:"email",label:"Email"}),e(r,{label:"Actions"},{default:l(()=>[e(a,{size:"small"},{default:l(()=>i[3]||(i[3]=[u("Edit")])),_:1,__:[3]})]),_:1})]),_:1},8,["data"])])):k("",!0),p.type==="order"?(y(),w("div",he,[i[6]||(i[6]=c("p",null,"Order management feature",-1)),e(b,{data:h(fe),size:"small"},{default:l(()=>[e(r,{prop:"id",label:"Order ID"}),e(r,{prop:"amount",label:"Amount"}),e(r,{prop:"status",label:"Status"}),e(r,{label:"Actions"},{default:l(()=>[e(a,{size:"small"},{default:l(()=>i[5]||(i[5]=[u("View")])),_:1,__:[5]})]),_:1})]),_:1},8,["data"])])):k("",!0),p.type==="product"?(y(),w("div",ye,[i[8]||(i[8]=c("p",null,"Product management feature",-1)),e(b,{data:h(ge),size:"small"},{default:l(()=>[e(r,{prop:"name",label:"Product name"}),e(r,{prop:"price",label:"Price"}),e(r,{prop:"stock",label:"Stock"}),e(r,{label:"Actions"},{default:l(()=>[e(a,{size:"small"},{default:l(()=>i[7]||(i[7]=[u("Edit")])),_:1,__:[7]})]),_:1})]),_:1},8,["data"])])):k("",!0),p.type==="settings"?(y(),w("div",we,[e(V,{model:n.value,"label-width":"100px"},{default:l(()=>[e(D,{label:"System name"},{default:l(()=>[e(v,{modelValue:n.value.systemName,"onUpdate:modelValue":i[0]||(i[0]=I=>n.value.systemName=I)},null,8,["modelValue"])]),_:1}),e(D,{label:"Timeout"},{default:l(()=>[e(B,{modelValue:n.value.timeout,"onUpdate:modelValue":i[1]||(i[1]=I=>n.value.timeout=I)},null,8,["modelValue"])]),_:1}),e(D,{label:"Enable logs"},{default:l(()=>[e(C,{modelValue:n.value.enableLog,"onUpdate:modelValue":i[2]||(i[2]=I=>n.value.enableLog=I)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),p.showButtons?(y(),w("div",_e,[e(a,{onClick:m},{default:l(()=>i[9]||(i[9]=[u("Cancel")])),_:1,__:[9]}),e(a,{type:"primary",onClick:f},{default:l(()=>i[10]||(i[10]=[u("Save")])),_:1,__:[10]})])):k("",!0)])):k("",!0)])}}},A=S(De,[["__scopeId","data-v-e57708b9"]]),Ce={class:"button-group"},We=Q({__name:"comparison-command-multiple",setup(p){const o=Y(),s=()=>{o(e(A,{type:"user",showButtons:!1},null),{title:"User management",width:"600px"})},t=()=>{o(e(A,{type:"order",showButtons:!1},null),{title:"Order management",width:"700px"})},n=()=>{o(e(A,{type:"product",showButtons:!1},null),{title:"Product management",width:"650px"})},d=async()=>{try{const f=await o(e(A,{type:"settings",showButtons:!0},null),{title:"System settings",width:"500px"}).promise;console.log("Saved settings:",f)}catch{}};return(f,m)=>{const g=x;return y(),w("div",null,[m[4]||(m[4]=c("h4",null,"Multiple dialog management - imperative",-1)),c("div",Ce,[e(g,{onClick:s,type:"primary"},{default:l(()=>m[0]||(m[0]=[u("User management")])),_:1,__:[0]}),e(g,{onClick:t,type:"warning"},{default:l(()=>m[1]||(m[1]=[u("Order management")])),_:1,__:[1]}),e(g,{onClick:n,type:"success"},{default:l(()=>m[2]||(m[2]=[u("Product management")])),_:1,__:[2]}),e(g,{onClick:d,type:"info"},{default:l(()=>m[3]||(m[3]=[u("System settings")])),_:1,__:[3]})])])}}}),ke=S(We,[["__scopeId","data-v-89b557d8"]]),xe=`<template>
  <div>
    <h4>Multiple dialog management - traditional</h4>
    <div class="button-group">
      <el-button @click="openUserDialog" type="primary">User management</el-button>
      <el-button @click="openOrderDialog" type="warning">Order management</el-button>
      <el-button @click="openProductDialog" type="success">Product management</el-button>
      <el-button @click="openSettingsDialog" type="info">System settings</el-button>
    </div>

    <!-- User management dialog -->
    <el-dialog v-model="userDialogVisible" title="User management" width="600px">
      <ManagerComponents type="user" :show-buttons="false" />
      <template #footer>
        <el-button @click="userDialogVisible = false">Close</el-button>
      </template>
    </el-dialog>

    <!-- Order management dialog -->
    <el-dialog v-model="orderDialogVisible" title="Order management" width="700px">
      <ManagerComponents type="order" :show-buttons="false" />
      <template #footer>
        <el-button @click="orderDialogVisible = false">Close</el-button>
      </template>
    </el-dialog>

    <!-- Product management dialog -->
    <el-dialog v-model="productDialogVisible" title="Product management" width="650px">
      <ManagerComponents type="product" :show-buttons="false" />
      <template #footer>
        <el-button @click="productDialogVisible = false">Close</el-button>
      </template>
    </el-dialog>

    <!-- System settings dialog -->
    <el-dialog v-model="settingsDialogVisible" title="System settings" width="500px">
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

// Dialog state management
const userDialogVisible = ref(false);
const orderDialogVisible = ref(false);
const productDialogVisible = ref(false);
const settingsDialogVisible = ref(false);

// Dialog open methods
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
  ElMessage.success("Settings saved");
  console.log("Saved settings:", settings);
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
`,Ve={class:"button-group"},Se={__name:"comparison-traditional-multiple",setup(p){const o=_(!1),s=_(!1),t=_(!1),n=_(!1),d=()=>{o.value=!0},f=()=>{s.value=!0},m=()=>{t.value=!0},g=()=>{n.value=!0},i=r=>{W.success("Settings saved"),console.log("Saved settings:",r),n.value=!1};return(r,a)=>{const b=x,v=G;return y(),w("div",null,[a[15]||(a[15]=c("h4",null,"Multiple dialog management - traditional",-1)),c("div",Ve,[e(b,{onClick:d,type:"primary"},{default:l(()=>a[8]||(a[8]=[u("User management")])),_:1,__:[8]}),e(b,{onClick:f,type:"warning"},{default:l(()=>a[9]||(a[9]=[u("Order management")])),_:1,__:[9]}),e(b,{onClick:m,type:"success"},{default:l(()=>a[10]||(a[10]=[u("Product management")])),_:1,__:[10]}),e(b,{onClick:g,type:"info"},{default:l(()=>a[11]||(a[11]=[u("System settings")])),_:1,__:[11]})]),e(v,{modelValue:o.value,"onUpdate:modelValue":a[1]||(a[1]=D=>o.value=D),title:"User management",width:"600px"},{footer:l(()=>[e(b,{onClick:a[0]||(a[0]=D=>o.value=!1)},{default:l(()=>a[12]||(a[12]=[u("Close")])),_:1,__:[12]})]),default:l(()=>[e(A,{type:"user","show-buttons":!1})]),_:1},8,["modelValue"]),e(v,{modelValue:s.value,"onUpdate:modelValue":a[3]||(a[3]=D=>s.value=D),title:"Order management",width:"700px"},{footer:l(()=>[e(b,{onClick:a[2]||(a[2]=D=>s.value=!1)},{default:l(()=>a[13]||(a[13]=[u("Close")])),_:1,__:[13]})]),default:l(()=>[e(A,{type:"order","show-buttons":!1})]),_:1},8,["modelValue"]),e(v,{modelValue:t.value,"onUpdate:modelValue":a[5]||(a[5]=D=>t.value=D),title:"Product management",width:"650px"},{footer:l(()=>[e(b,{onClick:a[4]||(a[4]=D=>t.value=!1)},{default:l(()=>a[14]||(a[14]=[u("Close")])),_:1,__:[14]})]),default:l(()=>[e(A,{type:"product","show-buttons":!1})]),_:1},8,["modelValue"]),e(v,{modelValue:n.value,"onUpdate:modelValue":a[7]||(a[7]=D=>n.value=D),title:"System settings",width:"500px"},{default:l(()=>[e(A,{type:"settings",onSave:i,onCancel:a[6]||(a[6]=D=>n.value=!1)})]),_:1},8,["modelValue"])])}}},Te=S(Se,[["__scopeId","data-v-060a18c6"]]),Be=`<template>
  <div>
    <h4>Multi-step workflow - imperative</h4>
    <el-button @click="handleWorkflow" type="success">Start workflow</el-button>
  </div>
</template>

<script setup lang="tsx">
import { useDialog } from "@vue-cmd/element-plus";
import WorkflowStep1 from "./shared/WorkflowStep1.vue";
import WorkflowStep2 from "./shared/WorkflowStep2.vue";
import WorkflowStep3 from "./shared/WorkflowStep3.vue";

const dialog = useDialog();

const handleWorkflow = async () => {
  try {
    // Step 1: select data
    const selectedDataType = await dialog(<WorkflowStep1 />, {
      title: "Step 1: Select data",
      width: "500px",
    }).promise;

    // Step 2: edit content (supports returning to previous step)
    let editData;
    try {
      editData = await dialog(<WorkflowStep2 dataType={selectedDataType} />, {
        title: "Step 2: Edit content",
        width: "600px",
      }).promise;
    } catch (error) {
      if (error === "back") {
        // The user clicked Previous; restart the flow
        return handleWorkflow();
      } else {
        // The user canceled the operation
        return;
      }
    }

    try {
      const result = await dialog(
        <WorkflowStep3 dataType={selectedDataType} editData={editData} />,
        { title: "Step 3: Confirm submission", width: "500px" },
      ).promise;

      // Execution succeeded; the message is shown in WorkflowStep3
      console.log("Workflow result:", result);
    } catch (error) {
      if (error === "back") {
        // The user clicked Previous; return to Step 2
        try {
          editData = await dialog(
            <WorkflowStep2 dataType={selectedDataType} />,
            {
              title: "Step 2: Edit content",
              width: "600px",
            },
          ).promise;

          // After Step 2 finishes, continue the loop and try Step 3
        } catch (step2Error) {
          if (step2Error === "back") {
            // Return from Step 2 to Step 1 and restart the flow
            return handleWorkflow();
          } else {
            // The user canceled the operation
            return;
          }
        }
      } else {
        // The user canceled the operation
        return;
      }
    }
  } catch (error) {
    // The user canceled at the first step
    console.log("The user canceled the workflow");
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
`,Ue={class:"step-content"},Ee={key:0,style:{"text-align":"right","margin-top":"20px"}},Ze={__name:"WorkflowStep1",props:{showButtons:{type:Boolean,default:!0}},emits:["next","cancel"],setup(p,{emit:o}){const s=o,t=R(!1),n=_(""),d=()=>{try{return t.promise instanceof Promise}catch{return!1}},f=()=>{if(!n.value){W.warning("Please select a data type");return}const g=n.value;d()?t.destroyWithResolve(g):s("next",{data:g})},m=()=>{d()?t.destroyWithReject():s("cancel")};return(g,i)=>{const r=re,a=de,b=x;return y(),w("div",Ue,[i[6]||(i[6]=c("p",null,"Please select the data type to process:",-1)),e(a,{modelValue:n.value,"onUpdate:modelValue":i[0]||(i[0]=v=>n.value=v)},{default:l(()=>[e(r,{label:"users"},{default:l(()=>i[1]||(i[1]=[u("UserData")])),_:1,__:[1]}),e(r,{label:"orders"},{default:l(()=>i[2]||(i[2]=[u("Order data")])),_:1,__:[2]}),e(r,{label:"products"},{default:l(()=>i[3]||(i[3]=[u("Product data")])),_:1,__:[3]})]),_:1},8,["modelValue"]),p.showButtons?(y(),w("div",Ee,[e(b,{onClick:m},{default:l(()=>i[4]||(i[4]=[u("Cancel")])),_:1,__:[4]}),e(b,{type:"primary",onClick:f},{default:l(()=>i[5]||(i[5]=[u("Next")])),_:1,__:[5]})])):k("",!0)])}}},ee=S(Ze,[["__scopeId","data-v-50d5e47f"]]),Ae={class:"step-content"},Re={key:0,style:{"text-align":"right","margin-top":"20px"}},Ie={__name:"WorkflowStep2",props:{dataType:{type:String,required:!0},showButtons:{type:Boolean,default:!0}},emits:["next","back","cancel"],setup(p,{emit:o}){const s=o,t=R(!1),n=_({method:"",note:""}),d=()=>{try{return t.promise instanceof Promise}catch{return!1}},f=()=>{if(!n.value.method){W.warning("Please select an action");return}const i=n.value;d()?t.destroyWithResolve(i):s("next",{data:i})},m=()=>{d()?t.destroyWithReject("back"):s("back")},g=()=>{d()?t.destroyWithReject():s("cancel")};return(i,r)=>{const a=H,b=J,v=X,D=F,B=$,C=x;return y(),w("div",Ae,[c("p",null,"Processing: "+M(p.dataType),1),e(B,{model:n.value,"label-width":"100px"},{default:l(()=>[e(v,{label:"Action"},{default:l(()=>[e(b,{modelValue:n.value.method,"onUpdate:modelValue":r[0]||(r[0]=V=>n.value.method=V)},{default:l(()=>[e(a,{label:"Batch update",value:"update"}),e(a,{label:"Batch delete",value:"delete"}),e(a,{label:"Export data",value:"export"})]),_:1},8,["modelValue"])]),_:1}),e(v,{label:"Notes"},{default:l(()=>[e(D,{modelValue:n.value.note,"onUpdate:modelValue":r[1]||(r[1]=V=>n.value.note=V),type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),p.showButtons?(y(),w("div",Re,[e(C,{onClick:m},{default:l(()=>r[2]||(r[2]=[u("Previous")])),_:1,__:[2]}),e(C,{onClick:g},{default:l(()=>r[3]||(r[3]=[u("Cancel")])),_:1,__:[3]}),e(C,{type:"primary",onClick:f},{default:l(()=>r[4]||(r[4]=[u("Next")])),_:1,__:[4]})])):k("",!0)])}}},q=S(Ie,[["__scopeId","data-v-50a30378"]]),Pe={class:"step-content"},Me={key:0,style:{"text-align":"right","margin-top":"20px"}},Le={__name:"WorkflowStep3",props:{dataType:{type:String,required:!0},editData:{type:Object,required:!0},showButtons:{type:Boolean,default:!0}},emits:["submit","back","cancel"],setup(p,{emit:o}){const s=p,t=o,n=R(!1),d=_(!1),f=()=>{try{return n.promise instanceof Promise}catch{return!1}},m=async()=>{d.value=!0;try{await new Promise(a=>setTimeout(a,2e3));const r={dataType:s.dataType,method:s.editData.method,note:s.editData.note};W.success("Workflow executed successfully!"),f()?n.destroyWithResolve(r):t("submit",r)}catch{W.error("Execution failed")}finally{d.value=!1}},g=()=>{f()?n.destroyWithReject("back"):t("back")},i=()=>{f()?n.destroyWithReject():t("cancel")};return(r,a)=>{const b=x;return y(),w("div",Pe,[a[6]||(a[6]=c("h5",null,"Please confirm the following information:",-1)),c("p",null,[a[0]||(a[0]=c("strong",null,"DataType:",-1)),u(" "+M(p.dataType),1)]),c("p",null,[a[1]||(a[1]=c("strong",null,"Action:",-1)),u(" "+M(p.editData.method),1)]),c("p",null,[a[2]||(a[2]=c("strong",null,"Notes:",-1)),u(" "+M(p.editData.note||"None"),1)]),p.showButtons?(y(),w("div",Me,[e(b,{onClick:g},{default:l(()=>a[3]||(a[3]=[u("Previous")])),_:1,__:[3]}),e(b,{onClick:i},{default:l(()=>a[4]||(a[4]=[u("Cancel")])),_:1,__:[4]}),e(b,{type:"primary",onClick:m,loading:d.value},{default:l(()=>a[5]||(a[5]=[u(" Submit ")])),_:1,__:[5]},8,["loading"])])):k("",!0)])}}},te=S(Le,[["__scopeId","data-v-75dd27c3"]]),Qe=Q({__name:"comparison-command-workflow",setup(p){const o=Y(),s=async()=>{try{const t=await o(e(ee,null,null),{title:"Step 1: Select data",width:"500px"}).promise;let n;try{n=await o(e(q,{dataType:t},null),{title:"Step 2: Edit content",width:"600px"}).promise}catch(d){return d==="back"?s():void 0}try{const d=await o(e(te,{dataType:t,editData:n},null),{title:"Step 3: Confirm submission",width:"500px"}).promise;console.log("Workflow result:",d)}catch(d){if(d==="back")try{n=await o(e(q,{dataType:t},null),{title:"Step 2: Edit content",width:"600px"}).promise}catch(f){return f==="back"?s():void 0}else return}}catch{console.log("The user canceled the workflow")}};return(t,n)=>{const d=x;return y(),w("div",null,[n[1]||(n[1]=c("h4",null,"Multi-step workflow - imperative",-1)),e(d,{onClick:s,type:"success"},{default:l(()=>n[0]||(n[0]=[u("Start workflow")])),_:1,__:[0]})])}}}),Ye=S(Qe,[["__scopeId","data-v-2f9f4410"]]),Ge=`<template>
  <div>
    <h4>Multi-step workflow - traditional</h4>
    <el-button @click="handleWorkflow" type="primary">Start workflow</el-button>

    <!-- Step 1: select data -->
    <el-dialog v-model="step1Visible" title="Step 1: Select data" width="500px">
      <WorkflowStep1 @next="handleStep1Next" @cancel="step1Visible = false" />
    </el-dialog>

    <!-- Step 2: edit content -->
    <el-dialog v-model="step2Visible" title="Step 2: Edit content" width="600px">
      <WorkflowStep2
        :data-type="selectedDataType"
        @next="handleStep2Next"
        @back="goBackToStep1"
        @cancel="step2Visible = false"
      />
    </el-dialog>

    <!-- Step 3: confirm submission -->
    <el-dialog v-model="step3Visible" title="Step 3: Confirm submission" width="500px">
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
  // Reset state
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
  console.log("Workflow result:", result);
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
`,Ne={__name:"comparison-traditional-workflow",setup(p){const o=_(!1),s=_(!1),t=_(!1),n=_(""),d=_({}),f=()=>{n.value="",d.value={},o.value=!0},m=({data:b})=>{n.value=b,o.value=!1,s.value=!0},g=({data:b})=>{d.value=b,s.value=!1,t.value=!0},i=b=>{t.value=!1,console.log("Workflow result:",b)},r=()=>{s.value=!1,o.value=!0},a=()=>{t.value=!1,s.value=!0};return(b,v)=>{const D=x,B=G;return y(),w("div",null,[v[7]||(v[7]=c("h4",null,"Multi-step workflow - traditional",-1)),e(D,{onClick:f,type:"primary"},{default:l(()=>v[6]||(v[6]=[u("Start workflow")])),_:1,__:[6]}),e(B,{modelValue:o.value,"onUpdate:modelValue":v[1]||(v[1]=C=>o.value=C),title:"Step 1: Select data",width:"500px"},{default:l(()=>[e(ee,{onNext:m,onCancel:v[0]||(v[0]=C=>o.value=!1)})]),_:1},8,["modelValue"]),e(B,{modelValue:s.value,"onUpdate:modelValue":v[3]||(v[3]=C=>s.value=C),title:"Step 2: Edit content",width:"600px"},{default:l(()=>[e(q,{"data-type":n.value,onNext:g,onBack:r,onCancel:v[2]||(v[2]=C=>s.value=!1)},null,8,["data-type"])]),_:1},8,["modelValue"]),e(B,{modelValue:t.value,"onUpdate:modelValue":v[5]||(v[5]=C=>t.value=C),title:"Step 3: Confirm submission",width:"500px"},{default:l(()=>[e(te,{"data-type":n.value,"edit-data":d.value,onSubmit:i,onBack:a,onCancel:v[4]||(v[4]=C=>t.value=!1)},null,8,["data-type","edit-data"])]),_:1},8,["modelValue"])])}}},qe=S(Ne,[["__scopeId","data-v-5e692ec9"]]),Xe=`<template>
  <div>
    <h4>Table editing - imperative</h4>
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

const dialog = useDialog();
const tableData = ref([...userData]);

const editRow = async (row) => {
  try {
    const result = await dialog(<UserEditForm user={row} showRole={true} />, {
      title: "Edit user",
      width: "500px",
    }).promise;

    // Update table data
    const index = tableData.value.findIndex((item) => item.id === row.id);
    if (index !== -1) {
      tableData.value[index] = { ...result, id: row.id };
    }

    ElMessage.success("Updated successfully");
  } catch {
    // The user canceled editing; no handling needed
  }
};

const deleteRow = async (row) => {
  try {
    await dialog(<DeleteConfirm user={row} />, {
      title: "Confirm delete",
      width: "400px",
    }).promise;

    // Remove from table
    const index = tableData.value.findIndex((item) => item.id === row.id);
    if (index !== -1) {
      tableData.value.splice(index, 1);
    }

    ElMessage.success("Deleted successfully");
  } catch {
    // The user canceled deletion; no handling needed
  }
};
<\/script>

<style scoped>
h4 {
  margin-bottom: 16px;
  color: #67c23a;
}
</style>
`,ne={__name:"UserTable",props:{data:{type:Array,required:!0},showRole:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},emits:["edit","delete"],setup(p){return(o,s)=>{const t=O,n=x,d=j,f=ue;return T((y(),L(d,{data:p.data,style:{width:"100%"}},{default:l(()=>[e(t,{prop:"name",label:"Name",width:"120"}),e(t,{prop:"email",label:"Email",width:"200"}),p.showRole?(y(),L(t,{key:0,prop:"role",label:"Role",width:"100"})):k("",!0),e(t,{label:"Actions",width:"150"},{default:l(({row:m})=>[e(n,{size:"small",onClick:g=>o.$emit("edit",m)},{default:l(()=>s[0]||(s[0]=[u("Edit")])),_:2,__:[0]},1032,["onClick"]),e(n,{size:"small",type:"danger",onClick:g=>o.$emit("delete",m)},{default:l(()=>s[1]||(s[1]=[u("Delete")])),_:2,__:[1]},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[f,p.loading]])}}},Fe={class:"p-4"},$e={key:0,class:"dialog-footer"},ze={__name:"UserEditForm",props:{user:{type:Object,required:!0},showRole:{type:Boolean,default:!1},showButtons:{type:Boolean,default:!0},loading:{type:Boolean,default:!1}},emits:["submit","cancel"],setup(p,{emit:o}){const s=p,t=o,n=_({...s.user}),d=R(!1);ae(()=>s.user,i=>{n.value={...i}},{deep:!0});const f=()=>{try{return d.promise instanceof Promise}catch{return!1}},m=async()=>{try{await new Promise(i=>setTimeout(i,1e3)),console.log("Submitted data:",n.value),W.success("User information updated"),f()?d.destroyWithResolve(n.value):t("submit",n.value)}catch{W.error("Submit failed")}},g=()=>{f()?d.destroyWithReject():t("cancel")};return(i,r)=>{const a=F,b=X,v=H,D=J,B=$,C=x;return y(),w("div",Fe,[e(B,{model:n.value,"label-width":"80px"},{default:l(()=>[e(b,{label:"Name"},{default:l(()=>[e(a,{modelValue:n.value.name,"onUpdate:modelValue":r[0]||(r[0]=V=>n.value.name=V)},null,8,["modelValue"])]),_:1}),e(b,{label:"Email"},{default:l(()=>[e(a,{modelValue:n.value.email,"onUpdate:modelValue":r[1]||(r[1]=V=>n.value.email=V)},null,8,["modelValue"])]),_:1}),p.showRole?(y(),L(b,{key:0,label:"Role"},{default:l(()=>[e(D,{modelValue:n.value.role,"onUpdate:modelValue":r[2]||(r[2]=V=>n.value.role=V)},{default:l(()=>[e(v,{label:"Admin",value:"admin"}),e(v,{label:"User",value:"user"})]),_:1},8,["modelValue"])]),_:1})):k("",!0)]),_:1},8,["model"]),p.showButtons?(y(),w("div",$e,[e(C,{onClick:g},{default:l(()=>r[3]||(r[3]=[u("Cancel")])),_:1,__:[3]}),e(C,{type:"primary",onClick:m,loading:p.loading},{default:l(()=>r[4]||(r[4]=[u("Confirm")])),_:1,__:[4]},8,["loading"])])):k("",!0)])}}},N=S(ze,[["__scopeId","data-v-5ef5d3ff"]]),Oe={key:0,style:{"text-align":"right","margin-top":"20px"}},le={__name:"DeleteConfirm",props:{user:{type:Object,required:!0},showButtons:{type:Boolean,default:!0},loading:{type:Boolean,default:!1}},emits:["confirm","cancel"],setup(p,{emit:o}){const s=o,t=R(!1),n=()=>{try{return t.promise instanceof Promise}catch{return!1}},d=async()=>{try{await new Promise(m=>setTimeout(m,1e3)),n()?t.destroyWithResolve(!0):s("confirm")}catch(m){console.error("Delete failed:",m)}},f=()=>{n()?t.destroyWithReject():s("cancel")};return(m,g)=>{const i=x;return y(),w("div",null,[c("p",null,'Are you sure you want to delete user "'+M(p.user.name)+'" ?',1),p.showButtons?(y(),w("div",Oe,[e(i,{onClick:f},{default:l(()=>g[0]||(g[0]=[u("Cancel")])),_:1,__:[0]}),e(i,{type:"danger",onClick:d,loading:p.loading},{default:l(()=>g[1]||(g[1]=[u("Confirm delete")])),_:1,__:[1]},8,["loading"])])):k("",!0)])}}},je=Q({__name:"comparison-command-table",setup(p){const o=Y(),s=_([...z]),t=async d=>{try{const f=await o(e(N,{user:d,showRole:!0},null),{title:"Edit user",width:"500px"}).promise,m=s.value.findIndex(g=>g.id===d.id);m!==-1&&(s.value[m]={...f,id:d.id}),W.success("Updated successfully")}catch{}},n=async d=>{try{await o(e(le,{user:d},null),{title:"Confirm delete",width:"400px"}).promise;const f=s.value.findIndex(m=>m.id===d.id);f!==-1&&s.value.splice(f,1),W.success("Deleted successfully")}catch{}};return(d,f)=>(y(),w("div",null,[f[0]||(f[0]=c("h4",null,"Table editing - imperative",-1)),e(ne,{data:s.value,"show-role":!0,onEdit:t,onDelete:n},null,8,["data"])]))}}),Je=S(je,[["__scopeId","data-v-a3fb36e1"]]),He=`<template>
  <div>
    <h4>Table editing - traditional</h4>
    <UserTable
      :data="tableData"
      :show-role="true"
      :loading="loading"
      @edit="editRow"
      @delete="deleteRow"
    />

    <!-- Edit dialog -->
    <el-dialog v-model="editVisible" title="Edit user" width="500px">
      <UserEditForm
        v-if="editVisible"
        :user="currentRow"
        :show-role="true"
        @submit="handleEditSubmit"
        @cancel="editVisible = false"
      />
    </el-dialog>

    <!-- Delete confirmation dialog -->
    <el-dialog v-model="deleteVisible" title="Confirm delete" width="400px">
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
    // Update table data
    const index = tableData.value.findIndex(
      (item) => item.id === currentRow.value.id,
    );
    if (index !== -1) {
      tableData.value[index] = { ...userData, id: currentRow.value.id };
    }

    editVisible.value = false;
    ElMessage.success("Updated successfully");
  } catch (error) {
    ElMessage.error("Update failed");
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
    // Remove from table
    const index = tableData.value.findIndex(
      (item) => item.id === currentRow.value.id,
    );
    if (index !== -1) {
      tableData.value.splice(index, 1);
    }

    deleteVisible.value = false;
    ElMessage.success("Deleted successfully");
  } catch (error) {
    ElMessage.error("Delete failed");
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
`,Ke={__name:"comparison-traditional-table",setup(p){const o=_([...z]),s=_(!1),t=_(!1),n=_({}),d=_(!1),f=r=>{n.value={...r},s.value=!0},m=async r=>{d.value=!0;try{const a=o.value.findIndex(b=>b.id===n.value.id);a!==-1&&(o.value[a]={...r,id:n.value.id}),s.value=!1,W.success("Updated successfully")}catch{W.error("Update failed")}finally{d.value=!1}},g=r=>{n.value=r,t.value=!0},i=async()=>{d.value=!0;try{const r=o.value.findIndex(a=>a.id===n.value.id);r!==-1&&o.value.splice(r,1),t.value=!1,W.success("Deleted successfully")}catch{W.error("Delete failed")}finally{d.value=!1}};return(r,a)=>{const b=G;return y(),w("div",null,[a[4]||(a[4]=c("h4",null,"Table editing - traditional",-1)),e(ne,{data:o.value,"show-role":!0,loading:d.value,onEdit:f,onDelete:g},null,8,["data","loading"]),e(b,{modelValue:s.value,"onUpdate:modelValue":a[1]||(a[1]=v=>s.value=v),title:"Edit user",width:"500px"},{default:l(()=>[s.value?(y(),L(N,{key:0,user:n.value,"show-role":!0,onSubmit:m,onCancel:a[0]||(a[0]=v=>s.value=!1)},null,8,["user"])):k("",!0)]),_:1},8,["modelValue"]),e(b,{modelValue:t.value,"onUpdate:modelValue":a[3]||(a[3]=v=>t.value=v),title:"Confirm delete",width:"400px"},{default:l(()=>[e(le,{user:n.value,onConfirm:i,onCancel:a[2]||(a[2]=v=>t.value=!1)},null,8,["user"])]),_:1},8,["modelValue"])])}}},et=S(Ke,[["__scopeId","data-v-dec91d21"]]),tt=`<template>
  <div>
    <!-- Business content -->
    <el-button @click="openDialog" type="success">Edit user (imperative)</el-button>
  </div>
</template>

<script setup lang="tsx">
import { useDialog } from "@vue-cmd/element-plus";
import UserEditForm from "./shared/UserEditForm.vue";
import { defaultUser } from "./shared/mockData.js";

const dialog = useDialog();

const openDialog = async () => {
  try {
    const result = await dialog(<UserEditForm user={defaultUser} />, {
      title: "Edit user",
      width: "500px",
    }).promise;

    // The user submitted data; handle the next logic
    console.log("Final result:", result);
  } catch (error) {
    // The user canceled the operation
    console.log("The user canceled editing");
  }
};
<\/script>
`,nt=Q({__name:"comparison-command-basic",setup(p){const o=Y(),s=async()=>{try{const t=await o(e(N,{user:K},null),{title:"Edit user",width:"500px"}).promise;console.log("Final result:",t)}catch{console.log("The user canceled editing")}};return(t,n)=>{const d=x;return y(),w("div",null,[e(d,{onClick:s,type:"success"},{default:l(()=>n[0]||(n[0]=[u("Edit user (imperative)")])),_:1,__:[0]})])}}}),lt=`<template>
  <div>
    <!-- Business content -->
    <el-button @click="openDialog" type="primary"
      >Edit user (traditional)</el-button
    >

    <!-- Dialog definition -->
    <el-dialog
      v-model="dialogVisible"
      title="Edit user"
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

// State management
const dialogVisible = ref(false);
const currentUser = ref({});

// Event handling
const openDialog = () => {
  currentUser.value = { ...defaultUser };
  dialogVisible.value = true;
};

const handleSubmit = (userData) => {
  // Handle submit logic
  console.log("Submitted data:", userData);
  ElMessage.success("User information updated");
  dialogVisible.value = false;
};

const handleCancel = () => {
  dialogVisible.value = false;
};

const handleClose = () => {
  currentUser.value = {};
};
<\/script>
`,at={__name:"comparison-traditional-basic",setup(p){const o=_(!1),s=_({}),t=()=>{s.value={...K},o.value=!0},n=m=>{console.log("Submitted data:",m),W.success("User information updated"),o.value=!1},d=()=>{o.value=!1},f=()=>{s.value={}};return(m,g)=>{const i=x,r=G;return y(),w("div",null,[e(i,{onClick:t,type:"primary"},{default:l(()=>g[1]||(g[1]=[u("Edit user (traditional)")])),_:1,__:[1]}),e(r,{modelValue:o.value,"onUpdate:modelValue":g[0]||(g[0]=a=>o.value=a),title:"Edit user",width:"500px",onClose:f},{default:l(()=>[e(N,{user:s.value,onSubmit:n,onCancel:d},null,8,["user"])]),_:1},8,["modelValue"])])}}},ct=JSON.parse('{"title":"Imperative vs. Traditional Usage","description":"","frontmatter":{},"headers":[],"relativePath":"en/guide/comparison.md","filePath":"en/guide/comparison.md"}'),ot={name:"en/guide/comparison.md"},ft=Object.assign(ot,{setup(p){const o=_(!0);return(s,t)=>{const n=oe("ClientOnly");return y(),w("div",null,[t[9]||(t[9]=P('<h1 id="imperative-vs-traditional-usage" tabindex="-1">Imperative vs. Traditional Usage <a class="header-anchor" href="#imperative-vs-traditional-usage" aria-label="Permalink to &quot;Imperative vs. Traditional Usage&quot;">​</a></h1><p>This page compares imperative components with traditional declarative components through practical code examples, helping you understand the core advantages of imperative components.</p><h2 id="core-differences-overview" tabindex="-1">Core Differences Overview <a class="header-anchor" href="#core-differences-overview" aria-label="Permalink to &quot;Core Differences Overview&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Feature</th><th>Traditional Declarative</th><th>Imperative Component</th><th>Advantage</th></tr></thead><tbody><tr><td><strong>Code volume</strong></td><td>Requires template + state + events</td><td>One function call</td><td>Significantly less code</td></tr><tr><td><strong>State management</strong></td><td>Manually manage <code>visible</code> state</td><td>Managed automatically</td><td>Zero boilerplate</td></tr><tr><td><strong>Async flow</strong></td><td>Complex event callbacks</td><td>Promise support</td><td>Clear control flow</td></tr><tr><td><strong>Nested handling</strong></td><td>Manual layer management</td><td>Automatic stack management</td><td>Smarter handling</td></tr></tbody></table><h2 id="detailed-comparison-examples" tabindex="-1">Detailed Comparison Examples <a class="header-anchor" href="#detailed-comparison-examples" aria-label="Permalink to &quot;Detailed Comparison Examples&quot;">​</a></h2><h3 id="_1-basic-dialog-invocation" tabindex="-1">1. Basic Dialog Invocation <a class="header-anchor" href="#_1-basic-dialog-invocation" aria-label="Permalink to &quot;1. Basic Dialog Invocation&quot;">​</a></h3><h4 id="traditional-declarative-usage" tabindex="-1">Traditional Declarative Usage <a class="header-anchor" href="#traditional-declarative-usage" aria-label="Permalink to &quot;Traditional Declarative Usage&quot;">​</a></h4>',7)),T(e(h(E),null,null,512),[[U,o.value]]),e(n,null,{default:l(()=>[e(h(Z),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{o.value=!1}),vueCode:h(lt)},{vue:l(()=>[e(at)]),_:1},8,["vueCode"])]),_:1}),t[10]||(t[10]=c("h4",{id:"imperative-component-usage",tabindex:"-1"},[u("Imperative Component Usage "),c("a",{class:"header-anchor",href:"#imperative-component-usage","aria-label":'Permalink to "Imperative Component Usage"'},"​")],-1)),T(e(h(E),null,null,512),[[U,o.value]]),e(n,null,{default:l(()=>[e(h(Z),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[1]||(t[1]=()=>{o.value=!1}),vueCode:h(tt)},{vue:l(()=>[e(nt)]),_:1},8,["vueCode"])]),_:1}),t[11]||(t[11]=P('<p><strong>Comparison result:</strong></p><ul><li>Code volume: significantly reduced, with no dialog definition required in the template</li><li>State management: no need to manually manage <code>visible</code> state</li><li>Event handling: no need to write multiple event handlers</li><li>Async flow: Promise makes the logic clearer</li></ul><h3 id="_2-table-row-editing-scenario" tabindex="-1">2. Table Row Editing Scenario <a class="header-anchor" href="#_2-table-row-editing-scenario" aria-label="Permalink to &quot;2. Table Row Editing Scenario&quot;">​</a></h3><h4 id="traditional-declarative-usage-1" tabindex="-1">Traditional Declarative Usage <a class="header-anchor" href="#traditional-declarative-usage-1" aria-label="Permalink to &quot;Traditional Declarative Usage&quot;">​</a></h4>',4)),T(e(h(E),null,null,512),[[U,o.value]]),e(n,null,{default:l(()=>[e(h(Z),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[2]||(t[2]=()=>{o.value=!1}),vueCode:h(He)},{vue:l(()=>[e(et)]),_:1},8,["vueCode"])]),_:1}),t[12]||(t[12]=c("h4",{id:"imperative-component-usage-1",tabindex:"-1"},[u("Imperative Component Usage "),c("a",{class:"header-anchor",href:"#imperative-component-usage-1","aria-label":'Permalink to "Imperative Component Usage"'},"​")],-1)),T(e(h(E),null,null,512),[[U,o.value]]),e(n,null,{default:l(()=>[e(h(Z),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[3]||(t[3]=()=>{o.value=!1}),vueCode:h(Xe)},{vue:l(()=>[e(Je)]),_:1},8,["vueCode"])]),_:1}),t[13]||(t[13]=c("p",null,[c("strong",null,"Comparison result:")],-1)),t[14]||(t[14]=c("ul",null,[c("li",null,"Code volume: greatly reduced, with no need to define multiple dialogs in the template"),c("li",null,"State management: only business data is required, no UI state is needed"),c("li",null,"Event handling: logic is centralized instead of scattered across event functions"),c("li",null,"Async flow: Promise chains make the workflow easy to follow")],-1)),t[15]||(t[15]=c("h3",{id:"_3-complex-nested-dialogs",tabindex:"-1"},[u("3. Complex Nested Dialogs "),c("a",{class:"header-anchor",href:"#_3-complex-nested-dialogs","aria-label":'Permalink to "3. Complex Nested Dialogs"'},"​")],-1)),t[16]||(t[16]=c("p",null,"Nested dialogs are common but complex. Traditional usage requires manually managing multiple dialog states and layer relationships, while imperative components handle this complexity automatically.",-1)),T(e(h(E),null,null,512),[[U,o.value]]),e(n,null,{default:l(()=>[e(h(Z),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[4]||(t[4]=()=>{o.value=!1}),vueCode:h(me)},{vue:l(()=>[e(pe)]),_:1},8,["vueCode"])]),_:1}),t[17]||(t[17]=P('<p><strong>Comparison result:</strong></p><ul><li>Code volume: greatly reduced, with no need to predefine every dialog in the template</li><li>State management: no need to manually manage multiple dialog states</li><li>Layer management: automatically handles z-index and stack relationships</li><li>Close logic: cascading close behavior is handled automatically</li></ul><h3 id="_4-async-workflow-comparison" tabindex="-1">4. Async Workflow Comparison <a class="header-anchor" href="#_4-async-workflow-comparison" aria-label="Permalink to &quot;4. Async Workflow Comparison&quot;">​</a></h3><p>Multi-step async workflows are common in business development. Traditional usage often leads to complex state management and callback handling, while imperative components turn the workflow into a clear Promise chain.</p><h4 id="traditional-declarative-usage-2" tabindex="-1">Traditional Declarative Usage <a class="header-anchor" href="#traditional-declarative-usage-2" aria-label="Permalink to &quot;Traditional Declarative Usage&quot;">​</a></h4>',5)),T(e(h(E),null,null,512),[[U,o.value]]),e(n,null,{default:l(()=>[e(h(Z),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[5]||(t[5]=()=>{o.value=!1}),vueCode:h(Ge)},{vue:l(()=>[e(qe)]),_:1},8,["vueCode"])]),_:1}),t[18]||(t[18]=c("h4",{id:"imperative-component-usage-2",tabindex:"-1"},[u("Imperative Component Usage "),c("a",{class:"header-anchor",href:"#imperative-component-usage-2","aria-label":'Permalink to "Imperative Component Usage"'},"​")],-1)),T(e(h(E),null,null,512),[[U,o.value]]),e(n,null,{default:l(()=>[e(h(Z),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[6]||(t[6]=()=>{o.value=!1}),vueCode:h(Be)},{vue:l(()=>[e(Ye)]),_:1},8,["vueCode"])]),_:1}),t[19]||(t[19]=P('<p><strong>Comparison result:</strong></p><ul><li>Async flow: callback-heavy logic becomes a clear Promise chain</li><li>Error handling: unified <code>try-catch</code> instead of scattered error handling</li><li>Data passing: pass data directly through function calls without intermediate state</li><li>Flow control: linear code structure that is easier to understand and maintain</li></ul><h3 id="_5-multiple-dialog-state-management-comparison" tabindex="-1">5. Multiple Dialog State Management Comparison <a class="header-anchor" href="#_5-multiple-dialog-state-management-comparison" aria-label="Permalink to &quot;5. Multiple Dialog State Management Comparison&quot;">​</a></h3><p>When a page needs to manage several different types of dialogs, traditional usage requires separate state for each dialog. Imperative components can create dialogs on demand and destroy them after use.</p><h4 id="traditional-declarative-usage-3" tabindex="-1">Traditional Declarative Usage <a class="header-anchor" href="#traditional-declarative-usage-3" aria-label="Permalink to &quot;Traditional Declarative Usage&quot;">​</a></h4>',5)),T(e(h(E),null,null,512),[[U,o.value]]),e(n,null,{default:l(()=>[e(h(Z),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[7]||(t[7]=()=>{o.value=!1}),vueCode:h(xe)},{vue:l(()=>[e(Te)]),_:1},8,["vueCode"])]),_:1}),t[20]||(t[20]=c("h4",{id:"imperative-component-usage-3",tabindex:"-1"},[u("Imperative Component Usage "),c("a",{class:"header-anchor",href:"#imperative-component-usage-3","aria-label":'Permalink to "Imperative Component Usage"'},"​")],-1)),T(e(h(E),null,null,512),[[U,o.value]]),e(n,null,{default:l(()=>[e(h(Z),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[8]||(t[8]=()=>{o.value=!1}),vueCode:h(ce)},{vue:l(()=>[e(ke)]),_:1},8,["vueCode"])]),_:1}),t[21]||(t[21]=P('<p><strong>Comparison result:</strong></p><ul><li>Template complexity: no need to predefine all dialog components</li><li>State management: no need to maintain <code>visible</code> state for every dialog</li><li>Extensibility: adding a new dialog does not require changing the template</li><li>Memory usage: create on demand and destroy after use</li></ul><h2 id="core-advantages-summary" tabindex="-1">Core Advantages Summary <a class="header-anchor" href="#core-advantages-summary" aria-label="Permalink to &quot;Core Advantages Summary&quot;">​</a></h2><h3 id="_1-improved-development-efficiency" tabindex="-1">1. <strong>Improved Development Efficiency</strong> <a class="header-anchor" href="#_1-improved-development-efficiency" aria-label="Permalink to &quot;1. **Improved Development Efficiency**&quot;">​</a></h3><ul><li>Eliminate tedious state management and event handling</li><li>Focus on business logic instead of infrastructure code</li><li>Less code means fewer bugs and easier maintenance</li></ul><h3 id="_2-improved-code-quality" tabindex="-1">2. <strong>Improved Code Quality</strong> <a class="header-anchor" href="#_2-improved-code-quality" aria-label="Permalink to &quot;2. **Improved Code Quality**&quot;">​</a></h3><ul><li>Related logic is centralized instead of scattered across templates and scripts</li><li>Code flow better matches how people reason about interactions</li><li>Complete TypeScript support reduces runtime errors</li></ul><h3 id="_3-better-developer-experience" tabindex="-1">3. <strong>Better Developer Experience</strong> <a class="header-anchor" href="#_3-better-developer-experience" aria-label="Permalink to &quot;3. **Better Developer Experience**&quot;">​</a></h3><ul><li>No need to think about state management and lifecycle details</li><li>Promise chaining makes error handling clearer</li><li>Component invocation is more flexible and easier to refactor</li></ul><h2 id="suitable-scenarios" tabindex="-1">Suitable Scenarios <a class="header-anchor" href="#suitable-scenarios" aria-label="Permalink to &quot;Suitable Scenarios&quot;">​</a></h2><p>Imperative components are especially suitable for:</p><ul><li><strong>Dialog-like components</strong>: Dialog, Modal, Drawer, and similar components</li><li><strong>Confirmation interactions</strong>: delete confirmation, operation confirmation, and similar flows</li><li><strong>Form editing</strong>: inline editing, quick editing, and similar flows</li><li><strong>Multi-step workflows</strong>: wizards, step forms, and similar flows</li><li><strong>Temporary UI</strong>: alerts, notifications, and similar UI elements</li></ul><p>Traditional declarative usage is still suitable for:</p><ul><li><strong>Main page content</strong>: lists, tables, cards, and similar content</li><li><strong>Static display components</strong>: headers, sidebars, footers, and similar components</li><li><strong>Complex stateful components</strong>: components that require complex state management</li></ul><p>As the comparison shows, imperative components can significantly improve development efficiency and code quality in specific scenarios, making them a powerful complement to traditional declarative development.</p>',15))])}}});export{ct as __pageData,ft as default};
