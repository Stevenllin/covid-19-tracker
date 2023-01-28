import { Reducer } from 'redux';
import { GlobalState, GlobalActions, GLOBAL__INIT_FETCH_GLOBAL_DATA_DONE, GLOBAL__NAVIGATION_STATE } from './types';
import { NavigationStateValuesEnum } from 'app/core/enum/navigationStateValuesEnum';

const initialState: GlobalState = {
  worldwide: null,
  countryDataList: [],
  countryList: [],
  navigationState: NavigationStateValuesEnum.Cases
}

const globalReducer: Reducer<GlobalState, GlobalActions> = (state = initialState, action): GlobalState => {
  switch (action.type) {
    /** get the global data (Done) */
    case GLOBAL__INIT_FETCH_GLOBAL_DATA_DONE: {
      return { ...state, ...action.payload.response };
    }
    case GLOBAL__NAVIGATION_STATE: {
      return { ...state, navigationState: action.payload.navState }
    }
    default: 
      return state
  }
}

export default globalReducer;
