# Quick Start: FBCA (Feature-Based Component Architecture)

**Build scalable applications with feature-based architecture and auto-discovery routing.**

## 🎯 What is FBCA Template?

FBCA (Feature-Based Component Architecture) organizes your application by business features instead of technical layers. Each feature is self-contained with its own pages, components, and logic, making it perfect for large, scalable applications.

**Perfect for:**
- Large-scale applications with multiple features
- Team-based development (different features = different teams)
- Applications that need to scale over time
- Complex business domains with clear feature boundaries
- Applications where features can be developed independently

## ⚡ 30-Second Setup

### Step 1: Create FBCA Project
```bash
npx uikit create my-fbca-app --fbca --theme elegant
cd my-fbca-app && npm run dev
```

This creates a complete FBCA application with:
- ✅ Auto-discovery routing system
- ✅ Feature-based organization
- ✅ SEO management with custom hooks
- ✅ Shared components and utilities
- ✅ TypeScript support
- ✅ React Router with lazy loading

### Step 2: Project Structure
```
src/
└── web/                              # Frontend application
    ├── features/
    │   ├── auth/                     # Authentication feature
    │   │   ├── components/           # Auth-specific components
    │   │   │   ├── LoginForm.tsx
    │   │   │   └── RegisterForm.tsx
    │   │   └── pages/
    │   │       ├── login.tsx         # Route: /auth/login
    │   │       └── register.tsx      # Route: /auth/register
    │   ├── gallery/                  # Gallery feature
    │   │   ├── components/
    │   │   │   ├── ImageCard.tsx
    │   │   │   └── ImageGrid.tsx
    │   │   └── pages/
    │   │       ├── index.tsx         # Route: /gallery
    │   │       ├── [animal].tsx      # Route: /gallery/:animal
    │   │       └── favorites.tsx     # Route: /gallery/favorites
    │   └── main/                     # Main feature (special case)
    │       ├── components/
    │       │   ├── Hero.tsx
    │       │   └── Features.tsx
    │       └── pages/
    │           └── index.tsx         # Route: / (homepage)
    ├── shared/
    │   ├── components/               # Reusable UI components
    │   │   ├── Header.tsx
    │   │   ├── Footer.tsx
    │   │   └── Navigation.tsx
    │   ├── hooks/                    # Custom React hooks
    │   │   ├── useSEO.ts
    │   │   └── useAuth.ts
    │   └── utils/                    # Utility functions
    │       └── helpers.ts
    └── lib/
        └── page-router.tsx           # Auto-discovery router
```

## 🗺️ Auto-Discovery Routing System

### Routing Conventions
The FBCA template uses file-based routing that automatically discovers routes from your feature structure:

```jsx
// File paths → Routes
src/web/features/main/pages/index.tsx         → /
src/web/features/auth/pages/login.tsx         → /auth/login
src/web/features/auth/pages/register.tsx      → /auth/register
src/web/features/gallery/pages/index.tsx      → /gallery
src/web/features/gallery/pages/[animal].tsx   → /gallery/:animal
src/web/features/gallery/pages/favorites.tsx  → /gallery/favorites
src/web/features/blog/pages/[slug].tsx        → /blog/:slug
src/web/features/blog/pages/[...slug].tsx     → /blog/* (catch-all)
src/web/features/blog/pages/new.tsx           → /blog/new
```

### Router Implementation
The auto-discovery router (located at `src/web/lib/page-router.tsx`) uses Vite's glob imports:

