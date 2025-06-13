/**
 * @fileoverview TypeScript declarations for Footer component
 * @description Type definitions for footer section component
 * @package @voilajsx/uikit
 * @file /src/components/sections/footer.d.ts
 */

import * as React from 'react'

export type FooterVariant = 'default' | 'muted' | 'dark'
export type FooterSize = 'sm' | 'md' | 'lg' | 'xl' | 'full'

export interface FooterLink {
  key?: string
  label: string
  onClick?: () => void
  className?: string
}

export interface FooterColumn {
  key?: string
  title: string
  links?: FooterLink[]
}

export interface FooterSocialLink {
  key?: string
  label: string
  icon?: React.ComponentType<{ className?: string }>
  onClick?: () => void
  className?: string
}

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  variant?: FooterVariant
  size?: FooterSize
}

export interface FooterBasicProps extends React.HTMLAttributes<HTMLDivElement> {
  logo?: React.ReactNode
  links?: FooterLink[]
  social?: React.ReactNode
  copyright?: React.ReactNode
}

export interface FooterAdvancedProps extends React.HTMLAttributes<HTMLDivElement> {
  brand?: React.ReactNode
  columns?: FooterColumn[]
  newsletter?: React.ReactNode
  social?: React.ReactNode
  legal?: React.ReactNode
  copyright?: React.ReactNode
}

export interface FooterBrandProps extends React.HTMLAttributes<HTMLDivElement> {
  logo?: React.ReactNode
  description?: string
  contact?: React.ReactNode
}

export interface FooterSocialProps extends React.HTMLAttributes<HTMLDivElement> {
  links?: FooterSocialLink[]
}

export declare const Footer: React.ForwardRefExoticComponent<
  FooterProps & React.RefAttributes<HTMLElement>
> & {
  Basic: typeof FooterBasic
  Advanced: typeof FooterAdvanced
  Brand: typeof FooterBrand
  Social: typeof FooterSocial
}

export declare const FooterBasic: React.ForwardRefExoticComponent<
  FooterBasicProps & React.RefAttributes<HTMLDivElement>
>

export declare const FooterAdvanced: React.ForwardRefExoticComponent<
  FooterAdvancedProps & React.RefAttributes<HTMLDivElement>
>

export declare const FooterBrand: React.ForwardRefExoticComponent<
  FooterBrandProps & React.RefAttributes<HTMLDivElement>
>

export declare const FooterSocial: React.ForwardRefExoticComponent<
  FooterSocialProps & React.RefAttributes<HTMLDivElement>
>

export declare const footerVariants: any
export declare const containerVariants: any