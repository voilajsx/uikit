/**
 * Enhanced Form Validation System - React Hook Form + Zod integration (FIXED)
 * @module @voilajsx/uikit
 * @file src/components/ui/form-enhanced.tsx
 */

import * as React from 'react';
import { forwardRef, createContext, useContext, useState, useCallback } from 'react';
import { 
  useForm, 
  FormProvider, 
  useFormContext, 
  Controller,
  FieldPath,
  FieldValues,
  UseFormReturn,
  SubmitHandler,
  SubmitErrorHandler
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z, ZodSchema } from 'zod';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { 
  AlertCircle, 
  CheckCircle2, 
  Eye, 
  EyeOff, 
  Calendar,
  Upload,
  X,
  Plus
} from 'lucide-react';

/**
 * Common Zod schemas for reuse
 */
const FormSchemas = {
  email: z.string()
    .min(1, 'Email is required')
    .email('Invalid email address'),
  
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Password must contain uppercase, lowercase, and number'),
  
  phone: z.string()
    .min(1, 'Phone number is required')
    .regex(/^[\+]?[1-9][\d]{0,15}$/, 'Invalid phone number format'),
  
  url: z.string()
    .min(1, 'URL is required')
    .url('Invalid URL format'),
  
  username: z.string()
    .min(3, 'Username must be at least 3 characters')
    .max(20, 'Username must be less than 20 characters')
    .regex(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores'),
  
  requiredString: (message = 'This field is required') => 
    z.string().min(1, message),
  
  optionalString: z.string().optional(),
  
  // Password confirmation schema builder
  passwordConfirmation: () => z.object({
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string().min(1, 'Please confirm your password'),
  }).refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  }),
};

/**
 * Form field variants
 */
const fieldVariants = cva(
  'space-y-2',
  {
    variants: {
      variant: {
        default: '',
        inline: 'flex items-center space-y-0 space-x-2',
        stacked: 'space-y-1',
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
);

const errorVariants = cva(
  'text-sm font-medium flex items-center gap-1',
  {
    variants: {
      variant: {
        destructive: 'text-destructive',
        warning: 'text-orange-600',
        success: 'text-green-600',
      }
    },
    defaultVariants: {
      variant: 'destructive'
    }
  }
);

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

const EnhancedForm = <T extends FieldValues = FieldValues>({
  schema,
  defaultValues,
  onSubmit,
  onError,
  loading = false,
  mode = 'onChange',
  reValidateMode = 'onChange',
  autoSave,
  layout = 'vertical',
  size = 'md',
  className,
  children,
}: EnhancedFormProps<T>) => {
  // FIXED: Proper type casting for zodResolver
  const form = useForm<T>({
    resolver: zodResolver(schema as any), // Type assertion to fix resolver compatibility
    defaultValues: defaultValues as any,
    mode,
    reValidateMode,
  });

  // Auto-save functionality
  React.useEffect(() => {
    if (!autoSave?.enabled) return;

    const subscription = form.watch((data) => {
      const timeoutId = setTimeout(() => {
        autoSave.onSave?.(data as Partial<T>);
      }, autoSave.debounceMs || 1000);

      return () => clearTimeout(timeoutId);
    });

    return () => subscription.unsubscribe();
  }, [form, autoSave]);

  const handleSubmit: SubmitHandler<T> = (data) => {
    onSubmit(data);
  };

  const handleError: SubmitErrorHandler<T> = (errors) => {
    onError?.(errors);
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit, handleError)}
        className={cn(
          'space-y-6',
          layout === 'horizontal' && 'space-y-4',
          layout === 'inline' && 'space-y-2',
          className
        )}
        noValidate
      >
        <FormContext.Provider value={{ layout, size, loading }}>
          {children}
        </FormContext.Provider>
      </form>
    </FormProvider>
  );
};

/**
 * Form context
 */
interface FormContextValue {
  layout: 'vertical' | 'horizontal' | 'inline';
  size: 'sm' | 'md' | 'lg';
  loading: boolean;
}

const FormContext = createContext<FormContextValue>({
  layout: 'vertical',
  size: 'md',
  loading: false,
});

const useFormFieldContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('Form field components must be used within EnhancedForm');
  }
  return context;
};

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

