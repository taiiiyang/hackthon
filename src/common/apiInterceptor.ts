import { showNotify, showLoadingToast, closeToast } from 'vant';
import { InternalAxiosRequestConfig, AxiosResponse } from 'axios';
import type { ApiResponse } from './types';

let isLoading = true;
export const requestInterceptor = (config: InternalAxiosRequestConfig) => {
  if (typeof config.isLoading === 'boolean') {
    isLoading = config.isLoading;
  }
  isLoading &&
    showLoadingToast({
      forbidClick: true,
      message: '请求加载中',
    });
  config.headers.authorization = '';
  return config;
};

export const responseInterceptor = (response: AxiosResponse<ApiResponse>) => {
  isLoading && closeToast();
  if (response.data.rspCode === 200) {
    return response.data;
  } else {
    showNotify({ type: 'danger', message: response.data.rspDesc });
    return Promise.reject(new Error(response.data.rspDesc));
  }
};
