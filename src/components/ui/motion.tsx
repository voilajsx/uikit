/**
 * Essential Animation System - Motion Components for VoilaJSX UIKit (FIXED)
 * @module @voilajsx/uikit
 * @file src/components/ui/motion.tsx
 */

import * as React from 'react';
import { forwardRef, useState, useEffect, useRef, useCallback } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// Type for HTML element tag names
type HTMLElementTagName = keyof React.JSX.IntrinsicElements;

/**
 * Animation transition configuration
 */
interface AnimationTransition {
  type?: 'spring' | 'tween';
  duration?: number;
  delay?: number;
  ease?: string | number[];
  damping?: number;
  stiffness?: number;
  mass?: number;
  repeat?: number;
  repeatType?: 'loop' | 'reverse' | 'mirror';
}

/**
 * Animation state configuration
 */
interface AnimationState {
  opacity?: number;
  x?: number | string | number[];
  y?: number | string | number[];
  scale?: number | number[];
  rotate?: number | number[];
  transformOrigin?: string;
  transition?: AnimationTransition;
}

/**
 * Animation presets for common use cases
 */
const AnimationPresets = {
  // Fade animations
  fadeIn: {
    initial: { opacity: 0 } as AnimationState,
    animate: { opacity: 1 } as AnimationState,
    exit: { opacity: 0 } as AnimationState,
  },
  fadeInUp: {
    initial: { opacity: 0, y: 20 } as AnimationState,
    animate: { opacity: 1, y: 0 } as AnimationState,
    exit: { opacity: 0, y: 20 } as AnimationState,
  },
  fadeInDown: {
    initial: { opacity: 0, y: -20 } as AnimationState,
    animate: { opacity: 1, y: 0 } as AnimationState,
    exit: { opacity: 0, y: -20 } as AnimationState,
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -20 } as AnimationState,
    animate: { opacity: 1, x: 0 } as AnimationState,
    exit: { opacity: 0, x: -20 } as AnimationState,
  },
  fadeInRight: {
    initial: { opacity: 0, x: 20 } as AnimationState,
    animate: { opacity: 1, x: 0 } as AnimationState,
    exit: { opacity: 0, x: 20 } as AnimationState,
  },
  fadeOut: {
    initial: { opacity: 1 } as AnimationState,
    animate: { opacity: 0 } as AnimationState,
    exit: { opacity: 0 } as AnimationState,
  },

  // Scale animations
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 } as AnimationState,
    animate: { opacity: 1, scale: 1 } as AnimationState,
    exit: { opacity: 0, scale: 0.8 } as AnimationState,
  },
  scaleInCenter: {
    initial: { opacity: 0, scale: 0.9, transformOrigin: 'center' } as AnimationState,
    animate: { opacity: 1, scale: 1, transformOrigin: 'center' } as AnimationState,
    exit: { opacity: 0, scale: 0.9, transformOrigin: 'center' } as AnimationState,
  },

  // Slide animations
  slideInUp: {
    initial: { y: '100%' } as AnimationState,
    animate: { y: 0 } as AnimationState,
    exit: { y: '100%' } as AnimationState,
  },
  slideInDown: {
    initial: { y: '-100%' } as AnimationState,
    animate: { y: 0 } as AnimationState,
    exit: { y: '-100%' } as AnimationState,
  },
  slideInLeft: {
    initial: { x: '-100%' } as AnimationState,
    animate: { x: 0 } as AnimationState,
    exit: { x: '-100%' } as AnimationState,
  },
  slideInRight: {
    initial: { x: '100%' } as AnimationState,
    animate: { x: 0 } as AnimationState,
    exit: { x: '100%' } as AnimationState,
  },

  // Special effects
  bounce: {
    initial: { opacity: 0, scale: 0.3 } as AnimationState,
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 300,
      }
    } as AnimationState,
    exit: { opacity: 0, scale: 0.3 } as AnimationState,
  },
  elastic: {
    initial: { opacity: 0, scale: 0 } as AnimationState,
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: 'spring',
        damping: 8,
        stiffness: 200,
      }
    } as AnimationState,
    exit: { opacity: 0, scale: 0 } as AnimationState,
  },
  rubberBand: {
    initial: { scale: 1 } as AnimationState,
    animate: { 
      scale: [1, 1.25, 0.75, 1.15, 0.95, 1],
      transition: { duration: 1 }
    } as AnimationState,
  },
  pulse: {
    initial: { scale: 1 } as AnimationState,
    animate: { 
      scale: [1, 1.05, 1],
      transition: { 
        duration: 2,
        repeat: Infinity,
        repeatType: 'loop' as const
      }
    } as AnimationState,
  },
  wobble: {
    initial: { rotate: 0 } as AnimationState,
    animate: {
      rotate: [0, -5, 5, -5, 0],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: 'loop' as const
      }
    } as AnimationState,
  },
  shake: {
    initial: { x: 0 } as AnimationState,
    animate: {
      x: [0, -10, 10, -10, 10, 0],
      transition: { duration: 0.5 }
    } as AnimationState,
  },
};

