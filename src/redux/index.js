import {
  createStore,
  // applyMiddleware,
  compose
} from 'redux';
// import thunkMiddleware from 'redux-thunk';
// import createSagaMiddleware from 'redux-saga';
// import { CookieStorage } from 'cookie-storage';

import rootReducer from './reducers';
// import sagas from './sagas';

// import { addInterceptor } from 'helpers/api-client';
// const sagaMiddleware = createSagaMiddleware();

// const cookieStorage = new CookieStorage();
// const authData = cookieStorage.getItem('p2p-auth');
const initialStates = {};
//
// if (authData) {
//   initialStates.auth = JSON.parse(authData);
//   addInterceptor(initialStates.auth.id);
// }

// applies thunk and custom middleware to store
const store = createStore(
  rootReducer,
  initialStates,
  compose(
    // applyMiddleware(sagaMiddleware, thunkMiddleware),
    process.env.NODE_ENV !== 'production' && window.devToolsExtension
      ? window.devToolsExtension()
      : f => f,
  ),
);

// sagaMiddleware.run(sagas);

export default store;
