/**
 * Demo Page 2 - E-commerce/Product Page
 * Shows complex layouts with gradients, cards, and forms
 * Pure v0/Lovable style code - zero custom classes
 */

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, Button, Badge, Input, Label, Textarea, Avatar, AvatarFallback, AvatarImage, Tabs, TabsContent, TabsList, TabsTrigger, Separator, Progress } from '@voilajsx/uikit';
import { 
  Star,
  Heart,
  ShoppingCart,
  Truck,
  Shield,
  RefreshCw,
  MessageSquare,
  ThumbsUp,
  Share2,
  Plus,
  Minus
} from 'lucide-react';

// Product image gallery - pure shadcn
function ProductGallery() {
  return (
    <div className="space-y-4">
      <div className="aspect-square bg-muted rounded-xl overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 bg-primary/20 rounded-lg mx-auto"></div>
            <p className="text-sm text-muted-foreground">Product Image</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-4 gap-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="aspect-square bg-muted rounded-lg overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-muted to-muted/30 flex items-center justify-center">
              <div className="w-6 h-6 bg-primary/20 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Product info section
function ProductInfo() {
  const [quantity, setQuantity] = useState(1);
  
  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="secondary">New Arrival</Badge>
          <Badge className="bg-primary text-primary-foreground">Best Seller</Badge>
        </div>
        
        <h1 className="text-3xl font-bold mb-2">Premium Wireless Headphones</h1>
        
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-4 w-4 fill-primary text-primary" />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">(128 reviews)</span>
        </div>
        
        <div className="flex items-baseline gap-4">
          <span className="text-3xl font-bold text-primary">$299.99</span>
          <span className="text-lg text-muted-foreground line-through">$399.99</span>
          <Badge variant="destructive">25% OFF</Badge>
        </div>
      </div>
      
      <Separator />
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Key Features</h3>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            Active Noise Cancellation
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            30-hour battery life
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            Premium leather comfort
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            Wireless charging case
          </li>
        </ul>
      </div>
      
      <Separator />
      
      {/* Quantity and purchase */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <Label htmlFor="quantity" className="text-sm font-medium">Quantity</Label>
          <div className="flex items-center border rounded-md">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="px-3 py-1 text-sm">{quantity}</span>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setQuantity(quantity + 1)}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
        </div>
        
        <div className="flex gap-3">
          <Button className="flex-1 bg-primary text-primary-foreground">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
          <Button variant="outline" size="icon">
            <Heart className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
        
        <Button className="w-full bg-accent text-accent-foreground" size="lg">
          Buy Now - Fast Checkout
        </Button>
      </div>
      
      {/* Shipping info */}
      <Card className="bg-card shadow-sm">
        <CardContent className="p-4 space-y-3">
          <div className="flex items-center gap-3">
            <Truck className="h-4 w-4 text-primary" />
            <span className="text-sm">Free shipping on orders over $50</span>
          </div>
          <div className="flex items-center gap-3">
            <RefreshCw className="h-4 w-4 text-primary" />
            <span className="text-sm">30-day return policy</span>
          </div>
          <div className="flex items-center gap-3">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm">2-year warranty included</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Review component
function Review({ name, rating, comment, date }: { name: string; rating: number; comment: string; date: string }) {
  return (
    <div className="space-y-3">
      <div className="flex items-start gap-3">
        <Avatar>
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1 space-y-1">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-medium">{name}</h4>
            <span className="text-xs text-muted-foreground">{date}</span>
          </div>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star 
                key={star} 
                className={`h-3 w-3 ${star <= rating ? 'fill-primary text-primary' : 'text-muted-foreground'}`} 
              />
            ))}
          </div>
          <p className="text-sm text-muted-foreground">{comment}</p>
          <div className="flex items-center gap-4 pt-1">
            <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
              <ThumbsUp className="w-3 h-3 mr-1" />
              Helpful (12)
            </Button>
            <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
              <MessageSquare className="w-3 h-3 mr-1" />
              Reply
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main product page
export function ExamplePage2() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">AudioStore</h1>
            <div className="flex items-center gap-4">
              <Button variant="ghost">Categories</Button>
              <Button variant="ghost">Deals</Button>
              <Button variant="outline">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Cart (3)
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-6">
          Home / Electronics / Headphones / Wireless
        </nav>

        {/* Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <ProductGallery />
          <ProductInfo />
        </div>

        {/* Product Details Tabs */}
        <Card className="bg-card shadow-md">
          <Tabs defaultValue="description" className="w-full">
            <CardHeader>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="reviews">Reviews (128)</TabsTrigger>
              </TabsList>
            </CardHeader>
            
            <CardContent>
              <TabsContent value="description" className="space-y-4">
                <h3 className="text-lg font-semibold">Product Description</h3>
                <p className="text-muted-foreground">
                  Experience unparalleled audio quality with our premium wireless headphones. 
                  Featuring advanced noise cancellation technology and premium materials, 
                  these headphones deliver exceptional sound quality for music lovers and professionals alike.
                </p>
                <p className="text-muted-foreground">
                  The ergonomic design ensures comfortable wearing for extended periods, while the 
                  long-lasting battery provides up to 30 hours of continuous playback. Perfect for 
                  travel, work, or leisure.
                </p>
              </TabsContent>
              
              <TabsContent value="specifications" className="space-y-4">
                <h3 className="text-lg font-semibold">Technical Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Driver Size</span>
                      <span>40mm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Frequency Response</span>
                      <span>20Hz - 20kHz</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Impedance</span>
                      <span>32 Ohms</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Battery Life</span>
                      <span>30 hours</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Bluetooth Version</span>
                      <span>5.2</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Weight</span>
                      <span>250g</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Charging Time</span>
                      <span>2 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Warranty</span>
                      <span>2 years</span>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Customer Reviews</h3>
                  <Button className="bg-primary text-primary-foreground">
                    Write a Review
                  </Button>
                </div>
                
                {/* Rating Summary */}
                <Card className="bg-muted/20 shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary">4.8</div>
                        <div className="flex items-center gap-1 mb-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="h-4 w-4 fill-primary text-primary" />
                          ))}
                        </div>
                        <div className="text-xs text-muted-foreground">128 reviews</div>
                      </div>
                      <div className="flex-1 space-y-2">
                        {[5, 4, 3, 2, 1].map((rating) => (
                          <div key={rating} className="flex items-center gap-2">
                            <span className="text-xs w-2">{rating}</span>
                            <Star className="h-3 w-3 fill-primary text-primary" />
                            <Progress value={rating === 5 ? 80 : rating === 4 ? 15 : 3} className="flex-1" />
                            <span className="text-xs text-muted-foreground w-8">
                              {rating === 5 ? '102' : rating === 4 ? '19' : '4'}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Reviews List */}
                <div className="space-y-6">
                  <Review 
                    name="Sarah Johnson" 
                    rating={5} 
                    comment="Absolutely fantastic headphones! The noise cancellation is incredible and the sound quality is top-notch. Worth every penny."
                    date="2 days ago"
                  />
                  <Separator />
                  <Review 
                    name="Mike Chen" 
                    rating={4} 
                    comment="Great build quality and comfortable to wear for long periods. Battery life is as advertised. Only minor complaint is the case could be smaller."
                    date="1 week ago"
                  />
                  <Separator />
                  <Review 
                    name="Emma Wilson" 
                    rating={5} 
                    comment="These headphones exceeded my expectations. Perfect for both work calls and music. The app integration is seamless too."
                    date="2 weeks ago"
                  />
                </div>
                
                <Button variant="outline" className="w-full">
                  Load More Reviews
                </Button>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
}

// Export the main component
export default ExamplePage2;