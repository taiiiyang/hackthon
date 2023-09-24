export type ApiResponse<T = any> = {
  rspCode: number;
  rspDesc: string;
  data?: T;
};
