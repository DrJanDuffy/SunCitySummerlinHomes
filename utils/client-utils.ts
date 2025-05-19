
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
/**
 * Enhanced fetch with better error handling
 * @param url The URL to fetch
 * @param options Fetch options
 * @returns Promise with the fetched data
 */
export const fetchWithErrorHandling = async (url: string, options?: RequestInit) => {
  try {
    const response = await fetch(url, options);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    // Rethrow to allow component-level handling
    throw error;
  }
};

/**
 * Safely parse JSON with error handling
 * @param jsonString The JSON string to parse
 * @returns The parsed object or null on error
 */
export const safeJsonParse = (jsonString: string) => {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error('JSON parse error:', error);
    return null;
  }
};
