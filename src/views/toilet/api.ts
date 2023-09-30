import { getApi, postApi } from '@/utils/request';
import { WholeFloor } from './types';
export default {
  // 获取整个厕所的信息
  getToiletInfo: (params: { gender: number; userId: number; floor: number }) =>
    getApi<WholeFloor>('/api/toiletInfo.json', params, { isLoading: false }),
};
