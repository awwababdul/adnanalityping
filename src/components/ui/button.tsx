
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-primary to-primary-600 text-white hover:shadow-glow hover:scale-105 active:scale-95",
        destructive: "bg-gradient-to-r from-destructive to-destructive-600 text-white hover:shadow-lg hover:shadow-destructive/25 hover:scale-105",
        outline: "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-white hover:scale-105",
        secondary: "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 border border-neutral-300 hover:scale-105",
        ghost: "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 hover:scale-105",
        link: "text-primary underline-offset-4 hover:underline p-0 h-auto",
        premium: "bg-gradient-to-r from-primary via-accent to-primary-600 text-white hover:shadow-glow-lg hover:scale-105 border border-primary/20 animate-gradient-x bg-[length:400%_400%]",
        success: "bg-gradient-to-r from-success to-success-600 text-white hover:shadow-lg hover:shadow-success/25 hover:scale-105",
        warning: "bg-gradient-to-r from-warning to-warning-600 text-white hover:shadow-lg hover:shadow-warning/25 hover:scale-105",
        glass: "backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:scale-105",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 px-4 py-2 text-xs",
        lg: "h-12 px-8 py-3 text-base",
        xl: "h-14 px-10 py-3.5 text-lg",
        icon: "h-11 w-11",
        "icon-sm": "h-9 w-9",
        "icon-lg": "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
