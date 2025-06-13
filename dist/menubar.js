import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Check, Circle, ChevronRight } from "lucide-react";
import { cn } from "./utils.js";
const Menubar = forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
      className
    ),
    ...props
  }
));
Menubar.displayName = "Menubar";
const MenubarMenu = ({ children, ...props }) => /* @__PURE__ */ jsx("div", { className: "relative", ...props, children });
MenubarMenu.displayName = "MenubarMenu";
const MenubarTrigger = forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "button",
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      className
    ),
    ...props
  }
));
MenubarTrigger.displayName = "MenubarTrigger";
const MenubarContent = forwardRef(({
  className,
  align = "start",
  alignOffset = -4,
  sideOffset = 8,
  ...props
}, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
MenubarContent.displayName = "MenubarContent";
const MenubarItem = forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
MenubarItem.displayName = "MenubarItem";
const MenubarCheckboxItem = forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxs(
  "div",
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: checked && /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) }),
      children
    ]
  }
));
MenubarCheckboxItem.displayName = "MenubarCheckboxItem";
const MenubarRadioItem = forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  "div",
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(Circle, { className: "h-2 w-2 fill-current" }) }),
      children
    ]
  }
));
MenubarRadioItem.displayName = "MenubarRadioItem";
const MenubarLabel = forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
MenubarLabel.displayName = "MenubarLabel";
const MenubarSeparator = forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
MenubarSeparator.displayName = "MenubarSeparator";
const MenubarShortcut = ({ className, ...props }) => /* @__PURE__ */ jsx(
  "span",
  {
    className: cn("ml-auto text-xs tracking-widest opacity-60", className),
    ...props
  }
);
MenubarShortcut.displayName = "MenubarShortcut";
const MenubarSub = ({ children, ...props }) => /* @__PURE__ */ jsx("div", { ...props, children });
MenubarSub.displayName = "MenubarSub";
const MenubarSubTrigger = forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  "div",
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronRight, { className: "ml-auto h-4 w-4" })
    ]
  }
));
MenubarSubTrigger.displayName = "MenubarSubTrigger";
const MenubarSubContent = forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
MenubarSubContent.displayName = "MenubarSubContent";
export {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger
};
//# sourceMappingURL=menubar.js.map
