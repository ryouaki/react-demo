import {
  APPICATION_INIT,
  APPLICATION_CHANGE
} from './index';

export const initApplication = () => {
  return {
    type: APPICATION_INIT
  }
}

export const showLoading = (show = true) => {
  return ( dispatch, getState ) => {
    let state = getState().common || {};
    state.isFetching = show;
    dispatch({
      type: APPLICATION_CHANGE,
      data: state
    })
  }
}