/**
 * Easing curves for smooth animations
 */
const EasingCurves = {
  easeInOut: [0.4, 0, 0.2, 1] as const,
  easeOut: [0, 0, 0.2, 1] as const,
  easeIn: [0.4, 0, 1, 1] as const,
  easeOutBack: [0.34, 1.56, 0.64, 1] as const,
  easeInBack: [0.36, 0, 0.66, -0.56] as const,
  easeOutBounce: [0.68, -0.55, 0.265, 1.55] as const,
  linear: [0, 0, 1, 1] as const,
};

/**
 * Animation timing presets
 */
const TimingPresets = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  slower: 0.8,
  slowest: 1.2,
} as const;

/**
 * CSS animation classes
 */
const animationVariants = cva(
  'transition-all',
  {
    variants: {
      duration: {
        fast: 'duration-200',
        normal: 'duration-300',
        slow: 'duration-500',
        slower: 'duration-700',
        slowest: 'duration-1000',
      },
      easing: {
        linear: 'ease-linear',
        in: 'ease-in',
        out: 'ease-out',
        inOut: 'ease-in-out',
      }
    },
    defaultVariants: {
      duration: 'normal',
      easing: 'inOut',
    }
  }
);

/**
 * Motion component props
 */
interface MotionProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onAnimationStart'> {
  /** HTML element to render */
  as?: HTMLElementTagName;
  /** Animation preset */
  preset?: keyof typeof AnimationPresets;
  /** Custom initial state */
  initial?: AnimationState;
  /** Custom animate state */
  animate?: AnimationState;
  /** Custom exit state */
  exit?: AnimationState;
  /** Animation duration */
  duration?: keyof typeof TimingPresets | number;
  /** Animation delay */
  delay?: number;
  /** Animation easing */
  easing?: keyof typeof EasingCurves;
  /** Trigger animation when in view */
  triggerInView?: boolean;
  /** Animation repeat count */
  repeat?: number | 'infinite';
  /** Repeat type */
  repeatType?: 'loop' | 'reverse' | 'mirror';
  /** Spring physics */
  spring?: {
    damping?: number;
    stiffness?: number;
    mass?: number;
  };
  /** Gesture animations */
  whileHover?: AnimationState;
  whileTap?: AnimationState;
  whileFocus?: AnimationState;
  /** Animation callbacks */
  onAnimationStart?: () => void;
  onAnimationComplete?: () => void;
  /** Children */
  children: React.ReactNode;
}

/**
 * Custom hook for intersection observer
 */
const useInView = (threshold = 0.1): [React.RefObject<HTMLElement | null>, boolean] => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );

    const currentElement = ref.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return [ref, inView];
};

/**
 * Convert AnimationState to CSS styles
 */
