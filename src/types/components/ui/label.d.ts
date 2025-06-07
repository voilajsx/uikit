import * as LabelPrimitive from '@radix-ui/react-label'

export interface LabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {}

export declare const Label: React.ForwardRefExoticComponent<
  LabelProps & React.RefAttributes<React.ElementRef<typeof LabelPrimitive.Root>>
>