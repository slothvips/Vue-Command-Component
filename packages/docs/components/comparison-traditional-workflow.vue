<template>
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
</script>

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
