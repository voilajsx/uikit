/**
 * @fileoverview TypeScript declarations for Page layout
 * @description Type definitions for page layout component
 * @package @voilajsx/uikit
 * @file /src/components/layouts/page.d.ts
 */

import * as React from 'react'

export type PageVariant = 'default' | 'minimal' | 'contained'
export type PageSize = 'sm' | 'md' | 'lg' | 'xl' | 'full'
export type PageHeaderVariant = 'default' | 'primary' | 'black'
export type PageFooterVariant = 'default' | 'muted' | 'dark'

export interface PageConfig {
  variant: PageVariant
  size: PageSize
}

export interface PageProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: PageVariant
  size?: PageSize
}

export interface PageHeaderProps extends React.HTMLAttributes<HTMLElement> {
  variant?: PageHeaderVariant
  size?: PageSize
  sticky?: boolean
}

export interface PageContentProps extends React.HTMLAttributes<HTMLElement> {
  size?: PageSize
}

export interface PageFooterProps extends React.HTMLAttributes<HTMLElement> {
  variant?: PageFooterVariant
  size?: PageSize
}

export declare const Page: React.ForwardRefExoticComponent<
  PageProps & React.RefAttributes<HTMLDivElement>
> & {
  Header: typeof PageHeader
  Content: typeof PageContent
  Footer: typeof PageFooter
  Logo: any // HeaderLogo
  Nav: any // HeaderNav
}

export declare const PageHeader: React.ForwardRefExoticComponent<
  PageHeaderProps & React.RefAttributes<HTMLElement>
>

export declare const PageContent: React.ForwardRefExoticComponent<
  PageContentProps & React.RefAttributes<HTMLElement>
>

export declare const PageFooter: React.ForwardRefExoticComponent<
  PageFooterProps & React.RefAttributes<HTMLElement>
>

export declare function usePage(): PageConfig

export declare const pageVariants: any