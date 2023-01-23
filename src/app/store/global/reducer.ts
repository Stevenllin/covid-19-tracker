import { Reducer } from 'redux';
import { GlobalState, GlobalActions, GLOBAL__INIT_FETCH_GLOBAL_DATA_DONE } from './types';

const initialState: GlobalState = {
  worldwide: null,
  countryDataList: [],
  countryList: []
}

const globalReducer: Reducer<GlobalState, GlobalActions> = (state = initialState, action): GlobalState => {
  switch (action.type) {
    /** get the global data (Done) */
    case GLOBAL__INIT_FETCH_GLOBAL_DATA_DONE: {
      return { ...state, ...action.payload.response };
    }
    default: 
      return state
  }
}

export default globalReducer;
