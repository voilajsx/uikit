import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';
import ButtonExamples from '../../components/examples/ButtonExamples';
import PropsTable from '../../components/common/PropsTable';
import CodeBlock from '../../components/common/CodeBlock';
import buttonData from '../../data/componentData/buttonData';

/**
 * Button component documentation page
 */
const ButtonPage = () => {
  return (
    <>
      <Helmet>
        <title>Button - VoilaJSX UIKit</title>
        <meta
          name="description"
          content="Button component documentation for VoilaJSX UIKit"
        />
      </Helmet>

      <div className="py-8">
        {/* Page header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Button
          </h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            {buttonData.description}
          </p>
          <div className="mt-4 flex space-x-4">
            <a
              href={buttonData.sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
            >
              View Source Code
            </a>
          </div>
        </div>

        {/* Import section */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
            Import
          </h2>
          <CodeBlock
            code={`import { Button } from '@voilajsx/uikit';`}
            language="jsx"
          />
        </div>

        {/* Examples section */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
            Examples
          </h2>
          <ButtonExamples />
        </div>

        {/* Props section */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
            Props
          </h2>
          <PropsTable props={buttonData.props} />
        </div>

        {/* Usage Guidelines */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
            Usage Guidelines
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Do's */}
            <div className="border border-green-200 dark:border-green-900 rounded-lg overflow-hidden">
              <div className="bg-green-50 dark:bg-green-900/20 px-4 py-2 border-b border-green-200 dark:border-green-900">
                <h3 className="text-lg font-semibold text-green-800 dark:text-green-400">
                  Do
                </h3>
              </div>
              <div className="p-4">
                <ul className="space-y-3">
                  {buttonData.usage.dos.map((item, index) => (
                    <li key={index} className="flex">
                      <CheckIcon className="h-5 w-5 mr-2 flex-shrink-0 text-green-500" />
                      <span className="text-gray-800 dark:text-gray-200">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Don'ts */}
            <div className="border border-red-200 dark:border-red-900 rounded-lg overflow-hidden">
              <div className="bg-red-50 dark:bg-red-900/20 px-4 py-2 border-b border-red-200 dark:border-red-900">
                <h3 className="text-lg font-semibold text-red-800 dark:text-red-400">
                  Don't
                </h3>
              </div>
              <div className="p-4">
                <ul className="space-y-3">
                  {buttonData.usage.donts.map((item, index) => (
                    <li key={index} className="flex">
                      <XMarkIcon className="h-5 w-5 mr-2 flex-shrink-0 text-red-500" />
                      <span className="text-gray-800 dark:text-gray-200">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Accessibility section */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
            Accessibility
          </h2>
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-900 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-400 mb-3">
              WCAG 2.1 Compliance
            </h3>
            <ul className="space-y-3">
              {buttonData.accessibility.points.map((point, index) => (
                <li key={index} className="flex">
                  <CheckIcon className="h-5 w-5 mr-2 flex-shrink-0 text-blue-500" />
                  <span className="text-gray-800 dark:text-gray-200">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Related components section */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
            Related Components
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
            <li>
              <Link
                to="/components/dropdown"
                className="text-primary-600 dark:text-primary-400 hover:underline"
              >
                Dropdown
              </Link>
              {' - '}
              <span>For more complex actions or menus</span>
            </li>
            <li>
              <Link
                to="/components/modal"
                className="text-primary-600 dark:text-primary-400 hover:underline"
              >
                Modal
              </Link>
              {' - '}
              <span>Used with buttons to trigger dialogs</span>
            </li>
            <li>
              <Link
                to="/forms/input"
                className="text-primary-600 dark:text-primary-400 hover:underline"
              >
                Input
              </Link>
              {' - '}
              <span>Often used alongside buttons in forms</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ButtonPage;
