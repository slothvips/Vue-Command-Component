<template>
  <div class="step-content">
    <p>正在处理: {{ dataType }}</p>
    <el-form :model="editForm" label-width="100px">
      <el-form-item label="处理方式">
        <el-select v-model="editForm.method">
          <el-option label="批量更新" value="update" />
          <el-option label="批量删除" value="delete" />
          <el-option label="导出数据" value="export" />
        </el-select>
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="editForm.note" type="textarea" />
      </el-form-item>
    </el-form>
    <div v-if="showButtons" style="text-align: right; margin-top: 20px">
      <el-button @click="handleBack">上一步</el-button>
      <el-button @click="handleCancel">取消</el-button>
      <el-button type="primary" @click="handleNext">下一步</el-button>
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
  showButtons: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(["next", "back", "cancel"]);

// 尝试获取consumer，如果在命令式组件中则使用，否则使用emit
const consumer = useConsumer(false); // 不显示警告

const editForm = ref({
  method: "",
  note: "",
});

// 检测是否在命令式组件环境中
const isInCommandComponent = () => {
  try {
    const promise = consumer.promise;
    return promise instanceof Promise;
  } catch {
    return false;
  }
};

const handleNext = () => {
  if (!editForm.value.method) {
    ElMessage.warning("请选择处理方式");
    return;
  }

  const data = editForm.value;
  // 如果在命令式组件中，使用consumer；否则使用emit
  if (isInCommandComponent()) {
    consumer.destroyWithResolve(data);
  } else {
    emit("next", { data });
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
.step-content {
  padding: 20px 0;
}

.step-content p {
  margin-bottom: 12px;
}
</style>
