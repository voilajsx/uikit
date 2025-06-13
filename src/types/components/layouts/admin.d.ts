/**
 * @fileoverview TypeScript declarations for Admin layout
 * @description Type definitions for admin layout component
 * @package @voilajsx/uikit
 * @file /src/components/layouts/admin.d.ts
 */

import * as React from 'react'

export type AdminVariant = 'default' | 'primary' | 'black'
export type AdminSize = 'compact' | 'default' | 'wide'

export interface AdminNavigationItem {
  key?: string
  title: string
  label?: string
  icon?: React.ComponentType<{ className?: string }>
  badge?: string | number
  isActive?: boolean
  path?: string
  onClick?: () => void
  section?: string
  submenu?: AdminNavigationItem[]
  items?: AdminNavigationItem[]
}

export interface AdminTemplateProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: AdminVariant
  size?: AdminSize
  title?: string
  logo?: React.ReactNode
  headerActions?: React.ReactNode
  navigationItems?: AdminNavigationItem[]
  currentPath?: string
  onNavigate?: (path: string, item: AdminNavigationItem) => void
  sidebarContent?: React.ReactNode
  sidebarFooter?: React.ReactNode
  sticky?: boolean
  logoComponent?: (variant: AdminVariant) => React.ReactNode
  headerActionsComponent?: (variant: AdminVariant) => React.ReactNode
  collapsible?: boolean
  defaultSidebarOpen?: boolean
}

export declare const AdminTemplate: React.ForwardRefExoticComponent<
  AdminTemplateProps & React.RefAttributes<HTMLDivElement>
>