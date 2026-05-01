<template>
  <div>
    <!-- Business content -->
    <el-button @click="openDialog" type="primary"
      >Edit user (traditional)</el-button
    >

    <!-- Dialog definition -->
    <el-dialog
      v-model="dialogVisible"
      title="Edit user"
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

// State management
const dialogVisible = ref(false);
const currentUser = ref({});

// Event handling
const openDialog = () => {
  currentUser.value = { ...defaultUser };
  dialogVisible.value = true;
};

const handleSubmit = (userData) => {
  // Handle submit logic
  console.log("Submitted data:", userData);
  ElMessage.success("User information updated");
  dialogVisible.value = false;
};

const handleCancel = () => {
  dialogVisible.value = false;
};

const handleClose = () => {
  currentUser.value = {};
};
</script>
