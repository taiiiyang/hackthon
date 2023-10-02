import { getApi, postApi } from '@/utils/request';

export default {
  // 获取用户信息
  getUserInfo: (params: { userId: number }) =>
    getApi<UserInfo>('/api/userInfo.json', params),
  updateUserInfo: (params: Omit<UserInfo, 'role'>) =>
    postApi('/api/userInfo.json', params),
  // 注册
  login: (params: Omit<UserInfo, 'role'>) => getApi<UserInfo>('/api/login.json', params),
};
