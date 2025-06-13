/**
 * @fileoverview TypeScript declarations for Auth layout
 * @description Type definitions for auth layout component
 * @package @voilajsx/uikit
 * @file /src/components/layouts/auth.d.ts
 */

import * as React from 'react'

export type AuthVariant = 
  | 'simple' 
  | 'card' 
  | 'split-gradient' 
  | 'split-image' 
  | 'card-gradient' 
  | 'card-image'

export type AuthImageOverlay = 'light' | 'dark' | 'none'

export interface AuthTemplateProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: AuthVariant
  title?: string
  subtitle?: string
  logo?: React.ReactNode
  footer?: React.ReactNode
  containerProps?: React.HTMLAttributes<HTMLDivElement>
  
  // Split variant props
  splitContent?: React.ReactNode
  
  // Image variant props
  imageUrl?: string
  imageAlt?: string
  imageOverlay?: AuthImageOverlay
  
  // Card variant props
  cardContent?: React.ReactNode
}

export declare const AuthTemplate: React.FC<AuthTemplateProps>