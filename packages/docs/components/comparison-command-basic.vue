<template>
  <div>
    <!-- 业务内容 -->
    <el-button @click="openDialog" type="success">编辑用户 (命令式)</el-button>
  </div>
</template>

<script setup lang="tsx">
import { useDialog } from "@vue-cmd/element-plus";
import UserEditForm from "./shared/UserEditForm.vue";
import { defaultUser } from "./shared/mockData.js";

const CommandDialog = useDialog();

const openDialog = async () => {
  try {
    const result = await CommandDialog(<UserEditForm user={defaultUser} />, {
      title: "编辑用户",
      width: "500px",
    }).promise;

    // 用户提交了数据，处理后续逻辑
    console.log("最终结果:", result);
  } catch (error) {
    // 用户取消了操作
    console.log("用户取消了编辑");
  }
};
</script>
