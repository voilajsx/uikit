import { jsx } from "react/jsx-runtime";
import { createContext, forwardRef, useState, useContext } from "react";
import { cn } from "./utils.js";
const CollapsibleContext = createContext({});
const useCollapsible = () => {
  const context = useContext(CollapsibleContext);
  if (!context) {
    throw new Error("useCollapsible must be used within a Collapsible component");
  }
  return context;
};
const Collapsible = forwardRef(({
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  className,
  children,
  ...props
}, ref) => {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isControlled = controlledOpen !== void 0;
  const open = isControlled ? controlledOpen : internalOpen;
  const handleOpenChange = (newOpen) => {
    if (!isControlled) {
      setInternalOpen(newOpen);
    }
    onOpenChange?.(newOpen);
  };
  const contextValue = {
    open,
    onOpenChange: handleOpenChange
  };
  return /* @__PURE__ */ jsx(CollapsibleContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn("space-y-2", className),
      ...props,
      children
    }
  ) });
});
Collapsible.displayName = "Collapsible";
const CollapsibleTrigger = forwardRef(({
  className,
  children,
  ...props
}, ref) => {
  const { open, onOpenChange } = useCollapsible();
  return /* @__PURE__ */ jsx(
    "button",
    {
      ref,
      type: "button",
      className: cn(
        "flex w-full items-center justify-between p-0 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      ),
      "data-state": open ? "open" : "closed",
      onClick: () => onOpenChange(!open),
      ...props,
      children
    }
  );
});
CollapsibleTrigger.displayName = "CollapsibleTrigger";
const CollapsibleContent = forwardRef(({
  className,
  children,
  ...props
}, ref) => {
  const { open } = useCollapsible();
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn(
        "overflow-hidden transition-all duration-300 ease-in-out",
        open ? "animate-in slide-in-from-top-1" : "animate-out slide-out-to-top-1",
        open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        className
      ),
      "data-state": open ? "open" : "closed",
      ...props,
      children: /* @__PURE__ */ jsx("div", { className: "pt-1", children })
    }
  );
});
CollapsibleContent.displayName = "CollapsibleContent";
export {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  useCollapsible
};
//# sourceMappingURL=collapsible.js.map
