import Head from 'next/head';
import React from 'react'
import Card from '../../components/Card';
import Form from '../../components/Form';
import PlacholderImage from '../../components/Image';
 
const Register = () => {
  return (
    <div>
        <Head>
            <title>Sign up - Instaclone</title>
        </Head>
        <div
        className='flex flex-col items-center justify-center min-h-screen'
        >
            <Card
                leftElement={<PlacholderImage />}
                rightElement={<Form />}
            />
        </div>
    </div>
  )
}

export default Register;