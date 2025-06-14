import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "./utils.js";
const Card = forwardRef(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "div";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      ref,
      className: cn(
        "rounded-lg border border-none bg-card text-card-foreground shadow-sm",
        className
      ),
      ...props
    }
  );
});
Card.displayName = "Card";
const CardHeader = forwardRef(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "div";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      ref,
      className: cn("flex flex-col space-y-1.5 p-6", className),
      ...props
    }
  );
});
CardHeader.displayName = "CardHeader";
const CardTitle = forwardRef(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "h3";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      ref,
      className: cn(
        "text-xl font-semibold leading-none tracking-tight",
        className
      ),
      ...props
    }
  );
});
CardTitle.displayName = "CardTitle";
const CardDescription = forwardRef(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "p";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      ref,
      className: cn("text-sm text-muted-foreground", className),
      ...props
    }
  );
});
CardDescription.displayName = "CardDescription";
const CardContent = forwardRef(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "div";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      ref,
      className: cn("p-6 pt-0", className),
      ...props
    }
  );
});
CardContent.displayName = "CardContent";
const CardFooter = forwardRef(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "div";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      ref,
      className: cn("flex items-center p-6 pt-0", className),
      ...props
    }
  );
});
CardFooter.displayName = "CardFooter";
export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
};
//# sourceMappingURL=card.js.map
