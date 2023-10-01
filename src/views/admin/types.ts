export type BreakdownInfo = {
  floor: number;
  gender: Gender;
  pit?: number;
  equipment: string;
  status: ORDER_STATUS;
  imgList: string[];
  info: string; // 故障描述
  id: number; // 工单id
  tmCreate: string;
};

export type OrderList = BreakdownInfo[];

export enum Gender {
  '男' = 0,
  '女' = 1,
}
// 工单
export enum ORDER_STATUS {
  'WAIT_PROCESS' = 'wait-process',
  'PROCESSING' = 'processing',
  'DONE' = 'done',
  'wait-process' = 'WAIT_PROCESS',
  'processing' = 'PROCESSING',
  'done' = 'DONE',
}
