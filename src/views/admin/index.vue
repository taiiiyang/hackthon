<template>
  <div class="admin-wrapper">
    <page-header title="管理中心"></page-header>
    <admin-tab-views ref="tabs" @changeActive="changeActive"></admin-tab-views>
    <breakdown-list :orderList="transferOrderList" @query="getList"></breakdown-list>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import api from './api';
import { useUserStore } from '@/store/user';
import { ORDER_STATUS, type OrderList } from './types';

// 当前活动页
const active = ref<ORDER_STATUS>(ORDER_STATUS.WAIT_PROCESS);
const changeActive = (newActive: ORDER_STATUS) => {
  active.value = newActive;
};
// 工单获取
const userStore = useUserStore();
const userId = userStore.userId;
const role = userStore.role;

const orderList = ref<OrderList>([]);
const transferOrderList = ref<OrderList>([]);

onMounted(async () => {
  try {
    if (typeof userId === 'number' && typeof role === 'number') {
      await getList();
      transferOrderList.value = filterOrderList(orderList.value);
    }
  } catch (e) {
    return false;
  }
});

watch(
  () => active.value,
  () => {
    transferOrderList.value = filterOrderList(orderList.value);
  },
);
const tabs = ref();
const getList = async (status?: ORDER_STATUS) => {
  const params = { userId, role };
  const { data } = await api.getOrder(params);
  orderList.value = data;

  // 点击切换工单后，需要跳转到对应的展示页
  // 上面标签栏也需要改变
  switch (status) {
    case ORDER_STATUS['wait-process']:
      active.value = ORDER_STATUS.PROCESSING;
      tabs.value.active = ORDER_STATUS.PROCESSING;
      break;
    case ORDER_STATUS['processing']:
      active.value = ORDER_STATUS.DONE;
      tabs.value.active = ORDER_STATUS.DONE;
      break;
    default:
      break;
  }
};

const filterOrderList = (orderList: OrderList): OrderList => {
  return orderList.filter((order) => {
    return order.status === ORDER_STATUS[active.value];
  });
};
</script>

<style scoped lang="scss">
.admin-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
