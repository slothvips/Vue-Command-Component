<template>
  <div>
    <h4>多弹窗管理 - 命令式</h4>
    <div class="button-group">
      <el-button @click="openUserDialog" type="primary">用户管理</el-button>
      <el-button @click="openOrderDialog" type="warning">订单管理</el-button>
      <el-button @click="openProductDialog" type="success">商品管理</el-button>
      <el-button @click="openSettingsDialog" type="info">系统设置</el-button>
    </div>
  </div>
</template>

<script setup lang="tsx">
import { useDialog } from "@vue-cmd/element-plus";
import { ElMessage } from "element-plus";
import ManagerComponents from "./shared/ManagerComponents.vue";

const CommandDialog = useDialog();

// 弹窗打开方法
const openUserDialog = () => {
  CommandDialog(<ManagerComponents type="user" showButtons={false} />, {
    title: "用户管理",
    width: "600px",
  });
};

const openOrderDialog = () => {
  CommandDialog(<ManagerComponents type="order" showButtons={false} />, {
    title: "订单管理",
    width: "700px",
  });
};

const openProductDialog = () => {
  CommandDialog(<ManagerComponents type="product" showButtons={false} />, {
    title: "商品管理",
    width: "650px",
  });
};

const openSettingsDialog = async () => {
  try {
    const result = await CommandDialog(
      <ManagerComponents type="settings" showButtons={true} />,
      {
        title: "系统设置",
        width: "500px",
      },
    ).promise;

    console.log("保存的设置:", result);
  } catch {
    // 用户取消了设置
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
