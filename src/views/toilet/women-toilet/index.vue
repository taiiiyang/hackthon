<template>
  <div class="women-wrapper">
    <div class="women-floor-wrapper">
      <div class="floor" v-for="(floor, key) in wholeFloor" :key="key">
        <span class="floor-tip">{{ key }}楼</span>
        <women-floor :floor="floor"></women-floor>
      </div>
    </div>
    <div class="door">
      <svg-icon name="toilet-door"></svg-icon>
      <span>门在这里哦！</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { WholeFloor } from '../types';

interface props {
  wholeFloor: WholeFloor;
}
defineProps<props>();
</script>

<style scoped lang="scss">
.women-wrapper {
  display: flex;
  .women-floor-wrapper {
    flex: auto;
    .floor {
      display: flex;
      justify-content: space-around;
    }
    .floor-tip {
      font-size: 0.4rem;
      font-style: italic;
      font-weight: bold;
      flex-basis: 1.3rem;
    }
  }
  .door {
    display: flex;
    flex-direction: column;
    flex-basis: 1rem;
    align-items: center;
    flex: 1;
    padding-left: 0.1rem;
    span {
      margin-top: 0.1rem;
      font-size: 0.18rem;
      text-align: center;
    }
  }
}
</style>
