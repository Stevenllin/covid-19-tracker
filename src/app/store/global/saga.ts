import { takeEvery, all, call, put } from 'redux-saga/effects';
import apiService from 'app/api/service/apiService';
import { sagaBoundary } from '../service';
import { GlobalState, GLOBAL__INIT_FETCH_GLOBAL_DATA } from './types';
import { initFetchGlobalDataDoneAction } from './action';

/**
 * @description 初始取得全域資料
 */
 function * initFetchGlobalData () {
  console.log('test');
  const response: GlobalState = yield all({
    worldwide: call(apiService.getV3Covid19All)
  });
  yield put(initFetchGlobalDataDoneAction(response));
}


export default function * watchGlobalSaga () {
  yield takeEvery(GLOBAL__INIT_FETCH_GLOBAL_DATA, initFetchGlobalData);
}
  