<template>
  <div>
    <h4>表格编辑 - 命令式</h4>
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

const CommandDialog = useDialog();
const tableData = ref([...userData]);

const editRow = async (row) => {
  try {
    const result = await CommandDialog(
      <UserEditForm user={row} showRole={true} />,
      {
        title: "编辑用户",
        width: "500px",
      },
    ).promise;

    // 更新表格数据
    const index = tableData.value.findIndex((item) => item.id === row.id);
    if (index !== -1) {
      tableData.value[index] = { ...result, id: row.id };
    }

    ElMessage.success("更新成功");
  } catch {
    // 用户取消编辑，无需处理
  }
};

const deleteRow = async (row) => {
  try {
    await CommandDialog(<DeleteConfirm user={row} />, {
      title: "确认删除",
      width: "400px",
    }).promise;

    // 从表格中删除
    const index = tableData.value.findIndex((item) => item.id === row.id);
    if (index !== -1) {
      tableData.value.splice(index, 1);
    }

    ElMessage.success("删除成功");
  } catch {
    // 用户取消删除，无需处理
  }
};
</script>

<style scoped>
h4 {
  margin-bottom: 16px;
  color: #67c23a;
}
</style>
