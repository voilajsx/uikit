
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function (React, ReactDOM, uikit, icons) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

  /**
   * Dashboard page component for the admin dashboard example
   * 
   * Displays key metrics, charts, and recent activity
   * @module examples/dashboard/pages/Dashboard
   */

  /**
   * Dashboard component for displaying metrics, charts and recent activity
   * 
   * @returns {JSX.Element} The rendered Dashboard component
   */
  var Dashboard = function Dashboard() {
    // Sample metrics data for KPI grid
    var metrics = [{
      title: 'Total Users',
      value: '12,345',
      icon: /*#__PURE__*/React__default["default"].createElement(icons.UserIcon, {
        size: "lg",
        className: "text-[var(--primary-color)]"
      }),
      trend: 'up',
      trendValue: '12%'
    }, {
      title: 'Revenue',
      value: '$34,567',
      icon: /*#__PURE__*/React__default["default"].createElement(icons.ChartBarIcon, {
        size: "lg",
        className: "text-[var(--success-color)]"
      }),
      trend: 'up',
      trendValue: '8.2%'
    }, {
      title: 'Conversion Rate',
      value: '3.2%',
      icon: /*#__PURE__*/React__default["default"].createElement(icons.CogIcon, {
        size: "lg",
        className: "text-[var(--warning-color)]"
      }),
      trend: 'down',
      trendValue: '0.5%'
    }, {
      title: 'Active Sessions',
      value: '1,234',
      icon: /*#__PURE__*/React__default["default"].createElement(icons.HomeIcon, {
        size: "lg",
        className: "text-[var(--info-color)]"
      }),
      trend: 'up',
      trendValue: '15%'
    }];

    // Sample data for the recent users table
    var recentUsers = [{
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Admin',
      status: 'Active'
    }, {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'User',
      status: 'Active'
    }, {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob@example.com',
      role: 'Editor',
      status: 'Inactive'
    }, {
      id: 4,
      name: 'Alice Williams',
      email: 'alice@example.com',
      role: 'User',
      status: 'Active'
    }, {
      id: 5,
      name: 'Charlie Brown',
      email: 'charlie@example.com',
      role: 'User',
      status: 'Pending'
    }];
    return /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "mb-[var(--spacing-6)]"
    }, /*#__PURE__*/React__default["default"].createElement("h1", {
      className: "text-2xl font-bold"
    }, "Dashboard Overview"), /*#__PURE__*/React__default["default"].createElement("p", {
      className: "text-[var(--text-secondary)]"
    }, "Welcome back! Here's what's happening with your platform today.")), /*#__PURE__*/React__default["default"].createElement(uikit.KpiGrid, {
      metrics: metrics,
      columns: 4,
      className: "mb-[var(--spacing-6)]"
    }), /*#__PURE__*/React__default["default"].createElement(uikit.Tabs, {
      className: "mb-[var(--spacing-6)]"
    }, /*#__PURE__*/React__default["default"].createElement(uikit.Tabs.List, null, /*#__PURE__*/React__default["default"].createElement(uikit.Tabs.Tab, null, "Overview"), /*#__PURE__*/React__default["default"].createElement(uikit.Tabs.Tab, null, "Performance"), /*#__PURE__*/React__default["default"].createElement(uikit.Tabs.Tab, null, "Analytics")), /*#__PURE__*/React__default["default"].createElement(uikit.Tabs.Panels, null, /*#__PURE__*/React__default["default"].createElement(uikit.Tabs.Panel, null, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "grid grid-cols-1 lg:grid-cols-2 gap-[var(--spacing-6)] mt-[var(--spacing-6)]"
    }, /*#__PURE__*/React__default["default"].createElement(uikit.Card, null, /*#__PURE__*/React__default["default"].createElement(uikit.Card.Header, null, "User Growth"), /*#__PURE__*/React__default["default"].createElement(uikit.Card.Body, null, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "h-[300px] flex items-center justify-center bg-[var(--bg-subtle)]"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "text-center"
    }, /*#__PURE__*/React__default["default"].createElement(icons.ChartBarIcon, {
      size: "lg",
      className: "text-[var(--text-secondary)] mb-2"
    }), /*#__PURE__*/React__default["default"].createElement("p", null, "User Growth Chart"), /*#__PURE__*/React__default["default"].createElement("p", {
      className: "text-sm text-[var(--text-secondary)]"
    }, "(Chart component would render here in the actual implementation)"))))), /*#__PURE__*/React__default["default"].createElement(uikit.Card, null, /*#__PURE__*/React__default["default"].createElement(uikit.Card.Header, null, "Revenue Breakdown"), /*#__PURE__*/React__default["default"].createElement(uikit.Card.Body, null, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "h-[300px] flex items-center justify-center bg-[var(--bg-subtle)]"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "text-center"
    }, /*#__PURE__*/React__default["default"].createElement(icons.ChartBarIcon, {
      size: "lg",
      className: "text-[var(--text-secondary)] mb-2"
    }), /*#__PURE__*/React__default["default"].createElement("p", null, "Revenue Breakdown Chart"), /*#__PURE__*/React__default["default"].createElement("p", {
      className: "text-sm text-[var(--text-secondary)]"
    }, "(Chart component would render here in the actual implementation)"))))))), /*#__PURE__*/React__default["default"].createElement(uikit.Tabs.Panel, null, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "p-[var(--spacing-4)] mt-[var(--spacing-4)]"
    }, /*#__PURE__*/React__default["default"].createElement(uikit.Card, null, /*#__PURE__*/React__default["default"].createElement(uikit.Card.Header, null, "Performance Metrics"), /*#__PURE__*/React__default["default"].createElement(uikit.Card.Body, null, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "space-y-4"
    }, /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "flex justify-between mb-1"
    }, /*#__PURE__*/React__default["default"].createElement("span", null, "Conversion Rate"), /*#__PURE__*/React__default["default"].createElement("span", null, "3.2%")), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "w-full bg-[var(--bg-subtle)] rounded-full h-2"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "bg-[var(--primary-color)] h-2 rounded-full",
      style: {
        width: '32%'
      }
    }))), /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "flex justify-between mb-1"
    }, /*#__PURE__*/React__default["default"].createElement("span", null, "Bounce Rate"), /*#__PURE__*/React__default["default"].createElement("span", null, "42%")), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "w-full bg-[var(--bg-subtle)] rounded-full h-2"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "bg-[var(--warning-color)] h-2 rounded-full",
      style: {
        width: '42%'
      }
    }))), /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "flex justify-between mb-1"
    }, /*#__PURE__*/React__default["default"].createElement("span", null, "Growth Rate"), /*#__PURE__*/React__default["default"].createElement("span", null, "8.7%")), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "w-full bg-[var(--bg-subtle)] rounded-full h-2"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "bg-[var(--success-color)] h-2 rounded-full",
      style: {
        width: '87%'
      }
    })))))))), /*#__PURE__*/React__default["default"].createElement(uikit.Tabs.Panel, null, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "p-[var(--spacing-4)] mt-[var(--spacing-4)]"
    }, /*#__PURE__*/React__default["default"].createElement(uikit.Card, null, /*#__PURE__*/React__default["default"].createElement(uikit.Card.Header, null, "Traffic Sources"), /*#__PURE__*/React__default["default"].createElement(uikit.Card.Body, null, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "h-[300px] flex items-center justify-center bg-[var(--bg-subtle)]"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "text-center"
    }, /*#__PURE__*/React__default["default"].createElement(icons.ChartBarIcon, {
      size: "lg",
      className: "text-[var(--text-secondary)] mb-2"
    }), /*#__PURE__*/React__default["default"].createElement("p", null, "Traffic Sources Chart"), /*#__PURE__*/React__default["default"].createElement("p", {
      className: "text-sm text-[var(--text-secondary)]"
    }, "(Chart component would render here in the actual implementation)"))))))))), /*#__PURE__*/React__default["default"].createElement(uikit.Card, {
      className: "mb-[var(--spacing-6)]"
    }, /*#__PURE__*/React__default["default"].createElement(uikit.Card.Header, {
      className: "flex justify-between items-center"
    }, /*#__PURE__*/React__default["default"].createElement("div", null, "Recent Users"), /*#__PURE__*/React__default["default"].createElement(uikit.Button, {
      variant: "ghost",
      size: "sm"
    }, "View All")), /*#__PURE__*/React__default["default"].createElement(uikit.Card.Body, {
      className: "p-0"
    }, /*#__PURE__*/React__default["default"].createElement(uikit.Table, {
      variant: "striped"
    }, /*#__PURE__*/React__default["default"].createElement(uikit.Table.Head, null, /*#__PURE__*/React__default["default"].createElement(uikit.Table.Row, null, /*#__PURE__*/React__default["default"].createElement(uikit.Table.Cell, null, "Name"), /*#__PURE__*/React__default["default"].createElement(uikit.Table.Cell, null, "Email"), /*#__PURE__*/React__default["default"].createElement(uikit.Table.Cell, null, "Role"), /*#__PURE__*/React__default["default"].createElement(uikit.Table.Cell, null, "Status"), /*#__PURE__*/React__default["default"].createElement(uikit.Table.Cell, null, "Actions"))), /*#__PURE__*/React__default["default"].createElement(uikit.Table.Body, null, recentUsers.map(function (user) {
      return /*#__PURE__*/React__default["default"].createElement(uikit.Table.Row, {
        key: user.id
      }, /*#__PURE__*/React__default["default"].createElement(uikit.Table.Cell, null, /*#__PURE__*/React__default["default"].createElement("div", {
        className: "flex items-center"
      }, /*#__PURE__*/React__default["default"].createElement(uikit.Avatar, {
        name: user.name,
        size: "xs",
        className: "mr-2"
      }), user.name)), /*#__PURE__*/React__default["default"].createElement(uikit.Table.Cell, null, user.email), /*#__PURE__*/React__default["default"].createElement(uikit.Table.Cell, null, user.role), /*#__PURE__*/React__default["default"].createElement(uikit.Table.Cell, null, /*#__PURE__*/React__default["default"].createElement(uikit.Badge, {
        variant: user.status === 'Active' ? 'success' : user.status === 'Inactive' ? 'error' : 'warning'
      }, user.status)), /*#__PURE__*/React__default["default"].createElement(uikit.Table.Cell, null, /*#__PURE__*/React__default["default"].createElement("div", {
        className: "flex space-x-1"
      }, /*#__PURE__*/React__default["default"].createElement(uikit.Button, {
        variant: "ghost",
        size: "xs"
      }, "Edit"), /*#__PURE__*/React__default["default"].createElement(uikit.Button, {
        variant: "ghost",
        size: "xs"
      }, "View"))));
    }))))), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "grid grid-cols-1 md:grid-cols-3 gap-4"
    }, /*#__PURE__*/React__default["default"].createElement(uikit.Card, null, /*#__PURE__*/React__default["default"].createElement(uikit.Card.Body, null, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "flex items-center"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "p-3 bg-[var(--primary-color)] bg-opacity-10 rounded-full mr-4"
    }, /*#__PURE__*/React__default["default"].createElement(icons.UserIcon, {
      className: "text-[var(--primary-color)]"
    })), /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("h3", {
      className: "font-semibold"
    }, "User Management"), /*#__PURE__*/React__default["default"].createElement("p", {
      className: "text-sm text-[var(--text-secondary)] mb-4"
    }, "Add or modify user accounts"), /*#__PURE__*/React__default["default"].createElement(uikit.Button, {
      size: "sm",
      leftIcon: /*#__PURE__*/React__default["default"].createElement(icons.UserIcon, null)
    }, "Manage Users"))))), /*#__PURE__*/React__default["default"].createElement(uikit.Card, null, /*#__PURE__*/React__default["default"].createElement(uikit.Card.Body, null, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "flex items-center"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "p-3 bg-[var(--success-color)] bg-opacity-10 rounded-full mr-4"
    }, /*#__PURE__*/React__default["default"].createElement(icons.CogIcon, {
      className: "text-[var(--success-color)]"
    })), /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("h3", {
      className: "font-semibold"
    }, "System Settings"), /*#__PURE__*/React__default["default"].createElement("p", {
      className: "text-sm text-[var(--text-secondary)] mb-4"
    }, "Configure system preferences"), /*#__PURE__*/React__default["default"].createElement(uikit.Button, {
      size: "sm",
      variant: "outline",
      leftIcon: /*#__PURE__*/React__default["default"].createElement(icons.CogIcon, null)
    }, "Settings"))))), /*#__PURE__*/React__default["default"].createElement(uikit.Card, null, /*#__PURE__*/React__default["default"].createElement(uikit.Card.Body, null, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "flex items-center"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "p-3 bg-[var(--info-color)] bg-opacity-10 rounded-full mr-4"
    }, /*#__PURE__*/React__default["default"].createElement(icons.HomeIcon, {
      className: "text-[var(--info-color)]"
    })), /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("h3", {
      className: "font-semibold"
    }, "Site Overview"), /*#__PURE__*/React__default["default"].createElement("p", {
      className: "text-sm text-[var(--text-secondary)] mb-4"
    }, "View site performance"), /*#__PURE__*/React__default["default"].createElement(uikit.Button, {
      size: "sm",
      variant: "ghost",
      leftIcon: /*#__PURE__*/React__default["default"].createElement(icons.HomeIcon, null)
    }, "View Site")))))));
  };
  var Dashboard$1 = Dashboard;

  /**
   * Users management page component for the dashboard example
   * 
   * Displays user data with filtering, searching and actions
   * @module examples/dashboard/pages/Users
   */

  /**
   * Users component for user management interface
   * 
   * @returns {JSX.Element} The rendered Users component
   */
  var Users = function Users() {
    // Sample user data
    var _useState = React.useState([{
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        role: 'Admin',
        status: 'Active',
        lastLogin: '2023-05-01'
      }, {
        id: 2,
        name: 'Jane Smith',
        email: 'jane@example.com',
        role: 'User',
        status: 'Active',
        lastLogin: '2023-05-02'
      }, {
        id: 3,
        name: 'Bob Johnson',
        email: 'bob@example.com',
        role: 'Editor',
        status: 'Inactive',
        lastLogin: '2023-04-28'
      }, {
        id: 4,
        name: 'Alice Williams',
        email: 'alice@example.com',
        role: 'User',
        status: 'Active',
        lastLogin: '2023-05-03'
      }, {
        id: 5,
        name: 'Charlie Brown',
        email: 'charlie@example.com',
        role: 'User',
        status: 'Pending',
        lastLogin: '2023-04-30'
      }, {
        id: 6,
        name: 'Diana Smith',
        email: 'diana@example.com',
        role: 'Admin',
        status: 'Active',
        lastLogin: '2023-05-01'
      }, {
        id: 7,
        name: 'Edward Jones',
        email: 'edward@example.com',
        role: 'User',
        status: 'Inactive',
        lastLogin: '2023-04-15'
      }, {
        id: 8,
        name: 'Fiona Miller',
        email: 'fiona@example.com',
        role: 'Editor',
        status: 'Active',
        lastLogin: '2023-05-02'
      }, {
        id: 9,
        name: 'George Wilson',
        email: 'george@example.com',
        role: 'User',
        status: 'Pending',
        lastLogin: '2023-04-22'
      }, {
        id: 10,
        name: 'Hannah Taylor',
        email: 'hannah@example.com',
        role: 'User',
        status: 'Active',
        lastLogin: '2023-05-03'
      }]),
      userData = _useState[0];

    // State for filter and search
    var _useState2 = React.useState(''),
      searchTerm = _useState2[0],
      setSearchTerm = _useState2[1];
    var _useState3 = React.useState(''),
      roleFilter = _useState3[0],
      setRoleFilter = _useState3[1];
    var _useState4 = React.useState(''),
      statusFilter = _useState4[0],
      setStatusFilter = _useState4[1];

    // Pagination state
    var _useState5 = React.useState(1),
      currentPage = _useState5[0],
      setCurrentPage = _useState5[1];
    var itemsPerPage = 5;

    // Filter users based on search and filters
    var filteredUsers = userData.filter(function (user) {
      var matchesSearch = searchTerm === '' || user.name.toLowerCase().includes(searchTerm.toLowerCase()) || user.email.toLowerCase().includes(searchTerm.toLowerCase());
      var matchesRole = roleFilter === '' || user.role === roleFilter;
      var matchesStatus = statusFilter === '' || user.status === statusFilter;
      return matchesSearch && matchesRole && matchesStatus;
    });

    // Get current users for pagination
    var indexOfLastUser = currentPage * itemsPerPage;
    var indexOfFirstUser = indexOfLastUser - itemsPerPage;
    var currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

    // Calculate total pages
    var totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

    // Handle page change
    var handlePageChange = function handlePageChange(page) {
      setCurrentPage(page);
    };

    // Reset filters
    var resetFilters = function resetFilters() {
      setSearchTerm('');
      setRoleFilter('');
      setStatusFilter('');
      setCurrentPage(1);
    };
    return /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "mb-[var(--spacing-6)]"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "flex justify-between items-center"
    }, /*#__PURE__*/React__default["default"].createElement("h1", {
      className: "text-2xl font-bold"
    }, "Users Management"), /*#__PURE__*/React__default["default"].createElement(uikit.Button, {
      leftIcon: /*#__PURE__*/React__default["default"].createElement(icons.PlusIcon, null)
    }, "Add User")), /*#__PURE__*/React__default["default"].createElement("p", {
      className: "text-[var(--text-secondary)]"
    }, "Manage user accounts, roles and permissions.")), /*#__PURE__*/React__default["default"].createElement(uikit.Card, {
      className: "mb-[var(--spacing-6)]"
    }, /*#__PURE__*/React__default["default"].createElement(uikit.Card.Body, null, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "flex flex-col md:flex-row gap-[var(--spacing-4)] mb-[var(--spacing-6)]"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "flex-1"
    }, /*#__PURE__*/React__default["default"].createElement(uikit.Input, {
      placeholder: "Search users...",
      value: searchTerm,
      onChange: function onChange(e) {
        return setSearchTerm(e.target.value);
      },
      leftIcon: /*#__PURE__*/React__default["default"].createElement(icons.SearchIcon, null),
      className: "w-full"
    })), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "flex flex-wrap gap-[var(--spacing-2)]"
    }, /*#__PURE__*/React__default["default"].createElement(uikit.Select, {
      value: roleFilter,
      onChange: function onChange(e) {
        return setRoleFilter(e.target.value);
      },
      className: "min-w-[150px]"
    }, /*#__PURE__*/React__default["default"].createElement("option", {
      value: ""
    }, "All Roles"), /*#__PURE__*/React__default["default"].createElement("option", {
      value: "Admin"
    }, "Admin"), /*#__PURE__*/React__default["default"].createElement("option", {
      value: "User"
    }, "User"), /*#__PURE__*/React__default["default"].createElement("option", {
      value: "Editor"
    }, "Editor")), /*#__PURE__*/React__default["default"].createElement(uikit.Select, {
      value: statusFilter,
      onChange: function onChange(e) {
        return setStatusFilter(e.target.value);
      },
      className: "min-w-[150px]"
    }, /*#__PURE__*/React__default["default"].createElement("option", {
      value: ""
    }, "All Statuses"), /*#__PURE__*/React__default["default"].createElement("option", {
      value: "Active"
    }, "Active"), /*#__PURE__*/React__default["default"].createElement("option", {
      value: "Inactive"
    }, "Inactive"), /*#__PURE__*/React__default["default"].createElement("option", {
      value: "Pending"
    }, "Pending")), /*#__PURE__*/React__default["default"].createElement(uikit.Button, {
      variant: "outline",
      leftIcon: /*#__PURE__*/React__default["default"].createElement(icons.CogIcon, null),
      onClick: resetFilters
    }, "Reset Filters"))), /*#__PURE__*/React__default["default"].createElement(uikit.Table, {
      variant: "striped"
    }, /*#__PURE__*/React__default["default"].createElement(uikit.Table.Head, null, /*#__PURE__*/React__default["default"].createElement(uikit.Table.Row, null, /*#__PURE__*/React__default["default"].createElement(uikit.Table.Cell, null, "Name"), /*#__PURE__*/React__default["default"].createElement(uikit.Table.Cell, null, "Email"), /*#__PURE__*/React__default["default"].createElement(uikit.Table.Cell, null, "Role"), /*#__PURE__*/React__default["default"].createElement(uikit.Table.Cell, null, "Status"), /*#__PURE__*/React__default["default"].createElement(uikit.Table.Cell, null, "Last Login"), /*#__PURE__*/React__default["default"].createElement(uikit.Table.Cell, null, "Actions"))), /*#__PURE__*/React__default["default"].createElement(uikit.Table.Body, null, currentUsers.length > 0 ? currentUsers.map(function (user) {
      return /*#__PURE__*/React__default["default"].createElement(uikit.Table.Row, {
        key: user.id
      }, /*#__PURE__*/React__default["default"].createElement(uikit.Table.Cell, null, /*#__PURE__*/React__default["default"].createElement("div", {
        className: "flex items-center"
      }, /*#__PURE__*/React__default["default"].createElement(uikit.Avatar, {
        name: user.name,
        size: "xs",
        className: "mr-2"
      }), user.name)), /*#__PURE__*/React__default["default"].createElement(uikit.Table.Cell, null, user.email), /*#__PURE__*/React__default["default"].createElement(uikit.Table.Cell, null, user.role), /*#__PURE__*/React__default["default"].createElement(uikit.Table.Cell, null, /*#__PURE__*/React__default["default"].createElement(uikit.Badge, {
        variant: user.status === 'Active' ? 'success' : user.status === 'Inactive' ? 'error' : 'warning'
      }, user.status)), /*#__PURE__*/React__default["default"].createElement(uikit.Table.Cell, null, user.lastLogin), /*#__PURE__*/React__default["default"].createElement(uikit.Table.Cell, null, /*#__PURE__*/React__default["default"].createElement(uikit.Dropdown, {
        trigger: /*#__PURE__*/React__default["default"].createElement(uikit.Button, {
          variant: "ghost",
          size: "sm"
        }, /*#__PURE__*/React__default["default"].createElement(icons.DotsVerticalIcon, null))
      }, /*#__PURE__*/React__default["default"].createElement(uikit.Dropdown.Item, {
        icon: /*#__PURE__*/React__default["default"].createElement(icons.UserIcon, null)
      }, "View Profile"), /*#__PURE__*/React__default["default"].createElement(uikit.Dropdown.Item, {
        icon: /*#__PURE__*/React__default["default"].createElement(icons.CogIcon, null)
      }, "Edit User"), /*#__PURE__*/React__default["default"].createElement(uikit.Dropdown.Divider, null), /*#__PURE__*/React__default["default"].createElement(uikit.Dropdown.Item, {
        className: "text-[var(--error-color)]"
      }, "Delete User"))));
    }) : /*#__PURE__*/React__default["default"].createElement(uikit.Table.Row, null, /*#__PURE__*/React__default["default"].createElement(uikit.Table.Cell, {
      colSpan: 6,
      className: "text-center py-8"
    }, "No users found matching your filters.")))), totalPages > 1 && /*#__PURE__*/React__default["default"].createElement("div", {
      className: "flex justify-between items-center mt-[var(--spacing-4)]"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "text-sm text-[var(--text-secondary)]"
    }, "Showing ", indexOfFirstUser + 1, " to ", Math.min(indexOfLastUser, filteredUsers.length), " of ", filteredUsers.length, " users"), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "flex gap-1"
    }, /*#__PURE__*/React__default["default"].createElement(uikit.Button, {
      variant: "outline",
      size: "sm",
      onClick: function onClick() {
        return handlePageChange(currentPage - 1);
      },
      disabled: currentPage === 1
    }, "Previous"), Array.from({
      length: totalPages
    }, function (_, i) {
      return i + 1;
    }).map(function (page) {
      return /*#__PURE__*/React__default["default"].createElement(uikit.Button, {
        key: page,
        variant: page === currentPage ? 'primary' : 'outline',
        size: "sm",
        onClick: function onClick() {
          return handlePageChange(page);
        }
      }, page);
    }), /*#__PURE__*/React__default["default"].createElement(uikit.Button, {
      variant: "outline",
      size: "sm",
      onClick: function onClick() {
        return handlePageChange(currentPage + 1);
      },
      disabled: currentPage === totalPages
    }, "Next"))))), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "grid grid-cols-1 md:grid-cols-3 gap-4"
    }, /*#__PURE__*/React__default["default"].createElement(uikit.Card, null, /*#__PURE__*/React__default["default"].createElement(uikit.Card.Body, null, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "flex items-center"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "p-3 bg-[var(--success-color)] bg-opacity-10 rounded-full mr-4"
    }, /*#__PURE__*/React__default["default"].createElement(icons.UserIcon, {
      className: "text-[var(--success-color)]"
    })), /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("h3", {
      className: "font-semibold"
    }, "Active Users"), /*#__PURE__*/React__default["default"].createElement("p", {
      className: "text-2xl font-bold"
    }, userData.filter(function (user) {
      return user.status === 'Active';
    }).length))))), /*#__PURE__*/React__default["default"].createElement(uikit.Card, null, /*#__PURE__*/React__default["default"].createElement(uikit.Card.Body, null, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "flex items-center"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "p-3 bg-[var(--error-color)] bg-opacity-10 rounded-full mr-4"
    }, /*#__PURE__*/React__default["default"].createElement(icons.UserIcon, {
      className: "text-[var(--error-color)]"
    })), /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("h3", {
      className: "font-semibold"
    }, "Inactive Users"), /*#__PURE__*/React__default["default"].createElement("p", {
      className: "text-2xl font-bold"
    }, userData.filter(function (user) {
      return user.status === 'Inactive';
    }).length))))), /*#__PURE__*/React__default["default"].createElement(uikit.Card, null, /*#__PURE__*/React__default["default"].createElement(uikit.Card.Body, null, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "flex items-center"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "p-3 bg-[var(--warning-color)] bg-opacity-10 rounded-full mr-4"
    }, /*#__PURE__*/React__default["default"].createElement(icons.UserIcon, {
      className: "text-[var(--warning-color)]"
    })), /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("h3", {
      className: "font-semibold"
    }, "Pending Users"), /*#__PURE__*/React__default["default"].createElement("p", {
      className: "text-2xl font-bold"
    }, userData.filter(function (user) {
      return user.status === 'Pending';
    }).length)))))));
  };
  var Users$1 = Users;

  function _extends() {
    return _extends = Object.assign ? Object.assign.bind() : function (n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
      }
      return n;
    }, _extends.apply(null, arguments);
  }

  /**
   * Settings page component with multiple settings sections
   * 
   * @returns {JSX.Element} Settings page component
   */
  var Settings = function Settings() {
    // Profile settings state
    var _useState = React.useState({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        phone: '+1 (555) 123-4567',
        bio: 'Product manager with over 5 years of experience in SaaS companies.',
        avatarUrl: ''
      }),
      profileSettings = _useState[0],
      setProfileSettings = _useState[1];

    // Account settings state
    var _useState2 = React.useState({
        username: 'johndoe',
        language: 'en',
        timezone: 'America/New_York'
      }),
      accountSettings = _useState2[0],
      setAccountSettings = _useState2[1];

    // Notification settings state
    var _useState3 = React.useState({
        emailNotifications: true,
        pushNotifications: false,
        marketingEmails: true,
        weeklyDigest: true,
        productUpdates: true,
        securityAlerts: true
      }),
      notificationSettings = _useState3[0],
      setNotificationSettings = _useState3[1];

    // Privacy settings state
    var _useState4 = React.useState({
        profileVisibility: 'public',
        allowDataCollection: true,
        showActivityStatus: true
      }),
      privacySettings = _useState4[0],
      setPrivSettingsState = _useState4[1];

    // Theme settings state
    var _useState5 = React.useState({
        colorScheme: 'system',
        fontSize: 'medium',
        reducedMotion: false,
        highContrast: false
      }),
      themeSettings = _useState5[0],
      setThemeSettings = _useState5[1];

    // Form submission handlers
    var handleProfileSubmit = function handleProfileSubmit(e) {
      e.preventDefault();
      console.log('Profile settings saved:', profileSettings);
      alert('Profile settings saved successfully!');
    };
    var handleAccountSubmit = function handleAccountSubmit(e) {
      e.preventDefault();
      console.log('Account settings saved:', accountSettings);
      alert('Account settings saved successfully!');
    };
    var handleNotificationSubmit = function handleNotificationSubmit(e) {
      e.preventDefault();
      console.log('Notification settings saved:', notificationSettings);
      alert('Notification settings saved successfully!');
    };
    var handlePrivacySubmit = function handlePrivacySubmit(e) {
      e.preventDefault();
      console.log('Privacy settings saved:', privacySettings);
      alert('Privacy settings saved successfully!');
    };
    var handleThemeSubmit = function handleThemeSubmit(e) {
      e.preventDefault();
      console.log('Theme settings saved:', themeSettings);
      alert('Theme settings saved successfully!');
    };

    // Form change handlers
    var handleProfileChange = function handleProfileChange(e) {
      var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value;
      setProfileSettings(function (prev) {
        var _extends2;
        return _extends({}, prev, (_extends2 = {}, _extends2[name] = value, _extends2));
      });
    };
    var handleAccountChange = function handleAccountChange(e) {
      var _e$target2 = e.target,
        name = _e$target2.name,
        value = _e$target2.value;
      setAccountSettings(function (prev) {
        var _extends3;
        return _extends({}, prev, (_extends3 = {}, _extends3[name] = value, _extends3));
      });
    };
    var handleNotificationChange = function handleNotificationChange(e) {
      var _e$target3 = e.target,
        name = _e$target3.name,
        checked = _e$target3.checked;
      setNotificationSettings(function (prev) {
        var _extends4;
        return _extends({}, prev, (_extends4 = {}, _extends4[name] = checked, _extends4));
      });
    };
    var handlePrivacyChange = function handlePrivacyChange(e) {
      var _e$target4 = e.target,
        name = _e$target4.name,
        value = _e$target4.value,
        type = _e$target4.type,
        checked = _e$target4.checked;
      setPrivSettingsState(function (prev) {
        var _extends5;
        return _extends({}, prev, (_extends5 = {}, _extends5[name] = type === 'checkbox' ? checked : value, _extends5));
      });
    };
    var handleThemeChange = function handleThemeChange(e) {
      var _e$target5 = e.target,
        name = _e$target5.name,
        value = _e$target5.value,
        type = _e$target5.type,
        checked = _e$target5.checked;
      setThemeSettings(function (prev) {
        var _extends6;
        return _extends({}, prev, (_extends6 = {}, _extends6[name] = type === 'checkbox' ? checked : value, _extends6));
      });
    };
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: "space-y-[var(--spacing-6)]"
    }, /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("h1", {
      className: "text-2xl font-bold"
    }, "Settings"), /*#__PURE__*/React__default["default"].createElement("p", {
      className: "text-[var(--text-secondary)]"
    }, "Manage your account settings and preferences")), /*#__PURE__*/React__default["default"].createElement(uikit.Tabs, null, /*#__PURE__*/React__default["default"].createElement(uikit.Tabs.List, null, /*#__PURE__*/React__default["default"].createElement(uikit.Tabs.Tab, null, "Profile"), /*#__PURE__*/React__default["default"].createElement(uikit.Tabs.Tab, null, "Account"), /*#__PURE__*/React__default["default"].createElement(uikit.Tabs.Tab, null, "Notifications"), /*#__PURE__*/React__default["default"].createElement(uikit.Tabs.Tab, null, "Privacy"), /*#__PURE__*/React__default["default"].createElement(uikit.Tabs.Tab, null, "Appearance")), /*#__PURE__*/React__default["default"].createElement(uikit.Tabs.Panels, null, /*#__PURE__*/React__default["default"].createElement(uikit.Tabs.Panel, null, /*#__PURE__*/React__default["default"].createElement(uikit.Card, {
      className: "mt-[var(--spacing-4)]"
    }, /*#__PURE__*/React__default["default"].createElement(uikit.Card.Header, null, "Profile Information"), /*#__PURE__*/React__default["default"].createElement(uikit.Card.Body, null, /*#__PURE__*/React__default["default"].createElement("form", {
      onSubmit: handleProfileSubmit,
      className: "space-y-[var(--spacing-4)]"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "flex flex-col md:flex-row gap-[var(--spacing-4)] items-center mb-[var(--spacing-4)]"
    }, /*#__PURE__*/React__default["default"].createElement(uikit.Avatar, {
      name: profileSettings.firstName + " " + profileSettings.lastName,
      size: "xl"
    }), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "flex-1"
    }, /*#__PURE__*/React__default["default"].createElement("h3", {
      className: "font-medium mb-[var(--spacing-2)]"
    }, "Profile Picture"), /*#__PURE__*/React__default["default"].createElement("p", {
      className: "text-[var(--text-secondary)] mb-[var(--spacing-2)]"
    }, "Upload a new picture or update your profile information."), /*#__PURE__*/React__default["default"].createElement(uikit.Input, {
      type: "file",
      accept: "image/*",
      className: "mt-[var(--spacing-2)]"
    }))), /*#__PURE__*/React__default["default"].createElement(uikit.Divider, null), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-4)]"
    }, /*#__PURE__*/React__default["default"].createElement(uikit.FormGroup, null, /*#__PURE__*/React__default["default"].createElement(uikit.FormLabel, {
      htmlFor: "firstName",
      required: true
    }, "First Name"), /*#__PURE__*/React__default["default"].createElement(uikit.Input, {
      id: "firstName",
      name: "firstName",
      value: profileSettings.firstName,
      onChange: handleProfileChange,
      required: true
    })), /*#__PURE__*/React__default["default"].createElement(uikit.FormGroup, null, /*#__PURE__*/React__default["default"].createElement(uikit.FormLabel, {
      htmlFor: "lastName",
      required: true
    }, "Last Name"), /*#__PURE__*/React__default["default"].createElement(uikit.Input, {
      id: "lastName",
      name: "lastName",
      value: profileSettings.lastName,
      onChange: handleProfileChange,
      required: true
    }))), /*#__PURE__*/React__default["default"].createElement(uikit.FormGroup, null, /*#__PURE__*/React__default["default"].createElement(uikit.FormLabel, {
      htmlFor: "email",
      required: true
    }, "Email Address"), /*#__PURE__*/React__default["default"].createElement(uikit.Input, {
      id: "email",
      name: "email",
      type: "email",
      value: profileSettings.email,
      onChange: handleProfileChange,
      required: true
    }), /*#__PURE__*/React__default["default"].createElement(uikit.FormHelperText, null, "This email is used for notifications and account recovery.")), /*#__PURE__*/React__default["default"].createElement(uikit.FormGroup, null, /*#__PURE__*/React__default["default"].createElement(uikit.FormLabel, {
      htmlFor: "phone"
    }, "Phone Number"), /*#__PURE__*/React__default["default"].createElement(uikit.Input, {
      id: "phone",
      name: "phone",
      type: "tel",
      value: profileSettings.phone,
      onChange: handleProfileChange
    })), /*#__PURE__*/React__default["default"].createElement(uikit.FormGroup, null, /*#__PURE__*/React__default["default"].createElement(uikit.FormLabel, {
      htmlFor: "bio"
    }, "Bio"), /*#__PURE__*/React__default["default"].createElement(uikit.Textarea, {
      id: "bio",
      name: "bio",
      value: profileSettings.bio,
      onChange: handleProfileChange,
      rows: 4
    }), /*#__PURE__*/React__default["default"].createElement(uikit.FormHelperText, null, "Write a short bio about yourself. This will be visible on your profile.")), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "flex justify-end space-x-[var(--spacing-2)]"
    }, /*#__PURE__*/React__default["default"].createElement(uikit.Button, {
      type: "button",
      variant: "outline"
    }, "Cancel"), /*#__PURE__*/React__default["default"].createElement(uikit.Button, {
      type: "submit",
      variant: "primary"
    }, "Save Changes")))))), /*#__PURE__*/React__default["default"].createElement(uikit.Tabs.Panel, null, /*#__PURE__*/React__default["default"].createElement(uikit.Card, {
      className: "mt-[var(--spacing-4)]"
    }, /*#__PURE__*/React__default["default"].createElement(uikit.Card.Header, null, "Account Settings"), /*#__PURE__*/React__default["default"].createElement(uikit.Card.Body, null, /*#__PURE__*/React__default["default"].createElement("form", {
      onSubmit: handleAccountSubmit,
      className: "space-y-[var(--spacing-4)]"
    }, /*#__PURE__*/React__default["default"].createElement(uikit.FormGroup, null, /*#__PURE__*/React__default["default"].createElement(uikit.FormLabel, {
      htmlFor: "username",
      required: true
    }, "Username"), /*#__PURE__*/React__default["default"].createElement(uikit.Input, {
      id: "username",
      name: "username",
      value: accountSettings.username,
      onChange: handleAccountChange,
      required: true
    }), /*#__PURE__*/React__default["default"].createElement(uikit.FormHelperText, null, "Your username is used for your public profile URL.")), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-4)]"
    }, /*#__PURE__*/React__default["default"].createElement(uikit.FormGroup, null, /*#__PURE__*/React__default["default"].createElement(uikit.FormLabel, {
      htmlFor: "language"
    }, "Language"), /*#__PURE__*/React__default["default"].createElement(uikit.Select, {
      id: "language",
      name: "language",
      value: accountSettings.language,
      onChange: handleAccountChange
    }, /*#__PURE__*/React__default["default"].createElement("option", {
      value: "en"
    }, "English"), /*#__PURE__*/React__default["default"].createElement("option", {
      value: "es"
    }, "Spanish"), /*#__PURE__*/React__default["default"].createElement("option", {
      value: "fr"
    }, "French"), /*#__PURE__*/React__default["default"].createElement("option", {
      value: "de"
    }, "German"), /*#__PURE__*/React__default["default"].createElement("option", {
      value: "zh"
    }, "Chinese"))), /*#__PURE__*/React__default["default"].createElement(uikit.FormGroup, null, /*#__PURE__*/React__default["default"].createElement(uikit.FormLabel, {
      htmlFor: "timezone"
    }, "Timezone"), /*#__PURE__*/React__default["default"].createElement(uikit.Select, {
      id: "timezone",
      name: "timezone",
      value: accountSettings.timezone,
      onChange: handleAccountChange
    }, /*#__PURE__*/React__default["default"].createElement("option", {
      value: "America/New_York"
    }, "Eastern Time (ET)"), /*#__PURE__*/React__default["default"].createElement("option", {
      value: "America/Chicago"
    }, "Central Time (CT)"), /*#__PURE__*/React__default["default"].createElement("option", {
      value: "America/Denver"
    }, "Mountain Time (MT)"), /*#__PURE__*/React__default["default"].createElement("option", {
      value: "America/Los_Angeles"
    }, "Pacific Time (PT)"), /*#__PURE__*/React__default["default"].createElement("option", {
      value: "Europe/London"
    }, "Greenwich Mean Time (GMT)"), /*#__PURE__*/React__default["default"].createElement("option", {
      value: "Europe/Paris"
    }, "Central European Time (CET)"), /*#__PURE__*/React__default["default"].createElement("option", {
      value: "Asia/Tokyo"
    }, "Japan Standard Time (JST)")))), /*#__PURE__*/React__default["default"].createElement(uikit.Divider, null), /*#__PURE__*/React__default["default"].createElement("h3", {
      className: "font-medium"
    }, "Password"), /*#__PURE__*/React__default["default"].createElement("p", {
      className: "text-[var(--text-secondary)] mb-[var(--spacing-2)]"
    }, "Update your password or keep your current one."), /*#__PURE__*/React__default["default"].createElement(uikit.FormGroup, null, /*#__PURE__*/React__default["default"].createElement(uikit.FormLabel, {
      htmlFor: "currentPassword"
    }, "Current Password"), /*#__PURE__*/React__default["default"].createElement(uikit.Input, {
      id: "currentPassword",
      name: "currentPassword",
      type: "password"
    })), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-4)]"
    }, /*#__PURE__*/React__default["default"].createElement(uikit.FormGroup, null, /*#__PURE__*/React__default["default"].createElement(uikit.FormLabel, {
      htmlFor: "newPassword"
    }, "New Password"), /*#__PURE__*/React__default["default"].createElement(uikit.Input, {
      id: "newPassword",
      name: "newPassword",
      type: "password"
    })), /*#__PURE__*/React__default["default"].createElement(uikit.FormGroup, null, /*#__PURE__*/React__default["default"].createElement(uikit.FormLabel, {
      htmlFor: "confirmPassword"
    }, "Confirm New Password"), /*#__PURE__*/React__default["default"].createElement(uikit.Input, {
      id: "confirmPassword",
      name: "confirmPassword",
      type: "password"
    }))), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "flex justify-end space-x-[var(--spacing-2)]"
    }, /*#__PURE__*/React__default["default"].createElement(uikit.Button, {
      type: "button",
      variant: "outline"
    }, "Cancel"), /*#__PURE__*/React__default["default"].createElement(uikit.Button, {
      type: "submit",
      variant: "primary"
    }, "Save Changes")))))), /*#__PURE__*/React__default["default"].createElement(uikit.Tabs.Panel, null, /*#__PURE__*/React__default["default"].createElement(uikit.Card, {
      className: "mt-[var(--spacing-4)]"
    }, /*#__PURE__*/React__default["default"].createElement(uikit.Card.Header, null, "Notification Preferences"), /*#__PURE__*/React__default["default"].createElement(uikit.Card.Body, null, /*#__PURE__*/React__default["default"].createElement("form", {
      onSubmit: handleNotificationSubmit,
      className: "space-y-[var(--spacing-4)]"
    }, /*#__PURE__*/React__default["default"].createElement(uikit.FormGroup, null, /*#__PURE__*/React__default["default"].createElement("h3", {
      className: "font-medium mb-[var(--spacing-2)]"
    }, "Notification Channels"), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "space-y-[var(--spacing-2)]"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "flex justify-between items-center"
    }, /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("span", {
      className: "font-medium"
    }, "Email Notifications"), /*#__PURE__*/React__default["default"].createElement("p", {
      className: "text-sm text-[var(--text-secondary)]"
    }, "Receive notifications via email")), /*#__PURE__*/React__default["default"].createElement(uikit.Switch, {
      name: "emailNotifications",
      checked: notificationSettings.emailNotifications,
      onChange: handleNotificationChange
    })), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "flex justify-between items-center"
    }, /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("span", {
      className: "font-medium"
    }, "Push Notifications"), /*#__PURE__*/React__default["default"].createElement("p", {
      className: "text-sm text-[var(--text-secondary)]"
    }, "Receive notifications on your device")), /*#__PURE__*/React__default["default"].createElement(uikit.Switch, {
      name: "pushNotifications",
      checked: notificationSettings.pushNotifications,
      onChange: handleNotificationChange
    })))), /*#__PURE__*/React__default["default"].createElement(uikit.Divider, null), /*#__PURE__*/React__default["default"].createElement(uikit.FormGroup, null, /*#__PURE__*/React__default["default"].createElement("h3", {
      className: "font-medium mb-[var(--spacing-2)]"
    }, "Email Preferences"), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "space-y-[var(--spacing-2)]"
    }, /*#__PURE__*/React__default["default"].createElement(uikit.Checkbox, {
      name: "marketingEmails",
      checked: notificationSettings.marketingEmails,
      onChange: handleNotificationChange
    }, "Marketing emails and newsletters"), /*#__PURE__*/React__default["default"].createElement(uikit.Checkbox, {
      name: "weeklyDigest",
      checked: notificationSettings.weeklyDigest,
      onChange: handleNotificationChange
    }, "Weekly activity digest"), /*#__PURE__*/React__default["default"].createElement(uikit.Checkbox, {
      name: "productUpdates",
      checked: notificationSettings.productUpdates,
      onChange: handleNotificationChange
    }, "Product updates and new features"), /*#__PURE__*/React__default["default"].createElement(uikit.Checkbox, {
      name: "securityAlerts",
      checked: notificationSettings.securityAlerts,
      onChange: handleNotificationChange
    }, "Security alerts and privacy updates"))), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "flex justify-end space-x-[var(--spacing-2)]"
    }, /*#__PURE__*/React__default["default"].createElement(uikit.Button, {
      type: "button",
      variant: "outline"
    }, "Cancel"), /*#__PURE__*/React__default["default"].createElement(uikit.Button, {
      type: "submit",
      variant: "primary"
    }, "Save Changes")))))), /*#__PURE__*/React__default["default"].createElement(uikit.Tabs.Panel, null, /*#__PURE__*/React__default["default"].createElement(uikit.Card, {
      className: "mt-[var(--spacing-4)]"
    }, /*#__PURE__*/React__default["default"].createElement(uikit.Card.Header, null, "Privacy Settings"), /*#__PURE__*/React__default["default"].createElement(uikit.Card.Body, null, /*#__PURE__*/React__default["default"].createElement("form", {
      onSubmit: handlePrivacySubmit,
      className: "space-y-[var(--spacing-4)]"
    }, /*#__PURE__*/React__default["default"].createElement(uikit.FormGroup, null, /*#__PURE__*/React__default["default"].createElement(uikit.FormLabel, {
      htmlFor: "profileVisibility"
    }, "Profile Visibility"), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "space-y-[var(--spacing-2)]"
    }, /*#__PURE__*/React__default["default"].createElement(uikit.Radio, {
      id: "profileVisibility-public",
      name: "profileVisibility",
      value: "public",
      checked: privacySettings.profileVisibility === 'public',
      onChange: handlePrivacyChange
    }, "Public ", /*#__PURE__*/React__default["default"].createElement("span", {
      className: "text-sm text-[var(--text-secondary)]"
    }, "(Visible to everyone)")), /*#__PURE__*/React__default["default"].createElement(uikit.Radio, {
      id: "profileVisibility-contacts",
      name: "profileVisibility",
      value: "contacts",
      checked: privacySettings.profileVisibility === 'contacts',
      onChange: handlePrivacyChange
    }, "Contacts Only ", /*#__PURE__*/React__default["default"].createElement("span", {
      className: "text-sm text-[var(--text-secondary)]"
    }, "(Visible to people in your contacts)")), /*#__PURE__*/React__default["default"].createElement(uikit.Radio, {
      id: "profileVisibility-private",
      name: "profileVisibility",
      value: "private",
      checked: privacySettings.profileVisibility === 'private',
      onChange: handlePrivacyChange
    }, "Private ", /*#__PURE__*/React__default["default"].createElement("span", {
      className: "text-sm text-[var(--text-secondary)]"
    }, "(Only visible to you)")))), /*#__PURE__*/React__default["default"].createElement(uikit.Divider, null), /*#__PURE__*/React__default["default"].createElement(uikit.FormGroup, null, /*#__PURE__*/React__default["default"].createElement("h3", {
      className: "font-medium mb-[var(--spacing-2)]"
    }, "Activity and Data"), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "space-y-[var(--spacing-2)]"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "flex justify-between items-center"
    }, /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("span", {
      className: "font-medium"
    }, "Allow Data Collection"), /*#__PURE__*/React__default["default"].createElement("p", {
      className: "text-sm text-[var(--text-secondary)]"
    }, "Allow us to collect usage data to improve your experience")), /*#__PURE__*/React__default["default"].createElement(uikit.Switch, {
      name: "allowDataCollection",
      checked: privacySettings.allowDataCollection,
      onChange: handlePrivacyChange
    })), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "flex justify-between items-center"
    }, /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("span", {
      className: "font-medium"
    }, "Show Activity Status"), /*#__PURE__*/React__default["default"].createElement("p", {
      className: "text-sm text-[var(--text-secondary)]"
    }, "Show when you are active on the platform")), /*#__PURE__*/React__default["default"].createElement(uikit.Switch, {
      name: "showActivityStatus",
      checked: privacySettings.showActivityStatus,
      onChange: handlePrivacyChange
    })))), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "flex justify-end space-x-[var(--spacing-2)]"
    }, /*#__PURE__*/React__default["default"].createElement(uikit.Button, {
      type: "button",
      variant: "outline"
    }, "Cancel"), /*#__PURE__*/React__default["default"].createElement(uikit.Button, {
      type: "submit",
      variant: "primary"
    }, "Save Changes")))))), /*#__PURE__*/React__default["default"].createElement(uikit.Tabs.Panel, null, /*#__PURE__*/React__default["default"].createElement(uikit.Card, {
      className: "mt-[var(--spacing-4)]"
    }, /*#__PURE__*/React__default["default"].createElement(uikit.Card.Header, null, "Appearance Settings"), /*#__PURE__*/React__default["default"].createElement(uikit.Card.Body, null, /*#__PURE__*/React__default["default"].createElement("form", {
      onSubmit: handleThemeSubmit,
      className: "space-y-[var(--spacing-4)]"
    }, /*#__PURE__*/React__default["default"].createElement(uikit.FormGroup, null, /*#__PURE__*/React__default["default"].createElement(uikit.FormLabel, {
      htmlFor: "colorScheme"
    }, "Color Scheme"), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "space-y-[var(--spacing-2)]"
    }, /*#__PURE__*/React__default["default"].createElement(uikit.Radio, {
      id: "colorScheme-system",
      name: "colorScheme",
      value: "system",
      checked: themeSettings.colorScheme === 'system',
      onChange: handleThemeChange
    }, "System ", /*#__PURE__*/React__default["default"].createElement("span", {
      className: "text-sm text-[var(--text-secondary)]"
    }, "(Follow system preference)")), /*#__PURE__*/React__default["default"].createElement(uikit.Radio, {
      id: "colorScheme-light",
      name: "colorScheme",
      value: "light",
      checked: themeSettings.colorScheme === 'light',
      onChange: handleThemeChange
    }, "Light"), /*#__PURE__*/React__default["default"].createElement(uikit.Radio, {
      id: "colorScheme-dark",
      name: "colorScheme",
      value: "dark",
      checked: themeSettings.colorScheme === 'dark',
      onChange: handleThemeChange
    }, "Dark"))), /*#__PURE__*/React__default["default"].createElement(uikit.FormGroup, null, /*#__PURE__*/React__default["default"].createElement(uikit.FormLabel, {
      htmlFor: "fontSize"
    }, "Font Size"), /*#__PURE__*/React__default["default"].createElement(uikit.Select, {
      id: "fontSize",
      name: "fontSize",
      value: themeSettings.fontSize,
      onChange: handleThemeChange
    }, /*#__PURE__*/React__default["default"].createElement("option", {
      value: "small"
    }, "Small"), /*#__PURE__*/React__default["default"].createElement("option", {
      value: "medium"
    }, "Medium"), /*#__PURE__*/React__default["default"].createElement("option", {
      value: "large"
    }, "Large"))), /*#__PURE__*/React__default["default"].createElement(uikit.Divider, null), /*#__PURE__*/React__default["default"].createElement(uikit.FormGroup, null, /*#__PURE__*/React__default["default"].createElement("h3", {
      className: "font-medium mb-[var(--spacing-2)]"
    }, "Accessibility"), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "space-y-[var(--spacing-2)]"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "flex justify-between items-center"
    }, /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("span", {
      className: "font-medium"
    }, "Reduced Motion"), /*#__PURE__*/React__default["default"].createElement("p", {
      className: "text-sm text-[var(--text-secondary)]"
    }, "Reduce or eliminate animations")), /*#__PURE__*/React__default["default"].createElement(uikit.Switch, {
      name: "reducedMotion",
      checked: themeSettings.reducedMotion,
      onChange: handleThemeChange
    })), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "flex justify-between items-center"
    }, /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("span", {
      className: "font-medium"
    }, "High Contrast"), /*#__PURE__*/React__default["default"].createElement("p", {
      className: "text-sm text-[var(--text-secondary)]"
    }, "Increase contrast for better visibility")), /*#__PURE__*/React__default["default"].createElement(uikit.Switch, {
      name: "highContrast",
      checked: themeSettings.highContrast,
      onChange: handleThemeChange
    })))), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "flex justify-end space-x-[var(--spacing-2)]"
    }, /*#__PURE__*/React__default["default"].createElement(uikit.Button, {
      type: "button",
      variant: "outline"
    }, "Cancel"), /*#__PURE__*/React__default["default"].createElement(uikit.Button, {
      type: "submit",
      variant: "primary"
    }, "Save Changes")))))))));
  };
  var Settings$1 = Settings;

  /**
   * Main application component for the dashboard example
   * 
   * Handles routing between dashboard pages and layout structure
   * @module examples/dashboard/App
   */

  /**
   * App component with navigation and page routing
   * 
   * @returns {JSX.Element} The rendered App component
   */
  var App = function App() {
    // State for current page
    var _useState = React.useState('dashboard'),
      currentPage = _useState[0],
      setCurrentPage = _useState[1];

    // State for dark mode
    var _useState2 = React.useState(false),
      darkMode = _useState2[0],
      setDarkMode = _useState2[1];

    // Sample notifications
    var notifications = [{
      id: 1,
      message: 'New user registration',
      time: '5 minutes ago'
    }, {
      id: 2,
      message: 'Server reached 80% capacity',
      time: '1 hour ago'
    }, {
      id: 3,
      message: 'Monthly report generated',
      time: '3 hours ago'
    }];

    // Render the current page based on state
    var renderPage = function renderPage() {
      switch (currentPage) {
        case 'dashboard':
          return /*#__PURE__*/React__default["default"].createElement(Dashboard$1, null);
        case 'users':
          return /*#__PURE__*/React__default["default"].createElement(Users$1, null);
        case 'settings':
          return /*#__PURE__*/React__default["default"].createElement(Settings$1, null);
        default:
          return /*#__PURE__*/React__default["default"].createElement(Dashboard$1, null);
      }
    };
    return /*#__PURE__*/React__default["default"].createElement(uikit.SidebarLayout, null, /*#__PURE__*/React__default["default"].createElement(uikit.SidebarLayout.Sidebar, null, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "p-[var(--spacing-4)] flex items-center"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "text-[var(--primary-color)] font-bold text-xl"
    }, "VoilaJSX")), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "mt-[var(--spacing-6)]"
    }, /*#__PURE__*/React__default["default"].createElement(uikit.Menu, null, /*#__PURE__*/React__default["default"].createElement(uikit.Menu.Item, {
      icon: /*#__PURE__*/React__default["default"].createElement(icons.HomeIcon, null),
      active: currentPage === 'dashboard',
      onClick: function onClick() {
        return setCurrentPage('dashboard');
      }
    }, "Dashboard"), /*#__PURE__*/React__default["default"].createElement(uikit.Menu.Item, {
      icon: /*#__PURE__*/React__default["default"].createElement(icons.UserIcon, null),
      active: currentPage === 'users',
      onClick: function onClick() {
        return setCurrentPage('users');
      }
    }, "Users"), /*#__PURE__*/React__default["default"].createElement(uikit.Menu.Item, {
      icon: /*#__PURE__*/React__default["default"].createElement(icons.ChartBarIcon, null),
      active: currentPage === 'analytics',
      onClick: function onClick() {
        return setCurrentPage('analytics');
      }
    }, "Analytics"), /*#__PURE__*/React__default["default"].createElement(uikit.Menu.Divider, null), /*#__PURE__*/React__default["default"].createElement(uikit.Menu.Item, {
      icon: /*#__PURE__*/React__default["default"].createElement(icons.CogIcon, null),
      active: currentPage === 'settings',
      onClick: function onClick() {
        return setCurrentPage('settings');
      }
    }, "Settings"))), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "mt-auto p-[var(--spacing-4)]"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "flex items-center"
    }, /*#__PURE__*/React__default["default"].createElement(uikit.Avatar, {
      name: "John Doe",
      size: "sm"
    }), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "ml-[var(--spacing-2)]"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "font-medium"
    }, "John Doe"), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "text-sm text-[var(--text-secondary)]"
    }, "Administrator")), /*#__PURE__*/React__default["default"].createElement(uikit.Dropdown, {
      trigger: /*#__PURE__*/React__default["default"].createElement(uikit.Button, {
        variant: "ghost",
        size: "sm",
        className: "ml-auto"
      }, /*#__PURE__*/React__default["default"].createElement(icons.DotsVerticalIcon, null))
    }, /*#__PURE__*/React__default["default"].createElement(uikit.Dropdown.Item, {
      icon: /*#__PURE__*/React__default["default"].createElement(icons.UserIcon, null)
    }, "Profile"), /*#__PURE__*/React__default["default"].createElement(uikit.Dropdown.Item, {
      icon: /*#__PURE__*/React__default["default"].createElement(icons.CogIcon, null)
    }, "Settings"), /*#__PURE__*/React__default["default"].createElement(uikit.Dropdown.Divider, null), /*#__PURE__*/React__default["default"].createElement(uikit.Dropdown.Item, {
      icon: /*#__PURE__*/React__default["default"].createElement(icons.LogoutIcon, null)
    }, "Logout"))), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "mt-[var(--spacing-4)] flex items-center"
    }, /*#__PURE__*/React__default["default"].createElement("span", {
      className: "mr-[var(--spacing-2)]"
    }, "Dark Mode"), /*#__PURE__*/React__default["default"].createElement("label", {
      className: "relative inline-block w-10 h-5"
    }, /*#__PURE__*/React__default["default"].createElement("input", {
      type: "checkbox",
      className: "opacity-0 w-0 h-0",
      checked: darkMode,
      onChange: function onChange() {
        return setDarkMode(!darkMode);
      }
    }), /*#__PURE__*/React__default["default"].createElement("span", {
      className: "absolute cursor-pointer inset-0 rounded-full bg-[var(--bg-subtle)] border transition-all duration-300 " + (darkMode ? 'bg-[var(--primary-color)] border-[var(--primary-color)]' : 'border-[var(--border-color-default)]')
    }, /*#__PURE__*/React__default["default"].createElement("span", {
      className: "absolute top-0.5 left-0.5 bg-white w-4 h-4 rounded-full transition-all duration-300 " + (darkMode ? 'translate-x-5' : 'translate-x-0')
    })))))), /*#__PURE__*/React__default["default"].createElement(uikit.SidebarLayout.Main, null, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "mb-[var(--spacing-6)]"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "flex justify-between items-center"
    }, /*#__PURE__*/React__default["default"].createElement("h1", {
      className: "text-2xl font-bold"
    }, currentPage.charAt(0).toUpperCase() + currentPage.slice(1)), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "flex space-x-[var(--spacing-2)]"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "relative w-64"
    }, /*#__PURE__*/React__default["default"].createElement("input", {
      type: "text",
      placeholder: "Search...",
      className: "pl-9 pr-4 py-2 w-full border border-[var(--border-color-default)] rounded-[var(--radius-default)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-opacity-50"
    }), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "absolute left-3 top-2.5 text-[var(--text-secondary)]"
    }, /*#__PURE__*/React__default["default"].createElement(icons.SearchIcon, {
      size: "sm"
    }))), /*#__PURE__*/React__default["default"].createElement(uikit.Dropdown, {
      trigger: /*#__PURE__*/React__default["default"].createElement(uikit.Button, {
        variant: "ghost",
        size: "sm",
        className: "relative"
      }, /*#__PURE__*/React__default["default"].createElement(icons.BellIcon, null), /*#__PURE__*/React__default["default"].createElement("span", {
        className: "absolute top-1 right-1 w-2 h-2 bg-[var(--error-color)] rounded-full"
      }))
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "px-[var(--spacing-2)] py-[var(--spacing-1)] text-sm font-medium"
    }, "Notifications"), /*#__PURE__*/React__default["default"].createElement(uikit.Dropdown.Divider, null), notifications.map(function (notification) {
      return /*#__PURE__*/React__default["default"].createElement(uikit.Dropdown.Item, {
        key: notification.id
      }, /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("div", null, notification.message), /*#__PURE__*/React__default["default"].createElement("div", {
        className: "text-xs text-[var(--text-secondary)]"
      }, notification.time)));
    }), /*#__PURE__*/React__default["default"].createElement(uikit.Dropdown.Divider, null), /*#__PURE__*/React__default["default"].createElement(uikit.Dropdown.Item, null, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "text-center text-sm"
    }, "View all notifications"))), /*#__PURE__*/React__default["default"].createElement(uikit.Button, {
      variant: "primary",
      size: "sm"
    }, "New Item")))), renderPage()));
  };
  var App$1 = App;

  /**
   * Dashboard Example Entry Point
   * 
   * This file serves as the entry point for the dashboard example application.
   * It sets up the React application with the ThemeProvider from @voilajsx/uikit.
   * 
   * @module examples/dashboard/index
   */

  /**
   * Dashboard theme configuration
   * Customizes the appearance of UI components for the dashboard
   */
  var theme = {
    name: 'dashboard-theme',
    styles: {
      // Primary and secondary colors
      '--primary-color': '#9333ea',
      '--secondary-color': '#d946ef',
      // Additional theme customizations can be added here
      '--radius-lg': '0.5rem',
      '--shadow-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
    }
  };

  /**
   * Render the application wrapped in ThemeProvider for consistent styling
   */
  ReactDOM__default["default"].render(/*#__PURE__*/React__default["default"].createElement(React__default["default"].StrictMode, null, /*#__PURE__*/React__default["default"].createElement(uikit.ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React__default["default"].createElement(App$1, null))), document.getElementById('root'));

})(React, ReactDOM, uikit, icons);
//# sourceMappingURL=bundle.js.map
