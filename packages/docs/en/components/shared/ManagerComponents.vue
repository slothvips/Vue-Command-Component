<template>
  <div>
    <!-- User management -->
    <div v-if="type === 'user'" class="DialogContent">
      <p>User management feature</p>
      <el-table :data="userData" size="small">
        <el-table-column prop="name" label="Name" />
        <el-table-column prop="email" label="Email" />
        <el-table-column label="Actions">
          <template #default>
            <el-button size="small">Edit</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- Order management -->
    <div v-if="type === 'order'" class="DialogContent">
      <p>Order management feature</p>
      <el-table :data="orderData" size="small">
        <el-table-column prop="id" label="Order ID" />
        <el-table-column prop="amount" label="Amount" />
        <el-table-column prop="status" label="Status" />
        <el-table-column label="Actions">
          <template #default>
            <el-button size="small">View</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- Product management -->
    <div v-if="type === 'product'" class="DialogContent">
      <p>Product management feature</p>
      <el-table :data="productData" size="small">
        <el-table-column prop="name" label="Product name" />
        <el-table-column prop="price" label="Price" />
        <el-table-column prop="stock" label="Stock" />
        <el-table-column label="Actions">
          <template #default>
            <el-button size="small">Edit</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- System settings -->
    <div v-if="type === 'settings'" class="DialogContent">
      <el-form :model="settings" label-width="100px">
        <el-form-item label="System name">
          <el-input v-model="settings.systemName" />
        </el-form-item>
        <el-form-item label="Timeout">
          <el-input-number v-model="settings.timeout" />
        </el-form-item>
        <el-form-item label="Enable logs">
          <el-switch v-model="settings.enableLog" />
        </el-form-item>
      </el-form>
      <div v-if="showButtons" style="text-align: right; margin-top: 20px">
        <el-button @click="handleCancel">Cancel</el-button>
        <el-button type="primary" @click="handleSave">Save</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ElMessage } from "element-plus";
import { useConsumer } from "@vue-cmd/core";
import {
  userData,
  orderData,
  productData,
  systemSettings,
} from "./mockData.js";

const props = defineProps({
  type: {
    type: String,
    required: true,
    validator: (value) =>
      ["user", "order", "product", "settings"].includes(value),
  },
  showButtons: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(["save", "cancel"]);

// Try to get consumer; use it in command components, otherwise emit
const consumer = useConsumer(false); // Do not show warnings

const settings = ref({ ...systemSettings });

// Detect whether this is inside a command component
const isInCommandComponent = () => {
  try {
    const promise = consumer.promise;
    return promise instanceof Promise;
  } catch {
    return false;
  }
};

const handleSave = () => {
  ElMessage.success("Settings saved");

  // Use consumer inside command components; otherwise emit
  if (isInCommandComponent()) {
    consumer.destroyWithResolve(settings.value);
  } else {
    emit("save", settings.value);
  }
};

const handleCancel = () => {
  // Use consumer inside command components; otherwise emit
  if (isInCommandComponent()) {
    consumer.destroyWithReject();
  } else {
    emit("cancel");
  }
};
</script>

<style scoped>
.DialogContent {
  padding: 20px 0;
}

.DialogContent p {
  margin-bottom: 16px;
  font-weight: bold;
}
</style>
