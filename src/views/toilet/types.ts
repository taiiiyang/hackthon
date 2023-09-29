type Gender = 'men' | 'women';

// 每个坑位的占用信息
export type CellInfo = {
  id: number; // 厕所id
  type: boolean; // 占用状态
  time: string; // 占时
  floor: number; // 楼层
  gender: Gender; // 性别
  location: number; // 坑位
};

// 每层楼
export type FloorInfo = {
  man: [CellInfo, CellInfo, CellInfo];
  women: [CellInfo, CellInfo, CellInfo];
};

export type WholeFloor = Array<FloorInfo>;

export interface UserInfo {
  gender: Gender;
  floor: number;
  userName: string;
}
