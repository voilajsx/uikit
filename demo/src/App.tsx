import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle, Button, Badge } from '@voilajsx/uikit'
import { ThemeProvider, useTheme } from './themes/theme-provider'
import { 
  Home, 
  BarChart3, 
  ShoppingCart, 
  Palette,
  Zap,
  Gem,
  Monitor,
  Brush,
  Moon,
  Sun
} from 'lucide-react'

// Import demo pages
import ExamplePage1 from './example-page1'
import ExamplePage2 from './example-page2'  
import ThemeComparison from './theme-comparison'
import SimpleHomepage from './simple-homepage'

// Navigation component
function Navigation() {
  const { theme, setTheme, mode, setMode } = useTheme()
  
  const themes: { value: string; label: string; icon: React.ComponentType<any> }[] = [
    { value: 'default', label: 'Default', icon: Monitor },
    { value: 'aurora', label: 'Aurora', icon: Palette },
    { value: 'neon', label: 'Neon', icon: Zap },
    { value: 'ruby', label: 'Ruby', icon: Gem },
    { value: 'studio', label: 'Studio', icon: Brush },
    { value: 'mango', label: 'Mango 🥭', icon: Sun },
    { value: 'peach', label: 'Peach 🍑', icon: Gem }
  ]

  return (
    <nav className="bg-card border-b shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-primary">🎨 Voila Demo</h1>
          </Link>
          
          <div className="flex items-center gap-4">
            <Link to="/" className="text-sm hover:text-primary transition-colors">Overview</Link>
            <Link to="/simple" className="text-sm hover:text-primary transition-colors font-semibold">🎨 Simple Demo</Link>
            <Link to="/dashboard" className="text-sm hover:text-primary transition-colors">Dashboard</Link>
            <Link to="/ecommerce" className="text-sm hover:text-primary transition-colors">E-commerce</Link>
            <Link to="/comparison" className="text-sm hover:text-primary transition-colors">Live Demo</Link>
            
            <div className="flex items-center gap-2 ml-4 border-l pl-4">
              {themes.map((themeOption) => {
                const Icon = themeOption.icon
                return (
                  <Button
                    key={themeOption.value}
                    variant={theme === themeOption.value ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setTheme(themeOption.value)}
                    className="h-8 w-8 p-0"
                  >
                    <Icon className="h-4 w-4" />
                  </Button>
                )
              })}
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                className="h-8 w-8 p-0 ml-2"
              >
                {mode === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

// Home page
function HomePage() {
  const { theme } = useTheme()
  
  const demos = [
    {
      title: 'Dashboard Interface',
      description: 'Admin dashboard with stats, charts, and forms using Aurora theme',
      path: '/dashboard',
      icon: BarChart3,
      theme: 'Aurora',
      color: 'purple-green gradients'
    },
    {
      title: 'E-commerce Store',
      description: 'Product pages, reviews, and shopping cart using Neon theme',
      path: '/ecommerce',
      icon: ShoppingCart,
      theme: 'Neon',
      color: 'electric pink-cyan'
    },
    {
      title: '🎨 Simple Homepage Demo',
      description: 'Single page showcasing 4 distinct theme personalities',
      path: '/simple',
      icon: Home,
      theme: '4 Themes',
      color: 'dramatic variations'
    },
    {
      title: 'Live Theme Comparison',
      description: 'Interactive demo showing all themes with live switching',
      path: '/comparison',
      icon: Palette,
      theme: 'All Themes',
      color: 'dynamic switching'
    }
  ]

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="container mx-auto max-w-6xl space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4 py-12">
          <h1 className="text-5xl font-bold">Enhanced Theming System</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Zero-touch shadcn component enhancement with gradients, typography, and design language variations. 
            <br />Same code, completely different personalities.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Badge className="bg-primary text-primary-foreground">Current: {theme}</Badge>
            <Badge variant="outline">Zero Code Changes</Badge>
            <Badge variant="secondary">Pure shadcn</Badge>
          </div>
        </div>

        {/* Key Features */}
        <Card className="bg-card shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">✨ What Makes This Special</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Zero Code Changes</h3>
                <p className="text-sm text-muted-foreground">
                  Drop in any v0/Lovable template unchanged. CSS hijacking automatically enhances existing classes.
                </p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                  <Palette className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Automatic Gradients</h3>
                <p className="text-sm text-muted-foreground">
                  bg-primary becomes beautiful gradients. Typography gets display fonts. Spacing adjusts per theme.
                </p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                  <Brush className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Design Languages</h3>
                <p className="text-sm text-muted-foreground">
                  Each theme has its own personality: modern, tech, luxury, minimal - completely different feels.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Demo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {demos.map((demo) => {
            const Icon = demo.icon
            return (
              <Card key={demo.path} className="bg-card shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="h-6 w-6 text-primary" />
                    <Badge variant="outline">{demo.theme}</Badge>
                  </div>
                  <CardTitle className="text-lg">{demo.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{demo.description}</p>
                  <div className="text-xs text-muted-foreground">
                    Features: {demo.color}
                  </div>
                  <Link to={demo.path}>
                    <Button className="w-full bg-primary text-primary-foreground">
                      View Demo
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Code Example */}
        <Card className="bg-muted/20 border-2 border-dashed border-primary/30">
          <CardHeader>
            <CardTitle className="text-lg">🚀 The Magic</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-muted p-4 rounded-lg">
              <div className="text-sm font-mono">
                <div className="text-muted-foreground">// This code NEVER changes</div>
                <div className="text-primary">&lt;Button className=<span className="text-green-600">"bg-primary text-primary-foreground"</span>&gt;</div>
                <div className="pl-4">Get Started</div>
                <div className="text-primary">&lt;/Button&gt;</div>
                <br />
                <div className="text-muted-foreground">// But automatically becomes:</div>
                <div className="text-xs space-y-1 mt-2">
                  <div>🌈 <strong>Aurora:</strong> Purple-green gradient, rounded, Inter font</div>
                  <div>⚡ <strong>Neon:</strong> Electric gradient, sharp, JetBrains Mono</div>
                  <div>💎 <strong>Ruby:</strong> Red-gold gradient, luxury spacing</div>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground text-center">
              Change theme above ↗️ and watch this page transform!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// Main App component
function AppContent() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/simple" element={<SimpleHomepage />} />
          <Route path="/dashboard" element={<ExamplePage1 />} />
          <Route path="/ecommerce" element={<ExamplePage2 />} />
          <Route path="/comparison" element={<ThemeComparison />} />
        </Routes>
      </div>
    </Router>
  )
}

// App with theme provider
export default function App() {
  return (
    <ThemeProvider theme="aurora" mode="light">
      <AppContent />
    </ThemeProvider>
  )
}