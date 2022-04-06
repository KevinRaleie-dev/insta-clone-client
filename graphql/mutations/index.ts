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