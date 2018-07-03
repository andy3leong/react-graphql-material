import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createHashHistory';

import store from './redux';
import Routes from './routes'
import apolloClient from './apollo'

import registerServiceWorker from './registerServiceWorker';

const history = createHistory();

/* Render app components */
ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes history={history} />
      </ConnectedRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
)

registerServiceWorker();
