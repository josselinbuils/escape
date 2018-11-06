import { ActionCreator } from 'redux';

export function simpleAction(): ActionCreator<void> {
  return dispatch => {
    dispatch({
      type: 'SIMPLE_ACTION',
      payload: 'result_of_simple_action',
    });
  };
}
