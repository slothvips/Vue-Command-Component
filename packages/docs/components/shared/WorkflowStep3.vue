<template>
  <div class="step-content">
    <h5>请确认以下信息：</h5>
    <p><strong>数据类型:</strong> {{ dataType }}</p>
    <p><strong>处理方式:</strong> {{ editData.method }}</p>
    <p><strong>备注:</strong> {{ editData.note || "无" }}</p>
    <div v-if="showButtons" style="text-align: right; margin-top: 20px">
      <el-button @click="handleBack">上一步</el-button>
      <el-button @click="handleCancel">取消</el-button>
      <el-button type="primary" @click="handleSubmit" :loading="submitting">
        确认提交
      </el-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ElMessage } from "element-plus";
import { useConsumer } from "@vue-cmd/core";

const props = defineProps({
  dataType: {
    type: String,
    required: true,
  },
  editData: {
    type: Object,
    required: true,
  },
  showButtons: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(["submit", "back", "cancel"]);

// 尝试获取consumer，如果在命令式组件中则使用，否则使用emit
const consumer = useConsumer(false); // 不显示警告

const submitting = ref(false);

// 检测是否在命令式组件环境中
const isInCommandComponent = () => {
  try {
    const promise = consumer.promise;
    return promise instanceof Promise;
  } catch {
    return false;
  }
};

const handleSubmit = async () => {
  submitting.value = true;
  try {
    // 模拟API调用
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const result = {
      dataType: props.dataType,
      method: props.editData.method,
      note: props.editData.note,
    };

    ElMessage.success("工作流执行成功！");

    // 如果在命令式组件中，使用consumer；否则使用emit
    if (isInCommandComponent()) {
      consumer.destroyWithResolve(result);
    } else {
      emit("submit", result);
    }
  } catch (error) {
    ElMessage.error("执行失败");
  } finally {
    submitting.value = false;
  }
};

const handleBack = () => {
  // 如果在命令式组件中，使用consumer；否则使用emit
  if (isInCommandComponent()) {
    consumer.destroyWithReject("back");
  } else {
    emit("back");
  }
};

const handleCancel = () => {
  // 如果在命令式组件中，使用consumer；否则使用emit
  if (isInCommandComponent()) {
    consumer.destroyWithReject();
  } else {
    emit("cancel");
  }
};
</script>

<style scoped>
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
