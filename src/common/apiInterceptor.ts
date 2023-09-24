import { showNotify, showLoadingToast, closeToast } from 'vant';
import { InternalAxiosRequestConfig, AxiosResponse } from 'axios';
import type { ApiResponse } from './types';

export const requestInterceptor = (config: InternalAxiosRequestConfig) => {
  showLoadingToast({
    forbidClick: true,
    message: '请求加载中',
  });
  config.headers.authorization = '';
  return config;
};

export const responseInterceptor = (response: AxiosResponse<ApiResponse>) => {
  closeToast();
  if (response.data.rspCode === 200) {
    console.log('response', response);
    showLoadingToast;
    return response.data.data;
  } else {
    showNotify({
      type: 'danger',
      message: response.data.rspDesc,
    });
    return Promise.reject(new Error(response.data.rspDesc));
  }
};
