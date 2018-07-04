import gql from 'graphql-tag';

export const requestLogin = gql`
  mutation requestLogin($email: String!, $password: String!) {
    Login(email: $email, password: $password) {
      auth
      token
      message
    }
  }
`;
