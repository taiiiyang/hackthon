<template>
  <div class="help-container">
    <maintain-title style="width: 85%" title="阿姨帮帮忙"></maintain-title>
    <popup-picker
        style="width: 80%;margin: 40px auto 0"
        :columns="floors()"
        label="楼层"
        @pick-confirm="floorPickConfirm"
        placeholder="请选择楼层" ></popup-picker>
    <div class="help-options">
      <div class="help-option" @click="submit('lack')">
        <van-image
            class="help-image"
            width="138px" height="154px"
            radius="8"
            src="src/assets/logistic/help/paper.png">
        </van-image>
        <div class="help-text">没有物料啦！</div>
      </div>
      <div class="help-option" @click="submit('clean')">
        <van-image
            class="help-image"
            width="138px" height="154px"
            radius="8"
            src="src/assets/logistic/help/broom.png">
        </van-image>
        <div  class="help-text">需要打扫啦!</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {floors} from "@/views/logistic/logisticTypes.ts";
import {PickerOption} from "vant";
import {ref} from "vue";
import workSheet from "@/api/workSheet.ts";

const floor = ref(-1)
const floorPickConfirm = (pickOption:PickerOption)=>{
  floor.value = <number>pickOption.value
}

const submit = (type:string)=>{
  workSheet.submitHelpSheet({floor:floor.value,type:type})
}
</script>



<style scoped>
  .help-container{
    .help-options{
      width: 80%;
      margin: 25px auto 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .help-option{
        border-radius: 16px;
        font-size: 16px;
        background-color: #f5f5f5;
        position: relative;
        .help-text{
          font-size: 10px;
          color: var(--main-color);
          position: absolute;
          text-align: center;
          white-space: nowrap;
          bottom: 0%; /* 将文字垂直居中 */
          left: 50%; /* 将文字水平居中 */
          transform: translate(-50%, -50%);
        }
      }
    }
  }
</style>