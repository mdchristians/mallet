/**
 * Detect ssr
 */
export const canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

/**
 * Generate temp id
 */
export const genId = () => Math.random().toString(36).substr(2, 9);

/**
 * No-op function.
 */
export function noop() {}
