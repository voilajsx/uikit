/**
 * Badge component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.variant='default'] - Badge variant
 * @param {React.ReactNode} props.children - Badge content
 * @returns {JSX.Element} Badge component
 */
export function Badge({ className, variant, ...props }: {
    className?: string | undefined;
    variant?: string | undefined;
    children: React.ReactNode;
}): JSX.Element;
/**
 * Badge variants defined with class-variance-authority
 */
export const badgeVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
//# sourceMappingURL=badge.d.ts.map