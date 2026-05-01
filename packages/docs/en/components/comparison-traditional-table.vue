<template>
  <div>
    <h4>Table editing - traditional</h4>
    <UserTable
      :data="tableData"
      :show-role="true"
      :loading="loading"
      @edit="editRow"
      @delete="deleteRow"
    />

    <!-- Edit dialog -->
    <el-dialog v-model="editVisible" title="Edit user" width="500px">
      <UserEditForm
        v-if="editVisible"
        :user="currentRow"
        :show-role="true"
        @submit="handleEditSubmit"
        @cancel="editVisible = false"
      />
    </el-dialog>

    <!-- Delete confirmation dialog -->
    <el-dialog v-model="deleteVisible" title="Confirm delete" width="400px">
      <DeleteConfirm
        :user="currentRow"
        @confirm="confirmDelete"
        @cancel="deleteVisible = false"
      />
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ElMessage } from "element-plus";
import UserTable from "./shared/UserTable.vue";
import UserEditForm from "./shared/UserEditForm.vue";
import DeleteConfirm from "./shared/DeleteConfirm.vue";
import { userData } from "./shared/mockData.js";

const tableData = ref([...userData]);
const editVisible = ref(false);
const deleteVisible = ref(false);
const currentRow = ref({});
const loading = ref(false);

const editRow = (row) => {
  currentRow.value = { ...row };
  editVisible.value = true;
};

const handleEditSubmit = async (userData) => {
  loading.value = true;
  try {
    // Update table data
    const index = tableData.value.findIndex(
      (item) => item.id === currentRow.value.id,
    );
    if (index !== -1) {
      tableData.value[index] = { ...userData, id: currentRow.value.id };
    }

    editVisible.value = false;
    ElMessage.success("Updated successfully");
  } catch (error) {
    ElMessage.error("Update failed");
  } finally {
    loading.value = false;
  }
};

const deleteRow = (row) => {
  currentRow.value = row;
  deleteVisible.value = true;
};

const confirmDelete = async () => {
  loading.value = true;
  try {
    // Remove from table
    const index = tableData.value.findIndex(
      (item) => item.id === currentRow.value.id,
    );
    if (index !== -1) {
      tableData.value.splice(index, 1);
    }

    deleteVisible.value = false;
    ElMessage.success("Deleted successfully");
  } catch (error) {
    ElMessage.error("Delete failed");
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
h4 {
  margin-bottom: 16px;
  color: #409eff;
}
</style>
