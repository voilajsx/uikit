# Quick Start: SPA (Single Page Application)

**Build modern single-page applications with React Router and UIKit components.**

## 🎯 What is SPA Template?

The SPA template provides a complete single-page application setup with React Router, navigation, and UIKit components. Perfect for applications that need client-side routing without complex layouts.

**Perfect for:**
- Marketing websites with multiple pages
- Portfolio sites
- Documentation sites
- Content-heavy applications
- Applications with simple navigation

## ⚡ 30-Second Setup

### Step 1: Install UIKit CLI Globally
```bash
# Install globally
npm install -g @voilajsx/uikit

# Check if you have the latest version
npm list -g @voilajsx/uikit

# Update if needed
npm update -g @voilajsx/uikit
```

### Step 2: Create SPA Project
```bash
uikit create my-spa-app --spa --theme elegant
cd my-spa-app && npm run dev
```

This creates a complete SPA with:
- ✅ React Router v6 setup
- ✅ Navigation with active states
- ✅ Clean page transitions
- ✅ Responsive design
- ✅ Theme integration

### Step 2: Project Structure
```
src/
├── components/
│   ├── Layout.tsx           # Main layout wrapper
│   └── Navigation.tsx       # Navigation component
├── pages/
│   ├── Home.tsx            # Homepage
│   ├── About.tsx           # About page
│   ├── Services.tsx        # Services page
│   └── Contact.tsx         # Contact page
├── App.tsx                 # Router setup
├── main.tsx               # Entry point
└── index.css              # Global styles
```

## 🧭 React Router Integration

### Router Setup (App.tsx)
```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@voilajsx/uikit/theme-provider';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import '@voilajsx/uikit/styles';

function App() {
  return (
    <ThemeProvider theme="elegant" mode="light">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
```

### Layout Component with Navigation
```jsx
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@voilajsx/uikit/button';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from '@voilajsx/uikit/navigation-menu';

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

function Layout({ children }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <div className="text-2xl font-bold text-foreground">
                MyApp
              </div>
            </Link>

            {/* Navigation */}
            <NavigationMenu>
              <NavigationMenuList className="space-x-1">
                {navigation.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuLink asChild>
                      <Link
                        to={item.path}
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                          location.pathname === item.path
                            ? 'bg-primary text-primary-foreground'
                            : 'text-foreground hover:bg-muted hover:text-foreground'
                        }`}
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* CTA Button */}
            <Button className="bg-primary text-primary-foreground">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-muted-foreground">
            © 2025 MyApp. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
```

## 📄 Page Examples

### Homepage with Hero Section
```jsx
import { Button } from '@voilajsx/uikit/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from '@voilajsx/uikit/card';
import { Badge } from '@voilajsx/uikit/badge';
import { ArrowRight, Star, Users, Zap } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized for speed and performance'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Work together seamlessly'
  },
  {
    icon: Star,
    title: 'Premium Quality',
    description: 'Enterprise-grade reliability'
  }
];

function Home() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <Badge className="mb-4 bg-primary/10 text-primary">
              ✨ New Release
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Build Amazing
              <span className="text-primary"> Applications</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Create beautiful, responsive web applications with our modern toolkit.
              Fast, reliable, and easy to use.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-border">
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build modern applications, all in one place.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card border-border">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
```

### About Page with Team Section
```jsx
import {
  Card,
  CardHeader,
  CardContent
} from '@voilajsx/uikit/card';
import { Avatar, AvatarImage, AvatarFallback } from '@voilajsx/uikit/avatar';
import { Badge } from '@voilajsx/uikit/badge';

const team = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: 'https://avatar.vercel.sh/sarah',
    bio: 'Passionate about building products that make a difference.'
  },
  {
    name: 'Mike Chen',
    role: 'CTO',
    image: 'https://avatar.vercel.sh/mike',
    bio: 'Full-stack engineer with 10+ years experience.'
  },
  {
    name: 'Emily Davis',
    role: 'Head of Design',
    image: 'https://avatar.vercel.sh/emily',
    bio: 'Creating beautiful and intuitive user experiences.'
  }
];

