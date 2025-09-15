# Quick Start: Basic UIKit Usage

**The essential guide to using @voilajsx/uikit components the right way.**

## 🎯 What is Basic UIKit?

Basic UIKit usage is about using individual components to build custom layouts and interfaces. This approach gives you maximum flexibility and control over your application structure.

**Perfect for:**
- Custom layouts and designs
- Component library integration
- Learning UIKit fundamentals
- Prototyping and experimentation

## ⚡ 30-Second Setup

### Step 1: Create Basic Project
```bash
npx uikit create my-basic-app
cd my-basic-app && npm run dev
```

This creates a **component showcase** - perfect for exploring all 37 components and 5 themes.

### Step 2: Essential Imports (Copy-Paste Every File)
```jsx
// CRITICAL: Must be in your root App.jsx/tsx
import { ThemeProvider } from '@voilajsx/uikit/theme-provider';
import '@voilajsx/uikit/styles';  // ← REQUIRED: Theme styles

function App() {
  return (
    <ThemeProvider theme="base" mode="light">
      {/* Your app goes here */}
    </ThemeProvider>
  );
}
```

## 🧩 Core Component Patterns

### ✅ Individual Component Imports (Tree-Shaking Friendly)
```jsx
import { Button } from '@voilajsx/uikit/button';
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/card';
import { Input } from '@voilajsx/uikit/input';
import { Badge } from '@voilajsx/uikit/badge';
```

### ❌ Avoid Barrel Imports (Bundle Size)
```jsx
// DON'T DO THIS - Breaks tree-shaking
import { Button, Card, Input } from '@voilajsx/uikit';
```

## 🎨 Semantic Colors System

### ✅ Always Use Semantic Classes
```jsx
<div className="bg-background text-foreground">
  <Card className="bg-card border-border">
    <CardContent className="text-card-foreground">
      <Button className="bg-primary text-primary-foreground">
        Submit
      </Button>
    </CardContent>
  </Card>
</div>
```

**Why Semantic Colors?**
- Work in light and dark mode automatically
- Adapt to all 5 themes (base, elegant, metro, studio, vivid)
- Professional, consistent appearance

### ❌ Never Use Hardcoded Colors
```jsx
// BREAKS in dark mode and different themes
<div className="bg-white text-black">
  <Button className="bg-blue-500 text-white">Don't Do This</Button>
</div>
```

## 📋 Complete Component Reference

### Form Components
```jsx
import { Button } from '@voilajsx/uikit/button';
import { Input } from '@voilajsx/uikit/input';
import { Label } from '@voilajsx/uikit/label';
import { Textarea } from '@voilajsx/uikit/textarea';
import { Checkbox } from '@voilajsx/uikit/checkbox';
import { Switch } from '@voilajsx/uikit/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@voilajsx/uikit/select';

// Basic form example
function ContactForm() {
  return (
    <form className="space-y-4 max-w-md">
      <div>
        <Label className="text-foreground">Name</Label>
        <Input
          placeholder="Your name"
          className="bg-background border-border text-foreground"
        />
      </div>
      <div>
        <Label className="text-foreground">Message</Label>
        <Textarea
          placeholder="Your message"
          className="bg-background border-border text-foreground"
        />
      </div>
      <Button className="bg-primary text-primary-foreground w-full">
        Send Message
      </Button>
    </form>
  );
}
```

### Display Components
```jsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from '@voilajsx/uikit/card';
import { Badge } from '@voilajsx/uikit/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@voilajsx/uikit/avatar';
import { Progress } from '@voilajsx/uikit/progress';

// Product card example
function ProductCard({ product }) {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={product.image} />
            <AvatarFallback className="bg-primary text-primary-foreground">
              {product.name[0]}
            </AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-foreground">{product.name}</CardTitle>
            <Badge className="bg-secondary text-secondary-foreground">
              {product.category}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="text-card-foreground">
        <p className="text-muted-foreground">{product.description}</p>
        <div className="mt-4 space-y-2">
          <div className="flex justify-between">
            <span>Stock</span>
            <span className="font-medium">{product.stock}%</span>
          </div>
          <Progress value={product.stock} className="bg-muted" />
        </div>
      </CardContent>
    </Card>
  );
}
```

