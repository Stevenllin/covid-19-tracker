import { Reducer } from 'redux';
import { UI_SPINNERS__SET_ASYNC_SPINNER_VISIBLE, SpinnerState, SpinnerActions } from './types';

const initialState: SpinnerState = {
  asyncSpinner: {
    count: 0,
    visible: false
  }
};

const spinnerReducer: Reducer<SpinnerState, SpinnerActions> = (state = initialState, action): SpinnerState => {
  switch (action.type) {
    case UI_SPINNERS__SET_ASYNC_SPINNER_VISIBLE: {
      const count = action.payload.isRequest
        ? state.asyncSpinner.count + 1
        : state.asyncSpinner.count - 1;
      const visible = !!count;
      return { asyncSpinner: { count, visible }  };
    }
    default:
      return state;
  }
};

export default spinnerReducer;
