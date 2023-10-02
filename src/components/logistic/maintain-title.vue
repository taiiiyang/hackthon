<template>
  <div class="maintain-title">
    <van-icon
      name="arrow-left"
      size="21"
      style="font-weight: bolder"
      @click="backToLogistic"
    />
    <div>{{ title }}</div>
    <div style="width: 21px"></div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';

defineProps(['title']);
const router = useRouter();
const backToLogistic = () => {
  router.back();
};
</script>

<style lang="scss" scoped>
.maintain-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  margin: 25px auto 0;
  font-weight: bold;
  color: var(--main-color);
}
</style>
