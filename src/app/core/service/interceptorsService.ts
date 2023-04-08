import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import store from 'app/store';
import { setAsyncSpinnerVisibleAction } from 'app/store/spinner/action';

/**
 * @description set the global AJAX Request interceptor
*/
axios.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    config.baseURL = 'https://disease.sh';
    store.dispatch(setAsyncSpinnerVisibleAction(true));
    return config;
  },
  function (error) {
    store.dispatch(setAsyncSpinnerVisibleAction(false));
    return Promise.reject(error);
  }
)

/**
 * @description set the global AJAX Response interceptor
*/
axios.interceptors.response.use(
  function (response: AxiosResponse) {
    store.dispatch(setAsyncSpinnerVisibleAction(false));
    return response;
  },
  function (error) {
    store.dispatch(setAsyncSpinnerVisibleAction(false));
    return Promise.reject(error);
  }
);