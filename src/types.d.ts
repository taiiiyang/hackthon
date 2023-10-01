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
  role: number;
};

// 分页统一响应体
declare type PaginationResponse<T> = {
  pageSize: number;
  pageNum: number;
  total: number;
  totalPage: number;
  data: T;
};

declare module legoPhotoPreview {}
