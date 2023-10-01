import { getApi, postApi } from '@/utils/request';
import { BreakdownInfo, OrderList } from './types';

export default {
  // 获取所有工单
  getOrder: (params: { userId: number; role: number }) =>
    getApi<OrderList>('/api/breakdown.json', params),
  // 更新工单
  updateOrder: (params: BreakdownInfo) =>
    getApi('/api/updateOrder.json', params),
};
