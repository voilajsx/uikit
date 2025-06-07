import * as TogglePrimitive from '@radix-ui/react-toggle'
import { VariantProps } from 'class-variance-authority'

declare const toggleVariants: any

export interface ToggleProps
  extends React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>,
    VariantProps<typeof toggleVariants> {}

export declare const Toggle: React.ForwardRefExoticComponent<
  ToggleProps & React.RefAttributes<React.ElementRef<typeof TogglePrimitive.Root>>
>

export { toggleVariants }