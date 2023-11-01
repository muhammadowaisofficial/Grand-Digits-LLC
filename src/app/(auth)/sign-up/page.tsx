import React from 'react';
import Link from 'next/link';
import SignUp from '@/components/auth/SignUp';
import { buttonVariants } from '@/components/ui/Button';
import { cn } from '@/utils/utils';


export const metadata = {
  title: 'SignIn',
  description: 'Website Name and its Description',
};




const page = () => {
  return (
    <div className="absolute inset-0 ">
      <div className="mx-auto flex h-full max-w-2xl flex-col items-center justify-center gap-20">
        <Link
          href={'/'}
          className={cn(buttonVariants({ variant: 'ghost' }),'self-start -mt-20')}
        >{'< '}Home</Link>
        <SignUp />
      </div>
    </div>
  );
};

export default page;