### Navigation Components
```jsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@voilajsx/uikit/dropdown-menu';
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@voilajsx/uikit/tabs';

// User menu example
function UserMenu({ user }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-background border-border">
          {user.name}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-popover border-border">
        <DropdownMenuItem className="text-foreground">
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem className="text-foreground">
          Settings
        </DropdownMenuItem>
        <DropdownMenuItem className="text-destructive">
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```

### Data Components
```jsx
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@voilajsx/uikit/table';

// Simple data table
function UserTable({ users }) {
  return (
    <Table className="bg-background">
      <TableHeader>
        <TableRow className="border-border">
          <TableHead className="text-foreground">Name</TableHead>
          <TableHead className="text-foreground">Email</TableHead>
          <TableHead className="text-foreground">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id} className="border-border">
            <TableCell className="text-foreground">{user.name}</TableCell>
            <TableCell className="text-muted-foreground">{user.email}</TableCell>
            <TableCell>
              <Badge
                className={
                  user.status === 'active'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }
              >
                {user.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
```

## 🎨 Theme System

### Theme Switching
```jsx
import { useTheme } from '@voilajsx/uikit';

function ThemeSelector() {
  const { theme, setTheme, mode, setMode } = useTheme();

  return (
    <div className="flex gap-2">
      <Select value={theme} onValueChange={setTheme}>
        <SelectTrigger className="bg-background border-border">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="bg-popover border-border">
          <SelectItem value="base">Base</SelectItem>
          <SelectItem value="elegant">Elegant</SelectItem>
          <SelectItem value="metro">Metro</SelectItem>
          <SelectItem value="studio">Studio</SelectItem>
          <SelectItem value="vivid">Vivid</SelectItem>
        </SelectContent>
      </Select>

      <Button
        onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
        className="bg-secondary text-secondary-foreground"
      >
        {mode === 'light' ? '🌙' : '☀️'}
      </Button>
    </div>
  );
}
```

### Available Themes
- **`base`** - Clean metallic black, System UI fonts
- **`elegant`** - Professional blue, Montserrat fonts
- **`metro`** - Modern green, clean typography
- **`studio`** - Bold black/orange, artistic fonts
- **`vivid`** - Luxury purple/orange, serif fonts

## 🏗️ Custom Layout Example

```jsx
import { Button } from '@voilajsx/uikit/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from '@voilajsx/uikit/card';

function CustomDashboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-foreground">
            My Dashboard
          </h1>
          <Button className="bg-primary text-primary-foreground">
            New Project
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-6">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">24</p>
              <p className="text-muted-foreground">Active projects</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">156</p>
              <p className="text-muted-foreground">Pending tasks</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Users</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">1.2k</p>
              <p className="text-muted-foreground">Total users</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
```

## ✅ Best Practices Checklist

### Required Setup
- [ ] Import `'@voilajsx/uikit/styles'` in root file
- [ ] Wrap app in `<ThemeProvider theme="base" mode="light">`
- [ ] Use individual component imports for tree-shaking

### Styling Guidelines
- [ ] Use ONLY semantic colors: `bg-background`, `text-foreground`, `border-border`
- [ ] NEVER use hardcoded colors: `bg-white`, `text-black`, `border-gray-200`
- [ ] Apply semantic classes consistently across all components

### Component Usage
- [ ] Import components individually: `import { Button } from '@voilajsx/uikit/button'`
- [ ] Apply proper className structure with semantic colors
- [ ] Use TypeScript for better development experience

### Theme Integration
- [ ] Test components in both light and dark modes
- [ ] Verify appearance across all 5 themes
- [ ] Implement theme switching if needed

## 🚀 Next Steps

Once you're comfortable with basic component usage:

1. **SPA Template** - Add routing with React Router
2. **Multi Template** - Use pre-built layouts (AdminLayout, PageLayout)
3. **FBCA Template** - Feature-based architecture for scalable apps

## 📚 Resources

- [Complete Component Library](../UIKIT_LLM_GUIDE.md) - All 37 components
- [Theme System](../UIKIT_LLM_GUIDE.md#theme-system) - Advanced theming
- [GitHub Repository](https://github.com/voilajsx/uikit) - Source code and examples

---

**Built with @voilajsx/uikit** ✨