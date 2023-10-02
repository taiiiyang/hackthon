<template>
  <div class="floor-picker">
    请选择办公楼层
    <van-picker
      visible-option-num="3"
      swipe-duration="500"
      v-model="selectedFloor"
      @scroll-into="scrollInto"
      :columns="floors()"
    ></van-picker>
  </div>
</template>

<script setup lang="ts">
import { floors } from '@/views/logistic/logisticTypes.ts';
import { PickerOption } from 'vant';
import { useUserStore } from '@/store/user';
import { ref, onMounted } from 'vue';

const props = defineProps<{
  mode: string;
}>();

const emit = defineEmits(['floorChange']);
const userStore = useUserStore();
const selectedFloor = ref<number[]>([1]);
const floor = ref<PickerOption>({
  text: '1楼',
  value: 1,
});

onMounted(() => {
  // 编辑时才需要回显
  if (props.mode === 'update') {
    floor.value.value = userStore.floor;
    floor.value.text = userStore.floor + '楼';
    selectedFloor.value = [floor.value.value];
  }
});

const scrollInto = (currentInfo: { currentOption: PickerOption }) => {
  const option: PickerOption = currentInfo.currentOption;
  emit('floorChange', option);
};
</script>

<style lang="scss" scoped>
.floor-picker {
  font-size: 12px;
  text-align: left;
  color: var(--main-color);
  font-weight: bold;
  :deep(.van-picker__toolbar) {
    display: none;
  }
  :deep(.van-picker-column__item) {
    font-size: 12px;
    color: var(--main-color);
    font-weight: bold;
  }
  :deep(.van-picker-column__item--selected) {
    color: #e56a05;
  }
  :deep(.van-picker__frame) {
    border-top: 1px solid #e56a05;
    border-bottom: 1px solid #e56a05;
  }
}
</style>
