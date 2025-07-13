<template>
  <div class="step-content">
    <p>请选择要处理的数据类型：</p>
    <el-radio-group v-model="selectedDataType">
      <el-radio label="users">用户数据</el-radio>
      <el-radio label="orders">订单数据</el-radio>
      <el-radio label="products">商品数据</el-radio>
    </el-radio-group>
    <div v-if="showButtons" style="text-align: right; margin-top: 20px">
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
  showButtons: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(["next", "cancel"]);

// 尝试获取consumer，如果在命令式组件中则使用，否则使用emit
const consumer = useConsumer(false); // 不显示警告

const selectedDataType = ref("");

// 检测是否在命令式组件环境中
const isInCommandComponent = () => {
  try {
    // 尝试访问consumer的一个属性，如果是真正的consumer，会有promise属性
    // 如果是Proxy，访问promise会返回警告函数
    const promise = consumer.promise;
    // 真正的consumer.promise是一个Promise对象
    return promise instanceof Promise;
  } catch {
    return false;
  }
};

const handleNext = () => {
  if (!selectedDataType.value) {
    ElMessage.warning("请选择数据类型");
    return;
  }

  const data = selectedDataType.value;

  // 如果在命令式组件中，使用consumer；否则使用emit
  if (isInCommandComponent()) {
    consumer.destroyWithResolve(data);
  } else {
    emit("next", { data });
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
