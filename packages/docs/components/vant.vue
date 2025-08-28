<template>
  <div>
    <el-button @click="openPopup">打开Vant弹窗</el-button>
    <!-- 分割线 -->
    <el-divider />
    <el-divider>底部弹窗</el-divider>
    <el-button @click="openBottomPopup">打开底部弹窗</el-button>
    <el-divider>示例:地区选择</el-divider>
    {{ fieldValue }}
    {{ cascaderValue }}
    <van-field v-model="fieldValue" is-link readonly label="地区" placeholder="请选择所在地区" @click="openPopup2" />
  </div>
</template>

<script setup lang="tsx">
import { usePopup, usePopupOnBottom } from "@vue-cmd/vant";
import DialogContent from "./shared/DialogContent.vue";
import { ref } from "vue";

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
// 选项列表，children 代表子选项，支持多级嵌套
const options = [
  {
    text: "浙江省",
    value: "330000",
    children: [{ text: "杭州市", value: "330100" }],
  },
  {
    text: "江苏省",
    value: "320000",
    children: [{ text: "南京市", value: "320100" }],
  },
];



const openBottomPopup = () => {
  const consumer = popupOnBottom(
    <div style="padding: 20px;">
      <h3>底部弹出示例</h3>
      <p>这是一个从底部弹出的弹窗</p>
      <van-button
        type="primary"
        onClick={() => {
          consumer!.destroy();
        }}
        style="margin-top: 20px; width: 100%;"
      >
        关闭
      </van-button>
    </div>
  );
};

const openPopup2 = () => {
  const consumer = popupOnBottom(
    <van-cascader
      v-model={cascaderValue.value}
      title="请选择所在地区"
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
      // 这里主要是规避样式干扰,你实际使用时可能并不需要
      appendTo: "body",
      attrs: {
        round: true,
        style: {
        },
      },
    },
  );
};
</script>

<style lang="scss" scoped></style>
