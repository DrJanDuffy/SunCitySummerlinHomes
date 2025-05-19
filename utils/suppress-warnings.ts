
/**
 * Utility to suppress common browser extension warnings
 * Particularly focused on Dashlane extension warnings
 */

export function suppressExtensionWarnings() {
  if (typeof window === 'undefined') return () => {};
  
  // Original console methods
  const originalConsoleError = console.error;
  const originalConsoleWarn = console.warn;
  
  // Filter for Dashlane related warnings
  console.error = (...args: any[]) => {
    // Skip Dashlane related warnings
    if (
      args[0]?.includes?.('data-dashlane') || 
      (typeof args[0] === 'string' && args[0].includes('Warning: Extra attributes from the server')) ||
      (typeof args[0] === 'string' && args[0].includes('dashlane'))
    ) {
      return;
    }
    originalConsoleError.apply(console, args);
  };
  
  console.warn = (...args: any[]) => {
    // Skip Dashlane and certain React warnings
    if (
      args[0]?.includes?.('data-dashlane') || 
      (typeof args[0] === 'string' && args[0].includes('Warning: Extra attributes from the server')) ||
      (typeof args[0] === 'string' && args[0].includes('dashlane'))
    ) {
      return;
    }
    originalConsoleWarn.apply(console, args);
  };
  
  // Return cleanup function
  return () => {
    console.error = originalConsoleError;
    console.warn = originalConsoleWarn;
  };
}

/**
 * Handles Dashlane-specific DOM manipulations
 * Call this function to clear Dashlane attributes that may cause hydration issues
 */
export function cleanDashlaneAttributes() {
  if (typeof window === 'undefined') return;
  
  // Run after DOM is fully loaded
  setTimeout(() => {
    try {
      // Remove all data-dashlane attributes
      document.querySelectorAll('[data-dashlane-shadowhost]').forEach(el => {
        el.removeAttribute('data-dashlane-shadowhost');
      });
      
      // Remove other potential Dashlane attributes
      const dashlaneAttrs = ['data-dashlane-rid', 'data-form-type', 'data-dashlane-label'];
      dashlaneAttrs.forEach(attr => {
        document.querySelectorAll(`[${attr}]`).forEach(el => {
          el.removeAttribute(attr);
        });
      });
    } catch (e) {
      // Silently fail if there's an error
    }
  }, 500);
}
