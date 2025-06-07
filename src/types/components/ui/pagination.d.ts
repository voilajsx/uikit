
export interface PaginationProps extends React.ComponentPropsWithoutRef<'nav'> {}

export declare const Pagination: React.FC<PaginationProps>

export interface PaginationContentProps extends React.ComponentPropsWithoutRef<'ul'> {}

export declare const PaginationContent: React.ForwardRefExoticComponent<
  PaginationContentProps & React.RefAttributes<React.ElementRef<'ul'>>
>

export interface PaginationItemProps extends React.ComponentPropsWithoutRef<'li'> {}

export declare const PaginationItem: React.ForwardRefExoticComponent<
  PaginationItemProps & React.RefAttributes<React.ElementRef<'li'>>
>

export interface PaginationLinkProps extends React.ComponentPropsWithoutRef<'button'> {
  isActive?: boolean
  size?: 'default' | 'sm' | 'lg' | 'icon'
}

export declare const PaginationLink: React.FC<PaginationLinkProps>

export interface PaginationPreviousProps extends React.ComponentPropsWithoutRef<'button'> {}

export declare const PaginationPrevious: React.FC<PaginationPreviousProps>

export interface PaginationNextProps extends React.ComponentPropsWithoutRef<'button'> {}

export declare const PaginationNext: React.FC<PaginationNextProps>

export interface PaginationEllipsisProps extends React.ComponentPropsWithoutRef<'span'> {}

export declare const PaginationEllipsis: React.FC<PaginationEllipsisProps>