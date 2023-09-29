import { getApi, postApi } from '@/utils/request';

export default {
  // 获取热评
  getDanmu: <T>() => getApi<T>('/api/danmu.json'),
  // 获取评论信息
  getComments: <T>(params: {
    userId: number;
    pageSize: number;
    pageNum: number;
  }) => postApi<T>('/api/comments.json', params),
  // 发送评论
  sendComments: (params: { userId: number; comment: string }) =>
    postApi('/api/sendComment.json', params),
  // 点赞
  sendThumb: (params: { commentId: number; userId: number }) =>
    postApi('/api/sendThumb.json', params),
};