```jsx
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoadingSpinner } from '@voilajsx/uikit/motion';

// Auto-discover all page components
const pageModules = import.meta.glob('../features/**/pages/*.{tsx,jsx}', {
  eager: false,
});

function PageRouter() {
  const routes = Object.keys(pageModules).map((path) => {
    // Convert file path to route path
    const routePath = pathToRoute(path);

    // Lazy load the component
    const Component = lazy(() => pageModules[path]());

    return {
      path: routePath,
      element: (
        <Suspense fallback={<LoadingSpinner size="lg" />}>
          <Component />
        </Suspense>
      ),
    };
  });

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

function pathToRoute(filePath) {
  // Convert: ../features/auth/pages/login.tsx → /auth/login
  // Convert: ../features/main/pages/index.tsx → /
  // Convert: ../features/gallery/pages/[animal].tsx → /gallery/:animal

  const segments = filePath
    .replace('../features/', '')
    .replace(/\/pages\/.*\.(tsx|jsx)$/, '')
    .split('/');

  const feature = segments[0];
  const fileName = filePath.split('/').pop().replace(/\.(tsx|jsx)$/, '');

  if (feature === 'main' && fileName === 'root') {
    return '/';
  }

  if (fileName === 'root') {
    return `/${feature}`;
  }

  // Handle dynamic routes [param].tsx → :param
  const dynamicFileName = fileName.replace(/\[(\w+)\]/, ':$1');

  return `/${feature}/${dynamicFileName}`;
}

export default PageRouter;
```

## 🏠 Feature Examples

### Main Feature (Homepage)
```jsx
// src/web/features/main/pages/index.tsx
import { useSEO } from '@/shared/hooks/useSEO';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Header } from '@/shared/components/Header';
import { Footer } from '@/shared/components/Footer';

export default function HomePage() {
  useSEO({
    title: 'Welcome to FBCA App',
    description: 'Feature-based component architecture made simple',
    keywords: ['FBCA', 'React', 'UIKit', 'Feature-based'],
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
```

```jsx
// src/features/main/components/Hero.tsx
import { Button } from '@voilajsx/uikit/button';
import { Badge } from '@voilajsx/uikit/badge';
import { Motion } from '@voilajsx/uikit/motion';
import { ArrowRight, Star } from 'lucide-react';

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-background to-muted/20 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Motion preset="fadeIn" duration="normal">
          <div className="text-center">
            <Badge className="mb-6 bg-primary/10 text-primary">
              <Star className="w-3 h-3 mr-1" />
              FBCA Architecture
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Build Features,
              <span className="text-primary"> Not Folders</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Organize your application by business features, not technical layers.
              Scale effortlessly with auto-discovery routing and feature isolation.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground">
                Explore Features
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-border">
                View Gallery
              </Button>
            </div>
          </div>
        </Motion>
      </div>
    </section>
  );
}
```

### Authentication Feature
```jsx
// src/web/features/auth/pages/login.tsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSEO } from '@/shared/hooks/useSEO';
import { LoginForm } from '../components/LoginForm';
import { AuthLayout } from '@voilajsx/uikit/auth';

export default function LoginPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useSEO({
    title: 'Sign In - FBCA App',
    description: 'Sign in to your account to access all features',
  });

  const handleLogin = async (credentials) => {
    setIsLoading(true);
    try {
      // Handle authentication
      console.log('Login:', credentials);
      // navigate('/dashboard');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      scheme="card"
      tone="clean"
      size="md"
      title="Welcome back"
      subtitle="Sign in to continue to your account"
      logo={
        <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
          <span className="text-2xl font-bold text-primary-foreground">F</span>
        </div>
      }
    >
      <LoginForm onSubmit={handleLogin} loading={isLoading} />

      <div className="mt-6 text-center">
        <span className="text-muted-foreground">Don't have an account? </span>
        <Link to="/auth/register" className="text-primary hover:underline">
          Create one now
        </Link>
      </div>
    </AuthLayout>
  );
}
```

