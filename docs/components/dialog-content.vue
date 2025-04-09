<template>
  <div>
    这里是弹窗内容
    <el-row>
      <p>provides:{{ provides }}</p>
    </el-row>
    <el-row>
      <div class="flex justify-around">
        <el-button @click="confirm">it's ok.</el-button>
        <el-button @click="close">close</el-button>
      </div>
    </el-row>
  </div>
</template>

<script setup lang="tsx">
import { ref } from "vue";
import { getCurrentInstance } from "vue";
import { getConsumer } from "vue3-command-dialog";

const consumer = getConsumer();

const instance = getCurrentInstance();
const provides = ref<any>(null);
setTimeout(() => {
  provides.value = instance?.appContext.provides;
}, 200);

const close = () => {
  consumer.destroyWithReject("close");
};
const confirm = () => {
  consumer.destroyWithResolve("confirm");
};
</script>

<style lang="scss" scoped></style>
