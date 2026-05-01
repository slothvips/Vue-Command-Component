<template>
  <div>
    {{ formValue }}
    <el-divider />
    {{ count }}
    <el-divider />
    <div class="flex justify-center items-center">
      <el-button @click="openDialog">Open non-reactive dialog</el-button>
      <el-button @click="openDialog2">Open reactive dialog</el-button>
    </div>
    <el-divider />
  </div>
</template>

<script setup lang="tsx">
import { useDialog } from "@vue-cmd/element-plus";
import DialogContent from "./shared/DialogContent.vue";
import { ref, reactive } from "vue";

const count = ref(0);
setInterval(() => {
  count.value++;
}, 1000);

const dialog = useDialog();
const openDialog = () => {
  dialog(<DialogContent v-model={formValue.name} count={count.value} />);
};

const openDialog2 = () => {
  dialog(() => <DialogContent v-model={formValue.name} count={count.value} />);
};

const formValue = reactive({
  name: "panda",
});
</script>

<style lang="scss" scoped></style>