const animationStateToCSS = (state: AnimationState): React.CSSProperties => {
  const styles: React.CSSProperties = {};
  
  if (state.opacity !== undefined) styles.opacity = state.opacity;
  if (state.transformOrigin) styles.transformOrigin = state.transformOrigin;
  
  const transforms: string[] = [];
  
  if (state.x !== undefined) {
    if (Array.isArray(state.x)) {
      // For keyframe animations, use the first value
      transforms.push(`translateX(${typeof state.x[0] === 'number' ? `${state.x[0]}px` : state.x[0]})`);
    } else {
      transforms.push(`translateX(${typeof state.x === 'number' ? `${state.x}px` : state.x})`);
    }
  }
  if (state.y !== undefined) {
    if (Array.isArray(state.y)) {
      // For keyframe animations, use the first value
      transforms.push(`translateY(${typeof state.y[0] === 'number' ? `${state.y[0]}px` : state.y[0]})`);
    } else {
      transforms.push(`translateY(${typeof state.y === 'number' ? `${state.y}px` : state.y})`);
    }
  }
  if (state.scale !== undefined) {
    if (Array.isArray(state.scale)) {
      // For keyframe animations, use the first value
      transforms.push(`scale(${state.scale[0]})`);
    } else {
      transforms.push(`scale(${state.scale})`);
    }
  }
  if (state.rotate !== undefined) {
    if (Array.isArray(state.rotate)) {
      // For keyframe animations, use the first value
      transforms.push(`rotate(${state.rotate[0]}deg)`);
    } else {
      transforms.push(`rotate(${state.rotate}deg)`);
    }
  }
  
  if (transforms.length > 0) {
    styles.transform = transforms.join(' ');
  }
  
  return styles;
};

/**
 * Motion component with CSS animations
 */
