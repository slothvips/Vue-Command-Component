<template>
  <div>
    <p>Are you sure you want to delete user "{{ user.name }}" ?</p>
    <div v-if="showButtons" style="text-align: right; margin-top: 20px">
      <el-button @click="handleCancel">Cancel</el-button>
      <el-button type="danger" @click="handleConfirm" :loading="loading"
        >Confirm delete</el-button
      >
    </div>
  </div>
</template>

<script setup>
import { useConsumer } from "@vue-cmd/core";

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
  showButtons: {
    type: Boolean,
    default: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["confirm", "cancel"]);

// Try to get consumer; use it in command components, otherwise emit
const consumer = useConsumer(false); // Do not show warnings

// Detect whether this is inside a command component
const isInCommandComponent = () => {
  try {
    const promise = consumer.promise;
    return promise instanceof Promise;
  } catch {
    return false;
  }
};

const handleConfirm = async () => {
  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Use consumer inside command components; otherwise emit
    if (isInCommandComponent()) {
      consumer.destroyWithResolve(true);
    } else {
      emit("confirm");
    }
  } catch (error) {
    console.error("Delete failed:", error);
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
