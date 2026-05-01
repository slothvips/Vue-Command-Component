<template>
  <div class="flex justify-center items-center">
    <el-button @click="open">{{ text.comeOn }}</el-button>
    <el-button @click="open2">{{ text.comeOnPreset }}</el-button>
    <el-button @click="openDrawer">{{ text.drawerButton }}</el-button>
  </div>
</template>

<script setup lang="tsx">
import { useModal, useDialog, useDrawer } from "@vue-cmd/naive";
import DialogContent from "./shared/DialogContent.vue";
import { NCard } from "naive-ui";
import { useDemoLocale } from "./shared/locale";

const text = useDemoLocale();
const modal = useModal();
const open = () => {
  modal(
    <NCard>
      <DialogContent />
    </NCard>,
    {
      attrs: {
        style: {
          width: "600px",
        },
      },
    },
  );
};

const dialog = useDialog();
const open2 = () => {
  dialog(<DialogContent />, {
    attrs: {
      style: {
        width: "600px",
      },
    },
  });
};

const drawer = useDrawer();
const openDrawer = () => {
  drawer(
    <NCard>
      <DialogContent />
    </NCard>,
    {
      attrs: {
        drawerAttrs: {
          placement: "right",
          width: 600,
        },
        contentAttrs: {
          title: text.drawerTitle,
        },
      },
    },
  );
};
</script>

<style lang="scss" scoped></style>
