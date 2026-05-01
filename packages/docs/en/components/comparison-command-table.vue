<template>
  <div>
    <h4>Table editing - imperative</h4>
    <UserTable
      :data="tableData"
      :show-role="true"
      @edit="editRow"
      @delete="deleteRow"
    />
  </div>
</template>

<script setup lang="tsx">
import { ref } from "vue";
import { useDialog } from "@vue-cmd/element-plus";
import { ElMessage } from "element-plus";
import UserTable from "./shared/UserTable.vue";
import UserEditForm from "./shared/UserEditForm.vue";
import DeleteConfirm from "./shared/DeleteConfirm.vue";
import { userData } from "./shared/mockData.js";

const dialog = useDialog();
const tableData = ref([...userData]);

const editRow = async (row) => {
  try {
    const result = await dialog(<UserEditForm user={row} showRole={true} />, {
      title: "Edit user",
      width: "500px",
    }).promise;

    // Update table data
    const index = tableData.value.findIndex((item) => item.id === row.id);
    if (index !== -1) {
      tableData.value[index] = { ...result, id: row.id };
    }

    ElMessage.success("Updated successfully");
  } catch {
    // The user canceled editing; no handling needed
  }
};

const deleteRow = async (row) => {
  try {
    await dialog(<DeleteConfirm user={row} />, {
      title: "Confirm delete",
      width: "400px",
    }).promise;

    // Remove from table
    const index = tableData.value.findIndex((item) => item.id === row.id);
    if (index !== -1) {
      tableData.value.splice(index, 1);
    }

    ElMessage.success("Deleted successfully");
  } catch {
    // The user canceled deletion; no handling needed
  }
};
</script>

<style scoped>
h4 {
  margin-bottom: 16px;
  color: #67c23a;
}
</style>
