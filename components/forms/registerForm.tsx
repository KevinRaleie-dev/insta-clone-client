import { useMutation } from '@apollo/client';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { CREATE_USER } from '../../graphql/mutations';
import { convertToObject } from '../../utils';
import { Logo } from '../logo';
import { ErrorLabel } from '../ui/errorLabel';
import { Input, InputWrapper } from '../ui/input';

// Todo: add show and hide toggle for password
interface IFormProps {
    email: string;
    username: string;
    password: string;
}

const RegisterForm = () => {
    const router = useRouter();
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
                router.push('/accounts/signin');
             }
             else if(response.data.signUp.error) {
                 const errors = convertToObject(response.data.signUp.error);
                 Object.keys(errors).forEach(key => {
                     setError(key as any, { message: errors[key]}, { shouldFocus: true });
                 });
             }			
             	
		} catch (error) {
			return error;
		}
  }

  return (
    <div className='p-4'>
        <Logo />
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
                <Link href='/accounts/signin' passHref>
                    <span className='text-blue-500 cursor-pointer'> Log in</span>
                </Link> 
            </p>
        </div>
    </div>
  )
}



export default RegisterForm