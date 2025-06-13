/**
 * @fileoverview Simplified Container component with consistent prop naming
 * @description Container with reliable sticky sidebar implementation and standardized props
 * @package @voilajsx/uikit
 * @file /src/components/sections/container.jsx
 */

import { forwardRef, useState, useEffect, useRef } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ChevronRight } from "lucide-react";

/**
 * Main Container variants - minimal padding, use gaps for spacing
 */
const containerVariants = cva(
  "w-full mx-auto",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        contained: "bg-muted/30 text-foreground",
        minimal: "bg-background text-foreground",
      },
      layout: {
        none: "block p-1",
        "sidebar-left": "flex flex-col md:flex-row min-h-screen overflow-visible gap-3 md:gap-4 p-1",
        "sidebar-right": "flex flex-col md:flex-row min-h-screen overflow-visible gap-3 md:gap-4 p-1",
      },
      size: {
        sm: "max-w-2xl",
        md: "max-w-4xl", 
        lg: "max-w-6xl",
        xl: "max-w-7xl",
        full: "max-w-full",
      },
    },
    defaultVariants: {
      variant: "default",
      layout: "none",
      size: "xl",
    },
  }
);

/**
 * Sidebar variants - responsive sticky implementation
 */
const sidebarVariants = cva(
  "flex-shrink-0 bg-background",
  {
    variants: {
      position: {
        left: "order-first",
        right: "order-last",
      },
      size: {
        sm: "md:w-36 lg:w-48",    // Compact sidebar
        md: "md:w-48 lg:w-64",    // Default sidebar  
        lg: "md:w-64 lg:w-80",    // Wide sidebar
        xl: "md:w-64 lg:w-80",    // Same as lg
        full: "md:w-64 lg:w-80",  // Same as lg
      },
      sticky: {
        true: "md:sticky md:h-screen md:overflow-y-auto lg:sticky lg:h-screen lg:overflow-y-auto",
        false: "lg:h-full",
      },
    },
    defaultVariants: {
      position: "left",
      size: "md",
      sticky: false,
    },
  }
);

/**
 * Sidebar content wrapper - thin padding, consistent across devices
 */
