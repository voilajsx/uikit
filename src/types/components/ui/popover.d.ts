import * as PopoverPrimitive from '@radix-ui/react-popover'

export interface PopoverProps extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Root> {}
export interface PopoverTriggerProps extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Trigger> {}
export interface PopoverContentProps extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> {}

export declare const Popover: typeof PopoverPrimitive.Root
export declare const PopoverTrigger: typeof PopoverPrimitive.Trigger

export declare const PopoverContent: React.ForwardRefExoticComponent<
  PopoverContentProps & React.RefAttributes<React.ElementRef<typeof PopoverPrimitive.Content>>
>