<template>
  <div class="floor-wrapper">
    <div class="pit" v-for="(pit, index) in floor" :key="index">
      <pit :status="pit.status" :time="pit.time"></pit>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FloorInfo } from '../types';

defineProps<{
  floor: FloorInfo;
}>();
</script>

<style scoped lang="scss">
.floor-wrapper {
  display: flex;
  flex: auto;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}
</style>
