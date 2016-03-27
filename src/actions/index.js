import axios from 'axios';

export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const FETCH_RSS = 'FETCH_RSS';

const REGISTER_URL = '/api/user/register';
const LOGIN_URL = '/api/user/login';
const RSS_URL_BACK = '/api/feed/rss';

export function registerUser(props) {
  const request = axios.post(REGISTER_URL, { email: props.email, password: props.password })

  return {
    type: REGISTER_USER,
    payload: request
  };
}

export function loginUser(props) {
  const request = axios.post(LOGIN_URL, props);
  console.log('props is: ', props);
  return {
    type:LOGIN_USER,
    payload: request
  }
}

export function fetchRSS() {
  const request = axios.get(RSS_URL_BACK);
  
  return {
    type: FETCH_RSS,
    payload: request
  }
}
