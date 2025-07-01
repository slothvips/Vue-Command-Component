<template>
  <div>
    {{ width }}
    <el-divider />
    <el-button @click="openDialog">打开弹窗</el-button>
  </div>
</template>

<script setup lang="tsx">
import { useDialog } from "@vue-cmd/element-plus";
import DialogContent from "./dialog-content.vue";
import { ref } from "vue";

const width = ref(300)
let direction=1
const run = () => {
  width.value+=direction
  if(width.value>=window.innerWidth){
    direction=-1
  }
  if(width.value<=450){
    direction=1
  }
  requestAnimationFrame(run)
}
run()

const CommandDialog = useDialog();
const openDialog = () => {
  width.value=450
  const consumer = CommandDialog(<DialogContent />, () => ({
    title: `当前宽度: ${width.value}px`,
    width: `${width.value}px`,
  }));

  console.log(consumer)
};

</script>

<style lang="scss" scoped></style>
