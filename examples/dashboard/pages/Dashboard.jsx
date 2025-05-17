/**
 * Dashboard Page Component
 * 
 * Main dashboard page displaying metrics, charts, and recent activity.
 * Showcases data visualization components from the @voilajsx/uikit.
 * 
 * @module examples/dashboard/pages/Dashboard
 */

import React from 'react';
import {
  Card,
  Button,
  Badge,
  Table,
  KpiGrid,
  LineChart,
  BarChart,
  PieChart,
  Tabs,
  Avatar
} from '@voilajsx/uikit';
import {
  UserIcon,
  ChartBarIcon,
  DocumentIcon,
  CurrencyDollarIcon
} from '@voilajsx/uikit/icons';

/**
 * Dashboard page component displaying analytics and recent activity
 * 
 * @returns {JSX.Element} Dashboard page component
 */
const Dashboard = () => {
  // Sample KPI metrics data
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
      icon: <CurrencyDollarIcon size="lg" className="text-[var(--success-color)]" />,
      trend: 'up',
      trendValue: '8.2%'
    },
    {
      title: 'Conversion Rate',
      value: '3.2%',
      icon: <ChartBarIcon size="lg" className="text-[var(--warning-color)]" />,
      trend: 'down',
      trendValue: '0.5%'
    },
    {
      title: 'Active Sessions',
      value: '1,234',
      icon: <DocumentIcon size="lg" className="text-[var(--info-color)]" />,
      trend: 'up',
      trendValue: '15%'
    }
  ];
  
  // Sample chart data
  const lineChartData = [
    { name: 'Jan', users: 4000, revenue: 2400 },
    { name: 'Feb', users: 3000, revenue: 1398 },
    { name: 'Mar', users: 2000, revenue: 9800 },
    { name: 'Apr', users: 2780, revenue: 3908 },
    { name: 'May', users: 1890, revenue: 4800 },
    { name: 'Jun', users: 2390, revenue: 3800 },
    { name: 'Jul', users: 3490, revenue: 4300 }
  ];
  
  const barChartData = [
    { name: 'Q1', sales: 8000, profit: 2400 },
    { name: 'Q2', sales: 6700, profit: 1950 },
    { name: 'Q3', sales: 7800, profit: 2300 },
    { name: 'Q4', sales: 9200, profit: 2900 }
  ];
  
  const pieChartData = [
    { name: 'Desktop', value: 400 },
    { name: 'Mobile', value: 300 },
    { name: 'Tablet', value: 200 },
    { name: 'Other', value: 100 }
  ];
  
  // Sample recent users data
  const recentUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', lastLogin: '2 hours ago' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active', lastLogin: '1 day ago' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor', status: 'Inactive', lastLogin: '5 days ago' },
    { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'User', status: 'Active', lastLogin: '2 hours ago' },
    { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', role: 'User', status: 'Pending', lastLogin: 'Never' }
  ];
  
  return (
    <div className="space-y-[var(--spacing-6)]">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Button variant="outline" size="sm">Download Report</Button>
      </div>
      
      {/* KPI Metrics */}
      <KpiGrid metrics={metrics} columns={4} />
      
      {/* Charts Section */}
      <Tabs>
        <Tabs.List>
          <Tabs.Tab>Overview</Tabs.Tab>
          <Tabs.Tab>Performance</Tabs.Tab>
          <Tabs.Tab>Traffic</Tabs.Tab>
        </Tabs.List>
        
        <Tabs.Panels>
          <Tabs.Panel>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--spacing-6)] mt-[var(--spacing-6)]">
              <LineChart
                data={lineChartData}
                lines={[
                  { dataKey: 'users', name: 'Active Users' },
                  { dataKey: 'revenue', name: 'Revenue ($)' }
                ]}
                xAxisDataKey="name"
                title="Users & Revenue Trends"
                height={300}
              />
              
              <PieChart
                data={pieChartData}
                title="Traffic by Device"
                height={300}
                innerRadius={60}
                outerRadius={80}
              />
            </div>
          </Tabs.Panel>
          
          <Tabs.Panel>
            <div className="mt-[var(--spacing-6)]">
              <BarChart
                data={barChartData}
                bars={[
                  { dataKey: 'sales', name: 'Sales' },
                  { dataKey: 'profit', name: 'Profit' }
                ]}
                xAxisDataKey="name"
                title="Quarterly Performance"
                height={300}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <Card>
                  <Card.Body className="p-4">
                    <div className="text-sm text-[var(--text-secondary)] mb-1">
                      Conversion Rate
                    </div>
                    <div className="text-2xl font-bold mb-2">3.2%</div>
                    <div className="w-full bg-[var(--bg-subtle)] rounded-full h-2">
                      <div 
                        className="bg-[var(--primary-color)] h-2 rounded-full" 
                        style={{ width: '32%' }}
                      ></div>
                    </div>
                  </Card.Body>
                </Card>
                
                <Card>
                  <Card.Body className="p-4">
                    <div className="text-sm text-[var(--text-secondary)] mb-1">
                      Bounce Rate
                    </div>
                    <div className="text-2xl font-bold mb-2">42%</div>
                    <div className="w-full bg-[var(--bg-subtle)] rounded-full h-2">
                      <div 
                        className="bg-[var(--warning-color)] h-2 rounded-full" 
                        style={{ width: '42%' }}
                      ></div>
                    </div>
                  </Card.Body>
                </Card>
                
                <Card>
                  <Card.Body className="p-4">
                    <div className="text-sm text-[var(--text-secondary)] mb-1">
                      Avg. Session Duration
                    </div>
                    <div className="text-2xl font-bold mb-2">2m 45s</div>
                    <div className="w-full bg-[var(--bg-subtle)] rounded-full h-2">
                      <div 
                        className="bg-[var(--success-color)] h-2 rounded-full" 
                        style={{ width: '65%' }}
                      ></div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Tabs.Panel>
          
          <Tabs.Panel>
            <div className="mt-[var(--spacing-6)]">
              <Card>
                <Card.Header>Traffic Sources</Card.Header>
                <Card.Body className="p-0">
                  <Table>
                    <Table.Head>
                      <Table.Row>
                        <Table.Cell as="th">Source</Table.Cell>
                        <Table.Cell as="th">Users</Table.Cell>
                        <Table.Cell as="th">Conversion</Table.Cell>
                        <Table.Cell as="th">Revenue</Table.Cell>
                      </Table.Row>
                    </Table.Head>
                    <Table.Body>
                      <Table.Row>
                        <Table.Cell>Google</Table.Cell>
                        <Table.Cell>4,294</Table.Cell>
                        <Table.Cell>5.2%</Table.Cell>
                        <Table.Cell>$12,500</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>Direct</Table.Cell>
                        <Table.Cell>3,142</Table.Cell>
                        <Table.Cell>4.8%</Table.Cell>
                        <Table.Cell>$9,200</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>Social</Table.Cell>
                        <Table.Cell>2,891</Table.Cell>
                        <Table.Cell>3.1%</Table.Cell>
                        <Table.Cell>$7,400</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>Email</Table.Cell>
                        <Table.Cell>1,543</Table.Cell>
                        <Table.Cell>7.3%</Table.Cell>
                        <Table.Cell>$6,800</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>Referral</Table.Cell>
                        <Table.Cell>1,209</Table.Cell>
                        <Table.Cell>5.7%</Table.Cell>
                        <Table.Cell>$4,700</Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                </Card.Body>
              </Card>
            </div>
          </Tabs.Panel>
        </Tabs.Panels>
      </Tabs>
      
      {/* Recent Users Table */}
      <Card>
        <Card.Header className="flex justify-between items-center">
          <div>Recent Users</div>
          <Button variant="ghost" size="sm">View All</Button>
        </Card.Header>
        <Card.Body className="p-0">
          <Table>
            <Table.Head>
              <Table.Row>
                <Table.Cell as="th">Name</Table.Cell>
                <Table.Cell as="th">Email</Table.Cell>
                <Table.Cell as="th">Role</Table.Cell>
                <Table.Cell as="th">Status</Table.Cell>
                <Table.Cell as="th">Last Login</Table.Cell>
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
                      size="sm"
                    >
                      {user.status}
                    </Badge>
                  </Table.Cell>
                  <Table.Cell>{user.lastLogin}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Dashboard;