<script setup lang="ts">
import { ref } from "vue";
import { ElForm, ElFormItem, ElInput, ElDatePicker } from "element-plus";
import { useConsumer } from "@vue-cmd/core";

interface RowData {
  date: string;
  name: string;
  state: string;
}

const props = defineProps<{
  row: RowData;
}>();

const formData = ref<RowData>({ ...props.row });

const consumer = useConsumer();

const loading = ref(false);
const handleSave = () => {
  loading.value = true;
  // In real business code, you would send the update request here
  setTimeout(() => {
    loading.value = false;
    console.log("Backend reports save success");
    consumer.destroyWithResolve(formData.value);
  }, 2000);
};

const handleCancel = () => {
  consumer.destroyWithReject(new Error("CancelEdit"));
};
</script>

<template>
  <ElForm v-loading="loading">
    <ElFormItem label="Date">
      <ElDatePicker
        v-model="formData.date"
        type="date"
        placeholder="Select date"
        format="YYYY-MM-DD"
        value-format="YYYY-MM-DD"
      />
    </ElFormItem>
    <ElFormItem label="Name">
      <ElInput v-model="formData.name" placeholder="Please enterName" />
    </ElFormItem>
    <ElFormItem label="State/Province">
      <ElInput v-model="formData.state" placeholder="Please enterState/Province" />
    </ElFormItem>
    <ElFormItem>
      <el-button @click="handleSave">Save</el-button>
      <el-button @click="handleCancel">Cancel</el-button>
    </ElFormItem>
  </ElForm>
</template>

<style scoped></style>
