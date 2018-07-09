import * as types from '../constants';

export function setUser(userData) {
  return { type: types.SET_USER, userData };
}

export function unsetUser() {
  return { type: types.UNSET_USER };
}
