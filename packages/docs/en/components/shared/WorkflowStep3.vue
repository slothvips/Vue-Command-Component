<template>
  <div class="step-content">
    <h5>Please confirm the following information:</h5>
    <p><strong>DataType:</strong> {{ dataType }}</p>
    <p><strong>Action:</strong> {{ editData.method }}</p>
    <p><strong>Notes:</strong> {{ editData.note || "None" }}</p>
    <div v-if="showButtons" style="text-align: right; margin-top: 20px">
      <el-button @click="handleBack">Previous</el-button>
      <el-button @click="handleCancel">Cancel</el-button>
      <el-button type="primary" @click="handleSubmit" :loading="submitting">
        Submit
      </el-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ElMessage } from "element-plus";
import { useConsumer } from "@vue-cmd/core";

const props = defineProps({
  dataType: {
    type: String,
    required: true,
  },
  editData: {
    type: Object,
    required: true,
  },
  showButtons: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(["submit", "back", "cancel"]);

// Try to get consumer; use it in command components, otherwise emit
const consumer = useConsumer(false); // Do not show warnings

const submitting = ref(false);

// Detect whether this is inside a command component
const isInCommandComponent = () => {
  try {
    const promise = consumer.promise;
    return promise instanceof Promise;
  } catch {
    return false;
  }
};

const handleSubmit = async () => {
  submitting.value = true;
  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const result = {
      dataType: props.dataType,
      method: props.editData.method,
      note: props.editData.note,
    };

    ElMessage.success("Workflow executed successfully!");

    // Use consumer inside command components; otherwise emit
    if (isInCommandComponent()) {
      consumer.destroyWithResolve(result);
    } else {
      emit("submit", result);
    }
  } catch (error) {
    ElMessage.error("Execution failed");
  } finally {
    submitting.value = false;
  }
};

const handleBack = () => {
  // Use consumer inside command components; otherwise emit
  if (isInCommandComponent()) {
    consumer.destroyWithReject("back");
  } else {
    emit("back");
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
h5 {
  margin-bottom: 12px;
}

.step-content {
  padding: 20px 0;
}

.step-content p {
  margin-bottom: 12px;
}
</style>
