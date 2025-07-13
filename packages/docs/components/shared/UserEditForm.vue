<template>
  <div class="p-4">
    <el-form :model="form" label-width="80px">
      <el-form-item label="姓名">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="form.email" />
      </el-form-item>
      <el-form-item v-if="showRole" label="角色">
        <el-select v-model="form.role">
          <el-option label="管理员" value="admin" />
          <el-option label="用户" value="user" />
        </el-select>
      </el-form-item>
    </el-form>
    <div v-if="showButtons" class="dialog-footer">
      <el-button @click="handleCancel">取消</el-button>
      <el-button type="primary" @click="handleSubmit" :loading="loading"
        >确认</el-button
      >
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { ElMessage } from "element-plus";
import { useConsumer } from "@vue-cmd/core";

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
  showRole: {
    type: Boolean,
    default: false,
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

const emit = defineEmits(["submit", "cancel"]);

const form = ref({ ...props.user });

// 尝试获取consumer，如果在命令式组件中则使用，否则使用emit
const consumer = useConsumer(false); // 不显示警告

// 监听用户数据变化
watch(
  () => props.user,
  (newUser) => {
    form.value = { ...newUser };
  },
  { deep: true },
);

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
  try {
    // 模拟API调用
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("提交数据:", form.value);
    ElMessage.success("用户信息已更新");

    // 如果在命令式组件中，使用consumer；否则使用emit
    if (isInCommandComponent()) {
      consumer.destroyWithResolve(form.value);
    } else {
      emit("submit", form.value);
    }
  } catch (error) {
    ElMessage.error("提交失败");
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
.p-4 {
  padding: 16px;
}

.dialog-footer {
  margin-top: 20px;
  text-align: right;
}

.dialog-footer .el-button {
  margin-left: 10px;
}
</style>
