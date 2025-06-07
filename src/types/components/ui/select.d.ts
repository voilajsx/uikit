import * as SelectPrimitive from '@radix-ui/react-select'

export interface SelectProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root> {}

export interface SelectTriggerProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> {}

export interface SelectContentProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> {}

export interface SelectItemProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> {}

export interface SelectLabelProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label> {}

export interface SelectSeparatorProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator> {}

export declare const Select: typeof SelectPrimitive.Root
export declare const SelectGroup: typeof SelectPrimitive.Group
export declare const SelectValue: typeof SelectPrimitive.Value

export declare const SelectTrigger: React.ForwardRefExoticComponent<
  SelectTriggerProps & React.RefAttributes<React.ElementRef<typeof SelectPrimitive.Trigger>>
>

export declare const SelectContent: React.ForwardRefExoticComponent<
  SelectContentProps & React.RefAttributes<React.ElementRef<typeof SelectPrimitive.Content>>
>

export declare const SelectItem: React.ForwardRefExoticComponent<
  SelectItemProps & React.RefAttributes<React.ElementRef<typeof SelectPrimitive.Item>>
>

export declare const SelectLabel: React.ForwardRefExoticComponent<
  SelectLabelProps & React.RefAttributes<React.ElementRef<typeof SelectPrimitive.Label>>
>

export declare const SelectSeparator: React.ForwardRefExoticComponent<
  SelectSeparatorProps & React.RefAttributes<React.ElementRef<typeof SelectPrimitive.Separator>>
>

export declare const SelectScrollUpButton: React.ForwardRefExoticComponent<
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton> & 
  React.RefAttributes<React.ElementRef<typeof SelectPrimitive.ScrollUpButton>>
>

export declare const SelectScrollDownButton: React.ForwardRefExoticComponent<
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton> & 
  React.RefAttributes<React.ElementRef<typeof SelectPrimitive.ScrollDownButton>>
>