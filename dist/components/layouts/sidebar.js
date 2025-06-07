import { j as jsxRuntimeExports } from "../../_virtual/jsx-runtime.js";
import { forwardRef } from "react";
import { cn } from "../../lib/utils.js";
const Sidebar = forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "aside",
  {
    ref,
    className: cn(
      "flex h-full w-64 flex-col border-r border-border bg-background",
      className
    ),
    ...props
  }
));
Sidebar.displayName = "Sidebar";
export {
  Sidebar
};
//# sourceMappingURL=sidebar.js.map
