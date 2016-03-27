import { CREATE_LEAGUE } from '../actions/index';

const INITIAL_STATE = { league: null }

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case CREATE_LEAGUE:
      console.log(action.payload);
      return { league: action.payload };
    default:
      return state;
  }
}
