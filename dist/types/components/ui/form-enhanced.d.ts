/**
 * Enhanced Form Validation System - React Hook Form + Zod integration (FIXED)
 * @module @voilajsx/uikit
 * @file src/components/ui/form-enhanced.tsx
 */
import * as React from 'react';
import { FieldPath, FieldValues } from 'react-hook-form';
import { z, ZodSchema } from 'zod';
/**
 * Common Zod schemas for reuse
 */
declare const FormSchemas: {
    email: z.ZodString;
    password: z.ZodString;
    phone: z.ZodString;
    url: z.ZodString;
    username: z.ZodString;
    requiredString: (message?: string) => z.ZodString;
    optionalString: z.ZodOptional<z.ZodString>;
    passwordConfirmation: () => z.ZodEffects<z.ZodObject<{
        password: z.ZodString;
        confirmPassword: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        password: string;
        confirmPassword: string;
    }, {
        password: string;
        confirmPassword: string;
    }>, {
        password: string;
        confirmPassword: string;
    }, {
        password: string;
        confirmPassword: string;
    }>;
};
/**
 * Enhanced Form Provider - FIXED TYPE ISSUES
 */
interface EnhancedFormProps<T extends FieldValues = FieldValues> {
    /** Zod schema for validation - FIXED: More flexible type */
    schema: ZodSchema<T>;
    /** Default values */
    defaultValues?: Partial<T>;
    /** Form submission handler */
    onSubmit: (data: T) => void | Promise<void>;
    /** Error handler */
    onError?: (errors: any) => void;
    /** Loading state */
    loading?: boolean;
    /** Form mode */
    mode?: 'onChange' | 'onBlur' | 'onSubmit' | 'onTouched' | 'all';
    /** Revalidate mode */
    reValidateMode?: 'onChange' | 'onBlur' | 'onSubmit';
    /** Auto-save functionality */
    autoSave?: {
        enabled: boolean;
        debounceMs?: number;
        onSave?: (data: Partial<T>) => void;
    };
    /** Form layout */
    layout?: 'vertical' | 'horizontal' | 'inline';
    /** Form size */
    size?: 'sm' | 'md' | 'lg';
    /** Additional CSS classes */
    className?: string;
    /** Form content */
    children: React.ReactNode;
}
declare const EnhancedForm: <T extends FieldValues = FieldValues>({ schema, defaultValues, onSubmit, onError, loading, mode, reValidateMode, autoSave, layout, size, className, children, }: EnhancedFormProps<T>) => import("react/jsx-runtime").JSX.Element;
/**
 * Enhanced Form Field wrapper
 */
interface FormFieldProps<T extends FieldValues = FieldValues> {
    /** Field name */
    name: FieldPath<T>;
    /** Field label */
    label?: string;
    /** Field description */
    description?: string;
    /** Field is required */
    required?: boolean;
    /** Field variant */
    variant?: 'default' | 'inline' | 'stacked';
    /** Additional CSS classes */
    className?: string;
    /** Field content */
    children: React.ReactNode;
}
declare const FormField: <T extends FieldValues = FieldValues>({ name, label, description, required, variant, className, children, }: FormFieldProps<T>) => import("react/jsx-runtime").JSX.Element;
/**
 * Enhanced Input Field
 */
interface InputFieldProps<T extends FieldValues = FieldValues> {
    /** Field name */
    name: FieldPath<T>;
    /** Input type */
    type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
    /** Placeholder text */
    placeholder?: string;
    /** Input is disabled */
    disabled?: boolean;
    /** Input is readonly */
    readOnly?: boolean;
    /** Show password toggle (for password type) */
    showPasswordToggle?: boolean;
    /** Input prefix icon */
    prefixIcon?: React.ComponentType<{
        className?: string;
    }>;
    /** Input suffix icon */
    suffixIcon?: React.ComponentType<{
        className?: string;
    }>;
    /** Additional props */
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}
declare const InputField: <T extends FieldValues = FieldValues>({ name, type, placeholder, disabled, readOnly, showPasswordToggle, prefixIcon: PrefixIcon, suffixIcon: SuffixIcon, inputProps, }: InputFieldProps<T>) => import("react/jsx-runtime").JSX.Element;
/**
 * Enhanced Textarea Field
 */
interface TextareaFieldProps<T extends FieldValues = FieldValues> {
    /** Field name */
    name: FieldPath<T>;
    /** Placeholder text */
    placeholder?: string;
    /** Number of rows */
    rows?: number;
    /** Textarea is disabled */
    disabled?: boolean;
    /** Textarea is readonly */
    readOnly?: boolean;
    /** Show character count */
    showCharCount?: boolean;
    /** Maximum characters */
    maxLength?: number;
    /** Additional props */
    textareaProps?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
}
declare const TextareaField: <T extends FieldValues = FieldValues>({ name, placeholder, rows, disabled, readOnly, showCharCount, maxLength, textareaProps, }: TextareaFieldProps<T>) => import("react/jsx-runtime").JSX.Element;
/**
 * Enhanced Select Field
 */
