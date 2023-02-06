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
    continentDataList: call(apiService.getV3Covid19Continents),
    countryDataList: call(apiService.getV3Covid19Countries),
  });
  const countryList = response.countryDataList.map(item => {
    return {
      country: item.country,
      population: item.population,
      continent: item.continent,
      cases: item.cases,
      casesPerOneMillion: item.casesPerOneMillion,
      todayCases: item.todayCases,
      deaths: item.deaths,
      deathsPerOneMillion:  item.deathsPerOneMillion,
      todayDeaths:  item.todayCases,
      recovered:  item.recovered,
      recoveredPerOneMillion: item.recoveredPerOneMillion,
      todayRecovered: item.todayRecovered,
      countryInfo: {
        flag: item.countryInfo.flag,
        lat:  item.countryInfo.lat,
        long: item.countryInfo.long
      }
    }
  });
  const continentList = response.continentDataList.map(item => item.continent);
  const combineResponse = { ...response, countryList, continentList };
  yield put(initFetchGlobalDataDoneAction(combineResponse));
}

export default function * watchGlobalSaga () {
  yield takeEvery(GLOBAL__INIT_FETCH_GLOBAL_DATA, initFetchGlobalData);
}
  