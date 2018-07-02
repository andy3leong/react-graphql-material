import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'
import { store, history } from 'store'
import Routes from './routes'
import apolloClient from './apollo'

import App from './App';
import registerServiceWorker from './registerServiceWorker';

/* Render app components */

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <Provider store={store}>
      <Routes history={history} />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
)

registerServiceWorker();
