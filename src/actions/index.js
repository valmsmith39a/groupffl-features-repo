import axios from 'axios';

export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const FETCH_RSS = 'FETCH_RSS';

const REGISTER_URL = '/api/user/register';
const LOGIN_URL = '/api/user/login';
const RSS_URL = 'https://api.fantasydata.net/nfl/v2/json/News'

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
  const configs = axios.create({
  url: RSS_URL,
  headers: {'Ocp-Apim-Subscription-Key': 'e3acbe9714fe444c9fa3aa1416c212f8'},
  data: "{body}"
});


const request = axios.get(configs);
  // e3acbe9714fe444c9fa3aa1416c212f8

  console.log(request);
  return {
    type: FETCH_RSS,
    payload: request
  }
}
