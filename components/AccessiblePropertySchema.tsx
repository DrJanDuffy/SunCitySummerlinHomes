
import React from 'react';
import StructuredData from './StructuredData';

const AccessiblePropertySchema: React.FC = () => {
  const accessiblePropertyData = {
    "@context": "https://schema.org",
    "@type": "PropertyValue",
    name: "Accessible Home Features in Sun City Summerlin",
    value: "Senior-friendly accessibility features",
    description: "Specialized search criteria for accessible homes in Sun City Summerlin, including single-story layouts, zero-step entries, wide doorways, walk-in showers, and other senior-friendly features.",
    propertyID: "accessible-features",
    valueReference: [
      {
        "@type": "PropertyValue",
        name: "Single Story",
        value: "Home with all living space on one level",
        description: "Properties with no stairs between living areas, ideal for aging in place"
      },
      {
        "@type": "PropertyValue",
        name: "Zero-Step Entry",
        value: "No steps at main entrance",
        description: "Entryway design that eliminates the need to navigate steps when entering the home"
      },
      {
        "@type": "PropertyValue",
        name: "Wide Doorways",
        value: "Doorways 36 inches or wider",
        description: "Accommodates wheelchairs, walkers, and other mobility assistance devices"
      },
      {
        "@type": "PropertyValue",
        name: "Walk-in Shower",
        value: "Curbless shower entry",
        description: "Bathroom feature allowing easy access without stepping over a tub wall or shower curb"
      },
      {
        "@type": "PropertyValue",
        name: "Low Maintenance",
        value: "Reduced exterior maintenance",
        description: "Properties with desert landscaping, smaller yards, or HOA-maintained exteriors"
      },
      {
        "@type": "PropertyValue",
        name: "Guest Suite",
        value: "Separate accommodations for visitors",
        description: "Additional bedroom and bathroom for visiting family and caregivers"
      },
      {
        "@type": "PropertyValue",
        name: "Golf Course View",
        value: "Property overlooking golf course",
        description: "Homes with views of one of Sun City Summerlin's golf courses"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(accessiblePropertyData)
      }}
    />
  );
};

export default AccessiblePropertySchema;
