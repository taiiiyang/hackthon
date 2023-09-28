<template>
  <div class="logistic-list" @click="toggleRoute(path)">
    <van-icon
      :name="props.icon"
      color="#6478d3"
      size="22"
      style="padding: 8px 0 15px 0"
    ></van-icon>
    <div class="logistic-title">
      <div>
        {{ props.title }}
      </div>
      <van-icon name="arrow" color="#676767" size="20"></van-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const props = defineProps({
  title: String,
  icon: String,
  path: {
    type: String,
    required: true,
  },
});
const router = useRouter();
const toggleRoute = (path: string) => {
  router.push(path);
};
</script>

<style lang="scss" scoped>
.logistic-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
  .logistic-title {
    padding: 5px 0 10px 0;
    border-bottom: 0.5px solid rgb(239, 236, 236);
    width: 88%;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
