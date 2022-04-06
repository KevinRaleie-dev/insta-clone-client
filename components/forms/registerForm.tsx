/* eslint-disable @next/next/link-passhref */
import React from 'react';
import Link from 'next/link';
import { Input, InputWrapper } from '../ui/Input';
import { useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { CREATE_USER } from '../../graphql/mutations'
import { convertToObject } from '../../utils';

// Todo: display error messages on form
interface IFormProps {
    email: string;
    username: string;
    password: string;
}

const RegisterForm = () => {

    const [registerUser] = useMutation(CREATE_USER);
    const { register, handleSubmit, formState, setError } = useForm<IFormProps>();

    const onSubmit = async (data: IFormProps) => {
		try {
			const response = await registerUser({
				 variables: {
					 email: data.email,
					 username: data.username,
					 password: data.password
				 }
			 });

             if (response.data.signUp.success) {
                 console.log('success'); //navigate to the login page
             }
             else if(response.data.signUp.error) {
                 const errors = convertToObject(response.data.signUp.error);
                 Object.keys(errors).forEach(key => {
                     setError(key as any, { message: errors[key]}, { shouldFocus: true });
                 });
             }			
             	
		} catch (error) {
			console.error(error);
		}
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
                    {...register('email', { required: true })}
                    type='text'
                    placeholder='Email address'
                    />
                    {formState.errors.email ? <ErrorLabel text={formState.errors.email.message} /> : null }
                </InputWrapper>
                <InputWrapper inputLabel='Username'>
                    <Input
                    {...register('username', { required: true })}
                    placeholder='Username'
                    type='text' />
                    {formState.errors.username ? <ErrorLabel text={formState.errors.username.message} /> : null}
                </InputWrapper>
                <InputWrapper inputLabel='Password'>
                    <Input
                    {...register('password', { required: true })}
                    placeholder='Password'
                    type='password' />
                    {formState.errors.password ? <ErrorLabel text={formState.errors.password.message} /> : null}
                </InputWrapper>
            </div>
            <div className='flex mt-5'>
                <button
                disabled={formState.isSubmitting}				
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

type ErrorLabelProps = {
    text?: string
}

const ErrorLabel: React.FunctionComponent<ErrorLabelProps> = ({ text }) => {
    return (
        <div className='text-red-500 text-sm'>{text}</div>
    );
}



export default RegisterForm