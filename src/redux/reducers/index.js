import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import settings from './settings';

export default combineReducers({
  form: formReducer,
  settings,
});
