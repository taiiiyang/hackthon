<template>
  <div class="gender-picker">
    <div class="gender-text">请选择你的性别</div>
    <div class="gender-boxes">
      <div
        class="gender-box"
        @click="genderPickConfirm(0)"
        :class="{ active: gender === 0 }"
      >
        <svg-icon
          name="women-avatar"
          :size="avatarSize"
          :class="{ active: gender === 0 }"
        ></svg-icon>
        <span><van-icon name="success" size="mini" :color="tickColor(0)" /></span>
        <div class="gender-desc" :class="{ active: gender === 0 }">小姐姐</div>
      </div>
      <div
        class="gender-box"
        @click="genderPickConfirm(1)"
        :class="{ active: gender === 1 }"
      >
        <svg-icon
          name="man-avatar"
          :size="avatarSize"
          :class="{ active: gender === 1 }"
        ></svg-icon>
        <span><van-icon name="success" size="mini" :color="tickColor(1)" /></span>
        <div class="gender-desc" :class="{ active: gender === 1 }">小哥哥</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useUserStore } from '@/store/user';
import { computed, ref, onMounted } from 'vue';

const emits = defineEmits(['genderPick']);
const props = defineProps<{ mode: string }>();

const userStore = useUserStore();
// 默认是1，否则引用userStore传进来的信息
const gender = ref(1);
onMounted(() => {
  switch (props.mode) {
    case 'update':
      gender.value = userStore.gender; // 如果是编辑的话需要回显
      break;
    case 'login':
      break;
    default:
      break;
  }
});

const tickColor = computed(() => (g: 0 | 1) => {
  return gender.value === g ? '#e56a05' : 'transparent';
});

const genderPickConfirm = (g: 0 | 1) => {
  gender.value = g;
  emits('genderPick', g);
};

const avatarSize = '2rem';
</script>

<style scoped lang="scss">
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
      color: transparent; /* 这里的颜色会影响到svg，需要注意默认会有个黑色 */
      .gender-img {
        padding: 3px;
        border: 2px solid transparent;
        &.active {
          border: 2px solid #e56a05;
        }
      }
      svg.active {
        border-radius: 50%;
        border: 0.05rem solid #e56a05;
      }
      &.active {
        /* color: #e56a05; */
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
