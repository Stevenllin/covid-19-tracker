import { GetV3Covid19AllResp } from 'app/api/model/get/getV3Covid19All';
import { GetV3Covid19CountriesResp } from 'app/api/model/get/getV3Covid19Countries';
import { NavigationStateValuesEnum } from 'app/core/enum/navigationStateValuesEnum';

export interface GlobalState {
  worldwide: GetV3Covid19AllResp | null;
  countryDataList: GetV3Covid19CountriesResp[];
  countryList: string[];
  navigationState: NavigationStateValuesEnum;
}

/** Actions type constant */
export const GLOBAL__INIT_FETCH_GLOBAL_DATA = 'GLOBAL__INIT_FETCH_GLOBAL_DATA';
export const GLOBAL__INIT_FETCH_GLOBAL_DATA_DONE = 'GLOBAL__INIT_FETCH_GLOBAL_DATA_DONE';
export const GLOBAL__NAVIGATION_STATE = 'GLOBAL__NAVIGATION_STATE';

/** Action creators type */ 
export interface InitFetchGlobalDataAction {
  type: typeof GLOBAL__INIT_FETCH_GLOBAL_DATA;
}

export interface InitFetchGlobalDataDoneAction {
  type: typeof GLOBAL__INIT_FETCH_GLOBAL_DATA_DONE;
  payload: {
    response: GlobalState;
  };
}

export interface SetGlobalNavigationState {
  type: typeof GLOBAL__NAVIGATION_STATE;
  payload: {
    navState: NavigationStateValuesEnum;
  }
}

export type GlobalActions =
    InitFetchGlobalDataAction
  | InitFetchGlobalDataDoneAction
  | SetGlobalNavigationState