```jsx
// src/features/auth/components/LoginForm.tsx
import { useState } from 'react';
import { ValidatedInput, FormActions } from '@voilajsx/uikit/form';
import { Checkbox } from '@voilajsx/uikit/checkbox';
import { Label } from '@voilajsx/uikit/label';

interface LoginFormProps {
  onSubmit: (credentials: LoginCredentials) => void;
  loading?: boolean;
}

interface LoginCredentials {
  email: string;
  password: string;
  remember: boolean;
}

export function LoginForm({ onSubmit, loading = false }: LoginFormProps) {
  const [formData, setFormData] = useState<LoginCredentials>({
    email: '',
    password: '',
    remember: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <ValidatedInput
        type="email"
        label="Email address"
        placeholder="name@example.com"
        value={formData.email}
        onChange={(value) => setFormData(prev => ({ ...prev, email: value }))}
        required
      />

      <ValidatedInput
        type="password"
        label="Password"
        placeholder="Enter your password"
        value={formData.password}
        onChange={(value) => setFormData(prev => ({ ...prev, password: value }))}
        minLength={8}
        showPasswordToggle
        required
      />

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="remember"
            checked={formData.remember}
            onCheckedChange={(checked) =>
              setFormData(prev => ({ ...prev, remember: !!checked }))
            }
          />
          <Label htmlFor="remember" className="text-sm text-foreground">
            Remember me
          </Label>
        </div>
        <a href="/auth/forgot" className="text-sm text-primary hover:underline">
          Forgot password?
        </a>
      </div>

      <FormActions
        submitText="Sign In"
        loading={loading}
        disabled={!formData.email || !formData.password}
      />
    </form>
  );
}
```

### Gallery Feature with Dynamic Routes
```jsx
// src/web/features/gallery/pages/index.tsx
import { useSEO } from '@/shared/hooks/useSEO';
import { ImageGrid } from '../components/ImageGrid';
import { Header } from '@/shared/components/Header';
import { Footer } from '@/shared/components/Footer';
import { Button } from '@voilajsx/uikit/button';
import { Badge } from '@voilajsx/uikit/badge';
import { Reveal } from '@voilajsx/uikit/motion';

const categories = [
  { name: 'cats', label: 'Cats', count: 12 },
  { name: 'dogs', label: 'Dogs', count: 8 },
  { name: 'birds', label: 'Birds', count: 15 },
  { name: 'wildlife', label: 'Wildlife', count: 20 },
];

export default function GalleryPage() {
  useSEO({
    title: 'Photo Gallery - FBCA App',
    description: 'Explore our beautiful collection of animal photos',
    keywords: ['gallery', 'photos', 'animals', 'cats', 'dogs'],
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal preset="slideInUp" duration="normal">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Photo Gallery
              </h1>
              <p className="text-lg text-muted-foreground">
                Discover amazing photos organized by categories
              </p>
            </div>
          </Reveal>

          {/* Category Navigation */}
          <Reveal preset="fadeIn" duration="normal" delay={200}>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <Button
                  key={category.name}
                  variant="outline"
                  className="border-border"
                  onClick={() => window.location.href = `/gallery/${category.name}`}
                >
                  {category.label}
                  <Badge className="ml-2 bg-primary/10 text-primary">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </Reveal>

          {/* Featured Images */}
          <ImageGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
}
```

```jsx
// src/web/features/gallery/pages/[animal].tsx
import { useParams } from 'react-router-dom';
import { useSEO } from '@/shared/hooks/useSEO';
import { ImageGrid } from '../components/ImageGrid';
import { Header } from '@/shared/components/Header';
import { Footer } from '@/shared/components/Footer';
import { Button } from '@voilajsx/uikit/button';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink } from '@voilajsx/uikit/breadcrumb';
import { ArrowLeft } from 'lucide-react';

export default function AnimalGalleryPage() {
  const { animal } = useParams<{ animal: string }>();
  const animalName = animal?.charAt(0).toUpperCase() + animal?.slice(1) || 'Animal';

  useSEO({
    title: `${animalName} Photos - Gallery`,
    description: `Beautiful ${animal} photos from our collection`,
    keywords: ['gallery', 'photos', animal || 'animals'],
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-muted-foreground">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink href="/gallery" className="text-muted-foreground">
                  Gallery
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <span className="text-foreground">{animalName}</span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Page Header */}
          <div className="flex items-center justify-between mb-12">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">
                {animalName} Photos
              </h1>
              <p className="text-lg text-muted-foreground">
                Discover amazing {animal} photos from our collection
              </p>
            </div>
            <Button
              variant="outline"
              className="border-border"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Gallery
            </Button>
          </div>

          {/* Filtered Images */}
          <ImageGrid filter={animal} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
```

