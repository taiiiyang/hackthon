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
            :name="
              props.active ? `${route.name}-tab-click` : `${route.name}-tab`
            "
          ></svg-icon>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const routerMap = ref([
  { name: 'toilet', title: '找厕所' },
  { name: 'talk', title: '吐槽室' },
  { name: 'logistic', title: '管理中心' },
]);
</script>
