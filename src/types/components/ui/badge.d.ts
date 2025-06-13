import { HTMLAttributes } from 'react'
import { VariantProps } from 'class-variance-authority'

declare const badgeVariants: any

export interface BadgeProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline'
}

export declare const Badge: React.FC<BadgeProps>
export { badgeVariants }