import { HTMLAttributes, ReactNode } from 'react'

export interface DataTableColumn<T = any> {
  key: string
  title: string
  sortable?: boolean
  render?: (value: any, row: T) => ReactNode
}

export interface DataTableProps<T = any> extends HTMLAttributes<HTMLDivElement> {
  columns: DataTableColumn<T>[]
  data: T[]
  searchable?: boolean
  sortable?: boolean
}

export declare const DataTable: React.ForwardRefExoticComponent<
  DataTableProps & React.RefAttributes<HTMLDivElement>
>