<template>
  <div>
    {{ formValue }}
    <el-divider />
    {{ count }}
    <el-divider />
    <div class="flex justify-center items-center">
      <el-button @click="openDialog">打开非响应性式弹窗</el-button>
      <el-button @click="openDialog2">打开响应式弹窗</el-button>
    </div>
    <el-divider />
  </div>
</template>

<script setup lang="tsx">
import { RxRender } from "@vue-cmd/core";
import { useDialog } from "@vue-cmd/element-plus";
import DialogContent from "./dialog-content.vue";
import { ref, reactive } from "vue";

const count = ref(0)
setInterval(() => {
  count.value++
}, 1000)

const CommandDialog = useDialog();
const openDialog = () => {
  CommandDialog(<DialogContent v-model={formValue.name} count={count.value} />);
};

const openDialog2 = () => {
  CommandDialog(RxRender(() => <DialogContent v-model={formValue.name} count={count.value} />));
};

const formValue = reactive({
  name: 'panda',
})

</script>

<style lang="scss" scoped></style>
