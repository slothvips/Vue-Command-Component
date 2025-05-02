<script setup lang="ts">
import { ref } from "vue";
import { ElForm, ElFormItem, ElInput, ElDatePicker } from "element-plus";
import { useConsumer } from "vue3-command-component";

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
  // 实际上我们在业务开发中会直接在这里发送更改请求
  setTimeout(() => {
    loading.value = false;
    console.log("后端表示保存成功");
    consumer.destroyWithResolve(formData.value);
  }, 2000);
};

const handleCancel = () => {
  consumer.destroyWithReject(new Error("取消编辑"));
};
</script>

<template>
  <ElForm v-loading="loading">
    <ElFormItem label="日期">
      <ElDatePicker v-model="formData.date" type="date" placeholder="选择日期" format="YYYY-MM-DD" value-format="YYYY-MM-DD" />
    </ElFormItem>
    <ElFormItem label="姓名">
      <ElInput v-model="formData.name" placeholder="请输入姓名" />
    </ElFormItem>
    <ElFormItem label="州/省">
      <ElInput v-model="formData.state" placeholder="请输入州/省" />
    </ElFormItem>
    <ElFormItem>
      <el-button @click="handleSave">保存</el-button>
      <el-button @click="handleCancel">取消</el-button>
    </ElFormItem>
  </ElForm>
</template>

<style scoped></style>
