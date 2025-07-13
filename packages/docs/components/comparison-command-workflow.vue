<template>
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
