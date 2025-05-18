/**
 * Button component documentation data
 */
const buttonData = {
  // Component metadata
  title: 'Button',
  description:
    'Buttons allow users to trigger actions or events with a single click.',
  sourceCode:
    'https://github.com/voilajsx/uikit/blob/main/src/components/elements/Button.jsx',

  // Component API documentation
  props: [
    {
      name: 'variant',
      type: 'enum',
      default: 'primary',
      required: false,
      description: 'The visual style of the button.',
      values: ['primary', 'secondary', 'outline', 'ghost', 'link', 'danger'],
    },
    {
      name: 'size',
      type: 'enum',
      default: 'md',
      required: false,
      description: 'The size of the button.',
      values: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    {
      name: 'type',
      type: 'enum',
      default: 'button',
      required: false,
      description: 'The button type attribute.',
      values: ['button', 'submit', 'reset'],
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: false,
      required: false,
      description: 'Whether the button is disabled.',
    },
    {
      name: 'isLoading',
      type: 'boolean',
      default: false,
      required: false,
      description: 'Whether the button is in a loading state.',
    },
    {
      name: 'loadingText',
      type: 'string',
      required: false,
      description: 'Text to show when the button is in a loading state.',
      example: '<Button isLoading loadingText="Saving...">Save</Button>',
    },
    {
      name: 'leftIcon',
      type: 'ReactNode',
      required: false,
      description: 'Icon to display on the left side of the button text.',
      example: '<Button leftIcon={<PlusIcon />}>Add Item</Button>',
    },
    {
      name: 'rightIcon',
      type: 'ReactNode',
      required: false,
      description: 'Icon to display on the right side of the button text.',
      example: '<Button rightIcon={<ArrowRightIcon />}>Next</Button>',
    },
    {
      name: 'fullWidth',
      type: 'boolean',
      default: false,
      required: false,
      description:
        'If true, the button will take the full width of its container.',
    },
    {
      name: 'onClick',
      type: 'function',
      required: false,
      description: 'Callback fired when the button is clicked.',
      example:
        '<Button onClick={() => console.log("Clicked")}>Click Me</Button>',
    },
    {
      name: 'className',
      type: 'string',
      required: false,
      description: 'Additional CSS classes to apply to the button.',
    },
    {
      name: 'children',
      type: 'ReactNode',
      required: true,
      description: 'The content of the button.',
    },
  ],

  // Example code snippets
  examples: {
    // Basic variants
    variants: {
      title: 'Button Variants',
      description:
        'Buttons come in different variants to communicate the importance of actions.',
      code: `<div className="flex flex-wrap gap-4">
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="link">Link</Button>
    <Button variant="danger">Danger</Button>
  </div>`,
    },

    // Button sizes
    sizes: {
      title: 'Button Sizes',
      description:
        'Buttons are available in different sizes to fit various layouts.',
      code: `<div className="flex flex-wrap items-center gap-4">
    <Button size="xs">Extra Small</Button>
    <Button size="sm">Small</Button>
    <Button size="md">Medium</Button>
    <Button size="lg">Large</Button>
    <Button size="xl">Extra Large</Button>
  </div>`,
    },

    // Button states
    states: {
      title: 'Button States',
      description:
        'Buttons can have different states such as disabled and loading.',
      code: `<div className="flex flex-wrap gap-4">
    <Button>Normal</Button>
    <Button disabled>Disabled</Button>
    <Button isLoading>Loading</Button>
    <Button isLoading loadingText="Loading...">Submit</Button>
  </div>`,
    },

    // Buttons with icons
    icons: {
      title: 'Buttons with Icons',
      description:
        'Buttons can include icons on either side to enhance their meaning.',
      code: `<div className="flex flex-wrap gap-4">
    <Button leftIcon={<PlusIcon className="h-4 w-4" />}>Add Item</Button>
    <Button rightIcon={<ArrowRightIcon className="h-4 w-4" />}>Next</Button>
    <Button leftIcon={<DownloadIcon className="h-4 w-4" />} rightIcon={<ChevronDownIcon className="h-4 w-4" />}>
      Download
    </Button>
  </div>`,
    },

    // Full width button
    fullWidth: {
      title: 'Full Width Button',
      description: 'Buttons can take the full width of their container.',
      code: `<div className="w-full space-y-2">
    <Button fullWidth>Full Width Button</Button>
    <Button variant="outline" fullWidth>Full Width Outline</Button>
  </div>`,
    },

    // Button group
    buttonGroup: {
      title: 'Button Group',
      description:
        'Buttons can be grouped together to form a related set of actions.',
      code: `<div className="flex rounded-md shadow-sm">
    <Button className="rounded-r-none border-r-0">Left</Button>
    <Button className="rounded-none border-x-0">Middle</Button>
    <Button className="rounded-l-none border-l-0">Right</Button>
  </div>`,
    },
  },

  // Usage guidelines and best practices
  usage: {
    dos: [
      'Use primary buttons for main call-to-action',
      'Use secondary or outline buttons for less important actions',
      'Use danger buttons for destructive actions like delete or remove',
      'Include descriptive text that clearly indicates the action',
      'Maintain consistent button styling throughout the application',
      'Order buttons consistently (primary action on the right, cancel on the left)',
    ],
    donts: [
      "Don't use too many primary buttons on one page",
      "Don't use long button text that might wrap or overflow",
      "Don't use button when a link would be more appropriate",
      'Don\'t use vague text like "Click Here" or "Submit"',
      "Don't place buttons too close together, especially on mobile",
      "Don't change button colors for non-standard meanings",
    ],
  },

  // Accessibility considerations
  accessibility: {
    points: [
      'All buttons can be focused with the keyboard',
      'Buttons can be triggered with both Space and Enter keys',
      'Disabled buttons are excluded from the tab order',
      'Loading buttons remain focusable but show a loading indicator',
      'Color contrast meets WCAG 2.1 AA guidelines for all button variants',
      'Icon-only buttons should have aria-label to provide accessible names',
    ],
    examples: {
      ariaLabel: {
        title: 'Icon-only Button with aria-label',
        description:
          'Always add an aria-label to icon-only buttons to make them accessible.',
        code: `<Button aria-label="Close dialog" variant="ghost">
    <XMarkIcon className="h-5 w-5" />
  </Button>`,
      },
    },
  },
};

export default buttonData;
