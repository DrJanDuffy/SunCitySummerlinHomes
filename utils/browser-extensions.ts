
/**
 * Utility to handle browser extensions like Dashlane
 * This helps prevent React hydration warnings from attributes injected by browser extensions
 */

export const EXTENSION_ATTRIBUTES = [
  'data-dashlane-shadowhost',
  'data-dashlane-rid',
  'data-form-type',
  'data-dashlane-label'
];

/**
 * Use this function to filter out extension attributes from props
 */
export function filterExtensionProps(props: Record<string, any>) {
  const filteredProps = { ...props };
  
  EXTENSION_ATTRIBUTES.forEach(attr => {
    if (attr in filteredProps) {
      delete filteredProps[attr];
    }
  });
  
  return filteredProps;
}
