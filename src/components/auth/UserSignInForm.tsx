'use client';
import { cn } from '@/utils/utils';
import { FC, useState } from 'react';
import { Button } from '../ui/Button';
import { Icons } from '../Icons';
import { useToast } from '@/hooks/use-toast';

interface UserSignInFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserSignInForm: FC<UserSignInFormProps> = ({ className, ...props }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {toast} = useToast();

  const login = () => {
    setIsLoading(true);

    try {
      // Sign Functionality
      throw new Error()
    } catch (error) {
      // toast notification
      toast({
        title:'Error Signing In.',
        description:'There was an error Signing In. Please Try Again Later.',
        variant:'destructive'
      })
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className={cn('flex justify-center', className)} {...props}>
      <Button
        onClick={login}
        isLoading={isLoading}
        className="w-full"
      >
        {isLoading ? null : <Icons.signin className='h-4 w-4 mr-2' />}
        Sign In
      </Button>
    </div>
  );
};

export default UserSignInForm;