```jsx
// src/features/gallery/components/ImageGrid.tsx
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@voilajsx/uikit/card';
import { Badge } from '@voilajsx/uikit/badge';
import { Skeleton } from '@voilajsx/uikit/skeleton';
import { Motion } from '@voilajsx/uikit/motion';
import { Heart } from 'lucide-react';

interface ImageGridProps {
  filter?: string;
}

export function ImageGrid({ filter }: ImageGridProps) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchImages = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));

      const mockImages = Array.from({ length: 12 }, (_, i) => ({
        id: i + 1,
        url: `https://picsum.photos/400/300?random=${i + 1}`,
        title: `Beautiful ${filter || 'Photo'} ${i + 1}`,
        category: filter || 'general',
        likes: Math.floor(Math.random() * 100) + 10,
      }));

      setImages(mockImages);
      setLoading(false);
    };

    fetchImages();
  }, [filter]);

  if (loading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <Card key={i} className="bg-card border-border">
            <CardContent className="p-0">
              <Skeleton className="w-full h-48" />
              <div className="p-4">
                <Skeleton className="h-4 w-3/4 mb-2" />
                <Skeleton className="h-3 w-1/2" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {images.map((image, index) => (
        <Motion
          key={image.id}
          preset="slideInUp"
          duration="normal"
          delay={index * 50}
        >
          <Card className="bg-card border-border hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-0">
              <div className="relative">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 flex items-center gap-1 bg-black/50 text-white px-2 py-1 rounded-full">
                  <Heart className="h-3 w-3" />
                  <span className="text-xs">{image.likes}</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-foreground mb-2">
                  {image.title}
                </h3>
                <Badge className="bg-primary/10 text-primary">
                  {image.category}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </Motion>
      ))}
    </div>
  );
}
```

## 🎯 SEO Management with useSEO Hook

```jsx
// src/shared/hooks/useSEO.ts
import { useEffect } from 'react';

interface SEOOptions {
  title: string;
  description?: string;
  keywords?: string[];
  author?: string;
  image?: string;
  url?: string;
}

export function useSEO(options: SEOOptions) {
  useEffect(() => {
    // Update document title
    document.title = options.title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const attribute = property ? 'property' : 'name';
      let tag = document.querySelector(`meta[${attribute}="${name}"]`);

      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, name);
        document.head.appendChild(tag);
      }

      tag.setAttribute('content', content);
    };

    // Basic meta tags
    if (options.description) {
      updateMetaTag('description', options.description);
    }

    if (options.keywords) {
      updateMetaTag('keywords', options.keywords.join(', '));
    }

    if (options.author) {
      updateMetaTag('author', options.author);
    }

    // Open Graph meta tags
    updateMetaTag('og:title', options.title, true);
    if (options.description) {
      updateMetaTag('og:description', options.description, true);
    }
    if (options.image) {
      updateMetaTag('og:image', options.image, true);
    }
    if (options.url) {
      updateMetaTag('og:url', options.url, true);
    }
    updateMetaTag('og:type', 'website', true);

    // Twitter Card meta tags
    updateMetaTag('twitter:card', 'summary_large_image', true);
    updateMetaTag('twitter:title', options.title, true);
    if (options.description) {
      updateMetaTag('twitter:description', options.description, true);
    }
    if (options.image) {
      updateMetaTag('twitter:image', options.image, true);
    }
  }, [options]);
}
```

## 🔧 Adding New Features

### Using Generate Commands (Recommended)

**Generate a complete feature** (hook + component + page):
```bash
uikit generate feature blog
# Creates: blog/hooks/useBlog.ts + blog/components/Blog.tsx + blog/pages/index.tsx
```

**Generate individual elements:**
```bash
# Pages
uikit generate page dashboard        # → main/pages/dashboard.tsx (route: /dashboard)
uikit generate page blog/new        # → blog/pages/new.tsx (route: /blog/new)
uikit generate page shop/cart/items # → shop/pages/cart/items.tsx (route: /shop/cart/items)

