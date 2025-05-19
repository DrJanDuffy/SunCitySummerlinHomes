
/**
 * Safely check if code is running in browser environment
 */
export const isBrowser = (): boolean => {
  return typeof window !== 'undefined';
};

/**
 * Safely get window object
 */
export const getWindow = (): Window | undefined => {
  return isBrowser() ? window : undefined;
};

/**
 * Safely get document object
 */
export const getDocument = (): Document | undefined => {
  return isBrowser() ? document : undefined;
};
