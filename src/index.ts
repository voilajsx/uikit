/**
 * Main entry point for @voilajsx/uikit
 * @module @voilajsx/uikit
 * @file src/index.ts
 */

// Utils
export { cn } from './lib/utils';

// Types
export type * from './types';

// Styles (CSS import)
import './styles/globals.css';

// UI Components - Form & Input
export { Button } from './components/ui/button';
export { Input } from './components/ui/input';
export { Textarea } from './components/ui/textarea';
export { Label } from './components/ui/label';
export { Checkbox } from './components/ui/checkbox';
export { RadioGroup, RadioGroupItem } from './components/ui/radio-group';
export { Switch } from './components/ui/switch';
export { Slider } from './components/ui/slider';
export {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from './components/ui/select';
export {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './components/ui/form';

// UI Components - Display & Layout
export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './components/ui/card';
export { Badge } from './components/ui/badge';
export { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar';
export { Separator } from './components/ui/separator';
export { Progress } from './components/ui/progress';
export { Skeleton } from './components/ui/skeleton';
export { Alert, AlertDescription, AlertTitle } from './components/ui/alert';
export {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './components/ui/breadcrumb';
export { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
export {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './components/ui/accordion';

// UI Components - Navigation & Menu
export {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuCheckboxItem,
  DropdownMenuShortcut,
} from './components/ui/dropdown-menu';
export {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarLabel,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
} from './components/ui/menubar';
export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from './components/ui/pagination';
export {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from './components/ui/command';
export {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from './components/ui/collapsible';
export { Toggle } from './components/ui/toggle';

// UI Components - Overlay & Modal
export {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from './components/ui/dialog';
export {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from './components/ui/sheet';
export { Popover, PopoverContent, PopoverTrigger } from './components/ui/popover';
export {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from './components/ui/hover-card';
export {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './components/ui/tooltip';

// UI Components - Data & Table
export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './components/ui/table';
export { DataTable } from './components/ui/data-table';
export { Calendar } from './components/ui/calendar';
export { Toaster } from './components/ui/sonner';

// Layout System
export { PageLayout } from './components/layouts/page';
export { AdminLayout } from './components/layouts/admin';
export { AuthLayout } from './components/layouts/auth';
export { BlankLayout } from './components/layouts/blank';
export { PopupLayout } from './components/layouts/popup';
export { LayoutWrapper } from './components/layouts/layout-wrapper';

// Section Components
export { Header, HeaderLogo, HeaderNav } from './components/sections/header';
export { Footer } from './components/sections/footer';
export { Container } from './components/sections/container';

// Theme System
export { ThemeProvider, useTheme, type Theme, type Mode } from './themes/theme-provider';

// Hooks
export { useApi, useBackendStatus } from './hooks';
export type { ApiResponse, ApiOptions, UseApiReturn } from './hooks';