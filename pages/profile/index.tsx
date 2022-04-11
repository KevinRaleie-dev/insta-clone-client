import { useQuery } from '@apollo/client';
import Head from 'next/head';
import React from 'react';
import { createApolloClient } from '../../client'
import { Nav } from '../../components/nav/Nav';
import { MEQUERY } from '../../graphql/queries';


// create getServerSideProps function
// export async function getServerSideProps() {

//   const client = createApolloClient();
  
//   const { data } = await client.query({ query: MEQUERY });

//   return {
//     props: {
//       me: data.me,
//     },
//   }
// }

const Profile = () => {
  const {data, loading, error} = useQuery(MEQUERY);

  if(error) return <p>Error: {error.message}</p>

  if(loading) return <p>Loading...</p>

  return (
    <div>
      <Head>
        <title>{data.me.user.username} (@{data.me.user.username}) - Instaclone</title>
      </Head>
      <Nav />
      <div>Hi {data.me.user.username}</div>
    </div>
  )
}

export default Profile