function About() {
  return (
    <div className="bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            About Our Company
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We're a team of passionate individuals dedicated to creating
            innovative solutions that empower businesses to grow and succeed.
          </p>
        </div>

        {/* Mission Section */}
        <Card className="bg-card border-border mb-16">
          <CardHeader>
            <div className="text-center">
              <Badge className="mb-4 bg-primary/10 text-primary">
                Our Mission
              </Badge>
              <h2 className="text-2xl font-bold text-foreground">
                Empowering the Future of Technology
              </h2>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-center text-muted-foreground text-lg">
              We believe technology should be accessible, powerful, and intuitive.
              Our mission is to bridge the gap between complex technology and
              everyday users, making powerful tools available to everyone.
            </p>
          </CardContent>
        </Card>

        {/* Team Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-muted-foreground">
            The talented people behind our success
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="pt-6 text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {member.name}
                </h3>
                <Badge className="mb-3 bg-secondary text-secondary-foreground">
                  {member.role}
                </Badge>
                <p className="text-muted-foreground">
                  {member.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
```

### Contact Page with Form
```jsx
import { useState } from 'react';
import { Button } from '@voilajsx/uikit/button';
import { Input } from '@voilajsx/uikit/input';
import { Textarea } from '@voilajsx/uikit/textarea';
import { Label } from '@voilajsx/uikit/label';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from '@voilajsx/uikit/card';
import { Mail, Phone, MapPin } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  return (
    <div className="bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? We'd love to hear from you.
            Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Email</h3>
                    <p className="text-muted-foreground">hello@company.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Office</h3>
                    <p className="text-muted-foreground">
                      123 Business Ave<br />
                      Suite 100<br />
                      City, State 12345
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">
                  Send us a message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground">
                      Name
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={handleChange('name')}
                      className="bg-background border-border text-foreground"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-foreground">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange('email')}
                      className="bg-background border-border text-foreground"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={handleChange('message')}
                      className="bg-background border-border text-foreground min-h-[120px]"
                      placeholder="Tell us about your project..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
```

## 🧭 Advanced Navigation Patterns

### Mobile-Responsive Navigation
```jsx
import { useState } from 'react';
import { Button } from '@voilajsx/uikit/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@voilajsx/uikit/sheet';
import { Menu, X } from 'lucide-react';

function MobileNavigation({ navigation, currentPath }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-foreground"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-background border-border">
        <div className="flex flex-col space-y-4 mt-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPath === item.path
                  ? 'bg-primary text-primary-foreground'
                  : 'text-foreground hover:bg-muted'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
```

### Breadcrumb Navigation
```jsx
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@voilajsx/uikit/breadcrumb';
import { useLocation } from 'react-router-dom';

function BreadcrumbNav() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <Breadcrumb className="mb-6">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="text-muted-foreground">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return (
            <BreadcrumbItem key={name}>
              {isLast ? (
                <span className="text-foreground capitalize">{name}</span>
              ) : (
                <BreadcrumbLink href={routeTo} className="text-muted-foreground">
                  {name.charAt(0).toUpperCase() + name.slice(1)}
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
```

## 📱 Responsive Design

### Breakpoint Utilities
```jsx
// Use Tailwind's responsive classes with UIKit components
function ResponsiveCard() {
  return (
    <Card className="bg-card border-border w-full sm:w-auto">
      <CardContent className="p-4 sm:p-6 lg:p-8">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground">
          Responsive Title
        </h3>
        <p className="text-sm sm:text-base text-muted-foreground mt-2">
          This content adapts to different screen sizes
        </p>
        <div className="mt-4 flex flex-col sm:flex-row gap-2 sm:gap-4">
          <Button className="bg-primary text-primary-foreground">
            Primary Action
          </Button>
          <Button variant="outline" className="border-border">
            Secondary
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
```

## ✅ SPA Best Practices

### Required Setup
- [ ] Install and configure React Router v6
- [ ] ThemeProvider setup in `main.tsx` (automatically included)
- [ ] Create Layout component for consistent header/footer
- [ ] Implement navigation with active states

### Routing Guidelines
- [ ] Use semantic URL structure (`/about`, `/services`, `/contact`)
- [ ] Handle 404 pages with catch-all routes
- [ ] Implement breadcrumb navigation for deep pages
- [ ] Add loading states for page transitions

### SEO Considerations
- [ ] Add proper `<title>` tags for each page
- [ ] Implement meta descriptions
- [ ] Use semantic HTML structure
- [ ] Add Open Graph tags for social sharing

### Performance
- [ ] Implement lazy loading for heavy pages
- [ ] Optimize images with proper sizing
- [ ] Use React.memo for expensive components
- [ ] Implement proper error boundaries

## 🚀 Next Steps

Once you've mastered SPA routing:

1. **Multi Template** - Add pre-built layouts (AdminLayout, PageLayout)
2. **FBCA Template** - Feature-based architecture for larger apps
3. **State Management** - Add Redux, Zustand, or Context API
4. **Authentication** - Implement protected routes

## 📚 Resources

- [React Router Documentation](https://reactrouter.com/) - Official routing guide
- [UIKit Components](../UIKIT_LLM_GUIDE.md) - Complete component reference
- [Theme System](../UIKIT_LLM_GUIDE.md#theme-system) - Advanced theming

---

**Built with @voilajsx/uikit** ✨