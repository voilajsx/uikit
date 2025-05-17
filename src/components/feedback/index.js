/**
 * Feedback Components
 *
 * This file exports all feedback-related components from the @voilajsx/uikit.
 * These components provide visual feedback to users about the status of their
 * actions or system events, including:
 *
 * - Alert: Displays important messages like warnings, errors, or information
 * - Toast: Shows brief, temporary notifications
 * - Spinner: Indicates loading or processing status
 * - Progress: Shows completion status of tasks with a visual bar
 * - Skeleton: Displays content placeholders during loading
 *
 * @module components/feedback
 */

// Status and notification components
export { default as Alert } from './Alert';
export { default as Toast } from './Toast';

// Loading and progress indicators
export { default as Spinner } from './Spinner';
export { default as Progress } from './Progress';
export { default as Skeleton } from './Skeleton';
