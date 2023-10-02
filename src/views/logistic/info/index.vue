<template>
  <maintain-title style="width: 85%" title="修改信息"></maintain-title>
  <gender-picker
    style="width: 80%; margin-top: 45px"
    @gender-pick="genderPick"
    mode="update"
  ></gender-picker>
  <floor-picker
    style="width: 80%; margin: 50px auto 0"
    @floor-change="floorChange"
    mode="update"
  ></floor-picker>
  <div class="submit-area">
    <div>优先为您展示合适的厕所</div>
    <div class="submit-btn" @click="submit">
      <van-button round color="#6478d3" size="normal">提交</van-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '@/store/user';
import { useRouter } from 'vue-router';
import { PickerOption, showNotify } from 'vant';
import userInfo from '@/api/userInfo.ts';

const userStore = useUserStore();
const router = useRouter();
// 编辑信息的时候需要从store获取
const gender = ref(userStore.gender);
const floor = ref(userStore.floor);

const genderPick = (g: 0 | 1) => {
  gender.value = g;
};

const floorChange = (pickItem: PickerOption) => {
  floor.value = <number>pickItem.value ? <number>pickItem.value : userStore.floor;
};

const submit = async () => {
  try {
    await userInfo.updateUserInfo({
      userId: userStore.userId,
      floor: floor.value,
      gender: gender.value,
    });
    showNotify({ type: 'success', message: '信息修改成功！' });
    router.push('/logistic'); // 返回管理页
  } catch (e) {
    return false;
  }
};
</script>

<style lang="scss" scoped>
.submit-area {
  width: 80%;
  font-size: 8px;
  text-align: center;
  margin: 65px auto 0;
  color: var(--main-color);
  .submit-btn {
    margin-top: 10px;
    :deep(.van-button) {
      font-size: 10px;
      padding: 0px 35px 0px 35px;
      height: 32px;
    }
  }
}
</style>
