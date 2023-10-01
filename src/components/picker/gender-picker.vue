<template>
  <div class="gender-picker">
    <div class="gender-text">选择性别</div>
    <div class="gender-boxes">
      <div class="gender-box" @click="genderPickConfirm(0)">
        <van-image
          class="gender-img"
          :class="{ active: gender == 0 }"
          round
          src="src/assets/common/female.png"
        ></van-image>
        <span><van-icon name="success" size="mini" :color="tickColor(0)" /></span>
        <div class="gender-desc" :class="{ active: gender == 0 }">小姐姐</div>
      </div>
      <div class="gender-box" @click="genderPickConfirm(1)">
        <van-image
          class="gender-img"
          :class="{ active: gender == 1 }"
          round
          src="src/assets/common/male.png"
        ></van-image>
        <span><van-icon name="success" size="mini" :color="tickColor(1)" /></span>
        <div class="gender-desc" :class="{ active: gender == 1 }">小哥哥</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useUserStore } from '@/store/user';
import { computed, ref } from 'vue';

const emits = defineEmits(['genderPick']);
const userStore = useUserStore();
// 默认是1，否则引用外部传进来的信息
const gender = ref(userStore.gender);

const tickColor = computed(() => (g: 0 | 1) => {
  return gender.value === g ? '#e56a05' : 'transparent';
});
const genderPickConfirm = (g: 0 | 1) => {
  gender.value = g;
  emits('genderPick', g);
};
</script>

<style scoped>
.gender-picker {
  font-size: 12px;
  margin: 0 auto 0;
  .gender-text {
    width: fit-content;
    color: var(--main-color);
    border-radius: 8px;
    font-weight: bold;
  }
  .gender-boxes {
    text-align: center;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .gender-box {
      .gender-img {
        padding: 3px;
        border: 2px solid transparent;
        &.active {
          border: 2px solid #e56a05;
        }
      }
      .gender-tick {
        color: transparent;
        &.active {
          color: #e56a05;
        }
      }
      .gender-desc {
        font-size: 8px;
        width: fit-content;
        margin: 5px 40px 0 28px;
        background-color: var(--main-color);
        color: white;
        padding: 4px;
        border-radius: 4px;
        &.active {
          background-color: #e56a05;
        }
      }
    }
  }
}
</style>
