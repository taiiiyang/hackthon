<template>
  <div class="floor-picker">
    请选择办公楼层
    <van-picker
        visible-option-num="3"
        swipe-duration="500"
        v-model="floorList"
        @scroll-into=""
      :columns="floors()"></van-picker>
  </div>
</template>

<script setup lang="ts">
import {floors} from "@/views/logistic/logisticTypes.ts";
// import {PickerOption} from "vant";
import {getState} from "@/store/user/state.ts";
import {ref} from "vue";

const userState = getState()
// const floor = ref<PickerOption>({
//   text: '',
//   value: -1
// })
// floor.value.value = userState.floor
// floor.value.text = userState.floor+ '楼'

const floorList = ref<number[]>([userState.floor])

//todo 将floor使用scroll-into传到父组件
defineExpose({
  floorList
})
</script>



<style lang="scss" scoped>
  .floor-picker{
    font-size:12px;
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
    :deep(.van-picker__frame){
      border-top: 1px solid #e56a05;
      border-bottom: 1px solid #e56a05;
    }

  }
</style>