export const Dialog: import("react").FC<DialogPrimitive.DialogProps>;
export const DialogPortal: import("react").FC<DialogPrimitive.DialogPortalProps>;
/**
 * Dialog overlay component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional classes
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} DialogOverlay component
 */
export const DialogOverlay: import("react").ForwardRefExoticComponent<import("react").RefAttributes<any>>;
export const DialogClose: import("react").ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & import("react").RefAttributes<HTMLButtonElement>>;
export const DialogTrigger: import("react").ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
/**
 * Dialog content component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional classes
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} DialogContent component
 */
export const DialogContent: import("react").ForwardRefExoticComponent<import("react").RefAttributes<any>>;
/**
 * Dialog header component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional classes
 * @returns {JSX.Element} DialogHeader component
 */
export function DialogHeader({ className, ...props }: {
    className?: string | undefined;
}): JSX.Element;
export namespace DialogHeader {
    let displayName: string;
}
/**
 * Dialog footer component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional classes
 * @returns {JSX.Element} DialogFooter component
 */
export function DialogFooter({ className, ...props }: {
    className?: string | undefined;
}): JSX.Element;
export namespace DialogFooter {
    let displayName_1: string;
    export { displayName_1 as displayName };
}
/**
 * Dialog title component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional classes
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} DialogTitle component
 */
export const DialogTitle: import("react").ForwardRefExoticComponent<import("react").RefAttributes<any>>;
/**
 * Dialog description component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional classes
 * @param {React.Ref} ref - Forwarded ref
 * @returns {JSX.Element} DialogDescription component
 */
export const DialogDescription: import("react").ForwardRefExoticComponent<import("react").RefAttributes<any>>;
import * as DialogPrimitive from '@radix-ui/react-dialog';
//# sourceMappingURL=dialog.d.ts.map