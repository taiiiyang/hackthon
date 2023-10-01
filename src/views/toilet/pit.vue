<template>
  <div class="pit-wrapper">
    <div class="pit-content">
      <svg-icon name="toilet-leisure" :size="size" v-if="status === 1"></svg-icon>
      <svg-icon name="toilet-occupy" :size="size" v-else-if="status === 2"></svg-icon>
      <svg-icon name="toilet-breakdown" :size="size" v-else></svg-icon>
      <span class="pit-time" v-if="status === 2">{{ times }}</span>
      <span class="status">{{ PIT_STATUS[status] }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
// 每个坑位，传入占用状态和占用时间
import { ref, onMounted, watch, onUnmounted } from 'vue';
import { PIT_STATUS } from './types';

const props = defineProps({
  status: {
    type: Number,
    required: true,
  },
  time: {
    type: String,
  },
});

const size = ref('1rem'); // 坑位尺寸
const times = ref(props.time);
let timer: NodeJS.Timeout; // 定时器
// 时间格式化
const checkTime = (i: string) => {
  if (Number(i) < 10 && i.length === 1) {
    return '0' + i;
  }
  return i;
};
// 时间步进
onMounted(() => {
  if (props.time) {
    times.value = props.time;
    moveTime();
  }
});
// 卸载清空定时器
onUnmounted(() => {
  if (timer) clearInterval(timer);
});
// 如果状态变为空闲，则清空定时器
watch(
  () => props.status,
  (newVal, oldVal) => {
    if (newVal !== 2 && timer && oldVal === 2) {
      clearInterval(timer);
    }
  },
);
// 移动时间
const moveTime = () => {
  timer = setInterval(() => {
    const newTime = times.value;
    if (newTime) {
      let [hour, minute, second] = newTime.split(':');
      if (Number(second) + 1 >= 60) {
        minute = (Number(minute) + 1).toString();
        second = '00';
        if (Number(minute) + 1 >= 60) {
          hour = (Number(hour) + 1).toString();
          minute = '00';
        }
      }
      times.value = `${checkTime(hour)}:${checkTime(minute)}:${checkTime(
        (Number(second) + 1).toString(),
      )}`;
    }
  }, 1000);
};
</script>

<style scoped lang="scss">
.pit-wrapper {
  height: 100%;
  display: flex;
  .pit-content {
    position: relative;
    display: flex;
    flex-direction: column;
    .pit-time {
      display: block;
      font-style: normal;
      width: 100%;
      text-align: center;
      position: absolute;
      bottom: 0.3rem;
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 0.19rem;
      font-size: 0.2rem;
      color: rgba(0, 0, 0, 0.8);
    }

    .status {
      text-align: center;
      font-size: 0.25rem;
      color: black;
      font-style: normal;
      font-weight: 400;
    }
  }
}
</style>
