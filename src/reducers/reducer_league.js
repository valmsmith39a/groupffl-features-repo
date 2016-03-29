import { CREATE_LEAGUE } from '../actions/index';
import { FETCH_LEAGUES } from '../actions/index';

const INITIAL_STATE = { all: [], league: null }

export default function (state = INITIAL_STATE, action) {

  switch(action.type) {
    case FETCH_LEAGUES:
      //return { ...state, post: action.payload.data}
      return { all: action.payload.data };
    case CREATE_LEAGUE:
      return { all: action.payload.data };
    default:
      return state;
  }
}
