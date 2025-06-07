import * as AccordionPrimitive from '@radix-ui/react-accordion'

export interface AccordionProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> {}
export interface AccordionItemProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> {}
export interface AccordionTriggerProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {}
export interface AccordionContentProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> {}

export declare const Accordion: typeof AccordionPrimitive.Root

export declare const AccordionItem: React.ForwardRefExoticComponent<
  AccordionItemProps & React.RefAttributes<React.ElementRef<typeof AccordionPrimitive.Item>>
>

export declare const AccordionTrigger: React.ForwardRefExoticComponent<
  AccordionTriggerProps & React.RefAttributes<React.ElementRef<typeof AccordionPrimitive.Trigger>>
>

export declare const AccordionContent: React.ForwardRefExoticComponent<
  AccordionContentProps & React.RefAttributes<React.ElementRef<typeof AccordionPrimitive.Content>>
>