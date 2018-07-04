import React from 'react';
import { Query } from 'react-apollo';
import { checkVerify } from 'components/gqls';
import { CookieStorage } from 'cookie-storage';
const cookieStorage = new CookieStorage({
  path: '/',
});

export const requiredLogged = WrappedComponent => props => {
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

        // {
        //   "data": {
        //     "Verify": {
        //       "_id": "5b3ceb8163a3753114ac00f3",
        //       "name": "Andy Leong",
        //       "email": "andy3leong@gmail.com"
        //     }
        //   }
        // }

        return <WrappedComponent {...props} />;
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
