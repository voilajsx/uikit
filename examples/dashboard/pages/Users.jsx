/**
 * Users management page component for the dashboard example
 * 
 * Displays user data with filtering, searching and actions
 * @module examples/dashboard/pages/Users
 */
import React, { useState } from 'react';
import { 
  Card, 
  Button, 
  Badge, 
  Input, 
  Select, 
  Table, 
  Avatar, 
  Dropdown 
} from '@voilajsx/uikit';

import { 
  SearchIcon, 
  PlusIcon, 
  DotsVerticalIcon,
  CogIcon,
  UserIcon 
} from '@voilajsx/uikit/icons';

/**
 * Users component for user management interface
 * 
 * @returns {JSX.Element} The rendered Users component
 */
const Users = () => {
  // Sample user data
  const [userData] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', lastLogin: '2023-05-01' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active', lastLogin: '2023-05-02' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor', status: 'Inactive', lastLogin: '2023-04-28' },
    { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'User', status: 'Active', lastLogin: '2023-05-03' },
    { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', role: 'User', status: 'Pending', lastLogin: '2023-04-30' },
    { id: 6, name: 'Diana Smith', email: 'diana@example.com', role: 'Admin', status: 'Active', lastLogin: '2023-05-01' },
    { id: 7, name: 'Edward Jones', email: 'edward@example.com', role: 'User', status: 'Inactive', lastLogin: '2023-04-15' },
    { id: 8, name: 'Fiona Miller', email: 'fiona@example.com', role: 'Editor', status: 'Active', lastLogin: '2023-05-02' },
    { id: 9, name: 'George Wilson', email: 'george@example.com', role: 'User', status: 'Pending', lastLogin: '2023-04-22' },
    { id: 10, name: 'Hannah Taylor', email: 'hannah@example.com', role: 'User', status: 'Active', lastLogin: '2023-05-03' },
  ]);
  
  // State for filter and search
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  
  // Filter users based on search and filters
  const filteredUsers = userData.filter(user => {
    const matchesSearch = searchTerm === '' || 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesRole = roleFilter === '' || user.role === roleFilter;
    const matchesStatus = statusFilter === '' || user.status === statusFilter;
    
    return matchesSearch && matchesRole && matchesStatus;
  });
  
  // Get current users for pagination
  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  
  // Calculate total pages
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  
  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  
  // Reset filters
  const resetFilters = () => {
    setSearchTerm('');
    setRoleFilter('');
    setStatusFilter('');
    setCurrentPage(1);
  };

  return (
    <div>
      <div className="mb-[var(--spacing-6)]">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Users Management</h1>
          <Button leftIcon={<PlusIcon />}>Add User</Button>
        </div>
        <p className="text-[var(--text-secondary)]">
          Manage user accounts, roles and permissions.
        </p>
      </div>
      
      <Card className="mb-[var(--spacing-6)]">
        <Card.Body>
          <div className="flex flex-col md:flex-row gap-[var(--spacing-4)] mb-[var(--spacing-6)]">
            <div className="flex-1">
              <Input
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                leftIcon={<SearchIcon />}
                className="w-full"
              />
            </div>
            
            <div className="flex flex-wrap gap-[var(--spacing-2)]">
              <Select
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
                className="min-w-[150px]"
              >
                <option value="">All Roles</option>
                <option value="Admin">Admin</option>
                <option value="User">User</option>
                <option value="Editor">Editor</option>
              </Select>
              
              <Select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="min-w-[150px]"
              >
                <option value="">All Statuses</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Pending">Pending</option>
              </Select>
              
              {/* Using CogIcon instead of FilterIcon */}
              <Button variant="outline" leftIcon={<CogIcon />} onClick={resetFilters}>
                Reset Filters
              </Button>
            </div>
          </div>
          
          <Table variant="striped">
            <Table.Head>
              <Table.Row>
                <Table.Cell>Name</Table.Cell>
                <Table.Cell>Email</Table.Cell>
                <Table.Cell>Role</Table.Cell>
                <Table.Cell>Status</Table.Cell>
                <Table.Cell>Last Login</Table.Cell>
                <Table.Cell>Actions</Table.Cell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              {currentUsers.length > 0 ? (
                currentUsers.map(user => (
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
                    <Table.Cell>{user.lastLogin}</Table.Cell>
                    <Table.Cell>
                      <Dropdown 
                        trigger={
                          <Button variant="ghost" size="sm">
                            <DotsVerticalIcon />
                          </Button>
                        }
                      >
                        <Dropdown.Item icon={<UserIcon />}>View Profile</Dropdown.Item>
                        <Dropdown.Item icon={<CogIcon />}>Edit User</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item className="text-[var(--error-color)]">
                          Delete User
                        </Dropdown.Item>
                      </Dropdown>
                    </Table.Cell>
                  </Table.Row>
                ))
              ) : (
                <Table.Row>
                  <Table.Cell colSpan={6} className="text-center py-8">
                    No users found matching your filters.
                  </Table.Cell>
                </Table.Row>
              )}
            </Table.Body>
          </Table>
          
          {totalPages > 1 && (
            <div className="flex justify-between items-center mt-[var(--spacing-4)]">
              <div className="text-sm text-[var(--text-secondary)]">
                Showing {indexOfFirstUser + 1} to {Math.min(indexOfLastUser, filteredUsers.length)} of {filteredUsers.length} users
              </div>
              
              <div className="flex gap-1">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <Button
                    key={page}
                    variant={page === currentPage ? 'primary' : 'outline'}
                    size="sm"
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </Button>
                ))}
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </div>
            </div>
          )}
        </Card.Body>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <Card.Body>
            <div className="flex items-center">
              <div className="p-3 bg-[var(--success-color)] bg-opacity-10 rounded-full mr-4">
                <UserIcon className="text-[var(--success-color)]" />
              </div>
              <div>
                <h3 className="font-semibold">Active Users</h3>
                <p className="text-2xl font-bold">
                  {userData.filter(user => user.status === 'Active').length}
                </p>
              </div>
            </div>
          </Card.Body>
        </Card>
        
        <Card>
          <Card.Body>
            <div className="flex items-center">
              <div className="p-3 bg-[var(--error-color)] bg-opacity-10 rounded-full mr-4">
                <UserIcon className="text-[var(--error-color)]" />
              </div>
              <div>
                <h3 className="font-semibold">Inactive Users</h3>
                <p className="text-2xl font-bold">
                  {userData.filter(user => user.status === 'Inactive').length}
                </p>
              </div>
            </div>
          </Card.Body>
        </Card>
        
        <Card>
          <Card.Body>
            <div className="flex items-center">
              <div className="p-3 bg-[var(--warning-color)] bg-opacity-10 rounded-full mr-4">
                <UserIcon className="text-[var(--warning-color)]" />
              </div>
              <div>
                <h3 className="font-semibold">Pending Users</h3>
                <p className="text-2xl font-bold">
                  {userData.filter(user => user.status === 'Pending').length}
                </p>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Users;