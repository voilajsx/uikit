/**
 * Navigation data for the documentation site
 */
const navigation = {
  // Top navigation items
  topNav: [
    { name: 'Getting Started', href: '/getting-started/installation' },
    { name: 'Components', href: '/components/button' },
    { name: 'Layouts', href: '/layouts/sidebar-layout' },
    { name: 'Theming', href: '/theming/overview' },
  ],

  // Sidebar sections with their items
  sections: [
    {
      name: 'Getting Started',
      items: [
        { name: 'Installation', href: '/getting-started/installation' },
        { name: 'Usage', href: '/getting-started/usage' },
        { name: 'Theming', href: '/getting-started/theming' },
      ],
    },
    {
      name: 'Components',
      items: [
        { name: 'Button', href: '/components/button' },
        { name: 'Card', href: '/components/card' },
        { name: 'Avatar', href: '/components/avatar' },
        { name: 'Badge', href: '/components/badge' },
        { name: 'Table', href: '/components/table' },
        { name: 'Modal', href: '/components/modal' },
        { name: 'Tooltip', href: '/components/tooltip' },
        { name: 'Dropdown', href: '/components/dropdown' },
      ],
    },
    {
      name: 'Forms',
      items: [
        { name: 'Input', href: '/forms/input' },
        { name: 'Select', href: '/forms/select' },
        { name: 'Checkbox', href: '/forms/checkbox' },
        { name: 'Radio', href: '/forms/radio' },
        { name: 'Switch', href: '/forms/switch' },
        { name: 'Textarea', href: '/forms/textarea' },
      ],
    },
    {
      name: 'Feedback',
      items: [
        { name: 'Alert', href: '/feedback/alert' },
        { name: 'Toast', href: '/feedback/toast' },
        { name: 'Progress', href: '/feedback/progress' },
        { name: 'Spinner', href: '/feedback/spinner' },
      ],
    },
    {
      name: 'Navigation',
      items: [
        { name: 'Menu', href: '/navigation/menu' },
        { name: 'Tabs', href: '/navigation/tabs' },
        { name: 'Pagination', href: '/navigation/pagination' },
        { name: 'Breadcrumb', href: '/navigation/breadcrumb' },
      ],
    },
    {
      name: 'Layouts',
      items: [
        { name: 'Sidebar Layout', href: '/layouts/sidebar-layout' },
        { name: 'Dashboard Layout', href: '/layouts/dashboard-layout' },
        { name: 'App Layout', href: '/layouts/app-layout' },
        { name: 'Centered Layout', href: '/layouts/centered-layout' },
        { name: 'Two Column Layout', href: '/layouts/two-column-layout' },
      ],
    },
    {
      name: 'Data Visualization',
      items: [
        { name: 'Charts', href: '/data/charts' },
        { name: 'Data Table', href: '/data/data-table' },
        { name: 'Metrics', href: '/data/metrics' },
      ],
    },
    {
      name: 'Utilities',
      items: [
        { name: 'Icons', href: '/icons' },
        { name: 'Colors', href: '/theming/colors' },
        { name: 'Typography', href: '/theming/typography' },
      ],
    },
  ],

  // Footer links
  footerLinks: {
    resources: [
      { name: 'Installation', href: '/getting-started/installation' },
      { name: 'Components', href: '/components/button' },
      { name: 'Theming', href: '/theming/overview' },
      { name: 'Releases', href: 'https://github.com/voilajsx/uikit/releases' },
    ],
    community: [
      { name: 'GitHub', href: 'https://github.com/voilajsx/uikit' },
      { name: 'Issues', href: 'https://github.com/voilajsx/uikit/issues' },
      {
        name: 'Discussions',
        href: 'https://github.com/voilajsx/uikit/discussions',
      },
      {
        name: 'Contributing',
        href: 'https://github.com/voilajsx/uikit/blob/main/CONTRIBUTING.md',
      },
    ],
  },
};

export default navigation;
