import { j as jsxRuntimeExports } from "../../_virtual/jsx-runtime.js";
import { forwardRef } from "react";
import { cn } from "../../lib/utils.js";
const Avatar = forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "div",
  {
    ref,
    className: cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    ),
    ...props
  }
));
Avatar.displayName = "Avatar";
const AvatarImage = forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "img",
  {
    ref,
    className: cn("aspect-square h-full w-full", className),
    ...props
  }
));
AvatarImage.displayName = "AvatarImage";
const AvatarFallback = forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "div",
  {
    ref,
    className: cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    ),
    ...props
  }
));
AvatarFallback.displayName = "AvatarFallback";
export {
  Avatar,
  AvatarFallback,
  AvatarImage
};
//# sourceMappingURL=avatar.js.map
