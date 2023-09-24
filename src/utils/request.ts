import axios from 'axios';
import config from '@/config';
import {
  responseInterceptor,
  requestInterceptor,
} from '@/common/apiInterceptor';

const request = axios.create({
  baseURL: config.urlPrefix,
  timeout: 20000,
  headers: { 'Content-Type': 'application/json' },
});

request.interceptors.request.use(requestInterceptor);
request.interceptors.response.use(responseInterceptor);

export const getApi = (url: string, params?: object) =>
  request.get(url, params);

export const postApi = (url: string, params?: object) =>
  request.get(url, params);