const Motion = forwardRef<HTMLElement, MotionProps>(({
  as: Component = 'div',
  preset,
  initial,
  animate,
  exit,
  duration = 'normal',
  delay = 0,
  easing = 'easeInOut',
  triggerInView = false,
  repeat = 1,
  repeatType = 'loop',
  spring,
  whileHover,
  whileTap,
  whileFocus,
  onAnimationStart,
  onAnimationComplete,
  className,
  style,
  children,
  ...props
}, ref) => {
  const [viewRef, inView] = useInView();
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  // Merge refs
  const mergedRef = useCallback((node: HTMLElement | null) => {
    if (node) {
      if (ref) {
        if (typeof ref === 'function') ref(node);
        else ref.current = node;
      }
      elementRef.current = node;
      if (triggerInView) {
        (viewRef as React.MutableRefObject<HTMLElement | null>).current = node;
      }
    }
  }, [ref, viewRef, triggerInView]);

  // Get animation preset
  const animationPreset = preset ? AnimationPresets[preset] : null;

  // Determine if animation should trigger
  const shouldAnimate = triggerInView ? inView && !hasAnimated : true;

  // Apply animations
  useEffect(() => {
    if (!elementRef.current || !shouldAnimate) return;

    const element = elementRef.current;

    const startAnimation = () => {
      setIsAnimating(true);
      onAnimationStart?.();

      // Apply initial styles
      const initialStyles = {
        ...(animationPreset?.initial || {}),
        ...(initial || {}),
      };

      const initialCSS = animationStateToCSS(initialStyles);
      Object.assign(element.style, initialCSS);

      // Apply animate styles with transition
      const animateStyles = {
        ...(animationPreset?.animate || {}),
        ...(animate || {}),
      };

      const durationValue = typeof duration === 'number' ? duration : TimingPresets[duration];
      const easingValue = EasingCurves[easing];

      element.style.transition = `all ${durationValue}s cubic-bezier(${easingValue.join(',')})`;
      
      if (delay > 0) {
        element.style.transitionDelay = `${delay}s`;
      }

      // Trigger reflow to ensure initial styles are applied
      element.offsetHeight;

      // Apply animation styles
      requestAnimationFrame(() => {
        const animateCSS = animationStateToCSS(animateStyles);
        Object.assign(element.style, animateCSS);
      });

      // Handle animation completion
      const handleTransitionEnd = () => {
        setIsAnimating(false);
        setHasAnimated(true);
        onAnimationComplete?.();
        element.removeEventListener('transitionend', handleTransitionEnd);
      };

      element.addEventListener('transitionend', handleTransitionEnd);

      // Fallback timeout
      const timeoutId = setTimeout(handleTransitionEnd, (durationValue + delay) * 1000 + 100);

      return () => {
        clearTimeout(timeoutId);
        element.removeEventListener('transitionend', handleTransitionEnd);
      };
    };

    // Handle repeat animations
    if (repeat === 'infinite' || (typeof repeat === 'number' && repeat > 1)) {
      const runAnimation = () => {
        startAnimation();
        
        const nextDelay = (typeof duration === 'number' ? duration : TimingPresets[duration]) * 1000 + delay * 1000;
        
        if (repeat === 'infinite') {
          setTimeout(runAnimation, nextDelay);
        } else if (typeof repeat === 'number' && repeat > 1) {
          for (let i = 1; i < repeat; i++) {
            setTimeout(runAnimation, nextDelay * i);
          }
        }
      };
      
      runAnimation();
    } else {
      return startAnimation();
    }
  }, [shouldAnimate, animationPreset, initial, animate, duration, delay, easing, repeat, onAnimationStart, onAnimationComplete]);

  // Apply gesture styles
  const gestureStyles: React.CSSProperties = {};
  
  if (whileHover || whileTap || whileFocus) {
    gestureStyles.cursor = 'pointer';
  }

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    if (whileHover) {
      const hoverCSS = animationStateToCSS(whileHover);
      Object.assign(e.currentTarget.style, hoverCSS);
    }
    props.onMouseEnter?.(e);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    if (whileHover && animate) {
      const animateCSS = animationStateToCSS(animate);
      Object.assign(e.currentTarget.style, animateCSS);
    }
    props.onMouseLeave?.(e);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLElement>) => {
    if (whileTap) {
      const tapCSS = animationStateToCSS(whileTap);
      Object.assign(e.currentTarget.style, tapCSS);
    }
    props.onMouseDown?.(e);
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLElement>) => {
    if (whileTap && animate) {
      const animateCSS = animationStateToCSS(animate);
      Object.assign(e.currentTarget.style, animateCSS);
    }
    props.onMouseUp?.(e);
  };

  const handleFocus = (e: React.FocusEvent<HTMLElement>) => {
    if (whileFocus) {
      const focusCSS = animationStateToCSS(whileFocus);
      Object.assign(e.currentTarget.style, focusCSS);
    }
    props.onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLElement>) => {
    if (whileFocus && animate) {
      const animateCSS = animationStateToCSS(animate);
      Object.assign(e.currentTarget.style, animateCSS);
    }
    props.onBlur?.(e);
  };

  return React.createElement(
    Component,
    {
      ...props,
      ref: mergedRef,
      className: cn(
        animationVariants({ 
          duration: typeof duration === 'string' ? duration : 'normal',
          easing: easing === 'easeInOut' ? 'inOut' : easing === 'easeIn' ? 'in' : easing === 'easeOut' ? 'out' : 'linear'
        }),
        className
      ),
      style: {
        ...gestureStyles,
        ...style,
      },
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onMouseDown: handleMouseDown,
      onMouseUp: handleMouseUp,
      onFocus: handleFocus,
      onBlur: handleBlur,
    },
    children
  );
});

Motion.displayName = 'Motion';

/**
 * Stagger container for animating multiple children
 */
interface StaggerProps extends React.HTMLAttributes<HTMLElement> {
  /** Stagger delay between children */
  stagger?: number;
  /** Children animation preset */
  childPreset?: keyof typeof AnimationPresets;
  /** Custom child animation */
  childAnimation?: {
    initial?: AnimationState;
    animate?: AnimationState;
  };
  /** Animation duration */
  duration?: keyof typeof TimingPresets;
  /** Trigger when in view */
  triggerInView?: boolean;
  /** Container element */
  as?: HTMLElementTagName;
  children: React.ReactNode;
}

