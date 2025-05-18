import React from 'react';
import {
  PlusIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  ArrowDownTrayIcon as DownloadIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@voilajsx/uikit'; // Import the actual Button component
import ComponentExample from '../common/ComponentExample';
import buttonData from '../../data/componentData/buttonData';

/**
 * Component that showcases all Button examples
 */
const ButtonExamples = () => {
  return (
    <>
      {/* Variants example */}
      <ComponentExample
        title={buttonData.examples.variants.title}
        description={buttonData.examples.variants.description}
        code={buttonData.examples.variants.code}
      >
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="danger">Danger</Button>
        </div>
      </ComponentExample>

      {/* Sizes example */}
      <ComponentExample
        title={buttonData.examples.sizes.title}
        description={buttonData.examples.sizes.description}
        code={buttonData.examples.sizes.code}
      >
        <div className="flex flex-wrap items-center gap-4">
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
        </div>
      </ComponentExample>

      {/* States example */}
      <ComponentExample
        title={buttonData.examples.states.title}
        description={buttonData.examples.states.description}
        code={buttonData.examples.states.code}
      >
        <div className="flex flex-wrap gap-4">
          <Button>Normal</Button>
          <Button disabled>Disabled</Button>
          <Button isLoading>Loading</Button>
          <Button isLoading loadingText="Loading...">
            Submit
          </Button>
        </div>
      </ComponentExample>

      {/* Icons example */}
      <ComponentExample
        title={buttonData.examples.icons.title}
        description={buttonData.examples.icons.description}
        code={buttonData.examples.icons.code}
      >
        <div className="flex flex-wrap gap-4">
          <Button leftIcon={<PlusIcon className="h-4 w-4" />}>Add Item</Button>
          <Button rightIcon={<ArrowRightIcon className="h-4 w-4" />}>
            Next
          </Button>
          <Button
            leftIcon={<DownloadIcon className="h-4 w-4" />}
            rightIcon={<ChevronDownIcon className="h-4 w-4" />}
          >
            Download
          </Button>
        </div>
      </ComponentExample>

      {/* Full width example */}
      <ComponentExample
        title={buttonData.examples.fullWidth.title}
        description={buttonData.examples.fullWidth.description}
        code={buttonData.examples.fullWidth.code}
      >
        <div className="w-full space-y-2">
          <Button fullWidth>Full Width Button</Button>
          <Button variant="outline" fullWidth>
            Full Width Outline
          </Button>
        </div>
      </ComponentExample>

      {/* Button group example */}
      <ComponentExample
        title={buttonData.examples.buttonGroup.title}
        description={buttonData.examples.buttonGroup.description}
        code={buttonData.examples.buttonGroup.code}
      >
        <div className="flex rounded-md shadow-sm">
          <Button className="rounded-r-none">Left</Button>
          <Button className="rounded-none border-x-0">Middle</Button>
          <Button className="rounded-l-none">Right</Button>
        </div>
      </ComponentExample>

      {/* Accessibility example */}
      <ComponentExample
        title={buttonData.accessibility.examples.ariaLabel.title}
        description={buttonData.accessibility.examples.ariaLabel.description}
        code={buttonData.accessibility.examples.ariaLabel.code}
      >
        <Button aria-label="Close dialog" variant="ghost">
          <XMarkIcon className="h-5 w-5" />
        </Button>
      </ComponentExample>
    </>
  );
};

export default ButtonExamples;
