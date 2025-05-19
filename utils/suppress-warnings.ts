
/**
 * Suppresses common third-party extension warnings
 * Handles Dashlane and other browser extension warnings
 */
export function suppressExtensionWarnings() {
  if (typeof window !== 'undefined') {
    // Store the original console.error
    const originalError = console.error;
    
    // Override console.error to filter out specific warnings
    console.error = function(...args) {
      // Filter out Dashlane warnings
      if (args[0]?.includes?.('Warning: Extra attributes from the server:') && 
          args[1]?.includes?.('data-dashlane-shadowhost')) {
        return;
      }
      
      // Pass through other errors
      originalError.apply(console, args);
    };
    
    // Cleanup function
    return () => {
      console.error = originalError;
    };
  }
  
  return () => {};
}
