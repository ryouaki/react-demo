import {
  INIT_APPICATION
} from './../actions';

const INITIAL_STATE = {

};

export default function (state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case INIT_APPICATION:
    {
      return { ...action.data };
    }
    default:
      return { ...state };
  }
}