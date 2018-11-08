import { ActionCreator } from 'redux';

export const TIMER_START_MAIN = 'TIMER_START_MAIN';
export const TIMER_STOP_MAIN = 'TIMER_STOP_MAIN';
export const TIMER_UPDATE_MAIN = 'TIMER_UPDATE_MAIN';

export function startMainTimer(): ActionCreator<void> {
  return dispatch => dispatch({ type: TIMER_START_MAIN });
}

export function stopMainTimer(): ActionCreator<void> {
  return dispatch => dispatch({ type: TIMER_STOP_MAIN });
}

export function updateMainTimer(timeLeft: number): ActionCreator<void> {
  return dispatch => dispatch({ type: TIMER_UPDATE_MAIN, timeLeft });
}
