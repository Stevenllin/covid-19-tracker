import { combineReducers } from 'redux';
import globalReducer from './global/reducer';
import spinnerReducer from './spinner/reducer';


const rootReducer = combineReducers({
  global: globalReducer,
  spinner: spinnerReducer
});

export default rootReducer;
