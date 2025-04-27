<script lang="tsx" setup>
import { useElementPlusDialog, EVENT_NAME, getConsumer } from "../../../components";
import { defineComponent } from "vue";

const CommandDialog = useElementPlusDialog();

const Content = defineComponent({
  setup(_, { attrs }) {
    const consumer = getConsumer();

    return () => <div>你确认吗?</div>;
  },
});

const openDialog = () => {
  CommandDialog(<Content />, {
    title: "请确认",
  });
};

const openDialog2 = () => {
  const consumer = CommandDialog(<Content no-bind />, {
    title: "请确认",
  });
};
</script>

<template>
  <div>
    <pre>
      弹窗的确认和取消场景太常见,所以这里提供了一些便利来简化操作;提供两种方式:
      1.指定函数,直接指定点击时触发的函数,这个时候不需要注册指定的事件
      2.约定事件,按钮点击式会触发通过约定的事件名称来触发注册的函数,这需要你通过consumer对象注册约定的事件(`confirm`, `cancel`);提供这种方式,主要是为了让你将弹窗的整个逻辑可以都封装在内部,不会将逻辑散落四处.
      
      按钮通过footer插槽实现,所以会占用此插槽,需要留意~
      </pre
    >
    <el-button type="success" @click="openDialog">打开确认/取消弹窗(约定事件)</el-button>
    <el-button type="success" @click="openDialog2">打开确认/取消弹窗(指定函数)</el-button>
  </div>
</template>

<style lang="scss" scoped></style>
