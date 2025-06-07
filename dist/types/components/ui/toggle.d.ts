/**
 * Toggle component for pressed/unpressed states
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional classes
 * @param {string} [props.variant='default'] - Toggle variant
 * @param {string} [props.size='default'] - Toggle size
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} Toggle component
 */
export const Toggle: import("react").ForwardRefExoticComponent<import("react").RefAttributes<any>>;
export const toggleVariants: (props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
//# sourceMappingURL=toggle.d.ts.map