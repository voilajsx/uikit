/**
 * Essential Animation System - Motion Components for VoilaJSX UIKit (FIXED)
 * @module @voilajsx/uikit
 * @file src/components/ui/motion.tsx
 */
import * as React from 'react';
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
declare const AnimationPresets: {
    fadeIn: {
        initial: AnimationState;
        animate: AnimationState;
        exit: AnimationState;
    };
    fadeInUp: {
        initial: AnimationState;
        animate: AnimationState;
        exit: AnimationState;
    };
    fadeInDown: {
        initial: AnimationState;
        animate: AnimationState;
        exit: AnimationState;
    };
    fadeInLeft: {
        initial: AnimationState;
        animate: AnimationState;
        exit: AnimationState;
    };
    fadeInRight: {
        initial: AnimationState;
        animate: AnimationState;
        exit: AnimationState;
    };
    fadeOut: {
        initial: AnimationState;
        animate: AnimationState;
        exit: AnimationState;
    };
    scaleIn: {
        initial: AnimationState;
        animate: AnimationState;
        exit: AnimationState;
    };
    scaleInCenter: {
        initial: AnimationState;
        animate: AnimationState;
        exit: AnimationState;
    };
    slideInUp: {
        initial: AnimationState;
        animate: AnimationState;
        exit: AnimationState;
    };
    slideInDown: {
        initial: AnimationState;
        animate: AnimationState;
        exit: AnimationState;
    };
    slideInLeft: {
        initial: AnimationState;
        animate: AnimationState;
        exit: AnimationState;
    };
    slideInRight: {
        initial: AnimationState;
        animate: AnimationState;
        exit: AnimationState;
    };
    bounce: {
        initial: AnimationState;
        animate: AnimationState;
        exit: AnimationState;
    };
    elastic: {
        initial: AnimationState;
        animate: AnimationState;
        exit: AnimationState;
    };
    rubberBand: {
        initial: AnimationState;
        animate: AnimationState;
    };
    pulse: {
        initial: AnimationState;
        animate: AnimationState;
    };
    wobble: {
        initial: AnimationState;
        animate: AnimationState;
    };
    shake: {
        initial: AnimationState;
        animate: AnimationState;
    };
};
/**
 * Easing curves for smooth animations
 */
declare const EasingCurves: {
    easeInOut: readonly [0.4, 0, 0.2, 1];
    easeOut: readonly [0, 0, 0.2, 1];
    easeIn: readonly [0.4, 0, 1, 1];
    easeOutBack: readonly [0.34, 1.56, 0.64, 1];
    easeInBack: readonly [0.36, 0, 0.66, -0.56];
    easeOutBounce: readonly [0.68, -0.55, 0.265, 1.55];
    linear: readonly [0, 0, 1, 1];
};
/**
 * Animation timing presets
 */
declare const TimingPresets: {
    readonly fast: 0.2;
    readonly normal: 0.3;
    readonly slow: 0.5;
    readonly slower: 0.8;
    readonly slowest: 1.2;
};
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
declare const useInView: (threshold?: number) => [React.RefObject<HTMLElement | null>, boolean];
/**
 * Motion component with CSS animations
 */
declare const Motion: React.ForwardRefExoticComponent<MotionProps & React.RefAttributes<HTMLElement>>;
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
declare const Stagger: React.ForwardRefExoticComponent<StaggerProps & React.RefAttributes<HTMLElement>>;
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
declare const Presence: React.FC<PresenceProps>;
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
declare const Counter: React.FC<CounterProps>;
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
declare const Typewriter: React.FC<TypewriterProps>;
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
declare const Reveal: React.FC<RevealProps>;
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
declare const PageTransition: React.FC<PageTransitionProps>;
export { Motion, Stagger, Presence, Counter, Typewriter, Reveal, PageTransition, AnimationPresets, EasingCurves, TimingPresets, useInView, type AnimationState, type AnimationTransition, type MotionProps, };
//# sourceMappingURL=motion.d.ts.map