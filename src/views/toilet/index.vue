<template>
  <div class="toilet-container">
    <page-header title="找厕所"></page-header>
    <div class="toilet-content">
      <span class="tip">
        为您优先展示
        <span style="color: #e37e2f">{{ floor }}</span>
        楼附近的厕所
      </span>
      <men-toilet :wholeFloor="toiletInfo" v-if="gender === 0"></men-toilet>
      <women-toilet :wholeFloor="toiletInfo" v-else></women-toilet>
    </div>
  </div>
</template>

<script setup lang="ts">
import userApi from '@/api/userInfo';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/user';
import { ref, reactive, onMounted, onUnmounted } from 'vue';
import api from './api';
import { WholeFloor } from './types';

const router = useRouter();

const userStore = useUserStore();
const userId = ref(0);
const gender = ref(0); // 先假定男性
const floor = ref(0);
const role = ref(0);

let toiletInfo = reactive<WholeFloor>({});

const getToiletList = async () => {
  const params = {
    gender: gender.value,
    userId: userId.value,
    floor: floor.value,
  };
  try {
    const { data } = await api.getToiletInfo(params);
    // 按照顺序排列
    Object.keys(data).forEach((key) => {
      data[key].sort((newVal, oldVal) => newVal.order - oldVal.order);
      toiletInfo[key] = data[key];
    });
  } catch (e) {
    return false;
  }
};

let timeFlag: NodeJS.Timeout;
onMounted(async () => {
  try {
    // 挂载时判断是否存在当前用户信息
    // 先暂时使用 模拟ID
    const mockId = 1111;
    userId.value = mockId;
    const userInfoRes = await userApi.getUserInfo({ userId: mockId });
    if (!userInfoRes.data) {
      router.push({ path: '/login' });
      return; // 退出函数
    } else {
      // 根据返回值去设置用户数据
      userStore.setUserInfo(userInfoRes.data);
      gender.value = userStore.gender;
      floor.value = userStore.floor;
      role.value = userStore.role;
    }
    // 确保已经获取了用户信息，去套取厕所信息
    await getToiletList();
    timeFlag = setInterval(async () => {
      await getToiletList();
    }, 10000);
  } catch (e) {
    return false;
  }
});

onUnmounted(() => {
  timeFlag && clearInterval(timeFlag);
});
</script>

<style scoped lang="scss">
.toilet-container {
  height: 100%;
  display: flex;
  flex-direction: column;

  .tip {
    display: block;
    color: #6477d388;
    font-size: 0.4rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  .toilet-content {
    flex: auto;
    padding: 0.3rem;
    font-weight: bold;
    font-style: italic;
    color: var(--main-color);
    overflow-y: auto;
  }
}
</style>
