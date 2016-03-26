import axios from 'axios';

export const REGISTER_USER = 'REGISTER_USER';

const REGISTER_URL = '/api/user/register';

export function registerUser(props) {
  const request = axios.post(REGISTER_URL, { email: props.email, password: props.password })

  return {
    type: REGISTER_USER,
    payload: request
  };
}
