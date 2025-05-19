
import React from 'react';
import dynamic from 'next/dynamic';

// Placeholder component while map is loading
const MapPlaceholder = () => (
  <div style={{ 
    height: '400px', 
    width: '100%', 
    backgroundColor: '#f0f0f0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8px'
  }}>
    <p>Map loading...</p>
  </div>
);

// The actual Map component that will only render on client-side
const Map = ({ zipcodes }: { zipcodes?: any[] }) => {
  // Your map implementation
  return (
    <div id="map" style={{ height: '400px', width: '100%', borderRadius: '8px' }}>
      {/* Map will be initialized here via useEffect */}
    </div>
  );
};

// Dynamic import with SSR disabled
const DynamicMap = dynamic(() => Promise.resolve(Map), {
  ssr: false,
  loading: MapPlaceholder,
});

export default DynamicMap;
