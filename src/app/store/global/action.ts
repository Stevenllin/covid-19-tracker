import { GlobalActions, GlobalState, GLOBAL__INIT_FETCH_GLOBAL_DATA, GLOBAL__INIT_FETCH_GLOBAL_DATA_DONE, GLOBAL__NAVIGATION_STATE } from './types';
import { NavigationStateValuesEnum } from 'app/core/enum/navigationStateValuesEnum';

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

/**
 * @description set the Navigation State
 * @param response Response
*/
export const setGlobalNavigationState = (navState: NavigationStateValuesEnum) => ({
  type: GLOBAL__NAVIGATION_STATE,
  payload: { navState }
});

