/**
 * Dashboard page component for the admin dashboard example
 * 
 * Displays key metrics, charts, and recent activity
 * @module examples/dashboard/pages/Dashboard
 */
import React from 'react';
import { 
  Card, 
  Button, 
  Badge, 
  Table, 
  KpiGrid, 
  Tabs,
  Avatar
} from '@voilajsx/uikit';

import { 
  UserIcon, 
  ChartBarIcon, 
  HomeIcon, 
  CogIcon 
} from '@voilajsx/uikit/icons';

/**
 * Dashboard component for displaying metrics, charts and recent activity
 * 
 * @returns {JSX.Element} The rendered Dashboard component
 */
const Dashboard = () => {
  // Sample metrics data for KPI grid
  const metrics = [
    {
      title: 'Total Users',
      value: '12,345',
      icon: <UserIcon size="lg" className="text-[var(--primary-color)]" />,
      trend: 'up',
      trendValue: '12%'
    },
    {
      title: 'Revenue',
      value: '$34,567',
      icon: <ChartBarIcon size="lg" className="text-[var(--success-color)]" />,
      trend: 'up',
      trendValue: '8.2%'
    },
    {
      title: 'Conversion Rate',
      value: '3.2%',
      icon: <CogIcon size="lg" className="text-[var(--warning-color)]" />,
      trend: 'down',
      trendValue: '0.5%'
    },
    {
      title: 'Active Sessions',
      value: '1,234',
      icon: <HomeIcon size="lg" className="text-[var(--info-color)]" />,
      trend: 'up',
      trendValue: '15%'
    }
  ];
  
  // Sample chart data for LineChart and BarChart
  const chartData = [
    { name: 'Jan', value: 4000 },
    { name: 'Feb', value: 3000 },
    { name: 'Mar', value: 2000 },
    { name: 'Apr', value: 2780 },
    { name: 'May', value: 1890 },
    { name: 'Jun', value: 2390 },
    { name: 'Jul', value: 3490 }
  ];
  
  // Sample data for the recent users table
  const recentUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor', status: 'Inactive' },
    { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'User', status: 'Active' },
    { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', role: 'User', status: 'Pending' }
  ];

  return (
    <div>
      <div className="mb-[var(--spacing-6)]">
        <h1 className="text-2xl font-bold">Dashboard Overview</h1>
        <p className="text-[var(--text-secondary)]">
          Welcome back! Here's what's happening with your platform today.
        </p>
      </div>

      {/* Key Metrics Section */}
      <KpiGrid metrics={metrics} columns={4} className="mb-[var(--spacing-6)]" />
      
      {/* Charts Section */}
      <Tabs className="mb-[var(--spacing-6)]">
        <Tabs.List>
          <Tabs.Tab>Overview</Tabs.Tab>
          <Tabs.Tab>Performance</Tabs.Tab>
          <Tabs.Tab>Analytics</Tabs.Tab>
        </Tabs.List>
        
        <Tabs.Panels>
          <Tabs.Panel>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--spacing-6)] mt-[var(--spacing-6)]">
              <Card>
                <Card.Header>User Growth</Card.Header>
                <Card.Body>
                  {/* Instead of LineChart component, display placeholder content */}
                  <div className="h-[300px] flex items-center justify-center bg-[var(--bg-subtle)]">
                    <div className="text-center">
                      <ChartBarIcon size="lg" className="text-[var(--text-secondary)] mb-2" />
                      <p>User Growth Chart</p>
                      <p className="text-sm text-[var(--text-secondary)]">
                        (Chart component would render here in the actual implementation)
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
              
              <Card>
                <Card.Header>Revenue Breakdown</Card.Header>
                <Card.Body>
                  {/* Instead of PieChart component, display placeholder content */}
                  <div className="h-[300px] flex items-center justify-center bg-[var(--bg-subtle)]">
                    <div className="text-center">
                      <ChartBarIcon size="lg" className="text-[var(--text-secondary)] mb-2" />
                      <p>Revenue Breakdown Chart</p>
                      <p className="text-sm text-[var(--text-secondary)]">
                        (Chart component would render here in the actual implementation)
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Tabs.Panel>
          
          <Tabs.Panel>
            <div className="p-[var(--spacing-4)] mt-[var(--spacing-4)]">
              <Card>
                <Card.Header>Performance Metrics</Card.Header>
                <Card.Body>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Conversion Rate</span>
                        <span>3.2%</span>
                      </div>
                      <div className="w-full bg-[var(--bg-subtle)] rounded-full h-2">
                        <div className="bg-[var(--primary-color)] h-2 rounded-full" style={{ width: '32%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Bounce Rate</span>
                        <span>42%</span>
                      </div>
                      <div className="w-full bg-[var(--bg-subtle)] rounded-full h-2">
                        <div className="bg-[var(--warning-color)] h-2 rounded-full" style={{ width: '42%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Growth Rate</span>
                        <span>8.7%</span>
                      </div>
                      <div className="w-full bg-[var(--bg-subtle)] rounded-full h-2">
                        <div className="bg-[var(--success-color)] h-2 rounded-full" style={{ width: '87%' }}></div>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Tabs.Panel>
          
          <Tabs.Panel>
            <div className="p-[var(--spacing-4)] mt-[var(--spacing-4)]">
              <Card>
                <Card.Header>Traffic Sources</Card.Header>
                <Card.Body>
                  <div className="h-[300px] flex items-center justify-center bg-[var(--bg-subtle)]">
                    <div className="text-center">
                      <ChartBarIcon size="lg" className="text-[var(--text-secondary)] mb-2" />
                      <p>Traffic Sources Chart</p>
                      <p className="text-sm text-[var(--text-secondary)]">
                        (Chart component would render here in the actual implementation)
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Tabs.Panel>
        </Tabs.Panels>
      </Tabs>
      
      {/* Recent Activity Section */}
      <Card className="mb-[var(--spacing-6)]">
        <Card.Header className="flex justify-between items-center">
          <div>Recent Users</div>
          <Button variant="ghost" size="sm">View All</Button>
        </Card.Header>
        <Card.Body className="p-0">
          <Table variant="striped">
            <Table.Head>
              <Table.Row>
                <Table.Cell>Name</Table.Cell>
                <Table.Cell>Email</Table.Cell>
                <Table.Cell>Role</Table.Cell>
                <Table.Cell>Status</Table.Cell>
                <Table.Cell>Actions</Table.Cell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              {recentUsers.map(user => (
                <Table.Row key={user.id}>
                  <Table.Cell>
                    <div className="flex items-center">
                      <Avatar name={user.name} size="xs" className="mr-2" />
                      {user.name}
                    </div>
                  </Table.Cell>
                  <Table.Cell>{user.email}</Table.Cell>
                  <Table.Cell>{user.role}</Table.Cell>
                  <Table.Cell>
                    <Badge 
                      variant={
                        user.status === 'Active' ? 'success' : 
                        user.status === 'Inactive' ? 'error' : 'warning'
                      }
                    >
                      {user.status}
                    </Badge>
                  </Table.Cell>
                  <Table.Cell>
                    <div className="flex space-x-1">
                      <Button variant="ghost" size="xs">Edit</Button>
                      <Button variant="ghost" size="xs">View</Button>
                    </div>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Card.Body>
      </Card>
      
      {/* Quick Actions Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <Card.Body>
            <div className="flex items-center">
              <div className="p-3 bg-[var(--primary-color)] bg-opacity-10 rounded-full mr-4">
                <UserIcon className="text-[var(--primary-color)]" />
              </div>
              <div>
                <h3 className="font-semibold">User Management</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4">Add or modify user accounts</p>
                <Button size="sm" leftIcon={<UserIcon />}>Manage Users</Button>
              </div>
            </div>
          </Card.Body>
        </Card>
        
        <Card>
          <Card.Body>
            <div className="flex items-center">
              <div className="p-3 bg-[var(--success-color)] bg-opacity-10 rounded-full mr-4">
                <CogIcon className="text-[var(--success-color)]" />
              </div>
              <div>
                <h3 className="font-semibold">System Settings</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4">Configure system preferences</p>
                <Button size="sm" variant="outline" leftIcon={<CogIcon />}>Settings</Button>
              </div>
            </div>
          </Card.Body>
        </Card>
        
        <Card>
          <Card.Body>
            <div className="flex items-center">
              <div className="p-3 bg-[var(--info-color)] bg-opacity-10 rounded-full mr-4">
                <HomeIcon className="text-[var(--info-color)]" />
              </div>
              <div>
                <h3 className="font-semibold">Site Overview</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4">View site performance</p>
                <Button size="sm" variant="ghost" leftIcon={<HomeIcon />}>View Site</Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;