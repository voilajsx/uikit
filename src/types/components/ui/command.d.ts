import { HTMLAttributes, InputHTMLAttributes } from 'react'

export interface CommandProps extends HTMLAttributes<HTMLDivElement> {}
export interface CommandInputProps extends InputHTMLAttributes<HTMLInputElement> {}
export interface CommandListProps extends HTMLAttributes<HTMLDivElement> {}
export interface CommandEmptyProps extends HTMLAttributes<HTMLDivElement> {}
export interface CommandGroupProps extends HTMLAttributes<HTMLDivElement> {}
export interface CommandItemProps extends HTMLAttributes<HTMLDivElement> {}
export interface CommandShortcutProps extends HTMLAttributes<HTMLSpanElement> {}
export interface CommandSeparatorProps extends HTMLAttributes<HTMLDivElement> {}

export declare const Command: React.ForwardRefExoticComponent<
  CommandProps & React.RefAttributes<HTMLDivElement>
>

export declare const CommandInput: React.ForwardRefExoticComponent<
  CommandInputProps & React.RefAttributes<HTMLInputElement>
>

export declare const CommandList: React.ForwardRefExoticComponent<
  CommandListProps & React.RefAttributes<HTMLDivElement>
>

export declare const CommandEmpty: React.ForwardRefExoticComponent<
  CommandEmptyProps & React.RefAttributes<HTMLDivElement>
>

export declare const CommandGroup: React.ForwardRefExoticComponent<
  CommandGroupProps & React.RefAttributes<HTMLDivElement>
>

export declare const CommandItem: React.ForwardRefExoticComponent<
  CommandItemProps & React.RefAttributes<HTMLDivElement>
>

export declare const CommandShortcut: React.FC<CommandShortcutProps>

export declare const CommandSeparator: React.ForwardRefExoticComponent<
  CommandSeparatorProps & React.RefAttributes<HTMLDivElement>
>