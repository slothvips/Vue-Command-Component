<template>
  <div class="flex justify-center items-center">
    <el-button @click="openDialog">Open dialog</el-button>
  </div>
</template>

<script setup lang="tsx">
import { useConsumer } from "@vue-cmd/core";
import { useDialog } from "@vue-cmd/element-plus";
import { defineComponent, ref } from "vue";

const dialog = useDialog();

let step = 1;
const loading = ref(false);
const StepView = defineComponent({
  setup() {
    const consumer = useConsumer();
    const nextStep = () => {
      loading.value = true;
      setTimeout(() => {
        consumer.destroyWithResolve();
        loading.value = false;
      }, 2000);
    };

    return () => {
      return (
        <div v-loading={loading.value}>
          <p>step({step})ing...</p>
          <el-button onClick={() => nextStep()}>Next</el-button>
        </div>
      );
    };
  },
});

const attrs = {
  // Prevent the dialog from being closed accidentally while the task is in progress
  beforeClose: (done: () => void) => {
    if (!loading.value) {
      done();
    }
  },
};

const openDialog = async () => {
  step = 1;
  await dialog(<StepView />, {
    title: "Step " + step,
    attrs,
  }).promise;
  step++;
  await dialog(<StepView />, {
    title: "Step " + step,
    attrs,
  }).promise;
  step++;
  await dialog(<StepView />, {
    title: "Step " + step,
    attrs,
  }).promise;
  console.log("All tasks finished");
};
</script>

<style lang="scss" scoped></style>
