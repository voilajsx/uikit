/**
 * @fileoverview TypeScript declarations for BlankLayout
 * @description Type definitions for blank layout component
 * @package @voilajsx/uikit
 * @file /src/components/layouts/blank.d.ts
 */

import * as React from 'react'

export type BlankVariant = 'default' | 'card' | 'error' | 'maintenance' | 'suspension'

export interface BlankLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BlankVariant
  title?: string
  subtitle?: string
  logo?: React.ReactNode
  icon?: React.ReactNode
  actions?: React.ReactNode
  footer?: React.ReactNode
  containerProps?: React.HTMLAttributes<HTMLDivElement>
}

export declare const BlankLayout: React.FC<BlankLayoutProps>