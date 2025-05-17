/**
 * Users Page Component
 * 
 * User management page displaying a filterable data table with user information.
 * Demonstrates data filtering, pagination, and table actions.
 * 
 * @module examples/dashboard/pages/Users
 */

import React, { useState } from 'react';
import {
  Card,
  Button,
  Badge,
  Input,
  Select,
  DataTable,
  Avatar,
  Dropdown
} from '@voilajsx/uikit';
import {
  SearchIcon,
  FilterIcon,
  PlusIcon,
  DotsVerticalIcon
} from '@voilajsx/uikit/icons';

/**
 * Users page component for user management
 * 
 * @returns {JSX.Element} Users page component
 */
const Users = () => {
  // Sample users data
  const userData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', lastLogin: '2023-05-15', department: 'Engineering' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active', lastLogin: '2023-05-14', department: 'Marketing' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor', status: 'Inactive', lastLogin: '2023-05-10', department: 'Sales' },
    { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'User', status: 'Active', lastLogin: '2023-05-15', department: 'Engineering' },
    { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', role: 'User', status: 'Pending', lastLogin: null, department: 'HR' },
    { id: 6, name: 'Diana Prince', email: 'diana@example.com', role: 'Admin', status: 'Active', lastLogin: '2023-05-13', department: 'Management' },
    { id: 7, name: 'Edward Smith', email: 'edward@example.com', role: 'User', status: 'Inactive', lastLogin: '2023-04-28', department: 'Marketing' },
    { id: 8, name: 'Fiona Jones', email: 'fiona@example.com', role: 'Editor', status: 'Active', lastLogin: '2023-05-12', department: 'Design' },
    { id: 9, name: 'George Miller', email: 'george@example.com', role: 'User', status: 'Active', lastLogin: '2023-05-11', department: 'Engineering' },
    { id: 10, name: 'Hannah Davis', email: 'hannah@example.com', role: 'User', status: 'Pending', lastLogin: null, department: 'Sales' },
    { id: 11, name: 'Ian Wilson', email: 'ian@example.com', role: 'User', status: 'Inactive', lastLogin: '2023-04-15', department: 'HR' },
    { id: 12, name: 'Julia Roberts', email: 'julia@example.com', role: 'Editor', status: 'Active', lastLogin: '2023-05-14', department: 'Management' },
  ];

  // State for search and filters
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('');

  // Column definitions for DataTable
  const columns = [
    {
      key: 'name',
      header: 'Name',
      sortable: true,
      filterable: true,
      render: (row) => (
        <div className="flex items-center">
          <Avatar name={row.name} size="xs" className="mr-2" />
          {row.name}
        </div>
      )
    },
    {
      key: 'email',
      header: 'Email',
      sortable: true,
      filterable: true
    },
    {
      key: 'role',
      header: 'Role',
      sortable: true,
      filterable: true
    },
    {
      key: 'department',
      header: 'Department',
      sortable: true,
      filterable: true
    },
    {
      key: 'status',
      header: 'Status',
      sortable: true,
      filterable: true,
      render: (row) => (
        <Badge 
          variant={
            row.status === 'Active' ? 'success' : 
            row.status === 'Inactive' ? 'error' : 'warning'
          }
          size="sm"
        >
          {row.status}
        </Badge>
      )
    },
    {
      key: 'lastLogin',
      header: 'Last Login',
      sortable: true,
      render: (row) => row.lastLogin ? new Date(row.lastLogin).toLocaleDateString() : 'Never'
    },
    {
      key: 'actions',
      header: 'Actions',
      render: (row) => (
        <Dropdown
          trigger={
            <Button variant="ghost" size="sm">
              <DotsVerticalIcon />
            </Button>
          }
        >
          <Dropdown.Item onClick={() => handleViewUser(row)}>View</Dropdown.Item>
          <Dropdown.Item onClick={() => handleEditUser(row)}>Edit</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item 
            onClick={() => handleDeleteUser(row)}
            className="text-[var(--error-color)]"
          >
            Delete
          </Dropdown.Item>
        </Dropdown>
      )
    }
  ];

  // Filtered data based on search term and filters
  const getFilteredData = () => {
    return userData.filter(user => {
      // Apply search term filter
      const searchMatches = 
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Apply role filter
      const roleMatches = roleFilter ? user.role === roleFilter : true;
      
      // Apply status filter
      const statusMatches = statusFilter ? user.status === statusFilter : true;
      
      // Apply department filter
      const departmentMatches = departmentFilter ? user.department === departmentFilter : true;
      
      return searchMatches && roleMatches && statusMatches && departmentMatches;
    });
  };

  // Handler functions
  const handleViewUser = (user) => {
    console.log('Viewing user:', user);
    // In a real app, this would navigate to user details or open a modal
    alert(`Viewing ${user.name}`);
  };

  const handleEditUser = (user) => {
    console.log('Editing user:', user);
    // In a real app, this would navigate to edit form or open a modal
    alert(`Editing ${user.name}`);
  };

  const handleDeleteUser = (user) => {
    console.log('Deleting user:', user);
    // In a real app, this would show a confirmation dialog
    if (window.confirm(`Are you sure you want to delete ${user.name}?`)) {
      // Then perform deletion
      alert(`Deleted ${user.name}`);
    }
  };

  const handleAddUser = () => {
    console.log('Adding new user');
    // In a real app, this would navigate to create form or open a modal
    alert('Adding new user');
  };

  const handleRowClick = (row) => {
    console.log('Row clicked:', row);
    // In a real app, this might navigate to user details
  };
  
  return (
    <div className="space-y-[var(--spacing-6)]">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Users</h1>
        <Button 
          variant="primary" 
          leftIcon={<PlusIcon />}
          onClick={handleAddUser}
        >
          Add User
        </Button>
      </div>
      
      {/* Search and Filters */}
      <Card>
        <Card.Body className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search users..."
                leftIcon={<SearchIcon />}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Select
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
                className="w-full md:w-auto"
              >
                <option value="">All Roles</option>
                <option value="Admin">Admin</option>
                <option value="Editor">Editor</option>
                <option value="User">User</option>
              </Select>
              
              <Select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full md:w-auto"
              >
                <option value="">All Statuses</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Pending">Pending</option>
              </Select>
              
              <Select
                value={departmentFilter}
                onChange={(e) => setDepartmentFilter(e.target.value)}
                className="w-full md:w-auto"
              >
                <option value="">All Departments</option>
                <option value="Engineering">Engineering</option>
                <option value="Marketing">Marketing</option>
                <option value="Sales">Sales</option>
                <option value="HR">HR</option>
                <option value="Design">Design</option>
                <option value="Management">Management</option>
              </Select>
              
              <Button 
                variant="outline" 
                leftIcon={<FilterIcon />}
                className="w-full md:w-auto"
                onClick={() => {
                  setRoleFilter('');
                  setStatusFilter('');
                  setDepartmentFilter('');
                  setSearchTerm('');
                }}
              >
                Clear Filters
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
      
      {/* Users Table */}
      <Card>
        <Card.Body className="p-0">
          <DataTable
            data={getFilteredData()}
            columns={columns}
            keyField="id"
            pagination={true}
            pageSize={8}
            onRowClick={handleRowClick}
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default Users;