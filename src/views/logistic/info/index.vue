<template>
  <maintain-title style="width: 85%" :title="title"></maintain-title>
  <gender-picker
    style="width: 80%; margin-top: 45px"
    @gender-pick="genderPick"
  ></gender-picker>
  <floor-picker
    style="width: 80%; margin: 50px auto 0"
    @floor-change="floorChange"
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
import { PickerOption } from 'vant';
import userInfo from '@/api/userInfo.ts';

defineProps<{
  title: string;
}>();
const userStore = useUserStore();
const gender = ref(userStore.gender);
const floor = ref(userStore.floor);

const genderPick = (g: 0 | 1) => {
  gender.value = g;
};

const floorChange = (pickItem: PickerOption) => {
  floor.value = <number>pickItem.value ? <number>pickItem.value : userStore.floor;
};
const submit = () => {
  userInfo.updateUserInfo({
    userId: userStore.userId,
    floor: floor.value,
    gender: gender.value,
  });
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
