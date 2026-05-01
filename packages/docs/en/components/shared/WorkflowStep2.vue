<template>
  <div class="step-content">
    <p>Processing: {{ dataType }}</p>
    <el-form :model="editForm" label-width="100px">
      <el-form-item label="Action">
        <el-select v-model="editForm.method">
          <el-option label="Batch update" value="update" />
          <el-option label="Batch delete" value="delete" />
          <el-option label="Export data" value="export" />
        </el-select>
      </el-form-item>
      <el-form-item label="Notes">
        <el-input v-model="editForm.note" type="textarea" />
      </el-form-item>
    </el-form>
    <div v-if="showButtons" style="text-align: right; margin-top: 20px">
      <el-button @click="handleBack">Previous</el-button>
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
  dataType: {
    type: String,
    required: true,
  },
  showButtons: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(["next", "back", "cancel"]);

// Try to get consumer; use it in command components, otherwise emit
const consumer = useConsumer(false); // Do not show warnings

const editForm = ref({
  method: "",
  note: "",
});

// Detect whether this is inside a command component
const isInCommandComponent = () => {
  try {
    const promise = consumer.promise;
    return promise instanceof Promise;
  } catch {
    return false;
  }
};

const handleNext = () => {
  if (!editForm.value.method) {
    ElMessage.warning("Please select an action");
    return;
  }

  const data = editForm.value;
  // Use consumer inside command components; otherwise emit
  if (isInCommandComponent()) {
    consumer.destroyWithResolve(data);
  } else {
    emit("next", { data });
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
.step-content {
  padding: 20px 0;
}

.step-content p {
  margin-bottom: 12px;
}
</style>
