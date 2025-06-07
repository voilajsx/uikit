import { HTMLAttributes } from 'react'

export interface CalendarProps extends HTMLAttributes<HTMLDivElement> {
  classNames?: Record<string, string>
  showOutsideDays?: boolean
  selected?: Date | Date[]
  onSelect?: (date: Date | Date[] | undefined) => void
  disabled?: (date: Date) => boolean
  mode?: 'single' | 'multiple' | 'range'
  defaultMonth?: Date
  fromDate?: Date
  toDate?: Date
}

export declare const Calendar: React.ForwardRefExoticComponent<
  CalendarProps & React.RefAttributes<HTMLDivElement>
>