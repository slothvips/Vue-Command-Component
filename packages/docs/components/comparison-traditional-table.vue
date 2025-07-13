<template>
  <div>
    <h4>表格编辑 - 传统方式</h4>
    <UserTable
      :data="tableData"
      :show-role="true"
      :loading="loading"
      @edit="editRow"
      @delete="deleteRow"
    />

    <!-- 编辑弹窗 -->
    <el-dialog v-model="editVisible" title="编辑用户" width="500px">
      <UserEditForm
        v-if="editVisible"
        :user="currentRow"
        :show-role="true"
        @submit="handleEditSubmit"
        @cancel="editVisible = false"
      />
    </el-dialog>

    <!-- 删除确认弹窗 -->
    <el-dialog v-model="deleteVisible" title="确认删除" width="400px">
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
    // 更新表格数据
    const index = tableData.value.findIndex(
      (item) => item.id === currentRow.value.id,
    );
    if (index !== -1) {
      tableData.value[index] = { ...userData, id: currentRow.value.id };
    }

    editVisible.value = false;
    ElMessage.success("更新成功");
  } catch (error) {
    ElMessage.error("更新失败");
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
    // 从表格中删除
    const index = tableData.value.findIndex(
      (item) => item.id === currentRow.value.id,
    );
    if (index !== -1) {
      tableData.value.splice(index, 1);
    }

    deleteVisible.value = false;
    ElMessage.success("删除成功");
  } catch (error) {
    ElMessage.error("删除失败");
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
