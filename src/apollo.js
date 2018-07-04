import ApolloClient from 'apollo-client';
import { HttpLink, InMemoryCache } from 'apollo-boost';
import { apiBackendUrl /*, apiAuthKey*/ } from './config';

const client = new ApolloClient({
  link: new HttpLink({
    uri: `${apiBackendUrl}`,
    headers: {
      // Authorization: `Basic ${apiAuthKey}`
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
