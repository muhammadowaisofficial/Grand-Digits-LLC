import Link from 'next/link'
import React, { FC } from 'react'
import UserSignInForm from './UserSignInForm'
import { Routes } from '@/config/routes'

const SignIn:FC = () => {
  return (
    <div className='container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400]'>

        <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Welcome Back</h1>

        <UserSignInForm />

        <p className="px-6 text-center text-sm text-zinc-700">
            Dont have an Account {' ? '}
            <Link href={Routes.auth.signUp} className='hover:text-zinc-800 text-sm underline underline-offset-4'>Sign Up</Link>
        </p>
        </div>

    </div>
  )
}

export default SignIn