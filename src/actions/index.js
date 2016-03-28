import axios from 'axios';

export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const CREATE_LEAGUE = 'CREATE_LEAGUE';
export const JOIN_LEAGUE = 'JOIN_LEAGUE';
export const FETCH_LEAGUES = 'FETCH_LEAGUES';

const REGISTER_URL = '/api/user/register';
const LOGIN_URL = '/api/user/login';
const CREATE_LEAGUE_URL = '/api/league';
const JOIN_LEAGUE_URL = '/api/team';
const FETCH_LEAGUES_URL = '/api/league';

export function registerUser(props) {
  const request = axios.post(REGISTER_URL, { email: props.email, password: props.password })

  return {
    type: REGISTER_USER,
    payload: request
  };
}

export function loginUser(props) {
  const request = axios.post(LOGIN_URL, props);

  return {
    type: LOGIN_USER,
    payload: request
  }
}

export function createLeague(props) {
  const request = axios.post(CREATE_LEAGUE_URL, props);

  return {
    type: CREATE_LEAGUE,
    payload: request
  }
}

export function joinLeague(props) {
  const request = axios.post(JOIN_LEAGUE_URL, props);

  return {
    type: JOIN_LEAGUE,
    payload: request
  }
}

export function fetchLeagues(props) {
    const request = axios.get(FETCH_LEAGUES_URL);

    return {
      type: FETCH_LEAGUES,
      payload: request
    }
}
