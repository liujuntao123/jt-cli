import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { notification } from 'ant-design-vue';
import { proxyEnv } from '@/config';

const baseURL = process.env.NODE_ENV === 'development' ? `/api/${proxyEnv}` : '';

export const axios = Axios.create({
  baseURL: baseURL,
  withCredentials: true, // set cross-origin
  headers: {
    'Content-Type': 'application/json',
  },
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    if (err.response.status === 401) {
      location.reload();
      throw new Error('未登录');
    }
    if (err.response.status === 403) {
      notification.error({
        message: `无权限`,
        description: '抱歉，无操作权限',
      });
    } else {
      notification.error({
        message: `系统错误`,
        description: err.response.config.url,
      });
    }
    throw err;
  }
);

interface Options {
  method?: AxiosRequestConfig['method'];
  data?: AxiosRequestConfig['data'];
  useError?: boolean;
}

function request(url: string, options: Options = {}): Promise<AxiosResponse<any>> {
  const { method = 'GET', data = {}, useError = true } = options;
  return axios({
    url,
    method,
    params: method === 'GET' ? data : undefined,
    data: ['PUT', 'POST', 'DELETE'].includes(method) ? data : undefined,
  } as AxiosRequestConfig)
    .then((res) => {
      if (useError && res.data.errorCode === '-500') {
        notification.error({
          message: '系统错误',
          description: `${res.config.url}: ${res.data.errorMessage}`,
        });
        throw new Error(res.data);
      }

      return res.data;
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
}

export default request;
