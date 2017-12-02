import {
  APPICATION_INIT,
  APPLICATION_CHANGE
} from './../actions';

const INITIAL_STATE = {
  isFetching: true
};

export default function (state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case APPICATION_INIT:
    {
      return INITIAL_STATE;
    }
    case APPLICATION_CHANGE:
    {
      return action.data;
    }
    default:
      return { ...state };
  }
}