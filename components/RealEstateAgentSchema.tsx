
import React from 'react';
import StructuredData from './StructuredData';

const RealEstateAgentSchema: React.FC = () => {
  const realEstateAgentData = {
    name: "Dr. Jan Duffy, REALTOR",
    image: "/drjan-logo.png",
    url: "https://suncitysummerlin.com",
    telephone: "+17027180043",
    slogan: "Your Sun City Summerlin 55+ Community Specialist",
    description: "Specialized real estate services for the Sun City Summerlin 55+ community in Las Vegas, NV. Expert in senior home buying and selling with focus on accessibility, lifestyle, and community needs.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "9406 Del Webb Boulevard",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      postalCode: "89134",
      addressCountry: "US"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 36.2060,
      longitude: -115.2960
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "10:00",
        closes: "15:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "00:00",
        closes: "00:00",
        description: "By appointment only"
      }
    ],
    sameAs: [
      "https://www.facebook.com/drduffyrealtorhenderson/",
      "https://www.linkedin.com/company/centennialhills",
      "https://www.instagram.com/centennialhillsrealtor/",
      "https://x.com/drjanduffy",
      "https://www.tiktok.com/@dr.janduffy",
      "https://www.pinterest.com/bhhsluxury/"
    ],
    brand: {
      "@type": "Brand",
      name: "Berkshire Hathaway HomeServices Nevada Properties"
    },
    areaServed: [
      {
        "@type": "City",
        name: "Las Vegas",
        sameAs: "https://en.wikipedia.org/wiki/Las_Vegas"
      },
      {
        "@type": "Place",
        name: "Sun City Summerlin",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Las Vegas",
          addressRegion: "NV",
          postalCode: "89134"
        },
        description: "Premier 55+ active adult community in Las Vegas developed by Del Webb"
      }
    ],
    memberOf: [
      {
        "@type": "Organization",
        name: "National Association of REALTORS"
      },
      {
        "@type": "Organization",
        name: "Greater Las Vegas Association of REALTORS"
      },
      {
        "@type": "Organization",
        name: "Seniors Real Estate Specialist Council"
      }
    ],
    knowsAbout: [
      "55+ Communities in Las Vegas",
      "Sun City Summerlin",
      "Del Webb Properties",
      "Senior Housing",
      "Active Adult Communities",
      "VA Loans for Senior Veterans",
      "Senior Relocation",
      "Accessible Homes for Seniors",
      "Single-Story Properties",
      "Golf Course Communities"
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: "Doctor of Philosophy",
        educationalLevel: "Doctoral Degree"
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "professional",
        name: "REALTOR License #S.0197614.LLC",
        educationalLevel: "Professional License"
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certification",
        name: "Seniors Real Estate Specialist (SRES)",
        educationalLevel: "Professional Certification"
      }
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sun City Summerlin Buyer Representation",
          description: "Expert guidance for 55+ homebuyers seeking properties in Sun City Summerlin."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Luxury Property Sales",
          description: "Specialized marketing for premium homes in Las Vegas' premier 55+ community."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Senior Downsizing Services",
          description: "Complete coordination for transitions to right-sized retirement living."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "VA Loan Specialist",
          description: "Expert assistance for senior veterans using VA benefits for Sun City Summerlin homes."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "HOA Navigation",
          description: "Guidance on Sun City Summerlin's HOA requirements, fees, and regulations."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Senior-Accessible Home Search",
          description: "Specialized property searches for seniors focusing on single-story homes, zero-step entries, and other accessibility features."
        }
      }
    ]
  };

  return <StructuredData type="RealEstateAgent" data={realEstateAgentData} />;
};

export default RealEstateAgentSchema;
