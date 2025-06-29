/**
 * Button component with variants and sizes
 * @param {Object} props - Component props
 * @param {string} [props.variant='default'] - Button variant
 * @param {string} [props.size='default'] - Button size
 * @param {string} [props.className] - Additional classes
 * @param {boolean} [props.asChild=false] - Render as child
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} Button component
 */
export const Button: import("react").ForwardRefExoticComponent<import("react").RefAttributes<any>>;
export const buttonVariants: (props?: ({
    variant?: "default" | "link" | "secondary" | "outline" | "ghost" | "destructive" | null | undefined;
    size?: "default" | "icon" | "sm" | "lg" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
//# sourceMappingURL=button.d.ts.map