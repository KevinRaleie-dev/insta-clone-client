import { gql } from '@apollo/client';

export const MEQUERY = gql`
    query Me {
      me {
        user {
          username
        }
      following_count
      followers_count
    }
}
`