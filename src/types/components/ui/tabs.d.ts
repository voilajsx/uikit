import * as TabsPrimitive from '@radix-ui/react-tabs'

export interface TabsProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root> {}
export interface TabsListProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> {}
export interface TabsTriggerProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> {}
export interface TabsContentProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> {}

export declare const Tabs: typeof TabsPrimitive.Root

export declare const TabsList: React.ForwardRefExoticComponent<
  TabsListProps & React.RefAttributes<React.ElementRef<typeof TabsPrimitive.List>>
>

export declare const TabsTrigger: React.ForwardRefExoticComponent<
  TabsTriggerProps & React.RefAttributes<React.ElementRef<typeof TabsPrimitive.Trigger>>
>

export declare const TabsContent: React.ForwardRefExoticComponent<
  TabsContentProps & React.RefAttributes<React.ElementRef<typeof TabsPrimitive.Content>>
>