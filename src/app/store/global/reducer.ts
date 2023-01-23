import { Reducer } from 'redux';
import { GlobalState, GlobalActions, GLOBAL__INIT_FETCH_GLOBAL_DATA_DONE } from './types';

const initialState: GlobalState = {
  worldwide: null
}

const globalReducer: Reducer<GlobalState, GlobalActions> = (state = initialState, action): GlobalState => {
  switch (action.type) {
    // 初始取得全域資料 完成
    case GLOBAL__INIT_FETCH_GLOBAL_DATA_DONE: {
      return { ...state, ...action.payload.response };
    }
    default: 
      return state
  }
}

export default globalReducer;
