<template>
  <div class="container">
    <van-tabbar
      placeholder
      :fixed="false"
      v-model="active"
      @change="$emit('changeActive', active)"
    >
      <van-tabbar-item
        v-for="component in componentMap"
        :key="component.title"
        :name="component.icon"
      >
        <span>{{ component.title }}</span>
        <template #icon="props">
          <svg-icon
            :name="
              active === component.icon ? `${component.icon}-click` : `${component.icon}`
            "
          ></svg-icon>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ORDER_STATUS } from '../types';

const active = ref(ORDER_STATUS.WAIT_PROCESS);

const componentMap = ref([
  { title: '待处理', icon: ORDER_STATUS.WAIT_PROCESS },
  { title: '处理中', icon: ORDER_STATUS.PROCESSING },
  { title: '已完成', icon: ORDER_STATUS.DONE },
]);

defineExpose({
  active,
});
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;

  :deep(.van-tabbar) {
    box-sizing: border-box;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-image: url('../../../../src/assets/common/admin-background.webp');
  }

  :deep(.van-tabbar-item--active) {
    background-color: transparent;
  }
}
</style>
