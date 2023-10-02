<template>
  <div class="repair-container">
    <maintain-title style="width: 85%" title="在线修理工"></maintain-title>
    <div v-if="!submitSuccess" class="repair-container">
      <van-form ref="form">
        <popup-picker
          class="floor-picker"
          :columns="floors()"
          label="楼层"
          placeholder="请选择楼层"
          @pick-confirm="floorPickCB"
        ></popup-picker>
        <popup-picker
          class="floor-picker"
          :columns="equips()"
          label="故障设备"
          placeholder="门、洗手池..."
          @pick-confirm="equipPickCB"
        ></popup-picker>
        <div class="desc-input">
          <div style="margin-bottom: 3px">故障描述</div>
          <van-field
            v-model="description"
            rows="4"
            autosize
            type="textarea"
            maxlength="60"
            placeholder="请输入..."
            show-word-limit
          ></van-field>
        </div>
        <div class="img-picker">
          <div style="margin-bottom: 3px">添加图片</div>
          <van-uploader v-model="imgList" multiple :max-size="10 * 1024 * 1024">
            <div class="img-btn">
              <van-button
                style="border-radius: 6px"
                square
                icon="plus"
                size="mini"
                color="#6478d3"
              ></van-button>
            </div>
          </van-uploader>
        </div>
        <div class="submit-btn">
          <van-button round color="#6478d3" size="normal" @click="submitRepairSheet">
            提交
          </van-button>
        </div>
      </van-form>
    </div>
    <div v-else class="success-wrapper">
      <svg-icon name="repair-success" :style="'flex: auto'" size="6rem"></svg-icon>
      <div class="submit-btn" @click="back">
        <van-button round color="#6478d3" size="normal">返回</van-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { PickerOption, UploaderFileListItem, FormInstance, showDialog } from 'vant';
import workSheetApi from '@/api/workSheet';
import { floors } from '@/views/logistic/logisticTypes';
import { useUserStore } from '@/store/user';

const userStore = useUserStore();

const pickFloor = ref<PickerOption>({
  text: '',
  value: -1,
});

const pickEquip = ref<PickerOption>({
  text: '',
  value: -1,
});

const description = ref('');

const imgList = ref<UploaderFileListItem[]>([]);

// 记得添加value
const equips = () => {
  const arr: PickerOption[] = [];
  arr.push(
    { text: '门' },
    { text: '洗手池' },
    { text: '小便池' },
    { text: '蹲坑' },
    { text: '水管' },
  );
  return arr;
};

const floorPickCB = (pickItem: PickerOption) => {
  pickFloor.value = pickItem;
};
const equipPickCB = (pickItem: PickerOption) => {
  pickEquip.value = pickItem;
};
// 表单提交与校验
const form = ref<FormInstance>();
const submitSuccess = ref(false); // 提交之后将该值变为true，点击返回按钮后将其置为false
const submitRepairSheet = async () => {
  try {
    await form.value?.validate();
    await showDialog({
      message: '确定提交该工单吗？',
      showCancelButton: true,
    });
    await workSheetApi.submitWorkSheet({
      floor: pickFloor.value.value as number,
      equip: pickEquip.value.value as string,
      info: description.value,
      imgList: imgList.value.map((item) => {
        return item.file;
      }) as File[],
      userId: userStore.userId,
    });
    submitSuccess.value = true;
  } catch (e) {
    return false;
  }
};
const back = () => {
  submitSuccess.value = false;
};
</script>

<style lang="scss" scoped>
.repair-container {
  height: 100%;
  flex: auto;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  height: fit-content;
  .floor-picker {
    width: 80%;
    margin: 0.5rem auto 0;
  }

  .desc-input {
    font-size: 10px;
    width: 80%;
    margin: 25px auto 0;
    :deep(.van-cell) {
      border: 2px solid var(--main-color);
      padding: 4px 4px 4px 6px;
      border-radius: 10px;
    }
    :deep(.van-field__body) {
      font-size: 12px;
    }
    :deep(.van-field__word-limit) {
      font-size: 8px;
    }
  }
  .img-picker {
    font-size: 10px;
    width: 80%;
    margin: 20px auto 0;
    .img-btn {
      width: 58px;
      height: 58px;
      border: 2px solid var(--main-color);
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      :deep(.van-button--mini) {
        width: 15px;
        height: 15px;
      }
    }
  }
  .submit-btn {
    width: 3rem;
    margin: 35px auto 0;
    display: flex;
    align-items: center;
    justify-content: center;
    :deep(.van-button) {
      font-size: 10px;
      padding: 0px 35px 0px 35px;
      height: 32px;
    }
  }

  .success-wrapper {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
