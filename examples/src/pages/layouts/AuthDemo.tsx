import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { RotateCcw } from 'lucide-react';
import { Motion, Stagger, Counter, Typewriter, Reveal } from '@/components/ui/motion';

export default function MotionDemo() {
  const [key, setKey] = useState(0);

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header */}
        <Motion 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          key={`header-${key}`}
        >
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground">Motion Demo</h1>
            <Button onClick={() => setKey(k => k + 1)} className="mt-4">
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset Animations
            </Button>
          </div>
        </Motion>

        {/* Custom Animations (since presets might not work) */}
        <Motion 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          delay={0.2} 
          key={`presets-${key}`}
        >
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Custom Animation States</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <Motion 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  delay={0.5} 
                  key={`up-${key}`}
                >
                  <div className="h-16 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-primary-foreground text-sm">Fade Up</span>
                  </div>
                </Motion>
                <Motion 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  delay={0.7} 
                  key={`left-${key}`}
                >
                  <div className="h-16 bg-accent rounded-lg flex items-center justify-center">
                    <span className="text-accent-foreground text-sm">Fade Left</span>
                  </div>
                </Motion>
                <Motion 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  delay={0.9} 
                  key={`scale-${key}`}
                >
                  <div className="h-16 bg-secondary rounded-lg flex items-center justify-center">
                    <span className="text-secondary-foreground text-sm">Scale In</span>
                  </div>
                </Motion>
              </div>
            </CardContent>
          </Card>
        </Motion>

        {/* Stagger Animation */}
        <Motion 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          delay={0.4} 
          key={`stagger-card-${key}`}
        >
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Stagger Animation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Motion initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} delay={0.6}>
                  <Badge className="bg-primary text-primary-foreground">Item 1</Badge>
                </Motion>
                <Motion initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} delay={0.8}>
                  <Badge className="bg-accent text-accent-foreground">Item 2</Badge>
                </Motion>
                <Motion initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} delay={1.0}>
                  <Badge className="bg-secondary text-secondary-foreground">Item 3</Badge>
                </Motion>
                <Motion initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} delay={1.2}>
                  <Badge className="bg-muted text-muted-foreground">Item 4</Badge>
                </Motion>
              </div>
            </CardContent>
          </Card>
        </Motion>

        {/* Counter */}
        <Motion 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          delay={0.6} 
          key={`counter-card-${key}`}
        >
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Animated Counter</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <Counter 
                  to={1234} 
                  duration={2} 
                  className="text-4xl font-bold text-primary"
                  key={`counter-${key}`}
                  triggerInView={false}
                />
                <div className="text-sm text-muted-foreground">Total Users</div>
              </div>
            </CardContent>
          </Card>
        </Motion>

        {/* Typewriter */}
        <Motion 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          delay={0.8} 
          key={`type-card-${key}`}
        >
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Typewriter Effect</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg">
                <Typewriter 
                  text="Building amazing interfaces with smooth animations..."
                  speed={50}
                  className="text-foreground"
                  key={`typewriter-${key}`}
                  triggerInView={false}
                />
              </div>
            </CardContent>
          </Card>
        </Motion>

        {/* Interactive Hover */}
        <Motion 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          delay={1.0} 
          key={`hover-card-${key}`}
        >
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Interactive Hover</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <Motion 
                  className="h-20 bg-muted rounded-lg flex items-center justify-center cursor-pointer transition-transform"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-foreground">Hover to Scale</span>
                </Motion>
                <Motion 
                  className="h-20 bg-muted rounded-lg flex items-center justify-center cursor-pointer transition-transform"
                  whileHover={{ rotate: 5 }}
                >
                  <span className="text-foreground">Hover to Rotate</span>
                </Motion>
              </div>
            </CardContent>
          </Card>
        </Motion>

        {/* Click Effects */}
        <Motion 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          delay={1.2} 
          key={`click-card-${key}`}
        >
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Click Effects</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Motion whileTap={{ scale: 0.95 }}>
                  <Button className="bg-primary text-primary-foreground transition-transform">
                    Click Me
                  </Button>
                </Motion>
                <Motion whileTap={{ rotate: 15 }}>
                  <Button variant="outline" className="border-border transition-transform">
                    Spin Click
                  </Button>
                </Motion>
              </div>
            </CardContent>
          </Card>
        </Motion>

        {/* Scroll Triggered */}
        <div className="h-96"></div>
        
        <Reveal 
          animation={{
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 }
          }}
        >
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold">Scroll to See This!</h3>
              <p>This animates when scrolled into view</p>
            </CardContent>
          </Card>
        </Reveal>

        <div className="h-20"></div>

        <Reveal 
          animation={{
            initial: { opacity: 0, scale: 0.8 },
            animate: { opacity: 1, scale: 1 }
          }}
        >
          <Card className="bg-accent text-accent-foreground">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold">Scale Animation</h3>
              <p>Triggered by intersection observer</p>
            </CardContent>
          </Card>
        </Reveal>

        <div className="h-96"></div>
      </div>
    </div>
  );
}

/*
ANIMATION TRIGGER NOTES:

🔄 ON PAGE LOAD (initial/animate states):
- All Motion components animate immediately when mounted
- Uses CSS transforms: opacity, translateX/Y, scale, rotate
- Smooth 0.3s transitions with easing

🖱️ ON HOVER (whileHover):
- Scale: Element grows 5% larger  
- Rotate: Element tilts 5 degrees
- Requires transition-transform class for smooth CSS

👆 ON CLICK (whileTap):
- Scale down: Element shrinks to 95% while pressed
- Rotate: Element spins 15 degrees while pressed
- Requires transition-transform class for smooth CSS

📜 ON SCROLL INTO VIEW (Reveal component):
- Intersection Observer triggers when element 10% visible
- Custom animation states instead of presets
- Animates only once per scroll session

⚡ WHAT WORKS:
- initial/animate props with custom states
- whileHover/whileTap with transform properties  
- Counter and Typewriter components
- Reveal with custom animation prop
- All semantic UIKit colors

❌ WHAT DOESN'T WORK:
- preset prop (AnimationPresets may not be properly exported)
- Stagger component (simplified to manual delays)
- Complex CSS properties in gestures
- Hardcoded colors

🎯 PERFORMANCE:
- Pure CSS transforms (translateX, translateY, scale, rotate)
- Hardware accelerated animations
- 60fps smooth transitions
- No JavaScript animation loops
*/