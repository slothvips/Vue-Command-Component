<template>
  <div class="flower-container">
    <div class="flower-stage">
      <div id="flower" class="flower"></div>
    </div>
    <div class="stage-info">
      <h3>{{ stages[currentStage].title }}</h3>
      <p>{{ stages[currentStage].description }}</p>
    </div>

    <div class="controls">
      <button
        class="step-btn"
        :disabled="currentStage === 0"
        @click="prevStage"
      >
        上一步
      </button>
      <div class="step-indicators">
        <div
          v-for="(_, index) in stages"
          :key="index"
          class="step-dot"
          :class="{ active: index === currentStage }"
          @click="goToStage(index)"
        ></div>
      </div>
      <button
        class="step-btn"
        :disabled="currentStage === stages.length - 1"
        @click="nextStage"
      >
        下一步
      </button>
    </div>
  </div>
</template>

<script setup lang="tsx">
import type { IConsumer } from "@vue-cmd/core";
import { useRawCommand } from "@vue-cmd/hooks";
import { onMounted, reactive, ref, Transition, TransitionGroup } from "vue";

const rawCommand = useRawCommand({
  immediate: false,
  fragment: true,
  appendTo: "#flower",
  customClassName: "flower-stage",
  displayDirective: "show",
  onShow: (el) => {
    el.style.opacity = "1";
  },
  onHide: (el) => {
    el.style.opacity = "0";
  },
});

// 定义在 reactive 中使用的 IConsumer 类型
// Vue 3 的 reactive 会自动解包 Ref 类型，并且会递归处理嵌套的对象和数组
type ReactiveIConsumer = Omit<
  IConsumer,
  "visible" | "componentRef" | "stack"
> & {
  visible: boolean;
  componentRef?: any;
  stack: ReactiveIConsumer[];
};
interface StageItem {
  title: string;
  description: string;
  consumer?: ReactiveIConsumer;
}

const stages = reactive<StageItem[]>([
  {
    title: "种子阶段",
    description: "这是一粒小小的种子，蕴含着生命的潜力，等待着发芽的时机。",
  },
  {
    title: "发芽阶段",
    description: "种子吸收了水分和养分，开始萌发出嫩绿的新芽。",
  },
  {
    title: "生长阶段",
    description: "幼苗逐渐长高，茎干变得更加挺拔，开始长出叶子。",
  },
  {
    title: "花蕾阶段",
    description: "植株顶端出现了花蕾，这是开花的前兆。",
  },
  {
    title: "绽放阶段",
    description: "花蕾逐渐打开，美丽的花瓣舒展开来，展现出绚丽的色彩。",
  },
]);

onMounted(() => {
  const seed = rawCommand(<div class="seed"></div>);
  const stem = rawCommand(<div class="stem"></div>);
  const leaf = rawCommand(
    <>
      <div class="leaf left-leaf"></div>
      <div class="leaf right-leaf"></div>
    </>,
  );
  const bud = rawCommand(<div class="bud"></div>);
  const petal = rawCommand(
    <>
      {new Array(8).fill(0).map((_, i) => (
        <div key={i + 1} class={"petal" + ` petal-${i + 1}`}></div>
      ))}
    </>,
  );

  stages[0].consumer = seed as unknown as ReactiveIConsumer;
  stages[1].consumer = stem as unknown as ReactiveIConsumer;
  stages[2].consumer = leaf as unknown as ReactiveIConsumer;
  stages[3].consumer = bud as unknown as ReactiveIConsumer;
  stages[4].consumer = petal as unknown as ReactiveIConsumer;
  goToStage(0);
});

// 当前所处的阶段
const currentStage = ref(0);

// 切换到下一个阶段
const nextStage = () => {
  if (currentStage.value < stages.length - 1) {
    currentStage.value++;
    goToStage(currentStage.value);
  }
};

// 切换到上一个阶段
const prevStage = () => {
  if (currentStage.value > 0) {
    currentStage.value--;
    goToStage(currentStage.value);
  }
};

// 跳转到指定阶段
const goToStage = (stage: number) => {
  if (stage >= 0 && stage < stages.length) {
    currentStage.value = stage;
    stages.forEach((item, index) => {
      if (index <= currentStage.value) {
        item.consumer?.show();
      } else {
        item.consumer?.hide();
      }
    });
  }
};
</script>

<style>
.flower-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
}

.flower-stage {
  position: relative;
  height: 300px;
  width: 300px;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
  border-radius: 50%;
}

.flower {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.8s ease;
}

/* 种子 */
.seed {
  position: absolute;
  bottom: 40px;
  left: 50%;
  margin-left: -8px;
  width: 16px;
  height: 10px;
  background-color: #8b4513;
  border-radius: 50% 50% 50% 50%;
  transition: all 0.8s ease;
  z-index: 1;
  transform: rotate(45deg) scale(1);
}

/* 茎 */
.stem {
  position: absolute;
  bottom: 40px;
  left: 50%;
  margin-left: -3px;
  width: 6px;
  background-color: #4caf50;
  transition: all 0.8s ease;
  border-radius: 3px;
  height: 200px;
}

/* 叶子 */
.leaf {
  position: absolute;
  width: 40px;
  height: 20px;
  background-color: #4caf50;
  border-radius: 50% 50% 50% 50%;
  transition: all 0.8s ease;
  transform: rotate(-30deg);
}

.left-leaf {
  left: calc(50% - 45px);
  top: 50%;
}

.right-leaf {
  right: calc(50% - 45px);
  top: 45%;
  transform: rotate(30deg);
}

/* 花蕾 */
.bud {
  position: absolute;
  bottom: 220px;
  left: 50%;
  margin-left: -10px;
  width: 20px;
  height: 20px;
  background-color: #ff9800;
  border-radius: 50%;
  transition: all 0.8s ease;
  transform: scale(1);
  z-index: 2;
}

/* 花瓣 */
.petal {
  position: absolute;
  bottom: 230px;
  left: 50%;
  width: 30px;
  height: 60px;
  margin-left: -15px;
  background-color: #ff5722;
  border-radius: 50% 50% 50% 50%;
  transition: all 0.8s ease;
  transform: scale(1) rotate(calc(var(--n) * 45deg)) translateY(-30px);
  transform-origin: bottom center;
}

.petal-1 {
  --n: 0;
}

.petal-2 {
  --n: 1;
}

.petal-3 {
  --n: 2;
}

.petal-4 {
  --n: 3;
}

.petal-5 {
  --n: 4;
}

.petal-6 {
  --n: 5;
}

.petal-7 {
  --n: 6;
}

.petal-8 {
  --n: 7;
}

/* 控制区和信息展示 */
.stage-info {
  text-align: center;
  margin-bottom: 2rem;
  min-height: 100px;
}

.stage-info h3 {
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.stage-info p {
  color: #666;
  line-height: 1.5;
}

.controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.step-btn {
  padding: 8px 16px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.step-btn:hover:not(:disabled) {
  background-color: #3a9d70;
}

.step-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.step-indicators {
  display: flex;
  gap: 10px;
}

.step-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #ddd;
  cursor: pointer;
  transition:
    background-color 0.3s,
    transform 0.3s;
}

.step-dot.active {
  background-color: #42b983;
  transform: scale(1.2);
}

.step-dot:hover:not(.active) {
  background-color: #bbb;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
