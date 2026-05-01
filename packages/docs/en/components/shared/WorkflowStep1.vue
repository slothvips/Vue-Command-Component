<template>
  <div class="step-content">
    <p>Please select the data type to process:</p>
    <el-radio-group v-model="selectedDataType">
      <el-radio label="users">UserData</el-radio>
      <el-radio label="orders">Order data</el-radio>
      <el-radio label="products">Product data</el-radio>
    </el-radio-group>
    <div v-if="showButtons" style="text-align: right; margin-top: 20px">
      <el-button @click="handleCancel">Cancel</el-button>
      <el-button type="primary" @click="handleNext">Next</el-button>
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

// Try to get consumer; use it in command components, otherwise emit
const consumer = useConsumer(false); // Do not show warnings

const selectedDataType = ref("");

// Detect whether this is inside a command component
const isInCommandComponent = () => {
  try {
    // Try accessing a consumer property; a real consumer has a promise property
    // If it is a proxy, accessing promise returns a warning function
    const promise = consumer.promise;
    // A real consumer.promise is a Promise object
    return promise instanceof Promise;
  } catch {
    return false;
  }
};

const handleNext = () => {
  if (!selectedDataType.value) {
    ElMessage.warning("Please select a data type");
    return;
  }

  const data = selectedDataType.value;

  // Use consumer inside command components; otherwise emit
  if (isInCommandComponent()) {
    consumer.destroyWithResolve(data);
  } else {
    emit("next", { data });
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
.step-content {
  padding: 20px 0;
}

.step-content p {
  margin-bottom: 12px;
}
</style>