const sidebarContentVariants = cva(
  "h-full",
  {
    variants: {
      size: {
        sm: "p-3",
        md: "p-3",
        lg: "p-4",
        xl: "p-4",
        full: "p-4",
      },
      sticky: {
        true: "pb-4", // Minimal extra padding for sticky scroll
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      sticky: false,
    },
  }
);

/**
 * Main content variants - minimal padding, rely on container gaps
 */
const mainVariants = cva(
  "flex-1 min-w-0",
  {
    variants: {
      size: {
        sm: "p-3",
        md: "p-3",
      },
      hasSidebar: {
        true: "md:min-h-screen",
        false: "",
      },
      sidebarPosition: {
        left: "order-2",
        right: "order-1", 
        none: "",
      },
    },
    defaultVariants: {
      size: "md",
      hasSidebar: false,
      sidebarPosition: "none",
    },
  }
);

/**
 * Size-aware utility functions
 */
const getSizeConfig = (size = 'md') => {
  const configs = {
    sm: {
      button: "text-sm py-1.5 px-2 min-h-[32px] text-xs",
      icon: "h-3.5 w-3.5 mr-2 flex-shrink-0",
      spacing: "space-y-0.5",
      showBadges: false,
      showLabels: true,
    },
    md: {
      button: "text-sm py-2 px-3 min-h-[36px]",
      icon: "h-4 w-4 mr-2.5 flex-shrink-0",
      spacing: "space-y-1",
      showBadges: true,
      showLabels: true,
    },
    lg: {
      button: "text-sm py-2.5 px-4 min-h-[40px]",
      icon: "h-4 w-4 mr-3 flex-shrink-0",
      spacing: "space-y-1.5",
      showBadges: true,
      showLabels: true,
    },
    xl: {
      button: "text-sm py-2.5 px-4 min-h-[40px]",
      icon: "h-4 w-4 mr-3 flex-shrink-0",
      spacing: "space-y-1.5",
      showBadges: true,
      showLabels: true,
    },
    full: {
      button: "text-sm py-2.5 px-4 min-h-[40px]",
      icon: "h-4 w-4 mr-3 flex-shrink-0",
      spacing: "space-y-1.5",
      showBadges: true,
      showLabels: true,
    },
  };
  
  return configs[size] || configs.md;
};

/**
 * Navigation renderer with collapsible subitems
 */
const NavigationRenderer = ({ items, size = 'md' }) => {
 const config = getSizeConfig(size);
 
 // Initialize with all expandable items open
 const getInitialExpandedItems = () => {
   const expanded = new Set();
   
   const addExpandableItems = (items, depth = 0) => {
     items.forEach((item, index) => {
       if (item.items && item.items.length > 0) {
         const itemKey = item.key || `${depth}-${index}`;
         expanded.add(itemKey);
         // Recursively add nested expandable items
         addExpandableItems(item.items, depth + 1);
       }
     });
   };
   
   addExpandableItems(items);
   return expanded;
 };
 
 const [expandedItems, setExpandedItems] = useState(getInitialExpandedItems());
 
 const toggleExpanded = (itemKey) => {
   const newExpanded = new Set(expandedItems);
   if (newExpanded.has(itemKey)) {
     newExpanded.delete(itemKey);
   } else {
     newExpanded.add(itemKey);
   }
   setExpandedItems(newExpanded);
 };
 
 const renderNavItem = (item, index, depth = 0) => {
   const hasSubItems = item.items && item.items.length > 0;
   const isExpanded = expandedItems.has(item.key || `${depth}-${index}`);
   const itemKey = item.key || `${depth}-${index}`;
   
   return (
     <div key={itemKey} className="w-full">
       <Button
         variant={item.isActive ? "secondary" : "ghost"}
         className={cn(
           "w-full justify-start transition-all items-center",
           config.button,
           depth > 0 && "ml-4 w-[calc(100%-1rem)]"
         )}
         onClick={() => {
           if (hasSubItems) {
             toggleExpanded(itemKey);
           }
           if (item.onClick) {
             item.onClick();
           }
         }}
       >
         {item.icon && <item.icon className={config.icon} />}
         {config.showLabels && (
           <span className="flex-1 text-left truncate">{item.label}</span>
         )}
         
         {item.badge && config.showBadges && (
           <Badge variant="secondary" className="text-xs ml-auto">
             {item.badge}
           </Badge>
         )}
         
         {hasSubItems && (
           <ChevronRight 
             className={cn(
               "h-4 w-4 ml-2 transition-transform duration-200 text-muted-foreground",
               isExpanded && "rotate-90"
             )} 
           />
         )}
       </Button>
       
       {hasSubItems && isExpanded && (
         <div className="mt-1 space-y-1">
           {item.items.map((subItem, subIndex) =>
             renderNavItem(subItem, subIndex, depth + 1)
           )}
         </div>
       )}
     </div>
   );
 };

 return (
   <nav className={cn("w-full", config.spacing)}>
     {items.map((item, index) => renderNavItem(item, index))}
   </nav>
 );
};

/**
 * Intelligent sidebar content renderer
 */
const renderSidebarContent = (content, size = 'md') => {
  if (!content) return null;
  
  // If content is an array, treat it as navigation items
  if (Array.isArray(content)) {
    return <NavigationRenderer items={content} size={size} />;
  }
  
  // For JSX content, render it directly
  return content;
};

/**
 * Container Sidebar component with proper sticky implementation
 */
const ContainerSidebar = forwardRef(({ 
  content,
  position = "left",
  size = "md",
  sticky = false,
  className, 
  ...props 
}, ref) => {
  
  if (!content) return null;

  const getHeaderHeight = () => {
    const header = document.querySelector('header');
    return header ? header.offsetHeight : 0;
  };

  const headerHeight = sticky ? getHeaderHeight() : 0;

  return (
    <aside 
      ref={ref}
      className={cn(
        sidebarVariants({ position, size, sticky }),
        className
      )}
      style={sticky ? { top: `${headerHeight + 10}px` } : {}}
      {...props}
    >
      <div className={cn(sidebarContentVariants({ size, sticky }))}>
        {renderSidebarContent(content, size)}
      </div>
    </aside>
  );
});

ContainerSidebar.displayName = "ContainerSidebar";

/**
 * Container Main content area with thin, consistent padding
 */
const ContainerMain = forwardRef(({ 
  children, 
  size = "md",
  hasSidebar = false,
  sidebarPosition = "none",
  className, 
  ...props 
}, ref) => (
  <main 
    ref={ref}
    className={cn(
      mainVariants({ size, hasSidebar, sidebarPosition }),
      className
    )}
    {...props}
  >
    {children}
  </main>
));

ContainerMain.displayName = "ContainerMain";

/**
 * Main Container component - Simplified with consistent props and border fixes
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {'default'|'contained'|'minimal'} [props.variant='default'] - Container variant
 * @param {'none'|'left'|'right'} [props.sidebar='none'] - Sidebar position
 * @param {React.ReactNode|Array} [props.sidebarContent] - Sidebar content or navigation items
 * @param {boolean} [props.sidebarSticky=false] - Whether sidebar should be sticky
 * @param {'sm'|'md'|'lg'|'xl'|'full'} [props.size='xl'] - Container size (width + padding + spacing)
 * @param {React.ReactNode} props.children - Main content
 * @returns {JSX.Element} Container component
 */
const Container = forwardRef(({ 
  className,
  variant = "default",
  sidebar = "none",
  sidebarContent,
  sidebarSticky = false,
  size = "xl",
  children,
  ...props 
}, ref) => {
  
  // Filter out any custom props that shouldn't go to DOM
  const {
    sidebarSize, // Remove this prop to prevent DOM warning
    ...domProps
  } = props;
  
  // Determine layout based on sidebar position
  const layout = sidebar === "left" ? "sidebar-left" : 
                sidebar === "right" ? "sidebar-right" : "none";
  
  const hasSidebar = sidebar !== "none" && sidebarContent;

  return (
    <div 
      ref={ref}
      className={cn(
        containerVariants({ variant, layout, size }),
        className
      )}
      {...domProps}
    >
      {/* Left Sidebar */}
      {hasSidebar && sidebar === "left" && (
        <ContainerSidebar 
          content={sidebarContent}
          position="left"
          size={size}
          sticky={sidebarSticky}
        />
      )}
      
      {/* Main Content */}
      <ContainerMain 
        size={size}
        hasSidebar={hasSidebar}
        sidebarPosition={sidebar}
      >
        {children}
      </ContainerMain>
      
      {/* Right Sidebar */}
      {hasSidebar && sidebar === "right" && (
        <ContainerSidebar 
          content={sidebarContent}
          position="right"
          size={size}
          sticky={sidebarSticky}
        />
      )}
    </div>
  );
});

Container.displayName = "Container";

// Attach compound components for advanced usage
Container.Sidebar = ContainerSidebar;
Container.Main = ContainerMain;

export { Container, ContainerSidebar, ContainerMain };