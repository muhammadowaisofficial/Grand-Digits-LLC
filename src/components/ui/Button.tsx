import { cn } from '@/utils/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';
import * as React from 'react';
import { Icons } from '../Icons';

const buttonVariants = cva(
  'active:scale-95 inline-flex items-center justify-center  font-[15px] h-[45px] py-[10px] font-semibold px-[20px] text-[16px] disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default:'bg-gradient-to-r from-blue  to-purpule text-white hover:opacity-90',
        outline:
          'bg-transparent text-black hover:bg-zinc-200 outline outline-2 outline-purpule hover:text-blue hover:bg-white h-[54px]',
        ghost:
          'bg-transparent hover:bg-zinc-100 text-zinc-800 data-[state=open]:bg-transparent data-[state=open]:bg-transparent',
        link: 'bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent',
        animated: 'relative bg-gradient-to-r from-blue  to-purpule text-white hover:opacity-90 pr-[80px]',
        animatedOutlined: 'relative bg-transparent text-white hover:opacity-90 pr-[80px] border-2 border-white hover:border-purpule duration-300',
      },
      borders: {
        default: 'rounded',
        rounded: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      borders: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}


const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, isLoading, borders, ...props }, ref) => {
    // console.log(variant)
    return (
      <button
        className={cn(buttonVariants({ variant, borders, className }))}
        ref={ref}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
        {children}
        {(variant === 'animated' || variant === 'animatedOutlined') ? <Icons.circle className='h-3 w-3 ml-2 mt-[2px] animate-slide-linear ' /> : null}
        {(variant === 'animated' || variant === 'animatedOutlined')? <div className="absolute inset-y-[48%] right-0 mr-8  w-[50px] border border-white h-[1px] "></div> : null}
        
      </button>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };