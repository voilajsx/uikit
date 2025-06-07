import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils.js";
const containerVariants = cva(
  "mx-auto px-4 sm:px-6 lg:px-8",
  {
    variants: {
      size: {
        sm: "max-w-screen-sm",
        md: "max-w-screen-md",
        lg: "max-w-screen-lg",
        xl: "max-w-screen-xl",
        "2xl": "max-w-screen-2xl",
        full: "max-w-full"
      },
      padding: {
        none: "px-0 sm:px-0 lg:px-0",
        sm: "px-2 sm:px-3 lg:px-4",
        md: "px-4 sm:px-6 lg:px-8",
        lg: "px-6 sm:px-8 lg:px-12"
      }
    },
    defaultVariants: {
      size: "lg",
      padding: "md"
    }
  }
);
const Container = forwardRef(({
  className,
  size,
  padding,
  children,
  ...props
}, ref) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn(containerVariants({ size, padding, className })),
      ...props,
      children
    }
  );
});
Container.displayName = "Container";
export {
  Container,
  containerVariants
};
//# sourceMappingURL=container.js.map
