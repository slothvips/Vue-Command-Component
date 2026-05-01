<template>
  <div>
    <h4>Multiple dialog management - traditional</h4>
    <div class="button-group">
      <el-button @click="openUserDialog" type="primary">User management</el-button>
      <el-button @click="openOrderDialog" type="warning">Order management</el-button>
      <el-button @click="openProductDialog" type="success">Product management</el-button>
      <el-button @click="openSettingsDialog" type="info">System settings</el-button>
    </div>

    <!-- User management dialog -->
    <el-dialog v-model="userDialogVisible" title="User management" width="600px">
      <ManagerComponents type="user" :show-buttons="false" />
      <template #footer>
        <el-button @click="userDialogVisible = false">Close</el-button>
      </template>
    </el-dialog>

    <!-- Order management dialog -->
    <el-dialog v-model="orderDialogVisible" title="Order management" width="700px">
      <ManagerComponents type="order" :show-buttons="false" />
      <template #footer>
        <el-button @click="orderDialogVisible = false">Close</el-button>
      </template>
    </el-dialog>

    <!-- Product management dialog -->
    <el-dialog v-model="productDialogVisible" title="Product management" width="650px">
      <ManagerComponents type="product" :show-buttons="false" />
      <template #footer>
        <el-button @click="productDialogVisible = false">Close</el-button>
      </template>
    </el-dialog>

    <!-- System settings dialog -->
    <el-dialog v-model="settingsDialogVisible" title="System settings" width="500px">
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

// Dialog state management
const userDialogVisible = ref(false);
const orderDialogVisible = ref(false);
const productDialogVisible = ref(false);
const settingsDialogVisible = ref(false);

// Dialog open methods
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
  ElMessage.success("Settings saved");
  console.log("Saved settings:", settings);
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
