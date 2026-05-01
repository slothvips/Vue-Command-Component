<template>
  <div>
    <el-button @click="openPopup">{{ text.openVantPopup }}</el-button>
    <el-divider />
    <el-divider>{{ text.bottomPopup }}</el-divider>
    <el-button @click="openBottomPopup">{{ text.openBottomPopup }}</el-button>
    <el-divider>{{ text.areaPickerExample }}</el-divider>
    {{ fieldValue }}
    {{ cascaderValue }}
    <van-field
      v-model="fieldValue"
      is-link
      readonly
      :label="text.area"
      :placeholder="text.selectArea"
      @click="openPopup2"
    />
  </div>
</template>

<script setup lang="tsx">
import { usePopup, usePopupOnBottom } from "@vue-cmd/vant";
import DialogContent from "./shared/DialogContent.vue";
import { ref } from "vue";
import { useDemoLocale } from "./shared/locale";

const text = useDemoLocale();
const popup = usePopup({});
const popupOnBottom = usePopupOnBottom();

const openPopup = () => {
  popup(<DialogContent />, {
    attrs: {
      position: "center",
      round: true,
      closeable: true,
      style: {
        width: "375px",
        height: "667px",
      },
    },
  });
};

const fieldValue = ref("");
const cascaderValue = ref("");
const options = [
  {
    text: text.provinces[0],
    value: "330000",
    children: [{ text: text.cities[0], value: "330100" }],
  },
  {
    text: text.provinces[1],
    value: "320000",
    children: [{ text: text.cities[1], value: "320100" }],
  },
];

const openBottomPopup = () => {
  const consumer = popupOnBottom(
    <div style="padding: 20px;">
      <h3>{text.bottomPopupTitle}</h3>
      <p>{text.bottomPopupDescription}</p>
      <van-button
        type="primary"
        onClick={() => {
          consumer!.destroy();
        }}
        style="margin-top: 20px; width: 100%;"
      >
        {text.close}
      </van-button>
    </div>,
  );
};

const openPopup2 = () => {
  const consumer = popupOnBottom(
    <van-cascader
      v-model={cascaderValue.value}
      title={text.selectArea}
      options={options}
      onClose={() => {
        consumer!.destroy();
      }}
      onFinish={({ selectedOptions }: any) => {
        fieldValue.value = selectedOptions
          .map((option: any) => option.text)
          .join("/");
        consumer!.destroy();
      }}
    />,
    {
      // This mainly avoids style interference; you may not need it in real usage
      appendTo: "body",
      attrs: {
        round: true,
        style: {},
      },
    },
  );
};
</script>

<style lang="scss" scoped></style>
