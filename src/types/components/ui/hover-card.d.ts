import * as HoverCardPrimitive from '@radix-ui/react-hover-card'

export interface HoverCardProps extends React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Root> {}

export interface HoverCardTriggerProps extends React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Trigger> {}

export interface HoverCardContentProps extends React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content> {
  align?: 'start' | 'center' | 'end'
  sideOffset?: number
}

export interface HoverCardArrowProps extends React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Arrow> {}

export declare const HoverCard: typeof HoverCardPrimitive.Root

export declare const HoverCardTrigger: typeof HoverCardPrimitive.Trigger

export declare const HoverCardContent: React.ForwardRefExoticComponent<
  HoverCardContentProps & React.RefAttributes<React.ElementRef<typeof HoverCardPrimitive.Content>>
>

export declare const HoverCardArrow: React.ForwardRefExoticComponent<
  HoverCardArrowProps & React.RefAttributes<React.ElementRef<typeof HoverCardPrimitive.Arrow>>
>