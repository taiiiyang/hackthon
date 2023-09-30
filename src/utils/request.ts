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

export const getApi = <T>(
  url: string,
  params?: { [propName: string]: any },
  opt?: object,
) => {
  // let query = '';
  // if (params) {
  //   query = Object.keys(params)
  //     .map((key) => `${key}=${params[key]}`)
  //     .join('&');
  // }
  // if (query) return request.get<T>(`${url}?${query}`, opt);
  // else return request.get<T>(url, opt);
  return request.get<T>(url, opt);
};

export const postApi = <T>(url: string, params?: object, opt?: object) =>
  request.post<T>(url, params, opt);
