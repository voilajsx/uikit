import { HTMLAttributes } from 'react'
import { VariantProps } from 'class-variance-authority'

declare const containerVariants: any

export interface ContainerProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {}

export declare const Container: React.ForwardRefExoticComponent<
  ContainerProps & React.RefAttributes<HTMLDivElement>
>

export { containerVariants }