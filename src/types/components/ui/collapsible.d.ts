import * as React from 'react'

export interface CollapsibleProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
}

export declare const Collapsible: React.ForwardRefExoticComponent<
  CollapsibleProps & React.RefAttributes<HTMLDivElement>
>

export interface CollapsibleTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export declare const CollapsibleTrigger: React.ForwardRefExoticComponent<
  CollapsibleTriggerProps & React.RefAttributes<HTMLButtonElement>
>

export interface CollapsibleContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export declare const CollapsibleContent: React.ForwardRefExoticComponent<
  CollapsibleContentProps & React.RefAttributes<HTMLDivElement>
>

export declare function useCollapsible(): {
  open: boolean
  onOpenChange: (open: boolean) => void
}
