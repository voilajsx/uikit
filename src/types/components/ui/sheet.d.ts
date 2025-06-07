import * as SheetPrimitive from '@radix-ui/react-dialog'
import { VariantProps } from 'class-variance-authority'
import { HTMLAttributes } from 'react'

declare const sheetVariants: any

export interface SheetProps extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Root> {}
export interface SheetTriggerProps extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Trigger> {}
export interface SheetCloseProps extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Close> {}
export interface SheetOverlayProps extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay> {}
export interface SheetContentProps 
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}
export interface SheetHeaderProps extends HTMLAttributes<HTMLDivElement> {}
export interface SheetFooterProps extends HTMLAttributes<HTMLDivElement> {}
export interface SheetTitleProps extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title> {}
export interface SheetDescriptionProps extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description> {}

export declare const Sheet: typeof SheetPrimitive.Root
export declare const SheetPortal: typeof SheetPrimitive.Portal
export declare const SheetTrigger: typeof SheetPrimitive.Trigger
export declare const SheetClose: typeof SheetPrimitive.Close

export declare const SheetOverlay: React.ForwardRefExoticComponent<
  SheetOverlayProps & React.RefAttributes<React.ElementRef<typeof SheetPrimitive.Overlay>>
>

export declare const SheetContent: React.ForwardRefExoticComponent<
  SheetContentProps & React.RefAttributes<React.ElementRef<typeof SheetPrimitive.Content>>
>

export declare const SheetHeader: React.FC<SheetHeaderProps>
export declare const SheetFooter: React.FC<SheetFooterProps>

export declare const SheetTitle: React.ForwardRefExoticComponent<
  SheetTitleProps & React.RefAttributes<React.ElementRef<typeof SheetPrimitive.Title>>
>

export declare const SheetDescription: React.ForwardRefExoticComponent<
  SheetDescriptionProps & React.RefAttributes<React.ElementRef<typeof SheetPrimitive.Description>>
>