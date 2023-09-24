<template>
  <div>toilet</div>
</template>

<script setup lang="ts">
import userApi from '@/api/userInfo';
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';

const router = useRouter();

onMounted(async () => {
  // 挂载时判断是否存在当前用户信息
  // 先暂时使用 模拟ID
  const mockId = '1111';
  const userInfoRes = await userApi.getUserInfo({ userId: mockId });
  if (!userInfoRes.data) {
    router.push({ path: '/login' });
  }
});
</script>

<style scoped></style>