const FormField = <T extends FieldValues = FieldValues>({
  name,
  label,
  description,
  required = false,
  variant = 'default',
  className,
  children,
}: FormFieldProps<T>) => {
  const { formState } = useFormContext<T>();
  const { layout } = useFormFieldContext();
  const error = formState.errors[name];

  return (
    <div className={cn(fieldVariants({ variant }), className)}>
      {label && (
        <Label 
          htmlFor={name}
          className={cn(
            'text-foreground',
            layout === 'horizontal' && 'min-w-24',
            required && "after:content-['*'] after:ml-0.5 after:text-destructive"
          )}
        >
          {label}
        </Label>
      )}
      
      <div className={cn(layout === 'horizontal' && 'flex-1')}>
        {children}
        
        {error && (
          <div className={errorVariants({ variant: 'destructive' })}>
            <AlertCircle className="h-4 w-4" />
            {error.message as string}
          </div>
        )}
        
        {description && !error && (
          <p className="text-sm text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

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
  prefixIcon?: React.ComponentType<{ className?: string }>;
  /** Input suffix icon */
  suffixIcon?: React.ComponentType<{ className?: string }>;
  /** Additional props */
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

const InputField = <T extends FieldValues = FieldValues>({
  name,
  type = 'text',
  placeholder,
  disabled = false,
  readOnly = false,
  showPasswordToggle = false,
  prefixIcon: PrefixIcon,
  suffixIcon: SuffixIcon,
  inputProps,
}: InputFieldProps<T>) => {
  const { control } = useFormContext<T>();
  const { loading } = useFormFieldContext();
  const [showPassword, setShowPassword] = useState(false);

  const actualType = type === 'password' && showPassword ? 'text' : type;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <div className="relative">
          {PrefixIcon && (
            <PrefixIcon className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          )}
          
          <Input
            {...field}
            {...inputProps}
            type={actualType}
            placeholder={placeholder}
            disabled={disabled || loading}
            readOnly={readOnly}
            className={cn(
              'bg-background border-border text-foreground',
              PrefixIcon && 'pl-9',
              (SuffixIcon || (type === 'password' && showPasswordToggle)) && 'pr-9',
              fieldState.error && 'border-destructive focus:border-destructive'
            )}
          />
          
          {type === 'password' && showPasswordToggle && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </Button>
          )}
          
          {SuffixIcon && !showPasswordToggle && (
            <SuffixIcon className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
          )}
        </div>
      )}
    />
  );
};

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

const TextareaField = <T extends FieldValues = FieldValues>({
  name,
  placeholder,
  rows = 3,
  disabled = false,
  readOnly = false,
  showCharCount = false,
  maxLength,
  textareaProps,
}: TextareaFieldProps<T>) => {
  const { control } = useFormContext<T>();
  const { loading } = useFormFieldContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <div className="space-y-1">
          <Textarea
            {...field}
            {...textareaProps}
            placeholder={placeholder}
            rows={rows}
            disabled={disabled || loading}
            readOnly={readOnly}
            maxLength={maxLength}
            className={cn(
              'bg-background border-border text-foreground',
              fieldState.error && 'border-destructive focus:border-destructive'
            )}
          />
          
          {showCharCount && (
            <div className="text-xs text-muted-foreground text-right">
              {field.value?.length || 0}
              {maxLength && ` / ${maxLength}`}
            </div>
          )}
        </div>
      )}
    />
  );
};

/**
 * Enhanced Select Field
 */
interface SelectFieldProps<T extends FieldValues = FieldValues> {
  /** Field name */
  name: FieldPath<T>;
  /** Placeholder text */
  placeholder?: string;
  /** Select options */
  options: Array<{ label: string; value: string | number; disabled?: boolean }>;
  /** Select is disabled */
  disabled?: boolean;
  /** Allow clearing selection */
  clearable?: boolean;
}

