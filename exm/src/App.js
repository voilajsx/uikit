import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Lazy load pages to improve initial load time
const HomePage = lazy(() => import('./pages/home/HomePage'));
const ButtonPage = lazy(() => import('./pages/components/ButtonPage'));

// Placeholder component for pages that are not yet implemented
const PlaceholderPage = ({ title, description }) => (
  <div className="py-8">
    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
      {title}
    </h1>
    <p className="text-lg text-gray-600 dark:text-gray-400">{description}</p>
    <div className="mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
      <div className="h-8 w-1/3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2"></div>
      <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
    </div>
    <div className="mt-8 text-primary-600 dark:text-primary-400">
      This page is coming soon! Check back later or contribute to this
      component.
    </div>
  </div>
);

const App = () => {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="flex h-screen items-center justify-center">
            <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        }
      >
        <Routes>
          {/* Home page */}
          <Route path="/" element={<HomePage />} />

          {/* Getting Started pages */}
          <Route
            path="/getting-started/installation"
            element={
              <PlaceholderPage
                title="Installation"
                description="Learn how to install and set up VoilaJSX UIKit in your project."
              />
            }
          />
          <Route
            path="/getting-started/usage"
            element={
              <PlaceholderPage
                title="Usage"
                description="Get started with VoilaJSX UIKit and learn the basics of using components."
              />
            }
          />
          <Route
            path="/getting-started/theming"
            element={
              <PlaceholderPage
                title="Theming"
                description="Learn how to customize the look and feel of VoilaJSX UIKit to match your brand."
              />
            }
          />

          {/* Component pages */}
          <Route path="/components/button" element={<ButtonPage />} />
          <Route
            path="/components/card"
            element={
              <PlaceholderPage
                title="Card"
                description="Cards are flexible containers for displaying content and actions about a single subject."
              />
            }
          />
          <Route
            path="/components/avatar"
            element={
              <PlaceholderPage
                title="Avatar"
                description="Avatars are used to represent users or entities with images, initials, or icons."
              />
            }
          />
          <Route
            path="/components/badge"
            element={
              <PlaceholderPage
                title="Badge"
                description="Badges are used to highlight information such as status or count."
              />
            }
          />
          <Route
            path="/components/table"
            element={
              <PlaceholderPage
                title="Table"
                description="Tables display information in rows and columns for easy comparison and analysis."
              />
            }
          />
          <Route
            path="/components/modal"
            element={
              <PlaceholderPage
                title="Modal"
                description="Modals display content that requires user interaction in an overlay."
              />
            }
          />
          <Route
            path="/components/tooltip"
            element={
              <PlaceholderPage
                title="Tooltip"
                description="Tooltips display informative text when users hover over or focus on an element."
              />
            }
          />
          <Route
            path="/components/dropdown"
            element={
              <PlaceholderPage
                title="Dropdown"
                description="Dropdowns display a list of options when triggered from a button."
              />
            }
          />

          {/* Form pages */}
          <Route
            path="/forms/input"
            element={
              <PlaceholderPage
                title="Input"
                description="Input components are used to collect user data through a text field."
              />
            }
          />
          <Route
            path="/forms/select"
            element={
              <PlaceholderPage
                title="Select"
                description="Select components let users choose one option from a dropdown list."
              />
            }
          />
          <Route
            path="/forms/checkbox"
            element={
              <PlaceholderPage
                title="Checkbox"
                description="Checkbox components allow users to select multiple options from a set."
              />
            }
          />
          <Route
            path="/forms/radio"
            element={
              <PlaceholderPage
                title="Radio"
                description="Radio components allow users to select a single option from a set."
              />
            }
          />
          <Route
            path="/forms/switch"
            element={
              <PlaceholderPage
                title="Switch"
                description="Switch components are used for toggling between two states."
              />
            }
          />
          <Route
            path="/forms/textarea"
            element={
              <PlaceholderPage
                title="Textarea"
                description="Textarea components are used for multi-line text input."
              />
            }
          />

          {/* Feedback pages */}
          <Route
            path="/feedback/alert"
            element={
              <PlaceholderPage
                title="Alert"
                description="Alerts display important messages to users."
              />
            }
          />
          <Route
            path="/feedback/toast"
            element={
              <PlaceholderPage
                title="Toast"
                description="Toasts provide brief notifications that appear temporarily."
              />
            }
          />
          <Route
            path="/feedback/progress"
            element={
              <PlaceholderPage
                title="Progress"
                description="Progress indicators show the completion status of an operation."
              />
            }
          />
          <Route
            path="/feedback/spinner"
            element={
              <PlaceholderPage
                title="Spinner"
                description="Spinners indicate that an action is being processed."
              />
            }
          />

          {/* Navigation pages */}
          <Route
            path="/navigation/menu"
            element={
              <PlaceholderPage
                title="Menu"
                description="Menus display a list of navigation options or actions."
              />
            }
          />
          <Route
            path="/navigation/tabs"
            element={
              <PlaceholderPage
                title="Tabs"
                description="Tabs organize content into separate views that can be navigated between."
              />
            }
          />
          <Route
            path="/navigation/pagination"
            element={
              <PlaceholderPage
                title="Pagination"
                description="Pagination helps users navigate through multiple pages of content."
              />
            }
          />
          <Route
            path="/navigation/breadcrumb"
            element={
              <PlaceholderPage
                title="Breadcrumb"
                description="Breadcrumbs show the hierarchical path to the current page or view."
              />
            }
          />

          {/* Layout pages */}
          <Route
            path="/layouts/sidebar-layout"
            element={
              <PlaceholderPage
                title="Sidebar Layout"
                description="Sidebar layouts provide a persistent side navigation area alongside main content."
              />
            }
          />
          <Route
            path="/layouts/dashboard-layout"
            element={
              <PlaceholderPage
                title="Dashboard Layout"
                description="Dashboard layouts organize complex information and controls in a structured way."
              />
            }
          />
          <Route
            path="/layouts/app-layout"
            element={
              <PlaceholderPage
                title="App Layout"
                description="App layouts provide consistent structure for application interfaces."
              />
            }
          />
          <Route
            path="/layouts/centered-layout"
            element={
              <PlaceholderPage
                title="Centered Layout"
                description="Centered layouts focus content in the middle of the viewport."
              />
            }
          />
          <Route
            path="/layouts/two-column-layout"
            element={
              <PlaceholderPage
                title="Two Column Layout"
                description="Two column layouts divide content into two vertical sections."
              />
            }
          />

          {/* Data visualization pages */}
          <Route
            path="/data/charts"
            element={
              <PlaceholderPage
                title="Charts"
                description="Chart components visualize data to help users understand complex information."
              />
            }
          />
          <Route
            path="/data/data-table"
            element={
              <PlaceholderPage
                title="Data Table"
                description="Data tables display structured data with advanced features like sorting and filtering."
              />
            }
          />
          <Route
            path="/data/metrics"
            element={
              <PlaceholderPage
                title="Metrics"
                description="Metric components display key performance indicators and statistics."
              />
            }
          />

          {/* Utility pages */}
          <Route
            path="/icons"
            element={
              <PlaceholderPage
                title="Icons"
                description="A collection of SVG icons included with VoilaJSX UIKit."
              />
            }
          />
          <Route
            path="/theming/colors"
            element={
              <PlaceholderPage
                title="Colors"
                description="The color system used in VoilaJSX UIKit for consistent design."
              />
            }
          />
          <Route
            path="/theming/typography"
            element={
              <PlaceholderPage
                title="Typography"
                description="The typography system used in VoilaJSX UIKit for readable text."
              />
            }
          />
          <Route
            path="/theming/overview"
            element={
              <PlaceholderPage
                title="Theming Overview"
                description="An overview of the theming system in VoilaJSX UIKit."
              />
            }
          />

          {/* Catch-all redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
