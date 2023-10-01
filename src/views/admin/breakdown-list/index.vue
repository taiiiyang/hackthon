<template>
  <div class="breakdown-wrapper">
    <breakdown-item
      v-for="order in orderList"
      :key="order.id"
      :order="order"
      @query="(status: ORDER_STATUS) => $emit('query', status)"
    ></breakdown-item>
  </div>
</template>

<script setup lang="ts">
import { ORDER_STATUS, OrderList } from '../types';

defineProps<{
  orderList: OrderList;
}>();
defineEmits(['query']);
</script>

<style scoped lang="scss">
.breakdown-wrapper {
  height: 100%;
  overflow-y: auto;
  flex-grow: 1;
  flex-direction: column;
}
</style>
