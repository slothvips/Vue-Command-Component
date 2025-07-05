<template>
  <div>
    <el-button @click="openPopup">打开Vant弹窗</el-button>
    <!-- 分割线 -->
    <el-divider />
    {{ fieldValue }}
    {{ cascaderValue }}
    <van-field v-model="fieldValue" is-link readonly label="地区" placeholder="请选择所在地区" @click="openPopup2" />
  </div>
</template>

<script setup lang="tsx">
import { usePopup } from "@vue-cmd/vant";
import DialogContent from "./dialog-content.vue";
import { ref } from "vue";

const popup = usePopup({
});

const openPopup = () => {
  popup(
    <DialogContent />,
    {
      attrs: {
        position: 'center',
        round: true,
        closeable: true,
        style: {
          width: '375px',
          height: '667px',
        }
      },
    }
  );
};


const fieldValue = ref('');
const cascaderValue = ref('');
// 选项列表，children 代表子选项，支持多级嵌套
const options = [
  {
    text: '浙江省',
    value: '330000',
    children: [{ text: '杭州市', value: '330100' }],
  },
  {
    text: '江苏省',
    value: '320000',
    children: [{ text: '南京市', value: '320100' }],
  },
];

const openPopup2 = () => {
  const consumer = popup(
    <van-cascader
      v-model={cascaderValue.value}
      title="请选择所在地区"
      options={options}
      onClose={() => {
        consumer!.destroy();
      }}
      onFinish={({ selectedOptions }: any) => {
        fieldValue.value = selectedOptions.map((option: any) => option.text).join('/');
        consumer!.destroy();
      }}
    />,
    {
      position: 'bottom',
      // 这个文档引入较多组件库,样式影响太严重,所以我直接把弹窗挂载到body上规避影响,你实际使用时可能并不需要
      appendTo: 'body',
      attrs: {
        round: true,
        style: {
          width: '375px',
          height: '667px',
        }
      },
    }
  );
};
</script>

<style lang="scss" scoped></style>
