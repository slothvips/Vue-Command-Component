<script lang="tsx" setup>
import { useElementPlusDialog, getConsumer } from "../../../components/index";
import { defineComponent, ref } from "vue";

const CommandDialog = useElementPlusDialog();

const Content = defineComponent({
  setup() {
    const { destroyWithResolve } = getConsumer();
    const loading = ref(false);

    return () => (
      <div>
        <el-button
          type="primary"
          loading={loading.value}
          onClick={() => {
            loading.value = true;
            setTimeout(() => {
              destroyWithResolve();
              loading.value = false;
            }, 2000);
          }}
        >
          关闭弹窗
        </el-button>
      </div>
    );
  },
});

const openDialog = async () => {
  await CommandDialog(<Content />, {
    title: "步骤一",
  }).promise;
  await CommandDialog(<Content />, {
    title: "步骤二",
  }).promise;
  await CommandDialog(<Content />, {
    title: "步骤三",
  }).promise;
  console.log("all done");
};
</script>

<template>
  <div>
    <el-button type="primary" @click="openDialog">打开弹窗</el-button>
  </div>
</template>

<style lang="scss" scoped></style>
