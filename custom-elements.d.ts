
declare namespace JSX {
  interface IntrinsicElements {
    'realscout-office-listings': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      // Add the specific attributes you're using
      'agent-encoded-id'?: string;
      'sort-order'?: string;
      'listing-status'?: string;
      'property-types'?: string;
      'price-min'?: string;
      'price-max'?: string;
      // Add any other attributes that appear in your code
    };
    'realscout-home-value': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      'agent-encoded-id'?: string;
      'include-name'?: boolean;
      'include-phone'?: boolean;
      'loading'?: string;
    };
  }
}
