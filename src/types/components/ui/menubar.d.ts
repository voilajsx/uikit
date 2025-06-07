/**
 * @fileoverview TypeScript declarations for Menubar component
 * @description Type definitions for menubar navigation component
 * @package @voilajsx/uikit
 * @file /src/components/ui/menubar.d.ts
 */

import * as React from 'react'

// =============================================================================
// MENUBAR TYPES
// =============================================================================

export interface MenubarProps extends React.ComponentPropsWithoutRef<'div'> {}

export declare const Menubar: React.ForwardRefExoticComponent<
  MenubarProps & React.RefAttributes<React.ElementRef<'div'>>
>

export interface MenubarMenuProps extends React.ComponentPropsWithoutRef<'div'> {
  children?: React.ReactNode
}

export declare const MenubarMenu: React.FC<MenubarMenuProps>

export interface MenubarTriggerProps extends React.ComponentPropsWithoutRef<'button'> {}

export declare const MenubarTrigger: React.ForwardRefExoticComponent<
  MenubarTriggerProps & React.RefAttributes<React.ElementRef<'button'>>
>

export interface MenubarContentProps extends React.ComponentPropsWithoutRef<'div'> {
  align?: 'start' | 'center' | 'end'
  alignOffset?: number
  sideOffset?: number
}

export declare const MenubarContent: React.ForwardRefExoticComponent<
  MenubarContentProps & React.RefAttributes<React.ElementRef<'div'>>
>

export interface MenubarItemProps extends React.ComponentPropsWithoutRef<'div'> {
  inset?: boolean
}

export declare const MenubarItem: React.ForwardRefExoticComponent<
  MenubarItemProps & React.RefAttributes<React.ElementRef<'div'>>
>

export interface MenubarCheckboxItemProps extends React.ComponentPropsWithoutRef<'div'> {
  checked?: boolean
}

export declare const MenubarCheckboxItem: React.ForwardRefExoticComponent<
  MenubarCheckboxItemProps & React.RefAttributes<React.ElementRef<'div'>>
>

export interface MenubarRadioItemProps extends React.ComponentPropsWithoutRef<'div'> {}

export declare const MenubarRadioItem: React.ForwardRefExoticComponent<
  MenubarRadioItemProps & React.RefAttributes<React.ElementRef<'div'>>
>

export interface MenubarLabelProps extends React.ComponentPropsWithoutRef<'div'> {
  inset?: boolean
}

export declare const MenubarLabel: React.ForwardRefExoticComponent<
  MenubarLabelProps & React.RefAttributes<React.ElementRef<'div'>>
>

export interface MenubarSeparatorProps extends React.ComponentPropsWithoutRef<'div'> {}

export declare const MenubarSeparator: React.ForwardRefExoticComponent<
  MenubarSeparatorProps & React.RefAttributes<React.ElementRef<'div'>>
>

export interface MenubarShortcutProps extends React.ComponentPropsWithoutRef<'span'> {}

export declare const MenubarShortcut: React.FC<MenubarShortcutProps>

export interface MenubarSubProps extends React.ComponentPropsWithoutRef<'div'> {
  children?: React.ReactNode
}

export declare const MenubarSub: React.FC<MenubarSubProps>

export interface MenubarSubTriggerProps extends React.ComponentPropsWithoutRef<'div'> {
  inset?: boolean
}

export declare const MenubarSubTrigger: React.ForwardRefExoticComponent<
  MenubarSubTriggerProps & React.RefAttributes<React.ElementRef<'div'>>
>

export interface MenubarSubContentProps extends React.ComponentPropsWithoutRef<'div'> {}

export declare const MenubarSubContent: React.ForwardRefExoticComponent<
  MenubarSubContentProps & React.RefAttributes<React.ElementRef<'div'>>
>