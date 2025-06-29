import { jsx } from "react/jsx-runtime";
import { cn } from "./utils.js";
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn("animate-pulse rounded-md bg-primary/10", className),
      ...props
    }
  );
}
export {
  Skeleton
};
//# sourceMappingURL=skeleton.js.map
