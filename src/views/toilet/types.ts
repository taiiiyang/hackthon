export type Gender = 0 | 1;

// 每个坑位的占用信息
export type CellInfo = {
  id: number; // 厕所id
  status: number; // 占用状态
  time: string; // 占时
  floor: number; // 楼层
  order: number; // 坑位
};

// 每层楼
export type FloorInfo = [CellInfo, CellInfo, CellInfo];

export type WholeFloor = {
  [propName: string]: FloorInfo;
};

export enum PIT_STATUS {
  '空闲' = 1,
  '占用' = 2,
  '故障' = 3,
}
