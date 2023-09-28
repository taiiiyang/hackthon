<template>

  <maintain-title style="width: 85%" title="修改信息"></maintain-title>
  <gender-picker style="width: 80%;margin-top: 45px" @gender-pick="genderPick"></gender-picker>
  <floor-picker ref="fp" style="width: 80%;margin:50px auto 0" @floor-change="floorChange"></floor-picker>
  <div class="submit-area">
    <div>
      优先为您展示合适的厕所
    </div>
    <div class="submit-btn" @click="submit">
      <van-button  round color="#6478d3" size="normal" >提交</van-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {getState} from "@/store/user/state.ts";
import {PickerOption} from "vant";
import userInfo from "@/api/userInfo.ts"
const userState = getState()
const gender = ref<number>(-1)
const floor = ref(-1)
const fp = ref<any>(null)

gender.value = userState.gender
floor.value = userState.floor

const genderPick = (g:number)=>{
  gender.value = g
  console.log("receive gender:"+gender.value)
}

const floorChange = (pickItem:PickerOption)=>{
  floor.value = <number>pickItem.value ? <number>pickItem.value : userState.floor
}
const submit = ()=> {
  // floor.value = fp.value.floorList.value[0]
  console.log(fp.value.floorList.value[0])
  userInfo.updateUserInfo({userId:userState.userId,floor:floor.value,gender:gender.value})

}

</script>



<style lang="scss" scoped>
  .submit-area{
    width: 80%;
    font-size: 8px;
    text-align: center;
    margin: 65px auto 0;
    color: var(--main-color);
    .submit-btn{
      margin-top: 10px;
      :deep(.van-button){
        font-size: 10px;
        padding: 0px 35px 0px 35px;
        height: 32px;
      }
    }
  }

</style>