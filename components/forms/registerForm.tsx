/* eslint-disable @next/next/link-passhref */
import React from 'react';
import Link from 'next/link';
import { Input, InputWrapper } from '../ui/Input';

import { useForm } from 'react-hook-form';

interface IFormProps {
    email: string;
    username: string;
    password: string;
}

const RegisterForm = () => {

  const { register, handleSubmit } = useForm<IFormProps>();

  const onSubmit = (data: IFormProps) => {
    console.log(data);
  }

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
        <form className='mt-2' onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col space-y-4'>
                <InputWrapper inputLabel='Email'>
                    <Input
                    {...register('email')}
                    type='email'
                    placeholder='Email address'
                    />
                </InputWrapper>
                <InputWrapper inputLabel='Email'>
                    <Input
                    {...register('username')}
                    placeholder='Username'
                    type='text' />
                </InputWrapper>
                <InputWrapper inputLabel='Password'>
                    <Input
                    {...register('password')}
                    placeholder='Password'
                    type='password' />
                </InputWrapper>
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



export default RegisterForm