interface SelectFieldProps<T extends FieldValues = FieldValues> {
    /** Field name */
    name: FieldPath<T>;
    /** Placeholder text */
    placeholder?: string;
    /** Select options */
    options: Array<{
        label: string;
        value: string | number;
        disabled?: boolean;
    }>;
    /** Select is disabled */
    disabled?: boolean;
    /** Allow clearing selection */
    clearable?: boolean;
}
declare const SelectField: <T extends FieldValues = FieldValues>({ name, placeholder, options, disabled, clearable, }: SelectFieldProps<T>) => import("react/jsx-runtime").JSX.Element;
/**
 * Enhanced Checkbox Field
 */
interface CheckboxFieldProps<T extends FieldValues = FieldValues> {
    /** Field name */
    name: FieldPath<T>;
    /** Checkbox label */
    label: string;
    /** Checkbox description */
    description?: string;
    /** Checkbox is disabled */
    disabled?: boolean;
}
declare const CheckboxField: <T extends FieldValues = FieldValues>({ name, label, description, disabled, }: CheckboxFieldProps<T>) => import("react/jsx-runtime").JSX.Element;
/**
 * Enhanced Radio Group Field
 */
interface RadioGroupFieldProps<T extends FieldValues = FieldValues> {
    /** Field name */
    name: FieldPath<T>;
    /** Radio options */
    options: Array<{
        label: string;
        value: string;
        description?: string;
        disabled?: boolean;
    }>;
    /** Radio group orientation */
    orientation?: 'horizontal' | 'vertical';
    /** Radio group is disabled */
    disabled?: boolean;
}
declare const RadioGroupField: <T extends FieldValues = FieldValues>({ name, options, orientation, disabled, }: RadioGroupFieldProps<T>) => import("react/jsx-runtime").JSX.Element;
/**
 * Enhanced Switch Field
 */
interface SwitchFieldProps<T extends FieldValues = FieldValues> {
    /** Field name */
    name: FieldPath<T>;
    /** Switch label */
    label: string;
    /** Switch description */
    description?: string;
    /** Switch is disabled */
    disabled?: boolean;
}
declare const SwitchField: <T extends FieldValues = FieldValues>({ name, label, description, disabled, }: SwitchFieldProps<T>) => import("react/jsx-runtime").JSX.Element;
/**
 * Enhanced File Upload Field
 */
interface FileUploadFieldProps<T extends FieldValues = FieldValues> {
    /** Field name */
    name: FieldPath<T>;
    /** Accepted file types */
    accept?: string;
    /** Allow multiple files */
    multiple?: boolean;
    /** Maximum file size in MB */
    maxSize?: number;
    /** Upload text */
    uploadText?: string;
    /** File upload is disabled */
    disabled?: boolean;
}
declare const FileUploadField: <T extends FieldValues = FieldValues>({ name, accept, multiple, maxSize, uploadText, disabled, }: FileUploadFieldProps<T>) => import("react/jsx-runtime").JSX.Element;
/**
 * Dynamic Array Field
 */
interface ArrayFieldProps<T extends FieldValues = FieldValues> {
    /** Field name */
    name: FieldPath<T>;
    /** Array item renderer */
    renderItem: (index: number, remove: () => void) => React.ReactNode;
    /** Add button text */
    addButtonText?: string;
    /** Minimum items */
    minItems?: number;
    /** Maximum items */
    maxItems?: number;
}
declare const ArrayField: <T extends FieldValues = FieldValues>({ name, renderItem, addButtonText, minItems, maxItems, }: ArrayFieldProps<T>) => import("react/jsx-runtime").JSX.Element;
/**
 * Form Actions
 */
interface FormActionsProps {
    /** Submit button text */
    submitText?: string;
    /** Cancel button text */
    cancelText?: string;
    /** Show cancel button */
    showCancel?: boolean;
    /** Cancel handler */
    onCancel?: () => void;
    /** Additional actions */
    actions?: React.ReactNode;
    /** Actions alignment */
    align?: 'left' | 'center' | 'right';
}
declare const FormActions: ({ submitText, cancelText, showCancel, onCancel, actions, align, }: FormActionsProps) => import("react/jsx-runtime").JSX.Element;
export { EnhancedForm, FormField, InputField, TextareaField, SelectField, CheckboxField, RadioGroupField, SwitchField, FileUploadField, ArrayField, FormActions, FormSchemas, };
//# sourceMappingURL=form-enhanced.d.ts.map