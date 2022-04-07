import { gql } from '@apollo/client';

export const CREATE_USER = gql`
   mutation SignUp($email: String!, $password: String!, $username: String!) {
  signUp(input: { email: $email, password: $password, username: $username }) {
    error {
      field
      message
    }
    success
  }
}    
`
export const LOGIN_USER = gql`
    mutation SignIn($usernameOrEmail: String!, $password: String!) {
    signIn(input: { usernameOrEmail: $usernameOrEmail, password: $password }) {
    success
    token
    error {
      message
      field
    }
  }
}
`