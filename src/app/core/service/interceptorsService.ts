import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

/**
 * @description set the global AJAX Request interceptor
*/
axios.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    config.baseURL = 'https://disease.sh';
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
)

/**
 * @description set the global AJAX Response interceptor
*/