const Stagger = forwardRef<HTMLElement, StaggerProps>(({
  stagger = 0.1,
  childPreset = 'fadeInUp',
  childAnimation,
  duration = 'normal',
  triggerInView = true,
  as: Component = 'div',
  className,
  children,
  ...props
}, ref) => {
  const [viewRef, inView] = useInView();
  const [hasAnimated, setHasAnimated] = useState(false);

  const shouldAnimate = triggerInView ? inView && !hasAnimated : true;

  const childrenArray = React.Children.toArray(children);

  useEffect(() => {
    if (shouldAnimate) {
      setHasAnimated(true);
    }
  }, [shouldAnimate]);

  return React.createElement(
    Component,
    {
      ...props,
      ref: triggerInView ? viewRef : ref,
      className,
    },
    childrenArray.map((child, index) => (
      <Motion
        key={index}
        preset={childPreset}
        initial={childAnimation?.initial}
        animate={childAnimation?.animate}
        duration={duration}
        delay={shouldAnimate ? index * stagger : 0}
        triggerInView={false}
      >
        {child}
      </Motion>
    ))
  );
});

Stagger.displayName = 'Stagger';

/**
 * Presence component for exit animations
 */
interface PresenceProps {
  /** Show/hide children */
  show: boolean;
  /** Exit animation preset */
  exitPreset?: keyof typeof AnimationPresets;
  /** Custom exit animation */
  exitAnimation?: AnimationState;
  /** Animation duration */
  duration?: keyof typeof TimingPresets;
  /** Callback when exit animation completes */
  onExitComplete?: () => void;
  children: React.ReactNode;
}

const Presence: React.FC<PresenceProps> = ({
  show,
  exitPreset = 'fadeOut',
  exitAnimation,
  duration = 'normal',
  onExitComplete,
  children,
}) => {
  const [shouldRender, setShouldRender] = useState(show);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (show) {
      setShouldRender(true);
      setIsExiting(false);
    } else if (shouldRender) {
      setIsExiting(true);
    }
  }, [show, shouldRender]);

  const handleExitComplete = () => {
    setShouldRender(false);
    setIsExiting(false);
    onExitComplete?.();
  };

  if (!shouldRender) return null;

  return (
    <Motion
      preset={isExiting ? exitPreset : 'fadeIn'}
      animate={isExiting ? exitAnimation : undefined}
      duration={duration}
      onAnimationComplete={isExiting ? handleExitComplete : undefined}
    >
      {children}
    </Motion>
  );
};

/**
 * Auto-animating counter component
 */
interface CounterProps {
  /** Target number */
  to: number;
  /** Starting number */
  from?: number;
  /** Animation duration */
  duration?: number;
  /** Number formatting */
  format?: (value: number) => string;
  /** Trigger when in view */
  triggerInView?: boolean;
  /** Additional props */
  className?: string;
}

