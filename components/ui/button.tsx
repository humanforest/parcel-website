import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center",
    "text-sm font-bold",
    "transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2",
    "disabled:opacity-50 disabled:pointer-events-none",
    "ring-offset-background",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-forest text-white hover:bg-forest-400 active:bg-forest-600",
          "border-2 border-forest-900",
        ],
        secondary: [
          "bg-autumn text-white hover:bg-autumn-400 active:bg-autumn-600",
          "border-2 border-autumn-900",
        ],
        danger: [
          "bg-rowan text-white hover:bg-rowan-400 active:bg-rowan-600",
          "border-2 border-rowan-900",
        ],
        warning: [
          "bg-cassia text-white hover:bg-cassia-400 active:bg-cassia-600",
          "border-2 border-cassia-900",
        ],
        informative: [
          "bg-sky text-white hover:bg-sky-400 active:bg-sky-600",
          "border-2 border-sky-900",
        ],
        outline: [
          "bg-transparent text-forest-900 hover:bg-wood-100 active:bg-wood-200",
          "border-2 border-forest-900",
        ],
        ghost: [
          "bg-transparent text-forest-900 hover:bg-wood-100 active:bg-wood-200",
          "border-2 border-transparent",
        ],
        link: [
          "bg-transparent text-forest-900",
          "border-2 border-transparent",
          "underline-offset-4 hover:underline text-forest-900",
        ],
      },
      size: {
        xs: "px-2 py-1 text-xs",
        sm: "px-2 py-1 text-sm",
        md: "px-2.5 py-1.5 text-sm",
        lg: "px-3 py-2 text-sm",
        xl: "px-3.5 py-2.5 text-base",
      },
      rounded: {
        none: "rounded-none",
        xs: "rounded-sm",
        sm: "rounded",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      },
      shadow: {
        true: [
          "shadow-forest-900 shadow-offset-md -translate-y-1",
          "hover:shadow-forest-900 hover:-translate-y-2 hover:shadow-offset-lg",
          "active:shadow-forest-900 active:shadow-offset-sm active:-translate-y-0.5",
          "focus-visible:active:translate-y-0 focus-visible:translate-y-0 focus-visible:shadow-none",
          "transform transition-all",
        ],
        false: "",
      },
    },
    compoundVariants: [
      {
        rounded: "full",
        size: ["xs", "sm"],
        className: "px-2.5",
      },
      {
        rounded: "full",
        size: "md",
        className: "px-3",
      },
      {
        rounded: "full",
        size: "lg",
        className: "px-3.5",
      },
      {
        rounded: "full",
        size: "xl",
        className: "px-4",
      },
      {
        variant: ["outline", "ghost", "link"],
        shadow: true,
        className:
          "shadow-none hover:shadow-none active:shadow-none translate-y-0 hover:translate-y-0 active:translate-y-0",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
      rounded: "full",
      shadow: false,
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, rounded, shadow, asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, rounded, shadow, className })
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
