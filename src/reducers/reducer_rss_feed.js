import { FETCH_RSS } from '../actions/index';

const INITIAL_STATE = { rss: 'test' };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FETCH_RSS:
    console.log(action.payload);
    return { rss: action.payload }
  default:
    return state;
  }
}
