/* eslint-disable @next/next/link-passhref */
import React from 'react';
import Link from 'next/link';
import Input from '../components/Input';

const Form = () => {
  return (
    <div className='p-4'>
        <h1
        className='text-4xl text-center font-semibold pt-2'
        >Instaclone</h1>
        <p
        className='text-center text-md text-gray-500 font-medium mt-2'
        >
            Sign up to see photos and videos from your friends.
        </p>
        <form className='mt-2'>
            <div className='flex flex-col space-y-4'>
            <Input inputLabel='Email' type='email' placeholder='Email address' />
            <Input inputLabel='Username' type='text' placeholder='Username' />
            <Input inputLabel='Password' type='password' placeholder='Password' />
            </div>
            <div className='flex mt-5'>
                <button
                type='submit'
                className=' bg-blue-400 rounded-sm text-white font-semibold py-1 px-4 w-full'
                >Sign Up</button>
            </div>
        </form>
        <div className='mt-4'>
            <p className='text-sm text-center text-gray-400'>
                By signing up, you agree to our Terms, Data Policy and Cookie Policy.
            </p>
        </div>
        <div className='mt-4'>
            <p className='text-center text-sm'>Have an account?
                <Link href='/accounts/signin'>
                    <span className='text-blue-500 cursor-pointer'> Log in</span>
                </Link> 
            </p>
        </div>
    </div>
  )
}



export default Form