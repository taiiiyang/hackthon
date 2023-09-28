<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o" @click="toggleRoute('toilet')">
      找厕所
    </van-tabbar-item>
    <van-tabbar-item icon="search" @click="toggleRoute('talk')">
      吐槽室
    </van-tabbar-item>
    <van-tabbar-item icon="friends-o" @click="toggleRoute('logistic')">
      管理中心
    </van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const active = ref(0);

const toggleRoute = (path: string) => {
  router.push(path);
};
</script>

<style scoped></style>
