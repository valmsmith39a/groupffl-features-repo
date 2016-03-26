import { LOGIN_USER } from '../actions/index';

const INITIAL_STATE = { login: null }

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case LOGIN_USER:
      console.log(action.payload);
      return { login: action.payload}
  default:
    return state;
  }
}
