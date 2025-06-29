import { HTMLAttributes, ThHTMLAttributes, TdHTMLAttributes } from 'react'

export interface TableProps extends HTMLAttributes<HTMLTableElement> {}
export interface TableHeaderProps extends HTMLAttributes<HTMLTableSectionElement> {}
export interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {}
export interface TableFooterProps extends HTMLAttributes<HTMLTableSectionElement> {}
export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {}
export interface TableHeadProps extends ThHTMLAttributes<HTMLTableCellElement> {}
export interface TableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {}
export interface TableCaptionProps extends HTMLAttributes<HTMLTableCaptionElement> {}

export declare const Table: React.ForwardRefExoticComponent<
  TableProps & React.RefAttributes<HTMLTableElement>
>

export declare const TableHeader: React.ForwardRefExoticComponent<
  TableHeaderProps & React.RefAttributes<HTMLTableSectionElement>
>

export declare const TableBody: React.ForwardRefExoticComponent<
  TableBodyProps & React.RefAttributes<HTMLTableSectionElement>
>

export declare const TableFooter: React.ForwardRefExoticComponent<
  TableFooterProps & React.RefAttributes<HTMLTableSectionElement>
>

export declare const TableRow: React.ForwardRefExoticComponent<
  TableRowProps & React.RefAttributes<HTMLTableRowElement>
>

export declare const TableHead: React.ForwardRefExoticComponent<
  TableHeadProps & React.RefAttributes<HTMLTableCellElement>
>

export declare const TableCell: React.ForwardRefExoticComponent<
  TableCellProps & React.RefAttributes<HTMLTableCellElement>
>

export declare const TableCaption: React.ForwardRefExoticComponent<
  TableCaptionProps & React.RefAttributes<HTMLTableCaptionElement>
>