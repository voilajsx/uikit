import { useState } from 'react'
import { ThemeProvider, useTheme } from '@voilajsx/uikit/themes/theme-provider'
import { Button } from '@voilajsx/uikit/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/components/ui/card'
import { Badge, badgeVariants } from '@voilajsx/uikit/components/ui/badge'
import { Switch } from '@voilajsx/uikit/components/ui/switch'



function ThemeDemo() {
  const { theme, variant, setTheme, toggleVariant } = useTheme()
  
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-4">
         // In your component:


<Badge variant="secondary">
  @voilajsx/uikit
</Badge>

          <h1 className="text-4xl font-bold">Cross-Platform UI Components</h1>
          <p className="text-xl  ">
            shadcn/ui compatible • Cross-platform • OKLCH colors
          </p>
        </div>

        {/* Theme Controls */}
        <Card>
          <CardHeader>
            <CardTitle>Theme Controls</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Button 
                variant={theme === 'default' ? 'default' : 'outline'}
                onClick={() => setTheme('default')}
              >
                Default
              </Button>
              <Button 
                variant={theme === 'ocean' ? 'default' : 'outline'}
                onClick={() => setTheme('ocean')}
              >
                Ocean
              </Button>
              <Button 
                variant={theme === 'forest' ? 'default' : 'outline'}
                onClick={() => setTheme('forest')}
              >
                Forest
              </Button>
              <Button 
                variant={theme === 'sunset' ? 'default' : 'outline'}
                onClick={() => setTheme('sunset')}
              >
                Sunset
              </Button>
            </div>
            
            <div className="flex items-center space-x-2">
              <Switch checked={variant === 'dark'} onCheckedChange={toggleVariant} />
              <span>Dark mode</span>
            </div>
          </CardContent>
        </Card>

        {/* Component Examples */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Buttons</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
              </div>
              <div className="flex gap-2">
                <Button variant="destructive">Destructive</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Badges</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Installation */}
        <Card>
          <CardHeader>
            <CardTitle>Installation</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded text-sm">
              <code>npm install @voilajsx/uikit</code>
            </pre>
          </CardContent>
        </Card>

      </div>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider theme="default" variant="light" detectSystem={true}>
      <ThemeDemo />
    </ThemeProvider>
  )
}

export default App