import axios from 'axios';

import { getAccessToken } from '../services';

export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const TOKEN_KEY = 'token';

axios.defaults.baseURL = API_URL;

axios.interceptors.request.use(config => {
  if (typeof window !== 'undefined') {
    const token = getAccessToken();

    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
  }

  return config;
});

export * from 'axios';

export default axios;
