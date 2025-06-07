import * as DialogPrimitive from '@radix-ui/react-dialog'

export interface DialogProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root> {}
export interface DialogTriggerProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Trigger> {}
export interface DialogContentProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {}
export interface DialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}
export interface DialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {}
export interface DialogTitleProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title> {}
export interface DialogDescriptionProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description> {}

export declare const Dialog: typeof DialogPrimitive.Root
export declare const DialogPortal: typeof DialogPrimitive.Portal
export declare const DialogOverlay: React.ForwardRefExoticComponent<
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay> & 
  React.RefAttributes<React.ElementRef<typeof DialogPrimitive.Overlay>>
>
export declare const DialogClose: typeof DialogPrimitive.Close
export declare const DialogTrigger: typeof DialogPrimitive.Trigger

export declare const DialogContent: React.ForwardRefExoticComponent<
  DialogContentProps & React.RefAttributes<React.ElementRef<typeof DialogPrimitive.Content>>
>

export declare const DialogHeader: React.FC<DialogHeaderProps>
export declare const DialogFooter: React.FC<DialogFooterProps>

export declare const DialogTitle: React.ForwardRefExoticComponent<
  DialogTitleProps & React.RefAttributes<React.ElementRef<typeof DialogPrimitive.Title>>
>

export declare const DialogDescription: React.ForwardRefExoticComponent<
  DialogDescriptionProps & React.RefAttributes<React.ElementRef<typeof DialogPrimitive.Description>>
>