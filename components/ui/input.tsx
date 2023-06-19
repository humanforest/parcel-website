import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          [
            "flex h-10 w-full",
            "border-wood-300 rounded-lg border bg-transparent",
            "ring-offset-background px-3 py-2 text-sm",
            "file:border-0 file:bg-transparent file:text-sm file:font-medium",
            "placeholder:text-muted-foreground",
            "focus:border-forest-800 focus:shadow-[inset_0_4px_rgba(0,42,36,0.1)]",
            "focus-visible:ring-forest-800 focus-visible:border-forest-800",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "invalid:border-rowan-600 invalid:ring-rowan-600 invalid:text-rowan",
          ],
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
