import { GET_ERRORS } from '../actions/types';

const intialState = {
  isAuthenticated: false,
  user: {}
};

export default function combineReducer(state = intialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
}