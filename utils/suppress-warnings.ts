/**
 * Utility to suppress warnings from browser extensions like Dashlane
 * that inject elements into the DOM causing React hydration errors
 */

export function suppressExtensionWarnings(): () => void {
  if (typeof window === 'undefined') return () => {};

  // Store original console.error function
  const originalConsoleError = console.error;

  // Create a filter for browser extension warnings
  console.error = function(...args: any[]) {
    // Filter out known Dashlane warnings
    const suppressPatterns = [
      'Extra attributes from the server',
      'data-dashlane-',
      'Hydration failed because',
      'mismatched with the server',
      'There was an error while hydrating'
    ];

    // Check if the error message contains any of the patterns
    const shouldSuppress = suppressPatterns.some(pattern => 
      args.some(arg => typeof arg === 'string' && arg.includes(pattern))
    );

    // Only log errors that don't match our suppression patterns
    if (!shouldSuppress) {
      originalConsoleError.apply(console, args);
    }
  };

  // Add attribute to document to indicate we're handling browser extensions
  document.documentElement.setAttribute('data-extension-warnings-suppressed', 'true');

  // Return cleanup function
  return () => {
    console.error = originalConsoleError;
    document.documentElement.removeAttribute('data-extension-warnings-suppressed');
  };
}