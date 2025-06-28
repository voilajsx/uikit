import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye, Edit, Trash2, UserCheck, UserX } from 'lucide-react';
import { DataTable } from '@/components/ui/data-table';

// Sample data
const sampleUsers = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Admin',
    status: 'Active',
    joinDate: '2024-01-15',
    lastLogin: '2024-06-20',
    projects: 12
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'Editor',
    status: 'Active',
    joinDate: '2024-02-20',
    lastLogin: '2024-06-19',
    projects: 8
  },
  {
    id: '3',
    name: 'Bob Johnson',
    email: 'bob@example.com',
    role: 'Viewer',
    status: 'Inactive',
    joinDate: '2023-12-10',
    lastLogin: '2024-06-15',
    projects: 3
  },
  {
    id: '4',
    name: 'Alice Wilson',
    email: 'alice@example.com',
    role: 'Editor',
    status: 'Active',
    joinDate: '2024-03-05',
    lastLogin: '2024-06-21',
    projects: 15
  },
  {
    id: '5',
    name: 'Charlie Brown',
    email: 'charlie@example.com',
    role: 'Admin',
    status: 'Pending',
    joinDate: '2024-06-01',
    lastLogin: '2024-06-18',
    projects: 1
  }
];

export default function DataTableDemo() {
  const [data, setData] = useState(sampleUsers);
  const [selectedRows, setSelectedRows] = useState([]);

  // Column definitions
  const columns = [
    {
      id: 'name',
      header: 'Name',
      accessorKey: 'name',
      sortable: true,
      filterable: true,
      filterType: 'text' as const,
      dataType: 'string' as const,
      cell: (value, row) => (
        <div className="font-medium text-foreground">{value}</div>
      )
    },
    {
      id: 'email',
      header: 'Email',
      accessorKey: 'email',
      sortable: true,
      filterable: true,
      filterType: 'text' as const,
      dataType: 'string' as const,
      cell: (value) => (
        <div className="text-muted-foreground">{value}</div>
      )
    },
    {
      id: 'role',
      header: 'Role',
      accessorKey: 'role',
      sortable: true,
      filterable: true,
      filterType: 'select' as const,
      filterOptions: [
        { label: 'Admin', value: 'Admin' },
        { label: 'Editor', value: 'Editor' },
        { label: 'Viewer', value: 'Viewer' }
      ],
      cell: (value) => {
        const colors = {
          Admin: 'bg-destructive text-destructive-foreground',
          Editor: 'bg-primary text-primary-foreground',
          Viewer: 'bg-secondary text-secondary-foreground'
        };
        return (
          <Badge className={colors[value] || 'bg-muted text-muted-foreground'}>
            {value}
          </Badge>
        );
      }
    },
    {
      id: 'status',
      header: 'Status',
      accessorKey: 'status',
      sortable: true,
      filterable: true,
      filterType: 'select' as const,
      filterOptions: [
        { label: 'Active', value: 'Active' },
        { label: 'Inactive', value: 'Inactive' },
        { label: 'Pending', value: 'Pending' }
      ],
      cell: (value) => {
        const colors = {
          Active: 'bg-accent text-accent-foreground',
          Inactive: 'bg-muted text-muted-foreground',
          Pending: 'bg-secondary text-secondary-foreground'
        };
        return (
          <Badge variant="outline" className={colors[value]}>
            {value}
          </Badge>
        );
      }
    },
    {
      id: 'projects',
      header: 'Projects',
      accessorKey: 'projects',
      sortable: true,
      filterable: true,
      filterType: 'number' as const,
      dataType: 'number' as const,
      cell: (value) => (
        <div className="text-center font-mono text-foreground">{value}</div>
      ),
      width: 100
    },
    {
      id: 'joinDate',
      header: 'Join Date',
      accessorKey: 'joinDate',
      sortable: true,
      dataType: 'date' as const,
      cell: (value) => (
        <div className="text-muted-foreground">
          {new Date(value).toLocaleDateString()}
        </div>
      )
    }
  ];

  // Row actions
  const actions = [
    {
      id: 'view',
      label: 'View Details',
      icon: Eye,
      onClick: (row) => {
        alert(`Viewing ${row.name}`);
      }
    },
    {
      id: 'edit',
      label: 'Edit User',
      icon: Edit,
      onClick: (row) => {
        alert(`Editing ${row.name}`);
      }
    },
    {
      id: 'delete',
      label: 'Delete User',
      icon: Trash2,
      variant: 'destructive' as const,
      onClick: (row) => {
        if (confirm(`Delete ${row.name}?`)) {
          setData(prev => prev.filter(item => item.id !== row.id));
        }
      }
    }
  ];

  // Bulk actions
  const bulkActions = [
    {
      id: 'activate',
      label: 'Activate Selected',
      icon: UserCheck,
      onClick: (selectedData) => {
        const ids = selectedData.map(row => row.id);
        setData(prev => prev.map(item => 
          ids.includes(item.id) ? { ...item, status: 'Active' } : item
        ));
        setSelectedRows([]);
        alert(`Activated ${selectedData.length} users`);
      }
    },
    {
      id: 'deactivate',
      label: 'Deactivate Selected',
      icon: UserX,
      variant: 'destructive' as const,
      onClick: (selectedData) => {
        const ids = selectedData.map(row => row.id);
        setData(prev => prev.map(item => 
          ids.includes(item.id) ? { ...item, status: 'Inactive' } : item
        ));
        setSelectedRows([]);
        alert(`Deactivated ${selectedData.length} users`);
      }
    }
  ];

  // Export handler
  const handleExport = (format, exportData) => {
    if (format === 'csv') {
      const csv = [
        // Headers
        columns.map(col => col.header).join(','),
        // Data rows
        ...exportData.map(row => 
          columns.map(col => row[col.accessorKey] || '').join(',')
        )
      ].join('\n');
      
      const blob = new Blob([csv], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'users.csv';
      a.click();
      URL.revokeObjectURL(url);
    } else if (format === 'json') {
      const json = JSON.stringify(exportData, null, 2);
      const blob = new Blob([json], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'users.json';
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-2">Enhanced DataTable Demo</h1>
          <p className="text-lg text-muted-foreground">
            Professional data table with sorting, filtering, search, pagination, and bulk actions
          </p>
        </div>

        {/* Basic DataTable */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground">User Management Table</CardTitle>
          </CardHeader>
          <CardContent>
            <DataTable
              data={data}
              columns={columns}
              
              // Selection
              selectable={true}
              selectionMode="multiple"
              selectedRows={selectedRows}
              onSelectionChange={setSelectedRows}
              getRowId={(row) => row.id}
              
              // Sorting & Filtering
              sortable={true}
              filterable={true}
              
              // Search
              searchable={true}
              searchPlaceholder="Search users..."
              
              // Pagination
              pagination={true}
              pageSize={3}
              
              // Actions
              actions={actions}
              bulkActions={bulkActions}
              
              // Export
              exportable={true}
              exportFormats={['csv', 'json']}
              onExport={handleExport}
              
              // Styling
              size="md"
              density="normal"
              striped={true}
              bordered={true}
              hoverable={true}
              
              className="w-full"
            />
          </CardContent>
        </Card>

        {/* Features Demo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-card border-border">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-2">🔍</div>
              <h3 className="font-semibold text-foreground mb-2">Smart Search</h3>
              <p className="text-sm text-muted-foreground">
                Global search across all visible columns with real-time filtering
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-2">⚡</div>
              <h3 className="font-semibold text-foreground mb-2">Bulk Actions</h3>
              <p className="text-sm text-muted-foreground">
                Select multiple rows and perform batch operations efficiently
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-2">📊</div>
              <h3 className="font-semibold text-foreground mb-2">Export Data</h3>
              <p className="text-sm text-muted-foreground">
                Export filtered data to CSV or JSON formats instantly
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Usage Notes */}
        <Card className="bg-muted/20 border-border">
          <CardContent className="p-6">
            <h3 className="font-semibold text-foreground mb-4">✨ Features Demonstrated:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div>
                <strong className="text-foreground">✅ Working:</strong>
                <ul className="mt-2 space-y-1 pl-4">
                  <li>• Multi-column sorting (click headers)</li>
                  <li>• Global search (try "john")</li>
                  <li>• Row selection & bulk actions</li>
                  <li>• Pagination with page size control</li>
                  <li>• Custom cell renderers (badges)</li>
                  <li>• Row actions dropdown</li>
                  <li>• CSV/JSON export</li>
                </ul>
              </div>
              <div>
                <strong className="text-foreground">⚠️ Note:</strong>
                <ul className="mt-2 space-y-1 pl-4">
                  <li>• Column filtering UI not implemented</li>
                  <li>• Virtual scrolling needs height prop</li>
                  <li>• Expandable rows need renderExpanded</li>
                  <li>• All data processing is client-side</li>
                  <li>• Semantic colors used throughout</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}