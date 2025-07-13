<template>
  <div>
    <p>确定要删除用户 "{{ user.name }}" 吗？</p>
    <div v-if="showButtons" style="text-align: right; margin-top: 20px">
      <el-button @click="handleCancel">取消</el-button>
      <el-button type="danger" @click="handleConfirm" :loading="loading"
        >确认删除</el-button
      >
    </div>
  </div>
</template>

<script setup>
import { useConsumer } from "@vue-cmd/core";

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
  showButtons: {
    type: Boolean,
    default: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["confirm", "cancel"]);

// 尝试获取consumer，如果在命令式组件中则使用，否则使用emit
const consumer = useConsumer(false); // 不显示警告

// 检测是否在命令式组件环境中
const isInCommandComponent = () => {
  try {
    const promise = consumer.promise;
    return promise instanceof Promise;
  } catch {
    return false;
  }
};

const handleConfirm = async () => {
  try {
    // 模拟API调用
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // 如果在命令式组件中，使用consumer；否则使用emit
    if (isInCommandComponent()) {
      consumer.destroyWithResolve(true);
    } else {
      emit("confirm");
    }
  } catch (error) {
    console.error("删除失败:", error);
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
