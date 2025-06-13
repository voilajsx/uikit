/**
 * @fileoverview TypeScript declarations for Container component
 * @description Type definitions for container section component
 * @package @voilajsx/uikit
 * @file /src/components/sections/container.d.ts
 */

import * as React from 'react'

export type ContainerVariant = 'default' | 'contained' | 'minimal'
export type ContainerSidebar = 'none' | 'left' | 'right'
export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full'

export interface NavigationItem {
  key?: string
  label: string
  icon?: React.ComponentType<{ className?: string }>
  badge?: string | number
  isActive?: boolean
  onClick?: () => void
  items?: NavigationItem[]
}

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: ContainerVariant
  sidebar?: ContainerSidebar
  sidebarContent?: React.ReactNode | NavigationItem[]
  sidebarSticky?: boolean
  size?: ContainerSize
}

export interface ContainerSidebarProps extends React.HTMLAttributes<HTMLElement> {
  content?: React.ReactNode | NavigationItem[]
  position?: 'left' | 'right'
  size?: ContainerSize
  sticky?: boolean
}

export interface ContainerMainProps extends React.HTMLAttributes<HTMLElement> {
  size?: ContainerSize
  hasSidebar?: boolean
  sidebarPosition?: 'left' | 'right' | 'none'
}

export declare const Container: React.ForwardRefExoticComponent<
  ContainerProps & React.RefAttributes<HTMLDivElement>
> & {
  Sidebar: typeof ContainerSidebar
  Main: typeof ContainerMain
}

export declare const ContainerSidebar: React.ForwardRefExoticComponent<
  ContainerSidebarProps & React.RefAttributes<HTMLElement>
>

export declare const ContainerMain: React.ForwardRefExoticComponent<
  ContainerMainProps & React.RefAttributes<HTMLElement>
>