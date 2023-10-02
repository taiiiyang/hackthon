import { WorkSheet } from '@/views/logistic/logisticTypes.ts';
import { postApi } from '@/utils/request.ts';

export default {
  submitWorkSheet: (params: WorkSheet) => {
    return postApi('api/workSheet.json', params);
  },
  submitHelpSheet: (params: { floor: number; type: string }) => {
    return postApi('api/helpSheet.json', params);
  },
};
