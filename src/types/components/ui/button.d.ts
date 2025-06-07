import { ButtonHTMLAttributes, forwardRef } from 'react'
import { VariantProps } from 'class-variance-authority'

declare const buttonVariants: any

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export declare const Button: React.ForwardRefExoticComponent<
  ButtonProps & React.RefAttributes<HTMLButtonElement>
>

export { buttonVariants }