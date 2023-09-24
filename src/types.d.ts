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
  userId: 'string';
};
