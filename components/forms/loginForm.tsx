import { useMutation } from '@apollo/client'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'
import { LOGIN_USER } from '../../graphql/mutations'
import { setToken } from '../../store'
import { convertToObject } from '../../utils'
import { ErrorLabel } from '../ui/errorLabel'

import { Input, InputWrapper } from '../ui/input/'



type FormProps = {
    usernameOrEmail: string;
    password: string;
}

const LoginForm = () => {
  const { register, handleSubmit, formState, setError } = useForm<FormProps>();
  const [loginUser] = useMutation(LOGIN_USER);
  const router = useRouter();

  const onSubmit = async (data: FormProps) => {
      
    try {
        const response = await loginUser({
            variables: {
                usernameOrEmail: data.usernameOrEmail,
                password: data.password
            },            
        });

        if(response.data.signIn.success) {
            setToken('token', response.data.signIn.token);
            router.push('/');
        }
        else {
            const errors = convertToObject(response.data.signIn.error);
            Object.keys(errors).forEach(key => {
                setError(key as any, { message: errors[key]}, { shouldFocus: true });
            });
        }

    } catch (error) {
        console.log(error)
    }
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
                {formState.errors.usernameOrEmail && <ErrorLabel text={formState.errors.usernameOrEmail.message} />}
            </InputWrapper>
            <InputWrapper
            inputLabel='Password'
            rightElement={<p className='text-sm text-blue-500'>Forgotten password?</p>}
            >
                <Input
                {...register('password')}
                placeholder='Password'
                type='password'
                />
                {formState.errors.password && <ErrorLabel text={formState.errors.password.message} />}
            </InputWrapper>
        </div>
        <div className='flex mt-5'>
            <button
            type='submit'
            disabled={formState.isSubmitting}
            className='bg-blue-400 rounded-sm text-white font-semibold py-1 px-4 w-full mt-5'
            >
                Sign In
            </button>
        </div>
        <div className='my-4'>
            <p className='text-center text-sm text-gray-500'>Dont have an account?
                <Link href='/accounts/register' passHref>
                    <span className='text-blue-500 font-medium cursor-pointer'> Sign up</span>
                </Link> 
            </p>
        </div>
    </form>
  )
}

export default LoginForm