const SelectField = <T extends FieldValues = FieldValues>({
  name,
  placeholder = 'Select an option...',
  options,
  disabled = false,
  clearable = false,
}: SelectFieldProps<T>) => {
  const { control } = useFormContext<T>();
  const { loading } = useFormFieldContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Select
          value={field.value?.toString()}
          onValueChange={field.onChange}
          disabled={disabled || loading}
        >
          <SelectTrigger
            className={cn(
              'bg-background border-border text-foreground',
              fieldState.error && 'border-destructive focus:border-destructive'
            )}
          >
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent className="bg-popover border-border">
            {clearable && field.value && (
              <SelectItem value="" className="text-muted-foreground">
                Clear selection
              </SelectItem>
            )}
            {options.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value.toString()}
                disabled={option.disabled}
                className="text-foreground"
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    />
  );
};

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

const CheckboxField = <T extends FieldValues = FieldValues>({
  name,
  label,
  description,
  disabled = false,
}: CheckboxFieldProps<T>) => {
  const { control } = useFormContext<T>();
  const { loading } = useFormFieldContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className="flex items-start space-x-2">
          <Checkbox
            checked={field.value}
            onCheckedChange={field.onChange}
            disabled={disabled || loading}
            className="mt-0.5"
          />
          <div className="space-y-1">
            <Label className="text-sm font-medium leading-none text-foreground">
              {label}
            </Label>
            {description && (
              <p className="text-xs text-muted-foreground">
                {description}
              </p>
            )}
          </div>
        </div>
      )}
    />
  );
};

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

const RadioGroupField = <T extends FieldValues = FieldValues>({
  name,
  options,
  orientation = 'vertical',
  disabled = false,
}: RadioGroupFieldProps<T>) => {
  const { control } = useFormContext<T>();
  const { loading } = useFormFieldContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <RadioGroup
          value={field.value}
          onValueChange={field.onChange}
          disabled={disabled || loading}
          className={cn(
            'space-y-2',
            orientation === 'horizontal' && 'flex space-y-0 space-x-4'
          )}
        >
          {options.map((option) => (
            <div key={option.value} className="flex items-center space-x-2">
              <RadioGroupItem
                value={option.value}
                disabled={option.disabled || disabled || loading}
              />
              <div className="space-y-1">
                <Label className="text-sm font-medium text-foreground">
                  {option.label}
                </Label>
                {option.description && (
                  <p className="text-xs text-muted-foreground">
                    {option.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </RadioGroup>
      )}
    />
  );
};

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

const SwitchField = <T extends FieldValues = FieldValues>({
  name,
  label,
  description,
  disabled = false,
}: SwitchFieldProps<T>) => {
  const { control } = useFormContext<T>();
  const { loading } = useFormFieldContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <Label className="text-sm font-medium text-foreground">
              {label}
            </Label>
            {description && (
              <p className="text-xs text-muted-foreground">
                {description}
              </p>
            )}
          </div>
          <Switch
            checked={field.value}
            onCheckedChange={field.onChange}
            disabled={disabled || loading}
          />
        </div>
      )}
    />
  );
};

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

