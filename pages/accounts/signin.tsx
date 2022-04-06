import React from 'react'
import LoginForm from '../../components/forms/loginForm'

const signin = () => {
  return (
    <div className='grid place-items-center mt-5'>
        <figure className='flex rounded-md shadow-sm border px-4 py-2'>
            <div
            className='flex flex-col space-y-2'
            >
                <h1 className='text-5xl font-semibold text-center mb-10 mt-2'>Instaclone</h1>
                <LoginForm />
            </div>
        </figure>
    </div>
  )
}

export default signin