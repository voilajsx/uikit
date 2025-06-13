/**
 * @fileoverview TypeScript declarations for Breadcrumb component
 * @description Type definitions for breadcrumb navigation component
 * @package @voilajsx/uikit
 * @file /src/components/ui/breadcrumb.d.ts
 */

import * as React from 'react'

export interface BreadcrumbProps extends React.ComponentPropsWithoutRef<'nav'> {}

export declare const Breadcrumb: React.ForwardRefExoticComponent<
  BreadcrumbProps & React.RefAttributes<React.ElementRef<'nav'>>
>

export interface BreadcrumbListProps extends React.ComponentPropsWithoutRef<'ol'> {}

export declare const BreadcrumbList: React.ForwardRefExoticComponent<
  BreadcrumbListProps & React.RefAttributes<React.ElementRef<'ol'>>
>

export interface BreadcrumbItemProps extends React.ComponentPropsWithoutRef<'li'> {}

export declare const BreadcrumbItem: React.ForwardRefExoticComponent<
  BreadcrumbItemProps & React.RefAttributes<React.ElementRef<'li'>>
>

export interface BreadcrumbLinkProps extends React.ComponentPropsWithoutRef<'a'> {
  asChild?: boolean
}

export declare const BreadcrumbLink: React.ForwardRefExoticComponent<
  BreadcrumbLinkProps & React.RefAttributes<React.ElementRef<'a'>>
>

export interface BreadcrumbPageProps extends React.ComponentPropsWithoutRef<'span'> {}

export declare const BreadcrumbPage: React.ForwardRefExoticComponent<
  BreadcrumbPageProps & React.RefAttributes<React.ElementRef<'span'>>
>

export interface BreadcrumbSeparatorProps extends React.ComponentPropsWithoutRef<'li'> {}

export declare const BreadcrumbSeparator: React.FC<BreadcrumbSeparatorProps>

export interface BreadcrumbEllipsisProps extends React.ComponentPropsWithoutRef<'span'> {}

export declare const BreadcrumbEllipsis: React.FC<BreadcrumbEllipsisProps>