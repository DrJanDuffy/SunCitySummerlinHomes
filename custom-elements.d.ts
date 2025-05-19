
declare namespace JSX {
  interface IntrinsicElements {
    // Use 'any' to allow any attributes without having to list them all
    'realscout-office-listings': any;
    'realscout-home-value': any;
    'realscout-property-search': any;
    // Add any other RealScout components you might use
  }
}

// This tells TypeScript to ignore data attributes from extensions like Dashlane
interface HTMLElement {
  'data-dashlane-shadowhost'?: string;
  // Add other data attributes here as needed
}
