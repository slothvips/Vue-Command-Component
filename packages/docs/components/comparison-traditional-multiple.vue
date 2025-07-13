<template>
  <div>
    <h4>多弹窗管理 - 传统方式</h4>
    <div class="button-group">
      <el-button @click="openUserDialog" type="primary">用户管理</el-button>
      <el-button @click="openOrderDialog" type="warning">订单管理</el-button>
      <el-button @click="openProductDialog" type="success">商品管理</el-button>
      <el-button @click="openSettingsDialog" type="info">系统设置</el-button>
    </div>

    <!-- 用户管理弹窗 -->
    <el-dialog v-model="userDialogVisible" title="用户管理" width="600px">
      <ManagerComponents type="user" :show-buttons="false" />
      <template #footer>
        <el-button @click="userDialogVisible = false">关闭</el-button>
      </template>
    </el-dialog>

    <!-- 订单管理弹窗 -->
    <el-dialog v-model="orderDialogVisible" title="订单管理" width="700px">
      <ManagerComponents type="order" :show-buttons="false" />
      <template #footer>
        <el-button @click="orderDialogVisible = false">关闭</el-button>
      </template>
    </el-dialog>

    <!-- 商品管理弹窗 -->
    <el-dialog v-model="productDialogVisible" title="商品管理" width="650px">
      <ManagerComponents type="product" :show-buttons="false" />
      <template #footer>
        <el-button @click="productDialogVisible = false">关闭</el-button>
      </template>
    </el-dialog>

    <!-- 系统设置弹窗 -->
    <el-dialog v-model="settingsDialogVisible" title="系统设置" width="500px">
      <ManagerComponents
        type="settings"
        @save="saveSettings"
        @cancel="settingsDialogVisible = false"
      />
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ElMessage } from "element-plus";
import ManagerComponents from "./shared/ManagerComponents.vue";

// 弹窗状态管理
const userDialogVisible = ref(false);
const orderDialogVisible = ref(false);
const productDialogVisible = ref(false);
const settingsDialogVisible = ref(false);

// 弹窗打开方法
const openUserDialog = () => {
  userDialogVisible.value = true;
};

const openOrderDialog = () => {
  orderDialogVisible.value = true;
};

const openProductDialog = () => {
  productDialogVisible.value = true;
};

const openSettingsDialog = () => {
  settingsDialogVisible.value = true;
};

const saveSettings = (settings) => {
  ElMessage.success("设置已保存");
  console.log("保存的设置:", settings);
  settingsDialogVisible.value = false;
};
</script>

<style scoped>
h4 {
  margin-bottom: 16px;
  color: #409eff;
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