const FileUploadField = <T extends FieldValues = FieldValues>({
  name,
  accept,
  multiple = false,
  maxSize = 5,
  uploadText = 'Click to upload or drag and drop',
  disabled = false,
}: FileUploadFieldProps<T>) => {
  const { control } = useFormContext<T>();
  const { loading } = useFormFieldContext();
  const [dragOver, setDragOver] = useState(false);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange, ...field }, fieldState }) => (
        <div className="space-y-2">
          <div
            className={cn(
              'border-2 border-dashed rounded-lg p-6 text-center transition-colors border-border',
              dragOver && 'border-primary bg-primary/5',
              fieldState.error && 'border-destructive',
              disabled || loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:border-primary hover:bg-primary/5'
            )}
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(true);
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={(e) => {
              e.preventDefault();
              setDragOver(false);
              if (disabled || loading) return;
              
              const files = e.dataTransfer.files;
              if (files.length > 0) {
                onChange(multiple ? files : files[0]);
              }
            }}
            onClick={() => {
              if (disabled || loading) return;
              const input = document.createElement('input');
              input.type = 'file';
              input.accept = accept || '';
              input.multiple = multiple;
              input.onchange = (e) => {
                const files = (e.target as HTMLInputElement).files;
                if (files && files.length > 0) {
                  onChange(multiple ? files : files[0]);
                }
              };
              input.click();
            }}
          >
            <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              {uploadText}
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              {accept && `Accepted formats: ${accept}`}
              {maxSize && ` • Max size: ${maxSize}MB`}
            </p>
          </div>

          {value && (
            <div className="space-y-1">
              {multiple && Array.isArray(value) ? (
                value.map((file: any, index: number) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <span className="text-foreground">{file?.name || 'Unknown file'}</span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        const newFiles = value.filter((_: any, i: number) => i !== index);
                        onChange(newFiles.length > 0 ? newFiles : null);
                      }}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))
              ) : value && typeof value === 'object' && 'name' in value ? (
                <div className="flex items-center justify-between text-sm">
                  <span className="text-foreground">{(value as any).name}</span>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => onChange(null)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : null}
            </div>
          )}
        </div>
      )}
    />
  );
};

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

const ArrayField = <T extends FieldValues = FieldValues>({
  name,
  renderItem,
  addButtonText = 'Add Item',
  minItems = 0,
  maxItems,
}: ArrayFieldProps<T>) => {
  const { control, getValues, setValue } = useFormContext<T>();
  const { loading } = useFormFieldContext();

  const addItem = useCallback(() => {
    const currentValue = getValues(name) || [];
    if (maxItems && currentValue.length >= maxItems) return;
    
    setValue(name, [...currentValue, {}] as any);
  }, [name, getValues, setValue, maxItems]);

  const removeItem = useCallback((index: number) => {
    const currentValue = getValues(name) || [];
    if (currentValue.length <= minItems) return;
    
    const newValue = currentValue.filter((_: any, i: number) => i !== index);
    setValue(name, newValue as any);
  }, [name, getValues, setValue, minItems]);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className="space-y-4">
          {(field.value || []).map((_: any, index: number) => (
            <div key={index} className="border border-border rounded-lg p-4 bg-card">
              {renderItem(index, () => removeItem(index))}
            </div>
          ))}
          
          <Button
            type="button"
            variant="outline"
            onClick={addItem}
            disabled={loading || Boolean(maxItems && (field.value?.length || 0) >= maxItems)}
            className="w-full border-border"
          >
            <Plus className="h-4 w-4 mr-2" />
            {addButtonText}
          </Button>
        </div>
      )}
    />
  );
};

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

const FormActions = ({
  submitText = 'Submit',
  cancelText = 'Cancel',
  showCancel = false,
  onCancel,
  actions,
  align = 'right',
}: FormActionsProps) => {
  const { formState } = useFormContext();
  const { loading } = useFormFieldContext();

  return (
    <div className={cn(
      'flex gap-2',
      align === 'left' && 'justify-start',
      align === 'center' && 'justify-center',
      align === 'right' && 'justify-end'
    )}>
      {actions}
      
      {showCancel && (
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          disabled={loading}
          className="border-border"
        >
          {cancelText}
        </Button>
      )}
      
      <Button
        type="submit"
        disabled={loading || !formState.isValid}
        className="min-w-24 bg-primary text-primary-foreground"
      >
        {loading ? (
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            Loading...
          </div>
        ) : (
          submitText
        )}
      </Button>
    </div>
  );
};

export {
  EnhancedForm,
  FormField,
  InputField,
  TextareaField,
  SelectField,
  CheckboxField,
  RadioGroupField,
  SwitchField,
  FileUploadField,
  ArrayField,
  FormActions,
  FormSchemas,
};