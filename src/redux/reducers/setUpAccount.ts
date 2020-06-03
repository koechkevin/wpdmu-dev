import { AccountSetUp, Action } from '../interfaces';
import { LOAD_SUBMITTING } from '../actionTypes';

const initialState: AccountSetUp = {
  submitting: false,
};
export default (state = initialState, action: Action): AccountSetUp => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_SUBMITTING:
      return { ...state, submitting: payload };
    case '':
      return state;
    default:
      return state;
  }
};
