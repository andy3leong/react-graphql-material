import React from 'react';
import { Query } from 'react-apollo';
import { checkVerify } from 'components/gqls';
import { CookieStorage } from 'cookie-storage';
const cookieStorage = new CookieStorage({
  path: '/',
});

export const requireLogged = WrappedComponent => props => {
  const token = cookieStorage.getItem('p2p-auth');

  if (!token) {
    props.history.replace('/login');
    return false;
  }

  return (
    <Query query={checkVerify} variables={{ token }}>
      {({ loading, error, data }) => {
        if (loading) return false;
        if (error) {
          cookieStorage.removeItem('p2p-auth');
          props.history.replace('/login');
          return false;
        }
        if (!data.Verify) {
          cookieStorage.removeItem('p2p-auth');
          props.history.replace('/login');
          return false;
        }

        return <WrappedComponent {...props} currentUser={data.Verify} />;
      }}
    </Query>
  );
};

export const visitorsOnly = WrappedComponent => props => {
  const token = cookieStorage.getItem('p2p-auth');

  if (token) {
    props.history.replace('/app/dashboard');
    return false;
  }
  return <WrappedComponent {...props} />;
};
