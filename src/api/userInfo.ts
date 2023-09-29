import { getApi, postApi } from '@/utils/request';

export default {
  // 获取用户信息
  getUserInfo: <T>(params: { userId: string }) =>
    getApi<T>('/api/userInfo.json', params),
  updateUserInfo: (params: { userId: string; floor: number; gender: number }) =>
    postApi('/api/userInfo.json', params),
  // 注册
  login: (params: UserInfo) => postApi('/api/login.json', params),
};
