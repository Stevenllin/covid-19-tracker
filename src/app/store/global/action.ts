import { GlobalActions, GlobalState, GLOBAL__INIT_FETCH_GLOBAL_DATA, GLOBAL__INIT_FETCH_GLOBAL_DATA_DONE } from './types';

/**
 * @description initialize the global data
*/
export const initFetchGlobalDataAction = (): GlobalActions => ({
  type: GLOBAL__INIT_FETCH_GLOBAL_DATA
});

/**
 * @description initialize the global data (Done)
 * @param response Response
 */
export const initFetchGlobalDataDoneAction = (response: GlobalState): GlobalActions => ({
  type: GLOBAL__INIT_FETCH_GLOBAL_DATA_DONE,
  payload: { response }
});
