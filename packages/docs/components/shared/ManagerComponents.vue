<template>
  <div>
    <!-- 用户管理 -->
    <div v-if="type === 'user'" class="DialogContent">
      <p>用户管理功能</p>
      <el-table :data="userData" size="small">
        <el-table-column prop="name" label="姓名" />
        <el-table-column prop="email" label="邮箱" />
        <el-table-column label="操作">
          <template #default>
            <el-button size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 订单管理 -->
    <div v-if="type === 'order'" class="DialogContent">
      <p>订单管理功能</p>
      <el-table :data="orderData" size="small">
        <el-table-column prop="id" label="订单号" />
        <el-table-column prop="amount" label="金额" />
        <el-table-column prop="status" label="状态" />
        <el-table-column label="操作">
          <template #default>
            <el-button size="small">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 商品管理 -->
    <div v-if="type === 'product'" class="DialogContent">
      <p>商品管理功能</p>
      <el-table :data="productData" size="small">
        <el-table-column prop="name" label="商品名" />
        <el-table-column prop="price" label="价格" />
        <el-table-column prop="stock" label="库存" />
        <el-table-column label="操作">
          <template #default>
            <el-button size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 系统设置 -->
    <div v-if="type === 'settings'" class="DialogContent">
      <el-form :model="settings" label-width="100px">
        <el-form-item label="系统名称">
          <el-input v-model="settings.systemName" />
        </el-form-item>
        <el-form-item label="超时时间">
          <el-input-number v-model="settings.timeout" />
        </el-form-item>
        <el-form-item label="启用日志">
          <el-switch v-model="settings.enableLog" />
        </el-form-item>
      </el-form>
      <div v-if="showButtons" style="text-align: right; margin-top: 20px">
        <el-button @click="handleCancel">取消</el-button>
        <el-button type="primary" @click="handleSave">保存</el-button>
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

// 尝试获取consumer，如果在命令式组件中则使用，否则使用emit
const consumer = useConsumer(false); // 不显示警告

const settings = ref({ ...systemSettings });

// 检测是否在命令式组件环境中
const isInCommandComponent = () => {
  try {
    const promise = consumer.promise;
    return promise instanceof Promise;
  } catch {
    return false;
  }
};

const handleSave = () => {
  ElMessage.success("设置已保存");

  // 如果在命令式组件中，使用consumer；否则使用emit
  if (isInCommandComponent()) {
    consumer.destroyWithResolve(settings.value);
  } else {
    emit("save", settings.value);
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
.DialogContent {
  padding: 20px 0;
}

.DialogContent p {
  margin-bottom: 16px;
  font-weight: bold;
}
</style>
