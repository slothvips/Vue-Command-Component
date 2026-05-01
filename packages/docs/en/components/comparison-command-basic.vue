<template>
  <div>
    <!-- Business content -->
    <el-button @click="openDialog" type="success">Edit user (imperative)</el-button>
  </div>
</template>

<script setup lang="tsx">
import { useDialog } from "@vue-cmd/element-plus";
import UserEditForm from "./shared/UserEditForm.vue";
import { defaultUser } from "./shared/mockData.js";

const dialog = useDialog();

const openDialog = async () => {
  try {
    const result = await dialog(<UserEditForm user={defaultUser} />, {
      title: "Edit user",
      width: "500px",
    }).promise;

    // The user submitted data; handle the next logic
    console.log("Final result:", result);
  } catch (error) {
    // The user canceled the operation
    console.log("The user canceled editing");
  }
};
</script>
