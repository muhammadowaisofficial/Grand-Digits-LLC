import React, { FC } from 'react'
import Link from 'next/link'
import { Routes } from '@/config/routes'
import UserSignUpForm from './UserSignUpForm'

const SignUp:FC = () => {
  return (
    <div className='container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400]'>

        <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Welcome</h1>

        <UserSignUpForm />

        <p className="px-6 text-center text-sm text-zinc-700">
            Already have an Account {' ? '}
            <Link href={Routes.auth.signIn} className='hover:text-zinc-800 text-sm underline underline-offset-4'>Sign In</Link>
        </p>
        </div>

    </div>
  )
}

export default SignUp