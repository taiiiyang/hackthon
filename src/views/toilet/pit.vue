<template>
  <div class="pit-wrapper">
    <div class="pit-content" v-if="status === 1">
      <svg-icon name="toilet-leisure" :size="size"></svg-icon>
    </div>
    <div class="pit-content" v-else-if="status === 2">
      <svg-icon name="toilet-occupy" :size="size"></svg-icon>
      <span class="pit-time">{{ time }}</span>
    </div>
    <div class="pit-content" v-else>
      <svg-icon name="toilet-breakdown" :size="size"></svg-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
// 每个坑位，传入占用状态和占用时间
import { ref } from 'vue';

defineProps({
  status: {
    type: Number,
    required: true,
  },
  time: {
    type: String,
  },
});

// 坑位尺寸
const size = ref('1.2rem');
</script>

<style scoped lang="scss">
.pit-wrapper {
  height: 100%;
  display: flex;
  .pit-content {
    position: relative;

    .pit-time {
      display: block;
      width: 100%;
      text-align: center;
      position: absolute;
      bottom: 0.23rem;
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 0.19rem;
      font-size: 0.2rem;
      color: rgba(0, 0, 0, 0.8);
    }
  }
}
</style>
