import * as SwitchPrimitives from '@radix-ui/react-switch'

export interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {}

export declare const Switch: React.ForwardRefExoticComponent<
  SwitchProps & React.RefAttributes<React.ElementRef<typeof SwitchPrimitives.Root>>
>