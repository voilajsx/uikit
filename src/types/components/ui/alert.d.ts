import { HTMLAttributes } from 'react'
import { VariantProps } from 'class-variance-authority'

declare const alertVariants: any

export interface AlertProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {}

export interface AlertTitleProps extends HTMLAttributes<HTMLHeadingElement> {}

export interface AlertDescriptionProps extends HTMLAttributes<HTMLDivElement> {}

export declare const Alert: React.ForwardRefExoticComponent<
  AlertProps & React.RefAttributes<HTMLDivElement>
>

export declare const AlertTitle: React.ForwardRefExoticComponent<
  AlertTitleProps & React.RefAttributes<HTMLHeadingElement>
>

export declare const AlertDescription: React.ForwardRefExoticComponent<
  AlertDescriptionProps & React.RefAttributes<HTMLDivElement>
>