import { UI_SPINNERS__SET_ASYNC_SPINNER_VISIBLE, SpinnerActions } from './types';

export const setAsyncSpinnerVisibleAction = (isRequest: boolean): SpinnerActions => ({
  type: UI_SPINNERS__SET_ASYNC_SPINNER_VISIBLE,
  payload: { isRequest }
});
