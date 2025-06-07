import * as SliderPrimitive from '@radix-ui/react-slider'

export interface SliderProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {}

export declare const Slider: React.ForwardRefExoticComponent<
  SliderProps & React.RefAttributes<React.ElementRef<typeof SliderPrimitive.Root>>
>