const Counter: React.FC<CounterProps> = ({
  to,
  from = 0,
  duration = 2,
  format = (value) => Math.round(value).toString(),
  triggerInView = true,
  className,
}) => {
  const [current, setCurrent] = useState(from);
  const [viewRef, inView] = useInView();
  const [hasAnimated, setHasAnimated] = useState(false);

  const shouldAnimate = triggerInView ? inView && !hasAnimated : true;

  useEffect(() => {
    if (!shouldAnimate) return;

    setHasAnimated(true);
    
    const startTime = Date.now();
    const difference = to - from;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      
      // Easing function (ease-out)
      const eased = 1 - Math.pow(1 - progress, 3);
      
      setCurrent(from + difference * eased);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [shouldAnimate, to, from, duration]);

  return (
    <span ref={triggerInView ? viewRef : undefined} className={className}>
      {format(current)}
    </span>
  );
};

/**
 * Typewriter effect component
 */
interface TypewriterProps {
  /** Text to type */
  text: string;
  /** Typing speed (characters per second) */
  speed?: number;
  /** Delay before starting */
  delay?: number;
  /** Show cursor */
  showCursor?: boolean;
  /** Cursor character */
  cursor?: string;
  /** Loop the animation */
  loop?: boolean;
  /** Trigger when in view */
  triggerInView?: boolean;
  /** Callback when complete */
  onComplete?: () => void;
  /** Additional props */
  className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  speed = 50,
  delay = 0,
  showCursor = true,
  cursor = '|',
  loop = false,
  triggerInView = true,
  onComplete,
  className,
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursorState, setShowCursorState] = useState(true);
  const [viewRef, inView] = useInView();
  const [hasAnimated, setHasAnimated] = useState(false);

  const shouldAnimate = triggerInView ? inView && !hasAnimated : true;

  // Cursor blinking effect
  useEffect(() => {
    if (!showCursor) return;
    
    const interval = setInterval(() => {
      setShowCursorState(prev => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, [showCursor]);

  // Typing effect
  useEffect(() => {
    if (!shouldAnimate) return;

    setHasAnimated(true);

    const timeout = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(prev => prev + 1);
      } else {
        onComplete?.();
        if (loop) {
          setTimeout(() => {
            setCurrentIndex(0);
            setDisplayText('');
            setHasAnimated(false);
          }, 2000);
        }
      }
    }, currentIndex === 0 ? delay : 1000 / speed);

    return () => clearTimeout(timeout);
  }, [currentIndex, text, speed, delay, loop, shouldAnimate, onComplete]);

  return (
    <span ref={triggerInView ? viewRef : undefined} className={className}>
      {displayText}
      {showCursor && (
        <span className={cn('inline-block', showCursorState ? 'opacity-100' : 'opacity-0')}>
          {cursor}
        </span>
      )}
    </span>
  );
};

/**
 * Scroll-triggered reveal component
 */
interface RevealProps {
  /** Animation preset */
  preset?: keyof typeof AnimationPresets;
  /** Custom animation */
  animation?: {
    initial?: AnimationState;
    animate?: AnimationState;
  };
  /** Animation duration */
  duration?: keyof typeof TimingPresets;
  /** Animation delay */
  delay?: number;
  /** Intersection threshold */
  threshold?: number;
  /** Animate only once */
  once?: boolean;
  /** Container element */
  as?: HTMLElementTagName;
  /** Additional props */
  className?: string;
  children: React.ReactNode;
}

const Reveal: React.FC<RevealProps> = ({
  preset = 'fadeInUp',
  animation,
  duration = 'normal',
  delay = 0,
  threshold = 0.1,
  once = true,
  as = 'div',
  className,
  children,
}) => {
  return (
    <Motion
      as={as}
      preset={preset}
      initial={animation?.initial}
      animate={animation?.animate}
      duration={duration}
      delay={delay}
      triggerInView
      className={className}
    >
      {children}
    </Motion>
  );
};

/**
 * Page transition component
 */
interface PageTransitionProps {
  /** Page key for transitions */
  pageKey: string;
  /** Transition preset */
  preset?: keyof typeof AnimationPresets;
  /** Animation duration */
  duration?: keyof typeof TimingPresets;
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({
  pageKey,
  preset = 'fadeIn',
  duration = 'normal',
  children,
}) => {
  return (
    <Motion
      key={pageKey}
      preset={preset}
      duration={duration}
    >
      {children}
    </Motion>
  );
};

// Remove duplicate export block since everything is exported at function level
export {
  Motion,
  Stagger,
  Presence,
  Counter,
  Typewriter,
  Reveal,
  PageTransition,
  AnimationPresets,
  EasingCurves,
  TimingPresets,
  useInView,
  type AnimationState,
  type AnimationTransition,
  type MotionProps,
};