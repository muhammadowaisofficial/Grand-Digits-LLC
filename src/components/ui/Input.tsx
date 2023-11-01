import * as React from "react"

import { cn } from "@/utils/utils"

export interface InputProps 
  extends React.InputHTMLAttributes<HTMLInputElement> {
    darkmode:boolean
  }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type,darkmode, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn( (darkmode ? "text-black" : "text-white"),
          "flex h-10 w-full rounded-none border border-purpule bg-transparent px-3 py-2 text-sm   placeholder:text-muted-foreground focus-visible:outline-none  focus-visible:border-lightpurpule hover:border-lightpurpule  disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
