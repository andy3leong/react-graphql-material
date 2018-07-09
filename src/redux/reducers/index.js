import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import settings from './settings';
import user from './user';

export default combineReducers({
  form: formReducer,
  settings,
  user,
});
