/**
 * Hook to access form field context
 * @returns {Object} Form field context
 */
export function useFormField(): Object;
export const Form: <TFieldValues extends import("react-hook-form").FieldValues, TContext = any, TTransformedValues = TFieldValues>(props: import("react-hook-form").FormProviderProps<TFieldValues, TContext, TTransformedValues>) => React.JSX.Element;
/**
 * Form item container component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional classes
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} FormItem component
 */
export const FormItem: import("react").ForwardRefExoticComponent<import("react").RefAttributes<any>>;
/**
 * Form label component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional classes
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} FormLabel component
 */
export const FormLabel: import("react").ForwardRefExoticComponent<import("react").RefAttributes<any>>;
/**
 * Form control wrapper component
 * @param {Object} props - Component props
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} FormControl component
 */
export const FormControl: import("react").ForwardRefExoticComponent<import("react").RefAttributes<any>>;
/**
 * Form description component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional classes
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} FormDescription component
 */
export const FormDescription: import("react").ForwardRefExoticComponent<import("react").RefAttributes<any>>;
/**
 * Form error message component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional classes
 * @param {React.ReactNode} [props.children] - Custom error message
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} FormMessage component
 */
export const FormMessage: import("react").ForwardRefExoticComponent<import("react").RefAttributes<any>>;
/**
 * Form field wrapper component
 * @param {Object} props - Component props
 * @param {string} props.name - Field name
 * @param {Function} props.control - React Hook Form control
 * @param {Function} props.render - Render function
 * @returns {JSX.Element} FormField component
 */
export function FormField({ ...props }: {
    name: string;
    control: Function;
    render: Function;
}): JSX.Element;
//# sourceMappingURL=form.d.ts.map