import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../../lib/utils.js";
const Header = forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "header",
  {
    ref,
    className: cn(
      "sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/60",
      className
    ),
    ...props
  }
));
Header.displayName = "Header";
export {
  Header
};
//# sourceMappingURL=header.js.map
