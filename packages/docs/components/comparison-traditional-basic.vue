<template>
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
</script>
