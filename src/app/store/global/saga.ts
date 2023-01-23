import { takeEvery, all, call, put } from 'redux-saga/effects';
import apiService from 'app/api/service/apiService';
import { GlobalState, GLOBAL__INIT_FETCH_GLOBAL_DATA } from './types';
import { initFetchGlobalDataDoneAction } from './action';

/**
 * @description initialize global data
 */
 function * initFetchGlobalData () {
  const response: GlobalState = yield all({
    worldwide: call(apiService.getV3Covid19All),
    countryDataList: call(apiService.getV3Covid19Countries)
  });
  const countryList = response.countryDataList.map((item) => item.country);
  const combineResponse = { ...response, countryList };
  yield put(initFetchGlobalDataDoneAction(combineResponse));
}


export default function * watchGlobalSaga () {
  yield takeEvery(GLOBAL__INIT_FETCH_GLOBAL_DATA, initFetchGlobalData);
}
  