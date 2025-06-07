import * as ProgressPrimitive from '@radix-ui/react-progress'

export interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {}

export declare const Progress: React.ForwardRefExoticComponent<
  ProgressProps & React.RefAttributes<React.ElementRef<typeof ProgressPrimitive.Root>>
>