import * as ToastPrimitives from '@radix-ui/react-toast'
import { VariantProps } from 'class-variance-authority'

declare const toastVariants: any

export interface ToastProviderProps extends React.ComponentPropsWithoutRef<typeof ToastPrimitives.Provider> {}
export interface ToastViewportProps extends React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport> {}
export interface ToastProps 
  extends React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root>,
    VariantProps<typeof toastVariants> {}
export interface ToastActionProps extends React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action> {}
export interface ToastCloseProps extends React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close> {}
export interface ToastTitleProps extends React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title> {}
export interface ToastDescriptionProps extends React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description> {}

export declare const ToastProvider: React.ForwardRefExoticComponent<
  ToastProviderProps & React.RefAttributes<React.ElementRef<typeof ToastPrimitives.Provider>>
>

export declare const ToastViewport: React.ForwardRefExoticComponent<
  ToastViewportProps & React.RefAttributes<React.ElementRef<typeof ToastPrimitives.Viewport>>
>

export declare const Toast: React.ForwardRefExoticComponent<
  ToastProps & React.RefAttributes<React.ElementRef<typeof ToastPrimitives.Root>>
>

export declare const ToastAction: React.ForwardRefExoticComponent<
  ToastActionProps & React.RefAttributes<React.ElementRef<typeof ToastPrimitives.Action>>
>

export declare const ToastClose: React.ForwardRefExoticComponent<
  ToastCloseProps & React.RefAttributes<React.ElementRef<typeof ToastPrimitives.Close>>
>

export declare const ToastTitle: React.ForwardRefExoticComponent<
  ToastTitleProps & React.RefAttributes<React.ElementRef<typeof ToastPrimitives.Title>>
>

export declare const ToastDescription: React.ForwardRefExoticComponent<
  ToastDescriptionProps & React.RefAttributes<React.ElementRef<typeof ToastPrimitives.Description>>
>