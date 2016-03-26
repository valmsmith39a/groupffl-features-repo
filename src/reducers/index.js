import { combineReducers } from 'redux';
import RegisterReducer from './reducer_register_form';
import LoginReducer from './reducer_login_form';

import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer,
  register: RegisterReducer,
  login: LoginReducer
});

export default rootReducer;
