import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

export interface RadioGroupProps extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {}

export interface RadioGroupItemProps extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {}

export declare const RadioGroup: React.ForwardRefExoticComponent<
  RadioGroupProps & React.RefAttributes<React.ElementRef<typeof RadioGroupPrimitive.Root>>
>

export declare const RadioGroupItem: React.ForwardRefExoticComponent<
  RadioGroupItemProps & React.RefAttributes<React.ElementRef<typeof RadioGroupPrimitive.Item>>
>