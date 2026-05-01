<template>
  <el-table :data="data" style="width: 100%" v-loading="loading">
    <el-table-column prop="name" label="Name" width="120" />
    <el-table-column prop="email" label="Email" width="200" />
    <el-table-column v-if="showRole" prop="role" label="Role" width="100" />
    <el-table-column label="Actions" width="150">
      <template #default="{ row }">
        <el-button size="small" @click="$emit('edit', row)">Edit</el-button>
        <el-button size="small" type="danger" @click="$emit('delete', row)"
          >Delete</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
defineProps({
  data: {
    type: Array,
    required: true,
  },
  showRole: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["edit", "delete"]);
</script>
