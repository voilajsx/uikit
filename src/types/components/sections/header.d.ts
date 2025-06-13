/**
 * @fileoverview TypeScript declarations for Header component
 * @description Type definitions for header section component
 * @package @voilajsx/uikit
 * @file /src/components/sections/header.d.ts
 */

import * as React from 'react'

export type HeaderVariant = 'default' | 'primary' | 'black'
export type HeaderSize = 'sm' | 'md' | 'lg' | 'xl' | 'full'

export interface HeaderNavigationItem {
  key?: string
  label: string
  icon?: React.ComponentType<{ className?: string }>
  className?: string
  isActive?: boolean
  onClick?: () => void
  items?: HeaderNavigationItem[]
}

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  variant?: HeaderVariant
  size?: HeaderSize
  sticky?: boolean
}

export interface HeaderLogoProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface HeaderNavProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: HeaderNavigationItem[]
}

export declare const Header: React.ForwardRefExoticComponent<
  HeaderProps & React.RefAttributes<HTMLElement>
> & {
  Logo: typeof HeaderLogo
  Nav: typeof HeaderNav
}

export declare const HeaderLogo: React.ForwardRefExoticComponent<
  HeaderLogoProps & React.RefAttributes<HTMLDivElement>
>

export declare const HeaderNav: React.ForwardRefExoticComponent<
  HeaderNavProps & React.RefAttributes<HTMLDivElement>
>

export declare const headerVariants: any
export declare const containerVariants: any