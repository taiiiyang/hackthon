declare type GConfig = {
  urlPrefix: string;
  assetsPrefix: string;
  platformKey: string;
  ssoBaseUrl: string;
};

declare type GConfigGather = {
  [key: string]: GConfig;
};

declare type UserInfo = {
  gender: 0 | 1;
  floor: number;
  userId: number;
};

// 分页统一响应体
declare type FenyeResponse<T> = {
  pageSize: number;
  pageNum: number;
  total: number;
  totalPage: number;
  data: T;
};
