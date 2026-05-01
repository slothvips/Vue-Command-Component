<template>
  <div>
    <h4>Multiple dialog management - imperative</h4>
    <div class="button-group">
      <el-button @click="openUserDialog" type="primary">User management</el-button>
      <el-button @click="openOrderDialog" type="warning">Order management</el-button>
      <el-button @click="openProductDialog" type="success">Product management</el-button>
      <el-button @click="openSettingsDialog" type="info">System settings</el-button>
    </div>
  </div>
</template>

<script setup lang="tsx">
import { useDialog } from "@vue-cmd/element-plus";
import { ElMessage } from "element-plus";
import ManagerComponents from "./shared/ManagerComponents.vue";

const dialog = useDialog();

// Dialog open methods
const openUserDialog = () => {
  dialog(<ManagerComponents type="user" showButtons={false} />, {
    title: "User management",
    width: "600px",
  });
};

const openOrderDialog = () => {
  dialog(<ManagerComponents type="order" showButtons={false} />, {
    title: "Order management",
    width: "700px",
  });
};

const openProductDialog = () => {
  dialog(<ManagerComponents type="product" showButtons={false} />, {
    title: "Product management",
    width: "650px",
  });
};

const openSettingsDialog = async () => {
  try {
    const result = await dialog(
      <ManagerComponents type="settings" showButtons={true} />,
      {
        title: "System settings",
        width: "500px",
      },
    ).promise;

    console.log("Saved settings:", result);
  } catch {
    // The user canceled settings
  }
};
</script>

<style scoped>
h4 {
  margin-bottom: 16px;
  color: #67c23a;
}

.button-group {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.DialogContent {
  padding: 20px 0;
}

.DialogContent p {
  margin-bottom: 16px;
  font-weight: bold;
}
</style>
