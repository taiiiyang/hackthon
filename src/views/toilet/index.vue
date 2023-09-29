<template>
  <div class="toilet-container">
    <div class="toilet-header">找厕所</div>
    <div class="toilet-content">
      <pit :status="2" time="0:05:33"></pit>
    </div>
  </div>
</template>

<script setup lang="ts">
import userApi from '@/api/userInfo';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/user';
import { ref, onMounted } from 'vue';

const router = useRouter();
const userStore = useUserStore();
const gender = ref<number>(0);

onMounted(async () => {
  // 挂载时判断是否存在当前用户信息
  // 先暂时使用 模拟ID
  const mockId = '1111';
  const userInfoRes = await userApi.getUserInfo<UserInfo>({ userId: mockId });
  if (!userInfoRes.data) {
    router.push({ path: '/login' });
  } else {
    // 根据返回值去设置用户数据
    userStore.setUserInfo(userInfoRes.data);
    gender.value = userStore.gender;
  }
});
</script>

<style scoped lang="scss">
.toilet-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  .toilet-header {
    display: flex;
    margin-top: 0.1rem;
    justify-content: center;
    text-align: 15px;
    font-weight: bold;
    font-size: 0.5rem;
    color: var(--main-color);
  }
}
</style>
