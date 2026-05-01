<template>
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
</script>

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
