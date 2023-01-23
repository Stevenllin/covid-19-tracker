import { GetV3Covid19AllResp } from 'app/api/model/get/getV3Covid19All';
import { GetV3Covid19CountriesResp } from 'app/api/model/get/getV3Covid19Countries';

export interface GlobalState {
  worldwide: GetV3Covid19AllResp | null;
  countryDataList: GetV3Covid19CountriesResp[];
  countryList: string[];
}

/** Actions type constant */
export const GLOBAL__INIT_FETCH_GLOBAL_DATA = 'GLOBAL__INIT_FETCH_GLOBAL_DATA';
export const GLOBAL__INIT_FETCH_GLOBAL_DATA_DONE = 'GLOBAL__INIT_FETCH_GLOBAL_DATA_DONE';

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

export type GlobalActions =
    InitFetchGlobalDataAction
  | InitFetchGlobalDataDoneAction
