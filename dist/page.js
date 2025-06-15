import { jsx } from "react/jsx-runtime";
import { createContext, forwardRef, useContext } from "react";
import { cva } from "class-variance-authority";
import { cn } from "./utils.js";
import { Header, HeaderLogo, HeaderNav } from "./header.js";
import { Footer } from "./footer.js";
const PageContext = createContext({});
const pageVariants = cva(
  "min-h-screen flex flex-col",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        minimal: "bg-background text-foreground",
        contained: "bg-muted/30"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const Page = forwardRef(({
  className,
  variant = "default",
  size = "xl",
  children,
  ...props
}, ref) => {
  const pageConfig = {
    variant,
    size
  };
  return /* @__PURE__ */ jsx(PageContext.Provider, { value: pageConfig, children: /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn(pageVariants({ variant }), className),
      ...props,
      children
    }
  ) });
});
Page.displayName = "Page";
const PageHeader = forwardRef(({
  variant = "default",
  size,
  sticky = true,
  children,
  ...props
}, ref) => {
  const { size: pageSize } = usePage();
  return /* @__PURE__ */ jsx(
    Header,
    {
      ref,
      variant,
      size: size || pageSize,
      sticky,
      ...props,
      children
    }
  );
});
PageHeader.displayName = "PageHeader";
const pageContentVariants = cva(
  "flex-1 w-full"
);
const pageContentInnerVariants = cva(
  "mx-auto ",
  {
    variants: {
      size: {
        sm: "max-w-2xl px-4",
        md: "max-w-4xl px-4 sm:px-6",
        lg: "max-w-6xl px-4 sm:px-6 lg:px-8",
        xl: "max-w-7xl px-4 sm:px-6 lg:px-8",
        full: "max-w-full px-4 sm:px-6 lg:px-8"
      }
    },
    defaultVariants: {
      size: "xl"
    }
  }
);
const PageContent = forwardRef(({
  className,
  size,
  children,
  ...props
}, ref) => {
  const { size: pageSize } = usePage();
  const contentSize = size || pageSize;
  return /* @__PURE__ */ jsx(
    "main",
    {
      ref,
      className: cn(pageContentVariants(), className),
      ...props,
      children: /* @__PURE__ */ jsx("div", { className: cn(pageContentInnerVariants({ size: contentSize })), children })
    }
  );
});
PageContent.displayName = "PageContent";
const PageFooter = forwardRef(({
  variant = "default",
  size,
  children,
  ...props
}, ref) => {
  const { size: pageSize } = usePage();
  return /* @__PURE__ */ jsx(
    Footer,
    {
      ref,
      variant,
      size: size || pageSize,
      ...props,
      children
    }
  );
});
PageFooter.displayName = "PageFooter";
const usePage = () => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error("usePage must be used within a Page component");
  }
  return context;
};
Page.Header = PageHeader;
Page.Content = PageContent;
Page.Footer = PageFooter;
Page.Logo = HeaderLogo;
Page.Nav = HeaderNav;
export {
  Page,
  PageContent,
  PageFooter,
  PageHeader,
  pageVariants,
  usePage
};
//# sourceMappingURL=page.js.map
