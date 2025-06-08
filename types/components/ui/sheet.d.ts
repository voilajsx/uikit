export const Sheet: import("react").FC<SheetPrimitive.DialogProps>;
export const SheetPortal: import("react").FC<SheetPrimitive.DialogPortalProps>;
/**
 * Sheet overlay component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional classes
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} SheetOverlay component
 */
export const SheetOverlay: import("react").ForwardRefExoticComponent<import("react").RefAttributes<any>>;
export const SheetTrigger: import("react").ForwardRefExoticComponent<SheetPrimitive.DialogTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export const SheetClose: import("react").ForwardRefExoticComponent<SheetPrimitive.DialogCloseProps & import("react").RefAttributes<HTMLButtonElement>>;
/**
 * Sheet content component
 * @param {Object} props - Component props
 * @param {string} [props.side='right'] - Sheet side
 * @param {string} [props.className] - Additional classes
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} SheetContent component
 */
export const SheetContent: import("react").ForwardRefExoticComponent<import("react").RefAttributes<any>>;
/**
 * Sheet header component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional classes
 * @returns {JSX.Element} SheetHeader component
 */
export function SheetHeader({ className, ...props }: {
    className?: string | undefined;
}): JSX.Element;
export namespace SheetHeader {
    let displayName: string;
}
/**
 * Sheet footer component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional classes
 * @returns {JSX.Element} SheetFooter component
 */
export function SheetFooter({ className, ...props }: {
    className?: string | undefined;
}): JSX.Element;
export namespace SheetFooter {
    let displayName_1: string;
    export { displayName_1 as displayName };
}
/**
 * Sheet title component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional classes
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} SheetTitle component
 */
export const SheetTitle: import("react").ForwardRefExoticComponent<import("react").RefAttributes<any>>;
/**
 * Sheet description component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional classes
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} SheetDescription component
 */
export const SheetDescription: import("react").ForwardRefExoticComponent<import("react").RefAttributes<any>>;
import * as SheetPrimitive from '@radix-ui/react-dialog';
//# sourceMappingURL=sheet.d.ts.map