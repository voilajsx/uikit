import { HTMLAttributes, ImgHTMLAttributes } from 'react'

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {}

export interface AvatarImageProps extends ImgHTMLAttributes<HTMLImageElement> {}

export interface AvatarFallbackProps extends HTMLAttributes<HTMLDivElement> {}

export declare const Avatar: React.ForwardRefExoticComponent<
  AvatarProps & React.RefAttributes<HTMLDivElement>
>

export declare const AvatarImage: React.ForwardRefExoticComponent<
  AvatarImageProps & React.RefAttributes<HTMLImageElement>
>

export declare const AvatarFallback: React.ForwardRefExoticComponent<
  AvatarFallbackProps & React.RefAttributes<HTMLDivElement>
>