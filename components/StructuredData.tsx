import React from 'react';

type StructuredDataProps = {
  type: string;
  data: any;
};

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": type,
    ...data
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  );
};

export default StructuredData;