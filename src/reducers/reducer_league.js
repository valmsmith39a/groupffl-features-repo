import { CREATE_LEAGUE } from '../actions/index';
import { FETCH_LEAGUES } from '../actions/index';

const INITIAL_STATE = { all: [], league: null }

export default function (state = INITIAL_STATE, action) {
  console.log('action.payload', action.payload);
  switch(action.type) {
    case FETCH_LEAGUES:
      console.log(action.payload)
      //return { ...state, post: action.payload.data}
      return { all: action.payload.data };
    default:
      return state;
  }
}

//case CREATE_LEAGUE:
//  return { league: action.payload };
