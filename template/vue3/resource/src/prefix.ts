import { overrideFetch } from './rapper/index';
import request from '@/request';

overrideFetch(async ({ url, method, params, extra }): Promise<any> => {
  return await request(url, { data: params, method, ...extra });
});
