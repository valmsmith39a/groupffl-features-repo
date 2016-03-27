import axios from 'axios';

export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const CREATE_LEAGUE = 'CREATE_LEAGUE';

const REGISTER_URL = '/api/user/register';
const LOGIN_URL = '/api/user/login';
const CREATE_LEAGUE_URL = '/api/league';

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
    type:LOGIN_USER,
    payload: request
  }
}

export function createLeague(props) {
  const request = axios.post(CREATE_LEAGUE_URL, props);
  console.log(props);
  console.log(request);
  
  return {
    type:CREATE_LEAGUE,
    payload: request
  }
}
