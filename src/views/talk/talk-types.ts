export type Comment = {
  comment: string;
  commentId: number;
  thumb: boolean; // 是否点赞
  likes: number;
};

// 分页统一响应体
export type FenyeResponse<T> = {
  pageSize: number;
  pageNum: number;
  total: number;
  totalPage: number;
  data: T;
};
