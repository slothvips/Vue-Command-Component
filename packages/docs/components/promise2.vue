<template>
  <div class="flex justify-center items-center">
    <el-button @click="openDialog">打开弹窗</el-button>
  </div>
</template>

<script setup name="base-example" lang="tsx">
import { useConsumer, useElementPlusDialog } from "vue-command-component";
import { defineComponent, ref } from "vue";

const CommandDialog = useElementPlusDialog();

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
          <el-button onClick={() => nextStep()}>下一步</el-button>
        </div>
      );
    };
  },
});

const attrs = {
  // 防止任务进行中,弹窗被意外关闭
  beforeClose: (done: () => void) => {
    if (!loading.value) {
      done();
    }
  },
};

const openDialog = async () => {
  step = 1;
  await CommandDialog(<StepView />, {
    title: "步骤" + step,
    attrs,
  }).promise;
  step++;
  await CommandDialog(<StepView />, {
    title: "步骤" + step,
    attrs,
  }).promise;
  step++;
  await CommandDialog(<StepView />, {
    title: "步骤" + step,
    attrs,
  }).promise;
  console.log("所有任务完成");
};
</script>

<style lang="scss" scoped></style>
