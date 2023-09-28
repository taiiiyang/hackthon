import { getApi, postApi } from '@/utils/request';

export default {
  // 获取用户信息
  getDanmu: <T>() => getApi<T>('/api/danmu.json'),
  // 注册
  login: (params: UserInfo) => postApi('/api/login.json', params),
};
