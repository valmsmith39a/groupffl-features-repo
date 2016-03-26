import { combineReducers } from 'redux';
import RegisterReducer from './reducer_register_form';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer,
  register: RegisterReducer
});

export default rootReducer;
