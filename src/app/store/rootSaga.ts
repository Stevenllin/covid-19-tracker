import { all, spawn } from 'redux-saga/effects';
import watchGlobalSaga from './global/saga';

export default function * rootSaga () {
  yield all([
    spawn(watchGlobalSaga)
  ]);
};
