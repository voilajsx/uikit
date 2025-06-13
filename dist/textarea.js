import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "./utils.js";
const Textarea = forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "textarea",
  {
    className: cn(
      "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      className
    ),
    ref,
    ...props
  }
));
Textarea.displayName = "Textarea";
export {
  Textarea
};
//# sourceMappingURL=textarea.js.map
