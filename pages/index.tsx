import type { NextPage } from 'next';
import Head from 'next/head';
import { Nav } from '../components/nav/Nav';

const Home: NextPage = () => {
  return (
   <div>
     <Head>
        <title>Instaclone</title>
     </Head>
     <Nav />
   </div>
  )
}

export default Home
