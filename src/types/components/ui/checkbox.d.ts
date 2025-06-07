import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {}

export declare const Checkbox: React.ForwardRefExoticComponent<
  CheckboxProps & React.RefAttributes<React.ElementRef<typeof CheckboxPrimitive.Root>>
>