import { HTMLAttributes } from 'react'
import { ControllerProps, FieldPath, FieldValues, FormProvider } from 'react-hook-form'

export interface FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> {
  name: TName
}

export interface FormItemContextValue {
  id: string
}

export interface UseFormFieldReturn {
  id: string
  name: string
  formItemId: string
  formDescriptionId: string
  formMessageId: string
  invalid: boolean
  isDirty: boolean
  isTouched: boolean
  error?: {
    message?: string
  }
}

export interface FormItemProps extends HTMLAttributes<HTMLDivElement> {}
export interface FormLabelProps extends HTMLAttributes<HTMLLabelElement> {}
export interface FormControlProps extends HTMLAttributes<HTMLDivElement> {}
export interface FormDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}
export interface FormMessageProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: React.ReactNode
}

export declare const Form: typeof FormProvider

export declare function FormField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(props: ControllerProps<TFieldValues, TName>): React.ReactElement

export declare function useFormField(): UseFormFieldReturn

export declare const FormItem: React.ForwardRefExoticComponent<
  FormItemProps & React.RefAttributes<HTMLDivElement>
>

export declare const FormLabel: React.ForwardRefExoticComponent<
  FormLabelProps & React.RefAttributes<HTMLLabelElement>
>

export declare const FormControl: React.ForwardRefExoticComponent<
  FormControlProps & React.RefAttributes<HTMLDivElement>
>

export declare const FormDescription: React.ForwardRefExoticComponent<
  FormDescriptionProps & React.RefAttributes<HTMLParagraphElement>
>

export declare const FormMessage: React.ForwardRefExoticComponent<
  FormMessageProps & React.RefAttributes<HTMLParagraphElement>
>