import * as TooltipPrimitive from '@radix-ui/react-tooltip'

export interface TooltipProviderProps extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Provider> {}
export interface TooltipProps extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Root> {}
export interface TooltipTriggerProps extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Trigger> {}
export interface TooltipContentProps extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> {}

export declare const TooltipProvider: typeof TooltipPrimitive.Provider
export declare const Tooltip: typeof TooltipPrimitive.Root
export declare const TooltipTrigger: typeof TooltipPrimitive.Trigger

export declare const TooltipContent: React.ForwardRefExoticComponent<
  TooltipContentProps & React.RefAttributes<React.ElementRef<typeof TooltipPrimitive.Content>>
>