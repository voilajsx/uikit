/**
 * Demo Page 1 - Dashboard/Admin Interface
 * Shows how standard shadcn components get automatically enhanced
 * NO additional classes needed - pure shadcn code with voila enhancements
 */

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, Button, Badge, Input, Label, Avatar, AvatarFallback, AvatarImage, Progress, Separator } from '@voilajsx/uikit';
import { 
  BarChart3, 
  Users, 
  DollarSign, 
  Activity,
  TrendingUp,
  Bell,
  Search,
  Settings
} from 'lucide-react';

// Stats card component - pure shadcn
function StatsCard({ 
  title, 
  value, 
  change, 
  icon: Icon 
}: { 
  title: string; 
  value: string; 
  change: string; 
  icon: React.ComponentType<any> 
}) {
  return (
    <Card className="bg-card shadow-sm">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <div className="text-2xl font-bold">{value}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-primary">{change}</span> from last month
            </p>
          </div>
          <Icon className="h-8 w-8 text-muted-foreground" />
        </div>
      </CardContent>
    </Card>
  );
}

// Activity card - pure shadcn  
function ActivityCard() {
  return (
    <Card className="bg-card shadow-md">
      <CardHeader>
        <CardTitle className="text-xl">Recent Activity</CardTitle>
        <CardDescription>Latest updates from your dashboard</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium">New user registration</p>
            <p className="text-xs text-muted-foreground">2 minutes ago</p>
          </div>
          <Badge variant="secondary">New</Badge>
        </div>
        
        <Separator />
        
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium">Payment processed</p>
            <p className="text-xs text-muted-foreground">5 minutes ago</p>
          </div>
          <Badge className="bg-primary text-primary-foreground">Success</Badge>
        </div>
        
        <Separator />
        
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarFallback>XY</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium">System backup completed</p>
            <p className="text-xs text-muted-foreground">10 minutes ago</p>
          </div>
          <Badge variant="outline">System</Badge>
        </div>
      </CardContent>
    </Card>
  );
}

// Main dashboard page - pure shadcn with automatic enhancements
export function ExamplePage1() {
  return (
    <div className="min-h-screen bg-background p-4 space-y-6">
      {/* Header - pure shadcn */}
      <div className="flex items-center justify-between bg-card rounded-lg p-6 shadow-sm">
        <div>
          <h1 className="text-3xl font-bold">Dashboard Overview</h1>
          <p className="text-muted-foreground">Welcome back! Here's what's happening.</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search..." className="pl-8 w-64" />
          </div>
          <Button variant="outline" size="icon">
            <Bell className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Stats Grid - pure shadcn components */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Revenue"
          value="$45,231"
          change="+20.1%"
          icon={DollarSign}
        />
        <StatsCard
          title="Active Users"
          value="2,350"
          change="+12.5%"
          icon={Users}
        />
        <StatsCard
          title="Conversion Rate"
          value="3.2%"
          change="+0.4%"
          icon={Activity}
        />
        <StatsCard
          title="Growth Rate"
          value="15.8%"
          change="+2.1%"
          icon={TrendingUp}
        />
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Card - pure shadcn */}
        <Card className="lg:col-span-2 bg-card shadow-md">
          <CardHeader>
            <CardTitle className="text-2xl">Revenue Analytics</CardTitle>
            <CardDescription>Monthly revenue breakdown and trends</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="h-64 bg-muted/20 rounded-lg flex items-center justify-center">
              <div className="text-center space-y-2">
                <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto" />
                <p className="text-sm text-muted-foreground">Chart placeholder</p>
              </div>
            </div>
            
            <div className="mt-6 space-y-4">
              <div className="flex justify-between text-sm">
                <span>Q4 Progress</span>
                <span>68%</span>
              </div>
              <Progress value={68} className="w-full" />
              
              <div className="flex justify-between text-sm">
                <span>Annual Goal</span>
                <span>85%</span>
              </div>
              <Progress value={85} className="w-full" />
            </div>
          </CardContent>
        </Card>

        {/* Activity sidebar */}
        <ActivityCard />
      </div>

      {/* Action Buttons - pure shadcn with automatic gradient enhancements */}
      <Card className="bg-card shadow-sm">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-primary text-primary-foreground">
              Generate Report
            </Button>
            <Button variant="outline">
              Export Data
            </Button>
            <Button className="bg-secondary text-secondary-foreground">
              Schedule Meeting
            </Button>
            <Button className="bg-accent text-accent-foreground">
              Send Notification
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Form Section - pure shadcn */}
      <Card className="bg-card shadow-md">
        <CardHeader>
          <CardTitle className="text-xl">Quick Settings</CardTitle>
          <CardDescription>Update your preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input id="company" placeholder="Your company name" />
            </div>
          </div>
          
          <div className="flex gap-4 pt-4">
            <Button className="bg-primary text-primary-foreground">
              Save Changes
            </Button>
            <Button variant="outline">
              Cancel
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Export the main component
export default ExamplePage1;