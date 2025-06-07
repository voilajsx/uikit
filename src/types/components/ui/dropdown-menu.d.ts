import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { HTMLAttributes } from 'react'

export interface DropdownMenuProps extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Root> {}
export interface DropdownMenuTriggerProps extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Trigger> {}
export interface DropdownMenuContentProps extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content> {}
export interface DropdownMenuItemProps extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> {
  inset?: boolean
}
export interface DropdownMenuCheckboxItemProps extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem> {}
export interface DropdownMenuRadioItemProps extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem> {}
export interface DropdownMenuLabelProps extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> {
  inset?: boolean
}
export interface DropdownMenuSeparatorProps extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator> {}
export interface DropdownMenuShortcutProps extends HTMLAttributes<HTMLSpanElement> {}
export interface DropdownMenuSubTriggerProps extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> {
  inset?: boolean
}
export interface DropdownMenuSubContentProps extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent> {}

export declare const DropdownMenu: typeof DropdownMenuPrimitive.Root
export declare const DropdownMenuTrigger: typeof DropdownMenuPrimitive.Trigger
export declare const DropdownMenuGroup: typeof DropdownMenuPrimitive.Group
export declare const DropdownMenuPortal: typeof DropdownMenuPrimitive.Portal
export declare const DropdownMenuSub: typeof DropdownMenuPrimitive.Sub
export declare const DropdownMenuRadioGroup: typeof DropdownMenuPrimitive.RadioGroup

export declare const DropdownMenuSubTrigger: React.ForwardRefExoticComponent<
  DropdownMenuSubTriggerProps & React.RefAttributes<React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>>
>

export declare const DropdownMenuSubContent: React.ForwardRefExoticComponent<
  DropdownMenuSubContentProps & React.RefAttributes<React.ElementRef<typeof DropdownMenuPrimitive.SubContent>>
>

export declare const DropdownMenuContent: React.ForwardRefExoticComponent<
  DropdownMenuContentProps & React.RefAttributes<React.ElementRef<typeof DropdownMenuPrimitive.Content>>
>

export declare const DropdownMenuItem: React.ForwardRefExoticComponent<
  DropdownMenuItemProps & React.RefAttributes<React.ElementRef<typeof DropdownMenuPrimitive.Item>>
>

export declare const DropdownMenuCheckboxItem: React.ForwardRefExoticComponent<
  DropdownMenuCheckboxItemProps & React.RefAttributes<React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>>
>

export declare const DropdownMenuRadioItem: React.ForwardRefExoticComponent<
  DropdownMenuRadioItemProps & React.RefAttributes<React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>>
>

export declare const DropdownMenuLabel: React.ForwardRefExoticComponent<
  DropdownMenuLabelProps & React.RefAttributes<React.ElementRef<typeof DropdownMenuPrimitive.Label>>
>

export declare const DropdownMenuSeparator: React.ForwardRefExoticComponent<
  DropdownMenuSeparatorProps & React.RefAttributes<React.ElementRef<typeof DropdownMenuPrimitive.Separator>>
>

export declare const DropdownMenuShortcut: React.FC<DropdownMenuShortcutProps>