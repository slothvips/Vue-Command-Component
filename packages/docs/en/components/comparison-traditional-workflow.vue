<template>
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
