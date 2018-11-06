import { Action } from 'redux';

export default function (state: any = {}, action: SimpleAction): object {
  switch (action.type) {
    case 'SIMPLE_ACTION':
      return { result: action.payload };
    default:
      return state;
  }
}

interface SimpleAction extends Action {
  payload: object;
}
