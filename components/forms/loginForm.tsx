/* eslint-disable @next/next/link-passhref */
import Link from 'next/link'
import React from 'react'
import { Input, InputWrapper } from '../ui/Input'

import { useForm } from 'react-hook-form'

type FormProps = {
    usernameOrEmail: string;
    password: string;
}

const LoginForm = () => {
  const { register, handleSubmit } = useForm<FormProps>();

  const onSubmit = (data: FormProps) => {
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div
        className='flex flex-col space-y-4'
        >
            <InputWrapper
            inputLabel='Username or Email'
            >
                <Input
                {...register('usernameOrEmail')}
                placeholder='Username or Email'
                type='text'
                />
            </InputWrapper>
            <InputWrapper
            inputLabel='Password'
            >
                <Input
                {...register('password')}
                placeholder='Password'
                type='password'
                />
            </InputWrapper>
        </div>
        <div>
            <p className='text-sm text-blue-500'>Forgotten password?</p>
        </div>
        <div className='flex mt-5'>
            <button
            type='submit'
            className='bg-blue-400 rounded-sm text-white font-semibold py-1 px-4 w-full mt-5'
            >
                Sign In
            </button>
        </div>
        <div className='my-4'>
            <p className='text-center text-sm text-gray-500'>Dont have an account?
                <Link href='/accounts/register'>
                    <span className='text-blue-500 font-medium cursor-pointer'> Sign up</span>
                </Link> 
            </p>
        </div>
    </form>
  )
}

export default LoginForm