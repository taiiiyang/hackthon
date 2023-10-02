<template>
  <div class="wrapper">
    <div class="header">
      <div class="toilet"></div>
      <page-header title="基础信息" class="page-header"></page-header>
    </div>
    <gender-picker
      style="width: 80%; margin-top: 0.8rem"
      @gender-pick="genderPick"
      mode="login"
    ></gender-picker>
    <floor-picker
      style="width: 80%; margin: 0.9rem auto 0"
      @floor-change="floorChange"
      mode="login"
    ></floor-picker>
    <div class="submit-area">
      <div>优先为您展示合适的厕所</div>
      <van-button @click="submit" round color="#6478d3" size="normal">提交</van-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '@/store/user';
import { PickerOption, showNotify } from 'vant';
import userInfoApi from '@/api/userInfo.ts';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const router = useRouter();
const gender = ref<0 | 1>(1);
const floor = ref(1);

const genderPick = (g: 0 | 1) => {
  gender.value = g;
};

const floorChange = (pickItem: PickerOption) => {
  floor.value = <number>pickItem.value ? <number>pickItem.value : 1;
};

const submit = async () => {
  try {
    const { data } = await userInfoApi.login({
      userId: 1, // 这个从 xsyxBridge 拿
      floor: floor.value,
      gender: gender.value,
    });
    userStore.setUserInfo(data); // 将信息放入store
    localStorage.setItem('TOILET_USERINFO', JSON.stringify(data));
    showNotify({ type: 'success', message: '欢迎来到兴盛找厕所' });
    router.push('/toilet');
  } catch (e) {
    return false;
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;

  .header {
    display: flex;
    margin-top: 1rem;

    .toilet {
      margin-left: 0.7rem;
      width: 1.7rem;
      height: 0.8rem;
      padding: 0.05rem 0rem;
      border-radius: 5px;
      background-color: var(--main-color);
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      background-image: url('../assets/common/xs-toilet.webp');
    }
    .page-header {
      flex: auto;
      font-weight: 600;
      margin: 0;
      text-align: center;
      margin-left: -2.5rem;
      font-size: 0.4rem;
      align-items: center;
    }
  }

  .submit-area {
    width: 80%;
    font-size: 8px;
    text-align: center;
    margin: 65px auto 0;
    color: var(--main-color);
    :deep(.van-button) {
      margin-top: 10px;
      font-size: 10px;
      padding: 0px 35px 0px 35px;
      height: 32px;
    }
  }
}
</style>
