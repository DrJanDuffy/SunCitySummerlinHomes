
import React from 'react';

interface StructuredDataProps {
  type: 'LocalBusiness' | 'RealEstateAgent' | 'Article' | 'FAQPage' | 'Service';
  data: any;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  let structuredData = {};

  switch (type) {
    case 'LocalBusiness':
    case 'RealEstateAgent':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': type,
        ...data
      };
      break;
    case 'Article':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        ...data
      };
      break;
    case 'FAQPage':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: data.questions.map((q: any) => ({
          '@type': 'Question',
          name: q.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: q.answer
          }
        }))
      };
      break;
    case 'Service':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        ...data
      };
      break;
    default:
      structuredData = {
        '@context': 'https://schema.org',
        '@type': type,
        ...data
      };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;
