<script lang="tsx" setup>
import { useConsumer } from "@vue-cmd/core";
import {
  getCurrentInstance,
  inject,
  onMounted,
  onUnmounted,
  provide,
} from "vue";
import NestedCom from "../nested.vue";
import { useDemoLocale } from "./locale";

defineEmits(["say"]);

const props = withDefaults(
  defineProps<{ nested?: boolean; count?: number }>(),
  {
    nested: false,
    count: 0,
  },
);
provide("nested", props.nested);

const text = useDemoLocale();
provide("content", text.contentProvide);
const depth = inject("depth", 0);
provide("depth", depth + 1);

const consumer = useConsumer(false);

console.log(
  text.globalPropertyLog,
  (getCurrentInstance()! as any).appContext.config.globalProperties.$panda,
);

const resetOption = () => {
  consumer.componentRef?.value?.resetPosition();
};

const model = defineModel<string>();

onMounted(() => {
  console.log(text.mountedLog);
});
onUnmounted(() => {
  console.log(text.unmountedLog);
});

defineExpose({
  msg: "panda",
  sayHello: () => {
    alert("hello");
  },
});
</script>

<template>
  <div class="w-full p-20px">
    <div class="flex gap-20px flex-wrap">
      <el-button @click="consumer.destroy()">destroy</el-button>
      <el-button @click="consumer.destroyWithReject()"
        >destroyWithReject</el-button
      >
      <el-button @click="consumer.destroyWithResolve()"
        >destroyWithResolve</el-button
      >
      <el-button @click="consumer.hide()">hide</el-button>
      <el-button @click="consumer.show()">show</el-button>
      <el-button @click="resetOption">{{ text.resetPosition }}</el-button>
      <el-button @click="$emit('say', 'panda')">{{ text.emitEvent }}</el-button>
    </div>
    <el-divider />
    <template v-if="nested">
      <el-divider>{{ text.nestedDivider }}</el-divider>
      <p>{{ text.nestedWarning }}</p>
      <p>{{ text.dialogDepth }}: {{ depth }}</p>
      <NestedCom />
    </template>
    <el-divider>{{ text.reactiveProp }} {{ count }}</el-divider>
    <div>
      <el-input v-model="model"></el-input>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