# Components
uikit generate component button      # → shared/components/Button.tsx (shared)
uikit generate component blog/card   # → blog/components/Card.tsx (feature-specific)

# Hooks
uikit generate hook auth            # → shared/hooks/useSharedAuth.ts (shared)
uikit generate hook blog/posts      # → blog/hooks/usePosts.ts (feature-specific)
```

### Manual Creation (Alternative)

### Step 1: Create Feature Structure
```bash
mkdir -p src/features/blog/{components,pages}
```

### Step 2: Create Feature Pages
```jsx
// src/web/features/blog/pages/index.tsx
import { useSEO } from '@/shared/hooks/useSEO';

export default function BlogPage() {
  useSEO({
    title: 'Blog - Latest Updates',
    description: 'Read our latest blog posts and updates',
  });

  return (
    <div className="min-h-screen bg-background">
      <h1 className="text-3xl font-bold text-foreground">Blog</h1>
      {/* Blog content */}
    </div>
  );
}
```

```jsx
// src/web/features/blog/pages/[slug].tsx
import { useParams } from 'react-router-dom';
import { useSEO } from '@/shared/hooks/useSEO';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();

  useSEO({
    title: `${slug?.replace('-', ' ')} - Blog`,
    description: `Read our blog post about ${slug}`,
  });

  return (
    <article className="min-h-screen bg-background">
      <h1 className="text-3xl font-bold text-foreground">
        {slug?.replace('-', ' ')}
      </h1>
      {/* Blog post content */}
    </article>
  );
}
```

### Step 3: Auto-Discovery Works!
The routing system will automatically discover:
- `/blog` → `blog/pages/index.tsx`
- `/blog/:slug` → `blog/pages/[slug].tsx`
- `/docs/*` → `docs/pages/[...slug].tsx` (catch-all)

No route configuration needed!

### Catch-All Routes Example
```jsx
// src/web/features/docs/pages/[...slug].tsx - Handles /docs/anything/nested
import { useParams } from 'react-router-dom';
import { useSEO } from '@/shared/hooks/useSEO';

export default function DocsPage() {
  const { '*': catchAll } = useParams();
  const paths = catchAll?.split('/') || [];

  useSEO({
    title: `Docs: ${paths.join(' / ')}`,
    description: `Documentation for ${paths.join(' and ')}`,
  });

  return (
    <div className="min-h-screen bg-background p-8">
      <h1 className="text-3xl font-bold text-foreground mb-4">Documentation</h1>
      <p className="text-muted-foreground mb-6">
        Showing docs for: {paths.join(' → ')}
      </p>
      <ul className="space-y-2">
        {paths.map((path, index) => (
          <li key={index} className="text-foreground">
            Section {index + 1}: <strong>{path}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

## 🧩 Shared Components

```jsx
// src/shared/components/Header.tsx
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@voilajsx/uikit/button';
import { Badge } from '@voilajsx/uikit/badge';

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Blog', path: '/blog' },
  { name: 'About', path: '/about' },
];

export function Header() {
  const location = useLocation();

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">F</span>
            </div>
            <span className="text-xl font-bold text-foreground">FBCA App</span>
          </Link>

          <nav className="hidden md:flex space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="border-border">
              Sign In
            </Button>
            <Button size="sm" className="bg-primary text-primary-foreground">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
```

## ✅ FBCA Best Practices

### Feature Organization
- [ ] Organize by business features, not technical layers
- [ ] Keep feature boundaries clear and well-defined
- [ ] Use shared components for cross-feature UI elements
- [ ] Group related functionality within features

### Routing Conventions
- [ ] Use `index.tsx` for feature root pages (e.g., `/gallery`)
- [ ] Use `[...slug].tsx` for catch-all routes (e.g., `/docs/*`)
- [ ] Use `[param].tsx` for dynamic routes (e.g., `/gallery/:animal`)
- [ ] Nest folders for sub-routes (e.g., `admin/users.tsx` → `/admin/users`)
- [ ] `main` feature maps to homepage (`/`)

### SEO Management
- [ ] Use `useSEO` hook in every page component
- [ ] Provide meaningful titles and descriptions
- [ ] Include relevant keywords for each page
- [ ] Set up Open Graph and Twitter Card meta tags

### Component Architecture
- [ ] Feature-specific components go in `features/{name}/components/`
- [ ] Shared components go in `shared/components/`
- [ ] Custom hooks go in `shared/hooks/`
- [ ] Utilities go in `shared/utils/`

### Performance
- [ ] All routes are lazy-loaded by default
- [ ] Use React Suspense for loading states
- [ ] Implement proper error boundaries
- [ ] Optimize images and assets

## 🚀 Advanced FBCA Patterns

### Feature-Based State Management
```jsx
// src/features/auth/hooks/useAuth.ts
import { create } from 'zustand';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
}

export const useAuth = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: async (credentials) => {
    // Handle authentication
    const user = await authenticate(credentials);
    set({ user, isAuthenticated: true });
  },
  logout: () => {
    set({ user: null, isAuthenticated: false });
  },
}));
```

### Feature Services
```jsx
// src/features/gallery/services/imageService.ts
export class ImageService {
  static async getImages(category?: string): Promise<Image[]> {
    const response = await fetch(`/api/images?category=${category || ''}`);
    return response.json();
  }

  static async getImage(id: string): Promise<Image> {
    const response = await fetch(`/api/images/${id}`);
    return response.json();
  }
}
```

### Feature-Based Testing
```jsx
// src/features/auth/components/__tests__/LoginForm.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { LoginForm } from '../LoginForm';

describe('LoginForm', () => {
  it('validates email and password', async () => {
    const mockSubmit = jest.fn();
    render(<LoginForm onSubmit={mockSubmit} />);

    // Test validation logic
    const submitButton = screen.getByRole('button', { name: /sign in/i });
    expect(submitButton).toBeDisabled();

    // Fill form and submit
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'test@example.com' }
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'password123' }
    });

    fireEvent.click(submitButton);
    expect(mockSubmit).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password123',
      remember: false
    });
  });
});
```

## 🔄 Migration from Other Architectures

### From Traditional Layer-Based
```
Before (Layer-based):
src/
├── components/
├── pages/
├── services/
├── hooks/
└── utils/

After (Feature-based):
src/
├── features/
│   ├── auth/
│   ├── gallery/
│   └── blog/
├── shared/
└── lib/
```

### Migration Strategy
1. **Identify Features** - Group related pages/components by business domain
2. **Create Feature Folders** - Move related files into feature directories
3. **Extract Shared Code** - Move reusable components to `shared/`
4. **Update Imports** - Fix import paths after moving files
5. **Add Auto-Discovery** - Replace manual routing with page-based routing

## 📚 Resources

- [React Router](https://reactrouter.com/) - Client-side routing
- [Vite Glob Imports](https://vitejs.dev/guide/features.html#glob-import) - Auto-discovery mechanism
- [Feature-Driven Development](https://en.wikipedia.org/wiki/Feature-driven_development) - Architecture principles
- [UIKit Components](../UIKIT_LLM_GUIDE.md) - Complete component reference

---

**Built with @voilajsx/uikit** ✨