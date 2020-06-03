import { Dispatch } from 'redux';
import { LOAD_SUBMITTING } from '../actionTypes';

export const submit = (data: any, dispatch: Dispatch, callBack?: () => void): void => {
  dispatch({ type: LOAD_SUBMITTING, payload: true });
  setTimeout(() => {
    callBack && callBack();
    dispatch({ type: LOAD_SUBMITTING, payload: false });
  }, 1500);
};
