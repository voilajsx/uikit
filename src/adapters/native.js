/**
 * @fileoverview Native adapter for @voilajsx/uikit
 * @description React Native components and StyleSheet objects for mobile platforms
 * @package @voilajsx/uikit
 * @file /src/adapters/native.js
 */

// Conditional import - only available in React Native environment
let Platform = null;
try {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    Platform = require('react-native').Platform;
  }
} catch (error) {
  // React Native not available, Platform will remain null
}

/**
 * Theme colors for React Native (matches your CSS variables)
 */
const colors = {
  background: '#ffffff',
  foreground: '#0f172a',
  card: '#ffffff',
  cardForeground: '#0f172a',
  primary: '#2563eb',
  primaryForeground: '#f8fafc',
  secondary: '#f1f5f9',
  secondaryForeground: '#0f172a',
  muted: '#f1f5f9',
  mutedForeground: '#64748b',
  accent: '#f1f5f9',
  accentForeground: '#0f172a',
  destructive: '#dc2626',
  destructiveForeground: '#f8fafc',
  border: '#e2e8f0',
  input: '#e2e8f0',
  ring: '#2563eb',
};

/**
 * Native platform adapter - returns React Native components and StyleSheet objects
 * @param {string} component - Component type
 * @param {Object} [props={}] - Component props
 * @returns {Object} Component and styles for React Native platform
 */
export function nativeAdapter(component, props = {}) {
  const { variant = 'default', size = 'default', disabled = false } = props;

  const adapters = {
    // Button component
    button: {
      component: 'TouchableOpacity',
      baseStyles: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        paddingHorizontal: 16,
        paddingVertical: 8,
        opacity: disabled ? 0.5 : 1,
      },
      variants: {
        default: {
          backgroundColor: colors.primary,
        },
        destructive: {
          backgroundColor: colors.destructive,
        },
        outline: {
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: colors.border,
        },
        secondary: {
          backgroundColor: colors.secondary,
        },
        ghost: {
          backgroundColor: 'transparent',
        },
        link: {
          backgroundColor: 'transparent',
        },
      },
      sizes: {
        default: {
          height: 36,
          paddingHorizontal: 16,
        },
        sm: {
          height: 32,
          paddingHorizontal: 12,
        },
        lg: {
          height: 40,
          paddingHorizontal: 32,
        },
        icon: {
          height: 36,
          width: 36,
          paddingHorizontal: 0,
        },
      },
      textStyles: {
        default: {
          color: colors.primaryForeground,
          fontSize: 14,
          fontWeight: '500',
          textAlign: 'center',
        },
        destructive: {
          color: colors.destructiveForeground,
        },
        outline: {
          color: colors.foreground,
        },
        secondary: {
          color: colors.secondaryForeground,
        },
        ghost: {
          color: colors.foreground,
        },
        link: {
          color: colors.primary,
          textDecorationLine: 'underline',
        },
      },
    },

    // Text Input component
    input: {
      component: 'TextInput',
      baseStyles: {
        height: 36,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 6,
        paddingHorizontal: 12,
        paddingVertical: 4,
        fontSize: 14,
        color: colors.foreground,
        backgroundColor: 'transparent',
      },
    },

    // Card component
    card: {
      component: 'View',
      baseStyles: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.border,
        backgroundColor: colors.card,
        ...(Platform?.select({
          ios: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.1,
            shadowRadius: 2,
          },
          android: {
            elevation: 2,
          },
        }) || {}),
      },
    },

    // Container component
    container: {
      component: 'View',
      baseStyles: {
        flex: 1,
        paddingHorizontal: 16,
      },
      sizes: {
        sm: { maxWidth: 640 },
        default: { maxWidth: 1024 },
        lg: { maxWidth: 1280 },
        xl: { maxWidth: 1536 },
        full: { maxWidth: '100%' },
      },
    },

    // Layout components
    header: {
      component: 'View',
      baseStyles: {
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        backgroundColor: colors.background,
        ...(Platform?.select({
          ios: {
            paddingTop: 44, // Status bar height
          },
          android: {
            paddingTop: 24, // Status bar height
          },
        }) || {}),
      },
    },

    footer: {
      component: 'View',
      baseStyles: {
        borderTopWidth: 1,
        borderTopColor: colors.border,
        backgroundColor: colors.background,
      },
    },

    sidebar: {
      component: 'View',
      baseStyles: {
        width: 256,
        borderRightWidth: 1,
        borderRightColor: colors.border,
        backgroundColor: colors.background,
      },
    },

    // Text component
    text: {
      component: 'Text',
      baseStyles: {
        fontSize: 14,
        color: colors.foreground,
      },
      variants: {
        default: {
          color: colors.foreground,
        },
        muted: {
          color: colors.mutedForeground,
        },
        destructive: {
          color: colors.destructive,
        },
      },
    },

    // Generic view
    view: {
      component: 'View',
      baseStyles: {},
    },

    // ScrollView for scrollable content
    scroll: {
      component: 'ScrollView',
      baseStyles: {
        flex: 1,
      },
    },
  };

  const config = adapters[component];
  if (!config) {
    console.warn(`Native adapter: Unknown component "${component}"`);
    return { component: 'View', styles: {} };
  }

  // Build styles
  let styles = { ...config.baseStyles };

  if (config.variants && variant && config.variants[variant]) {
    styles = { ...styles, ...config.variants[variant] };
  }

  if (config.sizes && size && config.sizes[size]) {
    styles = { ...styles, ...config.sizes[size] };
  }

  // Return text styles for button text
  let textStyles = null;
  if (config.textStyles) {
    textStyles = { ...config.textStyles.default };
    if (config.textStyles[variant]) {
      textStyles = { ...textStyles, ...config.textStyles[variant] };
    }
  }

  return {
    component: config.component,
    styles,
    textStyles, // For button text styling
  };
}

/**
 * Get native-specific component and styles
 * @param {string} component - Component type
 * @param {Object} props - Component props
 * @returns {Object} Native component configuration
 */
export const getNativeComponent = (component, props) =>
  nativeAdapter(component, props);
