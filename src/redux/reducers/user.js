import { SET_USER, UNSET_USER } from '../constants';

const initialSettings = {
  _id: null,
  name: null,
  email: null,
};

export default (state = initialSettings, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...action.userData,
      };
    case UNSET_USER:
      return {
        ...initialSettings,
      };
    default:
      return state;
  }
};
