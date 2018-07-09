import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import { Router } from 'react-router';
import createHistory from 'history/createBrowserHistory';

import store from './redux';
import Routes from './routes';
import apolloClient from './apollo';

import registerServiceWorker from './registerServiceWorker';

const history = createHistory();

/* Render app components */
ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root'),
);

registerServiceWorker();
