export interface SpinnerState {
  asyncSpinner: {
    count: number;
    visible: boolean;
  }
}

export const UI_SPINNERS__SET_ASYNC_SPINNER_VISIBLE = 'UI_SPINNERS__SET_ASYNC_SPINNER_VISIBLE';

export interface SetAsyncSpinnerVisibleAction {
  type: typeof UI_SPINNERS__SET_ASYNC_SPINNER_VISIBLE;
  payload: {
    isRequest: boolean;
  };
}

export type SpinnerActions =
  SetAsyncSpinnerVisibleAction