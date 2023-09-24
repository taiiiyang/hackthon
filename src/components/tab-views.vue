<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" @click="toggleRoute('toilet')">
        标签
      </van-tabbar-item>
      <van-tabbar-item icon="search" @click="toggleRoute('talk')">
        标签
      </van-tabbar-item>
      <van-tabbar-item icon="friends-o" @click="toggleRoute('logistic')">
        标签
      </van-tabbar-item>
    </van-tabbar>
  </div>
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
