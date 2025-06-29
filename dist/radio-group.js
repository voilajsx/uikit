import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";
import { cn } from "./utils.js";
const RadioGroup = forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  RadioGroupPrimitive.Root,
  {
    className: cn("grid gap-2", className),
    ...props,
    ref
  }
));
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
const RadioGroupItem = forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  RadioGroupPrimitive.Item,
  {
    ref,
    className: cn(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx(RadioGroupPrimitive.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx(Circle, { className: "h-3.5 w-3.5 fill-primary" }) })
  }
));
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;
export {
  RadioGroup,
  RadioGroupItem
};
//# sourceMappingURL=radio-group.js.map
