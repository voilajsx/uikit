import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  SparklesIcon,
  PuzzlePieceIcon,
  PaintBrushIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  MagnifyingGlassIcon,
  CodeBracketIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

/**
 * Home page component
 */
const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>VoilaJSX UIKit - A Modern React Component Library</title>
        <meta
          name="description"
          content="A modern React component library built with Tailwind CSS that helps you build beautiful and accessible interfaces with speed and confidence."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800 rounded-3xl mt-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Build beautiful React UIs{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400">
              faster than ever
            </span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            VoilaJSX UIKit is a modern React component library built with
            Tailwind CSS that helps you build beautiful and accessible
            interfaces with speed and confidence.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/getting-started/installation"
              className="px-6 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium shadow-xl shadow-primary-500/20 transition-all"
            >
              Get Started
            </Link>
            <Link
              to="/components/button"
              className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 font-medium transition-all"
            >
              Browse Components
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Why VoilaJSX UIKit?
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Designed to help developers build beautiful, accessible
              applications with speed and confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="rounded-xl p-8 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-4">
                <PuzzlePieceIcon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                50+ Components
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                A comprehensive collection of pre-built, production-ready
                components that work seamlessly together.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-xl p-8 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-4">
                <PaintBrushIcon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Fully Customizable
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Extend and customize components to match your design through a
                powerful theme system based on CSS variables.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-xl p-8 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-4">
                <SparklesIcon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Accessible by Default
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Built with accessibility in mind from the start, ensuring your
                applications work for everyone.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="rounded-xl p-8 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-4">
                <LightBulbIcon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Dark Mode Support
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Seamless light and dark mode switching with beautiful, carefully
                crafted designs for both.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="rounded-xl p-8 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-4">
                <RocketLaunchIcon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Developer Experience
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Intuitive APIs, comprehensive documentation, and consistent
                patterns that make development a joy.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="rounded-xl p-8 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-4">
                <CodeBracketIcon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                TypeScript Ready
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Full TypeScript support with comprehensive type definitions for
                all components, props, and theme options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Component Showcase */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Popular Components
            </h2>
            <Link
              to="/components/button"
              className="text-primary-600 dark:text-primary-400 hover:underline flex items-center"
            >
              View all components
              <ArrowRightIcon className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Button Component Card */}
            <Link
              to="/components/button"
              className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800 hover:border-primary-300 dark:hover:border-primary-700 transition-colors group"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  Buttons
                </h3>
                <div className="flex flex-wrap gap-2">
                  <button className="px-4 py-2 bg-primary-600 text-white rounded-md">
                    Primary
                  </button>
                  <button className="px-4 py-2 bg-secondary-600 text-white rounded-md">
                    Secondary
                  </button>
                  <button className="px-4 py-2 border border-primary-600 text-primary-600 rounded-md">
                    Outline
                  </button>
                  <button className="px-4 py-2 text-primary-600 rounded-md">
                    Ghost
                  </button>
                </div>
              </div>
            </Link>

            {/* Card Component Card */}
            <Link
              to="/components/card"
              className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800 hover:border-primary-300 dark:hover:border-primary-700 transition-colors group"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  Cards
                </h3>
                <div className="border rounded-lg overflow-hidden">
                  <div className="p-4 border-b bg-gray-50 dark:bg-gray-700">
                    Card Header
                  </div>
                  <div className="p-4">Card content goes here</div>
                  <div className="p-4 border-t bg-gray-50 dark:bg-gray-700">
                    Card Footer
                  </div>
                </div>
              </div>
            </Link>

            {/* Form Controls Card */}
            <Link
              to="/forms/input"
              className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800 hover:border-primary-300 dark:hover:border-primary-700 transition-colors group"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  Form Controls
                </h3>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Text input"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md"
                  />
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-primary-600 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">
                      Checkbox
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-5 w-10 bg-primary-600 rounded-full relative">
                      <div className="h-4 w-4 bg-white rounded-full absolute top-0.5 right-0.5"></div>
                    </div>
                    <span className="ml-2 text-gray-700 dark:text-gray-300">
                      Switch
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Alert Component Card */}
            <Link
              to="/feedback/alert"
              className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800 hover:border-primary-300 dark:hover:border-primary-700 transition-colors group"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  Alerts
                </h3>
                <div className="space-y-3">
                  <div className="p-3 bg-primary-50 dark:bg-primary-900/20 border-l-4 border-primary-600 rounded-r-md text-gray-700 dark:text-gray-300">
                    Info alert message
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600 rounded-r-md text-gray-700 dark:text-gray-300">
                    Success alert message
                  </div>
                </div>
              </div>
            </Link>

            {/* Modal Component Card */}
            <Link
              to="/components/modal"
              className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800 hover:border-primary-300 dark:hover:border-primary-700 transition-colors group"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  Modals
                </h3>
                <div className="relative h-32 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center">
                    <div className="w-3/4 h-20 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center">
                      <span className="text-gray-800 dark:text-gray-200">
                        Modal Dialog
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Table Component Card */}
            <Link
              to="/components/table"
              className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800 hover:border-primary-300 dark:hover:border-primary-700 transition-colors group"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  Tables
                </h3>
                <div className="border rounded-lg overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th className="py-2 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          Name
                        </th>
                        <th className="py-2 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          Role
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                      <tr>
                        <td className="py-2 px-4 whitespace-nowrap">
                          John Doe
                        </td>
                        <td className="py-2 px-4 whitespace-nowrap">Admin</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 whitespace-nowrap">
                          Jane Smith
                        </td>
                        <td className="py-2 px-4 whitespace-nowrap">User</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-900 dark:to-secondary-900 rounded-2xl overflow-hidden shadow-xl">
            <div className="px-6 py-12 sm:px-12 sm:py-16 text-center">
              <h2 className="text-3xl font-extrabold text-white">
                Ready to build something amazing?
              </h2>
              <p className="mt-4 text-lg text-white text-opacity-90 max-w-2xl mx-auto">
                Get started with VoilaJSX UIKit today and build beautiful,
                accessible React applications in record time.
              </p>
              <div className="mt-8 flex justify-center space-x-4">
                <Link
                  to="/getting-started/installation"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-gray-50 shadow-md transition-colors"
                >
                  Get Started
                </Link>
                <a
                  href="https://github.com/voilajsx/uikit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-opacity-20 backdrop-blur-sm bg-white hover:bg-opacity-30 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
