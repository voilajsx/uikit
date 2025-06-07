/**
 * Container component for page layouts
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.size='lg'] - Container size variant
 * @param {string} [props.padding='md'] - Container padding variant
 * @param {React.ReactNode} props.children - Container content
 * @returns {JSX.Element} Container component
 */
export const Container: import("react").ForwardRefExoticComponent<import("react").RefAttributes<any>>;
/**
 * Container variants defined with class-variance-authority
 */
export const containerVariants: (props?: ({
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "full" | null | undefined;
    padding?: "sm" | "md" | "lg" | "none" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
//# sourceMappingURL=container.d.ts.map