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

export const requestRegister = gql`
  mutation requestRegister(
    $name: String!
    $email: String!
    $password: String!
  ) {
    Register(name: $name, email: $email, password: $password) {
      auth
      token
      message
    }
  }
`;
