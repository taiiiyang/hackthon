<template>
  <div class="tab-wrapper">
    <van-tabbar route placeholder>
      <van-tabbar-item
        replace
        :to="`/${route.name}`"
        v-for="route in routerMap"
        :key="route.name"
      >
        <template #icon="props">
          <svg-icon
            :name="props.active ? `${route.icon}-click` : `${route.icon}`"
          ></svg-icon>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '@/store/user';

const userStore = useUserStore();
const role = ref(userStore.role);

const logisticPath = role.value === 0 ? 'logistic' : 'admin';

const routerMap = ref([
  { name: 'toilet', title: '找厕所', icon: 'toilet-tab' },
  { name: 'talk', title: '吐槽室', icon: 'talk-tab' },
  { name: logisticPath, title: '管理中心', icon: 'logistic-tab' },
]);
</script>
