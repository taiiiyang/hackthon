<template>
  <div class="picker">
    <div class="picker-label">{{ label }}</div>
    <van-field
      v-model="pickItem.text"
      :rules="[{ required: true, message: `${label}必选` }]"
      readonly
      :placeholder="placeholder"
      @click="showPicker = true"
    ></van-field>
    <van-popup v-model:show="showPicker" round position="bottom">
      <van-picker
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="pickConfirm"
      />
    </van-popup>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue';
import { PickerOption } from 'vant';
import { PickerConfirmEventParams } from 'vant/lib/picker/types';

defineProps({
  columns: {
    type: Array<PickerOption>,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
});
const emit = defineEmits(['pickConfirm']);
const showPicker = ref(false);
let pickItem = reactive<PickerOption>({
  text: '',
  value: -1,
});

const pickConfirm = ({ selectedOptions }: PickerConfirmEventParams) => {
  pickItem = selectedOptions[0] ? selectedOptions[0] : { text: '1楼', value: 1 };
  showPicker.value = false;
  emit('pickConfirm', pickItem);
};
</script>

<style lang="scss" scoped>
.picker {
  .picker-label {
    font-size: 12px;
    margin-bottom: 3px;
  }
  .picker-label:before {
    margin-right: 2px;
    color: var(--van-field-required-mark-color);
    content: '*';
  }
  :deep(.van-cell) {
    padding: 0;
  }

  :deep(.van-field__body) {
    /* 边框显示在正确的位置，防止校验的提示出现在错误的地方 */
    font-size: 12px;
    border: 0.05333rem solid var(--main-color);
    padding: 2px 0 2px 6px;
    border-radius: 8px;
  }
}
</style>
