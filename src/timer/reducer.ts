import { AnyAction } from 'redux';

import { TIMER_START_MAIN, TIMER_STOP_MAIN, TIMER_UPDATE_MAIN } from './actions';

const defaultState = {
  main: {
    started: false,
  },
};

export function timerReducer(state: TimerState = defaultState, action: AnyAction): TimerState {
  return {
    main: mainTimerReducer(state.main, action),
  };
}

function mainTimerReducer(state: MainTimerState = { started: false }, action: AnyAction): MainTimerState {
  const { started, timeLeft } = state;

  switch (action.type) {
    case TIMER_START_MAIN:
      return { started: true, timeLeft };
    case TIMER_STOP_MAIN:
      return { started: false, timeLeft };
    case TIMER_UPDATE_MAIN:
      return { started, timeLeft: action.timeLeft };
  }
  return state;
}

interface TimerState {
  main: MainTimerState;
}

interface MainTimerState {
  started: boolean;
  timeLeft?: number;
}
