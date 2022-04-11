import Head from 'next/head';
import React from 'react';
import RegisterForm from '../../components/forms/registerForm';
import { Card } from '../../components/ui/card';
import PlacholderImage from '../../components/ui/Image';
 
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
                rightElement={<RegisterForm />}
            />
        </div>
    </div>
  )
}

export default Register;