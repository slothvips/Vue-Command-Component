import{_ as B,r as w,C as y,G as _,K as V,P as c,k as e,J as l,B as d,u as h,j as X,H as E,t as T,I as G,w as oe,X as ae,aY as Q,v as Z}from"./chunks/framework.Cdqz12yZ.js";import{N as L,x as I,O as U,E as R,a as se}from"./chunks/index.Bv9V6kn_.js";/* empty css                      */import{f as j,a as x,g as O,b as N,d as q,h as ie,i as re,e as $,k as C,l as M,m as ue,n as de,o as J,p as H,v as me}from"./chunks/theme.B-R_-AgB.js";import{T as pe}from"./chunks/nested.CqEPtGev.js";const ce=`<template>
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
`,z=[{id:1,name:"张三",email:"zhangsan@example.com",role:"admin"},{id:2,name:"李四",email:"lisi@example.com",role:"user"},{id:3,name:"王五",email:"wangwu@example.com",role:"user"}],be=[{id:"ORD001",amount:"¥299",status:"已完成"},{id:"ORD002",amount:"¥599",status:"进行中"}],fe=[{name:"商品A",price:"¥99",stock:100},{name:"商品B",price:"¥199",stock:50}],K={name:"张三",email:"zhangsan@example.com"},ve={systemName:"管理系统",timeout:30,enableLog:!0},ge={key:0,class:"DialogContent"},he={key:1,class:"DialogContent"},_e={key:2,class:"DialogContent"},ye={key:3,class:"DialogContent"},we={key:0,style:{"text-align":"right","margin-top":"20px"}},De={__name:"ManagerComponents",props:{type:{type:String,required:!0,validator:p=>["user","order","product","settings"].includes(p)},showButtons:{type:Boolean,default:!0}},emits:["save","cancel"],setup(p,{emit:a}){const s=a,t=L(!1),n=w({...ve}),u=()=>{try{return t.promise instanceof Promise}catch{return!1}},b=()=>{C.success("设置已保存"),u()?t.destroyWithResolve(n.value):s("save",n.value)},m=()=>{u()?t.destroyWithReject():s("cancel")};return(f,i)=>{const r=j,o=x,g=O,v=q,D=N,S=ie,W=re,k=$;return _(),y("div",null,[p.type==="user"?(_(),y("div",ge,[i[4]||(i[4]=c("p",null,"用户管理功能",-1)),e(g,{data:h(z),size:"small"},{default:l(()=>[e(r,{prop:"name",label:"姓名"}),e(r,{prop:"email",label:"邮箱"}),e(r,{label:"操作"},{default:l(()=>[e(o,{size:"small"},{default:l(()=>i[3]||(i[3]=[d("编辑")])),_:1,__:[3]})]),_:1})]),_:1},8,["data"])])):V("",!0),p.type==="order"?(_(),y("div",he,[i[6]||(i[6]=c("p",null,"订单管理功能",-1)),e(g,{data:h(be),size:"small"},{default:l(()=>[e(r,{prop:"id",label:"订单号"}),e(r,{prop:"amount",label:"金额"}),e(r,{prop:"status",label:"状态"}),e(r,{label:"操作"},{default:l(()=>[e(o,{size:"small"},{default:l(()=>i[5]||(i[5]=[d("查看")])),_:1,__:[5]})]),_:1})]),_:1},8,["data"])])):V("",!0),p.type==="product"?(_(),y("div",_e,[i[8]||(i[8]=c("p",null,"商品管理功能",-1)),e(g,{data:h(fe),size:"small"},{default:l(()=>[e(r,{prop:"name",label:"商品名"}),e(r,{prop:"price",label:"价格"}),e(r,{prop:"stock",label:"库存"}),e(r,{label:"操作"},{default:l(()=>[e(o,{size:"small"},{default:l(()=>i[7]||(i[7]=[d("编辑")])),_:1,__:[7]})]),_:1})]),_:1},8,["data"])])):V("",!0),p.type==="settings"?(_(),y("div",ye,[e(k,{model:n.value,"label-width":"100px"},{default:l(()=>[e(D,{label:"系统名称"},{default:l(()=>[e(v,{modelValue:n.value.systemName,"onUpdate:modelValue":i[0]||(i[0]=Y=>n.value.systemName=Y)},null,8,["modelValue"])]),_:1}),e(D,{label:"超时时间"},{default:l(()=>[e(S,{modelValue:n.value.timeout,"onUpdate:modelValue":i[1]||(i[1]=Y=>n.value.timeout=Y)},null,8,["modelValue"])]),_:1}),e(D,{label:"启用日志"},{default:l(()=>[e(W,{modelValue:n.value.enableLog,"onUpdate:modelValue":i[2]||(i[2]=Y=>n.value.enableLog=Y)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),p.showButtons?(_(),y("div",we,[e(o,{onClick:m},{default:l(()=>i[9]||(i[9]=[d("取消")])),_:1,__:[9]}),e(o,{type:"primary",onClick:b},{default:l(()=>i[10]||(i[10]=[d("保存")])),_:1,__:[10]})])):V("",!0)])):V("",!0)])}}},A=B(De,[["__scopeId","data-v-dd761715"]]),We={class:"button-group"},Ce=X({__name:"comparison-command-multiple",setup(p){const a=I(),s=()=>{a(e(A,{type:"user",showButtons:!1},null),{title:"用户管理",width:"600px"})},t=()=>{a(e(A,{type:"order",showButtons:!1},null),{title:"订单管理",width:"700px"})},n=()=>{a(e(A,{type:"product",showButtons:!1},null),{title:"商品管理",width:"650px"})},u=async()=>{try{const b=await a(e(A,{type:"settings",showButtons:!0},null),{title:"系统设置",width:"500px"}).promise;console.log("保存的设置:",b)}catch{}};return(b,m)=>{const f=x;return _(),y("div",null,[m[4]||(m[4]=c("h4",null,"多弹窗管理 - 命令式",-1)),c("div",We,[e(f,{onClick:s,type:"primary"},{default:l(()=>m[0]||(m[0]=[d("用户管理")])),_:1,__:[0]}),e(f,{onClick:t,type:"warning"},{default:l(()=>m[1]||(m[1]=[d("订单管理")])),_:1,__:[1]}),e(f,{onClick:n,type:"success"},{default:l(()=>m[2]||(m[2]=[d("商品管理")])),_:1,__:[2]}),e(f,{onClick:u,type:"info"},{default:l(()=>m[3]||(m[3]=[d("系统设置")])),_:1,__:[3]})])])}}}),Ve=B(Ce,[["__scopeId","data-v-9521ada9"]]),xe=`<template>
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
`,ke={class:"button-group"},Be={__name:"comparison-traditional-multiple",setup(p){const a=w(!1),s=w(!1),t=w(!1),n=w(!1),u=()=>{a.value=!0},b=()=>{s.value=!0},m=()=>{t.value=!0},f=()=>{n.value=!0},i=r=>{C.success("设置已保存"),console.log("保存的设置:",r),n.value=!1};return(r,o)=>{const g=x,v=M;return _(),y("div",null,[o[15]||(o[15]=c("h4",null,"多弹窗管理 - 传统方式",-1)),c("div",ke,[e(g,{onClick:u,type:"primary"},{default:l(()=>o[8]||(o[8]=[d("用户管理")])),_:1,__:[8]}),e(g,{onClick:b,type:"warning"},{default:l(()=>o[9]||(o[9]=[d("订单管理")])),_:1,__:[9]}),e(g,{onClick:m,type:"success"},{default:l(()=>o[10]||(o[10]=[d("商品管理")])),_:1,__:[10]}),e(g,{onClick:f,type:"info"},{default:l(()=>o[11]||(o[11]=[d("系统设置")])),_:1,__:[11]})]),e(v,{modelValue:a.value,"onUpdate:modelValue":o[1]||(o[1]=D=>a.value=D),title:"用户管理",width:"600px"},{footer:l(()=>[e(g,{onClick:o[0]||(o[0]=D=>a.value=!1)},{default:l(()=>o[12]||(o[12]=[d("关闭")])),_:1,__:[12]})]),default:l(()=>[e(A,{type:"user","show-buttons":!1})]),_:1},8,["modelValue"]),e(v,{modelValue:s.value,"onUpdate:modelValue":o[3]||(o[3]=D=>s.value=D),title:"订单管理",width:"700px"},{footer:l(()=>[e(g,{onClick:o[2]||(o[2]=D=>s.value=!1)},{default:l(()=>o[13]||(o[13]=[d("关闭")])),_:1,__:[13]})]),default:l(()=>[e(A,{type:"order","show-buttons":!1})]),_:1},8,["modelValue"]),e(v,{modelValue:t.value,"onUpdate:modelValue":o[5]||(o[5]=D=>t.value=D),title:"商品管理",width:"650px"},{footer:l(()=>[e(g,{onClick:o[4]||(o[4]=D=>t.value=!1)},{default:l(()=>o[14]||(o[14]=[d("关闭")])),_:1,__:[14]})]),default:l(()=>[e(A,{type:"product","show-buttons":!1})]),_:1},8,["modelValue"]),e(v,{modelValue:n.value,"onUpdate:modelValue":o[7]||(o[7]=D=>n.value=D),title:"系统设置",width:"500px"},{default:l(()=>[e(A,{type:"settings",onSave:i,onCancel:o[6]||(o[6]=D=>n.value=!1)})]),_:1},8,["modelValue"])])}}},Te=B(Be,[["__scopeId","data-v-3cccd090"]]),Se=`<template>
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
`,Ze={class:"step-content"},Ue={key:0,style:{"text-align":"right","margin-top":"20px"}},Re={__name:"WorkflowStep1",props:{showButtons:{type:Boolean,default:!0}},emits:["next","cancel"],setup(p,{emit:a}){const s=a,t=L(!1),n=w(""),u=()=>{try{return t.promise instanceof Promise}catch{return!1}},b=()=>{if(!n.value){C.warning("请选择数据类型");return}const f=n.value;u()?t.destroyWithResolve(f):s("next",{data:f})},m=()=>{u()?t.destroyWithReject():s("cancel")};return(f,i)=>{const r=ue,o=de,g=x;return _(),y("div",Ze,[i[6]||(i[6]=c("p",null,"请选择要处理的数据类型：",-1)),e(o,{modelValue:n.value,"onUpdate:modelValue":i[0]||(i[0]=v=>n.value=v)},{default:l(()=>[e(r,{label:"users"},{default:l(()=>i[1]||(i[1]=[d("用户数据")])),_:1,__:[1]}),e(r,{label:"orders"},{default:l(()=>i[2]||(i[2]=[d("订单数据")])),_:1,__:[2]}),e(r,{label:"products"},{default:l(()=>i[3]||(i[3]=[d("商品数据")])),_:1,__:[3]})]),_:1},8,["modelValue"]),p.showButtons?(_(),y("div",Ue,[e(g,{onClick:m},{default:l(()=>i[4]||(i[4]=[d("取消")])),_:1,__:[4]}),e(g,{type:"primary",onClick:b},{default:l(()=>i[5]||(i[5]=[d("下一步")])),_:1,__:[5]})])):V("",!0)])}}},ee=B(Re,[["__scopeId","data-v-57eb7e39"]]),Ae={class:"step-content"},Le={key:0,style:{"text-align":"right","margin-top":"20px"}},Ye={__name:"WorkflowStep2",props:{dataType:{type:String,required:!0},showButtons:{type:Boolean,default:!0}},emits:["next","back","cancel"],setup(p,{emit:a}){const s=a,t=L(!1),n=w({method:"",note:""}),u=()=>{try{return t.promise instanceof Promise}catch{return!1}},b=()=>{if(!n.value.method){C.warning("请选择处理方式");return}const i=n.value;u()?t.destroyWithResolve(i):s("next",{data:i})},m=()=>{u()?t.destroyWithReject("back"):s("back")},f=()=>{u()?t.destroyWithReject():s("cancel")};return(i,r)=>{const o=H,g=J,v=N,D=q,S=$,W=x;return _(),y("div",Ae,[c("p",null,"正在处理: "+E(p.dataType),1),e(S,{model:n.value,"label-width":"100px"},{default:l(()=>[e(v,{label:"处理方式"},{default:l(()=>[e(g,{modelValue:n.value.method,"onUpdate:modelValue":r[0]||(r[0]=k=>n.value.method=k)},{default:l(()=>[e(o,{label:"批量更新",value:"update"}),e(o,{label:"批量删除",value:"delete"}),e(o,{label:"导出数据",value:"export"})]),_:1},8,["modelValue"])]),_:1}),e(v,{label:"备注"},{default:l(()=>[e(D,{modelValue:n.value.note,"onUpdate:modelValue":r[1]||(r[1]=k=>n.value.note=k),type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),p.showButtons?(_(),y("div",Le,[e(W,{onClick:m},{default:l(()=>r[2]||(r[2]=[d("上一步")])),_:1,__:[2]}),e(W,{onClick:f},{default:l(()=>r[3]||(r[3]=[d("取消")])),_:1,__:[3]}),e(W,{type:"primary",onClick:b},{default:l(()=>r[4]||(r[4]=[d("下一步")])),_:1,__:[4]})])):V("",!0)])}}},F=B(Ye,[["__scopeId","data-v-00029642"]]),Qe={class:"step-content"},Ee={key:0,style:{"text-align":"right","margin-top":"20px"}},Ge={__name:"WorkflowStep3",props:{dataType:{type:String,required:!0},editData:{type:Object,required:!0},showButtons:{type:Boolean,default:!0}},emits:["submit","back","cancel"],setup(p,{emit:a}){const s=p,t=a,n=L(!1),u=w(!1),b=()=>{try{return n.promise instanceof Promise}catch{return!1}},m=async()=>{u.value=!0;try{await new Promise(o=>setTimeout(o,2e3));const r={dataType:s.dataType,method:s.editData.method,note:s.editData.note};C.success("工作流执行成功！"),b()?n.destroyWithResolve(r):t("submit",r)}catch{C.error("执行失败")}finally{u.value=!1}},f=()=>{b()?n.destroyWithReject("back"):t("back")},i=()=>{b()?n.destroyWithReject():t("cancel")};return(r,o)=>{const g=x;return _(),y("div",Qe,[o[6]||(o[6]=c("h5",null,"请确认以下信息：",-1)),c("p",null,[o[0]||(o[0]=c("strong",null,"数据类型:",-1)),d(" "+E(p.dataType),1)]),c("p",null,[o[1]||(o[1]=c("strong",null,"处理方式:",-1)),d(" "+E(p.editData.method),1)]),c("p",null,[o[2]||(o[2]=c("strong",null,"备注:",-1)),d(" "+E(p.editData.note||"无"),1)]),p.showButtons?(_(),y("div",Ee,[e(g,{onClick:f},{default:l(()=>o[3]||(o[3]=[d("上一步")])),_:1,__:[3]}),e(g,{onClick:i},{default:l(()=>o[4]||(o[4]=[d("取消")])),_:1,__:[4]}),e(g,{type:"primary",onClick:m,loading:u.value},{default:l(()=>o[5]||(o[5]=[d(" 确认提交 ")])),_:1,__:[5]},8,["loading"])])):V("",!0)])}}},te=B(Ge,[["__scopeId","data-v-d6bff8d4"]]),Xe=X({__name:"comparison-command-workflow",setup(p){const a=I(),s=async()=>{try{const t=await a(e(ee,null,null),{title:"步骤1: 选择数据",width:"500px"}).promise;let n;try{n=await a(e(F,{dataType:t},null),{title:"步骤2: 编辑内容",width:"600px"}).promise}catch(u){return u==="back"?s():void 0}try{const u=await a(e(te,{dataType:t,editData:n},null),{title:"步骤3: 确认提交",width:"500px"}).promise;console.log("工作流结果:",u)}catch(u){if(u==="back")try{n=await a(e(F,{dataType:t},null),{title:"步骤2: 编辑内容",width:"600px"}).promise}catch(b){return b==="back"?s():void 0}else return}}catch{console.log("用户取消了工作流")}};return(t,n)=>{const u=x;return _(),y("div",null,[n[1]||(n[1]=c("h4",null,"多步骤工作流 - 命令式",-1)),e(u,{onClick:s,type:"success"},{default:l(()=>n[0]||(n[0]=[d("开始工作流")])),_:1,__:[0]})])}}}),Ie=B(Xe,[["__scopeId","data-v-7f86743f"]]),Me=`<template>
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
`,Pe={__name:"comparison-traditional-workflow",setup(p){const a=w(!1),s=w(!1),t=w(!1),n=w(""),u=w({}),b=()=>{n.value="",u.value={},a.value=!0},m=({data:g})=>{n.value=g,a.value=!1,s.value=!0},f=({data:g})=>{u.value=g,s.value=!1,t.value=!0},i=g=>{t.value=!1,console.log("工作流结果:",g)},r=()=>{s.value=!1,a.value=!0},o=()=>{t.value=!1,s.value=!0};return(g,v)=>{const D=x,S=M;return _(),y("div",null,[v[7]||(v[7]=c("h4",null,"多步骤工作流 - 传统方式",-1)),e(D,{onClick:b,type:"primary"},{default:l(()=>v[6]||(v[6]=[d("开始工作流")])),_:1,__:[6]}),e(S,{modelValue:a.value,"onUpdate:modelValue":v[1]||(v[1]=W=>a.value=W),title:"步骤1: 选择数据",width:"500px"},{default:l(()=>[e(ee,{onNext:m,onCancel:v[0]||(v[0]=W=>a.value=!1)})]),_:1},8,["modelValue"]),e(S,{modelValue:s.value,"onUpdate:modelValue":v[3]||(v[3]=W=>s.value=W),title:"步骤2: 编辑内容",width:"600px"},{default:l(()=>[e(F,{"data-type":n.value,onNext:f,onBack:r,onCancel:v[2]||(v[2]=W=>s.value=!1)},null,8,["data-type"])]),_:1},8,["modelValue"]),e(S,{modelValue:t.value,"onUpdate:modelValue":v[5]||(v[5]=W=>t.value=W),title:"步骤3: 确认提交",width:"500px"},{default:l(()=>[e(te,{"data-type":n.value,"edit-data":u.value,onSubmit:i,onBack:o,onCancel:v[4]||(v[4]=W=>t.value=!1)},null,8,["data-type","edit-data"])]),_:1},8,["modelValue"])])}}},Fe=B(Pe,[["__scopeId","data-v-ad4aebfc"]]),Ne=`<template>
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
`,ne={__name:"UserTable",props:{data:{type:Array,required:!0},showRole:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},emits:["edit","delete"],setup(p){return(a,s)=>{const t=j,n=x,u=O,b=me;return T((_(),G(u,{data:p.data,style:{width:"100%"}},{default:l(()=>[e(t,{prop:"name",label:"姓名",width:"120"}),e(t,{prop:"email",label:"邮箱",width:"200"}),p.showRole?(_(),G(t,{key:0,prop:"role",label:"角色",width:"100"})):V("",!0),e(t,{label:"操作",width:"150"},{default:l(({row:m})=>[e(n,{size:"small",onClick:f=>a.$emit("edit",m)},{default:l(()=>s[0]||(s[0]=[d("编辑")])),_:2,__:[0]},1032,["onClick"]),e(n,{size:"small",type:"danger",onClick:f=>a.$emit("delete",m)},{default:l(()=>s[1]||(s[1]=[d("删除")])),_:2,__:[1]},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[b,p.loading]])}}},qe={class:"p-4"},$e={key:0,class:"dialog-footer"},ze={__name:"UserEditForm",props:{user:{type:Object,required:!0},showRole:{type:Boolean,default:!1},showButtons:{type:Boolean,default:!0},loading:{type:Boolean,default:!1}},emits:["submit","cancel"],setup(p,{emit:a}){const s=p,t=a,n=w({...s.user}),u=L(!1);oe(()=>s.user,i=>{n.value={...i}},{deep:!0});const b=()=>{try{return u.promise instanceof Promise}catch{return!1}},m=async()=>{try{await new Promise(i=>setTimeout(i,1e3)),console.log("提交数据:",n.value),C.success("用户信息已更新"),b()?u.destroyWithResolve(n.value):t("submit",n.value)}catch{C.error("提交失败")}},f=()=>{b()?u.destroyWithReject():t("cancel")};return(i,r)=>{const o=q,g=N,v=H,D=J,S=$,W=x;return _(),y("div",qe,[e(S,{model:n.value,"label-width":"80px"},{default:l(()=>[e(g,{label:"姓名"},{default:l(()=>[e(o,{modelValue:n.value.name,"onUpdate:modelValue":r[0]||(r[0]=k=>n.value.name=k)},null,8,["modelValue"])]),_:1}),e(g,{label:"邮箱"},{default:l(()=>[e(o,{modelValue:n.value.email,"onUpdate:modelValue":r[1]||(r[1]=k=>n.value.email=k)},null,8,["modelValue"])]),_:1}),p.showRole?(_(),G(g,{key:0,label:"角色"},{default:l(()=>[e(D,{modelValue:n.value.role,"onUpdate:modelValue":r[2]||(r[2]=k=>n.value.role=k)},{default:l(()=>[e(v,{label:"管理员",value:"admin"}),e(v,{label:"用户",value:"user"})]),_:1},8,["modelValue"])]),_:1})):V("",!0)]),_:1},8,["model"]),p.showButtons?(_(),y("div",$e,[e(W,{onClick:f},{default:l(()=>r[3]||(r[3]=[d("取消")])),_:1,__:[3]}),e(W,{type:"primary",onClick:m,loading:p.loading},{default:l(()=>r[4]||(r[4]=[d("确认")])),_:1,__:[4]},8,["loading"])])):V("",!0)])}}},P=B(ze,[["__scopeId","data-v-799f2cc1"]]),je={key:0,style:{"text-align":"right","margin-top":"20px"}},le={__name:"DeleteConfirm",props:{user:{type:Object,required:!0},showButtons:{type:Boolean,default:!0},loading:{type:Boolean,default:!1}},emits:["confirm","cancel"],setup(p,{emit:a}){const s=a,t=L(!1),n=()=>{try{return t.promise instanceof Promise}catch{return!1}},u=async()=>{try{await new Promise(m=>setTimeout(m,1e3)),n()?t.destroyWithResolve(!0):s("confirm")}catch(m){console.error("删除失败:",m)}},b=()=>{n()?t.destroyWithReject():s("cancel")};return(m,f)=>{const i=x;return _(),y("div",null,[c("p",null,'确定要删除用户 "'+E(p.user.name)+'" 吗？',1),p.showButtons?(_(),y("div",je,[e(i,{onClick:b},{default:l(()=>f[0]||(f[0]=[d("取消")])),_:1,__:[0]}),e(i,{type:"danger",onClick:u,loading:p.loading},{default:l(()=>f[1]||(f[1]=[d("确认删除")])),_:1,__:[1]},8,["loading"])])):V("",!0)])}}},Oe=X({__name:"comparison-command-table",setup(p){const a=I(),s=w([...z]),t=async u=>{try{const b=await a(e(P,{user:u,showRole:!0},null),{title:"编辑用户",width:"500px"}).promise,m=s.value.findIndex(f=>f.id===u.id);m!==-1&&(s.value[m]={...b,id:u.id}),C.success("更新成功")}catch{}},n=async u=>{try{await a(e(le,{user:u},null),{title:"确认删除",width:"400px"}).promise;const b=s.value.findIndex(m=>m.id===u.id);b!==-1&&s.value.splice(b,1),C.success("删除成功")}catch{}};return(u,b)=>(_(),y("div",null,[b[0]||(b[0]=c("h4",null,"表格编辑 - 命令式",-1)),e(ne,{data:s.value,"show-role":!0,onEdit:t,onDelete:n},null,8,["data"])]))}}),Je=B(Oe,[["__scopeId","data-v-688e7c30"]]),He=`<template>
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
`,Ke={__name:"comparison-traditional-table",setup(p){const a=w([...z]),s=w(!1),t=w(!1),n=w({}),u=w(!1),b=r=>{n.value={...r},s.value=!0},m=async r=>{u.value=!0;try{const o=a.value.findIndex(g=>g.id===n.value.id);o!==-1&&(a.value[o]={...r,id:n.value.id}),s.value=!1,C.success("更新成功")}catch{C.error("更新失败")}finally{u.value=!1}},f=r=>{n.value=r,t.value=!0},i=async()=>{u.value=!0;try{const r=a.value.findIndex(o=>o.id===n.value.id);r!==-1&&a.value.splice(r,1),t.value=!1,C.success("删除成功")}catch{C.error("删除失败")}finally{u.value=!1}};return(r,o)=>{const g=M;return _(),y("div",null,[o[4]||(o[4]=c("h4",null,"表格编辑 - 传统方式",-1)),e(ne,{data:a.value,"show-role":!0,loading:u.value,onEdit:b,onDelete:f},null,8,["data","loading"]),e(g,{modelValue:s.value,"onUpdate:modelValue":o[1]||(o[1]=v=>s.value=v),title:"编辑用户",width:"500px"},{default:l(()=>[s.value?(_(),G(P,{key:0,user:n.value,"show-role":!0,onSubmit:m,onCancel:o[0]||(o[0]=v=>s.value=!1)},null,8,["user"])):V("",!0)]),_:1},8,["modelValue"]),e(g,{modelValue:t.value,"onUpdate:modelValue":o[3]||(o[3]=v=>t.value=v),title:"确认删除",width:"400px"},{default:l(()=>[e(le,{user:n.value,onConfirm:i,onCancel:o[2]||(o[2]=v=>t.value=!1)},null,8,["user"])]),_:1},8,["modelValue"])])}}},et=B(Ke,[["__scopeId","data-v-1844cdb7"]]),tt=`<template>
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
`,nt=X({__name:"comparison-command-basic",setup(p){const a=I(),s=async()=>{try{const t=await a(e(P,{user:K},null),{title:"编辑用户",width:"500px"}).promise;console.log("最终结果:",t)}catch{console.log("用户取消了编辑")}};return(t,n)=>{const u=x;return _(),y("div",null,[e(u,{onClick:s,type:"success"},{default:l(()=>n[0]||(n[0]=[d("编辑用户 (命令式)")])),_:1,__:[0]})])}}}),lt=`<template>
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
`,ot={__name:"comparison-traditional-basic",setup(p){const a=w(!1),s=w({}),t=()=>{s.value={...K},a.value=!0},n=m=>{console.log("提交数据:",m),C.success("用户信息已更新"),a.value=!1},u=()=>{a.value=!1},b=()=>{s.value={}};return(m,f)=>{const i=x,r=M;return _(),y("div",null,[e(i,{onClick:t,type:"primary"},{default:l(()=>f[1]||(f[1]=[d("编辑用户 (传统方式)")])),_:1,__:[1]}),e(r,{modelValue:a.value,"onUpdate:modelValue":f[0]||(f[0]=o=>a.value=o),title:"编辑用户",width:"500px",onClose:b},{default:l(()=>[e(P,{user:s.value,onSubmit:n,onCancel:u},null,8,["user"])]),_:1},8,["modelValue"])])}}},mt=JSON.parse('{"title":"命令式 vs 传统方式对比","description":"","frontmatter":{},"headers":[],"relativePath":"guide/comparison.md","filePath":"guide/comparison.md"}'),at={name:"guide/comparison.md"},pt=Object.assign(at,{setup(p){const a=w(!0);return(s,t)=>{const n=ae("ClientOnly");return _(),y("div",null,[t[9]||(t[9]=Q("",7)),T(e(h(U),null,null,512),[[Z,a.value]]),e(n,null,{default:l(()=>[e(h(R),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{a.value=!1}),vueCode:h(lt)},{vue:l(()=>[e(ot)]),_:1},8,["vueCode"])]),_:1}),t[10]||(t[10]=c("h4",{id:"命令式组件方式",tabindex:"-1"},[d("命令式组件方式 "),c("a",{class:"header-anchor",href:"#命令式组件方式","aria-label":'Permalink to "命令式组件方式"'},"​")],-1)),T(e(h(U),null,null,512),[[Z,a.value]]),e(n,null,{default:l(()=>[e(h(R),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[1]||(t[1]=()=>{a.value=!1}),vueCode:h(tt)},{vue:l(()=>[e(nt)]),_:1},8,["vueCode"])]),_:1}),t[11]||(t[11]=Q("",4)),T(e(h(U),null,null,512),[[Z,a.value]]),e(n,null,{default:l(()=>[e(h(R),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[2]||(t[2]=()=>{a.value=!1}),vueCode:h(He)},{vue:l(()=>[e(et)]),_:1},8,["vueCode"])]),_:1}),t[12]||(t[12]=c("h4",{id:"命令式组件方式-1",tabindex:"-1"},[d("命令式组件方式 "),c("a",{class:"header-anchor",href:"#命令式组件方式-1","aria-label":'Permalink to "命令式组件方式"'},"​")],-1)),T(e(h(U),null,null,512),[[Z,a.value]]),e(n,null,{default:l(()=>[e(h(R),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[3]||(t[3]=()=>{a.value=!1}),vueCode:h(Ne)},{vue:l(()=>[e(Je)]),_:1},8,["vueCode"])]),_:1}),t[13]||(t[13]=c("p",null,[c("strong",null,"对比结果：")],-1)),t[14]||(t[14]=c("ul",null,[c("li",null,"代码量：大幅减少，无需在模板中定义多个弹窗"),c("li",null,"状态管理：只需要业务数据，无需UI状态"),c("li",null,"事件处理：逻辑集中，无需分散的事件函数"),c("li",null,"异步流程：Promise链让操作流程一目了然")],-1)),t[15]||(t[15]=c("h3",{id:"_3-复杂嵌套弹窗",tabindex:"-1"},[d("3. 复杂嵌套弹窗 "),c("a",{class:"header-anchor",href:"#_3-复杂嵌套弹窗","aria-label":'Permalink to "3. 复杂嵌套弹窗"'},"​")],-1)),t[16]||(t[16]=c("p",null,"嵌套弹窗是一个常见但复杂的场景，传统方式需要手动管理多个弹窗状态和层级关系，而命令式组件能够自动处理这些复杂性。",-1)),T(e(h(U),null,null,512),[[Z,a.value]]),e(n,null,{default:l(()=>[e(h(R),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[4]||(t[4]=()=>{a.value=!1}),vueCode:h(pe)},{vue:l(()=>[e(se)]),_:1},8,["vueCode"])]),_:1}),t[17]||(t[17]=Q("",5)),T(e(h(U),null,null,512),[[Z,a.value]]),e(n,null,{default:l(()=>[e(h(R),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[5]||(t[5]=()=>{a.value=!1}),vueCode:h(Me)},{vue:l(()=>[e(Fe)]),_:1},8,["vueCode"])]),_:1}),t[18]||(t[18]=c("h4",{id:"命令式组件方式-2",tabindex:"-1"},[d("命令式组件方式 "),c("a",{class:"header-anchor",href:"#命令式组件方式-2","aria-label":'Permalink to "命令式组件方式"'},"​")],-1)),T(e(h(U),null,null,512),[[Z,a.value]]),e(n,null,{default:l(()=>[e(h(R),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[6]||(t[6]=()=>{a.value=!1}),vueCode:h(Se)},{vue:l(()=>[e(Ie)]),_:1},8,["vueCode"])]),_:1}),t[19]||(t[19]=Q("",5)),T(e(h(U),null,null,512),[[Z,a.value]]),e(n,null,{default:l(()=>[e(h(R),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[7]||(t[7]=()=>{a.value=!1}),vueCode:h(xe)},{vue:l(()=>[e(Te)]),_:1},8,["vueCode"])]),_:1}),t[20]||(t[20]=c("h4",{id:"命令式组件方式-3",tabindex:"-1"},[d("命令式组件方式 "),c("a",{class:"header-anchor",href:"#命令式组件方式-3","aria-label":'Permalink to "命令式组件方式"'},"​")],-1)),T(e(h(U),null,null,512),[[Z,a.value]]),e(n,null,{default:l(()=>[e(h(R),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[8]||(t[8]=()=>{a.value=!1}),vueCode:h(ce)},{vue:l(()=>[e(Ve)]),_:1},8,["vueCode"])]),_:1}),t[21]||(t[21]=Q("",15))])}}});export{mt as __pageData,pt as default};
