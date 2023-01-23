import { GlobalActions, GlobalState, GLOBAL__INIT_FETCH_GLOBAL_DATA, GLOBAL__INIT_FETCH_GLOBAL_DATA_DONE } from './types';

/**
 * @description 初始取得全域資料 (Action)
*/
export const initFetchGlobalDataAction = (): GlobalActions => ({
  type: GLOBAL__INIT_FETCH_GLOBAL_DATA
});

/**
 * @description 初始取得全域資料 完成 (Action)
 * @param response 請求回傳的 Response
 */
export const initFetchGlobalDataDoneAction = (response: GlobalState): GlobalActions => ({
  type: GLOBAL__INIT_FETCH_GLOBAL_DATA_DONE,
  payload: { response }
});
