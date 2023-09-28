// WorkSheet工单类型定义
import { PickerOption } from 'vant';

export type WorkSheet = {
  userId: string;
  floor: number;
  equip: string;
  info: string;
  imgList: File[];
};

export const floors = () => {
  let arr: PickerOption[] = [];
  for (let i = 1; i <= 13; i++) {
    arr.push({
      text: i + '楼',
      value: i,
    });
  }
  return arr;
};
